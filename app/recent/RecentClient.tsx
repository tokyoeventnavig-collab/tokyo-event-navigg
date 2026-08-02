"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import type {
  EventItem,
} from "../../lib/notion";

const STORAGE_KEY =
  "tokyo-event-navi:history";

const PAGE_TITLE =
  "最近チェックしたイベント";

const PAGE_DESCRIPTION =
  "直近に閲覧したイベントを最大10件まで保存しています。";

function readSavedIds(): string[] {
  try {
    const value =
      window.localStorage.getItem(
        STORAGE_KEY,
      );

    const parsed =
      value
        ? JSON.parse(value)
        : [];

    return Array.isArray(parsed)
      ? parsed.filter(
          (
            item,
          ): item is string =>
            typeof item ===
            "string",
        )
      : [];
  } catch {
    return [];
  }
}

function EventCard({
  event,
}: {
  event: EventItem;
}) {
  const timeText =
    event.startTime &&
    event.endTime
      ? `${event.startTime}〜${event.endTime}`
      : event.startTime ||
        event.endTime ||
        "時間未定";

  return (
    <article className="eventCard">
      <Link
        href={`/events/${event.id}`}
        className="imageLink"
      >
        <div className="imageWrap">
          {event.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={event.image}
              alt={event.title}
            />
          ) : (
            <span>
              TOKYO EVENT NAVI
            </span>
          )}
        </div>
      </Link>

      <div className="cardBody">
        {event.category && (
          <span className="category">
            {event.category}
          </span>
        )}

        <h2>
          <Link
            href={`/events/${event.id}`}
          >
            {event.title}
          </Link>
        </h2>

        <div className="meta">
          <p>
            📅 {event.date || "開催日未定"}
          </p>

          <p>
            🕐 {timeText}
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
          className="detailButton"
        >
          詳細を見る
        </Link>
      </div>
    </article>
  );
}

export default function RecentClient({
  events,
}: {
  events: EventItem[];
}) {
  const [
    savedIds,
    setSavedIds,
  ] = useState<string[]>([]);

  useEffect(() => {
    setSavedIds(
      readSavedIds(),
    );
  }, []);

  const savedEvents =
    useMemo(() => {
      const eventMap =
        new Map(
          events.map(
            (event) => [
              event.id,
              event,
            ],
          ),
        );

      return savedIds
        .map(
          (id) =>
            eventMap.get(id),
        )
        .filter(
          (
            event,
          ): event is EventItem =>
            Boolean(event),
        );
    }, [
      events,
      savedIds,
    ]);

  function clearAll() {
    window.localStorage.removeItem(
      STORAGE_KEY,
    );

    setSavedIds([]);
  }

  return (
    <main className="savedPage">
      <header>
        <div className="headerInner">
          <Link
            href="/"
            className="logo"
          >
            <small>
              TOKYO EVENT NAVI
            </small>

            <strong>
              東京イベントナビ
            </strong>
          </Link>

          <nav>
            <Link href="/">
              イベント一覧
            </Link>

            <Link href="/favorites">
              お気に入り
            </Link>

            <Link href="/recent">
              最近見た
            </Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div>
          <p>
            SAVED EVENTS
          </p>

          <h1>
            {PAGE_TITLE}
          </h1>

          <span>
            {PAGE_DESCRIPTION}
          </span>
        </div>
      </section>

      <section className="content">
        <div className="contentInner">
          <div className="contentHead">
            <strong>
              {savedEvents.length}
              件
            </strong>

            {savedEvents.length >
              0 && (
              <button
                type="button"
                onClick={clearAll}
              >
                すべて削除
              </button>
            )}
          </div>

          {savedEvents.length >
          0 ? (
            <div className="eventGrid">
              {savedEvents.map(
                (event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                  />
                ),
              )}
            </div>
          ) : (
            <div className="empty">
              <span>♡</span>

              <h2>
                イベントは
                まだありません
              </h2>

              <p>
                イベント詳細ページから
                保存・閲覧すると
                こちらに表示されます。
              </p>

              <Link href="/">
                イベントを探す
              </Link>
            </div>
          )}
        </div>
      </section>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .savedPage {
          min-height: 100vh;
          background: #f5f5f3;
          color: #111111;
        }

        header {
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

        .logo {
          display: grid;
          gap: 3px;
          color: #ffffff;
          text-decoration: none;
        }

        .logo small {
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.22em;
          opacity: 0.65;
        }

        .logo strong {
          font-size: 15px;
        }

        nav {
          display: flex;
          gap: 7px;
        }

        nav a {
          padding: 9px 12px;
          border:
            1px solid #363636;
          border-radius: 999px;
          color: #d7d7d7;
          font-size: 8px;
          font-weight: 800;
          text-decoration: none;
        }

        .hero {
          padding: 72px 0;
          background: #0d0d0d;
          color: #ffffff;
        }

        .hero > div,
        .contentInner {
          width: min(
            1080px,
            calc(100% - 40px)
          );
          margin: 0 auto;
        }

        .hero p {
          margin: 0 0 10px;
          color: #777777;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.2em;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(
            34px,
            5vw,
            52px
          );
        }

        .hero span {
          display: block;
          margin-top: 14px;
          color: #999999;
          font-size: 11px;
        }

        .content {
          padding: 55px 0 90px;
        }

        .contentHead {
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .contentHead strong {
          font-size: 13px;
        }

        .contentHead button {
          border: 0;
          background: transparent;
          color: #777777;
          cursor: pointer;
          font-size: 9px;
          text-decoration: underline;
        }

        .eventGrid {
          display: grid;
          grid-template-columns:
            repeat(
              4,
              minmax(0, 1fr)
            );
          gap: 14px;
        }

        .eventCard {
          min-width: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border:
            1px solid #e1e1dd;
          border-radius: 12px;
          background: #ffffff;
        }

        .imageLink {
          display: block;
        }

        .imageWrap {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #ededeb;
        }

        .imageWrap img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .imageWrap > span {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: #999999;
          font-size: 7px;
        }

        .cardBody {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 12px;
        }

        .category {
          width: fit-content;
          max-width: 100%;
          margin-bottom: 7px;
          padding: 5px 8px;
          overflow: hidden;
          border-radius: 999px;
          background: #eeeeec;
          color: #555555;
          font-size: 8px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .cardBody h2 {
          display: -webkit-box;
          min-height: 40px;
          margin: 0 0 10px;
          overflow: hidden;
          font-size: 12px;
          line-height: 1.65;
          -webkit-box-orient:
            vertical;
          -webkit-line-clamp: 2;
        }

        .cardBody h2 a {
          color: #111111;
          text-decoration: none;
        }

        .meta {
          min-height: 61px;
          display: grid;
          align-content: start;
          gap: 5px;
          margin-bottom: 10px;
        }

        .meta p {
          margin: 0;
          overflow: hidden;
          color: #666666;
          font-size: 8px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .detailButton {
          margin-top: auto;
          padding: 9px;
          border-radius: 7px;
          background: #111111;
          color: #ffffff;
          text-align: center;
          font-size: 8px;
          font-weight: 800;
          text-decoration: none;
        }

        .empty {
          display: grid;
          justify-items: center;
          padding: 65px 20px;
          border:
            1px solid #e1e1dd;
          border-radius: 14px;
          background: #ffffff;
          text-align: center;
        }

        .empty > span {
          font-size: 38px;
        }

        .empty h2 {
          margin: 15px 0 8px;
          font-size: 20px;
        }

        .empty p {
          margin: 0;
          color: #777777;
          font-size: 10px;
          line-height: 1.8;
        }

        .empty a {
          margin-top: 20px;
          padding: 11px 17px;
          border-radius: 8px;
          background: #111111;
          color: #ffffff;
          font-size: 9px;
          font-weight: 800;
          text-decoration: none;
        }

        @media (
          max-width: 900px
        ) {
          .eventGrid {
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
          .hero > div,
          .contentInner {
            width:
              calc(100% - 24px);
          }

          nav a {
            padding: 8px;
            font-size: 7px;
          }

          .eventGrid {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding-bottom: 9px;
            scroll-snap-type:
              x mandatory;
          }

          .eventCard {
            flex:
              0 0
              min(
                76vw,
                270px
              );
            scroll-snap-align:
              start;
          }
        }
      `}</style>
    </main>
  );
}
