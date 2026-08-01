import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventById } from "../../../lib/notion";

export const revalidate = 300;

type EventDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: EventDetailPageProps) {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    return {
      title: "イベントが見つかりません",
    };
  }

  return {
    title: `${event.title}｜東京イベントナビ`,
    description:
      event.description ||
      `${event.title}の開催情報・詳細はこちら。`,
  };
}

export default async function EventDetailPage({
  params,
}: EventDetailPageProps) {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    notFound();
  }

  const hasTime =
    event.startTime || event.endTime;

  return (
    <main className="eventDetailPage">
      <header className="detailHeader">
        <div className="detailContainer">
          <Link className="backLink" href="/">
            ← イベント一覧に戻る
          </Link>
        </div>
      </header>

      <article className="detailContainer detailArticle">
        {event.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="detailImage"
            src={event.image}
            alt={event.title}
          />
        ) : (
          <div className="detailImage detailPlaceholder">
            TOKYO EVENT NAVI
          </div>
        )}

        <div className="detailContent">
          {event.category && (
            <p className="detailCategory">
              {event.category}
            </p>
          )}

          <h1>{event.title}</h1>

          <div className="detailInformation">
            {event.date && (
              <div className="detailRow">
                <span className="detailIcon">
                  📅
                </span>

                <div>
                  <span className="detailLabel">
                    開催日
                  </span>

                  <strong>{event.date}</strong>
                </div>
              </div>
            )}

            {hasTime && (
              <div className="detailRow">
                <span className="detailIcon">
                  🕐
                </span>

                <div>
                  <span className="detailLabel">
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
              <div className="detailRow">
                <span className="detailIcon">
                  📍
                </span>

                <div>
                  <span className="detailLabel">
                    会場
                  </span>

                  <strong>
                    {event.location}
                  </strong>
                </div>
              </div>
            )}
          </div>

          {event.description && (
            <section className="detailDescription">
              <h2>イベント概要</h2>
              <p>{event.description}</p>
            </section>
          )}

          {event.url ? (
            <a
              className="applicationButton"
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              このイベントに申し込む
            </a>
          ) : (
            <p className="noApplication">
              現在、申し込みURLは準備中です。
            </p>
          )}
        </div>
      </article>

      <style>{`
        .eventDetailPage {
          min-height: 100vh;
          background: #f5f5f3;
          color: #111;
        }

        .detailHeader {
          background: #111;
          padding: 28px 20px;
        }

        .detailContainer {
          width: min(920px, calc(100% - 40px));
          margin: 0 auto;
        }

        .backLink {
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
        }

        .detailArticle {
          padding-top: 48px;
          padding-bottom: 80px;
        }

        .detailImage {
          display: block;
          width: 100%;
          max-height: 620px;
          object-fit: contain;
          background: #e9e9e6;
          border-radius: 20px;
        }

        .detailPlaceholder {
          min-height: 420px;
          display: grid;
          place-items: center;
          color: #777;
          letter-spacing: 0.16em;
          font-weight: 700;
        }

        .detailContent {
          margin-top: 28px;
          padding: 48px;
          background: #fff;
          border-radius: 20px;
        }

        .detailCategory {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          margin: 0 0 20px;
          padding: 8px 15px;
          border-radius: 999px;
          background: #f1eee5;
          color: #5f5337;
          font-size: 13px;
          font-weight: 800;
        }

        .detailContent h1 {
          margin: 0;
          font-size: clamp(30px, 5vw, 52px);
          line-height: 1.3;
          letter-spacing: -0.03em;
        }

        .detailInformation {
          display: grid;
          gap: 0;
          margin-top: 38px;
          border-top: 1px solid #e7e7e3;
        }

        .detailRow {
          display: grid;
          grid-template-columns: 34px 1fr;
          gap: 14px;
          align-items: start;
          padding: 20px 0;
          border-bottom: 1px solid #e7e7e3;
        }

        .detailIcon {
          font-size: 21px;
          line-height: 1.5;
        }

        .detailRow > div {
          display: grid;
          gap: 5px;
        }

        .detailLabel {
          color: #888;
          font-size: 12px;
          font-weight: 700;
        }

        .detailRow strong {
          font-size: 17px;
          line-height: 1.7;
        }

        .detailDescription {
          margin-top: 44px;
        }

        .detailDescription h2 {
          margin: 0 0 18px;
          font-size: 24px;
        }

        .detailDescription p {
          margin: 0;
          line-height: 2;
          white-space: pre-wrap;
        }

        .applicationButton {
          display: block;
          margin-top: 42px;
          padding: 20px;
          border-radius: 12px;
          background: #111;
          color: #fff;
          text-align: center;
          text-decoration: none;
          font-size: 17px;
          font-weight: 800;
        }

        .applicationButton:hover {
          opacity: 0.82;
        }

        .noApplication {
          margin-top: 42px;
          padding: 18px;
          background: #f5f5f3;
          border-radius: 10px;
          color: #666;
          text-align: center;
        }

        @media (max-width: 640px) {
          .detailContainer {
            width: min(100% - 24px, 920px);
          }

          .detailArticle {
            padding-top: 20px;
            padding-bottom: 40px;
          }

          .detailImage {
            border-radius: 12px;
          }

          .detailContent {
            margin-top: 14px;
            padding: 28px 20px;
            border-radius: 12px;
          }

          .detailRow strong {
            font-size: 15px;
          }
        }
      `}</style>
    </main>
  );
}
