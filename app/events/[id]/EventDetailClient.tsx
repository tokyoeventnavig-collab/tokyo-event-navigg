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
      window.localStorage.getItem(
        key,
      );

    const parsedValue =
      storedValue
        ? JSON.parse(storedValue)
        : [];

    if (
      !Array.isArray(
        parsedValue,
      )
    ) {
      return [];
    }

    return parsedValue.filter(
      (
        value,
      ): value is string =>
        typeof value ===
        "string",
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
    /*
     * localStorageが利用できない環境では
     * 保存処理を行いません。
     */
  }
}

function getEventTime(
  event: EventItem,
): string {
  if (
    event.startTime &&
    event.endTime
  ) {
    return `${event.startTime} 〜 ${event.endTime}`;
  }

  return (
    event.startTime ||
    event.endTime ||
    "時間未定"
  );
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
            📅{" "}
            {event.date ||
              "開催日未定"}
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

  /*
   * ページを開いたときに、
   * お気に入り情報と閲覧履歴を読み込みます。
   */
  useEffect(() => {
    const savedFavorites =
      readSavedIds(
        FAVORITES_KEY,
      );

    const savedHistory =
      readSavedIds(
        HISTORY_KEY,
      );

    const nextHistory = [
      event.id,
      ...savedHistory.filter(
        (id) =>
          id !== event.id,
      ),
    ].slice(
      0,
      HISTORY_LIMIT,
    );

    setFavoriteIds(
      savedFavorites,
    );

    setHistoryIds(
      nextHistory,
    );

    saveIds(
      HISTORY_KEY,
      nextHistory,
    );
  }, [event.id]);

  const isFavorite =
    favoriteIds.includes(
      event.id,
    );

  /*
   * 保存済みの閲覧履歴IDと、
   * 現在取得できるイベントを照合します。
   */
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
          (id) =>
            id !== event.id,
        )
        .map((id) =>
          eventMap.get(id),
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
            (id) =>
              id !== event.id,
          )
        : [
            event.id,
            ...favoriteIds,
          ];

    setFavoriteIds(
      nextFavorites,
    );

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
        () =>
          setCopied(false),
        1600,
      );
    } catch {
      setCopied(false);
    }
  }

  async function shareEvent() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: event.title,

          text:
            `${event.title}\n` +
            `${event.date} ` +
            `${getEventTime(
              event,
            )}`,

          url:
            window.location.href,
        });

        return;
      } catch {
        return;
      }
    }

    await copyCurrentUrl();
  }

  return (
    <main className="detailPage">
      <header className="siteHeader">
        <div className="headerInner">
          <Link
            href="/"
            className="siteLogo"
          >
            <span>東京</span>
            イベントナビ
          </Link>

          <Link
            href="/"
            className="backButton"
          >
            イベント一覧へ
          </Link>
        </div>
      </header>

      <section className="heroSection">
        <div className="heroGrid">
          <div className="flyerCard">
            <div className="flyerImage">
              {event.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={
                    event.image
                  }
                  alt={
                    event.title
                  }
                />
              ) : (
                <div className="flyerPlaceholder">
                  TOKYO EVENT NAVI
                </div>
              )}
            </div>
          </div>

          <div className="heroContent">
            <div className="badges">
              {event.category && (
                <span className="categoryBadge">
                  {event.category}
                </span>
              )}

              {event.verified && (
                <span className="verifiedBadge">
                  <strong>
                    ✓
                  </strong>

                  東京イベントナビ認証
                </span>
              )}
            </div>

            <h1>
              {event.title}
            </h1>

            <div className="actionButtons">
              <button
                type="button"
                className={
                  isFavorite
                    ? "favoriteButton active"
                    : "favoriteButton"
                }
                onClick={
                  toggleFavorite
                }
              >
                <span>
                  {isFavorite
                    ? "♥"
                    : "♡"}
                </span>

                {isFavorite
                  ? "お気に入り保存済み"
                  : "お気に入りに保存"}
              </button>

              <button
                type="button"
                className="shareButton"
                onClick={
                  shareEvent
                }
              >
                ↗ 共有する
              </button>

              <button
                type="button"
                className="copyButton"
                onClick={
                  copyCurrentUrl
                }
              >
                {copied
                  ? "コピーしました"
                  : "リンクをコピー"}
              </button>
            </div>

            <div className="summaryCard">
              <div className="summaryRow">
                <span>
                  📅
                </span>

                <div>
                  <small>
                    開催日
                  </small>

                  <strong>
                    {event.date ||
                      "未定"}
                  </strong>
                </div>
              </div>

              <div className="summaryRow">
                <span>
                  🕐
                </span>

                <div>
                  <small>
                    開催時間
                  </small>

                  <strong>
                    {getEventTime(
                      event,
                    )}
                  </strong>
                </div>
              </div>

              <div className="summaryRow">
                <span>
                  📍
                </span>

                <div>
                  <small>
                    会場
                  </small>

                  <strong>
                    {event.location ||
                      "未定"}
                  </strong>

                  {event.venueAddress && (
                    <p>
                      {
                        event.venueAddress
                      }
                    </p>
                  )}
                </div>
              </div>

              {event.organizer && (
                <div className="summaryRow">
                  <span>
                    👤
                  </span>

                  <div>
                    <small>
                      主催者
                    </small>

                    <strong>
                      {
                        event.organizer
                      }
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
                  {
                    event.description
                  }
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
                  {
                    event.participationCondition
                  }
                </div>
              </article>
            )}
          </div>

          <aside className="sideColumn">
            <div className="applicationCard">
              <p className="eyebrow">
                APPLICATION
              </p>

              <h2>
                参加してみませんか？
              </h2>

              <p className="applicationDescription">
                内容と日時を
                ご確認のうえ、
                申込みページへ
                お進みください。
              </p>

              <a
                href={event.url}
                target="_blank"
                rel="noreferrer"
                className="applicationButton"
              >
                <span>
                  このイベントに
                  申し込む
                </span>

                <strong>
                  →
                </strong>
              </a>

              <button
                type="button"
                className="sideFavoriteButton"
                onClick={
                  toggleFavorite
                }
              >
                {isFavorite
                  ? "♥ お気に入り保存済み"
                  : "♡ あとで見る"}
              </button>
            </div>
          </aside>
        </div>
      </section>

      {relatedEvents.length >
        0 && (
        <section className="relatedSection">
          <div className="container">
            <div className="sectionHead">
              <p>
                RECOMMENDED
              </p>

              <h2>
                このイベントに似た
                イベント
              </h2>
            </div>

            <div className="smallCardGrid">
              {relatedEvents.map(
                (relatedEvent) => (
                  <EventSmallCard
                    key={
                      relatedEvent.id
                    }
                    event={
                      relatedEvent
                    }
                  />
                ),
              )}
            </div>
          </div>
        </section>
      )}

      <section className="recentSection">
        <div className="container">
          <div className="sectionHead">
            <p>
              RECENTLY VIEWED
            </p>

            <h2>
              最近チェックした
              イベント
            </h2>
          </div>

          {recentEvents.length >
          0 ? (
            <div className="smallCardGrid">
              {recentEvents.map(
                (recentEvent) => (
                  <EventSmallCard
                    key={
                      recentEvent.id
                    }
                    event={
                      recentEvent
                    }
                  />
                ),
              )}
            </div>
          ) : (
            <div className="emptyHistory">
              他のイベントを
              閲覧すると、
              最近チェックした
              イベントが
              ここに表示されます。
            </div>
          )}
        </div>
      </section>

      <div className="mobileStickyBar">
        <button
          type="button"
          onClick={
            toggleFavorite
          }
          aria-label="お気に入り"
        >
          {isFavorite
            ? "♥"
            : "♡"}
        </button>

        <a
          href={event.url}
          target="_blank"
          rel="noreferrer"
        >
          このイベントに
          申し込む
        </a>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .detailPage {
          min-height: 100vh;
          background: #f7f7f5;
          color: #17243b;
        }

        .siteHeader {
          border-bottom:
            1px solid #ebe8e2;
          background: #fff;
        }

        .headerInner,
        .heroGrid,
        .contentGrid,
        .container {
          width: min(
            1120px,
            calc(100% - 40px)
          );
          margin: 0 auto;
        }

        .headerInner {
          min-height: 70px;
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          gap: 20px;
        }

        .siteLogo {
          color: #17243b;
          font-size: 19px;
          font-weight: 900;
          text-decoration: none;
        }

        .siteLogo span {
          color: #111111;
        }

        .backButton {
          padding: 10px 14px;
          border-radius: 9px;
          background: #17243b;
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          text-decoration: none;
        }

        .heroSection {
          overflow: hidden;
          padding: 42px 0 52px;
          background: #ffffff;
          border-bottom: 1px solid #ececea;
        }

        .heroGrid {
          display: grid;
          grid-template-columns:
            minmax(0, 0.92fr)
            minmax(0, 1.08fr);
          align-items: start;
          gap: 42px;
        }

        .flyerCard {
          padding: 8px;
          border: 1px solid #e8e8e5;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.07);
          transform: none;
        }

        .flyerImage {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 12px;
          background: #eee;
        }

        .flyerImage :global(img) {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .flyerPlaceholder {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: #999;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.14em;
        }

        .badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .categoryBadge,
        .verifiedBadge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 900;
        }

        .categoryBadge {
          background: #f1f1ef;
          color: #222222;
        }

        .verifiedBadge {
          background: #e6f6ed;
          color: #18764d;
        }

        .verifiedBadge strong {
          width: 17px;
          height: 17px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #239863;
          color: #fff;
          font-size: 10px;
        }

        .heroContent h1 {
          margin: 0;
          color: #17243b;
          font-size: clamp(
            32px,
            4.5vw,
            54px
          );
          line-height: 1.28;
          letter-spacing: -0.045em;
        }

        .actionButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 23px 0;
        }

        .actionButtons button {
          min-height: 42px;
          padding: 0 14px;
          border: 1px solid #dedbd5;
          border-radius: 10px;
          background: #fff;
          color: #444;
          cursor: pointer;
          font-family: inherit;
          font-size: 10px;
          font-weight: 800;
        }

        .favoriteButton.active {
          border-color: #ed9ba6;
          background: #fff0f2;
          color: #cf3d50;
        }

        .favoriteButton span {
          margin-right: 5px;
          font-size: 17px;
        }

        .summaryCard {
          display: grid;
          gap: 12px;
          padding: 18px;
          border: 1px solid #e5e5e2;
          border-radius: 14px;
          background: #fafaf8;
          box-shadow: none;
        }

        .summaryRow {
          display: grid;
          grid-template-columns:
            30px minmax(0, 1fr);
          gap: 10px;
          align-items: start;
        }

        .summaryRow > span {
          font-size: 17px;
        }

        .summaryRow > div {
          min-width: 0;
          display: grid;
          gap: 3px;
        }

        .summaryRow small {
          color: #979ba2;
          font-size: 9px;
          font-weight: 700;
        }

        .summaryRow strong {
          color: #17243b;
          font-size: 13px;
          line-height: 1.55;
        }

        .summaryRow p {
          margin: 0;
          color: #6c7480;
          font-size: 10px;
          line-height: 1.55;
        }

        .summaryRow
          .verifiedText {
          color: #218558;
          font-weight: 800;
        }

        .contentSection {
          padding: 54px 0;
        }

        .contentGrid {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            300px;
          align-items: start;
          gap: 28px;
        }

        .mainColumn {
          display: grid;
          gap: 20px;
        }

        .contentCard,
        .applicationCard {
          border: 1px solid #e5e3de;
          border-radius: 18px;
          background: #fff;
          box-shadow:
            0 10px 28px
            rgba(
              0,
              0,
              0,
              0.045
            );
        }

        .contentCard {
          padding: 28px;
        }

        .eyebrow,
        .sectionHead p {
          margin: 0 0 7px;
          color: #111111;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.18em;
        }

        .contentCard h2,
        .applicationCard h2,
        .sectionHead h2 {
          margin: 0;
        }

        .contentCard h2 {
          font-size: 25px;
        }

        .longText {
          margin-top: 19px;
          color: #515a67;
          font-size: 14px;
          line-height: 2;
          white-space: pre-wrap;
        }

        .sideColumn {
          position: sticky;
          top: 22px;
        }

        .applicationCard {
          padding: 24px;
          background: #17243b;
          color: #fff;
        }

        .applicationCard h2 {
          font-size: 23px;
        }

        .applicationDescription {
          margin: 13px 0 21px;
          color: #bcc4cf;
          font-size: 11px;
          line-height: 1.8;
        }

        .applicationButton {
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          gap: 10px;
          padding: 16px;
          border-radius: 11px;
          background: #111111;
          color: #fff;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .applicationButton strong {
          font-size: 18px;
        }

        .sideFavoriteButton {
          width: 100%;
          margin-top: 10px;
          padding: 13px;
          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.22
            );
          border-radius: 10px;
          background: transparent;
          color: #fff;
          cursor: pointer;
          font-family: inherit;
          font-size: 10px;
          font-weight: 800;
        }

        .relatedSection,
        .recentSection {
          padding: 42px 0 54px;
        }

        .relatedSection {
          background: #fff;
        }

        .recentSection {
          background: #f7f7f5;
          border-top: 1px solid #ececea;
        }

        .recentSection .smallCardGrid {
          align-items: stretch;
        }

        .recentSection .smallCard {
          height: 100%;
        }

        .sectionHead {
          margin-bottom: 16px;
        }

        .sectionHead h2 {
          color: #171717;
          font-size: 20px;
          line-height: 1.4;
          letter-spacing: -0.02em;
        }

        .smallCardGrid {
          display: grid;
          grid-template-columns:
            repeat(5, minmax(0, 1fr));
          gap: 10px;
          align-items: stretch;
        }

        .smallCard {
          min-width: 0;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid #e5e5e2;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.035);
        }

        .smallImageLink {
          display: block;
          background: #eee;
        }

        .smallImageWrap {
          position: relative;
          width: 100%;
          height: 104px;
          overflow: hidden;
          background: #eeeeec;
        }

        .smallImageWrap :global(img) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .smallPlaceholder {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: #999;
          font-size: 7px;
          font-weight: 900;
        }

        .smallCardBody {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
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
          background: #f1eee5;
          color: #5f5337;
          font-size: 7px;
          font-weight: 800;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .smallTitle {
          display: -webkit-box;
          min-height: 33px;
          margin: 0 0 6px;
          overflow: hidden;
          color: #171717;
          font-size: 10px;
          line-height: 1.55;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }

        .smallTitle a {
          color: inherit;
          text-decoration: none;
        }

        .smallMeta {
          display: grid;
          gap: 3px;
          min-height: 28px;
          margin-bottom: 7px;
        }

        .smallMeta p {
          margin: 0;
          overflow: hidden;
          color: #626a76;
          font-size: 7px;
          line-height: 1.45;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .smallDetailButton {
          display: block;
          margin-top: auto;
          padding: 7px;
          border-radius: 7px;
          background: #17243b;
          color: #fff;
          text-align: center;
          font-size: 7px;
          font-weight: 800;
          text-decoration: none;
        }

        .emptyHistory {
          padding: 35px 20px;
          border-radius: 15px;
          background: #fff;
          color: #888;
          text-align: center;
          font-size: 12px;
          line-height: 1.8;
        }

        .mobileStickyBar {
          display: none;
        }

        @media (
          max-width: 950px
        ) {
          .heroGrid,
          .contentGrid {
            grid-template-columns:
              1fr;
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
          .container {
            width:
              calc(100% - 24px);
          }

          .heroSection {
            padding: 28px 0 40px;
          }

          .heroGrid {
            gap: 30px;
          }

          .flyerCard {
            padding: 7px;
            border-radius: 18px;
            transform: none;
          }

          .flyerImage {
            border-radius: 13px;
          }

          .heroContent h1 {
            font-size: 31px;
          }

          .actionButtons {
            display: grid;
            grid-template-columns:
              1fr 1fr;
          }

          .copyButton {
            grid-column:
              1 / -1;
          }

          .summaryRow {
            grid-template-columns:
              28px
              minmax(0, 1fr);
          }

          .contentSection {
            padding: 45px 0 85px;
          }

          .contentCard {
            padding: 21px;
          }

          .smallCardGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
          }

          .smallImageWrap {
            height: 92px;
          }

          .relatedSection,
          .recentSection {
            padding: 48px 0 70px;
          }

          .mobileStickyBar {
            position: fixed;
            z-index: 100;
            right: 0;
            bottom: 0;
            left: 0;
            display: grid;
            grid-template-columns:
              58px minmax(0, 1fr);
            gap: 9px;
            padding:
              10px 12px
              calc(
                10px +
                  env(
                    safe-area-inset-bottom
                  )
              );
            border-top:
              1px solid #e5e2dc;
            background:
              rgba(
                255,
                255,
                255,
                0.96
              );
            box-shadow:
              0 -10px 28px
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
            min-height: 51px;
            display: grid;
            place-items: center;
            border-radius: 11px;
          }

          .mobileStickyBar button {
            border: 1px solid #dedbd5;
            background: #fff;
            color: #111111;
            font-size: 24px;
          }

          .mobileStickyBar a {
            background: #111111;
            color: #fff;
            font-size: 13px;
            font-weight: 900;
            text-align: center;
            text-decoration: none;
          }
        }

        @media (
          max-width: 380px
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
