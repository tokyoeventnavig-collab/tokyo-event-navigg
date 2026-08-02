import Link from "next/link";

export const metadata = {
  title: "イベント掲載について｜東京イベントナビ",
  description:
    "東京イベントナビでは、東京都内で開催される飲み会・交流会・趣味イベントなどの掲載を受け付けています。掲載は無料です。",
};

const LINE_URL = "https://lin.ee/P179zyp";

const problems = [
  {
    number: "01",
    title: "良いイベントなのに、知られていない",
    text: "内容には自信があっても、イベントを知ってもらう入口が少なく、認知が広がらない。",
  },
  {
    number: "02",
    title: "毎回ゼロから集客している",
    text: "自分から声をかけ続けないと申込みが止まり、告知や連絡に時間を取られてしまう。",
  },
  {
    number: "03",
    title: "初開催で申込みが入るか不安",
    text: "実績がないため、興味を持ってもらえても参加の決断につながりにくい。",
  },
  {
    number: "04",
    title: "開催直前まで人数が読めない",
    text: "申込み状況が安定せず、会場・料理・スタッフ数などの準備が難しい。",
  },
  {
    number: "05",
    title: "運営と集客を両立できない",
    text: "企画や当日の準備をしながら、告知や問い合わせ対応まで行う負担が大きい。",
  },
  {
    number: "06",
    title: "準備したのに集まらないのが怖い",
    text: "時間と費用をかけた分、集客できなかった場合のプレッシャーを感じてしまう。",
  },
];

const benefits = [
  {
    number: "01",
    title: "新しい参加者との出会い",
    text: "普段の告知だけでは届かなかった、東京でイベントを探している方へ情報を届けられます。",
    icon: "👥",
  },
  {
    number: "02",
    title: "集客・告知の入口が増える",
    text: "SNSや知人への声かけに加え、イベントを探す人が訪れる新しい掲載先を持てます。",
    icon: "🕐",
  },
  {
    number: "03",
    title: "イベントの信頼感向上",
    text: "日時・会場・内容を整理した専用ページを作ることで、初めての方にも伝わりやすくなります。",
    icon: "🛡️",
  },
  {
    number: "04",
    title: "魅力を分かりやすく紹介",
    text: "フライヤーとイベント情報を見やすく掲載し、参加を検討する方へ魅力を届けます。",
    icon: "📣",
  },
];

const eventTypes = [
  {
    icon: "🍻",
    title: "飲み会・交流会",
    text: "友達づくり、恋活、異業種交流などのカジュアルな交流イベント。",
  },
  {
    icon: "☕",
    title: "カフェ会・ランチ会",
    text: "少人数で話せる交流会や、食事を楽しみながらつながるイベント。",
  },
  {
    icon: "🎲",
    title: "ボードゲーム・ゲーム会",
    text: "初心者歓迎のボードゲーム会、カードゲーム会など。",
  },
  {
    icon: "📊",
    title: "セミナー・勉強会",
    text: "ビジネス、スキルアップ、学習を目的としたイベント。",
  },
  {
    icon: "🏃",
    title: "スポーツ・アウトドア",
    text: "ランニング、ヨガ、ゴルフ、登山、フットサルなど。",
  },
  {
    icon: "🎨",
    title: "趣味・体験イベント",
    text: "ものづくり、写真、料理、ワークショップなどの体験型イベント。",
  },
  {
    icon: "🌏",
    title: "語学・国際交流",
    text: "語学学習、国際交流、外国人参加者との交流イベント。",
  },
  {
    icon: "•••",
    title: "その他",
    text: "音楽、ライブ、マルシェなど、さまざまな企画をご相談いただけます。",
  },
];

const faqs = [
  {
    question: "掲載料金はかかりますか？",
    answer:
      "現在、基本掲載は無料で受け付けています。掲載内容や追加の告知施策については、LINEでご相談ください。",
  },
  {
    question: "どのようなイベントを掲載できますか？",
    answer:
      "東京都内で開催される飲み会、交流会、趣味イベント、セミナー、スポーツイベントなどが対象です。内容を確認したうえで掲載可否をご案内します。",
  },
  {
    question: "相談したら必ず掲載しなければいけませんか？",
    answer:
      "いいえ。まずはイベント内容を伺い、掲載方法をご説明します。相談だけでも問題ありません。",
  },
  {
    question: "掲載までどのくらいかかりますか？",
    answer:
      "必要情報が揃ってから、通常1〜3営業日程度を目安に確認・掲載します。内容によって前後する場合があります。",
  },
  {
    question: "掲載後に内容を変更できますか？",
    answer:
      "開催日時や会場などに変更がある場合は、公式LINEからご連絡ください。内容を確認して修正します。",
  },
];

export default function EventListingPage() {
  return (
    <main className="listingPage">
      <section className="hero">
        <div className="heroBackground" />

        <div className="heroInner">
          <p className="eyebrow">FOR EVENT ORGANIZERS</p>

          <h1>
            あなたのイベントを
            <br />
            <span>もっと多くの人へ。</span>
          </h1>

          <p className="heroLead">
            東京イベントナビでは、東京都内で開催される
            <br className="desktopOnly" />
            飲み会・交流会・趣味イベントなどの掲載を受け付けています。
          </p>

          <div className="heroTags">
            <span>掲載無料</span>
            <span>東京都内のイベント</span>
            <span>LINEで簡単相談</span>
          </div>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noreferrer"
            className="mainButton"
          >
            LINEで掲載について相談する
          </a>

          <p className="buttonNote">
            「自分のイベントも掲載できる？」という相談だけでも大歓迎です。
          </p>
        </div>
      </section>

      <section className="section introduction">
        <div className="container">
          <p className="sectionEyebrow">EVENT LISTING</p>

          <h2>
            東京で開催される
            <span>さまざまなイベント</span>を
            <br />
            掲載できます
          </h2>

          <p className="sectionLead">
            イベントのフライヤー・日時・会場・参加条件などを整理し、
            イベントを探している方に分かりやすく届けます。
          </p>

          <div className="simpleTypes">
            <div>
              <span>🍻</span>
              <strong>飲み会</strong>
            </div>

            <div>
              <span>🤝</span>
              <strong>交流会</strong>
            </div>

            <div>
              <span>🎲</span>
              <strong>ゲーム会</strong>
            </div>

            <div>
              <span>📊</span>
              <strong>セミナー</strong>
            </div>

            <div>
              <span>•••</span>
              <strong>その他</strong>
            </div>
          </div>

          <div className="freeBadge">
            掲載料
            <strong>無料</strong>
          </div>
        </div>
      </section>

      <section className="section problemsSection">
        <div className="container">
          <p className="sectionEyebrow">PROBLEMS</p>

          <h2>
            イベント集客・運営で
            <br />
            <span>こんなお悩みありませんか？</span>
          </h2>

          <div className="problemGroups">
            <div>
              <h3>集客に関するお悩み</h3>

              <div className="problemGrid">
                {problems.slice(0, 3).map((problem) => (
                  <article className="problemCard orange" key={problem.number}>
                    <span className="problemNumber">{problem.number}</span>

                    <h4>{problem.title}</h4>

                    <p>{problem.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h3 className="greenHeading">運営に関するお悩み</h3>

              <div className="problemGrid">
                {problems.slice(3).map((problem) => (
                  <article className="problemCard green" key={problem.number}>
                    <span className="problemNumber">{problem.number}</span>

                    <h4>{problem.title}</h4>

                    <p>{problem.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="problemMessage">
            良いイベントなのに、知られないまま終わる。
            <strong>毎回ゼロから集客する状態</strong>に疲れていませんか？
          </div>
        </div>
      </section>

      <section className="section solutionSection">
        <div className="container">
          <p className="sectionEyebrow">SOLUTION</p>

          <h2>
            東京イベントナビなら
            <br />
            <span>集客の入口をもう一つ増やせます</span>
          </h2>

          <p className="sectionLead">
            東京でイベントを探している方に、
            あなたのイベントを届けるお手伝いをします。
          </p>

          <div className="solutionGrid">
            <article>
              <span>01</span>
              <h3>イベントを探す人へ届ける</h3>
              <p>
                東京で開催されるイベントを探している方へ、
                フライヤーや開催情報を掲載できます。
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>複数の探し方から見つかる</h3>
              <p>
                人気・新着・今週・カレンダー・カテゴリーなど、
                さまざまな入口からイベントを探せます。
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>申込みまで分かりやすく案内</h3>
              <p>
                イベント詳細ページから、公式LINEや申込ページへ
                スムーズにつなげられます。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section benefitsSection">
        <div className="container">
          <p className="sectionEyebrow">MERITS</p>

          <h2>
            東京イベントナビに
            <br />
            <span>掲載するメリット</span>
          </h2>

          <div className="benefitGrid">
            {benefits.map((benefit) => (
              <article key={benefit.number}>
                <div className="benefitTop">
                  <span className="benefitNumber">{benefit.number}</span>
                  <span className="benefitIcon">{benefit.icon}</span>
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.text}</p>
              </article>
            ))}
          </div>

          <div className="supportBar">
            <strong>主催者の皆さまをサポートします</strong>

            <div>
              <span>困ったときはLINEで相談</span>
              <span>イベントの魅力を整理</span>
              <span>申込み導線を分かりやすく掲載</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section eventTypesSection">
        <div className="container">
          <p className="sectionEyebrow">EVENT CATEGORIES</p>

          <h2>
            こんなイベントを
            <span>掲載できます</span>
          </h2>

          <p className="sectionLead">
            下記以外のイベントについても、まずはお気軽にご相談ください。
          </p>

          <div className="eventTypeGrid">
            {eventTypes.map((type) => (
              <article key={type.title}>
                <div className="typeIcon">{type.icon}</div>

                <h3>{type.title}</h3>

                <p>{type.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section flowSection">
        <div className="container">
          <p className="sectionEyebrow">HOW TO LIST</p>

          <h2>
            掲載までの流れは
            <span>簡単3ステップ</span>
          </h2>

          <div className="flowGrid">
            <article>
              <span className="flowNumber">1</span>
              <div className="flowIcon">💬</div>
              <h3>LINEで相談</h3>
              <p>
                イベント内容や開催予定日などを、
                公式LINEからお知らせください。
              </p>
            </article>

            <div className="flowArrow">→</div>

            <article>
              <span className="flowNumber">2</span>
              <div className="flowIcon">✅</div>
              <h3>掲載内容を確認</h3>
              <p>
                フライヤー・日時・会場・参加条件など、
                必要な情報を確認します。
              </p>
            </article>

            <div className="flowArrow">→</div>

            <article>
              <span className="flowNumber">3</span>
              <div className="flowIcon">📅</div>
              <h3>掲載スタート</h3>
              <p>
                内容確認後、東京イベントナビのイベント一覧へ掲載します。
              </p>
            </article>
          </div>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noreferrer"
            className="mainButton flowButton"
          >
            LINEで掲載について相談する
          </a>
        </div>
      </section>

      <section className="section faqSection">
        <div className="container narrow">
          <p className="sectionEyebrow">FAQ</p>

          <h2>よくあるご質問</h2>

          <div className="faqList">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  <span>Q</span>
                  {faq.question}
                </summary>

                <div className="faqAnswer">
                  <span>A</span>
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="container">
          <p className="sectionEyebrow">CONTACT</p>

          <h2>
            あなたのイベントを、
            <br />
            <span>もっと多くの人へ届けませんか？</span>
          </h2>

          <p>
            掲載できるか分からない場合も、
            まずは公式LINEからお気軽にご相談ください。
          </p>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noreferrer"
            className="mainButton whiteButton"
          >
            無料で掲載について相談する
          </a>

          <p className="finalNote">
            相談だけでも問題ありません。内容を確認してご案内します。
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <Link href="/">東京イベントナビへ戻る</Link>

          <span>© TOKYO EVENT NAVI</span>
        </div>
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .listingPage {
          min-height: 100vh;
          overflow: hidden;
          background: #fffdf9;
          color: #17233a;
        }

        .container {
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }

        .narrow {
          width: min(860px, calc(100% - 40px));
        }

        .hero {
          position: relative;
          min-height: 700px;
          display: grid;
          place-items: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 20% 20%, rgba(255, 160, 70, 0.2), transparent 35%),
            radial-gradient(circle at 80% 70%, rgba(255, 210, 140, 0.28), transparent 35%),
            linear-gradient(135deg, #fff7eb 0%, #fffdf9 55%, #fff0dc 100%);
        }

        .heroBackground {
          position: absolute;
          inset: 0;
          opacity: 0.35;
          background-image:
            linear-gradient(rgba(244, 112, 16, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244, 112, 16, 0.08) 1px, transparent 1px);
          background-size: 45px 45px;
        }

        .heroInner {
          position: relative;
          z-index: 1;
          width: min(900px, calc(100% - 40px));
          padding: 100px 0;
          text-align: center;
        }

        .eyebrow,
        .sectionEyebrow {
          margin: 0 0 14px;
          color: #f05a00;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.2em;
        }

        .hero h1 {
          margin: 0;
          color: #17233a;
          font-size: clamp(48px, 8vw, 90px);
          line-height: 1.12;
          letter-spacing: -0.055em;
        }

        .hero h1 span,
        .section h2 span,
        .finalCta h2 span {
          color: #ef5b0c;
        }

        .heroLead {
          margin: 34px 0 25px;
          color: #485167;
          font-size: clamp(16px, 2vw, 21px);
          line-height: 1.9;
          font-weight: 600;
        }

        .heroTags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 34px;
        }

        .heroTags span {
          padding: 9px 16px;
          border: 1px solid #f2be91;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.8);
          color: #a94b14;
          font-size: 13px;
          font-weight: 800;
        }

        .mainButton {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-width: 340px;
          padding: 19px 28px;
          border-radius: 12px;
          background: #ef5b0c;
          box-shadow: 0 14px 35px rgba(239, 91, 12, 0.25);
          color: #fff;
          text-decoration: none;
          font-size: 17px;
          font-weight: 900;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .mainButton:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 42px rgba(239, 91, 12, 0.32);
        }

        .buttonNote {
          margin: 15px 0 0;
          color: #72798a;
          font-size: 12px;
        }

        .section {
          padding: 110px 0;
          text-align: center;
        }

        .section h2,
        .finalCta h2 {
          margin: 0;
          color: #17233a;
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.3;
          letter-spacing: -0.04em;
        }

        .sectionLead {
          max-width: 760px;
          margin: 25px auto 50px;
          color: #626b7d;
          font-size: 16px;
          line-height: 1.9;
        }

        .introduction {
          position: relative;
          background: #fff;
        }

        .simpleTypes {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 34px;
          margin-top: 48px;
        }

        .simpleTypes div {
          display: grid;
          gap: 9px;
          min-width: 110px;
        }

        .simpleTypes span {
          width: 76px;
          height: 76px;
          display: grid;
          place-items: center;
          margin: 0 auto;
          border-radius: 50%;
          background: #fff2e4;
          font-size: 31px;
        }

        .simpleTypes strong {
          color: #27334a;
          font-size: 14px;
        }

        .freeBadge {
          width: 130px;
          height: 130px;
          display: grid;
          place-items: center;
          align-content: center;
          gap: 2px;
          margin: 45px auto 0;
          border-radius: 50%;
          background: #ef5b0c;
          color: #fff;
          font-size: 14px;
          font-weight: 800;
          transform: rotate(-5deg);
        }

        .freeBadge strong {
          font-size: 36px;
          line-height: 1;
        }

        .problemsSection {
          background: linear-gradient(180deg, #fff8f2 0%, #f4fff8 100%);
        }

        .problemGroups {
          display: grid;
          gap: 55px;
          margin-top: 55px;
        }

        .problemGroups h3 {
          width: fit-content;
          margin: 0 auto 22px;
          padding: 9px 28px;
          border-radius: 999px;
          background: #173a62;
          color: #fff;
          font-size: 18px;
        }

        .problemGroups .greenHeading {
          background: #258557;
        }

        .problemGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .problemCard {
          position: relative;
          min-height: 250px;
          padding: 35px 25px 28px;
          border-radius: 18px;
          background: #fff;
          text-align: left;
          box-shadow: 0 12px 35px rgba(30, 43, 66, 0.06);
        }

        .problemCard.orange {
          border-top: 5px solid #f47721;
        }

        .problemCard.green {
          border-top: 5px solid #3a9c67;
        }

        .problemNumber {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #f47721;
          color: #fff;
          font-size: 14px;
          font-weight: 900;
        }

        .green .problemNumber {
          background: #3a9c67;
        }

        .problemCard h4 {
          margin: 48px 0 14px;
          color: #26324a;
          font-size: 18px;
          line-height: 1.55;
        }

        .problemCard p {
          margin: 0;
          color: #6f7684;
          font-size: 13px;
          line-height: 1.8;
        }

        .problemMessage {
          margin-top: 25px;
          padding: 18px;
          border-radius: 12px;
          background: #fff0dc;
          color: #7d4b1f;
          font-size: 15px;
        }

        .problemMessage strong {
          color: #ef5b0c;
        }

        .solutionSection {
          background: #fff;
        }

        .solutionGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-top: 50px;
        }

        .solutionGrid article {
          position: relative;
          padding: 35px 25px;
          border: 1px solid #f0e1d4;
          border-radius: 20px;
          background: #fffcf8;
          text-align: left;
        }

        .solutionGrid article > span {
          color: #ef5b0c;
          font-size: 40px;
          font-weight: 900;
        }

        .solutionGrid h3 {
          margin: 20px 0 13px;
          color: #26324a;
          font-size: 21px;
          line-height: 1.5;
        }

        .solutionGrid p {
          margin: 0;
          color: #697183;
          font-size: 14px;
          line-height: 1.8;
        }

        .benefitsSection {
          background: #f2fbf5;
        }

        .benefitGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 17px;
          margin-top: 50px;
        }

        .benefitGrid article {
          padding: 28px 22px;
          border-radius: 18px;
          background: #fff;
          text-align: left;
          box-shadow: 0 10px 30px rgba(24, 87, 51, 0.06);
        }

        .benefitTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .benefitNumber {
          color: #228753;
          font-size: 26px;
          font-weight: 900;
        }

        .benefitIcon {
          font-size: 31px;
        }

        .benefitGrid h3 {
          margin: 22px 0 12px;
          color: #1f6040;
          font-size: 19px;
          line-height: 1.5;
        }

        .benefitGrid p {
          margin: 0;
          color: #667469;
          font-size: 13px;
          line-height: 1.85;
        }

        .supportBar {
          margin-top: 25px;
          padding: 25px;
          border-radius: 16px;
          background: #e2f5e8;
        }

        .supportBar strong {
          display: block;
          margin-bottom: 16px;
          color: #27764c;
          font-size: 20px;
        }

        .supportBar div {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 11px;
        }

        .supportBar span {
          padding: 8px 13px;
          border-radius: 999px;
          background: #fff;
          color: #43805c;
          font-size: 12px;
          font-weight: 700;
        }

        .eventTypesSection {
          background: #fffaf2;
        }

        .eventTypeGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-top: 45px;
        }

        .eventTypeGrid article {
          min-height: 240px;
          padding: 27px 22px;
          border: 1px solid #f0dfc8;
          border-radius: 18px;
          background: #fff;
          text-align: left;
        }

        .typeIcon {
          width: 53px;
          height: 53px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #fff0dc;
          font-size: 25px;
        }

        .eventTypeGrid h3 {
          margin: 19px 0 12px;
          color: #26324a;
          font-size: 18px;
          line-height: 1.5;
        }

        .eventTypeGrid p {
          margin: 0;
          color: #717888;
          font-size: 13px;
          line-height: 1.8;
        }

        .flowSection {
          background: #fff;
        }

        .flowGrid {
          display: grid;
          grid-template-columns: 1fr 55px 1fr 55px 1fr;
          align-items: center;
          margin-top: 55px;
        }

        .flowGrid article {
          position: relative;
          min-height: 285px;
          padding: 30px 25px;
          border-radius: 20px;
          background: #fff7ed;
        }

        .flowNumber {
          position: absolute;
          top: 18px;
          left: 18px;
          width: 37px;
          height: 37px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #ef5b0c;
          color: #fff;
          font-weight: 900;
        }

        .flowIcon {
          margin-top: 25px;
          font-size: 55px;
        }

        .flowGrid h3 {
          margin: 18px 0 12px;
          color: #26324a;
          font-size: 21px;
        }

        .flowGrid p {
          margin: 0;
          color: #6b7280;
          font-size: 13px;
          line-height: 1.8;
        }

        .flowArrow {
          color: #f39a5d;
          font-size: 35px;
          font-weight: 900;
        }

        .flowButton {
          margin-top: 42px;
        }

        .faqSection {
          background: #f7f7f5;
        }

        .faqList {
          display: grid;
          gap: 12px;
          margin-top: 45px;
          text-align: left;
        }

        .faqList details {
          overflow: hidden;
          border: 1px solid #e4e4df;
          border-radius: 13px;
          background: #fff;
        }

        .faqList summary {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 20px;
          cursor: pointer;
          list-style: none;
          color: #29354c;
          font-size: 15px;
          font-weight: 800;
        }

        .faqList summary::-webkit-details-marker {
          display: none;
        }

        .faqList summary span,
        .faqAnswer > span {
          width: 34px;
          height: 34px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #ef5b0c;
          color: #fff;
          font-weight: 900;
        }

        .faqAnswer {
          display: flex;
          gap: 13px;
          padding: 0 20px 20px;
        }

        .faqAnswer > span {
          background: #26324a;
        }

        .faqAnswer p {
          margin: 5px 0 0;
          color: #667085;
          font-size: 14px;
          line-height: 1.8;
        }

        .finalCta {
          padding: 110px 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.15), transparent 30%),
            linear-gradient(135deg, #ed5a0b, #f5802d);
          color: #fff;
          text-align: center;
        }

        .finalCta .sectionEyebrow {
          color: #ffe1ca;
        }

        .finalCta h2,
        .finalCta h2 span {
          color: #fff;
        }

        .finalCta > .container > p:not(.sectionEyebrow):not(.finalNote) {
          margin: 25px 0 34px;
          font-size: 16px;
          line-height: 1.9;
        }

        .whiteButton {
          background: #fff;
          box-shadow: none;
          color: #e45109;
        }

        .finalNote {
          margin: 15px 0 0;
          color: #ffe0cc;
          font-size: 12px;
        }

        .footer {
          padding: 28px 0;
          background: #18243a;
          color: #cbd1dc;
        }

        .footerInner {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          font-size: 12px;
        }

        .footer a {
          color: #fff;
          text-decoration: none;
          font-weight: 800;
        }

        @media (max-width: 900px) {
          .problemGrid,
          .solutionGrid {
            grid-template-columns: 1fr;
          }

          .benefitGrid,
          .eventTypeGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .flowGrid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .flowArrow {
            transform: rotate(90deg);
          }
        }

        @media (max-width: 640px) {
          .container,
          .narrow {
            width: calc(100% - 24px);
          }

          .hero {
            min-height: auto;
          }

          .heroInner {
            width: calc(100% - 30px);
            padding: 80px 0 70px;
          }

          .hero h1 {
            font-size: 45px;
          }

          .heroLead {
            font-size: 15px;
          }

          .desktopOnly {
            display: none;
          }

          .mainButton {
            width: 100%;
            min-width: 0;
            padding: 17px 18px;
            font-size: 15px;
          }

          .section {
            padding: 75px 0;
          }

          .section h2,
          .finalCta h2 {
            font-size: 34px;
          }

          .simpleTypes {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px 10px;
          }

          .simpleTypes div {
            min-width: 0;
          }

          .simpleTypes span {
            width: 60px;
            height: 60px;
            font-size: 25px;
          }

          .benefitGrid,
          .eventTypeGrid {
            grid-template-columns: 1fr;
          }

          .problemCard,
          .solutionGrid article,
          .benefitGrid article,
          .eventTypeGrid article {
            min-height: auto;
          }

          .footerInner {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </main>
  );
}
