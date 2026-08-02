import Link from "next/link";

export const metadata = {
  title: "イベント掲載について｜東京イベントナビ",
  description:
    "あなたのイベントをもっと多くの人へ。東京イベントナビでは、東京都内で開催されるイベントの基本掲載を無料で受け付けています。",
};

const LINE_URL = "https://lin.ee/P179zyp";

const IMAGES = {
  main:
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1800&q=90",

  boardGame:
    "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1400&q=90",

  seminar:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=90",

  cafe:
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=90",

  sports:
    "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1400&q=90",

  workshop:
    "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1400&q=90",

  business:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1500&q=90",

  festival:
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=90",
};

const listingFeatures = [
  {
    number: "01",
    icon: "▣",
    title: "イベント専用ページ",
    description:
      "フライヤー、日時、会場、概要、申込先を一つのページにまとめます。",
  },
  {
    number: "02",
    icon: "17",
    title: "カレンダー掲載",
    description:
      "開催日からイベントを探している方へ情報を届けられます。",
  },
  {
    number: "03",
    icon: "▦",
    title: "カテゴリー掲載",
    description:
      "興味のあるジャンルからイベントを探せるようにします。",
  },
  {
    number: "04",
    icon: "↗",
    title: "申込リンク設置",
    description:
      "公式LINEや申込フォームへ直接移動できるボタンを設置します。",
  },
];

const categories = [
  {
    icon: "🍻",
    title: "飲み会・交流会",
    description:
      "友達づくり、恋活、社会人交流、異業種交流など。",
    image: IMAGES.main,
  },
  {
    icon: "☕",
    title: "カフェ会・ランチ会",
    description:
      "少人数で会話や食事を楽しむカジュアルなイベント。",
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
      "経営者交流、異業種交流、名刺交換、マッチングなど。",
    image: IMAGES.business,
  },
  {
    icon: "✨",
    title: "その他のイベント",
    description:
      "ライブ、マルシェ、上映会などもご相談いただけます。",
    image: IMAGES.festival,
  },
];

const benefits = [
  {
    number: "01",
    title: "新しい参加者へ届けられる",
    description:
      "普段のSNSや知人への告知だけでは接点のなかった方にも、イベントを知ってもらえる入口を増やします。",
  },
  {
    number: "02",
    title: "複数の方法で見つけてもらえる",
    description:
      "人気、新着、今週、カレンダー、カテゴリーなど、さまざまな探し方から発見してもらえます。",
  },
  {
    number: "03",
    title: "初参加者の安心感を高める",
    description:
      "日時や会場、参加条件、主催者などの情報を整理し、初めての方にも分かりやすく伝えます。",
  },
  {
    number: "04",
    title: "申込みまで迷わせない",
    description:
      "イベントの内容を確認したあと、そのままLINEやフォームへ進める申込導線を作ります。",
  },
];

const problems = [
  {
    label: "告知・認知のお悩み",
    title: "良いイベントなのに、まだ知られていない",
    items: [
      "毎回、知人への声かけに頼っている",
      "SNSだけでは新しい人へ届かない",
      "初開催で申込みが入るか不安",
    ],
    image: IMAGES.business,
    className: "orangeProblem",
  },
  {
    label: "運営・準備のお悩み",
    title: "告知に追われて、準備に集中できない",
    items: [
      "開催直前まで参加人数が読めない",
      "日時や会場の情報が伝わりにくい",
      "イベントページを作る時間がない",
    ],
    image: IMAGES.seminar,
    className: "greenProblem",
  },
];

const includedItems = [
  {
    icon: "🖼️",
    title: "フライヤー掲載",
    description: "イベント画像を大きく見やすく掲載します。",
  },
  {
    icon: "📄",
    title: "専用ページ作成",
    description: "イベントごとの詳細ページを作成します。",
  },
  {
    icon: "📅",
    title: "日時・カレンダー",
    description: "開催日と時間をカレンダーへ反映します。",
  },
  {
    icon: "📍",
    title: "会場・住所掲載",
    description: "会場名と住所を分かりやすく表示します。",
  },
  {
    icon: "🗂️",
    title: "カテゴリー掲載",
    description: "ジャンル別の検索結果へ反映します。",
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
    title: "LINEで相談",
    description:
      "公式LINEへ「イベント掲載希望」とお送りください。",
  },
  {
    number: "02",
    title: "イベント情報を送付",
    description:
      "フライヤー、日時、会場、概要、申込先をお送りします。",
  },
  {
    number: "03",
    title: "掲載内容を確認",
    description:
      "作成したイベントページの内容をご確認いただきます。",
  },
  {
    number: "04",
    title: "掲載スタート",
    description:
      "イベント一覧、カレンダー、カテゴリーへ反映します。",
  },
];

const faqs = [
  {
    question: "掲載料金はかかりますか？",
    answer:
      "現在、基本掲載は無料です。フライヤー、日時、会場、概要、申込先などを掲載します。",
  },
  {
    question: "どのようなイベントを掲載できますか？",
    answer:
      "東京都内で開催される飲み会、交流会、趣味イベント、スポーツ、セミナー、勉強会などが対象です。",
  },
  {
    question: "情報がすべて揃っていなくても相談できますか？",
    answer:
      "はい。内容が完全に決まっていない段階でもご相談いただけます。必要な情報をご案内します。",
  },
  {
    question: "人気イベント欄へ必ず掲載されますか？",
    answer:
      "人気イベント欄への掲載は保証していません。開催時期や掲載内容により、表示される場所は異なります。",
  },
  {
    question: "掲載後に日時や会場を変更できますか？",
    answer:
      "変更可能です。変更内容が決まり次第、公式LINEからご連絡ください。",
  },
];

function LineButton({
  title = "基本掲載について無料相談する",
  note = "公式LINEからお気軽にご連絡ください",
  white = false,
}: {
  title?: string;
  note?: string;
  white?: boolean;
}) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noreferrer"
      className={white ? "lineButton whiteLineButton" : "lineButton"}
    >
      <span className="lineIcon">LINE</span>

      <span className="lineCopy">
        <strong>{title}</strong>
        <small>{note}</small>
      </span>

      <span className="lineArrow">→</span>
    </a>
  );
}

function SectionHeading({
  english,
  title,
  accent,
  description,
}: {
  english: string;
  title: string;
  accent: string;
  description?: string;
}) {
  return (
    <div className="sectionHeading">
      <p>{english}</p>

      <h2>
        <span>{title}</span>
        <strong>{accent}</strong>
      </h2>

      <div className="headingLine" />

      {description && <div className="sectionDescription">{description}</div>}
    </div>
  );
}

function ListingPreview() {
  return (
    <div className="listingPreview">
      <div className="previewDesktop">
        <div className="browserHeader">
          <div className="browserDots">
            <i />
            <i />
            <i />
          </div>

          <span>tokyo-event-navi.jp</span>
        </div>

        <div className="previewPage">
          <div className="previewPageHeading">
            <div>
              <small>TOKYO EVENT NAVI</small>
              <h3>人気イベント</h3>
            </div>

            <span>EVENT</span>
          </div>

          <div className="previewColumns">
            <article className="previewEventCard">
              <img
                src={IMAGES.main}
                alt="東京交流イベントの掲載例"
              />

              <div className="previewEventContent">
                <span className="previewCategory">
                  飲み会・交流会
                </span>

                <h4>
                  20〜30代限定
                  <br />
                  東京交流イベント
                </h4>

                <div className="previewEventInfo">
                  <p>
                    <span>開催日</span>
                    2026年8月22日（土）
                  </p>

                  <p>
                    <span>時間</span>
                    18:00〜20:00
                  </p>

                  <p>
                    <span>会場</span>
                    新宿イベントスペース
                  </p>
                </div>

                <strong>詳細を見る</strong>
              </div>
            </article>

            <div className="previewMenus">
              <article>
                <small>NEW</small>
                <h4>新着イベント</h4>
                <p>新しく掲載されたイベントから探せます。</p>
              </article>

              <article>
                <small>7 DAYS</small>
                <h4>今週のイベント</h4>
                <p>近日開催されるイベントから探せます。</p>
              </article>

              <article>
                <small>SEARCH</small>
                <h4>カテゴリー検索</h4>
                <p>興味のあるジャンルから探せます。</p>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="previewPhone">
        <div className="phoneSpeaker" />

        <div className="phoneScreen">
          <img src={IMAGES.main} alt="" />

          <div>
            <span>飲み会・交流会</span>
            <h4>東京交流イベント</h4>
            <p>8月22日（土）18:00〜</p>
            <strong>詳細を見る</strong>
          </div>
        </div>
      </div>

      <div className="freeBadge">
        <span>基本掲載</span>
        <strong>無料</strong>
      </div>

      <div className="calendarBadge">
        <span>01</span>
        カレンダー掲載
      </div>

      <div className="categoryBadge">
        <span>02</span>
        カテゴリー検索
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
            <span>東京</span>イベントナビ
          </Link>

          <nav>
            <Link href="/">イベントを探す</Link>
            <a href="#categories">掲載できるイベント</a>
            <a href="#benefits">掲載するメリット</a>
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
            <div className="heroLabel">
              東京でイベントを主催している方へ
            </div>

            <p className="heroEnglish">
              EVENT LISTING SERVICE
            </p>

            <h1>
              <span>あなたのイベントを</span>
              <strong>もっと多くの人へ。</strong>
            </h1>

            <p className="heroMessage">
              イベントの魅力を、
              <br />
              探している人へ届けます。
            </p>

            <p className="heroDescription">
              東京イベントナビでは、東京都内で開催される
              飲み会・交流会・趣味イベント・セミナーなどの
              イベント掲載を受け付けています。
            </p>

            <div className="featureGrid">
              {listingFeatures.map((feature) => (
                <article key={feature.number}>
                  <span className="featureIcon">
                    {feature.icon}
                  </span>

                  <div>
                    <small>{feature.number}</small>
                    <h2>{feature.title}</h2>
                    <p>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="heroAction">
              <LineButton />

              <p>
                掲載できる内容か分からない場合も、
                <br />
                相談だけで問題ありません。
              </p>
            </div>
          </div>

          <div className="heroVisual">
            <figure className="heroMainImage">
              <img
                src={IMAGES.main}
                alt="東京の交流イベント"
              />

              <figcaption>
                <small>交流イベント</small>
                <strong>
                  新しい参加者との
                  <br />
                  出会いにつながる
                </strong>
              </figcaption>
            </figure>

            <figure className="heroSubImage heroBoardGame">
              <img
                src={IMAGES.boardGame}
                alt="ボードゲームイベント"
              />
            </figure>

            <figure className="heroSubImage heroSeminar">
              <img
                src={IMAGES.seminar}
                alt="セミナーイベント"
              />
            </figure>

            <div className="heroFreeBadge">
              <span>基本掲載</span>
              <strong>無料</strong>
            </div>
          </div>
        </div>

        <div className="heroBottom">
          <div>
            <span>01</span>
            基本掲載無料
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
        className="categorySection section"
        id="categories"
      >
        <div className="container">
          <SectionHeading
            english="EVENT CATEGORIES"
            title="こんなイベントを"
            accent="掲載できます"
            description="東京で開催される、さまざまなジャンルのイベントに対応しています。"
          />

          <div className="categoryGrid">
            {categories.map((category, index) => (
              <article
                className="categoryCard"
                key={category.title}
              >
                <div className="categoryImage">
                  <img
                    src={category.image}
                    alt={category.title}
                  />

                  <span className="categoryIndex">
                    {String(index + 1).padStart(2, "0")}
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
            ))}
          </div>

          <div className="categoryCta">
            <div>
              <small>その他のジャンルも相談可能</small>
              <strong>
                掲載できるか分からないイベントも、
                まずはお気軽にご相談ください。
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

      <section className="problemSection section">
        <div className="container">
          <SectionHeading
            english="ORGANIZER PROBLEMS"
            title="イベントの告知・運営で"
            accent="こんなお悩みありませんか？"
          />

          <div className="problemGrid">
            {problems.map((problem, index) => (
              <article
                className={`problemCard ${problem.className}`}
                key={problem.title}
              >
                <div className="problemImage">
                  <img
                    src={problem.image}
                    alt={problem.label}
                  />

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="problemContent">
                  <small>{problem.label}</small>
                  <h3>{problem.title}</h3>

                  <div className="problemItems">
                    {problem.items.map((item) => (
                      <p key={item}>
                        <span>✓</span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="solutionBox">
            <span className="solutionIcon">↗</span>

            <div>
              <small>TOKYO EVENT NAVI</small>

              <strong>
                イベントの魅力はある。
                足りないのは、見つけてもらう入口かもしれません。
              </strong>
            </div>

            <p>
              東京イベントナビが、情報整理から掲載までサポートします。
            </p>
          </div>
        </div>
      </section>

      <section className="previewSection section">
        <div className="container">
          <SectionHeading
            english="LISTING IMAGE"
            title="掲載後は"
            accent="このように表示されます"
            description="イベントの内容を読みやすく整理し、申込みまで迷わないページを作成します。"
          />

          <ListingPreview />

          <p className="previewNotice">
            ※人気イベント欄への掲載は保証していません。
            掲載内容や開催時期により、表示される場所は異なります。
          </p>
        </div>
      </section>

      <section
        className="benefitSection section"
        id="benefits"
      >
        <div className="container">
          <SectionHeading
            english="LISTING BENEFITS"
            title="東京イベントナビに"
            accent="掲載するメリット"
            description="イベントの認知・信頼・申込みにつながる入口を増やします。"
          />

          <div className="benefitGrid">
            {benefits.map((benefit) => (
              <article
                className="benefitCard"
                key={benefit.number}
              >
                <span className="benefitNumber">
                  {benefit.number}
                </span>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>

                <div className="benefitBar" />
              </article>
            ))}
          </div>

          <div className="connectionBanner">
            <img
              src={IMAGES.main}
              alt="イベント参加者"
            />

            <div>
              <small>CREATE NEW CONNECTIONS</small>

              <h3>
                あなたのイベントが、
                <br />
                誰かの新しい出会いにつながる。
              </h3>

              <p>
                参加者と主催者の新しいつながりが生まれる
                入口を目指しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="freeSection section">
        <div className="container">
          <div className="freeHeading">
            <div className="largeFreeBadge">
              <span>基本掲載</span>
              <strong>無料</strong>
            </div>

            <div>
              <p>WHAT IS INCLUDED</p>

              <h2>
                基本掲載に
                <span>含まれる内容</span>
              </h2>

              <strong>
                イベント掲載に必要な基本情報を
                分かりやすくまとめます。
              </strong>
            </div>
          </div>

          <div className="includedGrid">
            {includedItems.map((item, index) => (
              <article key={item.title}>
                <span className="includedNumber">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="includedIcon">
                  {item.icon}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span className="includedCheck">✓</span>
              </article>
            ))}
          </div>

          <div className="freeInformation">
            現在、基本掲載は無料です。優先表示、SNS投稿、
            LINE配信などは今後別プランとしてご案内する場合があります。
          </div>
        </div>
      </section>

      <section
        className="flowSection section"
        id="flow"
      >
        <div className="container">
          <SectionHeading
            english="HOW TO START"
            title="掲載までは"
            accent="簡単4ステップ"
            description="最初のご相談から掲載開始まで、公式LINEでご案内します。"
          />

          <div className="stepGrid">
            {steps.map((step, index) => (
              <div className="stepItem" key={step.number}>
                <article>
                  <span>STEP {step.number}</span>
                  <strong>{step.number}</strong>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>

                {index < steps.length - 1 && (
                  <div className="stepArrow">→</div>
                )}
              </div>
            ))}
          </div>

          <div className="flowAction">
            <LineButton />

            <p>
              最初は「イベント掲載希望」と
              一言お送りいただければ大丈夫です。
            </p>
          </div>
        </div>
      </section>

      <section className="faqSection section">
        <div className="container faqLayout">
          <div className="faqHeading">
            <p>FAQ</p>

            <h2>
              よくある
              <span>ご質問</span>
            </h2>

            <div className="questionIcon">?</div>

            <p>
              掲載できるイベントか分からない場合は、
              公式LINEからご相談ください。
            </p>
          </div>

          <div className="faqList">
            {faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{faq.question}</strong>

                  <i>＋</i>
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
        <img
          src={IMAGES.festival}
          alt=""
          className="finalBackground"
        />

        <div className="finalOverlay" />

        <div className="finalInner">
          <div>
            <p>EVENT LISTING SERVICE</p>

            <h2>
              <span>あなたのイベントを</span>
              <strong>もっと多くの人へ。</strong>
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
            title="基本掲載について相談する"
            note="「イベント掲載希望」とお送りください"
            white
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
              東京で開催されるイベントを、
              探している人へ分かりやすく届けます。
            </p>
          </div>

          <nav>
            <strong>イベントを探す</strong>
            <Link href="/">TOPページ</Link>
            <a href="#categories">カテゴリー</a>
            <a href="#benefits">掲載メリット</a>
          </nav>

          <nav>
            <strong>主催者の方へ</strong>
            <a href="#flow">掲載までの流れ</a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
            >
              LINEで掲載相談
            </a>
          </nav>

          <div className="footerCta">
            <strong>基本掲載は無料です</strong>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
            >
              掲載について相談する
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="copyright">
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
          width: min(1160px, calc(100% - 40px));
          margin: 0 auto;
        }

        .section {
          padding: 105px 0;
        }

        .header {
          position: sticky;
          z-index: 100;
          top: 0;
          border-bottom: 1px solid rgba(23, 36, 59, 0.08);
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(18px);
        }

        .headerInner {
          width: min(1200px, calc(100% - 40px));
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
          color: #ffffff;
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

        .heroDecoration {
          position: absolute;
          border-radius: 50%;
        }

        .heroDecorationOne {
          top: -160px;
          right: -110px;
          width: 430px;
          height: 430px;
          border: 82px solid rgba(242, 100, 25, 0.06);
        }

        .heroDecorationTwo {
          bottom: -175px;
          left: -130px;
          width: 370px;
          height: 370px;
          background: rgba(255, 193, 116, 0.14);
        }

        .heroInner {
          position: relative;
          z-index: 2;
          width: min(1200px, calc(100% - 48px));
          min-height: 760px;
          display: grid;
          grid-template-columns:
            minmax(520px, 0.95fr)
            minmax(500px, 1.05fr);
          align-items: center;
          gap: 65px;
          margin: 0 auto;
          padding: 70px 0 84px;
        }

        .heroLabel {
          width: fit-content;
          margin-bottom: 17px;
          padding: 9px 15px;
          border-radius: 999px;
          background: #17243b;
          color: #ffffff;
          font-size: 9px;
          font-weight: 900;
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
          font-size: clamp(48px, 5.15vw, 70px);
          line-height: 1.14;
          letter-spacing: -0.065em;
        }

        .heroCopy h1 span,
        .heroCopy h1 strong {
          display: block;
          width: max-content;
          max-width: 100%;
          white-space: nowrap;
        }

        .heroCopy h1 strong {
          position: relative;
          z-index: 1;
          color: #f26419;
        }

        .heroCopy h1 strong::before {
          position: absolute;
          z-index: -1;
          right: -8px;
          bottom: 4px;
          left: -5px;
          height: 17px;
          border-radius: 999px;
          background: rgba(255, 190, 117, 0.47);
          content: "";
          transform: rotate(-1deg);
        }

        .heroMessage {
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

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: 23px;
        }

        .featureGrid article {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          align-items: center;
          gap: 12px;
          min-height: 92px;
          padding: 13px;
          border: 1px solid rgba(234, 190, 151, 0.68);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 8px 24px rgba(70, 47, 27, 0.06);
        }

        .featureIcon {
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #fff0df;
          color: #f26419;
          font-size: 14px;
          font-weight: 1000;
        }

        .featureGrid article > div {
          min-width: 0;
        }

        .featureGrid small {
          color: #f26419;
          font-size: 7px;
          font-weight: 1000;
        }

        .featureGrid h2 {
          margin: 3px 0 4px;
          color: #2b384e;
          font-size: 12px;
        }

        .featureGrid p {
          margin: 0;
          color: #858b96;
          font-size: 8px;
          line-height: 1.55;
        }

        .heroAction {
          display: flex;
          align-items: center;
          gap: 17px;
          margin-top: 21px;
        }

        .heroAction .lineButton {
          margin-top: 0;
        }

        .heroAction > p {
          margin: 0;
          color: #8c7d6e;
          font-size: 8px;
          line-height: 1.65;
        }

        .lineButton {
          display: inline-grid;
          grid-template-columns: 45px minmax(0, 1fr) 20px;
          align-items: center;
          gap: 12px;
          width: min(430px, 100%);
          margin-top: 21px;
          padding: 13px 17px;
          border-radius: 14px;
          background: linear-gradient(135deg, #08b84e, #05a643);
          box-shadow: 0 16px 36px rgba(8, 184, 78, 0.22);
          color: #ffffff;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .lineButton:hover {
          transform: translateY(-3px);
          box-shadow: 0 21px 43px rgba(8, 184, 78, 0.3);
        }

        .lineIcon {
          width: 45px;
          height: 45px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #ffffff;
          color: #08a948;
          font-size: 8px;
          font-weight: 1000;
        }

        .lineCopy {
          display: grid;
          gap: 3px;
        }

        .lineCopy strong {
          font-size: 13px;
        }

        .lineCopy small {
          color: rgba(255, 255, 255, 0.82);
          font-size: 8px;
        }

        .lineArrow {
          font-size: 18px;
          font-weight: 900;
        }

        .whiteLineButton {
          background: #ffffff;
          color: #17243b;
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.2);
        }

        .whiteLineButton .lineCopy small {
          color: #7f8794;
        }

        .heroVisual {
          position: relative;
          min-height: 540px;
        }

        .heroMainImage,
        .heroSubImage {
          position: absolute;
          overflow: hidden;
          margin: 0;
          border: 7px solid #ffffff;
          background: #eeeeee;
          box-shadow: 0 24px 60px rgba(30, 35, 44, 0.18);
        }

        .heroMainImage {
          top: 35px;
          right: 25px;
          width: 80%;
          height: 380px;
          border-radius: 24px;
          transform: rotate(1.5deg);
        }

        .heroMainImage img,
        .heroSubImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter:
            saturate(0.9)
            contrast(0.97)
            brightness(0.95);
        }

        .heroMainImage figcaption {
          position: absolute;
          right: 18px;
          bottom: 18px;
          left: 18px;
          display: grid;
          gap: 4px;
          padding: 14px 16px;
          border-radius: 14px;
          background: rgba(23, 36, 59, 0.82);
          color: #ffffff;
          backdrop-filter: blur(8px);
        }

        .heroMainImage figcaption small {
          color: #ffb27a;
          font-size: 8px;
        }

        .heroMainImage figcaption strong {
          font-size: 12px;
          line-height: 1.5;
        }

        .heroSubImage {
          z-index: 3;
          bottom: 3px;
          width: 42%;
          height: 185px;
          border-radius: 20px;
        }

        .heroBoardGame {
          left: 0;
          transform: rotate(-4deg);
        }

        .heroSeminar {
          right: 0;
          transform: rotate(4deg);
        }

        .heroFreeBadge,
        .freeBadge {
          display: grid;
          place-items: center;
          align-content: center;
          border-radius: 50%;
          background: linear-gradient(145deg, #ff762c, #ed530e);
          color: #ffffff;
          text-align: center;
        }

        .heroFreeBadge {
          position: absolute;
          z-index: 8;
          top: 345px;
          left: 54%;
          width: 125px;
          height: 125px;
          border: 8px solid #fff7ec;
          box-shadow: 0 17px 40px rgba(242, 100, 25, 0.32);
          transform: translate(-50%, -50%) rotate(5deg);
        }

        .heroFreeBadge span {
          font-size: 9px;
          font-weight: 900;
        }

        .heroFreeBadge strong {
          font-size: 31px;
          line-height: 1.05;
        }

        .heroBottom {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          background: #17243b;
        }

        .heroBottom > div {
          min-height: 72px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
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

        .sectionHeading {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }

        .sectionHeading > p {
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
          font-size: clamp(34px, 4.7vw, 52px);
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

        .headingLine {
          width: 56px;
          height: 4px;
          margin: 18px auto 0;
          border-radius: 999px;
          background: #f26419;
        }

        .sectionDescription {
          max-width: 700px;
          margin: 20px auto 0;
          color: #6a7383;
          font-size: 12px;
          line-height: 1.85;
        }

        .categorySection {
          background: #ffffff;
        }

        .categoryGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 17px;
          margin-top: 48px;
        }

        .categoryCard {
          overflow: hidden;
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 13px 35px rgba(45, 40, 34, 0.085);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .categoryCard:hover {
          transform: translateY(-7px);
          box-shadow: 0 22px 48px rgba(45, 40, 34, 0.14);
        }

        .categoryImage {
          position: relative;
          height: 175px;
          overflow: hidden;
        }

        .categoryImage::after {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            transparent 45%,
            rgba(13, 28, 48, 0.55)
          );
          content: "";
        }

        .categoryImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter:
            saturate(0.9)
            contrast(0.97)
            brightness(0.95);
          transition: transform 0.4s ease;
        }

        .categoryCard:hover .categoryImage img {
          transform: scale(1.07);
        }

        .categoryIndex {
          position: absolute;
          z-index: 2;
          top: 13px;
          right: 13px;
          color: rgba(255, 255, 255, 0.86);
          font-size: 9px;
          font-weight: 1000;
        }

        .categoryIcon {
          position: absolute;
          z-index: 2;
          bottom: 13px;
          left: 14px;
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border: 4px solid #ffffff;
          border-radius: 50%;
          background: #fff1df;
          box-shadow: 0 9px 22px rgba(0, 0, 0, 0.18);
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

        .categoryCta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          margin-top: 27px;
          padding: 23px 26px;
          border-radius: 17px;
          background: linear-gradient(135deg, #f26419, #ff963c);
          box-shadow: 0 16px 38px rgba(242, 100, 25, 0.2);
          color: #ffffff;
        }

        .categoryCta > div {
          display: grid;
          gap: 5px;
        }

        .categoryCta small {
          color: #ffd9c1;
          font-size: 8px;
          font-weight: 900;
        }

        .categoryCta strong {
          font-size: 15px;
          line-height: 1.5;
        }

        .categoryCta a {
          display: flex;
          align-items: center;
          gap: 18px;
          flex: 0 0 auto;
          padding: 13px 17px;
          border-radius: 11px;
          background: #ffffff;
          color: #d9510c;
          text-decoration: none;
          font-size: 10px;
          font-weight: 900;
        }

        .categoryCta a span {
          font-size: 17px;
        }

        .problemSection {
          background: linear-gradient(180deg, #fff9f1, #f1faf4);
        }

        .problemGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 19px;
          margin-top: 48px;
        }

        .problemCard {
          overflow: hidden;
          border-radius: 21px;
          background: #ffffff;
          box-shadow: 0 15px 40px rgba(30, 39, 52, 0.09);
        }

        .orangeProblem {
          border: 1px solid rgba(238, 136, 73, 0.27);
        }

        .greenProblem {
          border: 1px solid rgba(64, 148, 99, 0.25);
        }

        .problemImage {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .problemImage::after {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            transparent 50%,
            rgba(18, 31, 48, 0.45)
          );
          content: "";
        }

        .problemImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 42%;
          filter:
            saturate(0.85)
            contrast(0.96)
            brightness(0.95);
        }

        .problemImage > span {
          position: absolute;
          z-index: 2;
          right: 18px;
          bottom: 16px;
          color: #ffffff;
          font-size: 40px;
          line-height: 1;
          font-weight: 1000;
        }

        .problemContent {
          padding: 28px;
        }

        .problemContent > small {
          color: #f26419;
          font-size: 8px;
          font-weight: 900;
        }

        .greenProblem .problemContent > small {
          color: #27865a;
        }

        .problemContent h3 {
          margin: 13px 0 22px;
          color: #26344b;
          font-size: 21px;
          line-height: 1.55;
        }

        .problemItems {
          display: grid;
          gap: 10px;
        }

        .problemItems p {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0;
          padding: 11px 12px;
          border-radius: 10px;
          background: #faf8f4;
          color: #5f6878;
          font-size: 10px;
          line-height: 1.55;
          font-weight: 700;
        }

        .problemItems p span {
          width: 21px;
          height: 21px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #f26419;
          color: #ffffff;
          font-size: 8px;
        }

        .greenProblem .problemItems p span {
          background: #27865a;
        }

        .solutionBox {
          display: grid;
          grid-template-columns:
            55px minmax(0, 1fr)
            minmax(240px, 0.55fr);
          align-items: center;
          gap: 20px;
          margin-top: 27px;
          padding: 25px 28px;
          border-radius: 18px;
          background: #17243b;
          box-shadow: 0 18px 40px rgba(23, 36, 59, 0.16);
          color: #ffffff;
        }

        .solutionIcon {
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: #f26419;
          font-size: 24px;
          font-weight: 900;
        }

        .solutionBox > div {
          display: grid;
          gap: 5px;
        }

        .solutionBox small {
          color: #ffb67d;
          font-size: 7px;
          font-weight: 1000;
        }

        .solutionBox strong {
          font-size: 14px;
          line-height: 1.6;
        }

        .solutionBox p {
          margin: 0;
          color: #c8cfda;
          font-size: 9px;
          line-height: 1.7;
        }

        .previewSection {
          background: #fff5e9;
        }

        .listingPreview {
          position: relative;
          min-height: 640px;
          margin-top: 50px;
          padding: 15px 125px 55px 15px;
        }

        .previewDesktop {
          overflow: hidden;
          border: 9px solid #ffffff;
          border-radius: 25px;
          background: #f7f7f5;
          box-shadow: 0 30px 75px rgba(39, 35, 32, 0.2);
          transform:
            perspective(1200px)
            rotateY(1.5deg)
            rotateZ(-0.4deg);
        }

        .browserHeader {
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

        .browserDots i {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f26419;
        }

        .browserDots i:nth-child(2) {
          background: #f4c54b;
        }

        .browserDots i:nth-child(3) {
          background: #45aa72;
        }

        .browserHeader > span {
          flex: 1;
          padding: 6px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.1);
          color: #dce1eb;
          text-align: center;
          font-size: 8px;
        }

        .previewPage {
          padding: 24px;
        }

        .previewPageHeading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 18px;
          padding-bottom: 13px;
          border-bottom: 1px solid #deddd8;
        }

        .previewPageHeading small {
          color: #f26419;
          font-size: 7px;
          font-weight: 900;
        }

        .previewPageHeading h3 {
          margin: 4px 0 0;
          font-size: 20px;
        }

        .previewPageHeading > span {
          color: #b9b9b5;
          font-size: 8px;
        }

        .previewColumns {
          display: grid;
          grid-template-columns:
            minmax(0, 1.35fr)
            minmax(190px, 0.65fr);
          gap: 15px;
        }

        .previewEventCard {
          overflow: hidden;
          border-radius: 15px;
          background: #ffffff;
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
        }

        .previewEventCard > img {
          height: 235px;
          object-fit: cover;
          filter:
            saturate(0.9)
            contrast(0.97)
            brightness(0.95);
        }

        .previewEventContent {
          padding: 18px;
        }

        .previewCategory {
          display: inline-flex;
          padding: 6px 9px;
          border-radius: 999px;
          background: #fff0df;
          color: #a94d1c;
          font-size: 8px;
          font-weight: 900;
        }

        .previewEventContent h4 {
          margin: 12px 0 15px;
          color: #26344b;
          font-size: 17px;
          line-height: 1.45;
        }

        .previewEventInfo {
          display: grid;
          gap: 8px;
        }

        .previewEventInfo p {
          display: grid;
          grid-template-columns: 62px minmax(0, 1fr);
          gap: 10px;
          margin: 0;
          color: #4e5868;
          font-size: 9px;
          line-height: 1.5;
        }

        .previewEventInfo p span {
          color: #999da5;
          font-size: 8px;
        }

        .previewEventContent > strong {
          display: block;
          margin-top: 16px;
          padding: 11px;
          border-radius: 8px;
          background: #17243b;
          color: #ffffff;
          text-align: center;
          font-size: 9px;
        }

        .previewMenus {
          display: grid;
          gap: 11px;
        }

        .previewMenus article {
          display: grid;
          align-content: center;
          min-height: 133px;
          padding: 18px;
          border-radius: 14px;
          background: #ffffff;
          box-shadow: 0 7px 18px rgba(0, 0, 0, 0.06);
        }

        .previewMenus small {
          color: #f26419;
          font-size: 7px;
          font-weight: 1000;
        }

        .previewMenus h4 {
          margin: 8px 0 6px;
          color: #26344b;
          font-size: 12px;
        }

        .previewMenus p {
          margin: 0;
          color: #818792;
          font-size: 8px;
          line-height: 1.6;
        }

        .previewPhone {
          position: absolute;
          z-index: 5;
          right: 8px;
          bottom: 0;
          width: 225px;
          padding: 11px;
          border: 8px solid #19263c;
          border-radius: 32px;
          background: #ffffff;
          box-shadow: 0 25px 58px rgba(25, 38, 60, 0.3);
          transform: rotate(5deg);
        }

        .phoneSpeaker {
          width: 58px;
          height: 5px;
          margin: 0 auto 9px;
          border-radius: 999px;
          background: #19263c;
        }

        .phoneScreen {
          overflow: hidden;
          border-radius: 17px;
          background: #f6f6f3;
        }

        .phoneScreen > img {
          height: 165px;
          object-fit: cover;
        }

        .phoneScreen > div {
          padding: 14px;
        }

        .phoneScreen span {
          display: inline-flex;
          padding: 5px 8px;
          border-radius: 999px;
          background: #fff0df;
          color: #a94d1c;
          font-size: 6px;
          font-weight: 900;
        }

        .phoneScreen h4 {
          margin: 9px 0 7px;
          font-size: 13px;
        }

        .phoneScreen p {
          margin: 0;
          color: #777777;
          font-size: 7px;
        }

        .phoneScreen strong {
          display: block;
          margin-top: 12px;
          padding: 9px;
          border-radius: 7px;
          background: #17243b;
          color: #ffffff;
          text-align: center;
          font-size: 7px;
        }

        .freeBadge {
          position: absolute;
          z-index: 8;
          top: -25px;
          right: 75px;
          width: 120px;
          height: 120px;
          border: 8px solid #fff7e8;
          box-shadow: 0 17px 40px rgba(242, 100, 25, 0.31);
          transform: rotate(7deg);
        }

        .freeBadge span {
          font-size: 9px;
          font-weight: 900;
        }

        .freeBadge strong {
          font-size: 30px;
          line-height: 1.05;
        }

        .calendarBadge,
        .categoryBadge {
          position: absolute;
          z-index: 7;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 14px;
          border-radius: 11px;
          background: #ffffff;
          box-shadow: 0 15px 34px rgba(32, 39, 54, 0.16);
          color: #344055;
          font-size: 9px;
          font-weight: 900;
        }

        .calendarBadge span,
        .categoryBadge span {
          color: #f26419;
          font-size: 7px;
        }

        .calendarBadge {
          top: 65px;
          left: -15px;
          transform: rotate(-5deg);
        }

        .categoryBadge {
          right: 0;
          bottom: 180px;
          transform: rotate(4deg);
        }

        .previewNotice {
          margin: 20px 0 0;
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
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-top: 48px;
        }

        .benefitCard {
          position: relative;
          min-height: 285px;
          overflow: hidden;
          padding: 25px;
          border: 1px solid rgba(39, 134, 90, 0.17);
          border-radius: 19px;
          background: #ffffff;
          box-shadow: 0 12px 32px rgba(27, 75, 47, 0.06);
        }

        .benefitNumber {
          color: rgba(39, 134, 90, 0.3);
          font-size: 29px;
          font-weight: 1000;
        }

        .benefitCard h3 {
          margin: 36px 0 13px;
          color: #24543b;
          font-size: 17px;
          line-height: 1.5;
        }

        .benefitCard p {
          margin: 0;
          color: #68766d;
          font-size: 10px;
          line-height: 1.85;
        }

        .benefitBar {
          position: absolute;
          right: 25px;
          bottom: 23px;
          left: 25px;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            #27865a 0 30%,
            #e1eee5 30%
          );
        }

        .connectionBanner {
          display: grid;
          grid-template-columns:
            minmax(340px, 0.85fr)
            minmax(0, 1.15fr);
          overflow: hidden;
          margin-top: 27px;
          border-radius: 22px;
          background: #17243b;
          box-shadow: 0 19px 45px rgba(23, 36, 59, 0.14);
        }

        .connectionBanner > img {
          width: 100%;
          height: 100%;
          min-height: 320px;
          object-fit: cover;
          filter:
            saturate(0.88)
            contrast(0.96)
            brightness(0.91);
        }

        .connectionBanner > div {
          display: grid;
          align-content: center;
          padding: 44px;
          color: #ffffff;
        }

        .connectionBanner small {
          color: #ffad70;
          font-size: 7px;
          font-weight: 1000;
          letter-spacing: 0.18em;
        }

        .connectionBanner h3 {
          margin: 14px 0 16px;
          font-size: 28px;
          line-height: 1.5;
        }

        .connectionBanner p {
          margin: 0;
          color: #cbd1db;
          font-size: 10px;
          line-height: 1.8;
        }

        .freeSection {
          background: #ffffff;
        }

        .freeHeading {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 42px;
        }

        .largeFreeBadge {
          width: 145px;
          height: 145px;
          display: grid;
          place-items: center;
          align-content: center;
          flex: 0 0 auto;
          border: 8px solid #e9f6ed;
          border-radius: 50%;
          background: linear-gradient(145deg, #27865a, #176b42);
          box-shadow: 0 18px 40px rgba(39, 134, 90, 0.2);
          color: #ffffff;
          text-align: center;
          transform: rotate(-6deg);
        }

        .largeFreeBadge span {
          font-size: 10px;
          font-weight: 900;
        }

        .largeFreeBadge strong {
          font-size: 34px;
          line-height: 1.05;
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
          font-size: clamp(34px, 4.7vw, 52px);
          line-height: 1.3;
          letter-spacing: -0.05em;
        }

        .freeHeading h2 span {
          display: block;
          color: #27865a;
        }

        .freeHeading > div:last-child > strong {
          display: block;
          margin-top: 13px;
          color: #6b756e;
          font-size: 11px;
          line-height: 1.7;
          font-weight: 600;
        }

        .includedGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 46px;
        }

        .includedGrid article {
          display: grid;
          grid-template-columns:
            29px 55px
            minmax(0, 1fr)
            27px;
          align-items: center;
          gap: 13px;
          min-height: 118px;
          padding: 18px;
          border: 1px solid rgba(39, 134, 90, 0.18);
          border-radius: 15px;
          background: #f5faf6;
        }

        .includedNumber {
          color: rgba(39, 134, 90, 0.4);
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
          color: #ffffff;
          font-size: 10px;
          font-weight: 900;
        }

        .freeInformation {
          margin-top: 20px;
          padding: 16px 18px;
          border-radius: 12px;
          background: #edf7f0;
          color: #607067;
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

        .stepItem {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .stepItem article {
          flex: 1;
          min-height: 280px;
          padding: 25px 21px;
          border: 1px solid rgba(237, 168, 116, 0.34);
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 10px 27px rgba(61, 46, 31, 0.055);
          text-align: center;
        }

        .stepItem article > span {
          color: #f26419;
          font-size: 8px;
          font-weight: 1000;
          letter-spacing: 0.13em;
        }

        .stepItem article > strong {
          width: 78px;
          height: 78px;
          display: grid;
          place-items: center;
          margin: 23px auto 19px;
          border-radius: 24px;
          background: #fff0df;
          color: #f26419;
          font-size: 29px;
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
          gap: 25px;
          margin-top: 38px;
        }

        .flowAction .lineButton {
          margin-top: 0;
        }

        .flowAction > p {
          max-width: 250px;
          margin: 0;
          color: #8a7c70;
          font-size: 9px;
          line-height: 1.7;
        }

        .faqSection {
          background: #ffffff;
        }

        .faqLayout {
          display: grid;
          grid-template-columns: 280px minmax(0, 1fr);
          gap: 66px;
        }

        .faqHeading > p:first-child {
          margin: 0 0 11px;
          color: #f26419;
          font-size: 8px;
          font-weight: 1000;
          letter-spacing: 0.22em;
        }

        .faqHeading h2 {
          display: grid;
          margin: 0;
          font-size: 47px;
          line-height: 1.28;
          letter-spacing: -0.05em;
        }

        .faqHeading h2 span {
          color: #f26419;
        }

        .questionIcon {
          width: 135px;
          height: 135px;
          display: grid;
          place-items: center;
          margin-top: 28px;
          border-radius: 43% 57% 50% 50%;
          background: #fff0df;
          color: #f26419;
          font-size: 66px;
          line-height: 1;
          font-weight: 1000;
          transform: rotate(-5deg);
        }

        .faqHeading > p:last-child {
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
          border: 1px solid rgba(221, 217, 210, 0.9);
          border-radius: 14px;
          background: #fafaf8;
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

        .faqList summary > span {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #17243b;
          color: #ffffff;
          font-size: 9px;
          font-weight: 1000;
        }

        .faqList summary strong {
          color: #344055;
          font-size: 11px;
          line-height: 1.55;
        }

        .faqList summary i {
          color: #f26419;
          text-align: center;
          font-size: 20px;
          font-style: normal;
          font-weight: 900;
        }

        .faqAnswer {
          display: grid;
          grid-template-columns: 39px minmax(0, 1fr);
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
          color: #ffffff;
          font-size: 11px;
          font-weight: 900;
        }

        .faqAnswer p {
          margin: 5px 0 0;
          color: #6d7585;
          font-size: 10px;
          line-height: 1.75;
        }

        .finalCta {
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
          filter:
            saturate(0.82)
            contrast(0.95)
            brightness(0.8);
        }

        .finalOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            100deg,
            rgba(17, 32, 52, 0.95) 0%,
            rgba(26, 42, 65, 0.88) 48%,
            rgba(235, 84, 13, 0.83) 100%
          );
        }

        .finalInner {
          position: relative;
          z-index: 2;
          width: min(1080px, calc(100% - 40px));
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            440px;
          align-items: center;
          gap: 60px;
          margin: 0 auto;
          padding: 75px 0;
          color: #ffffff;
        }

        .finalInner > div:first-child > p:first-child {
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
          font-size: clamp(39px, 5vw, 59px);
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
          border: 1px solid rgba(255, 255, 255, 0.24);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.09);
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
          width: min(1100px, calc(100% - 40px));
          display: grid;
          grid-template-columns:
            1.25fr 0.7fr 0.7fr 1fr;
          gap: 50px;
          margin: 0 auto;
          padding: 48px 0;
        }

        .footerLogo {
          color: #ffffff;
          text-decoration: none;
          font-size: 17px;
          font-weight: 900;
        }

        .footerInner > div:first-child > p {
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
          font-size: 8px;
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
          justify-content: space-between;
          align-items: center;
          padding: 13px 14px;
          border-radius: 10px;
          background: #08b84e;
          color: #ffffff;
          text-decoration: none;
          font-size: 9px;
          font-weight: 900;
        }

        .footerCta a span {
          font-size: 16px;
        }

        .copyright {
          padding: 17px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
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
          border: 5px solid #ffffff;
          border-radius: 50%;
          background: #08b84e;
          box-shadow: 0 16px 40px rgba(8, 184, 78, 0.35);
          color: #ffffff;
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
          .header nav a:not(.headerLine) {
            display: none;
          }

          .heroInner {
            grid-template-columns: 1fr;
          }

          .heroCopy {
            max-width: 740px;
          }

          .heroVisual {
            width: min(720px, 100%);
            margin: 0 auto;
          }

          .categoryGrid,
          .benefitGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .includedGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .finalInner {
            grid-template-columns: 1fr;
          }

          .footerInner {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .container,
          .headerInner,
          .heroInner,
          .finalInner,
          .footerInner {
            width: calc(100% - 24px);
          }

          .headerInner {
            min-height: 62px;
          }

          .logo {
            font-size: 16px;
          }

          .headerLine {
            padding: 10px 13px !important;
          }

          .heroInner {
            min-height: 0;
            gap: 50px;
            padding: 52px 0 70px;
          }

          .heroCopy h1 {
            font-size: 41px;
          }

          .heroCopy h1 span,
          .heroCopy h1 strong {
            width: auto;
            white-space: normal;
          }

          .featureGrid {
            grid-template-columns: 1fr;
          }

          .heroAction {
            display: grid;
          }

          .heroVisual {
            min-height: 480px;
          }

          .heroMainImage {
            top: 30px;
            right: 0;
            width: 91%;
            height: 320px;
          }

          .heroSubImage {
            height: 155px;
          }

          .heroBoardGame {
            width: 53%;
          }

          .heroSeminar {
            width: 47%;
          }

          .heroFreeBadge {
            top: 330px;
            width: 98px;
            height: 98px;
            border-width: 6px;
          }

          .heroFreeBadge strong {
            font-size: 24px;
          }

          .heroBottom {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .heroBottom > div {
            min-height: 58px;
          }

          .section {
            padding: 74px 0;
          }

          .sectionHeading h2 {
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

          .categoryCta {
            display: grid;
          }

          .categoryCta a {
            justify-content: space-between;
          }

          .solutionBox {
            grid-template-columns: 50px minmax(0, 1fr);
          }

          .solutionBox > p {
            grid-column: 1 / -1;
          }

          .listingPreview {
            min-height: 790px;
            padding: 10px 0 220px;
          }

          .previewDesktop {
            border-width: 6px;
            transform: none;
          }

          .previewPage {
            padding: 14px;
          }

          .previewColumns {
            grid-template-columns: 1fr;
          }

          .previewMenus {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .previewMenus article {
            min-height: 105px;
            padding: 11px;
          }

          .previewPhone {
            right: 50%;
            width: 195px;
            transform: translateX(50%) rotate(3deg);
          }

          .freeBadge,
          .calendarBadge,
          .categoryBadge {
            display: none;
          }

          .connectionBanner {
            grid-template-columns: 1fr;
          }

          .connectionBanner > img {
            min-height: 240px;
          }

          .connectionBanner > div {
            padding: 30px;
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
            grid-template-columns: repeat(2, minmax(0, 1fr));
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

          .faqHeading {
            text-align: center;
          }

          .faqHeading h2 {
            font-size: 38px;
          }

          .questionIcon {
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

          .footerInner > div:first-child > p {
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

          .heroMessage {
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

          .lineIcon {
            width: 41px;
            height: 41px;
          }

          .lineCopy strong {
            font-size: 11px;
          }

          .sectionHeading h2 {
            font-size: 28px;
          }

          .previewMenus {
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
