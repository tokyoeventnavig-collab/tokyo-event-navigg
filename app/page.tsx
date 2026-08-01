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
  }>;
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

function getValidEventDate(
  event: EventItem,
): Date | null {
  const timestamp = getEventTimestamp(event);

  if (!Number.isFinite(timestamp)) {
    return null;
  }

  return new Date(timestamp);
}

function formatCalendarDate(
  event: EventItem,
): {
  month: string;
  day: string;
  weekday: string;
} {
  const eventDate = getValidEventDate(event);

  if (!eventDate) {
    return {
      month: "未定",
      day: "--",
      weekday: "",
    };
  }

  const month = new Intl.DateTimeFormat(
    "ja-JP",
    {
      month: "short",
      timeZone: "Asia/Tokyo",
    },
  ).format(eventDate);

  const day = new Intl.DateTimeFormat(
    "ja-JP",
    {
      day: "2-digit",
      timeZone: "Asia/Tokyo",
    },
  ).format(eventDate);

  const weekday = new Intl.DateTimeFormat(
    "ja-JP",
    {
      weekday: "short",
      timeZone: "Asia/Tokyo",
    },
  ).format(eventDate);

  return {
    month,
    day,
    weekday,
  };
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
    <section
      className={`eventSection section-${size}`}
    >
      <div className="sectionHead">
        <h1>{title}</h1>
        <span>{events.length}件</span>
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

function CalendarSection({
  events,
}: {
  events: EventItem[];
}) {
  const calendarEvents = [...events]
    .filter(
      (event) =>
        Number.isFinite(
          getEventTimestamp(event),
        ),
    )
    .sort(
      (a, b) =>
        getEventTimestamp(a) -
        getEventTimestamp(b),
    );

  return (
    <section className="calendarSection">
      <div className="sectionHead">
        <div>
          <p className="sectionSubTitle">
            EVENT CALENDAR
          </p>

          <h1>イベントカレンダー</h1>
        </div>

        <span>{calendarEvents.length}件</span>
      </div>

      {calendarEvents.length === 0 ? (
        <div className="empty">
          現在、開催日が登録されたイベントはありません。
        </div>
      ) : (
        <div className="calendarList">
          {calendarEvents.map((event) => {
            const calendarDate =
              formatCalendarDate(event);

            return (
              <Link
                className="calendarItem"
                href={`/events/${event.id}`}
                key={`calendar-${event.id}`}
              >
                <div className="calendarDate">
                  <span className="calendarMonth">
                    {calendarDate.month}
                  </span>

                  <strong>
                    {calendarDate.day}
                  </strong>

                  <span className="calendarWeekday">
                    {calendarDate.weekday}
                  </span>
                </div>

                <div className="calendarContent">
                  <div className="calendarTop">
                    {event.category && (
                      <span className="calendarCategory">
                        {event.category}
                      </span>
                    )}

                    {(event.startTime ||
                      event.endTime) && (
                      <span className="calendarTime">
                        {event.startTime ||
                          "未定"}

                        {event.endTime
                          ? ` 〜 ${event.endTime}`
                          : ""}
                      </span>
                    )}
                  </div>

                  <h2>{event.title}</h2>

                  {event.location && (
                    <p>
                      📍 {event.location}
                    </p>
                  )}
                </div>

                <span className="calendarArrow">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}

function CategorySection({
  categories,
  selectedCategory,
  events,
}: {
  categories: string[];
  selectedCategory: string;
  events: EventItem[];
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
          href="/#category-search"
          className={
            selectedCategory
              ? "categoryFilter"
              : "categoryFilter active"
          }
        >
          すべて
        </Link>

        {categories.map((category) => (
          <Link
            href={`/?category=${encodeURIComponent(
              category,
            )}#category-search`}
            className={
              selectedCategory === category
                ? "categoryFilter active"
                : "categoryFilter"
            }
            key={category}
          >
            {category}
          </Link>
        ))}
      </nav>

      {selectedCategory && (
        <div className="selectedCategoryHead">
          <div>
            <span>選択中のカテゴリー</span>
            <h2>{selectedCategory}</h2>
          </div>

          <Link href="/#category-search">
            絞り込みを解除
          </Link>
        </div>
      )}

      {events.length === 0 ? (
        <div className="empty">
          該当するイベントはありません。
        </div>
      ) : (
        <div className="categoryResultGrid">
          {events.map((event) => (
            <EventCard
              event={event}
              size="medium"
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

  const allEvents = await getEvents();

  /*
   * 人気イベント
   * F1チェック・開催日が近い順・最大3件
   */
  const featuredEvents = allEvents
    .filter((event) => event.featured)
    .sort(
      (a, b) =>
        getEventTimestamp(a) -
        getEventTimestamp(b),
    )
    .slice(0, 3);

  /*
   * 新着イベント
   * Notionへの追加日時が新しい順・最大10件
   */
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

  /*
   * 今週のイベント
   * 現在から7日後まで・最大5件
   */
  const now = Date.now();

  const sevenDaysLater =
    now + 7 * 24 * 60 * 60 * 1000;

  const weeklyEvents = allEvents
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

  /*
   * カテゴリー一覧
   * 空欄を除外し、重複をなくします。
   */
  const categories = Array.from(
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

  /*
   * カテゴリー検索結果
   */
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
        />

        <CategorySection
          categories={categories}
          selectedCategory={
            selectedCategory
          }
          events={categoryEvents}
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

        .eventSection,
        .calendarSection,
        .categorySearchSection {
          min-width: 0;
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

        /*
         * 人気イベント：大
         * 最大3件なのでPCでは3列
         */
        .grid-large {
          grid-template-columns:
            repeat(
              3,
              minmax(0, 1fr)
            );
          gap: 26px;
        }

        /*
         * 新着イベント：中
         * 5列×2段で最大10件
         */
        .grid-medium {
          grid-template-columns:
            repeat(
              5,
              minmax(0, 1fr)
            );
          gap: 18px;
        }

        /*
         * 今週のイベント：小
         * 最大5件を横一列
         */
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

        .card-large .image {
          aspect-ratio: 16 / 10;
        }

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
          align-items: center;
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

        /*
         * カレンダー
         */
        .calendarList {
          display: grid;
          gap: 12px;
        }

        .calendarItem {
          display: grid;
          grid-template-columns:
            92px minmax(0, 1fr) 30px;
          gap: 22px;
          align-items: center;
          padding: 19px 22px;
          border:
            1px solid #e6e6e1;
          border-radius: 16px;
          background: #fff;
          color: inherit;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .calendarItem:hover {
          transform:
            translateX(3px);
          box-shadow:
            0 12px 30px
            rgba(0, 0, 0, 0.055);
        }

        .calendarDate {
          display: grid;
          justify-items: center;
          padding: 10px;
          border-radius: 12px;
          background: #111;
          color: #fff;
        }

        .calendarMonth {
          font-size: 10px;
          font-weight: 700;
        }

        .calendarDate strong {
          font-size: 29px;
          line-height: 1.1;
        }

        .calendarWeekday {
          margin-top: 2px;
          color:
            rgba(255, 255, 255, 0.65);
          font-size: 10px;
        }

        .calendarContent {
          min-width: 0;
        }

        .calendarTop {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
          margin-bottom: 7px;
        }

        .calendarCategory {
          padding: 5px 9px;
          border-radius: 999px;
          background: #f1eee5;
          color: #5f5337;
          font-size: 10px;
          font-weight: 800;
        }

        .calendarTime {
          color: #777;
          font-size: 11px;
          font-weight: 700;
        }

        .calendarContent h2 {
          margin: 0;
          font-size: 18px;
          line-height: 1.45;
        }

        .calendarContent p {
          margin: 7px 0 0;
          color: #777;
          font-size: 12px;
        }

        .calendarArrow {
          color: #777;
          font-size: 22px;
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
          border:
            1px solid #dcdcd7;
          border-radius: 999px;
          background: #fff;
          color: #333;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition:
            background 0.2s ease,
            color 0.2s ease;
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

        .categoryResultGrid {
          display: grid;
          grid-template-columns:
            repeat(
              4,
              minmax(0, 1fr)
            );
          gap: 18px;
        }

        /*
         * タブレット
         */
        @media (
          max-width: 1050px
        ) {
          .grid-medium {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );
          }

          .grid-small {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );
          }

          .categoryResultGrid {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );
          }
        }

        @media (
          max-width: 800px
        ) {
          .grid-large {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }

          .grid-medium {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }

          .grid-small {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }

          .categoryResultGrid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }
        }

        /*
         * スマートフォン
         */
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
          .grid-small,
          .categoryResultGrid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .card-large .cardBody {
            padding: 21px;
          }

          .card-large .eventTitle {
            font-size: 22px;
          }

          .card-medium .cardBody {
            padding: 18px;
          }

          .card-medium .eventTitle {
            font-size: 18px;
          }

          .card-medium .metaRow strong {
            font-size: 13px;
          }

          .card-small {
            display: grid;
            grid-template-columns:
              minmax(125px, 40%)
              minmax(0, 60%);
          }

          .card-small .cardImageLink {
            height: 100%;
          }

          .card-small .image {
            width: 100%;
            height: 100%;
            min-height: 210px;
            aspect-ratio: auto;
          }

          .calendarItem {
            grid-template-columns:
              68px minmax(0, 1fr);
            gap: 14px;
            padding: 14px;
          }

          .calendarDate strong {
            font-size: 23px;
          }

          .calendarContent h2 {
            font-size: 15px;
          }

          .calendarArrow {
            display: none;
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
