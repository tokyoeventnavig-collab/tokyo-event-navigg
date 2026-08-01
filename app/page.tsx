import Image from "next/image";
import Link from "next/link";
import heroBanner from "../hero-banner.png";
import {
  getEvents,
  type EventItem,
} from "../lib/notion";

export const revalidate = 300;

type CardSize = "large" | "medium" | "small";

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

                <strong>{event.date}</strong>
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

export default async function Home() {
  const allEvents = await getEvents();

  /*
   * 人気イベント
   * F1にチェックがあるイベントを
   * 開催日が近い順に表示
   */
  const featuredEvents = allEvents
    .filter((event) => event.featured)
    .sort(
      (a, b) =>
        getEventTimestamp(a) -
        getEventTimestamp(b),
    );

  /*
   * 新着イベント
   * Notionへの追加日時が新しい順で
   * 最大10件表示
   */
  const newEvents = [...allEvents]
    .sort((a, b) => {
      const aTime = a.createdTime
        ? new Date(a.createdTime).getTime()
        : 0;

      const bTime = b.createdTime
        ? new Date(b.createdTime).getTime()
        : 0;

      return bTime - aTime;
    })
    .slice(0, 10);

  /*
   * 今週のイベント
   * 現在時刻から7日後までに
   * 開催されるイベントを表示
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
            1180px,
            calc(100% - 40px)
          );
          margin: 0 auto;
        }

        .sections {
          display: grid;
          gap: 96px;
          padding-top: 64px;
          padding-bottom: 120px;
        }

        .eventSection {
          min-width: 0;
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
         * PCでは2列
         */
        .grid-large {
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 30px;
        }

        /*
         * 新着イベント：中
         * PCでは3列
         */
        .grid-medium {
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        /*
         * 今週のイベント：小
         * PCでは4列
         */
        .grid-small {
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 16px;
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
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .card:hover {
          transform: translateY(-3px);
          box-shadow:
            0 18px 42px
            rgba(0, 0, 0, 0.075);
        }

        .card-large {
          border-radius: 22px;
        }

        .card-medium {
          border-radius: 17px;
        }

        .card-small {
          border-radius: 14px;
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
          transition: transform 0.25s ease;
        }

        .card:hover .image {
          transform: scale(1.015);
        }

        /*
         * 大カードはフライヤーを大きく表示
         */
        .card-large .image {
          aspect-ratio: 16 / 10;
        }

        /*
         * 中カードは現在に近いサイズ
         */
        .card-medium .image {
          aspect-ratio: 16 / 10;
        }

        /*
         * 小カードは少し横長にして
         * 縦方向をコンパクトにする
         */
        .card-small .image {
          aspect-ratio: 16 / 9;
        }

        .placeholder {
          display: grid;
          place-items: center;
          color: #888;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .card-large .placeholder {
          font-size: 14px;
        }

        .card-medium .placeholder,
        .card-small .placeholder {
          font-size: 11px;
        }

        .cardBody {
          display: flex;
          flex: 1;
          flex-direction: column;
        }

        .card-large .cardBody {
          padding: 28px;
        }

        .card-medium .cardBody {
          padding: 20px;
        }

        .card-small .cardBody {
          padding: 15px;
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
          margin-bottom: 18px;
          padding: 8px 14px;
          font-size: 13px;
        }

        .card-medium .category {
          margin-bottom: 15px;
          padding: 7px 13px;
          font-size: 12px;
        }

        .card-small .category {
          margin-bottom: 11px;
          padding: 6px 10px;
          font-size: 10px;
        }

        .eventTitle {
          margin: 0;
        }

        .card-large .eventTitle {
          font-size: 27px;
          line-height: 1.45;
        }

        .card-medium .eventTitle {
          font-size: 20px;
          line-height: 1.5;
        }

        .card-small .eventTitle {
          font-size: 16px;
          line-height: 1.5;
        }

        .eventTitle a {
          color: inherit;
          text-decoration: none;
        }

        .eventMeta {
          display: grid;
        }

        .card-large .eventMeta {
          gap: 16px;
          margin: 27px 0 30px;
        }

        .card-medium .eventMeta {
          gap: 14px;
          margin: 23px 0 25px;
        }

        .card-small .eventMeta {
          gap: 10px;
          margin: 17px 0 19px;
        }

        .metaRow {
          display: grid;
          align-items: start;
        }

        .card-large .metaRow {
          grid-template-columns: 30px 1fr;
          gap: 11px;
        }

        .card-medium .metaRow {
          grid-template-columns: 27px 1fr;
          gap: 9px;
        }

        .card-small .metaRow {
          grid-template-columns: 21px 1fr;
          gap: 7px;
        }

        .metaIcon {
          padding-top: 1px;
          line-height: 1.4;
        }

        .card-large .metaIcon {
          font-size: 18px;
        }

        .card-medium .metaIcon {
          font-size: 16px;
        }

        .card-small .metaIcon {
          font-size: 13px;
        }

        .metaRow > div {
          display: grid;
          min-width: 0;
        }

        .card-large .metaRow > div,
        .card-medium .metaRow > div {
          gap: 3px;
        }

        .card-small .metaRow > div {
          gap: 2px;
        }

        .metaLabel {
          color: #999;
          font-weight: 700;
        }

        .card-large .metaLabel {
          font-size: 11px;
        }

        .card-medium .metaLabel {
          font-size: 10px;
        }

        .card-small .metaLabel {
          font-size: 9px;
        }

        .metaRow strong {
          color: #222;
          overflow-wrap: anywhere;
        }

        .card-large .metaRow strong {
          font-size: 15px;
          line-height: 1.6;
        }

        .card-medium .metaRow strong {
          font-size: 14px;
          line-height: 1.55;
        }

        .card-small .metaRow strong {
          font-size: 12px;
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
          padding: 17px;
          border-radius: 11px;
          font-size: 15px;
        }

        .card-medium .detailButton {
          padding: 15px;
          border-radius: 10px;
          font-size: 14px;
        }

        .card-small .detailButton {
          padding: 11px;
          border-radius: 8px;
          font-size: 12px;
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
         * タブレット
         */
        @media (max-width: 980px) {
          .grid-large {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .grid-medium {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .grid-small {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .grid-small {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }

        /*
         * スマートフォン
         */
        @media (max-width: 640px) {
          .container {
            width: min(
              100% - 24px,
              1180px
            );
          }

          .topBanner {
            width: 150%;
            max-width: none;
            height: auto;
            margin-left: -25%;
          }

          .sections {
            gap: 62px;
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

          /*
           * スマホでは人気を一番大きく見せる
           */
          .card-large .cardBody {
            padding: 22px;
          }

          .card-large .eventTitle {
            font-size: 23px;
          }

          /*
           * スマホの新着は標準サイズ
           */
          .card-medium .cardBody {
            padding: 18px;
          }

          /*
           * スマホの今週は小さすぎないよう
           * 最低限の読みやすさを確保
           */
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
            object-fit: cover;
          }

          .card-small .cardBody {
            padding: 14px;
          }

          .card-small .eventTitle {
            font-size: 15px;
          }

          .card-small .category {
            margin-bottom: 9px;
          }

          .card-small .eventMeta {
            gap: 8px;
            margin: 13px 0 15px;
          }

          .card-small .metaRow strong {
            font-size: 11px;
          }

          .card-small .detailButton {
            padding: 10px 7px;
          }
        }

        /*
         * かなり幅の狭いスマホでは
         * 今週カードも通常の縦型に戻す
         */
        @media (max-width: 390px) {
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
