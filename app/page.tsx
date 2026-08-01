import Image from "next/image";
import Link from "next/link";
import heroBanner from "../hero-banner.png";
import {
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

function getEventTimestamp(
  event: EventItem,
): number {
  if (!event.dateStart) {
    return Number.POSITIVE_INFINITY;
  }

  const date = new Date(
    event.dateStart.includes("T")
      ? event.dateStart
      : `${event.dateStart}T00:00:00+09:00`,
  );

  const timestamp = date.getTime();

  return Number.isNaN(timestamp)
    ? Number.POSITIVE_INFINITY
    : timestamp;
}

function getJstDateParts(date: Date): {
  year: number;
  month: number;
  day: number;
} {
  const parts = new Intl.DateTimeFormat(
    "ja-JP",
    {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      timeZone: "Asia/Tokyo",
    },
  ).formatToParts(date);

  const year = Number(
    parts.find(
      (part) => part.type === "year",
    )?.value || 0,
  );

  const month = Number(
    parts.find(
      (part) => part.type === "month",
    )?.value || 0,
  );

  const day = Number(
    parts.find(
      (part) => part.type === "day",
    )?.value || 0,
  );

  return {
    year,
    month,
    day,
  };
}

function getEventDateParts(
  event: EventItem,
): {
  year: number;
  month: number;
  day: number;
} | null {
  const timestamp =
    getEventTimestamp(event);

  if (!Number.isFinite(timestamp)) {
    return null;
  }

  return getJstDateParts(
    new Date(timestamp),
  );
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
    const [yearText, monthText] =
      monthValue.split("-");

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

  const nowParts = getJstDateParts(
    new Date(),
  );

  return {
    year: nowParts.year,
    month: nowParts.month,
  };
}

function formatMonthParameter(
  year: number,
  month: number,
): string {
  return `${year}-${String(
    month,
  ).padStart(2, "0")}`;
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
    Date.UTC(
      year,
      month - 1 + amount,
      1,
    ),
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
  const params =
    new URLSearchParams();

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
    new Date(
      Date.UTC(year, month - 1, 1),
    ).getUTCDay();

  const daysInMonth =
    new Date(
      Date.UTC(year, month, 0),
    ).getUTCDate();

  const eventsByDay =
    new Map<number, EventItem[]>();

  events.forEach((event) => {
    const dateParts =
      getEventDateParts(event);

    if (
      !dateParts ||
      dateParts.year !== year ||
      dateParts.month !== month
    ) {
      return;
    }

    const currentEvents =
      eventsByDay.get(dateParts.day) ||
      [];

    currentEvents.push(event);

    eventsByDay.set(
      dateParts.day,
      currentEvents,
    );
  });

  eventsByDay.forEach(
    (dayEvents) => {
      dayEvents.sort(
        (a, b) =>
          getEventTimestamp(a) -
          getEventTimestamp(b),
      );
    },
  );

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
      events:
        eventsByDay.get(day) || [],
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
    <article
      className={`card card-${size}`}
    >
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
          <Link
            href={`/events/${event.id}`}
          >
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
                  {event.startTime ||
                    "未定"}

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
        <span>{events.length}件</span>
      </div>

      {events.length === 0 ? (
        <div className="empty">
          {emptyMessage}
        </div>
      ) : (
        <div
          className={`grid grid-${size}`}
        >
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
  const calendarCells =
    buildCalendarCells({
      events,
      year,
      month,
    });

  const previousMonth =
    moveMonth(year, month, -1);

  const nextMonth =
    moveMonth(year, month, 1);

  const previousUrl =
    createHomeUrl({
      category:
        selectedCategory || undefined,
      month: formatMonthParameter(
        previousMonth.year,
        previousMonth.month,
      ),
      hash: "event-calendar",
    });

  const nextUrl =
    createHomeUrl({
      category:
        selectedCategory || undefined,
      month: formatMonthParameter(
        nextMonth.year,
        nextMonth.month,
      ),
      hash: "event-calendar",
    });

  const todayParts =
    getJstDateParts(new Date());

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
            "日",
            "月",
            "火",
            "水",
            "木",
            "金",
            "土",
          ].map((weekday, index) => (
            <div
              className={
                index === 0
                  ? "sunday"
                  : index === 6
                    ? "saturday"
                    : ""
              }
              key={weekday}
            >
              {weekday}
            </div>
          ))}
        </div>

        <div className="calendarGrid">
          {calendarCells.map(
            (cell, index) => {
              const isToday =
                cell.day !== null &&
                todayParts.year === year &&
                todayParts.month ===
                  month &&
                todayParts.day ===
                  cell.day;

              const weekday =
                index % 7;

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
                    weekday === 0
                      ? "calendarCellSunday"
                      : "",
                    weekday === 6
                      ? "calendarCellSaturday"
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
                        {cell.events.map(
                          (event) => (
                            <Link
                              href={`/events/${event.id}`}
                              className="calendarEvent"
                              title={
                                event.title
                              }
                              key={`calendar-event-${event.id}`}
                            >
                              {event.startTime && (
                                <span>
                                  {
                                    event.startTime
                                  }
                                </span>
                              )}

                              <strong>
                                {event.title}
                              </strong>
                            </Link>
                          ),
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}

function CategorySection({
  categories,
  selectedCategory,
  events,
  selectedMonth,
}: {
  categories: string[];
  selectedCategory: string;
  events: EventItem[];
  selectedMonth: string;
}) {
  return (
    <section
      className="categorySearchSection"
      id="category-search"
    >
      <div className="sectionHead">
        <div>
          <p className="sectionSubTitle">
            SEARCH BY CATEGORY
          </p>

          <h1>カテゴリーから探す</h1>
        </div>

        <span>
          {selectedCategory
            ? `${events.length}件`
            : `${categories.length}種類`}
        </span>
      </div>

      <nav
        className="categoryNavigation"
        aria-label="イベントカテゴリー"
      >
        <Link
          href={createHomeUrl({
            month: selectedMonth,
            hash: "category-search",
          })}
          className={
            selectedCategory
              ? "categoryFilter"
              : "categoryFilter active"
          }
        >
          すべて
        </Link>

        {categories.map(
          (category) => (
            <Link
              href={createHomeUrl({
                category,
                month: selectedMonth,
                hash: "category-search",
              })}
              className={
                selectedCategory ===
                category
                  ? "categoryFilter active"
                  : "categoryFilter"
              }
              key={category}
            >
              {category}
            </Link>
          ),
        )}
      </nav>

      {selectedCategory && (
        <div className="selectedCategoryHead">
          <div>
            <span>
              選択中のカテゴリー
            </span>

            <h2>
              {selectedCategory}
            </h2>
          </div>

          <Link
            href={createHomeUrl({
              month: selectedMonth,
              hash: "category-search",
            })}
          >
            絞り込みを解除
          </Link>
        </div>
      )}

      {events.length === 0 ? (
        <div className="empty">
          該当するイベントはありません。
        </div>
      ) : (
        <div className="grid grid-small">
          {events.map((event) => (
            <EventCard
              event={event}
              size="small"
              key={`category-${event.id}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default async function Home({
  searchParams,
}: HomePageProps) {
  const params = await searchParams;

  const selectedCategory =
    params.category?.trim() || "";

  const selectedMonth =
    parseSelectedMonth(params.month);

  const selectedMonthParameter =
    formatMonthParameter(
      selectedMonth.year,
      selectedMonth.month,
    );

  const allEvents =
    await getEvents();

  const featuredEvents = allEvents
    .filter(
      (event) => event.featured,
    )
    .sort(
      (a, b) =>
        getEventTimestamp(a) -
        getEventTimestamp(b),
    )
    .slice(0, 3);

  const newEvents = [...allEvents]
    .sort((a, b) => {
      const aTime = a.createdTime
        ? new Date(
            a.createdTime,
          ).getTime()
        : 0;

      const bTime = b.createdTime
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
    7 * 24 * 60 * 60 * 1000;

  const weeklyEvents = allEvents
    .filter((event) => {
      const eventTime =
        getEventTimestamp(event);

      return (
        Number.isFinite(
          eventTime,
        ) &&
        eventTime >= now &&
        eventTime <=
          sevenDaysLater
      );
    })
    .sort(
      (a, b) =>
        getEventTimestamp(a) -
        getEventTimestamp(b),
    )
    .slice(0, 5);

  const categories =
    Array.from(
      new Set(
        allEvents
          .map((event) =>
            event.category.trim(),
          )
          .filter(Boolean),
      ),
    ).sort((a, b) =>
      a.localeCompare(b, "ja"),
    );

  const categoryEvents = (
    selectedCategory
      ? allEvents.filter(
          (event) =>
            event.category ===
            selectedCategory,
        )
      : allEvents
  ).sort(
    (a, b) =>
      getEventTimestamp(a) -
      getEventTimestamp(b),
  );

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

      <div className="container sections">
        <EventSection
          title="人気イベント"
          events={featuredEvents}
          emptyMessage="現在、人気イベントはありません。Notionの「F1」にチェックを入れてください。"
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

        <CategorySection
          categories={categories}
          selectedCategory={
            selectedCategory
          }
          events={categoryEvents}
          selectedMonth={
            selectedMonthParameter
          }
        />
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
          padding-top: 64px;
          padding-bottom: 120px;
        }

        .sectionHead {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 24px;
          margin-bottom: 30px;
          padding-bottom: 16px;
          border-bottom:
            1px solid #deded9;
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
          letter-spacing: -0.03em;
        }

        .sectionHead > span {
          padding-bottom: 4px;
          color: #888;
          font-size: 14px;
          font-weight: 700;
        }

        .grid {
          display: grid;
          align-items: stretch;
        }

        .grid-large {
          grid-template-columns:
            repeat(
              3,
              minmax(0, 1fr)
            );
          gap: 26px;
        }

        .grid-medium {
          grid-template-columns:
            repeat(
              5,
              minmax(0, 1fr)
            );
          gap: 18px;
        }

        .grid-small {
          grid-template-columns:
            repeat(
              5,
              minmax(0, 1fr)
            );
          gap: 14px;
        }

        .card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border:
            1px solid #e7e7e2;
          background: #fff;
          box-shadow:
            0 10px 30px
            rgba(0, 0, 0, 0.045);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .card:hover {
          transform:
            translateY(-3px);
          box-shadow:
            0 18px 42px
            rgba(0, 0, 0, 0.075);
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

        .cardImageLink {
          display: block;
          overflow: hidden;
          background: #eee;
        }

        .image {
          display: block;
          width: 100%;
          object-fit: cover;
          transition:
            transform 0.25s ease;
        }

        .card:hover .image {
          transform: scale(1.015);
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
          letter-spacing: 0.12em;
        }

        .card-large .placeholder {
          font-size: 13px;
        }

        .card-medium .placeholder,
        .card-small .placeholder {
          font-size: 9px;
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
          line-height: 1;
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

        .eventTitle a {
          color: inherit;
          text-decoration: none;
        }

        .eventMeta {
          display: grid;
        }

        .card-large .eventMeta {
          gap: 15px;
          margin: 25px 0 27px;
        }

        .card-medium .eventMeta {
          gap: 9px;
          margin: 15px 0 17px;
        }

        .card-small .eventMeta {
          gap: 8px;
          margin: 13px 0 15px;
        }

        .metaRow {
          display: grid;
          align-items: start;
        }

        .card-large .metaRow {
          grid-template-columns:
            29px 1fr;
          gap: 10px;
        }

        .card-medium .metaRow,
        .card-small .metaRow {
          grid-template-columns:
            20px 1fr;
          gap: 6px;
        }

        .metaIcon {
          padding-top: 1px;
          line-height: 1.4;
        }

        .card-large .metaIcon {
          font-size: 17px;
        }

        .card-medium .metaIcon,
        .card-small .metaIcon {
          font-size: 12px;
        }

        .metaRow > div {
          display: grid;
          min-width: 0;
          gap: 2px;
        }

        .metaLabel {
          color: #999;
          font-weight: 700;
        }

        .card-large .metaLabel {
          font-size: 10px;
        }

        .card-medium .metaLabel,
        .card-small .metaLabel {
          font-size: 8px;
        }

        .metaRow strong {
          color: #222;
          overflow-wrap: anywhere;
        }

        .card-large .metaRow strong {
          font-size: 14px;
          line-height: 1.55;
        }

        .card-medium .metaRow strong,
        .card-small .metaRow strong {
          font-size: 11px;
          line-height: 1.45;
        }

        .detailButton {
          display: block;
          margin-top: auto;
          background: #111;
          color: #fff;
          text-align: center;
          text-decoration: none;
          font-weight: 800;
        }

        .card-large .detailButton {
          padding: 16px;
          border-radius: 11px;
          font-size: 14px;
        }

        .card-medium .detailButton {
          padding: 11px;
          border-radius: 8px;
          font-size: 11px;
        }

        .card-small .detailButton {
          padding: 10px;
          border-radius: 7px;
          font-size: 10px;
        }

        .empty {
          padding: 50px 20px;
          border-radius: 15px;
          background: #fff;
          color: #777;
          text-align: center;
          line-height: 1.8;
        }

        .calendarCard {
          overflow: hidden;
          border:
            1px solid #deded9;
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
          border-bottom:
            1px solid #e6e6e1;
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
          grid-template-columns:
            repeat(7, 1fr);
          border-bottom:
            1px solid #e6e6e1;
          background: #f3f3ef;
        }

        .calendarWeekdays > div {
          padding: 12px 5px;
          text-align: center;
          font-size: 12px;
          font-weight: 800;
        }

        .calendarWeekdays .sunday {
          color: #c95d5d;
        }

        .calendarWeekdays .saturday {
          color: #4e77ac;
        }

        .calendarGrid {
          display: grid;
          grid-template-columns:
            repeat(7, minmax(0, 1fr));
        }

        .calendarCell {
          min-height: 145px;
          padding: 10px;
          border-right:
            1px solid #ecece7;
          border-bottom:
            1px solid #ecece7;
          background: #fff;
        }

        .calendarCell:nth-child(
          7n
        ) {
          border-right: 0;
        }

        .calendarCellEmpty {
          background: #fafaf8;
        }

        .calendarCellToday {
          background: #fff9df;
          box-shadow:
            inset 0 0 0 2px #d8b84a;
        }

        .calendarDayNumber {
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .calendarDayNumber > span {
          width: 27px;
          height: 27px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          font-size: 13px;
          font-weight: 800;
        }

        .calendarCellSunday
          .calendarDayNumber
          > span {
          color: #c95d5d;
        }

        .calendarCellSaturday
          .calendarDayNumber
          > span {
          color: #4e77ac;
        }

        .calendarCellToday
          .calendarDayNumber
          > span {
          background: #111;
          color: #fff;
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
          gap: 2px;
          padding: 6px 7px;
          overflow: hidden;
          border-radius: 7px;
          background: #eee9dc;
          color: #26231d;
          text-decoration: none;
        }

        .calendarEvent:hover {
          background: #ddd4bd;
        }

        .calendarEvent span {
          font-size: 8px;
          font-weight: 700;
          opacity: 0.68;
        }

        .calendarEvent strong {
          overflow: hidden;
          font-size: 10px;
          line-height: 1.35;
          text-overflow: ellipsis;
        }

        .categoryNavigation {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }

        .categoryFilter {
          padding: 11px 17px;
          border:
            1px solid #dcdcd7;
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
          justify-content:
            space-between;
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

        @media (
          max-width: 1050px
        ) {
          .grid-medium,
          .grid-small {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );
          }

          .calendarCell {
            min-height: 125px;
            padding: 7px;
          }

          .calendarEvent {
            padding: 5px;
          }
        }

        @media (
          max-width: 800px
        ) {
          .grid-large,
          .grid-medium,
          .grid-small {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }

          .calendarCard {
            overflow-x: auto;
          }

          .calendarWeekdays,
          .calendarGrid {
            min-width: 800px;
          }
        }

        @media (
          max-width: 640px
        ) {
          .container {
            width: min(
              100% - 24px,
              1240px
            );
          }

          .topBanner {
            width: 150%;
            max-width: none;
            height: auto;
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

          .card-large .cardBody {
            padding: 21px;
          }

          .card-medium .cardBody {
            padding: 18px;
          }

          .card-small {
            display: grid;
            grid-template-columns:
              minmax(125px, 40%)
              minmax(0, 60%);
          }

          .card-small
            .cardImageLink {
            height: 100%;
          }

          .card-small .image {
            width: 100%;
            height: 100%;
            min-height: 210px;
            aspect-ratio: auto;
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

          .categoryNavigation {
            gap: 8px;
          }

          .categoryFilter {
            padding: 10px 13px;
            font-size: 12px;
          }

          .selectedCategoryHead {
            align-items:
              flex-start;
            padding: 17px;
          }
        }

        @media (
          max-width: 390px
        ) {
          .card-small {
            display: flex;
          }

          .card-small .image {
            height: auto;
            min-height: 0;
            aspect-ratio: 16 / 9;
          }
        }
      `}</style>
    </main>
  );
}
