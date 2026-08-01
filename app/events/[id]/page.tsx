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
      `${event.title}の開催情報・詳細・申し込みはこちら。`,
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

          <dl className="detailInformation">
            {event.date && (
              <div>
                <dt>開催日時</dt>
                <dd>{event.date}</dd>
              </div>
            )}

            {event.location && (
              <div>
                <dt>会場</dt>
                <dd>{event.location}</dd>
              </div>
            )}

            {event.price && (
              <div>
                <dt>参加料金</dt>
                <dd>{event.price}</dd>
              </div>
            )}
          </dl>

          {event.description && (
            <section className="detailDescription">
              <h2>イベント詳細</h2>
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
          max-height: 560px;
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
          background: #fff;
          margin-top: 28px;
          padding: 48px;
          border-radius: 20px;
        }

        .detailCategory {
          display: inline-block;
          margin: 0 0 18px;
          padding: 8px 14px;
          border-radius: 999px;
          background: #f0eee8;
          font-size: 13px;
          font-weight: 700;
        }

        .detailContent h1 {
          margin: 0;
          font-size: clamp(30px, 5vw, 52px);
          line-height: 1.3;
          letter-spacing: -0.03em;
        }

        .detailInformation {
          margin: 36px 0 0;
          border-top: 1px solid #e6e6e2;
        }

        .detailInformation > div {
          display: grid;
          grid-template-columns: 130px 1fr;
          gap: 20px;
          padding: 20px 0;
          border-bottom: 1px solid #e6e6e2;
        }

        .detailInformation dt {
          font-size: 14px;
          color: #777;
          font-weight: 700;
        }

        .detailInformation dd {
          margin: 0;
          font-weight: 700;
          line-height: 1.7;
        }

        .detailDescription {
          margin-top: 42px;
        }

        .detailDescription h2 {
          margin: 0 0 16px;
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
          text-align: center;
          color: #666;
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

          .detailInformation > div {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}</style>
    </main>
  );
}
