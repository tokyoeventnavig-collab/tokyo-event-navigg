import Link from "next/link";
import {
  getEvents,
} from "../../../lib/notion";

export const revalidate = 300;

type AreaPageProps = {
  params: Promise<{
    area: string;
  }>;
};

export async function generateMetadata({
  params,
}: AreaPageProps) {
  const { area } = await params;

  const decodedArea =
    decodeURIComponent(area);

  return {
    title: `${decodedArea}のイベント一覧｜東京イベントナビ`,

    description:
      `${decodedArea}で開催される飲み会、交流会、趣味イベント、セミナーなどを掲載しています。`,
  };
}

function getEventTime(
  startTime: string,
  endTime: string,
): string {
  if (
    startTime &&
    endTime
  ) {
    return `${startTime} 〜 ${endTime}`;
  }

  return (
    startTime ||
    endTime ||
    "時間未定"
  );
}

export default async function AreaPage({
  params,
}: AreaPageProps) {
  const { area } = await params;

  const decodedArea =
    decodeURIComponent(area);

  const allEvents =
    await getEvents();

  const events = allEvents
    .filter(
      (event) =>
        event.area ===
        decodedArea,
    )
    .sort((a, b) => {
      if (
        !a.dateISO &&
        !b.dateISO
      ) {
        return 0;
      }

      if (!a.dateISO) {
        return 1;
      }

      if (!b.dateISO) {
        return -1;
      }

      return (
        new Date(
          a.dateISO,
        ).getTime() -
        new Date(
          b.dateISO,
        ).getTime()
      );
    });

  return (
    <main className="areaPage">
      <header className="header">
        <div className="headerInner">
          <Link
            href="/"
            className="logo"
          >
            <span>東京</span>
            イベントナビ
          </Link>

          <Link
            href="/"
            className="backLink"
          >
            TOPページへ戻る
          </Link>
        </div>
      </header>

      <section className="hero">
        <div className="heroCircle" />

        <div className="heroInner">
          <div>
            <p>
              SEARCH BY AREA
            </p>

            <h1>
              <strong>
                {decodedArea}
              </strong>
              のイベント
            </h1>

            <p className="heroDescription">
              {decodedArea}
              で開催されるイベントをまとめて確認できます。
            </p>
          </div>

          <div className="heroCount">
            <span>開催予定</span>

            <strong>
              {events.length}
            </strong>

            <small>件</small>
          </div>
        </div>
      </section>

      <section className="eventSection">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p>
                AREA EVENTS
              </p>

              <h2>
                開催予定のイベント
              </h2>
            </div>

            <Link
              href="/"
              className="allEventsLink"
            >
              すべてのイベントを見る
              <span>→</span>
            </Link>
          </div>

          {events.length === 0 ? (
            <div className="empty">
              <span>📅</span>

              <h2>
                現在、
                {decodedArea}
                のイベントはありません
              </h2>

              <p>
                新しいイベントが掲載されるまでお待ちください。
              </p>

              <Link href="/">
                TOPページへ戻る
              </Link>
            </div>
          ) : (
            <div className="grid">
              {events.map(
                (event) => (
                  <article
                    className="card"
                    key={event.id}
                  >
                    <Link
                      href={`/events/${event.id}`}
                      className="imageLink"
                    >
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
                        <div className="placeholder">
                          TOKYO EVENT NAVI
                        </div>
                      )}

                      <span className="areaLabel">
                        📍
                        {event.area}
                      </span>
                    </Link>

                    <div className="cardBody">
                      {event.category && (
                        <span className="category">
                          {
                            event.category
                          }
                        </span>
                      )}

                      <h2>
                        <Link
                          href={`/events/${event.id}`}
                        >
                          {event.title}
                        </Link>
                      </h2>

                      <div className="information">
                        {event.date && (
                          <div>
                            <span>
                              📅
                            </span>

                            <p>
                              <small>
                                開催日
                              </small>

                              <strong>
                                {
                                  event.date
                                }
                              </strong>
                            </p>
                          </div>
                        )}

                        <div>
                          <span>🕐</span>

                          <p>
                            <small>
                              開催時間
                            </small>

                            <strong>
                              {getEventTime(
                                event.startTime,
                                event.endTime,
                              )}
                            </strong>
                          </p>
                        </div>

                        {event.location && (
                          <div>
                            <span>
                              📍
                            </span>

                            <p>
                              <small>
                                会場
                              </small>

                              <strong>
                                {
                                  event.location
                                }
                              </strong>
                            </p>
                          </div>
                        )}
                      </div>

                      <Link
                        href={`/events/${event.id}`}
                        className="detailButton"
                      >
                        詳細を見る
                        <span>→</span>
                      </Link>
                    </div>
                  </article>
                ),
              )}
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        <Link href="/">
          東京イベントナビ
        </Link>

        <p>
          東京で開催されるイベントを、
          探している人へ分かりやすく届けます。
        </p>
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .areaPage {
          min-height: 100vh;
          background: #f7f7f5;
          color: #17243b;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Helvetica Neue",
            "Yu Gothic",
            "Hiragino Kaku Gothic ProN",
            sans-serif;
        }

        .header {
          border-bottom:
            1px solid
            rgba(23, 36, 59, 0.08);
          background: #fff;
        }

        .headerInner {
          width: min(
            1120px,
            calc(100% - 40px)
          );
          min-height: 70px;
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          margin: 0 auto;
        }

        .logo {
          color: #17243b;
          text-decoration: none;
          font-size: 19px;
          font-weight: 900;
        }

        .logo span {
          color: #f26419;
        }

        .backLink {
          padding: 10px 14px;
          border-radius: 9px;
          background: #17243b;
          color: #fff;
          text-decoration: none;
          font-size: 10px;
          font-weight: 900;
        }

        .hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(242, 100, 25, 0.14),
              transparent 29%
            ),
            linear-gradient(
              135deg,
              #fff7e9,
              #fffdf9,
              #ffead0
            );
        }

        .heroCircle {
          position: absolute;
          top: -180px;
          right: -110px;
          width: 420px;
          height: 420px;
          border:
            82px solid
            rgba(242, 100, 25, 0.06);
          border-radius: 50%;
        }

        .heroInner {
          position: relative;
          width: min(
            1120px,
            calc(100% - 40px)
          );
          min-height: 330px;
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          gap: 40px;
          margin: 0 auto;
          padding: 60px 0;
        }

        .heroInner > div:first-child > p:first-child {
          margin: 0 0 13px;
          color: #f26419;
          font-size: 9px;
          font-weight: 1000;
          letter-spacing: 0.2em;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(
            39px,
            6vw,
            66px
          );
          line-height: 1.25;
          letter-spacing: -0.06em;
        }

        .hero h1 strong {
          color: #f26419;
        }

        .heroDescription {
          margin: 17px 0 0;
          color: #6c7584;
          font-size: 13px;
          line-height: 1.8;
        }

        .heroCount {
          width: 150px;
          height: 150px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          align-content: center;
          border: 9px solid #fff;
          border-radius: 50%;
          background:
            linear-gradient(
              145deg,
              #f26419,
              #ff8a35
            );
          box-shadow:
            0 20px 45px
            rgba(242, 100, 25, 0.28);
          color: #fff;
          text-align: center;
          transform: rotate(5deg);
        }

        .heroCount span {
          font-size: 9px;
          font-weight: 900;
        }

        .heroCount strong {
          font-size: 47px;
          line-height: 1;
        }

        .heroCount small {
          font-size: 9px;
        }

        .eventSection {
          padding: 80px 0 110px;
        }

        .container {
          width: min(
            1120px,
            calc(100% - 40px)
          );
          margin: 0 auto;
        }

        .sectionHead {
          display: flex;
          justify-content:
            space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 29px;
        }

        .sectionHead p {
          margin: 0 0 7px;
          color: #f26419;
          font-size: 8px;
          font-weight: 1000;
          letter-spacing: 0.18em;
        }

        .sectionHead h2 {
          margin: 0;
          font-size: 29px;
        }

        .allEventsLink {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #596273;
          text-decoration: none;
          font-size: 10px;
          font-weight: 900;
        }

        .allEventsLink span {
          color: #f26419;
          font-size: 17px;
        }

        .grid {
          display: grid;
          grid-template-columns:
            repeat(
              3,
              minmax(0, 1fr)
            );
          gap: 21px;
        }

        .card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border:
            1px solid #e8e5df;
          border-radius: 18px;
          background: #fff;
          box-shadow:
            0 12px 32px
            rgba(41, 37, 31, 0.06);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .card:hover {
          box-shadow:
            0 20px 44px
            rgba(41, 37, 31, 0.12);
          transform:
            translateY(-6px);
        }

        .imageLink {
          position: relative;
          display: block;
          overflow: hidden;
          background: #eee;
        }

        .imageLink img,
        .placeholder {
          display: block;
          width: 100%;
          aspect-ratio: 16 / 10;
        }

        .imageLink img {
          object-fit: cover;
          transition:
            transform 0.35s ease;
        }

        .card:hover
          .imageLink img {
          transform: scale(1.05);
        }

        .placeholder {
          display: grid;
          place-items: center;
          color: #999;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.14em;
        }

        .areaLabel {
          position: absolute;
          right: 12px;
          bottom: 12px;
          padding: 7px 10px;
          border-radius: 999px;
          background:
            rgba(23, 36, 59, 0.88);
          color: #fff;
          font-size: 9px;
          font-weight: 900;
          backdrop-filter: blur(7px);
        }

        .cardBody {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        .category {
          display: inline-flex;
          width: fit-content;
          margin-bottom: 13px;
          padding: 7px 11px;
          border-radius: 999px;
          background: #fff0df;
          color: #a94d1c;
          font-size: 9px;
          font-weight: 900;
        }

        .cardBody h2 {
          margin: 0;
          font-size: 18px;
          line-height: 1.5;
        }

        .cardBody h2 a {
          color: inherit;
          text-decoration: none;
        }

        .information {
          display: grid;
          gap: 13px;
          margin: 22px 0 24px;
        }

        .information > div {
          display: grid;
          grid-template-columns:
            25px minmax(0, 1fr);
          gap: 9px;
          align-items: start;
        }

        .information > div > span {
          font-size: 15px;
        }

        .information p {
          display: grid;
          gap: 3px;
          margin: 0;
        }

        .information small {
          color: #9a9da5;
          font-size: 8px;
        }

        .information strong {
          color: #3b4555;
          font-size: 11px;
          line-height: 1.55;
        }

        .detailButton {
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          margin-top: auto;
          padding: 13px 15px;
          border-radius: 9px;
          background: #17243b;
          color: #fff;
          text-decoration: none;
          font-size: 10px;
          font-weight: 900;
        }

        .detailButton span {
          font-size: 16px;
        }

        .empty {
          display: grid;
          justify-items: center;
          padding: 75px 20px;
          border-radius: 20px;
          background: #fff;
          text-align: center;
        }

        .empty > span {
          font-size: 49px;
        }

        .empty h2 {
          margin: 20px 0 10px;
          font-size: 23px;
        }

        .empty p {
          margin: 0;
          color: #7f8793;
          font-size: 12px;
        }

        .empty a {
          margin-top: 24px;
          padding: 12px 18px;
          border-radius: 9px;
          background: #17243b;
          color: #fff;
          text-decoration: none;
          font-size: 10px;
          font-weight: 900;
        }

        .footer {
          padding: 45px 20px;
          background: #17243b;
          color: #aeb7c4;
          text-align: center;
        }

        .footer a {
          color: #fff;
          text-decoration: none;
          font-size: 17px;
          font-weight: 900;
        }

        .footer p {
          margin: 12px 0 0;
          font-size: 9px;
          line-height: 1.7;
        }

        @media (
          max-width: 900px
        ) {
          .grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }
        }

        @media (
          max-width: 640px
        ) {
          .headerInner,
          .heroInner,
          .container {
            width:
              calc(100% - 24px);
          }

          .heroInner {
            min-height: 300px;
          }

          .hero h1 {
            font-size: 39px;
          }

          .heroCount {
            width: 105px;
            height: 105px;
            border-width: 6px;
          }

          .heroCount strong {
            font-size: 32px;
          }

          .sectionHead {
            align-items: start;
            flex-direction: column;
          }

          .grid {
            grid-template-columns:
              1fr;
          }
        }
      `}</style>
    </main>
  );
}
