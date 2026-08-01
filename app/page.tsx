import Image from "next/image";
import Link from "next/link";
import heroBanner from "../hero-banner.png";
import { getEvents } from "../lib/notion";

export const revalidate = 300;

export default async function Home() {
  const events = await getEvents();

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

      <section className="container section">
        <div className="sectionHead">
          <h1>開催予定のイベント</h1>
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
                <article className="card" key={event.id}>
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
            })}
          </div>
        )}
      </section>

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
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }

        .section {
          padding-top: 58px;
          padding-bottom: 100px;
        }

        .sectionHead {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          margin-bottom: 30px;
        }

        .sectionHead h1 {
          margin: 0;
          font-size: clamp(27px, 4vw, 38px);
          line-height: 1.3;
        }

        .sectionHead > span {
          color: #888;
          font-size: 14px;
          font-weight: 700;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          align-items: stretch;
        }

        .card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid #e8e8e4;
          border-radius: 17px;
          background: #fff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.045);
        }

        .cardImageLink {
          display: block;
          background: #eee;
        }

        .image {
          display: block;
          width: 100%;
          aspect-ratio: 16 / 10;
          object-fit: cover;
        }

        .placeholder {
          display: grid;
          place-items: center;
          color: #888;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .cardBody {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 20px;
        }

        .category {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          margin-bottom: 15px;
          padding: 7px 13px;
          border-radius: 999px;
          background: #f1eee5;
          color: #5f5337;
          font-size: 12px;
          line-height: 1;
          font-weight: 800;
        }

        .eventTitle {
          margin: 0;
          font-size: 20px;
          line-height: 1.5;
        }

        .eventTitle a {
          color: inherit;
          text-decoration: none;
        }

        .eventMeta {
          display: grid;
          gap: 14px;
          margin: 23px 0 25px;
        }

        .metaRow {
          display: grid;
          grid-template-columns: 27px 1fr;
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
          gap: 3px;
          min-width: 0;
        }

        .metaLabel {
          color: #999;
          font-size: 10px;
          font-weight: 700;
        }

        .metaRow strong {
          color: #222;
          font-size: 14px;
          line-height: 1.55;
          overflow-wrap: anywhere;
        }

        .detailButton {
          display: block;
          margin-top: auto;
          padding: 15px;
          border-radius: 10px;
          background: #111;
          color: #fff;
          text-align: center;
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
        }

        .empty {
          padding: 50px 20px;
          border-radius: 15px;
          background: #fff;
          color: #777;
          text-align: center;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .container {
            width: min(100% - 24px, 1120px);
          }

          .topBanner {
            width: 150%;
            max-width: none;
            height: auto;
            margin-left: -25%;
          }

          .section {
            padding-top: 34px;
            padding-bottom: 70px;
          }

          .sectionHead {
            margin-bottom: 22px;
          }

          .grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .cardBody {
            padding: 18px;
          }
        }
      `}</style>
    </main>
  );
}
