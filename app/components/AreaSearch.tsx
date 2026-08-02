import Link from "next/link";
import type {
  EventItem,
} from "../../lib/notion";

type AreaSearchProps = {
  events: EventItem[];
};

const areaIcons: Record<
  string,
  string
> = {
  新宿: "🏙️",
  高田馬場: "🎓",
  渋谷: "✨",
  "恵比寿・代官山": "🍷",
  "原宿・表参道": "🛍️",
  池袋: "🎡",
  "六本木・麻布": "🌃",
  赤坂: "🏢",
  "銀座・有楽町": "💎",
  "東京・丸の内": "🚉",
  "上野・御徒町": "🌳",
  浅草: "🏮",
  "秋葉原・神田": "🎮",
  "品川・田町": "🚄",
  "浜松町・新橋": "🗼",
  目黒: "🌿",
  "五反田・大崎": "🏙️",
  中野: "🎭",
  吉祥寺: "🌱",
  錦糸町: "🌉",
  その他: "📍",
};

export default function AreaSearch({
  events,
}: AreaSearchProps) {
  const areaCounts =
    events.reduce<
      Record<string, number>
    >((result, event) => {
      if (!event.area) {
        return result;
      }

      result[event.area] =
        (result[event.area] || 0) +
        1;

      return result;
    }, {});

  const areas = Object.entries(
    areaCounts,
  ).sort(
    ([areaA, countA], [
      areaB,
      countB,
    ]) => {
      if (countA !== countB) {
        return countB - countA;
      }

      return areaA.localeCompare(
        areaB,
        "ja",
      );
    },
  );

  if (areas.length === 0) {
    return null;
  }

  return (
    <section className="areaSection">
      <div className="areaContainer">
        <div className="areaHeading">
          <div>
            <p>SEARCH BY AREA</p>

            <h2>
              <span>エリアから</span>
              <strong>イベントを探す</strong>
            </h2>

            <p className="areaDescription">
              開催場所から、参加しやすいイベントを探せます。
            </p>
          </div>

          <div className="areaIllustration">
            <span>📍</span>

            <div>
              <small>
                TOKYO EVENT NAVI
              </small>

              <strong>
                東京のイベントを
                <br />
                場所からチェック
              </strong>
            </div>
          </div>
        </div>

        <div className="areaGrid">
          {areas.map(
            ([area, count]) => (
              <Link
                key={area}
                href={`/areas/${encodeURIComponent(area)}`}
                className="areaCard"
              >
                <span className="areaIcon">
                  {areaIcons[area] ||
                    "📍"}
                </span>

                <div>
                  <strong>{area}</strong>

                  <small>
                    開催予定のイベント
                  </small>
                </div>

                <span className="areaCount">
                  {count}
                  <small>件</small>
                </span>

                <span className="areaArrow">
                  →
                </span>
              </Link>
            ),
          )}
        </div>
      </div>

      <style>{`
        .areaSection {
          padding: 100px 0;
          background:
            radial-gradient(
              circle at 8% 15%,
              rgba(242, 100, 25, 0.1),
              transparent 28%
            ),
            radial-gradient(
              circle at 92% 85%,
              rgba(39, 134, 90, 0.1),
              transparent 30%
            ),
            #fffaf3;
        }

        .areaContainer {
          width: min(
            1120px,
            calc(100% - 40px)
          );
          margin: 0 auto;
        }

        .areaHeading {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            330px;
          align-items: end;
          gap: 50px;
          margin-bottom: 43px;
        }

        .areaHeading > div:first-child > p:first-child {
          margin: 0 0 11px;
          color: #f26419;
          font-size: 9px;
          font-weight: 1000;
          letter-spacing: 0.2em;
        }

        .areaHeading h2 {
          display: grid;
          gap: 2px;
          margin: 0;
          color: #17243b;
          font-size: clamp(
            34px,
            4.8vw,
            53px
          );
          line-height: 1.28;
          letter-spacing: -0.05em;
        }

        .areaHeading h2 span,
        .areaHeading h2 strong {
          display: block;
        }

        .areaHeading h2 strong {
          color: #f26419;
        }

        .areaDescription {
          margin: 17px 0 0;
          color: #6c7584;
          font-size: 13px;
          line-height: 1.8;
        }

        .areaIllustration {
          display: grid;
          grid-template-columns:
            66px minmax(0, 1fr);
          align-items: center;
          gap: 15px;
          padding: 20px;
          border:
            1px solid
            rgba(242, 100, 25, 0.18);
          border-radius: 18px;
          background:
            rgba(255, 255, 255, 0.88);
          box-shadow:
            0 13px 35px
            rgba(66, 45, 25, 0.07);
        }

        .areaIllustration > span {
          width: 65px;
          height: 65px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          background: #fff0df;
          font-size: 29px;
        }

        .areaIllustration > div {
          display: grid;
          gap: 5px;
        }

        .areaIllustration small {
          color: #f26419;
          font-size: 7px;
          font-weight: 1000;
          letter-spacing: 0.13em;
        }

        .areaIllustration strong {
          color: #2b384d;
          font-size: 13px;
          line-height: 1.55;
        }

        .areaGrid {
          display: grid;
          grid-template-columns:
            repeat(
              4,
              minmax(0, 1fr)
            );
          gap: 14px;
        }

        .areaCard {
          position: relative;
          display: grid;
          grid-template-columns:
            52px minmax(0, 1fr)
            auto;
          align-items: center;
          gap: 13px;
          min-height: 105px;
          overflow: hidden;
          padding: 17px 40px 17px 17px;
          border:
            1px solid
            rgba(226, 186, 150, 0.5);
          border-radius: 16px;
          background: #fff;
          box-shadow:
            0 10px 27px
            rgba(55, 43, 30, 0.06);
          color: #17243b;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            border-color 0.2s ease;
        }

        .areaCard:hover {
          border-color:
            rgba(242, 100, 25, 0.55);
          box-shadow:
            0 18px 38px
            rgba(55, 43, 30, 0.12);
          transform:
            translateY(-5px);
        }

        .areaIcon {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background:
            linear-gradient(
              145deg,
              #fff2e3,
              #ffe7cc
            );
          font-size: 24px;
        }

        .areaCard > div {
          min-width: 0;
          display: grid;
          gap: 5px;
        }

        .areaCard > div strong {
          color: #26344b;
          font-size: 14px;
          line-height: 1.4;
        }

        .areaCard > div small {
          color: #959ba5;
          font-size: 8px;
        }

        .areaCount {
          min-width: 35px;
          color: #f26419;
          font-size: 20px;
          font-weight: 1000;
          text-align: right;
        }

        .areaCount small {
          margin-left: 2px;
          font-size: 8px;
        }

        .areaArrow {
          position: absolute;
          right: 12px;
          color: #c9a98f;
          font-size: 16px;
          font-weight: 900;
          transition:
            transform 0.2s ease;
        }

        .areaCard:hover
          .areaArrow {
          color: #f26419;
          transform:
            translateX(3px);
        }

        @media (
          max-width: 950px
        ) {
          .areaGrid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }
        }

        @media (
          max-width: 700px
        ) {
          .areaSection {
            padding: 72px 0;
          }

          .areaContainer {
            width:
              calc(100% - 24px);
          }

          .areaHeading {
            grid-template-columns:
              1fr;
            gap: 24px;
          }

          .areaHeading h2 {
            font-size: 32px;
          }

          .areaIllustration {
            max-width: 380px;
          }
        }

        @media (
          max-width: 520px
        ) {
          .areaGrid {
            grid-template-columns:
              1fr;
          }

          .areaCard {
            min-height: 94px;
          }
        }
      `}</style>
    </section>
  );
}
