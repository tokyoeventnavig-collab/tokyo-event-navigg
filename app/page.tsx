import Link from "next/link";
import { getEvents } from "../lib/notion";

export const revalidate = 300;

export default async function Home() {
  const events = await getEvents();

  return (
    <main>
      <header className="hero">
        <div className="container">
          <p className="eyebrow">
            TOKYO EVENT NAVI
          </p>

          <h1>東京イベントナビ</h1>

          <p className="lead">
            東京で開催される飲み会・交流会・
            趣味イベントを掲載しています。
          </p>
        </div>
      </header>

      <section className="container section">
        <div className="sectionHead">
          <h2>開催予定のイベント</h2>
          <span>{events.length}件</span>
        </div>

        {events.length === 0 ? (
          <div className="empty">
            現在、公開中のイベントはありません。
          </div>
        ) : (
          <div className="grid">
            {events.map((event) => {
              const hasTime =
                event.startTime || event.endTime;

              return (
                <article
                  className="card"
                  key={event.id}
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

                    <h3>
                      <Link
                        href={`/events/${event.id}`}
                      >
                        {event.title}
                      </Link>
                    </h3>

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
                      className="button"
                      href={`/events/${event.id}`}
                    >
                      詳細を見る
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <style>{`
        .cardImageLink {
          display: block;
        }

        .cardBody h3 a {
          color: inherit;
          text-decoration: none;
        }

        .category {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          margin-bottom: 14px;
          padding: 7px 13px;
          border-radius: 999px;
          background: #f1eee5;
          color: #5f5337;
          font-size: 12px;
          line-height: 1;
          font-weight: 800;
        }

        .eventMeta {
          display: grid;
          gap: 13px;
          margin: 20px 0 22px;
        }

        .metaRow {
          display: grid;
          grid-template-columns: 25px 1fr;
          align-items: start;
          gap: 9px;
        }

        .metaIcon {
          padding-top: 1px;
          font-size: 16px;
          line-height: 1.4;
        }

        .metaRow > div {
          display: grid;
          gap: 2px;
          min-width: 0;
        }

        .metaLabel {
          color: #969696;
          font-size: 11px;
          line-height: 1.4;
          font-weight: 700;
        }

        .metaRow strong {
          color: #222;
          font-size: 14px;
          line-height: 1.55;
          overflow-wrap: anywhere;
        }

        @media (max-width: 640px) {
          .eventMeta {
            gap: 11px;
          }

          .metaRow strong {
            font-size: 13px;
          }
        }
      `}</style>
    </main>
  );
}
