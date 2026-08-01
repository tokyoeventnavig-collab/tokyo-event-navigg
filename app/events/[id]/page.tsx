import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventById } from "../../../lib/notion";

export const revalidate = 300;

const APPLICATION_URL =
  "https://lin.ee/Q6dBeSg";

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
      title:
        "イベントが見つかりません｜東京イベントナビ",
    };
  }

  return {
    title: `${event.title}｜東京イベントナビ`,
    description:
      event.description ||
      `${event.title}の開催日時・会場・参加条件・申込み情報をご案内します。`,
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

  const mapsQuery =
    event.venueAddress ||
    event.location;

  const mapsUrl = mapsQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        mapsQuery,
      )}`
    : "";

  return (
    <main className="eventPage">
      <header className="siteHeader">
        <div className="wideContainer headerInner">
          <Link className="brand" href="/">
            <span className="brandEnglish">
              TOKYO EVENT NAVI
            </span>

            <span className="brandJapanese">
              東京イベントナビ
            </span>
          </Link>

          <Link className="backLink" href="/">
            イベント一覧
          </Link>
        </div>
      </header>

      <section className="eventHero">
        <div className="wideContainer heroGrid">
          <div className="visualArea">
            {event.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="heroImage"
                src={event.image}
                alt={event.title}
              />
            ) : (
              <div className="heroImage placeholder">
                TOKYO EVENT NAVI
              </div>
            )}
          </div>

          <div className="heroContent">
            {event.category && (
              <p className="category">
                {event.category}
              </p>
            )}

            <h1>{event.title}</h1>

            <p className="heroLead">
              気になるイベントを見つけたら、
              公式LINEから簡単にお申し込みいただけます。
              定員に達する前に、まずは詳細をご確認ください。
            </p>

            <div className="quickInformation">
              {event.date && (
                <div className="quickRow">
                  <span className="quickIcon">
                    📅
                  </span>

                  <div>
                    <span className="quickLabel">
                      開催日
                    </span>

                    <strong>
                      {event.date}
                    </strong>
                  </div>
                </div>
              )}

              {hasTime && (
                <div className="quickRow">
                  <span className="quickIcon">
                    🕐
                  </span>

                  <div>
                    <span className="quickLabel">
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
                <div className="quickRow">
                  <span className="quickIcon">
                    📍
                  </span>

                  <div>
                    <span className="quickLabel">
                      会場
                    </span>

                    <strong>
                      {event.location}
                    </strong>
                  </div>
                </div>
              )}
            </div>

            <a
              className="primaryButton"
              href={APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              公式LINEから申し込む
              <span>→</span>
            </a>

            <p className="buttonNote">
              LINEを開き、参加希望のイベント名を
              お送りください。
            </p>
          </div>
        </div>
      </section>

      <section className="mainSection">
        <div className="contentContainer">
          <div className="mainColumn">
            <section className="contentCard">
              <p className="sectionEnglish">
                EVENT INFORMATION
              </p>

              <h2>開催情報</h2>

              <div className="informationList">
                {event.date && (
                  <div className="informationRow">
                    <div className="informationIcon">
                      📅
                    </div>

                    <div>
                      <span>開催日</span>
                      <strong>
                        {event.date}
                      </strong>
                    </div>
                  </div>
                )}

                {hasTime && (
                  <div className="informationRow">
                    <div className="informationIcon">
                      🕐
                    </div>

                    <div>
                      <span>開催時間</span>
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
                  <div className="informationRow">
                    <div className="informationIcon">
                      📍
                    </div>

                    <div>
                      <span>会場名</span>
                      <strong>
                        {event.location}
                      </strong>
                    </div>
                  </div>
                )}

                {event.venueAddress && (
                  <div className="informationRow">
                    <div className="informationIcon">
                      🚃
                    </div>

                    <div>
                      <span>会場住所</span>
                      <strong>
                        {event.venueAddress}
                      </strong>

                      {mapsUrl && (
                        <a
                          className="mapLink"
                          href={mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Googleマップで確認
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {event.participationCondition && (
                  <div className="informationRow">
                    <div className="informationIcon">
                      👥
                    </div>

                    <div>
                      <span>参加条件</span>
                      <strong>
                        {
                          event.participationCondition
                        }
                      </strong>
                    </div>
                  </div>
                )}

                {event.organizer && (
                  <div className="informationRow">
                    <div className="informationIcon">
                      🎪
                    </div>

                    <div>
                      <span>主催者</span>
                      <strong>
                        {event.organizer}
                      </strong>
                    </div>
                  </div>
                )}
              </div>
            </section>

            <section className="contentCard">
              <p className="sectionEnglish">
                ABOUT THIS EVENT
              </p>

              <h2>イベント概要</h2>

              {event.description ? (
                <p className="description">
                  {event.description}
                </p>
              ) : (
                <p className="description emptyText">
                  詳細は公式LINEからお問い合わせください。
                  開催内容や参加方法をご案内します。
                </p>
              )}
            </section>

            <section className="recommendCard">
              <div className="recommendIcon">
                ✨
              </div>

              <div>
                <p className="sectionEnglish">
                  RECOMMENDED
                </p>

                <h2>
                  気になった今が、
                  参加を決めるタイミング
                </h2>

                <p>
                  イベントは定員に達し次第、
                  受付を終了する場合があります。
                  参加を検討している方は、
                  公式LINEから早めにご連絡ください。
                </p>
              </div>
            </section>

            <section className="ctaSection">
              <p className="ctaSmall">
                TOKYO EVENT NAVI
              </p>

              <h2>
                このイベントに
                参加してみませんか？
              </h2>

              <p>
                お申し込み・空席確認・質問は、
                公式LINEから受け付けています。
              </p>

              <a
                className="bottomButton"
                href={APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                公式LINEから申し込む
              </a>
            </section>

            <Link
              className="returnLink"
              href="/"
            >
              ← その他のイベントを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="mobileFixedCta">
        <a
          href={APPLICATION_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          公式LINEから申し込む
        </a>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .eventPage {
          min-height: 100vh;
          background: #f6f6f3;
          color: #111;
        }

        .wideContainer {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .contentContainer {
          width: min(900px, calc(100% - 40px));
          margin: 0 auto;
        }

        .siteHeader {
          position: relative;
          z-index: 10;
          background: #101010;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .headerInner {
          min-height: 82px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .brand {
          display: grid;
          gap: 3px;
          color: #fff;
          text-decoration: none;
        }

        .brandEnglish {
          font-size: 10px;
          letter-spacing: 0.2em;
          font-weight: 800;
          opacity: 0.68;
        }

        .brandJapanese {
          font-size: 18px;
          font-weight: 800;
        }

        .backLink {
          padding: 10px 16px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 999px;
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
        }

        .eventHero {
          padding: 56px 0 64px;
          background: #101010;
          color: #fff;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
          gap: 60px;
          align-items: center;
        }

        .visualArea {
          min-width: 0;
        }

        .heroImage {
          display: block;
          width: 100%;
          max-height: 650px;
          object-fit: contain;
          background: #e8e8e5;
          border-radius: 22px;
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.32);
        }

        .placeholder {
          min-height: 480px;
          display: grid;
          place-items: center;
          color: #777;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .heroContent h1 {
          margin: 20px 0 0;
          font-size: clamp(34px, 5vw, 60px);
          line-height: 1.2;
          letter-spacing: -0.04em;
        }

        .category {
          display: inline-flex;
          width: fit-content;
          margin: 0;
          padding: 8px 15px;
          border-radius: 999px;
          background: #fff;
          color: #111;
          font-size: 13px;
          font-weight: 800;
        }

        .heroLead {
          margin: 25px 0 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 15px;
          line-height: 1.9;
        }

        .quickInformation {
          display: grid;
          gap: 0;
          margin-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .quickRow {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 12px;
          padding: 17px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .quickIcon {
          font-size: 20px;
        }

        .quickRow > div {
          display: grid;
          gap: 4px;
        }

        .quickLabel {
          color: rgba(255, 255, 255, 0.55);
          font-size: 11px;
          font-weight: 700;
        }

        .quickRow strong {
          color: #fff;
          font-size: 16px;
          line-height: 1.6;
        }

        .primaryButton {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 30px;
          padding: 20px 24px;
          border-radius: 12px;
          background: #fff;
          color: #111;
          text-decoration: none;
          font-size: 16px;
          font-weight: 900;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .primaryButton:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        .buttonNote {
          margin: 11px 0 0;
          color: rgba(255, 255, 255, 0.55);
          font-size: 11px;
          line-height: 1.6;
          text-align: center;
        }

        .mainSection {
          padding: 72px 0 110px;
        }

        .mainColumn {
          display: grid;
          gap: 24px;
        }

        .contentCard {
          padding: 48px;
          border-radius: 22px;
          background: #fff;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.045);
        }

        .sectionEnglish {
          margin: 0 0 9px;
          color: #999;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .contentCard h2,
        .recommendCard h2,
        .ctaSection h2 {
          margin: 0;
          font-size: clamp(25px, 4vw, 36px);
          line-height: 1.4;
          letter-spacing: -0.025em;
        }

        .informationList {
          margin-top: 34px;
          border-top: 1px solid #ecece8;
        }

        .informationRow {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 17px;
          padding: 23px 0;
          border-bottom: 1px solid #ecece8;
        }

        .informationIcon {
          font-size: 23px;
          line-height: 1.5;
        }

        .informationRow > div:last-child {
          display: grid;
          gap: 6px;
        }

        .informationRow span {
          color: #888;
          font-size: 12px;
          font-weight: 700;
        }

        .informationRow strong {
          font-size: 16px;
          line-height: 1.75;
          overflow-wrap: anywhere;
        }

        .mapLink {
          width: fit-content;
          margin-top: 4px;
          color: #111;
          font-size: 13px;
          font-weight: 800;
          text-underline-offset: 4px;
        }

        .description {
          margin: 30px 0 0;
          font-size: 16px;
          line-height: 2.05;
          white-space: pre-wrap;
          overflow-wrap: anywhere;
        }

        .emptyText {
          color: #666;
        }

        .recommendCard {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 26px;
          padding: 42px 48px;
          border-radius: 22px;
          background: #eee9dc;
        }

        .recommendIcon {
          width: 70px;
          height: 70px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #fff;
          font-size: 30px;
        }

        .recommendCard p:last-child {
          margin: 17px 0 0;
          color: #5e594d;
          font-size: 15px;
          line-height: 1.9;
        }

        .ctaSection {
          padding: 58px 48px;
          border-radius: 22px;
          background: #111;
          color: #fff;
          text-align: center;
        }

        .ctaSmall {
          margin: 0 0 13px;
          color: rgba(255, 255, 255, 0.55);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .ctaSection > p:not(.ctaSmall) {
          margin: 18px 0 0;
          color: rgba(255, 255, 255, 0.67);
          font-size: 14px;
          line-height: 1.8;
        }

        .bottomButton {
          display: block;
          max-width: 520px;
          margin: 29px auto 0;
          padding: 20px;
          border-radius: 12px;
          background: #fff;
          color: #111;
          text-decoration: none;
          font-size: 16px;
          font-weight: 900;
        }

        .returnLink {
          display: block;
          width: fit-content;
          margin: 12px auto 0;
          color: #555;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }

        .mobileFixedCta {
          display: none;
        }

        @media (max-width: 900px) {
          .heroGrid {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .heroContent {
            max-width: 700px;
          }
        }

        @media (max-width: 640px) {
          .wideContainer,
          .contentContainer {
            width: min(100% - 24px, 1180px);
          }

          .headerInner {
            min-height: 68px;
          }

          .brandJapanese {
            font-size: 15px;
          }

          .backLink {
            padding: 8px 12px;
            font-size: 11px;
          }

          .eventHero {
            padding: 20px 0 40px;
          }

          .heroGrid {
            gap: 28px;
          }

          .heroImage {
            border-radius: 13px;
          }

          .placeholder {
            min-height: 310px;
          }

          .heroContent h1 {
            margin-top: 16px;
          }

          .heroLead {
            font-size: 14px;
          }

          .mainSection {
            padding: 22px 0 110px;
          }

          .contentCard {
            padding: 28px 20px;
            border-radius: 14px;
          }

          .informationRow {
            grid-template-columns: 34px 1fr;
            gap: 11px;
          }

          .informationRow strong {
            font-size: 15px;
          }

          .description {
            font-size: 15px;
          }

          .recommendCard {
            grid-template-columns: 1fr;
            padding: 30px 22px;
            border-radius: 14px;
          }

          .recommendIcon {
            width: 56px;
            height: 56px;
            font-size: 25px;
          }

          .ctaSection {
            padding: 38px 22px;
            border-radius: 14px;
          }

          .mobileFixedCta {
            position: fixed;
            z-index: 100;
            right: 0;
            bottom: 0;
            left: 0;
            display: block;
            padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
            background: rgba(255, 255, 255, 0.96);
            border-top: 1px solid #deded9;
            backdrop-filter: blur(10px);
          }

          .mobileFixedCta a {
            display: block;
            padding: 16px;
            border-radius: 10px;
            background: #111;
            color: #fff;
            text-align: center;
            text-decoration: none;
            font-size: 15px;
            font-weight: 900;
          }
        }
      `}</style>
    </main>
  );
}
