import Link from "next/link";

export default function OrganizerCta() {
  return (
    <section className="organizerCta">
      <div className="organizerCtaContent">
        <div className="organizerCtaText">
          <p>FOR EVENT ORGANIZERS</p>

          <h2>
            イベント主催者の方へ
          </h2>

          <h3>
            あなたのイベントを、
            <br />
            もっと多くの人へ。
          </h3>

          <div className="organizerFeatures">
            <span>掲載無料</span>
            <span>東京都内のイベント</span>
            <span>LINEで簡単相談</span>
          </div>

          <p className="organizerDescription">
            東京イベントナビでは、飲み会・交流会・趣味イベント・
            セミナーなどの掲載を受け付けています。
          </p>

          <Link
            href="/event-listing"
            className="organizerButton"
          >
            イベント掲載について見る
          </Link>
        </div>

        <div className="organizerVisual">
          <div className="visualCard visualCardOne">
            <span>🍻</span>
            <strong>飲み会</strong>
          </div>

          <div className="visualCard visualCardTwo">
            <span>🎲</span>
            <strong>趣味イベント</strong>
          </div>

          <div className="visualCard visualCardThree">
            <span>📊</span>
            <strong>セミナー</strong>
          </div>

          <div className="freeCircle">
            掲載
            <strong>無料</strong>
          </div>
        </div>
      </div>

      <style>{`
        .organizerCta {
          overflow: hidden;
          border-radius: 26px;
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(255, 190, 120, 0.45),
              transparent 34%
            ),
            linear-gradient(
              135deg,
              #fff7ea 0%,
              #fffdf9 55%,
              #fff0dc 100%
            );
          box-shadow:
            0 15px 45px
            rgba(76, 45, 20, 0.07);
        }

        .organizerCtaContent {
          display: grid;
          grid-template-columns:
            minmax(0, 1.2fr)
            minmax(320px, 0.8fr);
          align-items: center;
          gap: 45px;
          min-height: 450px;
          padding: 55px;
        }

        .organizerCtaText > p:first-child {
          margin: 0 0 12px;
          color: #ed5a0b;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.18em;
        }

        .organizerCtaText h2 {
          margin: 0 0 18px;
          color: #27334a;
          font-size: 18px;
        }

        .organizerCtaText h3 {
          margin: 0;
          color: #16243b;
          font-size: clamp(
            34px,
            5vw,
            54px
          );
          line-height: 1.25;
          letter-spacing: -0.045em;
        }

        .organizerFeatures {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 25px 0 20px;
        }

        .organizerFeatures span {
          padding: 8px 12px;
          border-radius: 999px;
          background: #fff;
          color: #b44b11;
          font-size: 11px;
          font-weight: 800;
          box-shadow:
            0 4px 15px
            rgba(110, 70, 30, 0.08);
        }

        .organizerDescription {
          max-width: 610px;
          margin: 0 0 28px;
          color: #626b7d;
          font-size: 14px;
          line-height: 1.8;
        }

        .organizerButton {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-width: 280px;
          padding: 16px 22px;
          border-radius: 11px;
          background: #ed5a0b;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 900;
          box-shadow:
            0 12px 30px
            rgba(237, 90, 11, 0.23);
        }

        .organizerVisual {
          position: relative;
          min-height: 300px;
        }

        .visualCard {
          position: absolute;
          width: 165px;
          height: 130px;
          display: grid;
          place-items: center;
          align-content: center;
          gap: 8px;
          border-radius: 18px;
          background: #fff;
          box-shadow:
            0 15px 35px
            rgba(54, 43, 29, 0.12);
        }

        .visualCard span {
          font-size: 38px;
        }

        .visualCard strong {
          color: #29364c;
          font-size: 13px;
        }

        .visualCardOne {
          top: 15px;
          left: 0;
          transform: rotate(-5deg);
        }

        .visualCardTwo {
          top: 105px;
          right: 0;
          transform: rotate(5deg);
        }

        .visualCardThree {
          bottom: 0;
          left: 30px;
          transform: rotate(3deg);
        }

        .freeCircle {
          position: absolute;
          top: 10px;
          right: 8px;
          width: 105px;
          height: 105px;
          display: grid;
          place-items: center;
          align-content: center;
          border-radius: 50%;
          background: #ed5a0b;
          color: #fff;
          font-size: 12px;
          font-weight: 800;
          transform: rotate(8deg);
        }

        .freeCircle strong {
          font-size: 27px;
          line-height: 1;
        }

        @media (
          max-width: 850px
        ) {
          .organizerCtaContent {
            grid-template-columns: 1fr;
          }

          .organizerVisual {
            width: min(
              420px,
              100%
            );
            margin: 0 auto;
          }
        }

        @media (
          max-width: 640px
        ) {
          .organizerCta {
            border-radius: 20px;
          }

          .organizerCtaContent {
            gap: 35px;
            padding: 35px 22px;
          }

          .organizerCtaText h3 {
            font-size: 36px;
          }

          .organizerButton {
            width: 100%;
            min-width: 0;
          }

          .organizerVisual {
            min-height: 270px;
          }

          .visualCard {
            width: 140px;
            height: 115px;
          }

          .freeCircle {
            width: 90px;
            height: 90px;
          }
        }
      `}</style>
    </section>
  );
}
