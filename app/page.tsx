import Image from "next/image";
import Link from "next/link";
import heroBanner from "../hero-banner.png";
import OrganizerCta from "./components/OrganizerCta";
import AreaSearch from "./components/AreaSearch";
import CategorySearch from "./components/CategorySearch";
import KeywordSearch from "./components/KeywordSearch";

import {
  getCategoryOptions,
  getEvents,
  type EventItem,
} from "../lib/notion";
次の記述が冒頭にあれば、まだ間違ったコードです。
import { notFound } from "next/navigation";
import EventDetailClient from "./EventDetailClient";
import {
  getEventById,
  getEvents,
} from "../../../lib/notion";
貼り替え後にCommit changesを押してください。
その次に、イベント詳細用コードが以下へ入っていることも確認します。

app/events/[id]/page.tsx
今回のエラーはEventDetailClient.tsxがないことではなく、TOPページが詳細ページ用コードのままになっていることが原因です。

page.tsx
コード


ライブラリ
/
page.tsx


import Image from "next/image";
import Link from "next/link";
import heroBanner from "../hero-banner.png";
import OrganizerCta from "./components/OrganizerCta";
import AreaSearch from "./components/AreaSearch";
import CategorySearch from "./components/CategorySearch";
import KeywordSearch from "./components/KeywordSearch";
import {
  getCategoryOptions,
  getEvents,
  type EventItem,
} from "../lib/notion";

export const revalidate = 300;

type CardSize = "large" | "medium" | "small";

type HomePageProps = {
  searchParams: Promise<{
    category?: string;
    month?: string;
  }>;
};

type CalendarCell = {
  day: number | null;
  events: EventItem[];
};

type CategoryColor = {
  backgroundColor: string;
  borderColor: string;
  color: string;
};

function getEventTimestamp(event: EventItem): number {
  if (!event.dateStart) {
    return Number.POSITIVE_INFINITY;
  }

  const value = event.dateStart.includes("T")
    ? event.dateStart
    : `${event.dateStart}T00:00:00+09:00`;

  const timestamp = new Date(value).getTime();

  return Number.isNaN(timestamp)
    ? Number.POSITIVE_INFINITY
    : timestamp;
}

function getJstDateParts(date: Date): {
  year: number;
  month: number;
  day: number;
} {
  const parts = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "Asia/Tokyo",
  }).formatToParts(date);

  return {
    year: Number(
      parts.find((part) => part.type === "year")?.value || 0,
    ),
    month: Number(
      parts.find((part) => part.type === "month")?.value || 0,
    ),
    day: Number(
      parts.find((part) => part.type === "day")?.value || 0,
    ),
  };
}

function getEventDateParts(
  event: EventItem,
): {
  year: number;
  month: number;
  day: number;
} | null {
  const timestamp = getEventTimestamp(event);

  if (!Number.isFinite(timestamp)) {
    return null;
  }

  return getJstDateParts(new Date(timestamp));
}

function parseSelectedMonth(
  monthValue?: string,
): {
  year: number;
  month: number;
} {
  if (
    monthValue &&
    /^\d{4}-\d{2}$/.test(monthValue)
  ) {
    const [yearText, monthText] = monthValue.split("-");

    const year = Number(yearText);
    const month = Number(monthText);

    if (
      year >= 2000 &&
      year <= 2100 &&
      month >= 1 &&
      month <= 12
    ) {
      return {
        year,
        month,
      };
    }
  }

  const now = getJstDateParts(new Date());

  return {
    year: now.year,
    month: now.month,
  };
}

function formatMonthParameter(
  year: number,
  month: number,
): string {
  return `${year}-${String(month).padStart(2, "0")}`;
}

function moveMonth(
  year: number,
  month: number,
  amount: number,
): {
  year: number;
  month: number;
} {
  const date = new Date(
    Date.UTC(year, month - 1 + amount, 1),
  );

  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
  };
}

function createHomeUrl({
  category,
  month,
  hash,
}: {
  category?: string;
  month?: string;
  hash?: string;
}): string {
  const params = new URLSearchParams();

  if (category) {
    params.set("category", category);
  }

  if (month) {
    params.set("month", month);
  }

  const query = params.toString();

  return `/${query ? `?${query}` : ""}${
    hash ? `#${hash}` : ""
  }`;
}

function getCategoryColor(
  category: string,
): CategoryColor {
  const palette: CategoryColor[] = [
    {
      backgroundColor: "#fff1f1",
      borderColor: "#e7aaaa",
      color: "#7d3030",
    },
    {
      backgroundColor: "#eef5ff",
      borderColor: "#abc6e8",
      color: "#28517c",
    },
    {
      backgroundColor: "#eff8f0",
      borderColor: "#abd0af",
      color: "#306238",
    },
    {
      backgroundColor: "#fff6e8",
      borderColor: "#e1c08c",
      color: "#74501e",
    },
    {
      backgroundColor: "#f4efff",
      borderColor: "#c7b4e7",
      color: "#563d7c",
    },
    {
      backgroundColor: "#eaf8f7",
      borderColor: "#9dccca",
      color: "#265e59",
    },
    {
      backgroundColor: "#fff0f7",
      borderColor: "#e2a7c4",
      color: "#793255",
    },
    {
      backgroundColor: "#f2f2ec",
      borderColor: "#ccccbb",
      color: "#555541",
    },
  ];

  const hash = Array.from(category).reduce(
    (total, character) =>
      total + character.charCodeAt(0),
    0,
  );

  return palette[hash % palette.length];
}

function buildCalendarCells({
  events,
  year,
  month,
}: {
  events: EventItem[];
  year: number;
  month: number;
}): CalendarCell[] {
  const firstWeekday =
    (
      new Date(
        Date.UTC(year, month - 1, 1),
      ).getUTCDay() + 6
    ) % 7;

  const daysInMonth = new Date(
    Date.UTC(year, month, 0),
  ).getUTCDate();

  const eventsByDay = new Map<number, EventItem[]>();

  events.forEach((event) => {
    const dateParts = getEventDateParts(event);

    if (
      !dateParts ||
      dateParts.year !== year ||
      dateParts.month !== month
    ) {
      return;
    }

    const dayEvents =
      eventsByDay.get(dateParts.day) || [];

    dayEvents.push(event);

    eventsByDay.set(
      dateParts.day,
      dayEvents,
    );
  });

  eventsByDay.forEach((dayEvents) => {
    dayEvents.sort((a, b) =>
      (a.startTime || "99:99").localeCompare(
        b.startTime || "99:99",
        "ja",
      ),
    );
  });

  const cells: CalendarCell[] = [];

  for (
    let index = 0;
    index < firstWeekday;
    index += 1
  ) {
    cells.push({
      day: null,
      events: [],
    });
  }

  for (
    let day = 1;
    day <= daysInMonth;
    day += 1
  ) {
    cells.push({
      day,
      events: eventsByDay.get(day) || [],
    });
  }

  while (cells.length % 7 !== 0) {
    cells.push({
      day: null,
      events: [],
    });
  }

  return cells;
}

function EventCard({
  event,
  size,
}: {
  event: EventItem;
  size: CardSize;
}) {
  const hasTime =
    event.startTime || event.endTime;

  return (
    <article className={`card card-${size}`}>
      <Link
        href={`/events/${event.id}`}
        className="cardImageLink"
      >
        {event.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={event.image}
            alt={event.title}
            className="image"
          />
        ) : (
          <div className="image placeholder">
            TOKYO EVENT NAVI
          </div>
        )}
      </Link>

      <div className="cardBody">
        {event.category && (
          <div className="category">
            {event.category}
          </div>
        )}

        <h2 className="eventTitle">
          <Link href={`/events/${event.id}`}>
            {event.title}
          </Link>
        </h2>

        <div className="eventMeta">
          {event.date && (
            <div className="metaRow">
              <span className="metaIcon">
                📅
              </span>

              <div>
                <span className="metaLabel">
                  開催日
                </span>

                <strong>
                  {event.date}
                </strong>
              </div>
            </div>
          )}

          {hasTime && (
            <div className="metaRow">
              <span className="metaIcon">
                🕐
              </span>

              <div>
                <span className="metaLabel">
                  開催時間
                </span>

                <strong>
                  {event.startTime || "未定"}

                  {event.endTime
                    ? ` 〜 ${event.endTime}`
                    : ""}
                </strong>
              </div>
            </div>
          )}

          {event.location && (
            <div className="metaRow">
              <span className="metaIcon">
                📍
              </span>

              <div>
                <span className="metaLabel">
                  会場
                </span>

                <strong>
                  {event.location}
                </strong>
              </div>
            </div>
          )}
        </div>

        <Link
          className="detailButton"
          href={`/events/${event.id}`}
        >
          詳細を見る
        </Link>
      </div>
    </article>
  );
}

function EventSection({
  title,
  events,
  emptyMessage,
  size,
}: {
  title: string;
  events: EventItem[];
  emptyMessage: string;
  size: CardSize;
}) {
  return (
    <section className="eventSection">
      <div className="sectionHead">
        <h1>{title}</h1>
      </div>

      {events.length === 0 ? (
        <div className="empty">
          {emptyMessage}
        </div>
      ) : (
        <div className={`grid grid-${size}`}>
          {events.map((event) => (
            <EventCard
              event={event}
              size={size}
              key={`${title}-${event.id}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function CalendarEventLink({
  event,
  modal = false,
}: {
  event: EventItem;
  modal?: boolean;
}) {
  const categoryColor =
    getCategoryColor(
      event.category || "その他",
    );

  return (
    <Link
      href={`/events/${event.id}`}
      className={
        modal
          ? "calendarEvent calendarEventModal"
          : "calendarEvent"
      }
      style={categoryColor}
      title={`${
        event.startTime || "時間未定"
      } ${event.title}`}
    >
      <span>
        {event.startTime || "未定"}
      </span>

      <strong>
        {event.title}
      </strong>
    </Link>
  );
}

function CalendarSection({
  events,
  year,
  month,
  selectedCategory,
}: {
  events: EventItem[];
  year: number;
  month: number;
  selectedCategory: string;
}) {
  const cells =
    buildCalendarCells({
      events,
      year,
      month,
    });

  const previousMonth =
    moveMonth(year, month, -1);

  const nextMonth =
    moveMonth(year, month, 1);

  const today =
    getJstDateParts(new Date());

  const previousUrl =
    createHomeUrl({
      category:
        selectedCategory || undefined,
      month:
        formatMonthParameter(
          previousMonth.year,
          previousMonth.month,
        ),
      hash: "event-calendar",
    });

  const nextUrl =
    createHomeUrl({
      category:
        selectedCategory || undefined,
      month:
        formatMonthParameter(
          nextMonth.year,
          nextMonth.month,
        ),
      hash: "event-calendar",
    });

  return (
    <section
      className="calendarSection"
      id="event-calendar"
    >
      <div className="sectionHead">
        <div>
          <p className="sectionSubTitle">
            EVENT CALENDAR
          </p>

          <h1>
            イベントカレンダー
          </h1>
        </div>
      </div>

      <div className="calendarCard">
        <div className="calendarHeader">
          <Link
            href={previousUrl}
            className="calendarMoveButton"
            aria-label="前月を見る"
          >
            ←
          </Link>

          <h2>
            {year}年{month}月
          </h2>

          <Link
            href={nextUrl}
            className="calendarMoveButton"
            aria-label="次月を見る"
          >
            →
          </Link>
        </div>

        <div className="calendarWeekdays">
          {[
            "月",
            "火",
            "水",
            "木",
            "金",
            "土",
            "日",
          ].map((weekday, index) => (
            <div
              className={
                index === 5
                  ? "saturday"
                  : index === 6
                    ? "sunday"
                    : ""
              }
              key={weekday}
            >
              {weekday}
            </div>
          ))}
        </div>

        <div className="calendarGrid">
          {cells.map((cell, index) => {
            const weekdayIndex =
              index % 7;

            const isToday =
              cell.day !== null &&
              today.year === year &&
              today.month === month &&
              today.day === cell.day;

            const visibleEvents =
              cell.events.slice(0, 3);

            const hiddenEvents =
              cell.events.slice(3);

            const modalId =
              `calendar-modal-${year}-${month}-${cell.day}-${index}`;

            return (
              <div
                className={[
                  "calendarCell",

                  cell.day === null
                    ? "calendarCellEmpty"
                    : "",

                  isToday
                    ? "calendarCellToday"
                    : "",

                  weekdayIndex === 5
                    ? "calendarCellSaturday"
                    : "",

                  weekdayIndex === 6
                    ? "calendarCellSunday"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                key={`calendar-cell-${index}`}
              >
                {cell.day !== null && (
                  <>
                    <div className="calendarDayNumber">
                      <span>
                        {cell.day}
                      </span>

                      {isToday && (
                        <small>
                          今日
                        </small>
                      )}
                    </div>

                    <div className="calendarEvents">
                      {visibleEvents.map(
                        (event) => (
                          <CalendarEventLink
                            event={event}
                            key={`calendar-event-${event.id}`}
                          />
                        ),
                      )}

                      {hiddenEvents.length > 0 && (
                        <>
                          <input
                            type="checkbox"
                            id={modalId}
                            className="modalToggle"
                          />

                          <label
                            htmlFor={modalId}
                            className="moreEventsButton"
                          >
                            ＋他
                            {hiddenEvents.length}
                            件
                          </label>

                          <div className="moreEventsOverlay">
                            <label
                              htmlFor={modalId}
                              className="modalBackdrop"
                              aria-label="閉じる"
                            />

                            <div
                              className="moreEventsModal"
                              role="dialog"
                              aria-modal="true"
                            >
                              <div className="moreEventsHeader">
                                <div>
                                  <span>
                                    {year}年
                                    {month}月
                                    {cell.day}日
                                  </span>

                                  <h3>
                                    この日のイベント
                                  </h3>
                                </div>

                                <label
                                  htmlFor={modalId}
                                  className="modalCloseButton"
                                >
                                  ×
                                </label>
                              </div>

                              <div className="moreEventsList">
                                {cell.events.map(
                                  (event) => (
                                    <CalendarEventLink
                                      event={event}
                                      modal
                                      key={`modal-event-${event.id}`}
                                    />
                                  ),
                                )}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default async function Home({
  searchParams,
}: HomePageProps) {
  const params =
    await searchParams;

  const selectedCategory =
    params.category?.trim() || "";

  const selectedMonth =
    parseSelectedMonth(
      params.month,
    );

  const [allEvents, categoryOptions] =
    await Promise.all([
      getEvents(),
      getCategoryOptions(),
    ]);

  const featuredEvents =
    allEvents
      .filter(
        (event) =>
          event.featured,
      )
      .sort(
        (a, b) =>
          getEventTimestamp(a) -
          getEventTimestamp(b),
      )
      .slice(0, 3);

  const newEvents =
    [...allEvents]
      .sort((a, b) => {
        const aTime =
          a.createdTime
            ? new Date(
                a.createdTime,
              ).getTime()
            : 0;

        const bTime =
          b.createdTime
            ? new Date(
                b.createdTime,
              ).getTime()
            : 0;

        return bTime - aTime;
      })
      .slice(0, 10);

  const now = Date.now();

  const sevenDaysLater =
    now +
    7 *
      24 *
      60 *
      60 *
      1000;

  const weeklyEvents =
    allEvents
      .filter((event) => {
        const eventTime =
          getEventTimestamp(event);

        return (
          Number.isFinite(eventTime) &&
          eventTime >= now &&
          eventTime <= sevenDaysLater
        );
      })
      .sort(
        (a, b) =>
          getEventTimestamp(a) -
          getEventTimestamp(b),
      )
      .slice(0, 5);



  return (
    <main className="homePage">
      <header className="bannerHeader">
        <Image
          src={heroBanner}
          alt="東京イベントナビ"
          className="topBanner"
          priority
        />
      </header>

      <KeywordSearch events={allEvents} />

      <div className="container sections">
        <EventSection
          title="人気イベント"
          events={featuredEvents}
          emptyMessage="現在、人気イベントはありません。"
          size="large"
        />

        <EventSection
          title="新着イベント"
          events={newEvents}
          emptyMessage="現在、新着イベントはありません。"
          size="medium"
        />

        <EventSection
          title="今週のイベント"
          events={weeklyEvents}
          emptyMessage="現在時刻から7日以内に開催されるイベントはありません。"
          size="small"
        />

        <CalendarSection
          events={allEvents}
          year={selectedMonth.year}
          month={selectedMonth.month}
          selectedCategory={
            selectedCategory
          }
        />

        <CategorySearch
          events={allEvents}
          categories={categoryOptions}
        />

        <AreaSearch events={allEvents} />

        <OrganizerCta />
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .homePage {
          min-height: 100vh;
          background: #f7f7f5;
          color: #111;
        }

        .bannerHeader {
          width: 100%;
          overflow: hidden;
          background: #000;
        }

        .topBanner {
          display: block;
          width: 100%;
          height: auto;
        }

        .container {
          width: min(
            1240px,
            calc(100% - 40px)
          );
          margin: 0 auto;
        }

        .sections {
          display: grid;
          gap: 100px;
          padding: 64px 0 120px;
        }

        .sectionHead {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 24px;
          margin-bottom: 30px;
          padding-bottom: 16px;
          border-bottom: 1px solid #deded9;
        }

        .sectionSubTitle {
          margin: 0 0 7px;
          color: #999;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .sectionHead h1 {
          margin: 0;
          font-size: clamp(
            27px,
            4vw,
            38px
          );
          line-height: 1.3;
        }

        .grid {
          display: grid;
          align-items: stretch;
        }

        .grid-large {
          grid-template-columns: repeat(
            3,
            minmax(0, 1fr)
          );
          gap: 26px;
        }

        .grid-medium {
          grid-template-columns: repeat(
            5,
            minmax(0, 1fr)
          );
          gap: 18px;
        }

        .grid-small {
          grid-template-columns: repeat(
            5,
            minmax(0, 1fr)
          );
          gap: 14px;
        }

        .card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid #e7e7e2;
          background: #fff;
          box-shadow:
            0 10px 30px
            rgba(0, 0, 0, 0.045);
        }

        .card-large {
          border-radius: 22px;
        }

        .card-medium {
          border-radius: 15px;
        }

        .card-small {
          border-radius: 13px;
        }

        /*
         * フライヤー表示
         * 元の横長・切り抜き方式
         */
        .cardImageLink {
          display: block;
          overflow: hidden;
          background: #eee;
        }

        .image {
          display: block;
          width: 100%;
          object-fit: cover;
        }

        .card-large .image,
        .card-medium .image {
          aspect-ratio: 16 / 10;
        }

        .card-small .image {
          aspect-ratio: 16 / 9;
        }

        .placeholder {
          display: grid;
          place-items: center;
          color: #888;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .cardBody {
          display: flex;
          flex: 1;
          flex-direction: column;
        }

        .card-large .cardBody {
          padding: 25px;
        }

        .card-medium .cardBody {
          padding: 15px;
        }

        .card-small .cardBody {
          padding: 13px;
        }

        .category {
          display: inline-flex;
          width: fit-content;
          border-radius: 999px;
          background: #f1eee5;
          color: #5f5337;
          font-weight: 800;
        }

        .card-large .category {
          margin-bottom: 16px;
          padding: 8px 14px;
          font-size: 12px;
        }

        .card-medium .category {
          margin-bottom: 11px;
          padding: 6px 10px;
          font-size: 10px;
        }

        .card-small .category {
          margin-bottom: 9px;
          padding: 5px 9px;
          font-size: 9px;
        }

        .eventTitle {
          margin: 0;
        }

        .eventTitle a {
          color: inherit;
          text-decoration: none;
        }

        .card-large .eventTitle {
          font-size: 23px;
          line-height: 1.45;
        }

        .card-medium .eventTitle {
          font-size: 15px;
          line-height: 1.5;
        }

        .card-small .eventTitle {
          font-size: 14px;
          line-height: 1.45;
        }

        .eventMeta {
          display: grid;
          gap: 9px;
          margin: 15px 0 17px;
        }

        .card-large .eventMeta {
          gap: 15px;
          margin: 25px 0 27px;
        }

        .metaRow {
          display: grid;
          grid-template-columns: 22px 1fr;
          gap: 7px;
          align-items: start;
        }

        .metaIcon {
          font-size: 13px;
        }

        .metaRow > div {
          display: grid;
          gap: 2px;
          min-width: 0;
        }

        .metaLabel {
          color: #999;
          font-size: 9px;
          font-weight: 700;
        }

        .metaRow strong {
          color: #222;
          font-size: 12px;
          line-height: 1.45;
          overflow-wrap: anywhere;
        }

        .card-large .metaRow strong {
          font-size: 14px;
        }

        .detailButton {
          display: block;
          margin-top: auto;
          padding: 11px;
          border-radius: 8px;
          background: #111;
          color: #fff;
          text-align: center;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
        }

        .card-large .detailButton {
          padding: 16px;
          border-radius: 11px;
          font-size: 14px;
        }

        .empty {
          padding: 50px 20px;
          border-radius: 15px;
          background: #fff;
          color: #777;
          text-align: center;
          line-height: 1.8;
        }

        /*
         * カレンダー
         */
        .calendarCard {
          overflow: hidden;
          border: 1px solid #deded9;
          border-radius: 20px;
          background: #fff;
          box-shadow:
            0 12px 36px
            rgba(0, 0, 0, 0.045);
        }

        .calendarHeader {
          display: grid;
          grid-template-columns:
            52px 1fr 52px;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #e6e6e1;
        }

        .calendarHeader h2 {
          margin: 0;
          text-align: center;
          font-size: 25px;
        }

        .calendarMoveButton {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #111;
          color: #fff;
          text-decoration: none;
          font-size: 17px;
          font-weight: 800;
        }

        .calendarWeekdays {
          display: grid;
          grid-template-columns: repeat(
            7,
            1fr
          );
          border-bottom: 1px solid #e6e6e1;
          background: #f3f3ef;
        }

        .calendarWeekdays > div {
          padding: 12px 5px;
          text-align: center;
          font-size: 12px;
          font-weight: 800;
        }

        .calendarWeekdays .saturday {
          color: #4e77ac;
        }

        .calendarWeekdays .sunday {
          color: #c95d5d;
        }

        .calendarGrid {
          display: grid;
          grid-template-columns: repeat(
            7,
            minmax(0, 1fr)
          );
        }

        .calendarCell {
          min-height: 165px;
          padding: 10px;
          border-right: 1px solid #ecece7;
          border-bottom: 1px solid #ecece7;
          background: #fff;
        }

        .calendarCell:nth-child(7n) {
          border-right: 0;
        }

        .calendarCellEmpty {
          background: #fafaf8;
        }

        .calendarCellToday {
          background: #fff9df;
          box-shadow:
            inset 0 0 0 2px
            #d8b84a;
        }

        .calendarDayNumber {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          font-size: 13px;
          font-weight: 800;
        }

        .calendarCellSaturday
          .calendarDayNumber {
          color: #4e77ac;
        }

        .calendarCellSunday
          .calendarDayNumber {
          color: #c95d5d;
        }

        .calendarDayNumber small {
          color: #917817;
          font-size: 9px;
          font-weight: 800;
        }

        .calendarEvents {
          display: grid;
          gap: 5px;
        }

        .calendarEvent {
          display: grid;
          grid-template-columns:
            32px minmax(0, 1fr);
          gap: 5px;
          align-items: center;
          min-width: 0;
          padding: 6px 7px;
          overflow: hidden;
          border: 1px solid;
          border-radius: 7px;
          text-decoration: none;
        }

        .calendarEvent span {
          font-size: 8px;
          font-weight: 800;
          white-space: nowrap;
        }

        .calendarEvent strong {
          overflow: hidden;
          font-size: 9px;
          line-height: 1.35;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /*
         * 4件目以降のポップアップ
         */
        .modalToggle {
          position: absolute;
          width: 1px;
          height: 1px;
          opacity: 0;
          pointer-events: none;
        }

        .moreEventsButton {
          display: block;
          padding: 6px 7px;
          border-radius: 7px;
          background: #111;
          color: #fff;
          cursor: pointer;
          text-align: center;
          font-size: 9px;
          font-weight: 800;
        }

        .moreEventsOverlay {
          position: fixed;
          z-index: 1000;
          inset: 0;
          display: none;
          place-items: center;
          padding: 20px;
        }

        .modalToggle:checked
          + .moreEventsButton
          + .moreEventsOverlay {
          display: grid;
        }

        .modalBackdrop {
          position: absolute;
          inset: 0;
          background: rgba(
            0,
            0,
            0,
            0.55
          );
          cursor: pointer;
        }

        .moreEventsModal {
          position: relative;
          z-index: 1;
          width: min(
            560px,
            100%
          );
          max-height: calc(
            100vh - 40px
          );
          overflow-y: auto;
          padding: 25px;
          border-radius: 18px;
          background: #fff;
          box-shadow:
            0 28px 80px
            rgba(0, 0, 0, 0.3);
        }

        .moreEventsHeader {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e7e7e2;
        }

        .moreEventsHeader span {
          color: #888;
          font-size: 11px;
          font-weight: 700;
        }

        .moreEventsHeader h3 {
          margin: 4px 0 0;
          font-size: 23px;
        }

        .modalCloseButton {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #111;
          color: #fff;
          cursor: pointer;
          font-size: 22px;
          line-height: 1;
        }

        .moreEventsList {
          display: grid;
          gap: 9px;
        }

        .calendarEventModal {
          grid-template-columns:
            48px minmax(0, 1fr);
          padding: 11px 13px;
          border-radius: 10px;
        }

        .calendarEventModal span {
          font-size: 11px;
        }

        .calendarEventModal strong {
          font-size: 13px;
          white-space: normal;
        }

        /*
         * カテゴリー検索
         */
        .categoryNavigation {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }

        .categoryFilter {
          padding: 11px 17px;
          border: 1px solid #dcdcd7;
          border-radius: 999px;
          background: #fff;
          color: #333;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
        }

        .categoryFilter:hover,
        .categoryFilter.active {
          border-color: #111;
          background: #111;
          color: #fff;
        }

        .selectedCategoryHead {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 22px;
          padding: 20px 22px;
          border-radius: 14px;
          background: #eee9dc;
        }

        .selectedCategoryHead span {
          color: #777;
          font-size: 10px;
          font-weight: 700;
        }

        .selectedCategoryHead h2 {
          margin: 4px 0 0;
          font-size: 22px;
        }

        .selectedCategoryHead a {
          color: #111;
          font-size: 12px;
          font-weight: 800;
        }

        @media (max-width: 1050px) {
          .grid-medium,
          .grid-small {
            grid-template-columns: repeat(
              3,
              minmax(0, 1fr)
            );
          }

          .calendarCell {
            min-height: 145px;
            padding: 7px;
          }
        }

        @media (max-width: 800px) {
          .grid-large,
          .grid-medium,
          .grid-small {
            grid-template-columns: repeat(
              2,
              minmax(0, 1fr)
            );
          }

          .calendarCard {
            overflow-x: auto;
          }

          .calendarWeekdays,
          .calendarGrid {
            min-width: 900px;
          }
        }

        @media (max-width: 640px) {
          .container {
            width: calc(
              100% - 24px
            );
          }

          .topBanner {
            width: 150%;
            max-width: none;
            margin-left: -25%;
          }

          .sections {
            gap: 66px;
            padding-top: 36px;
            padding-bottom: 75px;
          }

          .sectionHead {
            margin-bottom: 21px;
            padding-bottom: 12px;
          }

          .sectionHead h1 {
            font-size: 26px;
          }

          .grid-large,
          .grid-medium,
          .grid-small {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .calendarHeader {
            grid-template-columns:
              44px 1fr 44px;
            padding: 14px;
          }

          .calendarHeader h2 {
            font-size: 20px;
          }

          .calendarMoveButton {
            width: 36px;
            height: 36px;
          }

          .moreEventsModal {
            padding: 20px;
          }

          .categoryNavigation {
            gap: 8px;
          }

          .categoryFilter {
            padding: 10px 13px;
            font-size: 12px;
          }

          .selectedCategoryHead {
            align-items: flex-start;
            padding: 17px;
          }
        }
      `}</style>
    </main>
  );
}
