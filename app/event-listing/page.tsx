import Link from "next/link";

export const metadata = {
  title: "イベント掲載について｜東京イベントナビ",
  description:
    "東京イベントナビでは、東京都内で開催されるイベントの無料掲載を受け付けています。",
};

const LINE_URL = "https://lin.ee/P179zyp";

const listingPlaces = [
  {
    number: "01",
    icon: "⭐",
    title: "人気イベント",
    text: "おすすめイベントとして、TOPページの大きなカードで紹介される場合があります。",
    note: "掲載内容や開催時期により表示欄は異なります。",
    color: "orange",
  },
  {
    number: "02",
    icon: "🆕",
    title: "新着イベント",
    text: "新しく掲載されたイベントとして、TOPページの新着欄に表示されます。",
    color: "blue",
  },
  {
    number: "03",
    icon: "📅",
    title: "今週のイベント",
    text: "開催日が近づくと、今週参加できるイベントとして見つけてもらえます。",
    color: "green",
  },
  {
    number: "04",
    icon: "🗓️",
    title: "イベントカレンダー",
    text: "開催日にイベント名と開始時間が表示され、日付から探してもらえます。",
    color: "purple",
  },
  {
    number: "05",
    icon: "🔍",
    title: "カテゴリー検索",
    text: "飲み会・交流会・スポーツなど、興味のあるカテゴリーから探してもらえます。",
    color: "pink",
  },
  {
    number: "06",
    icon: "📱",
    title: "イベント詳細ページ",
    text: "フライヤーや会場、参加条件などをまとめた専用ページを作成します。",
    color: "yellow",
  },
];

const problems = [
  {
    number: "01",
    icon: "📣",
    title: "良いイベントなのに知られていない",
    text: "イベントの内容には自信があっても、情報を届ける場所が少なく、認知が広がらない。",
    group: "orange",
  },
  {
    number: "02",
    icon: "💬",
    title: "毎回、知人への声かけに頼っている",
    text: "SNS投稿や個別連絡だけでは、いつも同じ人にしか情報が届かない。",
    group: "orange",
  },
  {
    number: "03",
    icon: "📉",
    title: "開催直前まで人数が分からない",
    text: "申込み状況が安定せず、会場や料理、スタッフ数の準備が難しい。",
    group: "orange",
  },
  {
    number: "04",
    icon: "⏰",
    title: "告知に使う時間が足りない",
    text: "企画や当日の準備と並行して、告知や問い合わせ対応まで行う負担が大きい。",
    group: "green",
  },
  {
    number: "05",
    icon: "📝",
    title: "情報をきれいに整理できない",
    text: "日時や会場、参加条件などが複数の投稿に分かれ、参加者に伝わりにくい。",
    group: "green",
  },
  {
    number: "06",
    icon: "😟",
    title: "初開催で信用されるか不安",
    text: "開催実績が少ないため、興味を持ってもらえても申込みにつながりにくい。",
    group: "green",
  },
];

const freeFeatures = [
  {
    icon: "🖼️",
    title: "フライヤー掲載",
    text: "イベントの雰囲気が伝わる画像を掲載します。",
  },
  {
    icon: "📄",
    title: "専用詳細ページ",
    text: "イベントごとの紹介ページを作成します。",
  },
  {
    icon: "📅",
    title: "開催日時の掲載",
    text: "開催日と開始・終了時間を分かりやすく表示します。",
  },
  {
    icon: "📍",
    title: "会場情報の掲載",
    text: "会場名と住所を整理して掲載します。",
  },
  {
    icon: "🗂️",
    title: "カテゴリーへの反映",
    text: "イベントのジャンルから探せるようにします。",
  },
  {
    icon: "🔗",
    title: "申込先へのリンク",
    text: "LINEや申込フォームへ直接案内できます。",
  },
];

const eventCategories = [
  {
    icon: "🍻",
    title: "飲み会・交流会",
    text: "友達づくり、恋活、異業種交流、社会人交流会など。",
  },
  {
    icon: "☕",
    title: "カフェ会・ランチ会",
    text: "少人数の交流会や、食事を楽しみながらつながるイベント。",
  },
  {
    icon: "🎲",
    title: "ボードゲーム・ゲーム会",
    text: "ボードゲーム、カードゲーム、初心者向けの交流イベント。",
  },
  {
    icon: "⚽",
    title: "スポーツ・アウトドア",
    text: "フットサル、ゴルフ、ランニング、ヨガ、登山など。",
  },
  {
    icon: "📊",
    title: "セミナー・勉強会",
    text: "ビジネス、スキルアップ、学習を目的としたイベント。",
  },
  {
    icon: "🎨",
    title: "趣味・体験イベント",
    text: "料理、写真、音楽、ワークショップ、ものづくりなど。",
  },
  {
    icon: "🌏",
    title: "語学・国際交流",
    text: "語学学習、外国人との交流、国際文化交流イベント。",
  },
  {
    icon: "✨",
    title: "その他のイベント",
    text: "記載のないジャンルも、まずはお気軽にご相談ください。",
  },
];

const requiredItems = [
  {
    number: "01",
    title: "イベント名",
    text: "正式なイベントタイトル",
  },
  {
    number: "02",
    title: "フライヤー",
    text: "イベント内容が分かる画像",
  },
  {
    number: "03",
    title: "開催日時",
    text: "開催日・開始時間・終了時間",
  },
  {
    number: "04",
    title: "会場情報",
    text: "会場名と住所",
  },
  {
    number: "05",
    title: "イベント概要",
    text: "内容や参加者に伝えたい魅力",
  },
  {
    number: "06",
    title: "参加条件",
    text: "年齢、性別、対象者など",
  },
  {
    number: "07",
    title: "申込先",
    text: "公式LINEや申込フォームのURL",
  },
  {
    number: "08",
    title: "主催者情報",
    text: "主催者名、団体名、連絡先など",
  },
];

const steps = [
  {
    number: "01",
    icon: "💬",
    title: "LINEで相談",
    text: "公式LINEを追加して、掲載を希望していることをお知らせください。",
  },
  {
    number: "02",
    icon: "📎",
    title: "イベント情報を送付",
    text: "フライヤー、開催日時、会場などの情報をお送りください。",
  },
  {
    number: "03",
    icon: "✅",
    title: "掲載内容を確認",
    text: "掲載ページの内容や申込先などを確認し、公開準備を行います。",
  },
  {
    number: "04",
    icon: "🚀",
    title: "掲載スタート",
    text: "東京イベントナビの一覧・カレンダー・カテゴリーへ反映します。",
  },
];

const rules = [
  "法令や公序良俗に反する内容",
  "イベント内容や主催者情報を確認できないもの",
  "虚偽または誤解を招く表現を含むもの",
  "強引な営業や勧誘を主目的とするもの",
  "参加者の安全性に問題があると判断されるもの",
  "東京イベントナビの方針に合わないと判断されるもの",
];

const faqs = [
  {
    question: "掲載料金はかかりますか？",
    answer:
      "現在、イベントの基本掲載は無料です。フライヤー、開催日時、会場、概要、申込リンクなどを掲載します。",
  },
  {
    question: "どんなイベントでも掲載できますか？",
    answer:
      "東京都内で開催される飲み会、交流会、趣味イベント、スポーツ、セミナーなどが対象です。掲載前に内容を確認させていただきます。",
  },
  {
    question: "情報がすべて揃っていなくても相談できますか？",
    answer:
      "はい。開催内容が決まっていない段階でもご相談いただけます。必要な情報をご案内します。",
  },
  {
    question: "人気イベント欄へ必ず掲載されますか？",
    answer:
      "人気イベント欄への表示は保証していません。掲載内容や開催時期などにより、表示される欄は異なります。",
  },
  {
    question: "掲載後に日時や会場を変更できますか？",
    answer:
      "変更可能です。内容が変わった場合は、公式LINEから早めにご連絡ください。",
  },
  {
    question: "掲載までどのくらいかかりますか？",
    answer:
      "情報が揃ってから内容を確認し、順次掲載します。開催日が近い場合は、LINEでその旨をお伝えください。",
  },
];

function SampleEventCard() {
  return (
    <div className="sampleCard">
      <div className="sampleImage">
        <div className="sampleImageDecoration decorationOne" />
        <div className="sampleImageDecoration decorationTwo" />

        <div className="sampleFlyer">
          <span>SUMMER EVENT</span>
          <strong>
            東京交流
            <br />
            PARTY
          </strong>
          <small>新しい出会いと楽しい時間を。</small>
        </div>
      </div>

      <div className="sampleBody">
        <span className="sampleCategory">
          飲み会・交流会
        </span>

        <h3>
          20〜30代限定
          <br />
          東京交流イベント
        </h3>

        <div className="sampleInformation">
          <p>
            <span>📅</span>
            2026年8月22日（土）
          </p>

          <p>
            <span>🕐</span>
            18:00〜20:00
          </p>

          <p>
            <span>📍</span>
            新宿イベントスペース
          </p>
        </div>

        <div className="sampleButton">
          詳細を見る
        </div>
      </div>
    </div>
  );
}

function ListingPreview() {
  return (
    <div className="listingPreview">
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

      <div className="previewContent">
        <div className="previewHeading">
          <div>
            <small>TOKYO EVENT NAVI</small>
            <strong>人気イベント</strong>
          </div>

          <span>EVENT</span>
        </div>

        <div className="previewCards">
          <SampleEventCard />

          <div className="previewSideCards">
            <div>
              <span>🆕</span>
              <strong>新着イベント</strong>
              <small>新しい掲載情報から見つかる</small>
            </div>

            <div>
              <span>📅</span>
              <strong>今週のイベント</strong>
              <small>開催日が近づくと表示</small>
            </div>

            <div>
              <span>🗂️</span>
              <strong>カテゴリー検索</strong>
              <small>興味のあるジャンルから探せる</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EventListingPage() {
  return (
    <main className="listingPage">
      <header className="siteHeader">
        <div className="headerInner">
          <Link href="/" className="siteLogo">
            <span>東京</span>
            イベントナビ
          </Link>

          <div className="headerActions">
            <Link href="/" className="backButton">
              イベントを探す
            </Link>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
              className="headerLineButton"
            >
              LINEで相談
            </a>
          </div>
        </div>
      </header>

      <section className="heroSection">
        <div className="heroShape shapeOne" />
        <div className="heroShape shapeTwo" />
        <div className="heroShape shapeThree" />

        <div className="heroContainer">
          <div className="heroCopy">
            <div className="heroLabel">
              EVENT LISTING SERVICE
            </div>

            <h1>
              あなたのイベントを
              <br />
              <span>もっと多くの人へ。</span>
            </h1>

            <p className="heroDescription">
              東京イベントナビでは、東京都内で開催される
              飲み会・交流会・趣味イベントなどを掲載しています。
            </p>

            <p className="heroDescription">
              イベント専用ページやカレンダー、カテゴリー検索を通じて、
              東京でイベントを探している方へ情報を届けます。
            </p>

            <div className="heroPoints">
              <div>
                <span>01</span>
                <strong>掲載無料</strong>
              </div>

              <div>
                <span>02</span>
                <strong>専用ページ作成</strong>
              </div>

              <div>
                <span>03</span>
                <strong>LINEで相談</strong>
              </div>
            </div>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
              className="lineButton"
            >
              <span className="lineIcon">LINE</span>

              <span>
                掲載について相談する
                <small>
                  相談だけでも問題ありません
                </small>
              </span>

              <strong>→</strong>
            </a>
          </div>

          <div className="heroVisual">
            <div className="orangeCircle">
              掲載
              <strong>無料</strong>
            </div>

            <div className="floatingTag tagOne">
              📅 カレンダー掲載
            </div>

            <div className="floatingTag tagTwo">
              🗂️ カテゴリー検索
            </div>

            <ListingPreview />
          </div>
        </div>
      </section>

      <section className="introSection">
        <div className="sectionContainer">
          <div className="sectionTitle centered">
            <span>ABOUT</span>

            <h2>
              東京イベントナビに
              <br />
              掲載するとできること
            </h2>

            <p>
              イベント情報を一つのページに整理し、
              複数の方法から見つけてもらえるように掲載します。
            </p>
          </div>

          <div className="listingPlaceGrid">
            {listingPlaces.map((place) => (
              <article
                className={`listingPlaceCard ${place.color}`}
                key={place.number}
              >
                <div className="placeTop">
                  <span className="placeNumber">
                    {place.number}
                  </span>

                  <span className="placeIcon">
                    {place.icon}
                  </span>
                </div>

                <h3>{place.title}</h3>

                <p>{place.text}</p>

                {place.note && (
                  <small>{place.note}</small>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="previewSection">
        <div className="sectionContainer previewLayout">
          <div className="previewText">
            <div className="sectionTitle">
              <span>LISTING IMAGE</span>

              <h2>
                イベント情報を
                <br />
                <em>見やすく、分かりやすく。</em>
              </h2>
            </div>

            <p>
              フライヤーだけでは伝わりにくい情報を整理し、
              初めて見る方にもイベント内容が伝わるページを作成します。
            </p>

            <ul>
              <li>
                <span>✓</span>
                フライヤーとイベント名
              </li>

              <li>
                <span>✓</span>
                開催日・開始時間・終了時間
              </li>

              <li>
                <span>✓</span>
                会場名・会場住所
              </li>

              <li>
                <span>✓</span>
                イベント概要・参加条件
              </li>

              <li>
                <span>✓</span>
                LINEや申込フォームへのリンク
              </li>
            </ul>

            <div className="previewNotice">
              <span>!</span>

              <p>
                人気イベント欄など、表示される場所は
                掲載内容や開催時期によって異なります。
              </p>
            </div>
          </div>

          <div className="previewVisual">
            <ListingPreview />
          </div>
        </div>
      </section>

      <section className="problemSection">
        <div className="sectionContainer">
          <div className="sectionTitle centered">
            <span>PROBLEMS</span>

            <h2>
              イベントの告知や運営で
              <br />
              こんなお悩みありませんか？
            </h2>
          </div>

          <div className="problemGroup">
            <div className="groupTitle orangeTitle">
              <span>📣</span>
              告知・認知に関するお悩み
            </div>

            <div className="problemGrid">
              {problems
                .filter(
                  (problem) =>
                    problem.group === "orange",
                )
                .map((problem) => (
                  <article
                    className="problemCard orangeProblem"
                    key={problem.number}
                  >
                    <div className="problemTop">
                      <span className="problemNumber">
                        {problem.number}
                      </span>

                      <span className="problemIcon">
                        {problem.icon}
                      </span>
                    </div>

                    <h3>{problem.title}</h3>

                    <p>{problem.text}</p>
                  </article>
                ))}
            </div>
          </div>

          <div className="problemGroup">
            <div className="groupTitle greenTitle">
              <span>⚙️</span>
              運営・準備に関するお悩み
            </div>

            <div className="problemGrid">
              {problems
                .filter(
                  (problem) =>
                    problem.group === "green",
                )
                .map((problem) => (
                  <article
                    className="problemCard greenProblem"
                    key={problem.number}
                  >
                    <div className="problemTop">
                      <span className="problemNumber">
                        {problem.number}
                      </span>

                      <span className="problemIcon">
                        {problem.icon}
                      </span>
                    </div>

                    <h3>{problem.title}</h3>

                    <p>{problem.text}</p>
                  </article>
                ))}
            </div>
          </div>

          <div className="problemConclusion">
            <span>東京イベントナビなら</span>

            <strong>
              イベント情報を整理し、
              新しい人に知ってもらう入口を増やせます。
            </strong>
          </div>
        </div>
      </section>

      <section className="freeSection">
        <div className="freeDecoration freeDecorationOne" />
        <div className="freeDecoration freeDecorationTwo" />

        <div className="sectionContainer">
          <div className="freeHeading">
            <div className="freeStamp">
              BASIC
              <strong>FREE</strong>
            </div>

            <div className="sectionTitle">
              <span>FREE LISTING</span>

              <h2>
                基本掲載は
                <em>無料</em>です
              </h2>

              <p>
                無料掲載には、以下の内容が含まれます。
              </p>
            </div>
          </div>

          <div className="freeFeatureGrid">
            {freeFeatures.map((feature) => (
              <article key={feature.title}>
                <div className="freeFeatureIcon">
                  {feature.icon}
                </div>

                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>

                <span className="checkMark">
                  ✓
                </span>
              </article>
            ))}
          </div>

          <div className="futureNote">
            <span>今後について</span>

            <p>
              SNS投稿、公式LINE配信、優先表示などの追加施策は、
              今後別途ご案内する場合があります。
            </p>
          </div>
        </div>
      </section>

      <section className="categorySection">
        <div className="sectionContainer">
          <div className="sectionTitle centered">
            <span>EVENT CATEGORIES</span>

            <h2>
              さまざまなイベントを
              <br />
              掲載できます
            </h2>

            <p>
              下記にないジャンルについても、
              まずは公式LINEからご相談ください。
            </p>
          </div>

          <div className="eventCategoryGrid">
            {eventCategories.map((category) => (
              <article key={category.title}>
                <div className="eventCategoryIcon">
                  {category.icon}
                </div>

                <h3>{category.title}</h3>

                <p>{category.text}</p>

                <div className="categoryArrow">
                  →
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="requiredSection">
        <div className="sectionContainer requiredLayout">
          <div className="requiredHeading">
            <div className="sectionTitle">
              <span>INFORMATION</span>

              <h2>
                掲載時に
                <br />
                ご用意いただくもの
              </h2>

              <p>
                すべて揃っていなくても問題ありません。
                分からない部分は打ち合わせ時に確認します。
              </p>
            </div>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
              className="smallLineButton"
            >
              LINEで相談する
              <span>→</span>
            </a>
          </div>

          <div className="requiredGrid">
            {requiredItems.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stepSection">
        <div className="sectionContainer">
          <div className="sectionTitle centered">
            <span>HOW TO LIST</span>

            <h2>
              掲載までの流れ
            </h2>

            <p>
              最初のご相談から掲載開始まで、
              公式LINEでご案内します。
            </p>
          </div>

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

                  <p>{step.text}</p>
                </article>

                {index < steps.length - 1 && (
                  <div className="stepArrow">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noreferrer"
            className="lineButton centeredButton"
          >
            <span className="lineIcon">LINE</span>

            <span>
              掲載について相談する
              <small>
                まずはイベント内容をお聞かせください
              </small>
            </span>

            <strong>→</strong>
          </a>
        </div>
      </section>

      <section className="ruleSection">
        <div className="sectionContainer ruleLayout">
          <div className="ruleVisual">
            <div className="shield">
              <span>✓</span>
            </div>

            <div className="ruleVisualText">
              <small>SAFE EVENT LISTING</small>

              <strong>
                安心してイベントを
                <br />
                探せる場所へ
              </strong>
            </div>
          </div>

          <div className="ruleContent">
            <div className="sectionTitle">
              <span>LISTING POLICY</span>

              <h2>
                安心してご利用
                <br />
                いただくために
              </h2>

              <p>
                参加者に安心してイベントを選んでいただくため、
                掲載前に内容を確認させていただきます。
              </p>
            </div>

            <ul>
              {rules.map((rule) => (
                <li key={rule}>
                  <span>×</span>
                  {rule}
                </li>
              ))}
            </ul>

            <p className="ruleNote">
              上記以外でも、内容によって掲載をお断りする場合があります。
            </p>
          </div>
        </div>
      </section>

      <section className="faqSection">
        <div className="sectionContainer faqLayout">
          <div className="faqHeading">
            <div className="sectionTitle">
              <span>FAQ</span>

              <h2>
                よくある
                <br />
                ご質問
              </h2>

              <p>
                掲載に関する主なご質問をまとめています。
              </p>
            </div>

            <div className="faqCharacter">
              <span>?</span>
            </div>
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

                  <span className="faqPlus">
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
        <div className="finalShape finalShapeOne" />
        <div className="finalShape finalShapeTwo" />

        <div className="finalContainer">
          <div className="finalLabel">
            EVENT LISTING
          </div>

          <h2>
            あなたのイベントを
            <br />
            <span>もっと多くの人へ。</span>
          </h2>

          <p>
            掲載できるイベントか分からない場合も、
            まずは公式LINEからお気軽にご相談ください。
          </p>

          <div className="finalPoints">
            <span>掲載無料</span>
            <span>東京都内のイベント</span>
            <span>相談だけでもOK</span>
          </div>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noreferrer"
            className="finalLineButton"
          >
            <span className="lineIcon">
              LINE
            </span>

            無料で掲載について相談する

            <strong>→</strong>
          </a>

          <small>
            公式LINE追加後、「イベント掲載希望」とお送りください。
          </small>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <Link href="/" className="footerLogo">
            東京イベントナビ
          </Link>

          <div className="footerLinks">
            <Link href="/">
              イベントを探す
            </Link>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
            >
              掲載について相談
            </a>
          </div>

          <span>
            © TOKYO EVENT NAVI
          </span>
        </div>
      </footer>

      <a
        href={LINE_URL}
        target="_blank"
        rel="noreferrer"
        className="floatingLineButton"
      >
        <span>LINE</span>

        <strong>
          掲載相談
        </strong>
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

        .listingPage {
          min-height: 100vh;
          overflow: hidden;
          background: #fffdf9;
          color: #17243b;
        }

        .siteHeader {
          position: sticky;
          z-index: 100;
          top: 0;
          border-bottom: 1px solid rgba(23, 36, 59, 0.08);
          background: rgba(255, 253, 249, 0.92);
          backdrop-filter: blur(16px);
        }

        .headerInner {
          width: min(1180px, calc(100% - 40px));
          min-height: 72px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          margin: 0 auto;
        }

        .siteLogo {
          color: #17243b;
          text-decoration: none;
          font-size: 19px;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .siteLogo span {
          margin-right: 3px;
          color: #f26419;
        }

        .headerActions {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .backButton,
        .headerLineButton {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: 11px 17px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
        }

        .backButton {
          border: 1px solid #deded8;
          background: #fff;
          color: #27344a;
        }

        .headerLineButton {
          background: #09b84e;
          color: #fff;
        }

        .heroSection {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 18% 22%,
              rgba(255, 169, 80, 0.2),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 70%,
              rgba(255, 211, 158, 0.3),
              transparent 34%
            ),
            linear-gradient(
              135deg,
              #fff8ee 0%,
              #fffdf9 48%,
              #fff0dc 100%
            );
        }

        .heroShape {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .shapeOne {
          top: -120px;
          right: -80px;
          width: 400px;
          height: 400px;
          border: 80px solid rgba(241, 100, 25, 0.07);
        }

        .shapeTwo {
          bottom: -130px;
          left: -110px;
          width: 320px;
          height: 320px;
          background: rgba(255, 195, 119, 0.15);
        }

        .shapeThree {
          top: 120px;
          left: 47%;
          width: 15px;
          height: 15px;
          background: #f26419;
          box-shadow:
            34px -44px 0 #ffbe70,
            66px 18px 0 #173a62,
            -34px 52px 0 #38a46a;
        }

        .heroContainer {
          position: relative;
          z-index: 1;
          width: min(1180px, calc(100% - 40px));
          min-height: 750px;
          display: grid;
          grid-template-columns:
            minmax(0, 0.9fr)
            minmax(480px, 1.1fr);
          align-items: center;
          gap: 70px;
          margin: 0 auto;
          padding: 85px 0 100px;
        }

        .heroLabel,
        .finalLabel {
          width: fit-content;
          margin-bottom: 18px;
          padding: 8px 13px;
          border: 1px solid #f2b88f;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.75);
          color: #e45a12;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.19em;
        }

        .heroCopy h1 {
          margin: 0;
          color: #17243b;
          font-size: clamp(47px, 6vw, 79px);
          line-height: 1.14;
          letter-spacing: -0.065em;
        }

        .heroCopy h1 span {
          position: relative;
          color: #f26419;
        }

        .heroCopy h1 span::after {
          position: absolute;
          right: 0;
          bottom: -9px;
          left: 0;
          height: 7px;
          border-radius: 999px;
          background: #ffd0ad;
          content: "";
        }

        .heroDescription {
          max-width: 590px;
          margin: 28px 0 0;
          color: #5d6677;
          font-size: 15px;
          line-height: 1.95;
          font-weight: 600;
        }

        .heroDescription + .heroDescription {
          margin-top: 4px;
        }

        .heroPoints {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin: 30px 0;
        }

        .heroPoints div {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 13px;
          border-radius: 10px;
          background: #fff;
          box-shadow:
            0 7px 23px
            rgba(48, 40, 30, 0.07);
        }

        .heroPoints span {
          color: #f26419;
          font-size: 10px;
          font-weight: 900;
        }

        .heroPoints strong {
          color: #26334a;
          font-size: 11px;
        }

        .lineButton,
        .finalLineButton {
          display: inline-grid;
          grid-template-columns:
            47px minmax(0, 1fr) 22px;
          align-items: center;
          gap: 14px;
          min-width: 390px;
          padding: 14px 19px;
          border-radius: 15px;
          background: #08b84e;
          box-shadow:
            0 16px 36px
            rgba(8, 184, 78, 0.22);
          color: #fff;
          text-align: left;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .lineButton:hover,
        .finalLineButton:hover {
          transform: translateY(-3px);
          box-shadow:
            0 21px 44px
            rgba(8, 184, 78, 0.29);
        }

        .lineIcon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #fff;
          color: #08a948;
          font-size: 10px;
          font-weight: 1000;
        }

        .lineButton > span:nth-child(2) {
          display: grid;
          gap: 3px;
          font-size: 15px;
          font-weight: 900;
        }

        .lineButton small {
          color: rgba(255, 255, 255, 0.8);
          font-size: 10px;
          font-weight: 600;
        }

        .lineButton > strong,
        .finalLineButton > strong {
          font-size: 19px;
        }

        .heroVisual {
          position: relative;
          min-width: 0;
        }

        .orangeCircle {
          position: absolute;
          z-index: 5;
          top: -44px;
          right: -13px;
          width: 118px;
          height: 118px;
          display: grid;
          place-items: center;
          align-content: center;
          border: 7px solid #fff6e9;
          border-radius: 50%;
          background: #f26419;
          box-shadow:
            0 15px 35px
            rgba(242, 100, 25, 0.27);
          color: #fff;
          font-size: 13px;
          font-weight: 900;
          transform: rotate(7deg);
        }

        .orangeCircle strong {
          font-size: 33px;
          line-height: 1;
        }

        .floatingTag {
          position: absolute;
          z-index: 6;
          padding: 10px 13px;
          border-radius: 10px;
          background: #fff;
          box-shadow:
            0 14px 34px
            rgba(32, 39, 54, 0.13);
          color: #27354c;
          font-size: 11px;
          font-weight: 900;
        }

        .tagOne {
          top: 50px;
          left: -31px;
          transform: rotate(-5deg);
        }

        .tagTwo {
          right: -21px;
          bottom: 48px;
          transform: rotate(4deg);
        }

        .listingPreview {
          overflow: hidden;
          border: 9px solid #fff;
          border-radius: 24px;
          background: #f7f7f5;
          box-shadow:
            0 28px 70px
            rgba(36, 38, 49, 0.18);
          transform: rotate(1.4deg);
        }

        .browserBar {
          display: flex;
          align-items: center;
          gap: 16px;
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
          background: #f6c14d;
        }

        .browserDots span:nth-child(3) {
          background: #43aa72;
        }

        .browserAddress {
          flex: 1;
          padding: 6px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.1);
          color: #d9deea;
          text-align: center;
          font-size: 8px;
        }

        .previewContent {
          padding: 22px;
        }

        .previewHeading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 16px;
          padding-bottom: 11px;
          border-bottom: 1px solid #dddcd7;
        }

        .previewHeading div {
          display: grid;
          gap: 3px;
        }

        .previewHeading small {
          color: #f26419;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.18em;
        }

        .previewHeading strong {
          font-size: 17px;
        }

        .previewHeading > span {
          color: #c5c3bc;
          font-size: 8px;
          font-weight: 900;
        }

        .previewCards {
          display: grid;
          grid-template-columns:
            minmax(0, 1.25fr)
            minmax(145px, 0.75fr);
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

        .sampleImage {
          position: relative;
          min-height: 162px;
          display: grid;
          place-items: center;
          overflow: hidden;
          background:
            linear-gradient(
              135deg,
              #f56d26,
              #ffb154
            );
        }

        .sampleImageDecoration {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.18);
        }

        .decorationOne {
          top: -35px;
          right: -20px;
          width: 120px;
          height: 120px;
        }

        .decorationTwo {
          bottom: -42px;
          left: -25px;
          width: 100px;
          height: 100px;
        }

        .sampleFlyer {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 5px;
          padding: 20px;
          color: #fff;
          text-align: center;
        }

        .sampleFlyer span {
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 0.24em;
        }

        .sampleFlyer strong {
          font-size: 26px;
          line-height: 1.04;
          letter-spacing: -0.05em;
        }

        .sampleFlyer small {
          font-size: 7px;
        }

        .sampleBody {
          padding: 13px;
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
          margin: 9px 0 10px;
          color: #243149;
          font-size: 12px;
          line-height: 1.4;
        }

        .sampleInformation {
          display: grid;
          gap: 6px;
        }

        .sampleInformation p {
          display: flex;
          gap: 5px;
          margin: 0;
          color: #707583;
          font-size: 7px;
        }

        .sampleButton {
          margin-top: 12px;
          padding: 8px;
          border-radius: 6px;
          background: #17243b;
          color: #fff;
          text-align: center;
          font-size: 8px;
          font-weight: 900;
        }

        .previewSideCards {
          display: grid;
          gap: 9px;
        }

        .previewSideCards div {
          display: grid;
          align-content: center;
          gap: 4px;
          padding: 13px;
          border-radius: 11px;
          background: #fff;
          box-shadow:
            0 6px 16px
            rgba(0, 0, 0, 0.06);
        }

        .previewSideCards span {
          font-size: 21px;
        }

        .previewSideCards strong {
          color: #253149;
          font-size: 9px;
        }

        .previewSideCards small {
          color: #8a8e99;
          font-size: 7px;
          line-height: 1.4;
        }

        .sectionContainer {
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }

        .sectionTitle > span {
          display: block;
          margin-bottom: 11px;
          color: #f26419;
          font-size: 10px;
          font-weight: 1000;
          letter-spacing: 0.22em;
        }

        .sectionTitle h2 {
          margin: 0;
          color: #17243b;
          font-size: clamp(34px, 5vw, 56px);
          line-height: 1.28;
          letter-spacing: -0.05em;
        }

        .sectionTitle h2 em {
          color: #f26419;
          font-style: normal;
        }

        .sectionTitle > p {
          max-width: 670px;
          margin: 22px 0 0;
          color: #667084;
          font-size: 14px;
          line-height: 1.85;
        }

        .centered {
          text-align: center;
        }

        .centered > p {
          margin-right: auto;
          margin-left: auto;
        }

        .introSection {
          padding: 110px 0;
          background: #fff;
        }

        .listingPlaceGrid {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 54px;
        }

        .listingPlaceCard {
          position: relative;
          min-height: 265px;
          overflow: hidden;
          padding: 26px;
          border: 1px solid;
          border-radius: 19px;
          text-align: left;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .listingPlaceCard:hover {
          transform: translateY(-4px);
          box-shadow:
            0 17px 35px
            rgba(28, 35, 49, 0.09);
        }

        .listingPlaceCard.orange {
          border-color: #f4c4a7;
          background: #fff5ed;
        }

        .listingPlaceCard.blue {
          border-color: #b8d0eb;
          background: #f1f7ff;
        }

        .listingPlaceCard.green {
          border-color: #b8d9c2;
          background: #f0faf3;
        }

        .listingPlaceCard.purple {
          border-color: #cdbfea;
          background: #f7f3ff;
        }

        .listingPlaceCard.pink {
          border-color: #ebbed3;
          background: #fff3f8;
        }

        .listingPlaceCard.yellow {
          border-color: #ebd39d;
          background: #fff9eb;
        }

        .placeTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .placeNumber {
          color: rgba(23, 36, 59, 0.25);
          font-size: 22px;
          font-weight: 1000;
        }

        .placeIcon {
          font-size: 37px;
        }

        .listingPlaceCard h3 {
          margin: 31px 0 12px;
          font-size: 19px;
        }

        .listingPlaceCard p {
          margin: 0;
          color: #667084;
          font-size: 13px;
          line-height: 1.8;
        }

        .listingPlaceCard small {
          display: block;
          margin-top: 13px;
          color: #9a765f;
          font-size: 9px;
          line-height: 1.6;
        }

        .previewSection {
          padding: 115px 0;
          background:
            linear-gradient(
              180deg,
              #fffaf4 0%,
              #fff4e7 100%
            );
        }

        .previewLayout {
          display: grid;
          grid-template-columns:
            minmax(0, 0.8fr)
            minmax(480px, 1.2fr);
          align-items: center;
          gap: 80px;
        }

        .previewText > p {
          margin: 27px 0;
          color: #667084;
          font-size: 14px;
          line-height: 1.9;
        }

        .previewText ul {
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .previewText li {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #334058;
          font-size: 13px;
          font-weight: 800;
        }

        .previewText li span {
          width: 25px;
          height: 25px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #f26419;
          color: #fff;
          font-size: 11px;
        }

        .previewNotice {
          display: flex;
          gap: 12px;
          margin-top: 28px;
          padding: 16px;
          border: 1px solid #efd1b9;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.6);
        }

        .previewNotice > span {
          width: 27px;
          height: 27px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #f26419;
          color: #fff;
          font-weight: 900;
        }

        .previewNotice p {
          margin: 2px 0 0;
          color: #856148;
          font-size: 11px;
          line-height: 1.65;
        }

        .previewVisual .listingPreview {
          transform: rotate(-1deg);
        }

        .problemSection {
          padding: 115px 0;
          background:
            linear-gradient(
              180deg,
              #fff 0%,
              #f3fbf6 100%
            );
        }

        .problemGroup {
          margin-top: 55px;
        }

        .groupTitle {
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 0 auto 22px;
          padding: 10px 23px;
          border-radius: 999px;
          color: #fff;
          font-size: 13px;
          font-weight: 900;
        }

        .orangeTitle {
          background: #ed6925;
        }

        .greenTitle {
          background: #27865a;
        }

        .problemGrid {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .problemCard {
          min-height: 270px;
          padding: 25px;
          border: 1px solid;
          border-radius: 18px;
          background: #fff;
          text-align: left;
          box-shadow:
            0 10px 27px
            rgba(29, 40, 55, 0.05);
        }

        .orangeProblem {
          border-color: #f0cab4;
          border-top: 5px solid #ed6925;
        }

        .greenProblem {
          border-color: #bad9c6;
          border-top: 5px solid #27865a;
        }

        .problemTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .problemNumber {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #ed6925;
          color: #fff;
          font-size: 12px;
          font-weight: 1000;
        }

        .greenProblem .problemNumber {
          background: #27865a;
        }

        .problemIcon {
          font-size: 34px;
        }

        .problemCard h3 {
          margin: 28px 0 13px;
          color: #29364e;
          font-size: 18px;
          line-height: 1.55;
        }

        .problemCard p {
          margin: 0;
          color: #6b7485;
          font-size: 13px;
          line-height: 1.82;
        }

        .problemConclusion {
          display: grid;
          gap: 7px;
          margin-top: 35px;
          padding: 25px;
          border-radius: 16px;
          background:
            linear-gradient(
              135deg,
              #17243b,
              #253b5b
            );
          color: #fff;
          text-align: center;
        }

        .problemConclusion span {
          color: #ffb879;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .problemConclusion strong {
          font-size: 17px;
          line-height: 1.6;
        }

        .freeSection {
          position: relative;
          overflow: hidden;
          padding: 115px 0;
          background: #f0faf3;
        }

        .freeDecoration {
          position: absolute;
          border-radius: 50%;
          background: rgba(39, 134, 90, 0.08);
        }

        .freeDecorationOne {
          top: -150px;
          right: -110px;
          width: 390px;
          height: 390px;
        }

        .freeDecorationTwo {
          bottom: -120px;
          left: -90px;
          width: 290px;
          height: 290px;
        }

        .freeHeading {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 43px;
          text-align: left;
        }

        .freeStamp {
          width: 145px;
          height: 145px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          align-content: center;
          gap: 3px;
          border: 7px solid #fff;
          border-radius: 50%;
          background: #27865a;
          box-shadow:
            0 17px 38px
            rgba(39, 134, 90, 0.18);
          color: #fff;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.15em;
          transform: rotate(-7deg);
        }

        .freeStamp strong {
          font-size: 31px;
          line-height: 1;
          letter-spacing: 0;
        }

        .freeHeading .sectionTitle h2 em {
          color: #27865a;
        }

        .freeFeatureGrid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 54px;
        }

        .freeFeatureGrid article {
          display: grid;
          grid-template-columns:
            58px minmax(0, 1fr) 30px;
          align-items: center;
          gap: 17px;
          min-height: 118px;
          padding: 20px;
          border: 1px solid #cde2d4;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.86);
          box-shadow:
            0 8px 25px
            rgba(35, 82, 55, 0.05);
        }

        .freeFeatureIcon {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: #e2f4e8;
          font-size: 27px;
        }

        .freeFeatureGrid h3 {
          margin: 0 0 7px;
          color: #24543b;
          font-size: 16px;
        }

        .freeFeatureGrid p {
          margin: 0;
          color: #67776d;
          font-size: 11px;
          line-height: 1.7;
        }

        .checkMark {
          width: 28px;
          height: 28px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #27865a;
          color: #fff;
          font-size: 12px;
          font-weight: 900;
        }

        .futureNote {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 22px;
          padding: 18px 21px;
          border-radius: 13px;
          background: #dff1e5;
        }

        .futureNote span {
          flex: 0 0 auto;
          padding: 6px 10px;
          border-radius: 999px;
          background: #27865a;
          color: #fff;
          font-size: 9px;
          font-weight: 900;
        }

        .futureNote p {
          margin: 0;
          color: #557161;
          font-size: 11px;
          line-height: 1.7;
        }

        .categorySection {
          padding: 115px 0;
          background: #fffaf2;
        }

        .eventCategoryGrid {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 17px;
          margin-top: 52px;
        }

        .eventCategoryGrid article {
          position: relative;
          min-height: 250px;
          overflow: hidden;
          padding: 25px;
          border: 1px solid #eedec9;
          border-radius: 18px;
          background: #fff;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .eventCategoryGrid article:hover {
          transform: translateY(-4px);
          box-shadow:
            0 16px 32px
            rgba(66, 48, 26, 0.08);
        }

        .eventCategoryIcon {
          width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
          border-radius: 17px;
          background: #fff0dc;
          font-size: 29px;
        }

        .eventCategoryGrid h3 {
          margin: 21px 0 11px;
          color: #29364c;
          font-size: 17px;
          line-height: 1.5;
        }

        .eventCategoryGrid p {
          margin: 0;
          color: #6d7585;
          font-size: 12px;
          line-height: 1.78;
        }

        .categoryArrow {
          position: absolute;
          right: 18px;
          bottom: 15px;
          color: #f26419;
          font-size: 21px;
          font-weight: 900;
        }

        .requiredSection {
          padding: 115px 0;
          background: #fff;
        }

        .requiredLayout {
          display: grid;
          grid-template-columns:
            minmax(300px, 0.65fr)
            minmax(0, 1.35fr);
          align-items: start;
          gap: 70px;
        }

        .requiredHeading {
          position: sticky;
          top: 110px;
        }

        .smallLineButton {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 300px;
          margin-top: 27px;
          padding: 15px 18px;
          border-radius: 11px;
          background: #08b84e;
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 900;
        }

        .requiredGrid {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 13px;
        }

        .requiredGrid article {
          display: flex;
          align-items: center;
          gap: 16px;
          min-height: 108px;
          padding: 19px;
          border: 1px solid #e7e5df;
          border-radius: 15px;
          background: #fafaf8;
        }

        .requiredGrid article > span {
          width: 43px;
          height: 43px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #17243b;
          color: #fff;
          font-size: 11px;
          font-weight: 900;
        }

        .requiredGrid h3 {
          margin: 0 0 6px;
          color: #29364d;
          font-size: 15px;
        }

        .requiredGrid p {
          margin: 0;
          color: #777e8b;
          font-size: 11px;
          line-height: 1.65;
        }

        .stepSection {
          padding: 115px 0;
          background:
            linear-gradient(
              180deg,
              #fff7ed,
              #fffdf9
            );
        }

        .stepGrid {
          display: flex;
          align-items: stretch;
          margin-top: 53px;
        }

        .stepWrapper {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .stepCard {
          flex: 1;
          min-height: 290px;
          padding: 25px;
          border: 1px solid #f0d5bd;
          border-radius: 18px;
          background: #fff;
          text-align: center;
        }

        .stepNumber {
          color: #f26419;
          font-size: 9px;
          font-weight: 1000;
          letter-spacing: 0.13em;
        }

        .stepIcon {
          width: 78px;
          height: 78px;
          display: grid;
          place-items: center;
          margin: 25px auto 19px;
          border-radius: 50%;
          background: #fff0df;
          font-size: 35px;
        }

        .stepCard h3 {
          margin: 0 0 12px;
          color: #29364c;
          font-size: 18px;
        }

        .stepCard p {
          margin: 0;
          color: #6d7585;
          font-size: 12px;
          line-height: 1.8;
        }

        .stepArrow {
          width: 42px;
          flex: 0 0 auto;
          color: #e8a36f;
          text-align: center;
          font-size: 28px;
          font-weight: 900;
        }

        .centeredButton {
          display: grid;
          width: min(430px, 100%);
          margin: 43px auto 0;
        }

        .ruleSection {
          padding: 115px 0;
          background: #edf5ff;
        }

        .ruleLayout {
          display: grid;
          grid-template-columns:
            minmax(340px, 0.75fr)
            minmax(0, 1.25fr);
          align-items: center;
          gap: 75px;
        }

        .ruleVisual {
          min-height: 440px;
          display: grid;
          place-items: center;
          align-content: center;
          gap: 22px;
          border-radius: 28px;
          background:
            radial-gradient(
              circle at 50% 30%,
              rgba(255, 255, 255, 0.25),
              transparent 35%
            ),
            linear-gradient(
              145deg,
              #173a62,
              #284f80
            );
          box-shadow:
            0 25px 55px
            rgba(23, 58, 98, 0.2);
          color: #fff;
          text-align: center;
        }

        .shield {
          width: 125px;
          height: 145px;
          display: grid;
          place-items: center;
          clip-path:
            polygon(
              50% 0%,
              92% 15%,
              85% 70%,
              50% 100%,
              15% 70%,
              8% 15%
            );
          background: #fff;
        }

        .shield span {
          width: 55px;
          height: 55px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #27865a;
          color: #fff;
          font-size: 28px;
          font-weight: 900;
        }

        .ruleVisualText {
          display: grid;
          gap: 9px;
        }

        .ruleVisualText small {
          color: #bcd3eb;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.2em;
        }

        .ruleVisualText strong {
          font-size: 24px;
          line-height: 1.5;
        }

        .ruleContent ul {
          display: grid;
          gap: 10px;
          margin: 28px 0 0;
          padding: 0;
          list-style: none;
        }

        .ruleContent li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 15px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.75);
          color: #445267;
          font-size: 12px;
          font-weight: 700;
        }

        .ruleContent li span {
          width: 25px;
          height: 25px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #d96060;
          color: #fff;
          font-size: 11px;
          font-weight: 900;
        }

        .ruleNote {
          margin: 17px 0 0;
          color: #718099;
          font-size: 10px;
          line-height: 1.7;
        }

        .faqSection {
          padding: 115px 0;
          background: #fff;
        }

        .faqLayout {
          display: grid;
          grid-template-columns:
            minmax(260px, 0.55fr)
            minmax(0, 1.45fr);
          gap: 70px;
        }

        .faqHeading {
          position: relative;
        }

        .faqCharacter {
          width: 125px;
          height: 125px;
          display: grid;
          place-items: center;
          margin-top: 35px;
          border-radius: 42% 58% 50% 50%;
          background: #fff0df;
          transform: rotate(-7deg);
        }

        .faqCharacter span {
          color: #f26419;
          font-size: 63px;
          font-weight: 1000;
          transform: rotate(7deg);
        }

        .faqList {
          display: grid;
          gap: 11px;
        }

        .faqList details {
          overflow: hidden;
          border: 1px solid #e5e4df;
          border-radius: 14px;
          background: #fafaf8;
        }

        .faqList summary {
          display: grid;
          grid-template-columns:
            43px minmax(0, 1fr) 28px;
          align-items: center;
          gap: 13px;
          padding: 18px;
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
          font-size: 10px;
          font-weight: 900;
        }

        .faqList summary strong {
          color: #303d53;
          font-size: 13px;
          line-height: 1.6;
        }

        .faqPlus {
          color: #f26419;
          text-align: center;
          font-size: 20px;
          font-weight: 900;
        }

        .faqAnswer {
          display: grid;
          grid-template-columns:
            40px minmax(0, 1fr);
          gap: 13px;
          padding: 0 18px 19px;
        }

        .faqAnswer > span {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #f26419;
          color: #fff;
          font-size: 12px;
          font-weight: 900;
        }

        .faqAnswer p {
          margin: 7px 0 0;
          color: #6d7585;
          font-size: 12px;
          line-height: 1.8;
        }

        .finalSection {
          position: relative;
          overflow: hidden;
          padding: 115px 0;
          background:
            linear-gradient(
              135deg,
              #ef5b0c,
              #f58433
            );
          color: #fff;
        }

        .finalShape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
        }

        .finalShapeOne {
          top: -150px;
          right: -80px;
          width: 390px;
          height: 390px;
        }

        .finalShapeTwo {
          bottom: -120px;
          left: -80px;
          width: 300px;
          height: 300px;
        }

        .finalContainer {
          position: relative;
          z-index: 1;
          width: min(800px, calc(100% - 40px));
          margin: 0 auto;
          text-align: center;
        }

        .finalLabel {
          margin-right: auto;
          margin-left: auto;
          border-color: rgba(255, 255, 255, 0.35);
          background: rgba(255, 255, 255, 0.13);
          color: #fff0e5;
        }

        .finalContainer h2 {
          margin: 0;
          font-size: clamp(40px, 6vw, 66px);
          line-height: 1.25;
          letter-spacing: -0.055em;
        }

        .finalContainer h2 span {
          color: #fff4a8;
        }

        .finalContainer > p {
          margin: 27px auto 0;
          color: #ffeadc;
          font-size: 14px;
          line-height: 1.9;
        }

        .finalPoints {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 9px;
          margin: 27px 0;
        }

        .finalPoints span {
          padding: 8px 13px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 10px;
          font-weight: 900;
        }

        .finalLineButton {
          width: min(500px, 100%);
          margin: 0 auto;
          background: #fff;
          box-shadow:
            0 17px 40px
            rgba(140, 55, 7, 0.2);
          color: #e95a0c;
          font-size: 15px;
          font-weight: 900;
        }

        .finalLineButton .lineIcon {
          background: #08b84e;
          color: #fff;
        }

        .finalContainer > small {
          display: block;
          margin-top: 15px;
          color: #ffe4d2;
          font-size: 10px;
        }

        .footer {
          padding: 35px 0;
          background: #17243b;
          color: #b8c0ce;
        }

        .footerInner {
          width: min(1120px, calc(100% - 40px));
          display: grid;
          grid-template-columns:
            1fr auto 1fr;
          align-items: center;
          gap: 25px;
          margin: 0 auto;
          font-size: 10px;
        }

        .footerLogo {
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 900;
        }

        .footerLinks {
          display: flex;
          gap: 20px;
        }

        .footerLinks a {
          color: #d5dae3;
          text-decoration: none;
          font-size: 10px;
          font-weight: 700;
        }

        .footerInner > span {
          text-align: right;
        }

        .floatingLineButton {
          position: fixed;
          z-index: 200;
          right: 20px;
          bottom: 20px;
          width: 78px;
          height: 78px;
          display: grid;
          place-items: center;
          align-content: center;
          gap: 2px;
          border: 5px solid #fff;
          border-radius: 50%;
          background: #08b84e;
          box-shadow:
            0 16px 40px
            rgba(8, 184, 78, 0.34);
          color: #fff;
          text-decoration: none;
        }

        .floatingLineButton span {
          font-size: 9px;
          font-weight: 1000;
        }

        .floatingLineButton strong {
          font-size: 11px;
        }

        @media (max-width: 1000px) {
          .heroContainer,
          .previewLayout,
          .requiredLayout,
          .ruleLayout,
          .faqLayout {
            grid-template-columns: 1fr;
          }

          .heroCopy {
            max-width: 700px;
          }

          .heroVisual {
            width: min(650px, 100%);
            margin: 30px auto 0;
          }

          .requiredHeading {
            position: static;
          }

          .problemGrid,
          .listingPlaceGrid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .eventCategoryGrid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .stepGrid {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
            gap: 15px;
          }

          .stepWrapper {
            display: block;
          }

          .stepArrow {
            display: none;
          }

          .faqHeading {
            display: grid;
            grid-template-columns:
              1fr auto;
            align-items: center;
          }
        }

        @media (max-width: 700px) {
          .headerInner {
            width: calc(100% - 24px);
            min-height: 64px;
          }

          .siteLogo {
            font-size: 16px;
          }

          .backButton {
            display: none;
          }

          .headerLineButton {
            padding: 10px 14px;
          }

          .heroContainer,
          .sectionContainer,
          .footerInner {
            width: calc(100% - 24px);
          }

          .heroContainer {
            grid-template-columns: 1fr;
            min-height: 0;
            gap: 45px;
            padding: 65px 0 75px;
          }

          .heroCopy h1 {
            font-size: 44px;
          }

          .heroDescription {
            font-size: 13px;
          }

          .heroPoints {
            display: grid;
            grid-template-columns:
              repeat(3, minmax(0, 1fr));
          }

          .heroPoints div {
            display: grid;
            justify-items: center;
            gap: 4px;
            text-align: center;
          }

          .lineButton {
            width: 100%;
            min-width: 0;
          }

          .orangeCircle {
            top: -34px;
            right: -4px;
            width: 94px;
            height: 94px;
          }

          .orangeCircle strong {
            font-size: 26px;
          }

          .floatingTag {
            display: none;
          }

          .listingPreview {
            border-width: 6px;
            border-radius: 17px;
            transform: none;
          }

          .previewContent {
            padding: 14px;
          }

          .previewCards {
            grid-template-columns: 1fr;
          }

          .previewSideCards {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));
          }

          .previewSideCards div {
            padding: 10px;
          }

          .previewSideCards span {
            font-size: 18px;
          }

          .sectionTitle h2 {
            font-size: 34px;
          }

          .introSection,
          .previewSection,
          .problemSection,
          .freeSection,
          .categorySection,
          .requiredSection,
          .stepSection,
          .ruleSection,
          .faqSection,
          .finalSection {
            padding: 78px 0;
          }

          .listingPlaceGrid,
          .problemGrid,
          .freeFeatureGrid,
          .eventCategoryGrid,
          .requiredGrid,
          .stepGrid {
            grid-template-columns: 1fr;
          }

          .listingPlaceCard,
          .problemCard,
          .eventCategoryGrid article {
            min-height: auto;
          }

          .previewLayout,
          .requiredLayout,
          .ruleLayout,
          .faqLayout {
            gap: 45px;
          }

          .previewVisual .listingPreview {
            transform: none;
          }

          .freeHeading {
            display: grid;
            justify-items: center;
            gap: 25px;
            text-align: center;
          }

          .freeHeading .sectionTitle > p {
            margin-right: auto;
            margin-left: auto;
          }

          .freeStamp {
            width: 120px;
            height: 120px;
          }

          .freeFeatureGrid article {
            grid-template-columns:
              52px minmax(0, 1fr) 27px;
          }

          .futureNote {
            align-items: flex-start;
          }

          .requiredGrid article {
            min-height: 95px;
          }

          .stepCard {
            min-height: auto;
          }

          .ruleVisual {
            min-height: 350px;
          }

          .faqHeading {
            grid-template-columns: 1fr;
          }

          .faqCharacter {
            display: none;
          }

          .finalContainer {
            width: calc(100% - 24px);
          }

          .finalContainer h2 {
            font-size: 39px;
          }

          .finalLineButton {
            grid-template-columns:
              42px minmax(0, 1fr) 20px;
            padding: 13px 16px;
            font-size: 13px;
          }

          .footerInner {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
          }

          .footerInner > span {
            text-align: center;
          }

          .floatingLineButton {
            right: 13px;
            bottom: 13px;
            width: 67px;
            height: 67px;
          }
        }

        @media (max-width: 430px) {
          .heroCopy h1 {
            font-size: 39px;
          }

          .heroPoints strong {
            font-size: 9px;
          }

          .sampleImage {
            min-height: 145px;
          }

          .previewSideCards {
            grid-template-columns: 1fr;
          }

          .sectionTitle h2 {
            font-size: 31px;
          }

          .problemConclusion strong {
            font-size: 14px;
          }

          .freeFeatureGrid article {
            grid-template-columns:
              48px minmax(0, 1fr);
          }

          .checkMark {
            display: none;
          }

          .futureNote {
            display: grid;
          }

          .faqList summary {
            grid-template-columns:
              37px minmax(0, 1fr) 23px;
            padding: 14px;
          }

          .faqNumber,
          .faqAnswer > span {
            width: 35px;
            height: 35px;
          }
        }
      `}</style>
    </main>
  );
}
