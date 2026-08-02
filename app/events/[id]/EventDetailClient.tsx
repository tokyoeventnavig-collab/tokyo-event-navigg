"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import type {
  EventItem,
} from "../../../lib/notion";

type EventDetailClientProps = {
  event: EventItem;
  allEvents: EventItem[];
  relatedEvents: EventItem[];
};

const FAVORITES_KEY =
  "tokyo-event-navi:favorites";

const HISTORY_KEY =
  "tokyo-event-navi:history";

const HISTORY_LIMIT = 10;

function readSavedIds(
  key: string,
): string[] {
  try {
    const storedValue =
      window.localStorage.getItem(key);

    const parsedValue =
      storedValue
        ? JSON.parse(storedValue)
        : [];

    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue.filter(
      (value): value is string =>
        typeof value === "string",
    );
  } catch {
    return [];
  }
}

function saveIds(
  key: string,
  values: string[],
) {
  try {
    window.localStorage.setItem(
      key,
      JSON.stringify(values),
    );
  } catch {
    // localStorageが使えない環境では保存しません。
  }
}

function splitEventTitle(
  title: string,
): {
  main: string;
  qualifier: string;
} {
  const normalizedTitle =
    title.trim();

  const bracketIndex =
    normalizedTitle.indexOf("【");

  if (bracketIndex <= 0) {
    return {
      main: normalizedTitle,
      qualifier: "",
    };
  }

  return {
    main:
      normalizedTitle
        .slice(0, bracketIndex)
        .trim(),

    qualifier:
      normalizedTitle
        .slice(bracketIndex)
        .trim(),
  };
}

function getEventTime(
  event: EventItem,
): string {
  if (
    event.startTime &&
    event.endTime
  ) {
    return `${event.startTime}〜${event.endTime}`;
  }

  return (
    event.startTime ||
    event.endTime ||
    "時間未定"
  );
}


function getEventStartDate(
  event: EventItem,
): Date | null {
  const source =
    event.dateStart ||
    event.dateISO ||
    "";

  if (!source) {
    return null;
  }

  const dateOnly =
    source.split("T")[0];

  const timeMatch =
    event.startTime.match(
      /(\d{1,2}):(\d{2})/,
    );

  const hour =
    timeMatch
      ? Number(timeMatch[1])
      : 12;

  const minute =
    timeMatch
      ? Number(timeMatch[2])
      : 0;

  const date =
    new Date(
      `${dateOnly}T${String(
        hour,
      ).padStart(
        2,
        "0",
      )}:${String(
        minute,
      ).padStart(
        2,
        "0",
      )}:00+09:00`,
    );

  return Number.isNaN(
    date.getTime(),
  )
    ? null
    : date;
}

function getEventEndDate(
  event: EventItem,
): Date | null {
  const startDate =
    getEventStartDate(event);

  if (!startDate) {
    return null;
  }

  const timeMatch =
    event.endTime.match(
      /(\d{1,2}):(\d{2})/,
    );

  if (!timeMatch) {
    return new Date(
      startDate.getTime() +
        2 * 60 * 60 * 1000,
    );
  }

  const endDate =
    new Date(startDate);

  endDate.setHours(
    Number(timeMatch[1]),
    Number(timeMatch[2]),
    0,
    0,
  );

  if (
    endDate.getTime() <=
    startDate.getTime()
  ) {
    endDate.setDate(
      endDate.getDate() + 1,
    );
  }

  return endDate;
}

function formatCalendarDate(
  date: Date,
): string {
  return date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");
}

function createCalendarDescription(
  event: EventItem,
): string {
  return [
    event.description,
    event.participationCondition,
    `申込み：${event.url}`,
  ]
    .filter(Boolean)
    .join("\\n\\n");
}

function EventSmallCard({
  event,
}: {
  event: EventItem;
}) {
  return (
    <article className="smallCard">
      <Link
        href={`/events/${event.id}`}
        className="smallImageLink"
      >
        <div className="smallImageWrap">
          {event.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={event.image}
              alt={event.title}
            />
          ) : (
            <div className="smallPlaceholder">
              TOKYO EVENT NAVI
            </div>
          )}
        </div>
      </Link>

      <div className="smallCardBody">
        {event.category && (
          <span className="smallCategory">
            {event.category}
          </span>
        )}

        <h3 className="smallTitle">
          <Link
            href={`/events/${event.id}`}
          >
            {event.title}
          </Link>
        </h3>

        <div className="smallMeta">
          <p>
            📅 {event.date || "開催日未定"}
          </p>

          <p>
            🕐 {getEventTime(event)}
          </p>

          <p>
            📍{" "}
            {event.location ||
              event.area ||
              "会場未定"}
          </p>
        </div>

        <Link
          href={`/events/${event.id}`}
          className="smallDetailButton"
        >
          詳細を見る
        </Link>
      </div>
    </article>
  );
}

export default function EventDetailClient({
  event,
  allEvents,
  relatedEvents,
}: EventDetailClientProps) {
  const [
    favoriteIds,
    setFavoriteIds,
  ] = useState<string[]>([]);

  const [
    historyIds,
    setHistoryIds,
  ] = useState<string[]>([]);

  const [
    copied,
    setCopied,
  ] = useState(false);

  const [
    calendarOpen,
    setCalendarOpen,
  ] = useState(false);

  const [
    shareOpen,
    setShareOpen,
  ] = useState(false);

  useEffect(() => {
    const savedFavorites =
      readSavedIds(FAVORITES_KEY);

    const savedHistory =
      readSavedIds(HISTORY_KEY);

    const nextHistory = [
      event.id,
      ...savedHistory.filter(
        (id) => id !== event.id,
      ),
    ].slice(0, HISTORY_LIMIT);

    setFavoriteIds(savedFavorites);
    setHistoryIds(nextHistory);

    saveIds(
      HISTORY_KEY,
      nextHistory,
    );
  }, [event.id]);

  const isFavorite =
    favoriteIds.includes(event.id);

  const recentEvents =
    useMemo(() => {
      const eventMap =
        new Map(
          allEvents.map(
            (item) => [
              item.id,
              item,
            ],
          ),
        );

      return historyIds
        .filter(
          (id) => id !== event.id,
        )
        .map(
          (id) => eventMap.get(id),
        )
        .filter(
          (
            item,
          ): item is EventItem =>
            Boolean(item),
        )
        .slice(0, 5);
    }, [
      allEvents,
      event.id,
      historyIds,
    ]);

  function toggleFavorite() {
    const nextFavorites =
      isFavorite
        ? favoriteIds.filter(
            (id) => id !== event.id,
          )
        : [
            event.id,
            ...favoriteIds,
          ];

    setFavoriteIds(nextFavorites);

    saveIds(
      FAVORITES_KEY,
      nextFavorites,
    );
  }

  async function copyCurrentUrl() {
    try {
      await navigator.clipboard.writeText(
        window.location.href,
      );

      setCopied(true);

      window.setTimeout(
        () => setCopied(false),
        1600,
      );
    } catch {
      setCopied(false);
    }
  }


  function openGoogleCalendar() {
    const startDate =
      getEventStartDate(event);

    const endDate =
      getEventEndDate(event);

    if (
      !startDate ||
      !endDate
    ) {
      return;
    }

    const parameters =
      new URLSearchParams({
        action: "TEMPLATE",
        text: event.title,
        dates:
          `${formatCalendarDate(
            startDate,
          )}/` +
          `${formatCalendarDate(
            endDate,
          )}`,
        details:
          createCalendarDescription(
            event,
          ),
        location:
          [
            event.location,
            event.venueAddress,
          ]
            .filter(Boolean)
            .join(" "),
      });

    window.open(
      `https://calendar.google.com/calendar/render?${parameters.toString()}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function downloadCalendarFile() {
    const startDate =
      getEventStartDate(event);

    const endDate =
      getEventEndDate(event);

    if (
      !startDate ||
      !endDate
    ) {
      return;
    }

    const escapeText = (
      value: string,
    ) =>
      value
        .replace(/\\/g, "\\\\")
        .replace(/\n/g, "\\n")
        .replace(/,/g, "\\,")
        .replace(/;/g, "\\;");

    const calendarContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Tokyo Event Navi//JP",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `UID:${event.id}@tokyo-event-navi`,
      `DTSTAMP:${formatCalendarDate(
        new Date(),
      )}`,
      `DTSTART:${formatCalendarDate(
        startDate,
      )}`,
      `DTEND:${formatCalendarDate(
        endDate,
      )}`,
      `SUMMARY:${escapeText(
        event.title,
      )}`,
      `DESCRIPTION:${escapeText(
        createCalendarDescription(
          event,
        ),
      )}`,
      `LOCATION:${escapeText(
        [
          event.location,
          event.venueAddress,
        ]
          .filter(Boolean)
          .join(" "),
      )}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob =
      new Blob(
        [calendarContent],
        {
          type:
            "text/calendar;charset=utf-8",
        },
      );

    const objectUrl =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = objectUrl;
    link.download =
      `${event.title}.ics`;

    document.body.appendChild(
      link,
    );

    link.click();
    link.remove();

    URL.revokeObjectURL(
      objectUrl,
    );
  }


  function getShareText() {
    return (
      `${event.title}\n` +
      `${event.date} ` +
      `${getEventTime(event)}\n` +
      `${window.location.href}`
    );
  }

  function shareToLine() {
    window.open(
      `https://line.me/R/msg/text/?${encodeURIComponent(
        getShareText(),
      )}`,
      "_blank",
      "noopener,noreferrer",
    );

    setShareOpen(false);
  }

  function shareToX() {
    const parameters =
      new URLSearchParams({
        text:
          `${event.title}\n` +
          `${event.date} ` +
          `${getEventTime(event)}`,
        url:
          window.location.href,
      });

    window.open(
      `https://twitter.com/intent/tweet?${parameters.toString()}`,
      "_blank",
      "noopener,noreferrer",
    );

    setShareOpen(false);
  }

  function shareByEmail() {
    const subject =
      encodeURIComponent(
        event.title,
      );

    const body =
      encodeURIComponent(
        getShareText(),
      );

    window.location.href =
      `mailto:?subject=${subject}&body=${body}`;

    setShareOpen(false);
  }

  async function copyShareUrl() {
    await copyCurrentUrl();
    setShareOpen(false);
  }

  async function shareEvent() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: event.title,
          text:
            `${event.title}\n` +
            `${event.date} ` +
            `${getEventTime(event)}`,
          url: window.location.href,
        });

        setShareOpen(false);
        return;
      } catch {
        return;
      }
    }

    await copyCurrentUrl();
    setShareOpen(false);
  }

  const titleParts =
    splitEventTitle(
      event.title,
    );

  return (
    <main className="detailPage">
      <header className="siteHeader">
        <div className="headerInner">
          <Link
            href="/"
            className="siteLogo"
          >
            <small>
              TOKYO EVENT NAVI
            </small>

            <strong>
              東京イベントナビ
            </strong>
          </Link>

          <nav className="headerNavigation">
            <Link
              href="/favorites"
            >
              ♡ お気に入り
            </Link>

            <Link
              href="/recent"
            >
              ◷ 最近見た
            </Link>

            <Link
              href="/"
              className="backButton"
            >
              イベント一覧
            </Link>
          </nav>
        </div>
      </header>

      <section className="heroSection">
        <div className="heroGrid">
          <div className="flyerColumn">
            <div className="flyerFrame">
              <div className="flyerImage">
                {event.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={event.image}
                    alt={event.title}
                  />
                ) : (
                  <div className="flyerPlaceholder">
                    TOKYO EVENT NAVI
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="detailColumn">
            <div className="badges">
              {event.category && (
                <span className="categoryBadge">
                  {event.category}
                </span>
              )}

              {event.verified && (
                <span className="verifiedBadge">
                  <strong>✓</strong>
                  認証済み
                </span>
              )}
            </div>

            <h1>
              <span className="titleMain">
                {titleParts.main}
              </span>

              {titleParts.qualifier && (
                <span className="titleQualifier">
                  {titleParts.qualifier}
                </span>
              )}
            </h1>

            <p className="leadText">
              気になるイベントを見つけたら、公式LINEから簡単にお申し込みいただけます。
              <br />
              開催内容をご確認のうえ、お気軽にお問い合わせください。
            </p>

            <div className="quickActions">
              <button
                type="button"
                className={
                  isFavorite
                    ? "favoriteButton active"
                    : "favoriteButton"
                }
                onClick={toggleFavorite}
              >
                <span>
                  {isFavorite
                    ? "♥"
                    : "♡"}
                </span>

                {isFavorite
                  ? "保存済み"
                  : "お気に入り"}
              </button>

              <div className="actionMenu">
                <button
                  type="button"
                  className="calendarButton"
                  onClick={() => {
                    setCalendarOpen(
                      (current) =>
                        !current,
                    );

                    setShareOpen(false);
                  }}
                  aria-expanded={
                    calendarOpen
                  }
                >
                  📅 カレンダー追加
                </button>

                {calendarOpen && (
                  <div className="actionOptions calendarOptions">
                    <button
                      type="button"
                      onClick={() => {
                        openGoogleCalendar();
                        setCalendarOpen(false);
                      }}
                    >
                      Googleカレンダー
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        downloadCalendarFile();
                        setCalendarOpen(false);
                      }}
                    >
                      Apple・Outlook
                    </button>
                  </div>
                )}
              </div>

              <div className="actionMenu">
                <button
                  type="button"
                  onClick={() => {
                    setShareOpen(
                      (current) =>
                        !current,
                    );

                    setCalendarOpen(false);
                  }}
                  aria-expanded={
                    shareOpen
                  }
                >
                  ↗ 共有する
                </button>

                {shareOpen && (
                  <div className="actionOptions shareOptions">
                    <button
                      type="button"
                      onClick={shareToLine}
                    >
                      LINEで送る
                    </button>

                    <button
                      type="button"
                      onClick={shareToX}
                    >
                      Xで共有
                    </button>

                    <button
                      type="button"
                      onClick={shareByEmail}
                    >
                      メールで送る
                    </button>

                    <button
                      type="button"
                      onClick={copyShareUrl}
                    >
                      {copied
                        ? "コピーしました"
                        : "URLをコピー"}
                    </button>

                    <button
                      type="button"
                      onClick={shareEvent}
                    >
                      その他のアプリ
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="eventFacts">
              <div className="factRow">
                <span>📅</span>

                <div>
                  <small>開催日</small>
                  <strong>
                    {event.date || "未定"}
                  </strong>
                </div>
              </div>

              <div className="factRow">
                <span>🕐</span>

                <div>
                  <small>開催時間</small>
                  <strong>
                    {getEventTime(event)}
                  </strong>
                </div>
              </div>

              <div className="factRow">
                <span>📍</span>

                <div>
                  <small>会場</small>
                  <strong>
                    {event.location || "未定"}
                  </strong>

                  {event.venueAddress && (
                    <p>
                      {event.venueAddress}
                    </p>
                  )}
                </div>
              </div>

              {event.organizer && (
                <div className="factRow">
                  <span>👤</span>

                  <div>
                    <small>主催者</small>
                    <strong>
                      {event.organizer}
                    </strong>

                    {event.verified && (
                      <p className="verifiedText">
                        本人・運営情報確認済み
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <a
              href={event.url}
              target="_blank"
              rel="noreferrer"
              className="mainApplicationButton"
            >
              <span>
                公式LINEから申し込む
              </span>

              <strong>→</strong>
            </a>

            <p className="applicationNote">
              LINEを開き、参加希望の
              イベント名をお送りください。
            </p>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="contentGrid">
          <div className="mainColumn">
            {event.description && (
              <article className="contentCard">
                <p className="eyebrow">
                  EVENT DESCRIPTION
                </p>

                <h2>
                  イベントについて
                </h2>

                <div className="longText">
                  {event.description}
                </div>
              </article>
            )}

            {event.participationCondition && (
              <article className="contentCard">
                <p className="eyebrow">
                  PARTICIPATION
                </p>

                <h2>
                  参加条件・注意事項
                </h2>

                <div className="longText">
                  {event.participationCondition}
                </div>
              </article>
            )}
          </div>

          <aside className="sideColumn">
            <div className="sideApplicationCard">
              <p className="eyebrow">
                APPLICATION
              </p>

              <h2>
                参加してみませんか？
              </h2>

              <p>
                内容と日時をご確認のうえ、
                申込みページへお進みください。
              </p>

              <a
                href={event.url}
                target="_blank"
                rel="noreferrer"
              >
                このイベントに申し込む
                <strong>→</strong>
              </a>

              <button
                type="button"
                onClick={toggleFavorite}
              >
                {isFavorite
                  ? "♥ お気に入り保存済み"
                  : "♡ あとで見る"}
              </button>
            </div>
          </aside>
        </div>
      </section>

      {relatedEvents.length > 0 && (
        <section className="relatedSection">
          <div className="compactContainer">
            <div className="sectionHead compactHead">
              <p>RECOMMENDED</p>
              <h2>
                このイベントに似たイベント
              </h2>
            </div>

            <div className="smallCardGrid">
              {relatedEvents.map(
                (relatedEvent) => (
                  <EventSmallCard
                    key={relatedEvent.id}
                    event={relatedEvent}
                  />
                ),
              )}
            </div>
          </div>
        </section>
      )}

      <section className="recentSection">
        <div className="compactContainer">
          <div className="sectionHead compactHead">
            <p>RECENTLY VIEWED</p>
            <h2>
              最近チェックしたイベント
            </h2>
          </div>

          {recentEvents.length > 0 ? (
            <div className="smallCardGrid">
              {recentEvents.map(
                (recentEvent) => (
                  <EventSmallCard
                    key={recentEvent.id}
                    event={recentEvent}
                  />
                ),
              )}
            </div>
          ) : (
            <div className="emptyHistory">
              他のイベントを閲覧すると、
              最近チェックしたイベントが
              ここに表示されます。
            </div>
          )}
        </div>
      </section>

      <div className="mobileStickyBar">
        <button
          type="button"
          onClick={toggleFavorite}
          aria-label="お気に入り"
        >
          {isFavorite ? "♥" : "♡"}
        </button>

        <a
          href={event.url}
          target="_blank"
          rel="noreferrer"
        >
          このイベントに申し込む
        </a>
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        .detailPage {
          min-height: 100vh;
          background: #f5f5f3;
          color: #111111;
        }

        .siteHeader {
          background: #0d0d0d;
          border-bottom:
            1px solid #292929;
        }

        .headerInner {
          width: min(
            1080px,
            calc(100% - 40px)
          );
          min-height: 72px;
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          margin: 0 auto;
        }

        .siteLogo {
          display: grid;
          gap: 3px;
          color: #ffffff;
          text-decoration: none;
        }

        .siteLogo small {
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.22em;
          opacity: 0.65;
        }

        .siteLogo strong {
          font-size: 15px;
          font-weight: 900;
        }

        .headerNavigation {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .headerNavigation > a {
          padding: 10px 13px;
          border:
            1px solid #363636;
          border-radius: 999px;
          color: #d7d7d7;
          font-size: 9px;
          font-weight: 800;
          text-decoration: none;
        }

        .backButton {
          padding: 10px 17px;
          border:
            1px solid #454545;
          border-radius: 999px;
          color: #ffffff;
          font-size: 10px;
          font-weight: 800;
          text-decoration: none;
        }

        .heroSection {
          padding: 48px 0 58px;
          background: #0d0d0d;
          color: #ffffff;
        }

        .heroGrid {
          width: min(
            1080px,
            calc(100% - 40px)
          );
          display: grid;
          grid-template-columns:
            minmax(0, 0.92fr)
            minmax(0, 1.08fr);
          align-items: center;
          gap: 42px;
          margin: 0 auto;
        }

        .flyerColumn {
          display: flex;
          justify-content: center;
        }

        .flyerFrame {
          width: min(
            100%,
            520px
          );
          padding: 0;
          overflow: hidden;
          border-radius: 21px;
          background: #ffffff;
        }

        .flyerImage {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 4.85;
          overflow: hidden;
          background: #e9e9e9;
        }

        .flyerImage img {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          background: #ffffff;
        }

        .flyerPlaceholder {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: #888888;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.14em;
        }

        .detailColumn {
          min-width: 0;
        }

        .badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .categoryBadge,
        .verifiedBadge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 9px;
          font-weight: 900;
        }

        .categoryBadge {
          background: #ffffff;
          color: #111111;
        }

        .verifiedBadge {
          border:
            1px solid #555555;
          background: #181818;
          color: #ffffff;
        }

        .verifiedBadge strong {
          width: 16px;
          height: 16px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #ffffff;
          color: #111111;
          font-size: 9px;
        }

        .detailColumn h1 {
          width: 100%;
          max-width: 640px;
          margin: 0;
          color: #ffffff;
          font-size: clamp(
            34px,
            3.65vw,
            48px
          );
          line-height: 1.34;
          letter-spacing: -0.035em;
        }

        .titleMain {
          display: block;
          word-break: keep-all;
          overflow-wrap: normal;
        }

        .titleQualifier {
          display: block;
          white-space: nowrap;
          word-break: keep-all;
        }

        .leadText {
          width: 100%;
          max-width: 610px;
          margin: 24px 0 0;
          color: #aaaaaa;
          font-size: 12px;
          line-height: 2;
          word-break: normal;
          overflow-wrap: break-word;
          line-break: strict;
        }

        .quickActions {
          display: grid;
          grid-template-columns:
            repeat(
              3,
              minmax(0, auto)
            );
          justify-content: start;
          gap: 8px;
          margin: 21px 0 24px;
        }

        .quickActions button {
          min-height: 38px;
          padding: 0 13px;
          border:
            1px solid #3a3a3a;
          border-radius: 9px;
          background: #171717;
          color: #d8d8d8;
          cursor: pointer;
          font-family: inherit;
          font-size: 9px;
          font-weight: 800;
        }

        .quickActions button:hover {
          border-color: #ffffff;
          color: #ffffff;
        }

        .quickActions
          .favoriteButton.active {
          border-color: #ffffff;
          background: #ffffff;
          color: #111111;
        }

        .actionMenu {
          position: relative;
        }

        .actionMenu > button {
          width: 100%;
        }

        .actionOptions {
          position: absolute;
          z-index: 60;
          top: calc(100% + 5px);
          left: 0;
          min-width: 175px;
          display: grid;
          overflow: hidden;
          border: 1px solid #3a3a3a;
          border-radius: 9px;
          background: #171717;
          box-shadow:
            0 14px 28px
            rgba(0, 0, 0, 0.32);
        }

        .shareOptions {
          min-width: 165px;
        }

        .actionOptions button {
          width: 100%;
          min-height: 41px;
          padding: 0 13px;
          border: 0;
          border-bottom:
            1px solid #303030;
          border-radius: 0;
          background: #171717;
          color: #ffffff;
          cursor: pointer;
          font-family: inherit;
          font-size: 9px;
          font-weight: 800;
          text-align: left;
        }

        .actionOptions button:last-child {
          border-bottom: 0;
        }

        .actionOptions button:hover {
          background: #ffffff;
          color: #111111;
        }

        .quickActions span {
          margin-right: 4px;
        }

        .eventFacts {
          border-top:
            1px solid #343434;
        }

        .factRow {
          display: grid;
          grid-template-columns:
            25px minmax(0, 1fr);
          gap: 13px;
          padding: 16px 0;
          border-bottom:
            1px solid #343434;
        }

        .factRow > span {
          padding-top: 3px;
          font-size: 14px;
        }

        .factRow > div {
          min-width: 0;
          display: grid;
          gap: 4px;
        }

        .factRow small {
          color: #737373;
          font-size: 8px;
          font-weight: 700;
        }

        .factRow strong {
          color: #ffffff;
          font-size: 13px;
          line-height: 1.55;
        }

        .factRow p {
          margin: 0;
          color: #909090;
          font-size: 9px;
          line-height: 1.6;
        }

        .verifiedText {
          color: #cfcfcf !important;
          font-weight: 800;
        }

        .mainApplicationButton {
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          margin-top: 27px;
          padding: 17px 19px;
          border-radius: 11px;
          background: #ffffff;
          color: #111111;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .mainApplicationButton strong {
          font-size: 18px;
        }

        .applicationNote {
          margin: 10px 0 0;
          color: #777777;
          font-size: 8px;
          text-align: center;
        }

        .contentSection {
          padding: 72px 0;
          background: #f5f5f3;
        }

        .contentGrid {
          width: min(
            1080px,
            calc(100% - 40px)
          );
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            310px;
          align-items: start;
          gap: 24px;
          margin: 0 auto;
        }

        .mainColumn {
          display: grid;
          gap: 18px;
        }

        .contentCard {
          padding: 27px;
          border:
            1px solid #e1e1dd;
          border-radius: 15px;
          background: #ffffff;
        }

        .eyebrow,
        .sectionHead p {
          margin: 0 0 7px;
          color: #777777;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 0.19em;
        }

        .contentCard h2,
        .sideApplicationCard h2,
        .sectionHead h2 {
          margin: 0;
        }

        .contentCard h2 {
          font-size: 23px;
        }

        .longText {
          margin-top: 18px;
          color: #555555;
          font-size: 13px;
          line-height: 2;
          white-space: pre-wrap;
        }

        .sideColumn {
          position: sticky;
          top: 20px;
        }

        .sideApplicationCard {
          padding: 22px;
          border-radius: 15px;
          background: #111111;
          color: #ffffff;
        }

        .sideApplicationCard h2 {
          font-size: 20px;
        }

        .sideApplicationCard > p:not(.eyebrow) {
          margin: 12px 0 18px;
          color: #aaaaaa;
          font-size: 10px;
          line-height: 1.8;
        }

        .sideApplicationCard a {
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          padding: 14px;
          border-radius: 9px;
          background: #ffffff;
          color: #111111;
          font-size: 10px;
          font-weight: 900;
          text-decoration: none;
        }

        .sideApplicationCard button {
          width: 100%;
          margin-top: 9px;
          padding: 12px;
          border:
            1px solid #3f3f3f;
          border-radius: 9px;
          background: transparent;
          color: #ffffff;
          cursor: pointer;
          font-family: inherit;
          font-size: 9px;
          font-weight: 800;
        }

        .relatedSection,
        .recentSection {
          padding: 44px 0 55px;
        }

        .relatedSection {
          background: #ffffff;
          border-top:
            1px solid #ececea;
        }

        .recentSection {
          background: #f5f5f3;
          border-top:
            1px solid #e7e7e3;
        }

        .compactContainer {
          width: min(
            960px,
            calc(100% - 40px)
          );
          margin: 0 auto;
        }

        .sectionHead,
        .compactHead {
          display: block;
          width: 100%;
          margin-bottom: 17px;
          text-align: left;
        }

        .sectionHead p,
        .compactHead p {
          display: block;
          width: 100%;
          margin: 0 0 7px;
          text-align: left;
        }

        .sectionHead h2,
        .compactHead h2 {
          display: block;
          width: 100%;
          margin: 0;
          color: #111111;
          font-size: 20px;
          line-height: 1.4;
          text-align: left;
        }

        .smallCardGrid {
          display: grid;
          grid-template-columns:
            repeat(
              5,
              minmax(0, 1fr)
            );
          gap: 10px;
          align-items: stretch;
        }

        .smallCard {
          min-width: 0;
          width: 100%;
          height: 100%;
          margin: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border:
            1px solid #e3e3df;
          border-radius: 10px;
          background: #ffffff;
        }

        .smallImageLink {
          display: block;
          width: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: #eeeeec;
          text-decoration: none;
        }

        .smallImageWrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
        }

        .smallImageWrap img {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          max-width: none;
          max-height: none;
          margin: 0;
          padding: 0;
        }

        .smallPlaceholder {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: #999999;
          font-size: 6px;
          font-weight: 900;
        }

        .smallCardBody {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          padding: 9px;
        }

        .smallCategory {
          display: inline-flex;
          width: fit-content;
          max-width: 100%;
          margin-bottom: 6px;
          padding: 4px 7px;
          overflow: hidden;
          border-radius: 999px;
          background: #efefed;
          color: #555555;
          font-size: 7px;
          font-weight: 800;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .smallTitle {
          display: -webkit-box;
          min-height: 34px;
          margin: 0 0 7px;
          overflow: hidden;
          color: #111111;
          font-size: 10px;
          line-height: 1.65;
          -webkit-box-orient:
            vertical;
          -webkit-line-clamp: 2;
        }

        .smallTitle a {
          color: inherit;
          text-decoration: none;
        }

        .smallMeta {
          min-height: 48px;
          display: grid;
          align-content: start;
          gap: 4px;
          margin-bottom: 8px;
        }

        .smallMeta p {
          margin: 0;
          overflow: hidden;
          color: #777777;
          font-size: 7px;
          line-height: 1.45;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .smallDetailButton {
          display: block;
          margin-top: auto;
          padding: 7px;
          border-radius: 6px;
          background: #111111;
          color: #ffffff;
          text-align: center;
          font-size: 7px;
          font-weight: 800;
          text-decoration: none;
        }

        .emptyHistory {
          padding: 27px 18px;
          border:
            1px solid #e2e2df;
          border-radius: 11px;
          background: #ffffff;
          color: #777777;
          text-align: center;
          font-size: 10px;
          line-height: 1.8;
        }

        .mobileStickyBar {
          display: none;
        }

        @media (
          max-width: 1120px
        ) {
          .detailColumn h1 {
            font-size: clamp(
              31px,
              3.6vw,
              44px
            );
          }
        }

        @media (
          max-width: 900px
        ) {
          .heroGrid,
          .contentGrid {
            grid-template-columns: 1fr;
          }

          .detailColumn {
            width: 100%;
          }

          .sideColumn {
            position: static;
          }

          .smallCardGrid {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );
          }
        }

        @media (
          max-width: 640px
        ) {
          .headerInner,
          .heroGrid,
          .contentGrid,
          .compactContainer {
            width:
              calc(100% - 24px);
          }

          .headerNavigation {
            gap: 5px;
          }

          .headerNavigation > a {
            padding: 8px 9px;
            font-size: 7px;
          }

          .heroSection {
            padding: 28px 0 40px;
          }

          .heroGrid {
            gap: 30px;
          }

          .flyerFrame {
            width: 100%;
            max-width: 460px;
          }

          .detailColumn h1 {
            font-size: 30px;
          }

          .titleQualifier {
            white-space: normal;
          }

          .leadText {
            font-size: 11px;
          }

          .quickActions {
            grid-template-columns:
              1fr;
          }

          .quickActions button {
            width: 100%;
            padding: 0 10px;
          }

          .actionOptions {
            right: 0;
            left: 0;
            min-width: 0;
          }

          .contentSection {
            padding: 43px 0 82px;
          }

          .contentCard {
            padding: 20px;
          }

          .smallCardGrid {
            display: flex;
            gap: 9px;
            overflow-x: auto;
            padding-bottom: 8px;
            scroll-snap-type:
              x mandatory;
            scrollbar-width: thin;
          }

          .smallCard {
            flex:
              0 0
              min(
                72vw,
                245px
              );
            scroll-snap-align:
              start;
          }

          .relatedSection,
          .recentSection {
            padding: 38px 0 50px;
          }

          .mobileStickyBar {
            position: fixed;
            z-index: 100;
            right: 0;
            bottom: 0;
            left: 0;
            display: grid;
            grid-template-columns:
              54px minmax(0, 1fr);
            gap: 8px;
            padding:
              9px 11px
              calc(
                9px +
                env(
                  safe-area-inset-bottom
                )
              );
            border-top:
              1px solid #dcdcd8;
            background:
              rgba(
                255,
                255,
                255,
                0.96
              );
            box-shadow:
              0 -8px 24px
              rgba(
                0,
                0,
                0,
                0.1
              );
            backdrop-filter:
              blur(12px);
          }

          .mobileStickyBar button,
          .mobileStickyBar a {
            min-height: 49px;
            display: grid;
            place-items: center;
            border-radius: 9px;
          }

          .mobileStickyBar button {
            border:
              1px solid #dcdcd8;
            background: #ffffff;
            color: #111111;
            font-size: 22px;
          }

          .mobileStickyBar a {
            background: #111111;
            color: #ffffff;
            font-size: 12px;
            font-weight: 900;
            text-align: center;
            text-decoration: none;
          }
        }

        @media (
          max-width: 370px
        ) {
          .smallCardGrid {
            grid-template-columns:
              1fr;
          }
        }
      `}</style>
    </main>
  );
}
