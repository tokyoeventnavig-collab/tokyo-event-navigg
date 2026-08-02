import Link from "next/link";

export const metadata = {
  title: "イベント掲載について｜東京イベントナビ",
  description:
    "あなたのイベントをもっと多くの人へ。東京イベントナビでは、東京都内で開催されるイベントの掲載を受け付けています。",
};

const LINE_URL = "https://lin.ee/P179zyp";

/*
 * 使用画像はここで一括管理しています。
 * 後から画像を変更するときは、このURLだけ差し替えれば反映されます。
 */
const IMAGES = {
  party:
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1400&q=88",
  boardGame:
    "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1200&q=88",
  seminar:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=88",
  cafe:
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=88",
  sports:
    "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=88",
  workshop:
    "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=88",
  business:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=88",
  event:
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=88",
};

const categories = [
  {
    icon: "🍻",
    title: "飲み会・交流会",
    description:
      "友達づくり、恋活、社会人交流、異業種交流など。",
    image: IMAGES.party,
  },
  {
    icon: "☕",
    title: "カフェ会・ランチ会",
    description:
      "少人数で会話や食事を楽しむカジュアルな交流イベント。",
    image: IMAGES.cafe,
  },
  {
    icon: "🎲",
    title: "ボードゲーム・ゲーム会",
    description:
      "初心者歓迎のボードゲーム会やカードゲーム会。",
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
      "料理、写真、ものづくり、ワークショップなど。",
    image: IMAGES.workshop,
  },
  {
    icon: "🤝",
    title: "ビジネス交流会",
    description:
      "経営者交流、異業種交流、名刺交換、マッチングイベント。",
    image: IMAGES.business,
  },
  {
    icon: "✨",
    title: "その他のイベント",
    description:
      "ライブ、マルシェ、上映会などもご相談いただけます。",
    image: IMAGES.event,
  },
];

const features = [
  {
    icon: "▣",
    english: "EVENT PAGE",
    title: "専用ページ作成",
    text: "必要な情報を一つのページへ整理します。",
  },
  {
    icon: "17",
    english: "CALENDAR",
    title: "カレンダー掲載",
    text: "開催日からイベントを探せます。",
  },
  {
    icon: "▦",
    english: "CATEGORY",
    title: "カテゴリー掲載",
    text: "ジャンルに興味のある方へ届けます。",
  },
  {
    icon: "↗",
    english: "APPLICATION",
    title: "申込リンク設置",
    text: "LINEやフォームへ直接案内します。",
  },
];

const benefits = [
  {
    number: "01",
    icon: "👥",
    title: "新しい参加者との接点",
    description:
      "普段のSNSや知人への告知だけでは接点のなかった方へ、イベント情報を届けられます。",
  },
  {
    number: "02",
    icon: "🔍",
    title: "複数の入口から発見",
    description:
      "新着、今週、カレンダー、カテゴリーなど、複数の探し方から見つけてもらえます。",
  },
  {
    number: "03",
    icon: "🛡️",
    title: "イベントの信頼感向上",
    description:
      "日時、会場、参加条件、主催者情報を整理し、初参加の方にも安心感を与えます。",
  },
  {
    number: "04",
    icon: "📣",
    title: "魅力を分かりやすく訴求",
    description:
      "フライヤーやイベント概要を見やすくまとめ、特徴や雰囲気を伝えます。",
  },
];

const includedItems = [
  {
    icon: "🖼️",
    title: "フライヤー掲載",
    description: "イベント画像を大きく見やすく掲載。",
  },
  {
    icon: "📄",
    title: "イベント専用ページ",
    description: "イベントごとの詳細ページを作成。",
  },
  {
    icon: "📅",
    title: "日時・カレンダー掲載",
    description: "開催日と時間をカレンダーへ反映。",
  },
  {
    icon: "📍",
    title: "会場・住所掲載",
    description: "会場名と住所を分かりやすく表示。",
  },
  {
    icon: "🗂️",
    title: "カテゴリー掲載",
    description: "イベントのジャンル別検索へ反映。",
  },
  {
    icon: "🔗",
    title: "申込リンク設置",
    description: "LINEや申込フォームへ直接案内。",
  },
];

const steps = [
  {
    number: "01",
    icon: "💬",
    title: "LINEで相談",
    description:
      "公式LINEへ「イベント掲載希望」とお送りください。",
  },
  {
    number: "02",
    icon: "📎",
    title: "イベント情報を送付",
    description:
      "フライヤー、日時、会場、概要、申込先などを送ります。",
  },
  {
    number: "03",
    icon: "✅",
    title: "掲載内容を確認",
    description:
      "完成したイベントページの内容をご確認いただきます。",
  },
  {
    number: "04",
    icon: "🚀",
    title: "掲載スタート",
    description:
      "イベント一覧、カレンダー、カテゴリーへ反映します。",
  },
];

const faqs = [
  {
    question: "掲載料金はかかりますか？",
    answer:
      "現在、基本掲載は無料です。フライヤー、日時、会場、イベント概要、申込先などを掲載します。",
  },
  {
    question: "どのようなイベントを掲載できますか？",
    answer:
      "東京都内で開催される飲み会、交流会、趣味イベント、スポーツ、セミナー、勉強会などが対象です。",
  },
  {
    question: "情報がすべて揃っていなくても相談できますか？",
    answer:
      "はい。開催内容が完全に決まっていない段階でもご相談いただけます。必要な情報を順番にご案内します。",
  },
  {
    question: "人気イベント欄へ必ず掲載されますか？",
    answer:
      "人気イベント欄への掲載は保証していません。開催時期や掲載内容により表示場所は異なります。",
  },
  {
    question: "掲載後に内容を変更できますか？",
    answer:
      "変更可能です。日時や会場などに変更が生じた場合は、公式LINEからご連絡ください。",
  },
];

function LineButton({
  title = "無料で掲載について相談する",
  note = "公式LINEからお気軽にご連絡ください",
  light = false,
}: {
  title?: string;
  note?: string;
  light?: boolean;
}) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noreferrer"
      className={
        light
          ? "lineButton lineButtonLight"
          : "lineButton"
      }
    >
      <span className="lineLogo">LINE</span>

      <span className="lineButtonText">
        <strong>{title}</strong>
        <small>{note}</small>
      </span>

      <span className="lineArrow">→</span>
    </a>
  );
}

function SectionHeading({
  label,
  title,
  accent,
  description,
}: {
  label: string;
  title: string;
  accent: string;
  description?: string;
}) {
  return (
    <div className="sectionHeading">
      <p className="sectionEyebrow">
        {label}
      </p>

      <h2>
        <span>{title}</span>
        <strong>{accent}</strong>
      </h2>

      <div className="sectionHeadingLine" />

      {description && (
        <p className="sectionLead">
          {description}
        </p>
      )}
    </div>
  );
}

function ListingPreview() {
  return (
    <div className="previewStage">
      <div className="previewGlow previewGlowOne" />
      <div className="previewGlow previewGlowTwo" />

      <div className="desktopPreview">
        <div className="browserTop">
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
          <div className="browserTitle">
            <div>
              <small>TOKYO EVENT NAVI</small>
              <strong>人気イベント</strong>
            </div>

            <span>EVENT</span>
          </div>

          <div className="browserLayout">
            <article className="sampleEvent">
              <img
                src={IMAGES.party}
                alt="イベント掲載イメージ"
              />

              <div className="sampleEventBody">
                <span>飲み会・交流会</span>

                <h3>
                  20〜30代限定
                  <br />
                  東京交流イベント
                </h3>

                <dl>
                  <div>
                    <dt>開催日</dt>
                    <dd>2026年8月22日（土）</dd>
                  </div>

                  <div>
                    <dt>開催時間</dt>
                    <dd>18:00〜20:00</dd>
                  </div>

                  <div>
                    <dt>会場</dt>
                    <dd>新宿イベントスペース</dd>
                  </div>
                </dl>

                <strong className="sampleDetail">
                  詳細を見る
                </strong>
              </div>
            </article>

            <div className="sampleSide">
              <article>
                <span>NEW</span>
                <strong>新着イベント</strong>
                <small>
                  新しく掲載されたイベント
                </small>
              </article>

              <article>
                <span>7DAYS</span>
                <strong>今週のイベント</strong>
                <small>
                  近日開催のイベント
                </small>
              </article>

              <article>
                <span>SEARCH</span>
                <strong>カテゴリー検索</strong>
                <small>
                  興味のあるジャンルから
                </small>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="mobilePreview">
        <div className="mobileSpeaker" />

        <div className="mobilePage">
          <img src={IMAGES.party} alt="" />

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

      <div className="previewFloating previewFloatingOne">
        <span>01</span>
        カレンダー掲載
      </div>

      <div className="previewFloating previewFloatingTwo">
        <span>02</span>
        カテゴリー検索
      </div>

      <div className="previewFreeBadge">
        BASIC
        <strong>FREE</strong>
        <small>基本掲載無料</small>
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
            <Link href="/">
              イベントを探す
            </Link>

            <a href="#categories">
              掲載できるイベント
            </a>

            <a href="#benefits">
              掲載するメリット
            </a>

            <a href="#flow">
              掲載までの流れ
            </a>

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
        <div className="heroNoise" />
        <div className="heroCircle heroCircleOne" />
        <div className="heroCircle heroCircleTwo" />
        <div className="heroDot heroDotOne" />
        <div className="heroDot heroDotTwo" />
        <div className="heroDot heroDotThree" />

        <div className="heroInner">
          <div className="heroCopy">
            <div className="heroTarget">
              <span>FOR EVENT ORGANIZERS</span>
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
              飲み会・交流会・趣味イベント・セミナーなどを
              掲載しています。
            </p>

            <div className="heroFeatureGrid">
              {features.map((feature) => (
                <article key={feature.title}>
                  <span className="heroFeatureIcon">
                    {feature.icon}
                  </span>

                  <div>
                    <small>{feature.english}</small>
                    <strong>{feature.title}</strong>
                    <p>{feature.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="heroAction">
              <LineButton />

              <div className="heroActionNote">
                <strong>相談だけでもOK</strong>
                <span>
                  掲載できる内容か分からない場合も問題ありません。
                </span>
              </div>
            </div>
          </div>

          <div className="heroVisual">
            <div className="heroVisualLabel">
              TOKYO EVENT NAVI
            </div>

            <div className="heroPhoto heroPhotoMain">
              <img
                src={IMAGES.party}
                alt="交流イベント"
              />

              <div className="photoCaption">
                <span>01</span>

                <div>
                  <small>交流イベント</small>
                  <strong>
                    人と人がつながる時間
                  </strong>
                </div>
              </div>
            </div>

            <div className="heroPhoto heroPhotoSubOne">
              <img
                src={IMAGES.boardGame}
                alt="ボードゲームイベント"
              />
            </div>

            <div className="heroPhoto heroPhotoSubTwo">
              <img
                src={IMAGES.seminar}
                alt="セミナーイベント"
              />
            </div>

            <div className="heroVisualCard">
              <span>掲載対象</span>

              <strong>
                飲み会・交流会・趣味
                <br />
                セミナー・スポーツなど
              </strong>
            </div>

            <div className="heroFree">
              <small>BASIC</small>
              <strong>FREE</strong>
              <span>基本掲載無料</span>
            </div>
          </div>
        </div>

        <div className="heroBottom">
          <div>
            <span>01</span>
            掲載無料
          </div>

          <div>
            <span>02</span>
            専用ページ作成
          </div>

          <div>
            <span>03</span>
            カレンダー掲載
          </div>

          <div>
            <span>04</span>
            申込先へ直接案内
          </div>
        </div>
      </section>

      <section
        className="categorySection"
        id="categories"
      >
        <div className="container">
          <SectionHeading
            label="EVENT CATEGORIES"
            title="こんなイベントを"
            accent="掲載できます"
            description="東京で開催される、さまざまなジャンルのイベントに対応しています。"
          />

          <div className="categoryGrid">
            {categories.map(
              (category, index) => (
                <article
                  className="categoryCard"
                  key={category.title}
                >
                  <div className="categoryImage">
                    <img
                      src={category.image}
                      alt={category.title}
                    />

                    <div className="categoryOverlay" />

                    <span className="categoryNumber">
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <span className="categoryIcon">
                      {category.icon}
                    </span>
                  </div>

                  <div className="categoryContent">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </article>
              ),
            )}
          </div>

          <div className="categoryBottom">
            <div>
              <small>
                NOT FOUND YOUR CATEGORY?
              </small>

              <strong>
                記載のないジャンルも
                お気軽にご相談ください。
              </strong>
            </div>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
            >
              LINEで相談する
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="problemSection">
        <div className="problemBackgroundNumber">
          02
        </div>

        <div className="container">
          <SectionHeading
            label="ORGANIZER PROBLEMS"
            title="イベントの告知・運営で"
            accent="こんなお悩みありませんか？"
          />

          <div className="problemGrid">
            <article className="problemCard problemCardOrange">
              <div className="problemPhoto">
                <img
                  src={IMAGES.business}
                  alt="イベントの企画や告知"
                />

                <span>01</span>
              </div>

              <div className="problemContent">
                <p className="problemType">
                  AWARENESS PROBLEM
                </p>

                <h3>
                  良いイベントなのに、
                  <br />
                  まだ知られていない。
                </h3>

                <div className="problemList">
                  <p>
                    <span>✓</span>
                    毎回、知人への声かけに頼っている
                  </p>

                  <p>
                    <span>✓</span>
                    SNSだけでは新しい人に届かない
                  </p>

                  <p>
                    <span>✓</span>
                    初開催で申込みが入るか不安
                  </p>
                </div>
              </div>
            </article>

            <article className="problemCard problemCardGreen">
              <div className="problemContent">
                <p className="problemType">
                  OPERATION PROBLEM
                </p>

                <h3>
                  告知に追われて、
                  <br />
                  準備に集中できない。
                </h3>

                <div className="problemList">
                  <p>
                    <span>✓</span>
                    開催直前まで人数が読めない
                  </p>

                  <p>
                    <span>✓</span>
                    日時や会場情報が伝わりにくい
                  </p>

                  <p>
                    <span>✓</span>
                    イベントページを作る時間がない
                  </p>
                </div>
              </div>

              <div className="problemPhoto">
                <img
                  src={IMAGES.seminar}
                  alt="イベント運営と準備"
                />

                <span>02</span>
              </div>
            </article>
          </div>

          <div className="problemSolution">
            <div className="problemSolutionIcon">
              ↗
            </div>

            <div>
              <small>
                TOKYO EVENT NAVI
              </small>

              <strong>
                イベントの魅力はある。
                足りないのは、
                見つけてもらう入口かもしれません。
              </strong>
            </div>

            <p>
              東京イベントナビが、情報整理から掲載までサポートします。
            </p>
          </div>
        </div>
      </section>

      <section className="previewSection">
        <div className="container">
          <div className="previewHeading">
            <div>
              <p>LISTING EXPERIENCE</p>

              <h2>
                <span>掲載後は、</span>
                <strong>
                  このように表示されます
                </strong>
              </h2>

              <p className="previewDescription">
                フライヤー、開催日時、会場、参加条件などを
                一つのページへ整理。TOPページ、カレンダー、
                カテゴリーなどからイベントを探せます。
              </p>
            </div>

            <div className="previewTagArea">
              <span>人気イベント</span>
              <span>新着イベント</span>
              <span>今週のイベント</span>
              <span>カレンダー</span>
              <span>カテゴリー検索</span>
            </div>
          </div>

          <ListingPreview />

          <p className="previewNotice">
            ※人気イベント欄への掲載は保証していません。
            掲載内容や開催時期により、表示される場所は異なります。
          </p>
        </div>
      </section>

      <section
        className="benefitSection"
        id="benefits"
      >
        <div className="container">
          <SectionHeading
            label="WHY TOKYO EVENT NAVI"
            title="掲載することで"
            accent="増やせる可能性"
            description="イベントの認知・信頼・申込みにつながる入口を増やします。"
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

                <div className="benefitLine" />
              </article>
            ))}
          </div>

          <div className="benefitBanner">
            <div className="benefitBannerImage">
              <img
                src={IMAGES.party}
                alt="イベントを楽しむ参加者"
              />
            </div>

            <div className="benefitBannerContent">
              <small>
                CREATE NEW CONNECTIONS
              </small>

              <h3>
                あなたのイベントが、
                <br />
                誰かの新しい出会いにつながる。
              </h3>

              <p>
                参加者にとっても、主催者にとっても、
                新しいつながりが生まれる入口を目指します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="freeSection">
        <div className="freeShape freeShapeOne" />
        <div className="freeShape freeShapeTwo" />

        <div className="container">
          <div className="freeHeading">
            <div className="freeStamp">
              <small>BASIC</small>
              <strong>FREE</strong>
              <span>基本掲載無料</span>
            </div>

            <div>
              <p>WHAT IS INCLUDED</p>

              <h2>
                基本掲載に
                <span>含まれる内容</span>
              </h2>

              <strong className="freeHeadingLead">
                イベント掲載に必要な基本機能をまとめてご用意します。
              </strong>
            </div>
          </div>

          <div className="includedGrid">
            {includedItems.map(
              (item, index) => (
                <article key={item.title}>
                  <span className="includedNumber">
                    {String(index + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>

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
              ),
            )}
          </div>

          <div className="freeNote">
            <span>＋</span>

            <p>
              SNS投稿、公式LINE配信、優先表示などの追加施策は、
              今後別途ご案内する場合があります。
            </p>
          </div>
        </div>
      </section>

      <section className="flowSection" id="flow">
        <div className="container">
          <SectionHeading
            label="HOW TO START"
            title="掲載までは"
            accent="簡単4ステップ"
            description="最初の相談から掲載開始まで、公式LINEでご案内します。"
          />

          <div className="stepGrid">
            {steps.map((step, index) => (
              <div
                className="stepItem"
                key={step.number}
              >
                <article>
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

          <div className="flowAction">
            <LineButton />

            <div>
              <strong>
                最初に送るメッセージ
              </strong>

              <p>
                「イベント掲載希望」と一言お送りいただければ、
                必要な情報をご案内します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faqSection">
        <div className="container faqLayout">
          <div className="faqIntro">
            <p>FAQ</p>

            <h2>
              よくある
              <span>ご質問</span>
            </h2>

            <div className="faqIllustration">
              <span>?</span>
            </div>

            <p className="faqIntroText">
              掲載できるイベントか分からない場合も、
              公式LINEからお気軽にご相談ください。
            </p>
          </div>

          <div className="faqList">
            {faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span className="faqNumber">
                    {String(index + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <strong>{faq.question}</strong>

                  <span className="faqToggle">
                    ＋
                  </span>
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
          src={IMAGES.event}
          alt=""
          className="finalBackground"
        />

        <div className="finalOverlay" />

        <div className="finalInner">
          <div>
            <p>EVENT LISTING SERVICE</p>

            <h2>
              <span>あなたのイベントを</span>
              <strong>
                もっと多くの人へ。
              </strong>
            </h2>

            <p className="finalDescription">
              掲載できる内容か分からない場合も、
              まずは公式LINEからお気軽にご相談ください。
            </p>

            <div className="finalTags">
              <span>基本掲載無料</span>
              <span>東京都内のイベント</span>
              <span>相談だけでもOK</span>
            </div>
          </div>

          <LineButton
            title="掲載について無料相談する"
            note="「イベント掲載希望」とお送りください"
            light
          />
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <div className="footerBrand">
            <Link href="/">
              東京イベントナビ
            </Link>

            <p>
              東京で開催されるイベントを、
              探している人へ分かりやすく届けます。
            </p>
          </div>

          <nav>
            <strong>EVENT</strong>

            <Link href="/">
              イベントを探す
            </Link>

            <a href="#categories">
              掲載できるイベント
            </a>

            <a href="#benefits">
              掲載するメリット
            </a>
          </nav>

          <nav>
            <strong>SUPPORT</strong>

            <a href="#flow">
              掲載までの流れ
            </a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
            >
              LINEで掲載相談
            </a>
          </nav>

          <div className="footerCta">
            <strong>
              イベント主催者の方へ
            </strong>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
            >
              無料で掲載相談する
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="footerBottom">
          © TOKYO EVENT NAVI
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
          background: #fff;
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
            rgba(23, 36, 59, 0.07);
          background:
            rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(18px);
        }

        .headerInner {
          width: min(
            1200px,
            calc(100% - 40px)
          );
          min-height: 70px;
          display: flex;
          justify-content:
            space-between;
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
          color: #f26419;
        }

        .header nav {
          display: flex;
          align-items: center;
          gap: 23px;
        }

        .header nav a {
          color: #344055;
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
        }

        .header nav .headerLine {
          padding: 12px 17px;
          border-radius: 10px;
          background: #08b84e;
          color: #fff;
        }

        .hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 8% 18%,
              rgba(255, 177, 95, 0.2),
              transparent 27%
            ),
            radial-gradient(
              circle at 91% 76%,
              rgba(255, 202, 143, 0.28),
              transparent 31%
            ),
            linear-gradient(
              135deg,
              #fff7e9 0%,
              #fffdf9 53%,
              #ffecd3 100%
            );
        }

        .heroNoise {
          position: absolute;
          inset: 0;
          opacity: 0.18;
          background-image:
            linear-gradient(
              rgba(242, 100, 25, 0.055)
                1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(242, 100, 25, 0.055)
                1px,
              transparent 1px
            );
          background-size: 55px 55px;
        }

        .heroCircle {
          position: absolute;
          border-radius: 50%;
        }

        .heroCircleOne {
          top: -160px;
          right: -110px;
          width: 430px;
          height: 430px;
          border:
            82px solid
            rgba(242, 100, 25, 0.06);
        }

        .heroCircleTwo {
          bottom: -175px;
          left: -130px;
          width: 370px;
          height: 370px;
          background:
            rgba(255, 193, 116, 0.14);
        }

        .heroDot {
          position: absolute;
          width: 13px;
          height: 13px;
          border-radius: 50%;
        }

        .heroDotOne {
          top: 155px;
          left: 49%;
          background: #f26419;
        }

        .heroDotTwo {
          top: 205px;
          left: 46%;
          background: #2d8058;
        }

        .heroDotThree {
          top: 118px;
          left: 52%;
          background: #f4b151;
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
            minmax(520px, 0.94fr)
            minmax(510px, 1.06fr);
          align-items: center;
          gap: 65px;
          margin: 0 auto;
          padding: 70px 0 84px;
        }

        .heroCopy {
          min-width: 0;
        }

        .heroTarget {
          width: fit-content;
          display: grid;
          gap: 2px;
          margin-bottom: 18px;
          padding: 9px 15px;
          border-radius: 999px;
          background: #17243b;
          color: #fff;
          font-size: 9px;
          font-weight: 900;
        }

        .heroTarget span {
          color: #ffb476;
          font-size: 6px;
          letter-spacing: 0.18em;
        }

        .heroEnglish {
          margin: 0 0 16px;
          color: #f26419;
          font-size: 9px;
          font-weight: 1000;
          letter-spacing: 0.21em;
        }

        .heroCopy h1 {
          display: grid;
          gap: 5px;
          margin: 0;
          font-size: clamp(
            48px,
            5.15vw,
            70px
          );
          line-height: 1.14;
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
          color: #17243b;
        }

        .heroTitleSecond {
          position: relative;
          z-index: 1;
          color: #f26419;
        }

        .heroTitleSecond::before {
          position: absolute;
          z-index: -1;
          right: -8px;
          bottom: 4px;
          left: -5px;
          height: 17px;
          border-radius: 999px;
          background:
            rgba(255, 190, 117, 0.47);
          content: "";
          transform: rotate(-1deg);
        }

        .heroCatch {
          margin: 25px 0 0;
          color: #24334a;
          font-size: 17px;
          line-height: 1.65;
          font-weight: 900;
        }

        .heroDescription {
          max-width: 570px;
          margin: 13px 0 0;
          color: #697284;
          font-size: 12px;
          line-height: 1.9;
          font-weight: 600;
        }

        .heroFeatureGrid {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 9px;
          margin-top: 22px;
        }

        .heroFeatureGrid article {
          display: grid;
          grid-template-columns:
            43px minmax(0, 1fr);
          align-items: center;
          gap: 11px;
          min-height: 72px;
          padding: 11px 13px;
          border:
            1px solid
            rgba(234, 190, 151, 0.68);
          border-radius: 13px;
          background:
            rgba(255, 255, 255, 0.86);
          box-shadow:
            0 8px 24px
            rgba(70, 47, 27, 0.055);
        }

        .heroFeatureIcon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #fff0df;
          color: #f26419;
          font-size: 14px;
          font-weight: 1000;
        }

        .heroFeatureGrid article > div {
          display: grid;
          gap: 2px;
        }

        .heroFeatureGrid small {
          color: #e96b27;
          font-size: 6px;
          font-weight: 1000;
          letter-spacing: 0.13em;
        }

        .heroFeatureGrid strong {
          color: #2b384e;
          font-size: 11px;
        }

        .heroFeatureGrid p {
          margin: 0;
          color: #8a8e97;
          font-size: 7px;
          line-height: 1.4;
        }

        .heroAction {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 20px;
        }

        .heroAction .lineButton {
          margin-top: 0;
        }

        .heroActionNote {
          display: grid;
          gap: 3px;
          max-width: 160px;
        }

        .heroActionNote strong {
          color: #554739;
          font-size: 9px;
        }

        .heroActionNote span {
          color: #928270;
          font-size: 7px;
          line-height: 1.5;
        }

        .lineButton {
          display: inline-grid;
          grid-template-columns:
            45px minmax(0, 1fr) 20px;
          align-items: center;
          gap: 12px;
          width: min(
            430px,
            100%
          );
          margin-top: 21px;
          padding: 13px 17px;
          border-radius: 14px;
          background:
            linear-gradient(
              135deg,
              #08b84e,
              #05a643
            );
          box-shadow:
            0 16px 36px
            rgba(8, 184, 78, 0.22);
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

        .lineLogo {
          width: 45px;
          height: 45px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #fff;
          color: #08a948;
          font-size: 8px;
          font-weight: 1000;
        }

        .lineButtonText {
          display: grid;
          gap: 3px;
        }

        .lineButtonText strong {
          font-size: 13px;
        }

        .lineButtonText small {
          color:
            rgba(255, 255, 255, 0.8);
          font-size: 8px;
        }

        .lineArrow {
          font-size: 18px;
          font-weight: 900;
        }

        .lineButtonLight {
          background: #fff;
          color: #17243b;
          box-shadow:
            0 17px 40px
            rgba(0, 0, 0, 0.19);
        }

        .lineButtonLight
          .lineButtonText small {
          color: #788091;
        }

        .heroVisual {
          position: relative;
          min-height: 535px;
        }

        .heroVisualLabel {
          position: absolute;
          z-index: 8;
          top: 0;
          left: 45px;
          padding: 8px 12px;
          border-radius: 999px;
          background: #fff;
          box-shadow:
            0 9px 24px
            rgba(31, 38, 49, 0.12);
          color: #f26419;
          font-size: 7px;
          font-weight: 1000;
          letter-spacing: 0.17em;
          transform: rotate(-4deg);
        }

        .heroPhoto {
          position: absolute;
          overflow: hidden;
          margin: 0;
          border: 7px solid #fff;
          border-radius: 22px;
          background: #ddd;
          box-shadow:
            0 24px 60px
            rgba(30, 35, 44, 0.18);
        }

        .heroPhoto img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .heroPhotoMain {
          top: 40px;
          right: 30px;
          width: 78%;
          height: 370px;
          transform: rotate(1.8deg);
        }

        .heroPhotoSubOne {
          z-index: 3;
          bottom: 7px;
          left: 0;
          width: 43%;
          height: 185px;
          transform: rotate(-4deg);
        }

        .heroPhotoSubTwo {
          z-index: 4;
          right: 0;
          bottom: -3px;
          width: 39%;
          height: 180px;
          transform: rotate(4deg);
        }

        .photoCaption {
          position: absolute;
          right: 18px;
          bottom: 18px;
          left: 18px;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 12px 14px;
          border:
            1px solid
            rgba(255, 255, 255, 0.22);
          border-radius: 13px;
          background:
            rgba(23, 36, 59, 0.78);
          backdrop-filter: blur(9px);
          color: #fff;
        }

        .photoCaption > span {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 10px;
          background: #f26419;
          font-size: 8px;
          font-weight: 1000;
        }

        .photoCaption > div {
          display: grid;
          gap: 2px;
        }

        .photoCaption small {
          color: #ffb47a;
          font-size: 7px;
        }

        .photoCaption strong {
          font-size: 10px;
        }

        .heroVisualCard {
          position: absolute;
          z-index: 7;
          top: 135px;
          left: -15px;
          display: grid;
          gap: 4px;
          padding: 13px 15px;
          border-radius: 13px;
          background: #fff;
          box-shadow:
            0 15px 35px
            rgba(31, 38, 49, 0.15);
          transform: rotate(-4deg);
        }

        .heroVisualCard span {
          color: #f26419;
          font-size: 7px;
          font-weight: 1000;
        }

        .heroVisualCard strong {
          color: #344055;
          font-size: 9px;
          line-height: 1.45;
        }

        .heroFree {
          position: absolute;
          z-index: 10;
          top: 325px;
          left: 54%;
          width: 122px;
          height: 122px;
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
          text-align: center;
          transform:
            translate(-50%, -50%)
            rotate(6deg);
        }

        .heroFree small {
          font-size: 7px;
          letter-spacing: 0.1em;
        }

        .heroFree strong {
          font-size: 29px;
          line-height: 1.05;
        }

        .heroFree span {
          font-size: 7px;
        }

        .heroBottom {
          position: relative;
          z-index: 4;
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          background: #17243b;
        }

        .heroBottom > div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          min-height: 72px;
          border-right:
            1px solid
            rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 10px;
          font-weight: 800;
        }

        .heroBottom > div:last-child {
          border-right: 0;
        }

        .heroBottom span {
          color: #f49a61;
          font-size: 8px;
          font-weight: 1000;
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

        .sectionHeading {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }

        .sectionEyebrow {
          margin: 0 0 12px;
          color: #f26419;
          font-size: 8px;
          font-weight: 1000;
          letter-spacing: 0.23em;
        }

        .sectionHeading h2 {
          display: grid;
          gap: 2px;
          margin: 0;
          color: #17243b;
          font-size: clamp(
            34px,
            4.7vw,
            52px
          );
          line-height: 1.3;
          letter-spacing: -0.05em;
        }

        .sectionHeading h2 span,
        .sectionHeading h2 strong {
          display: block;
        }

        .sectionHeading h2 strong {
          color: #f26419;
        }

        .sectionHeadingLine {
          width: 56px;
          height: 4px;
          margin: 18px auto 0;
          border-radius: 999px;
          background: #f26419;
        }

        .sectionLead {
          max-width: 690px;
          margin: 20px auto 0;
          color: #6a7383;
          font-size: 12px;
          line-height: 1.85;
        }

        .categorySection {
          background: #fff;
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
          border-radius: 18px;
          background: #fff;
          box-shadow:
            0 13px 35px
            rgba(45, 40, 34, 0.085);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .categoryCard:hover {
          transform: translateY(-7px);
          box-shadow:
            0 22px 48px
            rgba(45, 40, 34, 0.14);
        }

        .categoryImage {
          position: relative;
          height: 175px;
          overflow: hidden;
        }

        .categoryImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition:
            transform 0.4s ease;
        }

        .categoryCard:hover
          .categoryImage img {
          transform: scale(1.07);
        }

        .categoryOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              transparent 45%,
              rgba(13, 28, 48, 0.56)
            );
        }

        .categoryNumber {
          position: absolute;
          top: 13px;
          right: 13px;
          color:
            rgba(255, 255, 255, 0.8);
          font-size: 9px;
          font-weight: 1000;
        }

        .categoryIcon {
          position: absolute;
          bottom: 13px;
          left: 14px;
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border:
            4px solid
            rgba(255, 255, 255, 0.95);
          border-radius: 50%;
          background: #fff1df;
          box-shadow:
            0 9px 22px
            rgba(0, 0, 0, 0.18);
          font-size: 21px;
        }

        .categoryContent {
          min-height: 140px;
          padding: 19px;
        }

        .categoryContent h3 {
          margin: 0 0 9px;
          color: #2b384d;
          font-size: 15px;
        }

        .categoryContent p {
          margin: 0;
          color: #727a88;
          font-size: 10px;
          line-height: 1.75;
        }

        .categoryBottom {
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          gap: 30px;
          margin-top: 27px;
          padding: 23px 26px;
          border-radius: 17px;
          background:
            linear-gradient(
              135deg,
              #f26419,
              #ff963c
            );
          box-shadow:
            0 16px 38px
            rgba(242, 100, 25, 0.2);
          color: #fff;
        }

        .categoryBottom > div {
          display: grid;
          gap: 5px;
        }

        .categoryBottom small {
          color: #ffd9c1;
          font-size: 7px;
          font-weight: 1000;
          letter-spacing: 0.16em;
        }

        .categoryBottom strong {
          font-size: 15px;
          line-height: 1.5;
        }

        .categoryBottom a {
          display: flex;
          align-items: center;
          gap: 18px;
          flex: 0 0 auto;
          padding: 13px 17px;
          border-radius: 11px;
          background: #fff;
          color: #d9510c;
          text-decoration: none;
          font-size: 10px;
          font-weight: 900;
        }

        .categoryBottom a span {
          font-size: 17px;
        }

        .problemSection {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(
              180deg,
              #fff9f1,
              #f1faf4
            );
        }

        .problemBackgroundNumber {
          position: absolute;
          top: 15px;
          left: 50%;
          color:
            rgba(242, 100, 25, 0.04);
          font-size: 280px;
          line-height: 1;
          font-weight: 1000;
          transform: translateX(-50%);
        }

        .problemGrid {
          position: relative;
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 48px;
        }

        .problemCard {
          overflow: hidden;
          border-radius: 20px;
          background: #fff;
          box-shadow:
            0 15px 40px
            rgba(30, 39, 52, 0.09);
        }

        .problemCardOrange {
          border:
            1px solid
            rgba(238, 136, 73, 0.27);
        }

        .problemCardGreen {
          border:
            1px solid
            rgba(64, 148, 99, 0.25);
        }

        .problemPhoto {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .problemPhoto img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .problemPhoto::after {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              transparent 50%,
              rgba(18, 31, 48, 0.4)
            );
          content: "";
        }

        .problemPhoto > span {
          position: absolute;
          z-index: 2;
          right: 17px;
          bottom: 15px;
          color: #fff;
          font-size: 40px;
          line-height: 1;
          font-weight: 1000;
          opacity: 0.85;
        }

        .problemContent {
          padding: 26px;
        }

        .problemType {
          margin: 0;
          color: #f26419;
          font-size: 7px;
          font-weight: 1000;
          letter-spacing: 0.16em;
        }

        .problemCardGreen
          .problemType {
          color: #27865a;
        }

        .problemContent h3 {
          margin: 13px 0 20px;
          color: #26344b;
          font-size: 21px;
          line-height: 1.55;
        }

        .problemList {
          display: grid;
          gap: 9px;
        }

        .problemList p {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 0;
          padding: 10px 11px;
          border-radius: 10px;
          background: #faf8f4;
          color: #5f6878;
          font-size: 10px;
          line-height: 1.5;
          font-weight: 700;
        }

        .problemList span {
          width: 20px;
          height: 20px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #f26419;
          color: #fff;
          font-size: 8px;
        }

        .problemCardGreen
          .problemList span {
          background: #27865a;
        }

        .problemSolution {
          display: grid;
          grid-template-columns:
            55px minmax(0, 1fr)
            minmax(250px, 0.55fr);
          align-items: center;
          gap: 20px;
          margin-top: 26px;
          padding: 24px 27px;
          border-radius: 17px;
          background: #17243b;
          box-shadow:
            0 18px 40px
            rgba(23, 36, 59, 0.16);
          color: #fff;
        }

        .problemSolutionIcon {
          width: 53px;
          height: 53px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: #f26419;
          font-size: 24px;
          font-weight: 900;
        }

        .problemSolution > div:nth-child(2) {
          display: grid;
          gap: 5px;
        }

        .problemSolution small {
          color: #ffb67d;
          font-size: 7px;
          font-weight: 1000;
          letter-spacing: 0.15em;
        }

        .problemSolution strong {
          font-size: 14px;
          line-height: 1.55;
        }

        .problemSolution p {
          margin: 0;
          color: #c8cfda;
          font-size: 9px;
          line-height: 1.7;
        }

        .previewSection {
          background: #fff5e9;
        }

        .previewHeading {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            360px;
          align-items: end;
          gap: 50px;
          margin-bottom: 46px;
        }

        .previewHeading > div > p:first-child {
          margin: 0 0 12px;
          color: #f26419;
          font-size: 8px;
          font-weight: 1000;
          letter-spacing: 0.23em;
        }

        .previewHeading h2 {
          display: grid;
          gap: 2px;
          margin: 0;
          font-size: clamp(
            34px,
            4.7vw,
            52px
          );
          line-height: 1.3;
          letter-spacing: -0.05em;
        }

        .previewHeading h2 span,
        .previewHeading h2 strong {
          display: block;
        }

        .previewHeading h2 strong {
          color: #f26419;
        }

        .previewDescription {
          max-width: 680px;
          margin: 19px 0 0;
          color: #6a7383;
          font-size: 12px;
          line-height: 1.85;
        }

        .previewTagArea {
          display: flex;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 8px;
        }

        .previewTagArea span {
          padding: 9px 13px;
          border:
            1px solid
            rgba(226, 167, 115, 0.3);
          border-radius: 999px;
          background: #fff;
          box-shadow:
            0 7px 18px
            rgba(64, 43, 23, 0.06);
          color: #a94f1e;
          font-size: 8px;
          font-weight: 900;
        }

        .previewStage {
          position: relative;
          min-height: 630px;
          padding:
            20px 125px 50px 15px;
        }

        .previewGlow {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
        }

        .previewGlowOne {
          top: 50px;
          left: -80px;
          width: 250px;
          height: 250px;
          background:
            rgba(242, 100, 25, 0.09);
        }

        .previewGlowTwo {
          right: 50px;
          bottom: 40px;
          width: 260px;
          height: 260px;
          background:
            rgba(39, 134, 90, 0.08);
        }

        .desktopPreview {
          position: relative;
          z-index: 2;
          overflow: hidden;
          border: 9px solid #fff;
          border-radius: 25px;
          background: #f7f7f5;
          box-shadow:
            0 30px 75px
            rgba(39, 35, 32, 0.2);
          transform:
            perspective(1200px)
            rotateY(2deg)
            rotateZ(-0.6deg);
        }

        .browserTop {
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

        .browserTitle {
          display: flex;
          justify-content:
            space-between;
          align-items: flex-end;
          margin-bottom: 16px;
          padding-bottom: 11px;
          border-bottom:
            1px solid #dddcd7;
        }

        .browserTitle > div {
          display: grid;
          gap: 3px;
        }

        .browserTitle small {
          color: #f26419;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.18em;
        }

        .browserTitle strong {
          font-size: 18px;
        }

        .browserTitle > span {
          color: #c5c3bc;
          font-size: 8px;
        }

        .browserLayout {
          display: grid;
          grid-template-columns:
            minmax(0, 1.3fr)
            minmax(170px, 0.7fr);
          gap: 13px;
        }

        .sampleEvent {
          overflow: hidden;
          border-radius: 14px;
          background: #fff;
          box-shadow:
            0 8px 20px
            rgba(0, 0, 0, 0.08);
        }

        .sampleEvent > img {
          height: 205px;
          object-fit: cover;
        }

        .sampleEventBody {
          padding: 15px;
        }

        .sampleEventBody > span {
          display: inline-flex;
          padding: 5px 8px;
          border-radius: 999px;
          background: #fff0df;
          color: #a94d1c;
          font-size: 7px;
          font-weight: 900;
        }

        .sampleEventBody h3 {
          margin: 10px 0;
          font-size: 14px;
          line-height: 1.4;
        }

        .sampleEventBody dl {
          display: grid;
          gap: 7px;
          margin: 0;
        }

        .sampleEventBody dl > div {
          display: grid;
          grid-template-columns:
            52px minmax(0, 1fr);
          gap: 7px;
        }

        .sampleEventBody dt {
          color: #9a9da5;
          font-size: 6px;
        }

        .sampleEventBody dd {
          margin: 0;
          color: #626977;
          font-size: 7px;
          font-weight: 700;
        }

        .sampleDetail {
          display: block;
          margin-top: 12px;
          padding: 9px;
          border-radius: 7px;
          background: #17243b;
          color: #fff;
          text-align: center;
          font-size: 8px;
        }

        .sampleSide {
          display: grid;
          gap: 9px;
        }

        .sampleSide article {
          display: grid;
          align-content: center;
          gap: 5px;
          min-height: 113px;
          padding: 14px;
          border-radius: 12px;
          background: #fff;
          box-shadow:
            0 6px 16px
            rgba(0, 0, 0, 0.06);
        }

        .sampleSide article > span {
          color: #f26419;
          font-size: 7px;
          font-weight: 1000;
          letter-spacing: 0.1em;
        }

        .sampleSide strong {
          font-size: 10px;
        }

        .sampleSide small {
          color: #8a8e99;
          font-size: 7px;
        }

        .mobilePreview {
          position: absolute;
          z-index: 5;
          right: 9px;
          bottom: 0;
          width: 220px;
          padding: 11px;
          border: 8px solid #19263c;
          border-radius: 32px;
          background: #fff;
          box-shadow:
            0 25px 58px
            rgba(25, 38, 60, 0.3);
          transform: rotate(5deg);
        }

        .mobileSpeaker {
          width: 58px;
          height: 5px;
          margin: 0 auto 9px;
          border-radius: 999px;
          background: #19263c;
        }

        .mobilePage {
          overflow: hidden;
          border-radius: 17px;
          background: #f6f6f3;
        }

        .mobilePage img {
          height: 160px;
          object-fit: cover;
        }

        .mobilePage > span {
          display: inline-flex;
          margin: 12px 12px 7px;
          padding: 5px 8px;
          border-radius: 999px;
          background: #fff0df;
          color: #a94d1c;
          font-size: 6px;
          font-weight: 900;
        }

        .mobilePage h3 {
          margin: 0;
          padding: 0 12px;
          font-size: 13px;
          line-height: 1.4;
        }

        .mobilePage p {
          margin: 8px 12px;
          color: #777;
          font-size: 7px;
        }

        .mobilePage > strong {
          display: block;
          margin: 11px 12px 14px;
          padding: 8px;
          border-radius: 6px;
          background: #17243b;
          color: #fff;
          text-align: center;
          font-size: 7px;
        }

        .previewFloating {
          position: absolute;
          z-index: 7;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 13px;
          border-radius: 11px;
          background: #fff;
          box-shadow:
            0 15px 34px
            rgba(32, 39, 54, 0.16);
          color: #344055;
          font-size: 9px;
          font-weight: 900;
        }

        .previewFloating span {
          color: #f26419;
          font-size: 7px;
        }

        .previewFloatingOne {
          top: 66px;
          left: -15px;
          transform: rotate(-5deg);
        }

        .previewFloatingTwo {
          right: 0;
          bottom: 175px;
          transform: rotate(4deg);
        }

        .previewFreeBadge {
          position: absolute;
          z-index: 8;
          top: -18px;
          right: 76px;
          width: 116px;
          height: 116px;
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
          text-align: center;
          transform: rotate(7deg);
        }

        .previewFreeBadge > span {
          font-size: 7px;
        }

        .previewFreeBadge strong {
          font-size: 26px;
          line-height: 1.05;
        }

        .previewFreeBadge small {
          font-size: 7px;
        }

        .previewNotice {
          margin: 18px 0 0;
          color: #92715a;
          text-align: center;
          font-size: 9px;
          line-height: 1.7;
        }

        .benefitSection {
          background: #f1f8f3;
        }

        .benefitGrid {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-top: 48px;
        }

        .benefitCard {
          position: relative;
          min-height: 285px;
          overflow: hidden;
          padding: 24px;
          border:
            1px solid
            rgba(39, 134, 90, 0.17);
          border-radius: 19px;
          background: #fff;
          box-shadow:
            0 12px 32px
            rgba(27, 75, 47, 0.06);
          transition:
            transform 0.25s ease;
        }

        .benefitCard:hover {
          transform: translateY(-6px);
        }

        .benefitTop {
          display: flex;
          justify-content:
            space-between;
          align-items: center;
        }

        .benefitNumber {
          color:
            rgba(39, 134, 90, 0.24);
          font-size: 26px;
          font-weight: 1000;
        }

        .benefitIcon {
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          border-radius: 17px;
          background: #e1f4e7;
          font-size: 25px;
        }

        .benefitCard h3 {
          margin: 34px 0 12px;
          color: #24543b;
          font-size: 17px;
          line-height: 1.5;
        }

        .benefitCard p {
          margin: 0;
          color: #68766d;
          font-size: 10px;
          line-height: 1.8;
        }

        .benefitLine {
          position: absolute;
          right: 24px;
          bottom: 22px;
          left: 24px;
          height: 3px;
          border-radius: 999px;
          background:
            linear-gradient(
              90deg,
              #27865a 0 28%,
              #e1eee5 28%
            );
        }

        .benefitBanner {
          display: grid;
          grid-template-columns:
            minmax(340px, 0.85fr)
            minmax(0, 1.15fr);
          overflow: hidden;
          margin-top: 26px;
          border-radius: 21px;
          background: #17243b;
          box-shadow:
            0 19px 45px
            rgba(23, 36, 59, 0.14);
        }

        .benefitBannerImage {
          min-height: 315px;
          overflow: hidden;
        }

        .benefitBannerImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .benefitBannerContent {
          display: grid;
          align-content: center;
          padding: 43px;
          color: #fff;
        }

        .benefitBannerContent small {
          color: #ffad70;
          font-size: 7px;
          font-weight: 1000;
          letter-spacing: 0.19em;
        }

        .benefitBannerContent h3 {
          margin: 13px 0 15px;
          font-size: 27px;
          line-height: 1.5;
        }

        .benefitBannerContent p {
          margin: 0;
          color: #cbd1db;
          font-size: 10px;
          line-height: 1.8;
        }

        .freeSection {
          position: relative;
          overflow: hidden;
          background: #fff;
        }

        .freeShape {
          position: absolute;
          border-radius: 50%;
        }

        .freeShapeOne {
          top: -150px;
          left: -110px;
          width: 340px;
          height: 340px;
          background:
            rgba(39, 134, 90, 0.055);
        }

        .freeShapeTwo {
          right: -120px;
          bottom: -160px;
          width: 370px;
          height: 370px;
          border:
            70px solid
            rgba(242, 100, 25, 0.045);
        }

        .freeHeading {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 42px;
        }

        .freeStamp {
          width: 140px;
          height: 140px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          align-content: center;
          gap: 2px;
          border: 8px solid #e9f6ed;
          border-radius: 50%;
          background:
            linear-gradient(
              145deg,
              #27865a,
              #176b42
            );
          box-shadow:
            0 18px 40px
            rgba(39, 134, 90, 0.2);
          color: #fff;
          text-align: center;
          transform: rotate(-7deg);
        }

        .freeStamp small {
          font-size: 8px;
          letter-spacing: 0.14em;
        }

        .freeStamp strong {
          font-size: 30px;
          line-height: 1.05;
        }

        .freeStamp span {
          font-size: 8px;
        }

        .freeHeading > div:last-child > p {
          margin: 0 0 10px;
          color: #27865a;
          font-size: 8px;
          font-weight: 1000;
          letter-spacing: 0.22em;
        }

        .freeHeading h2 {
          margin: 0;
          font-size: clamp(
            34px,
            4.7vw,
            52px
          );
          line-height: 1.3;
          letter-spacing: -0.05em;
        }

        .freeHeading h2 span {
          display: block;
          color: #27865a;
        }

        .freeHeadingLead {
          display: block;
          margin-top: 13px;
          color: #6b756e;
          font-size: 11px;
          line-height: 1.7;
          font-weight: 600;
        }

        .includedGrid {
          position: relative;
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 45px;
        }

        .includedGrid article {
          display: grid;
          grid-template-columns:
            31px 55px
            minmax(0, 1fr) 27px;
          align-items: center;
          gap: 13px;
          min-height: 115px;
          padding: 18px;
          border:
            1px solid
            rgba(39, 134, 90, 0.18);
          border-radius: 15px;
          background: #f5faf6;
        }

        .includedNumber {
          color:
            rgba(39, 134, 90, 0.35);
          font-size: 10px;
          font-weight: 1000;
        }

        .includedIcon {
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: #e0f3e6;
          font-size: 24px;
        }

        .includedGrid h3 {
          margin: 0 0 5px;
          color: #24543b;
          font-size: 13px;
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
          font-size: 10px;
          font-weight: 900;
        }

        .freeNote {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 19px;
          padding: 15px 17px;
          border-radius: 12px;
          background: #edf7f0;
        }

        .freeNote span {
          width: 29px;
          height: 29px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 9px;
          background: #27865a;
          color: #fff;
          font-size: 16px;
          font-weight: 900;
        }

        .freeNote p {
          margin: 0;
          color: #607067;
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

        .stepItem {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .stepItem article {
          flex: 1;
          min-height: 285px;
          padding: 24px 20px;
          border:
            1px solid
            rgba(237, 168, 116, 0.34);
          border-radius: 18px;
          background: #fff;
          box-shadow:
            0 10px 27px
            rgba(61, 46, 31, 0.055);
          text-align: center;
        }

        .stepNumber {
          color: #f26419;
          font-size: 8px;
          font-weight: 1000;
          letter-spacing: 0.14em;
        }

        .stepIcon {
          width: 76px;
          height: 76px;
          display: grid;
          place-items: center;
          margin: 24px auto 18px;
          border-radius: 23px;
          background: #fff0df;
          font-size: 33px;
          transform: rotate(-4deg);
        }

        .stepItem h3 {
          margin: 0 0 10px;
          color: #29364c;
          font-size: 16px;
        }

        .stepItem p {
          margin: 0;
          color: #6d7585;
          font-size: 10px;
          line-height: 1.75;
        }

        .stepArrow {
          width: 40px;
          flex: 0 0 auto;
          color: #e7a16b;
          text-align: center;
          font-size: 25px;
          font-weight: 900;
        }

        .flowAction {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          margin-top: 37px;
        }

        .flowAction .lineButton {
          margin-top: 0;
        }

        .flowAction > div:last-child {
          display: grid;
          gap: 4px;
          max-width: 260px;
        }

        .flowAction > div:last-child
          strong {
          color: #54493f;
          font-size: 10px;
        }

        .flowAction > div:last-child p {
          margin: 0;
          color: #8a7c70;
          font-size: 8px;
          line-height: 1.6;
        }

        .faqSection {
          background: #fff;
        }

        .faqLayout {
          display: grid;
          grid-template-columns:
            280px minmax(0, 1fr);
          gap: 66px;
        }

        .faqIntro > p:first-child {
          margin: 0 0 11px;
          color: #f26419;
          font-size: 8px;
          font-weight: 1000;
          letter-spacing: 0.22em;
        }

        .faqIntro h2 {
          display: grid;
          margin: 0;
          font-size: 47px;
          line-height: 1.28;
          letter-spacing: -0.05em;
        }

        .faqIntro h2 span {
          color: #f26419;
        }

        .faqIllustration {
          width: 135px;
          height: 135px;
          display: grid;
          place-items: center;
          margin-top: 28px;
          border-radius:
            43% 57% 50% 50%;
          background: #fff0df;
          transform: rotate(-5deg);
        }

        .faqIllustration span {
          color: #f26419;
          font-size: 66px;
          line-height: 1;
          font-weight: 1000;
          transform: rotate(5deg);
        }

        .faqIntroText {
          margin: 21px 0 0;
          color: #7b6d62;
          font-size: 9px;
          line-height: 1.75;
        }

        .faqList {
          display: grid;
          gap: 10px;
        }

        .faqList details {
          overflow: hidden;
          border:
            1px solid
            rgba(221, 217, 210, 0.9);
          border-radius: 14px;
          background: #fafaf8;
          transition:
            background 0.2s ease;
        }

        .faqList details[open] {
          background: #fff8ef;
        }

        .faqList summary {
          display: grid;
          grid-template-columns:
            42px minmax(0, 1fr)
            29px;
          align-items: center;
          gap: 13px;
          padding: 17px;
          cursor: pointer;
          list-style: none;
        }

        .faqList summary::-webkit-details-marker {
          display: none;
        }

        .faqNumber {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #17243b;
          color: #fff;
          font-size: 9px;
          font-weight: 1000;
        }

        .faqList summary strong {
          color: #344055;
          font-size: 11px;
          line-height: 1.55;
        }

        .faqToggle {
          color: #f26419;
          text-align: center;
          font-size: 20px;
          font-weight: 900;
        }

        .faqAnswer {
          display: grid;
          grid-template-columns:
            39px minmax(0, 1fr);
          gap: 13px;
          padding: 0 17px 17px;
        }

        .faqAnswer > span {
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #f26419;
          color: #fff;
          font-size: 11px;
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
          min-height: 520px;
          display: grid;
          align-items: center;
          overflow: hidden;
          background: #17243b;
        }

        .finalBackground {
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
              100deg,
              rgba(17, 32, 52, 0.94)
                0%,
              rgba(26, 42, 65, 0.85)
                47%,
              rgba(235, 84, 13, 0.82)
                100%
            );
        }

        .finalInner {
          position: relative;
          z-index: 2;
          width: min(
            1080px,
            calc(100% - 40px)
          );
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            440px;
          align-items: center;
          gap: 60px;
          margin: 0 auto;
          padding: 75px 0;
          color: #fff;
        }

        .finalInner > div:first-child
          > p:first-child {
          margin: 0 0 14px;
          color: #ffbd8b;
          font-size: 8px;
          font-weight: 1000;
          letter-spacing: 0.22em;
        }

        .finalInner h2 {
          display: grid;
          gap: 2px;
          margin: 0;
          font-size: clamp(
            39px,
            5vw,
            59px
          );
          line-height: 1.28;
          letter-spacing: -0.055em;
        }

        .finalInner h2 span,
        .finalInner h2 strong {
          display: block;
        }

        .finalInner h2 strong {
          color: #fff0a3;
        }

        .finalDescription {
          max-width: 560px;
          margin: 21px 0 0;
          color: #e1e5eb;
          font-size: 11px;
          line-height: 1.8;
        }

        .finalTags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 21px;
        }

        .finalTags span {
          padding: 8px 12px;
          border:
            1px solid
            rgba(255, 255, 255, 0.24);
          border-radius: 999px;
          background:
            rgba(255, 255, 255, 0.09);
          font-size: 8px;
          font-weight: 900;
        }

        .finalInner .lineButton {
          margin-top: 0;
        }

        .footer {
          background: #101c2e;
          color: #bec6d2;
        }

        .footerInner {
          width: min(
            1100px,
            calc(100% - 40px)
          );
          display: grid;
          grid-template-columns:
            1.25fr 0.7fr 0.7fr 1fr;
          gap: 50px;
          margin: 0 auto;
          padding: 48px 0;
        }

        .footerBrand > a {
          color: #fff;
          text-decoration: none;
          font-size: 17px;
          font-weight: 900;
        }

        .footerBrand p {
          max-width: 290px;
          margin: 13px 0 0;
          color: #9da8b7;
          font-size: 9px;
          line-height: 1.8;
        }

        .footer nav {
          display: grid;
          align-content: start;
          gap: 10px;
        }

        .footer nav strong,
        .footerCta > strong {
          margin-bottom: 4px;
          color: #f09b65;
          font-size: 7px;
          letter-spacing: 0.16em;
        }

        .footer nav a {
          color: #c6ced9;
          text-decoration: none;
          font-size: 9px;
        }

        .footerCta {
          display: grid;
          align-content: start;
          gap: 11px;
        }

        .footerCta a {
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          padding: 13px 14px;
          border-radius: 10px;
          background: #08b84e;
          color: #fff;
          text-decoration: none;
          font-size: 9px;
          font-weight: 900;
        }

        .footerCta a span {
          font-size: 16px;
        }

        .footerBottom {
          padding: 17px;
          border-top:
            1px solid
            rgba(255, 255, 255, 0.08);
          color: #728092;
          text-align: center;
          font-size: 7px;
          letter-spacing: 0.14em;
        }

        .floatingLine {
          position: fixed;
          z-index: 200;
          right: 17px;
          bottom: 17px;
          width: 72px;
          height: 72px;
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
              720px,
              100%
            );
            margin: 0 auto;
          }

          .categoryGrid,
          .benefitGrid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .previewHeading {
            grid-template-columns: 1fr;
          }

          .previewTagArea {
            justify-content: flex-start;
          }

          .includedGrid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .finalInner {
            grid-template-columns: 1fr;
          }

          .footerInner {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .headerInner,
          .container,
          .heroInner,
          .footerInner,
          .finalInner {
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
            gap: 50px;
            padding: 52px 0 70px;
          }

          .heroCopy h1 {
            font-size: 41px;
          }

          .heroTitleFirst,
          .heroTitleSecond {
            width: auto;
            white-space: normal;
          }

          .heroFeatureGrid {
            grid-template-columns: 1fr;
          }

          .heroAction {
            display: grid;
          }

          .heroActionNote {
            max-width: none;
          }

          .heroVisual {
            min-height: 480px;
          }

          .heroPhotoMain {
            top: 30px;
            right: 0;
            width: 91%;
            height: 320px;
          }

          .heroPhotoSubOne {
            width: 53%;
            height: 155px;
          }

          .heroPhotoSubTwo {
            width: 47%;
            height: 150px;
          }

          .heroVisualCard {
            display: none;
          }

          .heroFree {
            top: 330px;
            width: 96px;
            height: 96px;
            border-width: 6px;
          }

          .heroFree strong {
            font-size: 22px;
          }

          .heroBottom {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .heroBottom > div {
            min-height: 58px;
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

          .sectionHeading h2,
          .previewHeading h2 {
            font-size: 31px;
          }

          .categoryGrid,
          .problemGrid,
          .benefitGrid,
          .includedGrid {
            grid-template-columns: 1fr;
          }

          .categoryImage {
            height: 225px;
          }

          .categoryBottom {
            display: grid;
          }

          .categoryBottom a {
            justify-content:
              space-between;
          }

          .problemSolution {
            grid-template-columns:
              50px minmax(0, 1fr);
          }

          .problemSolution > p {
            grid-column: 1 / -1;
          }

          .previewStage {
            min-height: 770px;
            padding:
              10px 0 215px;
          }

          .desktopPreview {
            border-width: 6px;
            transform: none;
          }

          .browserPage {
            padding: 14px;
          }

          .browserLayout {
            grid-template-columns: 1fr;
          }

          .sampleSide {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );
          }

          .sampleSide article {
            min-height: 92px;
            padding: 10px;
          }

          .mobilePreview {
            right: 50%;
            width: 195px;
            transform:
              translateX(50%)
              rotate(3deg);
          }

          .previewFloating,
          .previewFreeBadge {
            display: none;
          }

          .benefitBanner {
            grid-template-columns: 1fr;
          }

          .benefitBannerImage {
            min-height: 240px;
          }

          .benefitBannerContent {
            padding: 29px;
          }

          .freeHeading {
            display: grid;
            justify-items: center;
            text-align: center;
          }

          .includedGrid article {
            grid-template-columns:
              27px 51px
              minmax(0, 1fr)
              26px;
          }

          .stepGrid {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .stepItem {
            display: block;
          }

          .stepArrow {
            display: none;
          }

          .flowAction {
            display: grid;
          }

          .faqLayout {
            grid-template-columns: 1fr;
          }

          .faqIntro {
            text-align: center;
          }

          .faqIntro h2 {
            font-size: 38px;
          }

          .faqIllustration {
            display: none;
          }

          .finalInner {
            padding: 65px 0;
          }

          .finalInner h2 {
            font-size: 38px;
          }

          .footerInner {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }

          .footerBrand p {
            margin-right: auto;
            margin-left: auto;
          }

          .footer nav {
            justify-items: center;
          }

          .floatingLine {
            right: 11px;
            bottom: 11px;
            width: 64px;
            height: 64px;
          }
        }

        @media (max-width: 430px) {
          .heroCopy h1 {
            font-size: 36px;
          }

          .heroCatch {
            font-size: 15px;
          }

          .heroDescription {
            font-size: 11px;
          }

          .lineButton {
            grid-template-columns:
              41px minmax(0, 1fr)
              18px;
            gap: 9px;
            padding: 12px 13px;
          }

          .lineLogo {
            width: 41px;
            height: 41px;
          }

          .lineButtonText strong {
            font-size: 11px;
          }

          .heroBottom > div {
            font-size: 8px;
          }

          .sectionHeading h2,
          .previewHeading h2 {
            font-size: 28px;
          }

          .sampleSide {
            grid-template-columns: 1fr;
          }

          .includedGrid article {
            grid-template-columns:
              25px 48px
              minmax(0, 1fr);
          }

          .includedCheck {
            display: none;
          }

          .stepGrid {
            grid-template-columns: 1fr;
          }

          .finalInner h2 {
            font-size: 33px;
          }
        }
      `}</style>
    </main>
  );
}
