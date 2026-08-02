import Link from "next/link";

export const metadata = {
  title: "イベント掲載について｜東京イベントナビ",
  description:
    "あなたのイベントをもっと多くの人へ。東京イベントナビでは、東京都内で開催されるイベントの無料掲載を受け付けています。",
};

const LINE_URL = "https://lin.ee/P179zyp";

/*
 * 画像はすべてこの部分で管理しています。
 * 後から画像を変更する場合も、URLだけを差し替えれば反映されます。
 */
const IMAGES = {
  toast:
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1400&q=88",

  boardGame:
    "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1200&q=88",

  seminar:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=88",

  sports:
    "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=88",

  cafe:
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=88",

  workshop:
    "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=88",

  meeting:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=88",

  festival:
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=88",
};

const categories = [
  {
    icon: "🍻",
    title: "飲み会・交流会",
    description:
      "友達づくり、社会人交流、恋活、異業種交流などのイベント。",
    image: IMAGES.toast,
  },
  {
    icon: "☕",
    title: "カフェ会・ランチ会",
    description:
      "少人数で話せるカフェ会や、食事を楽しみながら交流するイベント。",
    image: IMAGES.cafe,
  },
  {
    icon: "🎲",
    title: "ボードゲーム・ゲーム会",
    description:
      "初心者歓迎のボードゲーム会、カードゲーム会、趣味交流会。",
    image: IMAGES.boardGame,
  },
  {
    icon: "📊",
    title: "セミナー・勉強会",
    description:
      "ビジネス、学習、スキルアップを目的としたイベント。",
    image: IMAGES.seminar,
  },
  {
    icon: "🏃",
    title: "スポーツ・アウトドア",
    description:
      "ランニング、ヨガ、ゴルフ、フットサル、登山など。",
    image: IMAGES.sports,
  },
  {
    icon: "🎨",
    title: "趣味・体験イベント",
    description:
      "料理、写真、音楽、ものづくり、ワークショップなど。",
    image: IMAGES.workshop,
  },
  {
    icon: "🤝",
    title: "ビジネス交流会",
    description:
      "経営者交流会、異業種交流会、名刺交換会、マッチングイベント。",
    image: IMAGES.meeting,
  },
  {
    icon: "✨",
    title: "その他",
    description:
      "ライブ、マルシェ、上映会などもお気軽にご相談ください。",
    image: IMAGES.festival,
  },
];

const benefits = [
  {
    number: "01",
    icon: "👥",
    title: "新しい参加者へ届けられる",
    description:
      "普段のSNSや知人への告知だけでは接点のなかった方にも、イベント情報を届けられます。",
  },
  {
    number: "02",
    icon: "🔍",
    title: "複数の入口から発見される",
    description:
      "新着、今週、カレンダー、カテゴリーなど、複数の探し方から見つけてもらえます。",
  },
  {
    number: "03",
    icon: "🛡️",
    title: "イベントの信頼感を高める",
    description:
      "日時、会場、参加条件、主催者情報を整理した専用ページを作成します。",
  },
  {
    number: "04",
    icon: "📣",
    title: "イベントの魅力を伝えられる",
    description:
      "フライヤーや概要を見やすく整理し、イベントの雰囲気や特徴を伝えます。",
  },
];

const includedItems = [
  {
    icon: "🖼️",
    title: "フライヤー掲載",
    description: "イベント画像を大きく掲載します。",
  },
  {
    icon: "📄",
    title: "専用ページ作成",
    description: "イベントごとの詳細ページを作成します。",
  },
  {
    icon: "📅",
    title: "カレンダー掲載",
    description: "開催日と開始時間をカレンダーへ反映します。",
  },
  {
    icon: "📍",
    title: "会場・住所掲載",
    description: "会場名と住所を分かりやすく表示します。",
  },
  {
    icon: "🗂️",
    title: "カテゴリー掲載",
    description: "イベントのジャンル別検索へ反映します。",
  },
  {
    icon: "🔗",
    title: "申込リンク設置",
    description: "LINEや申込フォームへ直接案内します。",
  },
];

const steps = [
  {
    number: "01",
    icon: "💬",
    title: "LINEで相談",
    description:
      "公式LINEを追加し、「イベント掲載希望」とお送りください。",
  },
  {
    number: "02",
    icon: "📎",
    title: "情報を送付",
    description:
      "フライヤー、日時、会場、概要、申込先などを送付します。",
  },
  {
    number: "03",
    icon: "✅",
    title: "掲載内容を確認",
    description:
      "作成したイベントページの内容に間違いがないか確認します。",
  },
  {
    number: "04",
    icon: "🚀",
    title: "掲載スタート",
    description:
      "イベント一覧、カレンダー、カテゴリーへ掲載します。",
  },
];

const faqs = [
  {
    question: "掲載料金はかかりますか？",
    answer:
      "現在、基本掲載は無料です。イベント専用ページ、フライヤー、日時、会場、概要、申込リンクなどを掲載します。",
  },
  {
    question: "どのようなイベントを掲載できますか？",
    answer:
      "東京都内で開催される飲み会、交流会、趣味イベント、スポーツ、セミナー、勉強会などが対象です。",
  },
  {
    question: "情報が揃っていなくても相談できますか？",
    answer:
      "はい。開催内容が完全に決まっていない段階でもご相談いただけます。必要な情報をご案内します。",
  },
  {
    question: "人気イベント欄へ必ず掲載されますか？",
    answer:
      "人気イベント欄への掲載は保証していません。掲載内容や開催時期により、表示される場所は異なります。",
  },
  {
    question: "掲載後に内容を変更できますか？",
    answer:
      "変更可能です。日時や会場などに変更が生じた場合は、公式LINEから早めにご連絡ください。",
  },
];

function LineButton({
  title = "無料で掲載について相談する",
  note = "公式LINEからお気軽にご連絡ください",
}: {
  title?: string;
  note?: string;
}) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noreferrer"
      className="lineButton"
    >
      <span className="lineMark">LINE</span>

      <span className="lineText">
        <strong>{title}</strong>
        <small>{note}</small>
      </span>

      <span className="lineArrow">→</span>
    </a>
  );
}

function SectionTitle({
  label,
  before,
  accent,
  description,
}: {
  label: string;
  before: string;
  accent: string;
  description?: string;
}) {
  return (
    <div className="sectionTitle">
      <p className="sectionEnglish">{label}</p>

      <h2>
        <span>{before}</span>
        <strong>{accent}</strong>
      </h2>

      <div className="sectionLine" />

      {description && (
        <p className="sectionDescription">
          {description}
        </p>
      )}
    </div>
  );
}

function ListingPreview() {
  return (
    <div className="previewStage">
      <div className="previewBrowser">
        <div className="browserBar">
          <div className="browserDots">
            <span />
            <span />
            <span />
          </div>

          <div className="browserAddress">
            tokyo-event-navi.jp
          </div>
        </div>

        <div className="browserPage">
          <div className="browserHeading">
            <div>
              <small>TOKYO EVENT NAVI</small>
              <strong>人気イベント</strong>
            </div>

            <span>EVENT</span>
          </div>

          <div className="browserCards">
            <article className="sampleCard">
              <img
                src={IMAGES.toast}
                alt="交流イベント掲載イメージ"
              />

              <div className="sampleBody">
                <span className="sampleCategory">
                  飲み会・交流会
                </span>

                <h3>
                  20〜30代限定
                  <br />
                  東京交流イベント
                </h3>

                <p>📅 2026年8月22日（土）</p>
                <p>🕐 18:00〜20:00</p>
                <p>📍 新宿イベントスペース</p>

                <strong className="sampleButton">
                  詳細を見る
                </strong>
              </div>
            </article>

            <div className="browserSideCards">
              <article>
                <span>🆕</span>
                <strong>新着イベント</strong>
                <small>
                  新しく掲載された情報から探せます
                </small>
              </article>

              <article>
                <span>📅</span>
                <strong>今週のイベント</strong>
                <small>
                  近日開催のイベントから探せます
                </small>
              </article>

              <article>
                <span>🗂️</span>
                <strong>カテゴリー検索</strong>
                <small>
                  興味のあるジャンルから探せます
                </small>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="phonePreview">
        <div className="phoneSpeaker" />

        <div className="phoneContent">
          <img src={IMAGES.toast} alt="" />

          <span>飲み会・交流会</span>

          <h3>
            東京交流
            <br />
            イベント
          </h3>

          <p>8月22日 18:00〜</p>

          <strong>詳細を見る</strong>
        </div>
      </div>

      <div className="previewBadge previewBadgeCalendar">
        📅 カレンダー掲載
      </div>

      <div className="previewBadge previewBadgeCategory">
        🗂️ カテゴリー検索
      </div>

      <div className="previewFree">
        基本掲載
        <strong>無料</strong>
      </div>
    </div>
  );
}

export default function EventListingPage() {
  return (
    <main className="page">
      <header className="header">
        <div className="headerInner">
          <Link href="/" className="logo">
            <span>東京</span>
            イベントナビ
          </Link>

          <nav>
            <Link href="/">イベントを探す</Link>

            <a href="#categories">
              掲載できるイベント
            </a>

            <a href="#flow">掲載までの流れ</a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
              className="headerLine"
            >
              LINEで相談
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="heroDecoration heroDecorationOne" />
        <div className="heroDecoration heroDecorationTwo" />

        <div className="heroInner">
          <div className="heroCopy">
            <div className="heroTarget">
              <span>📣</span>
              東京でイベントを主催している方へ
            </div>

            <p className="heroEnglish">
              EVENT LISTING SERVICE
            </p>

            <h1>
              <span className="heroTitleFirst">
                あなたのイベントを
              </span>

              <span className="heroTitleSecond">
                もっと多くの人へ。
              </span>
            </h1>

            <p className="heroCatch">
              イベントの魅力を、
              <br />
              探している人へ届けます。
            </p>

            <p className="heroDescription">
              東京イベントナビでは、東京都内で開催される
              飲み会・交流会・趣味イベント・セミナーなどの
              掲載を受け付けています。
            </p>

            <div className="heroFeatures">
              <article>
                <span>🖼️</span>

                <div>
                  <small>EVENT PAGE</small>
                  <strong>専用ページ作成</strong>
                </div>
              </article>

              <article>
                <span>📅</span>

                <div>
                  <small>CALENDAR</small>
                  <strong>カレンダー掲載</strong>
                </div>
              </article>

              <article>
                <span>🗂️</span>

                <div>
                  <small>CATEGORY</small>
                  <strong>カテゴリー掲載</strong>
                </div>
              </article>

              <article>
                <span>🔗</span>

                <div>
                  <small>APPLICATION</small>
                  <strong>申込リンク設置</strong>
                </div>
              </article>
            </div>

            <LineButton />

            <p className="heroNote">
              掲載できる内容か分からない場合も、相談だけで問題ありません。
            </p>
          </div>

          <div className="heroVisual">
            <div className="heroPhotos">
              <figure className="heroPhoto heroPhotoMain">
                <img
                  src={IMAGES.toast}
                  alt="交流イベントの乾杯風景"
                />
              </figure>

              <figure className="heroPhoto heroPhotoBoardGame">
                <img
                  src={IMAGES.boardGame}
                  alt="ボードゲームイベント"
                />
              </figure>

              <figure className="heroPhoto heroPhotoSeminar">
                <img
                  src={IMAGES.seminar}
                  alt="セミナーイベント"
                />
              </figure>

              <figure className="heroPhoto heroPhotoSports">
                <img
                  src={IMAGES.sports}
                  alt="スポーツイベント"
                />
              </figure>

              <div className="heroFreeBadge">
                基本掲載
                <strong>無料</strong>
                <small>
                  東京都内のイベント
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="heroBottom">
          <span>✓ 掲載無料</span>
          <span>✓ 専用ページ作成</span>
          <span>✓ カレンダー掲載</span>
          <span>✓ 申込先へ直接案内</span>
        </div>
      </section>

      <section
        className="categorySection"
        id="categories"
      >
        <div className="container">
          <SectionTitle
            label="EVENT CATEGORIES"
            before="こんなイベントを"
            accent="掲載できます！"
            description="東京で開催される、さまざまなジャンルのイベントに対応しています。"
          />

          <div className="categoryGrid">
            {categories.map((category) => (
              <article
                className="categoryCard"
                key={category.title}
              >
                <div className="categoryImage">
                  <img
                    src={category.image}
                    alt={category.title}
                  />

                  <span>{category.icon}</span>
                </div>

                <div className="categoryContent">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="orangeMessage">
            <strong>
              あなたのイベントも、きっと誰かの
              「行きたい！」につながります。
            </strong>

            <p>
              記載のないジャンルについても、まずはお気軽にご相談ください。
            </p>
          </div>
        </div>
      </section>

      <section className="problemSection">
        <div className="container">
          <SectionTitle
            label="ORGANIZER PROBLEMS"
            before="イベントの告知・運営で"
            accent="こんなお悩みありませんか？"
          />

          <div className="problemGrid">
            <article className="problemCard orangeProblem">
              <div className="problemContent">
                <span className="problemLabel">
                  📣 告知・認知のお悩み
                </span>

                <h3>
                  良いイベントなのに、
                  <br />
                  まだ知られていない
                </h3>

                <ul>
                  <li>
                    毎回、知人への声かけに頼っている
                  </li>
                  <li>
                    SNSだけでは新しい人に届かない
                  </li>
                  <li>
                    初開催で申込みが入るか不安
                  </li>
                </ul>
              </div>

              <img
                src={IMAGES.meeting}
                alt="イベントの告知や企画"
              />
            </article>

            <article className="problemCard greenProblem">
              <div className="problemContent">
                <span className="problemLabel">
                  ⚙️ 運営・準備のお悩み
                </span>

                <h3>
                  告知に追われて、
                  <br />
                  準備に集中できない
                </h3>

                <ul>
                  <li>
                    開催直前まで人数が読めない
                  </li>
                  <li>
                    日時や会場情報が伝わりにくい
                  </li>
                  <li>
                    イベントページを作る時間がない
                  </li>
                </ul>
              </div>

              <img
                src={IMAGES.seminar}
                alt="イベントの運営と準備"
              />
            </article>
          </div>

          <div className="problemAnswer">
            <span>東京イベントナビなら</span>

            <strong>
              イベント情報を見やすく整理し、
              もっと多くの人へ届けるお手伝いができます。
            </strong>
          </div>
        </div>
      </section>

      <section className="previewSection">
        <div className="container">
          <div className="previewHeading">
            <div>
              <p>LISTING IMAGE</p>

              <h2>
                <span>掲載後は、</span>
                <strong>
                  このように表示されます。
                </strong>
              </h2>

              <p className="previewDescription">
                フライヤー、開催日時、会場、参加条件などを一つのページへ整理。
                TOPページやカレンダー、カテゴリーからイベントを見つけてもらえます。
              </p>
            </div>

            <div className="previewTags">
              <span>人気イベント</span>
              <span>新着イベント</span>
              <span>今週のイベント</span>
              <span>カレンダー</span>
              <span>カテゴリー検索</span>
            </div>
          </div>

          <ListingPreview />

          <p className="previewNotice">
            ※人気イベント欄への掲載は保証していません。掲載内容や開催時期により、表示される場所は異なります。
          </p>
        </div>
      </section>

      <section className="benefitSection">
        <div className="container">
          <SectionTitle
            label="MERITS"
            before="東京イベントナビに"
            accent="掲載するメリット"
            description="イベントを探している方へ、あなたのイベントの魅力を分かりやすく届けます。"
          />

          <div className="benefitGrid">
            {benefits.map((benefit) => (
              <article
                className="benefitCard"
                key={benefit.number}
              >
                <div className="benefitTop">
                  <span className="benefitNumber">
                    {benefit.number}
                  </span>

                  <span className="benefitIcon">
                    {benefit.icon}
                  </span>
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="freeSection">
        <div className="container">
          <div className="freeHeading">
            <div className="freeStamp">
              BASIC
              <strong>FREE</strong>
            </div>

            <div>
              <p>FREE LISTING</p>

              <h2>
                基本掲載は
                <span>無料です！</span>
              </h2>

              <strong className="freeLead">
                無料掲載には、次の内容が含まれています。
              </strong>
            </div>
          </div>

          <div className="includedGrid">
            {includedItems.map((item) => (
              <article key={item.title}>
                <span className="includedIcon">
                  {item.icon}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span className="includedCheck">
                  ✓
                </span>
              </article>
            ))}
          </div>

          <p className="freeNote">
            SNS投稿、公式LINE配信、優先表示などの追加施策は、今後別途ご案内する場合があります。
          </p>
        </div>
      </section>

      <section className="flowSection" id="flow">
        <div className="container">
          <SectionTitle
            label="HOW TO LIST"
            before="掲載までは"
            accent="簡単4ステップ"
            description="最初のご相談から掲載開始まで、公式LINEでご案内します。"
          />

          <div className="stepGrid">
            {steps.map((step, index) => (
              <div
                className="stepWrapper"
                key={step.number}
              >
                <article className="stepCard">
                  <span className="stepNumber">
                    STEP {step.number}
                  </span>

                  <div className="stepIcon">
                    {step.icon}
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>

                {index < steps.length - 1 && (
                  <span className="stepArrow">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flowButton">
            <LineButton />
          </div>
        </div>
      </section>

      <section className="faqSection">
        <div className="container faqLayout">
          <div className="faqHeading">
            <p>FAQ</p>

            <h2>
              よくある
              <span>ご質問</span>
            </h2>

            <div className="questionMark">?</div>

            <strong>
              分からないことは、
              <br />
              公式LINEでもご相談いただけます。
            </strong>
          </div>

          <div className="faqList">
            {faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span>
                    Q{String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{faq.question}</strong>

                  <small>＋</small>
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

      <section className="finalSection">
        <img
          src={IMAGES.toast}
          alt=""
          className="finalImage"
        />

        <div className="finalOverlay" />

        <div className="finalContent">
          <p>EVENT LISTING</p>

          <h2>
            <span>あなたのイベントを</span>
            <strong>
              もっと多くの人へ。
            </strong>
          </h2>

          <p className="finalDescription">
            掲載できるイベントか分からない場合も、
            まずは公式LINEからお気軽にご相談ください。
          </p>

          <div className="finalTags">
            <span>掲載無料</span>
            <span>東京都内のイベント</span>
            <span>相談だけでもOK</span>
          </div>

          <LineButton
            title="無料で掲載について相談する"
            note="「イベント掲載希望」とお送りください"
          />
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <div>
            <Link href="/" className="footerLogo">
              東京イベントナビ
            </Link>

            <p>
              東京で開催されるイベント情報を、
              分かりやすくお届けします。
            </p>
          </div>

          <nav>
            <Link href="/">イベントを探す</Link>

            <a href="#categories">
              掲載できるイベント
            </a>

            <a href="#flow">
              掲載までの流れ
            </a>
          </nav>

          <div className="footerContact">
            <strong>イベント主催者の方へ</strong>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
            >
              LINEで掲載相談
            </a>
          </div>
        </div>
      </footer>

      <a
        href={LINE_URL}
        target="_blank"
        rel="noreferrer"
        className="floatingLine"
      >
        <span>LINE</span>
        <strong>掲載相談</strong>
      </a>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        img {
          display: block;
          width: 100%;
        }

        .page {
          min-height: 100vh;
          overflow: hidden;
          background: #ffffff;
          color: #17243b;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Helvetica Neue",
            "Yu Gothic",
            "Hiragino Kaku Gothic ProN",
            sans-serif;
        }

        .container {
          width: min(
            1160px,
            calc(100% - 40px)
          );
          margin: 0 auto;
        }

        .header {
          position: sticky;
          z-index: 100;
          top: 0;
          border-bottom:
            1px solid
            rgba(23, 36, 59, 0.08);
          background:
            rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(16px);
        }

        .headerInner {
          width: min(
            1200px,
            calc(100% - 40px)
          );
          min-height: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          margin: 0 auto;
        }

        .logo {
          color: #17243b;
          text-decoration: none;
          font-size: 19px;
          font-weight: 900;
          white-space: nowrap;
        }

        .logo span {
          margin-right: 3px;
          color: #f26419;
        }

        .header nav {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .header nav a {
          color: #30394a;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
        }

        .header nav .headerLine {
          padding: 12px 18px;
          border-radius: 9px;
          background: #08b84e;
          color: #fff;
        }

        .hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 13% 17%,
              rgba(255, 174, 91, 0.19),
              transparent 29%
            ),
            radial-gradient(
              circle at 90% 78%,
              rgba(255, 198, 132, 0.28),
              transparent 31%
            ),
            linear-gradient(
              135deg,
              #fff7e9,
              #fffdf9 53%,
              #ffecd4
            );
        }

        .heroDecoration {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .heroDecorationOne {
          top: -170px;
          right: -120px;
          width: 450px;
          height: 450px;
          border:
            85px solid
            rgba(242, 100, 25, 0.06);
        }

        .heroDecorationTwo {
          bottom: -180px;
          left: -130px;
          width: 390px;
          height: 390px;
          background:
            rgba(255, 192, 115, 0.14);
        }

        .heroInner {
          position: relative;
          z-index: 2;
          width: min(
            1200px,
            calc(100% - 48px)
          );
          min-height: 760px;
          display: grid;
          grid-template-columns:
            minmax(520px, 0.95fr)
            minmax(520px, 1.05fr);
          align-items: center;
          gap: 64px;
          margin: 0 auto;
          padding: 76px 0 92px;
        }

        .heroCopy {
          position: relative;
          z-index: 5;
          min-width: 0;
        }

        .heroTarget {
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          padding: 8px 14px;
          border-radius: 999px;
          background: #17243b;
          color: #fff;
          font-size: 10px;
          font-weight: 900;
        }

        .heroEnglish {
          margin: 0 0 17px;
          color: #e75a12;
          font-size: 9px;
          font-weight: 1000;
          letter-spacing: 0.2em;
        }

        .heroCopy h1 {
          display: grid;
          gap: 5px;
          margin: 0;
          color: #17243b;
          font-size: clamp(
            48px,
            5.25vw,
            72px
          );
          line-height: 1.15;
          letter-spacing: -0.065em;
        }

        .heroTitleFirst,
        .heroTitleSecond {
          display: block;
          width: max-content;
          max-width: 100%;
          white-space: nowrap;
        }

        .heroTitleFirst {
          color: #17243b !important;
        }

        .heroTitleSecond {
          position: relative;
          z-index: 1;
          color: #f26419 !important;
        }

        .heroTitleSecond::before {
          position: absolute;
          z-index: -1;
          right: -7px;
          bottom: 4px;
          left: -5px;
          height: 17px;
          border-radius: 999px;
          background:
            rgba(255, 189, 116, 0.44);
          content: "";
          transform: rotate(-1deg);
        }

        .heroCatch {
          margin: 27px 0 0;
          color: #26354c;
          font-size: 18px;
          line-height: 1.7;
          font-weight: 900;
        }

        .heroDescription {
          max-width: 570px;
          margin: 13px 0 0;
          color: #667084;
          font-size: 13px;
          line-height: 1.9;
          font-weight: 600;
        }

        .heroFeatures {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 9px;
          margin-top: 23px;
        }

        .heroFeatures article {
          display: grid;
          grid-template-columns:
            42px minmax(0, 1fr);
          align-items: center;
          gap: 10px;
          min-height: 65px;
          padding: 10px 12px;
          border:
            1px solid
            rgba(234, 190, 151, 0.65);
          border-radius: 12px;
          background:
            rgba(255, 255, 255, 0.88);
          box-shadow:
            0 7px 21px
            rgba(73, 48, 27, 0.06);
        }

        .heroFeatures article > span {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: #fff0de;
          font-size: 19px;
        }

        .heroFeatures article > div {
          display: grid;
          gap: 3px;
        }

        .heroFeatures small {
          color: #e76a26;
          font-size: 7px;
          font-weight: 1000;
          letter-spacing: 0.1em;
        }

        .heroFeatures strong {
          color: #2d3a50;
          font-size: 11px;
        }

        .lineButton {
          display: inline-grid;
          grid-template-columns:
            47px minmax(0, 1fr) 22px;
          align-items: center;
          gap: 13px;
          width: min(
            460px,
            100%
          );
          margin-top: 21px;
          padding: 14px 18px;
          border-radius: 14px;
          background:
            linear-gradient(
              135deg,
              #08b84e,
              #05a944
            );
          box-shadow:
            0 16px 36px
            rgba(8, 184, 78, 0.23);
          color: #fff;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .lineButton:hover {
          transform: translateY(-3px);
          box-shadow:
            0 21px 43px
            rgba(8, 184, 78, 0.3);
        }

        .lineMark {
          width: 47px;
          height: 47px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #fff;
          color: #08a948;
          font-size: 9px;
          font-weight: 1000;
        }

        .lineText {
          display: grid;
          gap: 4px;
        }

        .lineText strong {
          font-size: 14px;
        }

        .lineText small {
          color:
            rgba(255, 255, 255, 0.8);
          font-size: 9px;
        }

        .lineArrow {
          font-size: 19px;
          font-weight: 900;
        }

        .heroNote {
          margin: 12px 0 0;
          color: #8d7a68;
          font-size: 9px;
          line-height: 1.6;
        }

        .heroVisual {
          min-width: 0;
        }

        .heroPhotos {
          position: relative;
          display: grid;
          grid-template-columns:
            1.12fr 0.88fr;
          grid-template-rows:
            215px 215px;
          gap: 10px;
        }

        .heroPhoto {
          overflow: hidden;
          margin: 0;
          border: 7px solid #fff;
          border-radius: 18px;
          background: #ddd;
          box-shadow:
            0 19px 45px
            rgba(32, 34, 41, 0.16);
        }

        .heroPhoto img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .heroPhotoMain {
          grid-row: 1 / 3;
        }

        .heroPhotoMain img {
          object-position: center;
        }

        .heroFreeBadge {
          position: absolute;
          z-index: 8;
          top: 50%;
          left: 56%;
          width: 128px;
          height: 128px;
          display: grid;
          place-items: center;
          align-content: center;
          border: 8px solid #fff7ec;
          border-radius: 50%;
          background:
            linear-gradient(
              145deg,
              #ff762c,
              #ed530e
            );
          box-shadow:
            0 17px 40px
            rgba(242, 100, 25, 0.32);
          color: #fff;
          font-size: 11px;
          font-weight: 900;
          text-align: center;
          transform:
            translate(-50%, -50%)
            rotate(6deg);
        }

        .heroFreeBadge strong {
          font-size: 34px;
          line-height: 1;
        }

        .heroFreeBadge small {
          margin-top: 4px;
          font-size: 7px;
        }

        .heroBottom {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          padding: 18px 25px;
          background:
            linear-gradient(
              90deg,
              #ef5f16,
              #ffa448,
              #efc95e,
              #56aa74
            );
        }

        .heroBottom span {
          padding: 8px 14px;
          border:
            1px solid
            rgba(255, 255, 255, 0.42);
          border-radius: 999px;
          background:
            rgba(255, 255, 255, 0.17);
          color: #fff;
          font-size: 10px;
          font-weight: 900;
        }

        .categorySection,
        .problemSection,
        .previewSection,
        .benefitSection,
        .freeSection,
        .flowSection,
        .faqSection {
          padding: 105px 0;
        }

        .categorySection {
          background: #fff;
        }

        .sectionTitle {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }

        .sectionEnglish {
          margin: 0 0 12px;
          color: #f26419;
          font-size: 9px;
          font-weight: 1000;
          letter-spacing: 0.2em;
        }

        .sectionTitle h2 {
          display: grid;
          gap: 2px;
          margin: 0;
          color: #17243b;
          font-size: clamp(
            34px,
            4.7vw,
            53px
          );
          line-height: 1.3;
          letter-spacing: -0.05em;
        }

        .sectionTitle h2 > span,
        .sectionTitle h2 > strong {
          display: block;
        }

        .sectionTitle h2 > strong {
          color: #f26419;
        }

        .sectionLine {
          width: 56px;
          height: 4px;
          margin: 18px auto 0;
          border-radius: 999px;
          background: #f26419;
        }

        .sectionDescription {
          max-width: 690px;
          margin: 20px auto 0;
          color: #6a7383;
          font-size: 13px;
          line-height: 1.85;
        }

        .categoryGrid {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 17px;
          margin-top: 48px;
        }

        .categoryCard {
          overflow: hidden;
          border: 1px solid #ece5dc;
          border-radius: 16px;
          background: #fff;
          box-shadow:
            0 10px 27px
            rgba(59, 44, 28, 0.06);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .categoryCard:hover {
          transform: translateY(-5px);
          box-shadow:
            0 18px 38px
            rgba(59, 44, 28, 0.11);
        }

        .categoryImage {
          position: relative;
          height: 158px;
          overflow: hidden;
        }

        .categoryImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition:
            transform 0.35s ease;
        }

        .categoryCard:hover
          .categoryImage img {
          transform: scale(1.06);
        }

        .categoryImage span {
          position: absolute;
          bottom: 11px;
          left: 12px;
          width: 45px;
          height: 45px;
          display: grid;
          place-items: center;
          border: 4px solid #fff;
          border-radius: 50%;
          background: #fff0de;
          box-shadow:
            0 8px 20px
            rgba(0, 0, 0, 0.16);
          font-size: 21px;
        }

        .categoryContent {
          min-height: 145px;
          padding: 18px;
        }

        .categoryContent h3 {
          margin: 0 0 9px;
          color: #29364c;
          font-size: 15px;
        }

        .categoryContent p {
          margin: 0;
          color: #707887;
          font-size: 10px;
          line-height: 1.75;
        }

        .orangeMessage {
          display: grid;
          gap: 5px;
          margin-top: 27px;
          padding: 21px;
          border-radius: 15px;
          background:
            linear-gradient(
              135deg,
              #f26419,
              #ff973d
            );
          color: #fff;
          text-align: center;
        }

        .orangeMessage strong {
          font-size: 17px;
          line-height: 1.5;
        }

        .orangeMessage p {
          margin: 0;
          color: #ffe3d1;
          font-size: 10px;
        }

        .problemSection {
          background:
            linear-gradient(
              180deg,
              #fff9f1,
              #f0faf3
            );
        }

        .problemGrid {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 48px;
        }

        .problemCard {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            220px;
          overflow: hidden;
          border-radius: 18px;
          background: #fff;
          box-shadow:
            0 12px 30px
            rgba(31, 40, 51, 0.07);
        }

        .orangeProblem {
          border: 1px solid #efcfb9;
        }

        .greenProblem {
          border: 1px solid #c4dfcc;
        }

        .problemContent {
          padding: 27px;
        }

        .problemLabel {
          display: inline-flex;
          padding: 8px 13px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 900;
        }

        .orangeProblem
          .problemLabel {
          background: #fff0e3;
          color: #dc611d;
        }

        .greenProblem
          .problemLabel {
          background: #e4f4e9;
          color: #247a4c;
        }

        .problemContent h3 {
          margin: 22px 0 18px;
          color: #28354b;
          font-size: 20px;
          line-height: 1.55;
        }

        .problemContent ul {
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .problemContent li {
          position: relative;
          padding-left: 25px;
          color: #606a7b;
          font-size: 11px;
          line-height: 1.6;
          font-weight: 700;
        }

        .problemContent li::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 18px;
          height: 18px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #fff;
          content: "✓";
          font-size: 8px;
        }

        .orangeProblem
          .problemContent li::before {
          background: #ef6b24;
        }

        .greenProblem
          .problemContent li::before {
          background: #27865a;
        }

        .problemCard > img {
          width: 100%;
          height: 100%;
          min-height: 330px;
          object-fit: cover;
        }

        .problemAnswer {
          display: grid;
          gap: 6px;
          margin-top: 28px;
          padding: 22px;
          border-radius: 14px;
          background: #17243b;
          color: #fff;
          text-align: center;
        }

        .problemAnswer span {
          color: #ffb376;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .problemAnswer strong {
          font-size: 16px;
          line-height: 1.6;
        }

        .previewSection {
          background: #fff5e9;
        }

        .previewHeading {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            370px;
          align-items: end;
          gap: 55px;
          margin-bottom: 45px;
        }

        .previewHeading > div > p:first-child {
          margin: 0 0 12px;
          color: #f26419;
          font-size: 9px;
          font-weight: 1000;
          letter-spacing: 0.2em;
        }

        .previewHeading h2 {
          display: grid;
          margin: 0;
          color: #17243b;
          font-size: clamp(
            34px,
            4.7vw,
            53px
          );
          line-height: 1.3;
          letter-spacing: -0.05em;
        }

        .previewHeading h2 > span,
        .previewHeading h2 > strong {
          display: block;
        }

        .previewHeading h2 > strong {
          color: #f26419;
        }

        .previewDescription {
          max-width: 690px;
          margin: 20px 0 0;
          color: #687183;
          font-size: 13px;
          line-height: 1.85;
        }

        .previewTags {
          display: flex;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 8px;
        }

        .previewTags span {
          padding: 9px 13px;
          border-radius: 999px;
          background: #fff;
          box-shadow:
            0 7px 18px
            rgba(64, 43, 23, 0.07);
          color: #a64c1b;
          font-size: 9px;
          font-weight: 900;
        }

        .previewStage {
          position: relative;
          min-height: 620px;
          padding:
            20px 125px 50px 15px;
        }

        .previewBrowser {
          overflow: hidden;
          border: 9px solid #fff;
          border-radius: 23px;
          background: #f7f7f5;
          box-shadow:
            0 28px 70px
            rgba(39, 35, 32, 0.19);
          transform:
            perspective(1200px)
            rotateY(2deg)
            rotateZ(-0.6deg);
        }

        .browserBar {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 12px 15px;
          background: #18243a;
        }

        .browserDots {
          display: flex;
          gap: 5px;
        }

        .browserDots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f26419;
        }

        .browserDots span:nth-child(2) {
          background: #f4c54b;
        }

        .browserDots span:nth-child(3) {
          background: #45aa72;
        }

        .browserAddress {
          flex: 1;
          padding: 6px;
          border-radius: 6px;
          background:
            rgba(255, 255, 255, 0.1);
          color: #dce1eb;
          text-align: center;
          font-size: 7px;
        }

        .browserPage {
          padding: 23px;
        }

        .browserHeading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 16px;
          padding-bottom: 11px;
          border-bottom:
            1px solid #dddcd7;
        }

        .browserHeading > div {
          display: grid;
          gap: 3px;
        }

        .browserHeading small {
          color: #f26419;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.18em;
        }

        .browserHeading strong {
          font-size: 18px;
        }

        .browserHeading > span {
          color: #c5c3bc;
          font-size: 8px;
        }

        .browserCards {
          display: grid;
          grid-template-columns:
            minmax(0, 1.3fr)
            minmax(170px, 0.7fr);
          gap: 13px;
        }

        .sampleCard {
          overflow: hidden;
          border-radius: 13px;
          background: #fff;
          box-shadow:
            0 8px 20px
            rgba(0, 0, 0, 0.08);
        }

        .sampleCard > img {
          height: 210px;
          object-fit: cover;
        }

        .sampleBody {
          padding: 15px;
        }

        .sampleCategory {
          display: inline-flex;
          padding: 5px 8px;
          border-radius: 999px;
          background: #fff0df;
          color: #a94d1c;
          font-size: 7px;
          font-weight: 900;
        }

        .sampleBody h3 {
          margin: 10px 0;
          font-size: 14px;
          line-height: 1.4;
        }

        .sampleBody p {
          margin: 5px 0;
          color: #747987;
          font-size: 8px;
        }

        .sampleButton {
          display: block;
          margin-top: 12px;
          padding: 9px;
          border-radius: 6px;
          background: #17243b;
          color: #fff;
          text-align: center;
          font-size: 8px;
        }

        .browserSideCards {
          display: grid;
          gap: 9px;
        }

        .browserSideCards article {
          display: grid;
          align-content: center;
          gap: 5px;
          min-height: 115px;
          padding: 14px;
          border-radius: 11px;
          background: #fff;
          box-shadow:
            0 6px 16px
            rgba(0, 0, 0, 0.06);
        }

        .browserSideCards span {
          font-size: 23px;
        }

        .browserSideCards strong {
          font-size: 10px;
        }

        .browserSideCards small {
          color: #888e9a;
          font-size: 7px;
          line-height: 1.4;
        }

        .phonePreview {
          position: absolute;
          z-index: 5;
          right: 10px;
          bottom: 0;
          width: 225px;
          padding: 11px;
          border: 8px solid #19263c;
          border-radius: 32px;
          background: #fff;
          box-shadow:
            0 24px 55px
            rgba(25, 38, 60, 0.29);
          transform: rotate(5deg);
        }

        .phoneSpeaker {
          width: 58px;
          height: 5px;
          margin: 0 auto 9px;
          border-radius: 999px;
          background: #19263c;
        }

        .phoneContent {
          overflow: hidden;
          border-radius: 17px;
          background: #f6f6f3;
        }

        .phoneContent img {
          height: 165px;
          object-fit: cover;
        }

        .phoneContent > span {
          display: inline-flex;
          margin: 12px 12px 7px;
          padding: 5px 8px;
          border-radius: 999px;
          background: #fff0df;
          color: #a94d1c;
          font-size: 6px;
          font-weight: 900;
        }

        .phoneContent h3 {
          margin: 0;
          padding: 0 12px;
          font-size: 13px;
          line-height: 1.4;
        }

        .phoneContent p {
          margin: 8px 12px;
          color: #777;
          font-size: 7px;
        }

        .phoneContent > strong {
          display: block;
          margin: 11px 12px 14px;
          padding: 8px;
          border-radius: 6px;
          background: #17243b;
          color: #fff;
          text-align: center;
          font-size: 7px;
        }

        .previewBadge {
          position: absolute;
          z-index: 7;
          padding: 10px 13px;
          border-radius: 10px;
          background: #fff;
          box-shadow:
            0 14px 32px
            rgba(32, 39, 54, 0.15);
          font-size: 9px;
          font-weight: 900;
        }

        .previewBadgeCalendar {
          top: 67px;
          left: -15px;
          transform: rotate(-5deg);
        }

        .previewBadgeCategory {
          right: 0;
          bottom: 175px;
          transform: rotate(4deg);
        }

        .previewFree {
          position: absolute;
          z-index: 8;
          top: -17px;
          right: 77px;
          width: 118px;
          height: 118px;
          display: grid;
          place-items: center;
          align-content: center;
          border: 8px solid #fff7e8;
          border-radius: 50%;
          background: #f26419;
          box-shadow:
            0 17px 40px
            rgba(242, 100, 25, 0.31);
          color: #fff;
          font-size: 10px;
          font-weight: 900;
          transform: rotate(7deg);
        }

        .previewFree strong {
          font-size: 31px;
          line-height: 1;
        }

        .previewNotice {
          margin: 18px 0 0;
          color: #92715a;
          text-align: center;
          font-size: 9px;
          line-height: 1.7;
        }

        .benefitSection {
          background: #eff8f2;
        }

        .benefitGrid {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-top: 48px;
        }

        .benefitCard {
          min-height: 270px;
          padding: 24px;
          border: 1px solid #cce0d2;
          border-radius: 17px;
          background: #fff;
          box-shadow:
            0 10px 27px
            rgba(27, 75, 47, 0.06);
        }

        .benefitTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .benefitNumber {
          color:
            rgba(39, 134, 90, 0.34);
          font-size: 23px;
          font-weight: 1000;
        }

        .benefitIcon {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          background: #e1f4e7;
          font-size: 26px;
        }

        .benefitCard h3 {
          margin: 35px 0 12px;
          color: #24543b;
          font-size: 17px;
          line-height: 1.5;
        }

        .benefitCard p {
          margin: 0;
          color: #68766d;
          font-size: 11px;
          line-height: 1.8;
        }

        .freeSection {
          background: #fff;
        }

        .freeHeading {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
        }

        .freeStamp {
          width: 135px;
          height: 135px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          align-content: center;
          gap: 3px;
          border: 7px solid #eaf7ee;
          border-radius: 50%;
          background: #27865a;
          box-shadow:
            0 17px 38px
            rgba(39, 134, 90, 0.2);
          color: #fff;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.15em;
          transform: rotate(-7deg);
        }

        .freeStamp strong {
          font-size: 30px;
          line-height: 1;
          letter-spacing: 0;
        }

        .freeHeading > div:last-child > p {
          margin: 0 0 10px;
          color: #27865a;
          font-size: 9px;
          font-weight: 1000;
          letter-spacing: 0.2em;
        }

        .freeHeading h2 {
          margin: 0;
          font-size: clamp(
            34px,
            4.7vw,
            53px
          );
          line-height: 1.3;
          letter-spacing: -0.05em;
        }

        .freeHeading h2 span {
          margin-left: 8px;
          color: #27865a;
        }

        .freeLead {
          display: block;
          margin-top: 12px;
          color: #69766e;
          font-size: 12px;
          font-weight: 600;
        }

        .includedGrid {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 45px;
        }

        .includedGrid article {
          display: grid;
          grid-template-columns:
            55px minmax(0, 1fr)
            27px;
          align-items: center;
          gap: 14px;
          min-height: 110px;
          padding: 18px;
          border: 1px solid #d4e5d9;
          border-radius: 14px;
          background: #f4faf6;
        }

        .includedIcon {
          width: 55px;
          height: 55px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #e0f3e6;
          font-size: 25px;
        }

        .includedGrid h3 {
          margin: 0 0 5px;
          color: #24543b;
          font-size: 14px;
        }

        .includedGrid p {
          margin: 0;
          color: #68766d;
          font-size: 9px;
          line-height: 1.6;
        }

        .includedCheck {
          width: 27px;
          height: 27px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #27865a;
          color: #fff;
          font-size: 11px;
          font-weight: 900;
        }

        .freeNote {
          margin: 19px 0 0;
          color: #7b827d;
          text-align: center;
          font-size: 9px;
          line-height: 1.7;
        }

        .flowSection {
          background: #fff8ef;
        }

        .stepGrid {
          display: flex;
          align-items: stretch;
          margin-top: 48px;
        }

        .stepWrapper {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .stepCard {
          flex: 1;
          min-height: 285px;
          padding: 23px;
          border: 1px solid #efd5bf;
          border-radius: 17px;
          background: #fff;
          text-align: center;
          box-shadow:
            0 9px 24px
            rgba(61, 46, 31, 0.05);
        }

        .stepNumber {
          color: #f26419;
          font-size: 9px;
          font-weight: 1000;
          letter-spacing: 0.13em;
        }

        .stepIcon {
          width: 76px;
          height: 76px;
          display: grid;
          place-items: center;
          margin: 24px auto 18px;
          border-radius: 50%;
          background: #fff0df;
          font-size: 34px;
        }

        .stepCard h3 {
          margin: 0 0 10px;
          color: #29364c;
          font-size: 16px;
        }

        .stepCard p {
          margin: 0;
          color: #6d7585;
          font-size: 10px;
          line-height: 1.75;
        }

        .stepArrow {
          width: 40px;
          flex: 0 0 auto;
          color: #e8a36f;
          text-align: center;
          font-size: 26px;
          font-weight: 900;
        }

        .flowButton {
          display: grid;
          place-items: center;
          margin-top: 37px;
        }

        .faqSection {
          background: #fff;
        }

        .faqLayout {
          display: grid;
          grid-template-columns:
            300px minmax(0, 1fr);
          gap: 65px;
        }

        .faqHeading > p {
          margin: 0 0 11px;
          color: #f26419;
          font-size: 9px;
          font-weight: 1000;
          letter-spacing: 0.2em;
        }

        .faqHeading h2 {
          display: grid;
          margin: 0;
          color: #17243b;
          font-size: 48px;
          line-height: 1.28;
          letter-spacing: -0.05em;
        }

        .faqHeading h2 span {
          color: #f26419;
        }

        .questionMark {
          width: 135px;
          height: 135px;
          display: grid;
          place-items: center;
          margin-top: 28px;
          border-radius: 43% 57% 50% 50%;
          background: #fff0df;
          color: #f26419;
          font-size: 68px;
          font-weight: 1000;
          transform: rotate(-5deg);
        }

        .faqHeading > strong {
          display: block;
          margin-top: 20px;
          color: #7a6b60;
          font-size: 10px;
          line-height: 1.7;
        }

        .faqList {
          display: grid;
          gap: 10px;
        }

        .faqList details {
          overflow: hidden;
          border: 1px solid #e5e3de;
          border-radius: 12px;
          background: #fafaf8;
        }

        .faqList summary {
          display: grid;
          grid-template-columns:
            45px minmax(0, 1fr)
            26px;
          align-items: center;
          gap: 12px;
          padding: 17px;
          cursor: pointer;
          list-style: none;
        }

        .faqList summary::-webkit-details-marker {
          display: none;
        }

        .faqList summary > span {
          color: #f26419;
          font-size: 10px;
          font-weight: 1000;
        }

        .faqList summary strong {
          font-size: 12px;
          line-height: 1.55;
        }

        .faqList summary small {
          color: #f26419;
          font-size: 19px;
          font-weight: 900;
        }

        .faqAnswer {
          display: grid;
          grid-template-columns:
            31px minmax(0, 1fr);
          gap: 11px;
          padding: 0 17px 17px;
        }

        .faqAnswer span {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: #f26419;
          color: #fff;
          font-size: 10px;
          font-weight: 900;
        }

        .faqAnswer p {
          margin: 5px 0 0;
          color: #6d7585;
          font-size: 10px;
          line-height: 1.75;
        }

        .finalSection {
          position: relative;
          min-height: 560px;
          display: grid;
          place-items: center;
          overflow: hidden;
          background: #17243b;
        }

        .finalImage {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .finalOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              135deg,
              rgba(18, 35, 57, 0.91),
              rgba(235, 85, 13, 0.84)
            );
        }

        .finalContent {
          position: relative;
          z-index: 2;
          width: min(
            760px,
            calc(100% - 40px)
          );
          padding: 75px 0;
          color: #fff;
          text-align: center;
        }

        .finalContent > p:first-child {
          margin: 0 0 15px;
          color: #ffd4b8;
          font-size: 9px;
          font-weight: 1000;
          letter-spacing: 0.2em;
        }

        .finalContent h2 {
          display: grid;
          gap: 4px;
          margin: 0;
          font-size: clamp(
            40px,
            6vw,
            66px
          );
          line-height: 1.25;
          letter-spacing: -0.055em;
        }

        .finalContent h2 span,
        .finalContent h2 strong {
          display: block;
        }

        .finalContent h2 strong {
          color: #fff3a4;
        }

        .finalDescription {
          margin: 24px auto 0;
          color: #ffe6d6;
          font-size: 13px;
          line-height: 1.85;
        }

        .finalTags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin: 24px 0 1px;
        }

        .finalTags span {
          padding: 8px 13px;
          border:
            1px solid
            rgba(255, 255, 255, 0.3);
          border-radius: 999px;
          background:
            rgba(255, 255, 255, 0.12);
          font-size: 10px;
          font-weight: 900;
        }

        .finalContent .lineButton {
          margin-right: auto;
          margin-left: auto;
        }

        .footer {
          padding: 42px 0;
          background: #17243b;
          color: #c5ccd7;
        }

        .footerInner {
          width: min(
            1100px,
            calc(100% - 40px)
          );
          display: grid;
          grid-template-columns:
            1fr auto 250px;
          gap: 50px;
          margin: 0 auto;
        }

        .footerLogo {
          color: #fff;
          text-decoration: none;
          font-size: 17px;
          font-weight: 900;
        }

        .footerInner > div > p {
          max-width: 300px;
          margin: 12px 0 0;
          font-size: 9px;
          line-height: 1.8;
        }

        .footerInner nav {
          display: grid;
          gap: 10px;
        }

        .footerInner nav a {
          color: #d5dae3;
          text-decoration: none;
          font-size: 9px;
        }

        .footerContact {
          display: grid;
          align-content: start;
          gap: 12px;
        }

        .footerContact strong {
          color: #fff;
          font-size: 11px;
        }

        .footerContact a {
          padding: 12px;
          border-radius: 8px;
          background: #08b84e;
          color: #fff;
          text-align: center;
          text-decoration: none;
          font-size: 10px;
          font-weight: 900;
        }

        .floatingLine {
          position: fixed;
          z-index: 200;
          right: 18px;
          bottom: 18px;
          width: 74px;
          height: 74px;
          display: grid;
          place-items: center;
          align-content: center;
          gap: 2px;
          border: 5px solid #fff;
          border-radius: 50%;
          background: #08b84e;
          box-shadow:
            0 16px 40px
            rgba(8, 184, 78, 0.35);
          color: #fff;
          text-decoration: none;
        }

        .floatingLine span {
          font-size: 8px;
          font-weight: 1000;
        }

        .floatingLine strong {
          font-size: 10px;
        }

        @media (max-width: 1050px) {
          .header nav a:not(
              .headerLine
            ) {
            display: none;
          }

          .heroInner {
            grid-template-columns: 1fr;
          }

          .heroCopy {
            max-width: 740px;
          }

          .heroVisual {
            width: min(
              760px,
              100%
            );
            margin: 0 auto;
          }

          .categoryGrid,
          .benefitGrid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .problemCard {
            grid-template-columns: 1fr;
          }

          .problemCard > img {
            height: 260px;
            min-height: 0;
          }

          .previewHeading {
            grid-template-columns: 1fr;
          }

          .previewTags {
            justify-content: flex-start;
          }

          .includedGrid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .faqLayout {
            grid-template-columns:
              250px minmax(0, 1fr);
          }
        }

        @media (max-width: 720px) {
          .headerInner,
          .container,
          .heroInner,
          .footerInner {
            width:
              calc(100% - 24px);
          }

          .headerInner {
            min-height: 62px;
          }

          .logo {
            font-size: 16px;
          }

          .headerLine {
            padding:
              10px 13px !important;
          }

          .heroInner {
            min-height: 0;
            gap: 48px;
            padding: 54px 0 70px;
          }

          .heroCopy h1 {
            font-size: 42px;
          }

          .heroTitleFirst,
          .heroTitleSecond {
            width: auto;
            white-space: normal;
          }

          .heroCatch {
            font-size: 16px;
          }

          .heroFeatures {
            grid-template-columns: 1fr;
          }

          .heroPhotos {
            grid-template-columns:
              1fr 1fr;
            grid-template-rows:
              205px 150px;
          }

          .heroFreeBadge {
            left: 54%;
            width: 98px;
            height: 98px;
            border-width: 6px;
          }

          .heroFreeBadge strong {
            font-size: 25px;
          }

          .categorySection,
          .problemSection,
          .previewSection,
          .benefitSection,
          .freeSection,
          .flowSection,
          .faqSection {
            padding: 74px 0;
          }

          .sectionTitle h2,
          .previewHeading h2 {
            font-size: 32px;
          }

          .categoryGrid,
          .problemGrid,
          .benefitGrid,
          .includedGrid {
            grid-template-columns: 1fr;
          }

          .categoryImage {
            height: 220px;
          }

          .problemCard {
            grid-template-columns: 1fr;
          }

          .problemCard > img {
            height: 225px;
          }

          .previewStage {
            min-height: 770px;
            padding:
              10px 0 215px;
          }

          .previewBrowser {
            border-width: 6px;
            transform: none;
          }

          .browserPage {
            padding: 14px;
          }

          .browserCards {
            grid-template-columns: 1fr;
          }

          .browserSideCards {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );
          }

          .browserSideCards article {
            min-height: 90px;
            padding: 10px;
          }

          .phonePreview {
            right: 50%;
            width: 195px;
            transform:
              translateX(50%)
              rotate(3deg);
          }

          .previewBadge,
          .previewFree {
            display: none;
          }

          .freeHeading {
            display: grid;
            justify-items: center;
            text-align: center;
          }

          .stepGrid {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .stepWrapper {
            display: block;
          }

          .stepArrow {
            display: none;
          }

          .faqLayout {
            grid-template-columns: 1fr;
          }

          .questionMark {
            display: none;
          }

          .faqHeading {
            text-align: center;
          }

          .faqHeading h2 {
            font-size: 37px;
          }

          .finalContent h2 {
            font-size: 39px;
          }

          .footerInner {
            grid-template-columns: 1fr;
            gap: 29px;
            text-align: center;
          }

          .footerInner > div > p {
            margin-right: auto;
            margin-left: auto;
          }

          .footerInner nav {
            justify-items: center;
          }

          .floatingLine {
            right: 11px;
            bottom: 11px;
            width: 65px;
            height: 65px;
          }
        }

        @media (max-width: 430px) {
          .heroCopy h1 {
            font-size: 37px;
          }

          .heroDescription {
            font-size: 12px;
          }

          .lineButton {
            grid-template-columns:
              42px minmax(0, 1fr)
              19px;
            gap: 10px;
            padding: 12px 14px;
          }

          .lineMark {
            width: 42px;
            height: 42px;
          }

          .lineText strong {
            font-size: 12px;
          }

          .heroBottom {
            gap: 7px;
          }

          .heroBottom span {
            padding: 7px 10px;
            font-size: 9px;
          }

          .sectionTitle h2,
          .previewHeading h2 {
            font-size: 29px;
          }

          .browserSideCards {
            grid-template-columns: 1fr;
          }

          .includedGrid article {
            grid-template-columns:
              50px minmax(0, 1fr);
          }

          .includedCheck {
            display: none;
          }

          .stepGrid {
            grid-template-columns: 1fr;
          }

          .finalContent h2 {
            font-size: 34px;
          }
        }
      `}</style>
    </main>
  );
}
