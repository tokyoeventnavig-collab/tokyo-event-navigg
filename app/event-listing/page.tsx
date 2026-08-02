import Link from "next/link";

export const metadata = {
  title: "イベント掲載について｜東京イベントナビ",
  description:
    "あなたのイベントをもっと多くの人へ。東京イベントナビでは、東京都内で開催されるイベントの掲載を受け付けています。",
};

const LINE_URL = "https://lin.ee/P179zyp";

const eventCategories = [
  {
    icon: "🍻",
    title: "飲み会・交流会",
    text: "友達づくり、恋活、社会人交流会、異業種交流など。",
    image:
      "https://unsplash.com/photos/pB2cmALuoR4/download?force=true&w=1200",
  },
  {
    icon: "☕",
    title: "カフェ会・ランチ会",
    text: "少人数で話せる交流会や、食事を楽しむイベント。",
    image:
      "https://unsplash.com/photos/SsRG9omIEhg/download?force=true&w=1200",
  },
  {
    icon: "🎲",
    title: "ボードゲーム・ゲーム会",
    text: "初心者歓迎のボードゲーム会やカードゲーム会。",
    image:
      "https://unsplash.com/photos/AHX0MTAnRdY/download?force=true&w=1200",
  },
  {
    icon: "📊",
    title: "セミナー・勉強会",
    text: "ビジネス、学習、スキルアップを目的としたイベント。",
    image:
      "https://unsplash.com/photos/mSUMwuevjKY/download?force=true&w=1200",
  },
  {
    icon: "🏃",
    title: "スポーツ・アウトドア",
    text: "ランニング、ヨガ、ゴルフ、フットサル、登山など。",
    image:
      "https://unsplash.com/photos/n4Gj7Z4J8lo/download?force=true&w=1200",
  },
  {
    icon: "🎨",
    title: "趣味・体験イベント",
    text: "料理、写真、音楽、ものづくり、ワークショップなど。",
    image:
      "https://unsplash.com/photos/xegoN4Pw90o/download?force=true&w=1200",
  },
  {
    icon: "🌏",
    title: "語学・国際交流",
    text: "語学学習、海外文化、外国人参加者との交流イベント。",
    image:
      "https://unsplash.com/photos/7sWbzy_-5Uw/download?force=true&w=1200",
  },
  {
    icon: "✨",
    title: "その他",
    text: "ライブ、マルシェ、上映会などもご相談いただけます。",
    image:
      "https://unsplash.com/photos/T00OaDcTY3c/download?force=true&w=1200",
  },
];

const worries = [
  {
    number: "01",
    title: "良いイベントなのに、知られていない",
    text: "内容には自信があるのに、イベント情報を届けられる場所が少ない。",
    image:
      "https://unsplash.com/photos/25BuxjcTL-I/download?force=true&w=1200",
  },
  {
    number: "02",
    title: "毎回、自分から声をかけ続けている",
    text: "SNS投稿や個別連絡だけでは、告知できる人数に限界がある。",
    image:
      "https://unsplash.com/photos/QVpr4BmTUNI/download?force=true&w=1200",
  },
  {
    number: "03",
    title: "初開催で申込みが入るか不安",
    text: "実績が少ないため、興味を持ってもらえても参加につながりにくい。",
    image:
      "https://unsplash.com/photos/99Z9Op80ECE/download?force=true&w=1200",
  },
];

const burdens = [
  {
    number: "04",
    title: "開催直前まで人数が読めない",
    text: "会場、料理、スタッフの準備をどの程度すべきか判断しにくい。",
    image:
      "https://unsplash.com/photos/HdryXuY8H6s/download?force=true&w=1200",
  },
  {
    number: "05",
    title: "準備と告知を両立できない",
    text: "企画や当日準備をしながら、告知や問い合わせにも追われてしまう。",
    image:
      "https://unsplash.com/photos/a3FFUDvGFC8/download?force=true&w=1200",
  },
  {
    number: "06",
    title: "情報をきれいにまとめられない",
    text: "日時、会場、参加条件などが分散し、参加者に伝わりにくい。",
    image:
      "https://unsplash.com/photos/DP3kuPAbXnA/download?force=true&w=1200",
  },
];

const benefits = [
  {
    number: "01",
    title: "新しい参加者へ届けられる",
    text: "普段の告知だけでは接点がなかった、東京でイベントを探している方へ情報を届けます。",
    image:
      "https://unsplash.com/photos/pB2cmALuoR4/download?force=true&w=1200",
  },
  {
    number: "02",
    title: "告知の入口を増やせる",
    text: "新着、今週、カレンダー、カテゴリーなど、さまざまな探し方から発見されます。",
    image:
      "https://unsplash.com/photos/SsRG9omIEhg/download?force=true&w=1200",
  },
  {
    number: "03",
    title: "イベントの信頼感が高まる",
    text: "必要な情報を整理した専用ページで、初めての方にも安心して内容を確認してもらえます。",
    image:
      "https://unsplash.com/photos/AHX0MTAnRdY/download?force=true&w=1200",
  },
  {
    number: "04",
    title: "イベントの魅力を伝えられる",
    text: "フライヤーと写真、概要、参加条件を掲載し、イベントの雰囲気まで分かりやすく伝えます。",
    image:
      "https://unsplash.com/photos/mSUMwuevjKY/download?force=true&w=1200",
  },
];

const includedFeatures = [
  {
    icon: "🖼️",
    title: "フライヤー掲載",
    text: "イベントの雰囲気が伝わる画像を大きく掲載します。",
  },
  {
    icon: "📄",
    title: "イベント専用ページ",
    text: "イベントごとの詳細ページを作成します。",
  },
  {
    icon: "📅",
    title: "日時・カレンダー掲載",
    text: "開催日と時間をカレンダーへ反映します。",
  },
  {
    icon: "📍",
    title: "会場・住所掲載",
    text: "会場名と住所を分かりやすく表示します。",
  },
  {
    icon: "🗂️",
    title: "カテゴリー検索",
    text: "ジャンルに興味のある方から見つけてもらえます。",
  },
  {
    icon: "🔗",
    title: "申込先へのリンク",
    text: "LINEや申込フォームへ直接案内します。",
  },
];

const requiredInformation = [
  "イベント名",
  "フライヤー・告知画像",
  "開催日",
  "開始時間・終了時間",
  "会場名・会場住所",
  "イベント概要",
  "参加条件",
  "申込先URL",
  "主催者名・団体名",
];

const steps = [
  {
    number: "01",
    icon: "💬",
    title: "LINEで相談",
    text: "公式LINEを追加し、「イベント掲載希望」とお送りください。",
  },
  {
    number: "02",
    icon: "📎",
    title: "イベント情報を送付",
    text: "フライヤー、日時、会場、概要などをお送りいただきます。",
  },
  {
    number: "03",
    icon: "✅",
    title: "掲載内容を確認",
    text: "掲載ページの内容や申込先に間違いがないか確認します。",
  },
  {
    number: "04",
    icon: "🚀",
    title: "掲載スタート",
    text: "東京イベントナビの一覧、カレンダー、カテゴリーへ掲載します。",
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
      "東京都内で開催される飲み会、交流会、趣味イベント、スポーツ、セミナーなどが対象です。",
  },
  {
    question: "情報が揃っていなくても相談できますか？",
    answer:
      "はい。開催内容が完全に決まっていない段階でもご相談いただけます。",
  },
  {
    question: "人気イベントに必ず掲載されますか？",
    answer:
      "人気イベント欄への掲載は保証していません。開催時期や掲載内容により表示欄は異なります。",
  },
  {
    question: "掲載後に内容を変更できますか？",
    answer:
      "開催日時や会場などに変更がある場合は、公式LINEからご連絡ください。",
  },
];

function LineButton({
  label = "掲載についてLINEで相談する",
  note = "相談だけでも問題ありません",
}: {
  label?: string;
  note?: string;
}) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noreferrer"
      className="lineButton"
    >
      <span className="lineLogo">LINE</span>

      <span className="lineButtonText">
        <strong>{label}</strong>
        <small>{note}</small>
      </span>

      <span className="lineArrow">→</span>
    </a>
  );
}

function ListingMockup() {
  return (
    <div className="mockupArea">
      <div className="browserMockup">
        <div className="browserTop">
          <div className="browserDots">
            <span />
            <span />
            <span />
          </div>

          <div className="browserUrl">
            tokyo-event-navi.jp
          </div>
        </div>

        <div className="browserContent">
          <div className="browserSectionTitle">
            <div>
              <small>TOKYO EVENT NAVI</small>
              <strong>人気イベント</strong>
            </div>

            <span>EVENT</span>
          </div>

          <div className="browserCards">
            <div className="mainEventCard">
              <img
                src="https://unsplash.com/photos/n4Gj7Z4J8lo/download?force=true&w=1200"
                alt=""
              />

              <div className="mainEventBody">
                <span>飲み会・交流会</span>
                <strong>
                  20〜30代限定
                  <br />
                  東京交流イベント
                </strong>

                <p>📅 8月22日（土）</p>
                <p>🕐 18:00〜20:00</p>
                <p>📍 新宿イベントスペース</p>

                <div>詳細を見る</div>
              </div>
            </div>

            <div className="browserSide">
              <article>
                <span>🆕</span>
                <strong>新着イベント</strong>
                <small>新しく掲載された情報</small>
              </article>

              <article>
                <span>📅</span>
                <strong>今週のイベント</strong>
                <small>近日開催のイベント</small>
              </article>

              <article>
                <span>🗂️</span>
                <strong>カテゴリー検索</strong>
                <small>興味のあるジャンルから</small>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="phoneMockup">
        <div className="phoneSpeaker" />

        <div className="phoneScreen">
          <img
            src="https://unsplash.com/photos/xegoN4Pw90o/download?force=true&w=1200"
            alt=""
          />

          <span>飲み会・交流会</span>

          <strong>
            東京交流
            <br />
            イベント
          </strong>

          <p>8月22日 18:00〜</p>

          <div>詳細を見る</div>
        </div>
      </div>

      <div className="mockupBadge mockupBadgeCalendar">
        📅 カレンダー掲載
      </div>

      <div className="mockupBadge mockupBadgeCategory">
        🗂️ カテゴリー検索
      </div>

      <div className="freeBadge">
        基本掲載
        <strong>無料</strong>
      </div>
    </div>
  );
}

export default function EventListingPage() {
  return (
    <main className="listingPage">
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
            <div className="audienceLabel">
              <span>📣</span>
              東京でイベントを主催している方へ
            </div>

            <p className="englishLabel">
              EVENT LISTING SERVICE
            </p>

            <h1>
              <span className="heroLineOne">
                あなたのイベントを
              </span>

              <span className="heroLineTwo">
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
                  <strong>専用ページを作成</strong>
                </div>
              </article>

              <article>
                <span>📅</span>
                <div>
                  <small>CALENDAR</small>
                  <strong>カレンダーに掲載</strong>
                </div>
              </article>

              <article>
                <span>🗂️</span>
                <div>
                  <small>CATEGORY</small>
                  <strong>ジャンルから発見</strong>
                </div>
              </article>

              <article>
                <span>🔗</span>
                <div>
                  <small>APPLICATION</small>
                  <strong>申込先へ直接案内</strong>
                </div>
              </article>
            </div>

            <LineButton />
          </div>

          <div className="heroVisual">
            <div className="photoCollage">
              <figure className="photo photoMain">
                <img
                  src="https://unsplash.com/photos/7sWbzy_-5Uw/download?force=true&w=1200"
                  alt="イベントで交流する参加者"
                />
              </figure>

              <figure className="photo photoSubOne">
                <img
                  src="https://unsplash.com/photos/T00OaDcTY3c/download?force=true&w=1200"
                  alt="交流を楽しむ参加者"
                />
              </figure>

              <figure className="photo photoSubTwo">
                <img
                  src="https://unsplash.com/photos/25BuxjcTL-I/download?force=true&w=1200"
                  alt="イベント会場の参加者"
                />
              </figure>

              <div className="heroOrangeBadge">
                掲載
                <strong>無料</strong>
              </div>

              <div className="floatingInfo floatingInfoOne">
                <span>👥</span>
                新しい参加者へ
              </div>

              <div className="floatingInfo floatingInfoTwo">
                <span>📱</span>
                専用ページ作成
              </div>

              <div className="floatingInfo floatingInfoThree">
                <span>📅</span>
                カレンダー掲載
              </div>
            </div>
          </div>
        </div>

        <div className="heroBottom">
          <span>掲載無料</span>
          <span>東京都内のイベント</span>
          <span>相談だけでもOK</span>
          <span>公式LINEで受付</span>
        </div>
      </section>

      <section className="categorySection">
        <div className="container">
          <div className="sectionHeading centered">
            <p>EVENT CATEGORIES</p>

            <h2>
              こんなイベントを
              <span>掲載できます！</span>
            </h2>

            <div className="headingLine" />

            <p className="sectionLead">
              東京で開催される、さまざまなジャンルのイベントに対応しています。
            </p>
          </div>

          <div className="categoryGrid">
            {eventCategories.map((category) => (
              <article key={category.title}>
                <div className="categoryImage">
                  <img
                    src={category.image}
                    alt=""
                  />

                  <span>{category.icon}</span>
                </div>

                <div className="categoryBody">
                  <h3>{category.title}</h3>
                  <p>{category.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="orangeMessage">
            <strong>
              あなたのイベントも、きっと誰かの
              「行きたい！」につながります。
            </strong>

            <span>
              記載のないジャンルもお気軽にご相談ください。
            </span>
          </div>
        </div>
      </section>

      <section className="worrySection">
        <div className="container">
          <div className="sectionHeading centered">
            <p>ORGANIZER PROBLEMS</p>

            <h2>
              イベント集客、
              <span>こんな悩みありませんか？</span>
            </h2>
          </div>

          <div className="worryGroup">
            <div className="groupLabel orangeLabel">
              <span>📣</span>
              告知・認知に関するお悩み
            </div>

            <div className="worryGrid">
              {worries.map((item) => (
                <article
                  className="worryCard orangeCard"
                  key={item.number}
                >
                  <div className="worryImage">
                    <img
                      src={item.image}
                      alt=""
                    />

                    <span>{item.number}</span>
                  </div>

                  <div className="worryBody">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="worryGroup">
            <div className="groupLabel greenLabel">
              <span>⚙️</span>
              運営・準備に関するお悩み
            </div>

            <div className="worryGrid">
              {burdens.map((item) => (
                <article
                  className="worryCard greenCard"
                  key={item.number}
                >
                  <div className="worryImage">
                    <img
                      src={item.image}
                      alt=""
                    />

                    <span>{item.number}</span>
                  </div>

                  <div className="worryBody">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="darkMessage">
            <small>東京イベントナビなら</small>

            <strong>
              イベント情報を整理し、
              もっと多くの人へ届けるお手伝いができます。
            </strong>
          </div>
        </div>
      </section>

      <section className="solutionSection">
        <div className="container">
          <div className="solutionHeading">
            <div>
              <p>HOW IT APPEARS</p>

              <h2>
                掲載後は、
                <br />
                <span>このように表示されます。</span>
              </h2>

              <p className="solutionDescription">
                フライヤー、開催日時、会場、参加条件などを
                一つのページへ整理。TOPページやカレンダー、
                カテゴリーからイベントを見つけてもらえます。
              </p>
            </div>

            <div className="solutionTags">
              <span>人気イベント</span>
              <span>新着イベント</span>
              <span>今週のイベント</span>
              <span>カレンダー</span>
              <span>カテゴリー検索</span>
            </div>
          </div>

          <ListingMockup />

          <p className="listingNotice">
            ※人気イベント欄への表示は保証していません。
            掲載内容や開催時期によって表示される場所が異なります。
          </p>
        </div>
      </section>

      <section className="benefitSection">
        <div className="container">
          <div className="sectionHeading centered">
            <p>MERITS</p>

            <h2>
              東京イベントナビに
              <span>掲載するメリット</span>
            </h2>

            <p className="sectionLead">
              イベントを探している方へ、あなたのイベントの魅力をしっかり届けます。
            </p>
          </div>

          <div className="benefitGrid">
            {benefits.map((benefit) => (
              <article key={benefit.number}>
                <div className="benefitImage">
                  <img
                    src={benefit.image}
                    alt=""
                  />

                  <span>{benefit.number}</span>
                </div>

                <div className="benefitBody">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="supportArea">
            <strong>
              主催者の皆さまをサポートします
            </strong>

            <div>
              <span>💬 困ったときはLINEで相談</span>
              <span>📣 イベントの魅力を整理</span>
              <span>📈 申込みにつながる導線</span>
              <span>🤝 一緒にイベントを盛り上げる</span>
            </div>
          </div>
        </div>
      </section>

      <section className="freeSection">
        <div className="container">
          <div className="freeTop">
            <div className="freeStamp">
              BASIC
              <strong>FREE</strong>
            </div>

            <div className="sectionHeading">
              <p>FREE LISTING</p>

              <h2>
                基本掲載は
                <span>無料です！</span>
              </h2>

              <p className="sectionLead">
                無料掲載には、次の内容が含まれています。
              </p>
            </div>
          </div>

          <div className="includedGrid">
            {includedFeatures.map((feature) => (
              <article key={feature.title}>
                <span className="includedIcon">
                  {feature.icon}
                </span>

                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>

                <span className="includedCheck">
                  ✓
                </span>
              </article>
            ))}
          </div>

          <div className="futurePlan">
            <strong>今後の追加施策について</strong>

            <p>
              SNS投稿、公式LINE配信、優先表示などは、
              今後別途ご案内する場合があります。
            </p>
          </div>
        </div>
      </section>

      <section className="informationSection">
        <div className="container informationLayout">
          <div className="informationPhoto">
            <img
              src="https://unsplash.com/photos/QVpr4BmTUNI/download?force=true&w=1200"
              alt="イベント掲載について打ち合わせする様子"
            />

            <div className="informationPhotoText">
              <small>SUPPORT</small>

              <strong>
                分からない部分は
                <br />
                一緒に確認します。
              </strong>
            </div>
          </div>

          <div className="informationContent">
            <div className="sectionHeading">
              <p>INFORMATION</p>

              <h2>
                掲載時に
                <br />
                <span>ご用意いただくもの</span>
              </h2>

              <p className="sectionLead">
                すべて揃っていなくても問題ありません。
                打ち合わせ時に必要な情報をご案内します。
              </p>
            </div>

            <div className="informationGrid">
              {requiredInformation.map(
                (item, index) => (
                  <article key={item}>
                    <span>
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <strong>{item}</strong>
                  </article>
                ),
              )}
            </div>

            <LineButton
              label="必要な情報をLINEで確認する"
              note="揃っていない段階でもご相談いただけます"
            />
          </div>
        </div>
      </section>

      <section className="stepSection">
        <div className="container">
          <div className="sectionHeading centered">
            <p>HOW TO LIST</p>

            <h2>
              掲載までは
              <span>簡単4ステップ</span>
            </h2>

            <p className="sectionLead">
              公式LINEでご相談いただいた後、順番にご案内します。
            </p>
          </div>

          <div className="stepGrid">
            {steps.map((step, index) => (
              <div
                className="stepWrapper"
                key={step.number}
              >
                <article>
                  <span className="stepLabel">
                    STEP {step.number}
                  </span>

                  <div className="stepIcon">
                    {step.icon}
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>

                {index < steps.length - 1 && (
                  <span className="stepArrow">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="stepLineArea">
            <LineButton />
          </div>
        </div>
      </section>

      <section className="policySection">
        <div className="container policyLayout">
          <div className="policyImage">
            <img
              src="https://unsplash.com/photos/99Z9Op80ECE/download?force=true&w=1200"
              alt="安心してイベントを楽しむ参加者"
            />

            <div className="shieldIcon">
              <span>✓</span>
            </div>
          </div>

          <div className="policyContent">
            <div className="sectionHeading">
              <p>LISTING POLICY</p>

              <h2>
                安心してご利用
                <br />
                <span>いただくために</span>
              </h2>

              <p className="sectionLead">
                参加者が安心してイベントを探せるよう、
                掲載前に内容を確認させていただきます。
              </p>
            </div>

            <ul>
              <li>
                法令や公序良俗に反する内容
              </li>

              <li>
                イベント内容や主催者情報を確認できないもの
              </li>

              <li>
                虚偽または誤解を招く表現を含むもの
              </li>

              <li>
                強引な営業や勧誘を主目的とするもの
              </li>

              <li>
                参加者の安全性に問題があるもの
              </li>
            </ul>

            <p className="policyNote">
              内容によっては、掲載をお断りする場合があります。
            </p>
          </div>
        </div>
      </section>

      <section className="faqSection">
        <div className="container faqLayout">
          <div className="faqHeading">
            <div className="sectionHeading">
              <p>FAQ</p>

              <h2>
                よくある
                <br />
                <span>ご質問</span>
              </h2>
            </div>

            <div className="questionIllustration">
              <span>?</span>

              <small>
                分からないことは
                <br />
                LINEでも質問できます
              </small>
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
        <div className="finalOverlay" />

        <div className="finalContent">
          <p>EVENT LISTING</p>

          <h2>
            あなたのイベントを
            <br />
            <span>もっと多くの人へ。</span>
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
            label="無料で掲載について相談する"
            note="公式LINE追加後「イベント掲載希望」とお送りください"
          />
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <Link href="/" className="footerLogo">
            東京イベントナビ
          </Link>

          <div>
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

          <small>
            © TOKYO EVENT NAVI
          </small>
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

        .listingPage {
          min-height: 100vh;
          overflow: hidden;
          background: #fffdf8;
          color: #17243b;
        }

        img {
          display: block;
          width: 100%;
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
            rgba(255, 253, 248, 0.92);
          backdrop-filter: blur(16px);
        }

        .headerInner {
          width: min(
            1180px,
            calc(100% - 40px)
          );
          min-height: 70px;
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          gap: 25px;
          margin: 0 auto;
        }

        .logo {
          color: #17243b;
          text-decoration: none;
          font-size: 19px;
          font-weight: 900;
        }

        .logo span {
          color: #f26419;
        }

        .header nav {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .header nav a {
          padding: 11px 16px;
          border-radius: 999px;
          color: #303d53;
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
        }

        .header nav .headerLine {
          background: #08b84e;
          color: #fff;
        }

        .hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(255, 166, 74, 0.19),
              transparent 32%
            ),
            radial-gradient(
              circle at 88% 72%,
              rgba(255, 200, 126, 0.31),
              transparent 33%
            ),
            linear-gradient(
              135deg,
              #fff7e9 0%,
              #fffdf9 48%,
              #ffebd1 100%
            );
        }

        .heroDecoration {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .heroDecorationOne {
          top: -160px;
          right: -90px;
          width: 450px;
          height: 450px;
          border:
            90px solid
            rgba(242, 100, 25, 0.07);
        }

        .heroDecorationTwo {
          bottom: -170px;
          left: -120px;
          width: 370px;
          height: 370px;
          background:
            rgba(255, 189, 103, 0.13);
        }

        .heroInner {
          position: relative;
          z-index: 2;
          width: min(
            1220px,
            calc(100% - 48px)
          );
          min-height: 790px;
          display: grid;
          grid-template-columns:
            minmax(500px, 0.95fr)
            minmax(500px, 1.05fr);
          align-items: center;
          gap: 68px;
          margin: 0 auto;
          padding: 80px 0 95px;
        }

        .audienceLabel {
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 13px;
          padding: 8px 14px;
          border-radius: 999px;
          background: #17243b;
          color: #fff;
          font-size: 11px;
          font-weight: 900;
        }

        .englishLabel,
        .sectionHeading > p,
        .solutionHeading > div > p:first-child,
        .finalContent > p:first-child {
          margin: 0 0 14px;
          color: #f26419;
          font-size: 10px;
          font-weight: 1000;
          letter-spacing: 0.2em;
        }

        .heroCopy h1 {
          display: grid;
          gap: 7px;
          margin: 0;
          font-size: clamp(
            51px,
            5.6vw,
            78px
          );
          line-height: 1.12;
          letter-spacing: -0.065em;
        }

        .heroLineOne,
        .heroLineTwo {
          display: block;
          width: max-content;
          max-width: 100%;
          white-space: nowrap;
        }

        .heroLineTwo {
          position: relative;
          z-index: 1;
          color: #f26419;
        }

        .heroLineTwo::before {
          position: absolute;
          z-index: -1;
          right: -7px;
          bottom: 3px;
          left: -4px;
          height: 18px;
          border-radius: 999px;
          background:
            rgba(255, 184, 102, 0.42);
          content: "";
          transform: rotate(-1deg);
        }

        .heroCatch {
          margin: 29px 0 0;
          color: #26354c;
          font-size: 18px;
          line-height: 1.65;
          font-weight: 900;
        }

        .heroDescription {
          max-width: 590px;
          margin: 14px 0 0;
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
          min-height: 67px;
          padding: 11px 12px;
          border:
            1px solid
            rgba(235, 188, 148, 0.65);
          border-radius: 12px;
          background:
            rgba(255, 255, 255, 0.85);
          box-shadow:
            0 7px 22px
            rgba(73, 48, 27, 0.06);
        }

        .heroFeatures article > span {
          width: 41px;
          height: 41px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: #fff0de;
          font-size: 20px;
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
            48px minmax(0, 1fr) 24px;
          align-items: center;
          gap: 14px;
          width: min(
            455px,
            100%
          );
          margin-top: 22px;
          padding: 14px 19px;
          border-radius: 15px;
          background: #08b84e;
          box-shadow:
            0 16px 36px
            rgba(8, 184, 78, 0.23);
          color: #fff;
          text-align: left;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .lineButton:hover {
          transform: translateY(-3px);
          box-shadow:
            0 21px 44px
            rgba(8, 184, 78, 0.3);
        }

        .lineLogo {
          width: 47px;
          height: 47px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #fff;
          color: #08a948;
          font-size: 9px;
          font-weight: 1000;
        }

        .lineButtonText {
          display: grid;
          gap: 3px;
        }

        .lineButtonText strong {
          font-size: 14px;
        }

        .lineButtonText small {
          color:
            rgba(255, 255, 255, 0.8);
          font-size: 9px;
          line-height: 1.4;
        }

        .lineArrow {
          font-size: 19px;
          font-weight: 900;
        }

        .heroVisual {
          min-width: 0;
        }

        .photoCollage {
          position: relative;
          min-height: 565px;
        }

        .photo {
          position: absolute;
          overflow: hidden;
          border: 8px solid #fff;
          border-radius: 24px;
          background: #fff;
          box-shadow:
            0 25px 65px
            rgba(30, 36, 47, 0.2);
        }

        .photo img {
          height: 100%;
          object-fit: cover;
        }

        .photoMain {
          top: 55px;
          right: 20px;
          width: 83%;
          height: 420px;
          transform: rotate(2deg);
        }

        .photoSubOne {
          z-index: 2;
          bottom: 5px;
          left: 0;
          width: 46%;
          height: 205px;
          transform: rotate(-5deg);
        }

        .photoSubTwo {
          z-index: 3;
          right: -5px;
          bottom: -10px;
          width: 41%;
          height: 190px;
          transform: rotate(5deg);
        }

        .heroOrangeBadge {
          position: absolute;
          z-index: 7;
          top: 0;
          right: -8px;
          width: 122px;
          height: 122px;
          display: grid;
          place-items: center;
          align-content: center;
          border: 8px solid #fff7e8;
          border-radius: 50%;
          background:
            linear-gradient(
              145deg,
              #ff762c,
              #ee5510
            );
          box-shadow:
            0 17px 40px
            rgba(242, 100, 25, 0.3);
          color: #fff;
          font-size: 12px;
          font-weight: 900;
          transform: rotate(7deg);
        }

        .heroOrangeBadge strong {
          font-size: 34px;
          line-height: 1;
        }

        .floatingInfo {
          position: absolute;
          z-index: 8;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 11px 14px;
          border-radius: 11px;
          background: #fff;
          box-shadow:
            0 15px 35px
            rgba(32, 39, 54, 0.16);
          color: #27354c;
          font-size: 10px;
          font-weight: 900;
        }

        .floatingInfo span {
          font-size: 17px;
        }

        .floatingInfoOne {
          top: 90px;
          left: -30px;
          transform: rotate(-4deg);
        }

        .floatingInfoTwo {
          top: 245px;
          right: -35px;
          transform: rotate(4deg);
        }

        .floatingInfoThree {
          bottom: 120px;
          left: 34%;
          transform: rotate(-2deg);
        }

        .heroBottom {
          position: relative;
          z-index: 4;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 13px;
          padding: 18px 25px;
          background:
            linear-gradient(
              90deg,
              #ef5f16,
              #ffa448,
              #f4cc63,
              #61b981
            );
        }

        .heroBottom span {
          padding: 8px 14px;
          border:
            1px solid
            rgba(255, 255, 255, 0.4);
          border-radius: 999px;
          background:
            rgba(255, 255, 255, 0.18);
          color: #fff;
          font-size: 11px;
          font-weight: 900;
        }

        .categorySection,
        .worrySection,
        .solutionSection,
        .benefitSection,
        .freeSection,
        .informationSection,
        .stepSection,
        .policySection,
        .faqSection {
          padding: 110px 0;
        }

        .categorySection {
          background: #fff9ef;
        }

        .sectionHeading h2,
        .solutionHeading h2 {
          margin: 0;
          color: #17243b;
          font-size: clamp(
            34px,
            5vw,
            56px
          );
          line-height: 1.28;
          letter-spacing: -0.05em;
        }

        .sectionHeading h2 span,
        .solutionHeading h2 span {
          color: #f26419;
        }

        .sectionHeading.centered {
          text-align: center;
        }

        .headingLine {
          width: 70px;
          height: 5px;
          margin: 19px auto 0;
          border-radius: 999px;
          background: #f26419;
        }

        .sectionLead {
          max-width: 700px;
          margin: 22px 0 0;
          color: #667084;
          font-size: 14px;
          line-height: 1.85;
        }

        .centered .sectionLead {
          margin-right: auto;
          margin-left: auto;
        }

        .categoryGrid {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 17px;
          margin-top: 50px;
        }

        .categoryGrid article {
          overflow: hidden;
          border:
            1px solid #efdec7;
          border-radius: 18px;
          background: #fff;
          box-shadow:
            0 10px 28px
            rgba(62, 45, 25, 0.06);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .categoryGrid article:hover {
          transform: translateY(-5px);
          box-shadow:
            0 18px 38px
            rgba(62, 45, 25, 0.11);
        }

        .categoryImage {
          position: relative;
          height: 150px;
          overflow: hidden;
        }

        .categoryImage img {
          height: 100%;
          object-fit: cover;
          transition:
            transform 0.35s ease;
        }

        .categoryGrid article:hover
          .categoryImage img {
          transform: scale(1.06);
        }

        .categoryImage > span {
          position: absolute;
          bottom: 12px;
          left: 13px;
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border: 4px solid #fff;
          border-radius: 50%;
          background: #fff0dc;
          box-shadow:
            0 8px 20px
            rgba(0, 0, 0, 0.16);
          font-size: 23px;
        }

        .categoryBody {
          min-height: 143px;
          padding: 19px;
        }

        .categoryBody h3 {
          margin: 0 0 10px;
          color: #29364c;
          font-size: 16px;
        }

        .categoryBody p {
          margin: 0;
          color: #707887;
          font-size: 11px;
          line-height: 1.75;
        }

        .orangeMessage {
          display: grid;
          gap: 4px;
          margin-top: 28px;
          padding: 22px;
          border-radius: 16px;
          background:
            linear-gradient(
              135deg,
              #f26419,
              #ff963e
            );
          color: #fff;
          text-align: center;
        }

        .orangeMessage strong {
          font-size: 17px;
          line-height: 1.5;
        }

        .orangeMessage span {
          color: #ffe4d2;
          font-size: 11px;
        }

        .worrySection {
          background:
            linear-gradient(
              180deg,
              #fff 0%,
              #f1faf4 100%
            );
        }

        .worryGroup {
          margin-top: 50px;
        }

        .groupLabel {
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 0 auto 20px;
          padding: 10px 23px;
          border-radius: 999px;
          color: #fff;
          font-size: 13px;
          font-weight: 900;
        }

        .orangeLabel {
          background: #ed6925;
        }

        .greenLabel {
          background: #27865a;
        }

        .worryGrid {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .worryCard {
          overflow: hidden;
          border: 1px solid;
          border-radius: 18px;
          background: #fff;
          box-shadow:
            0 10px 27px
            rgba(29, 40, 55, 0.06);
        }

        .orangeCard {
          border-color: #f0cab4;
        }

        .greenCard {
          border-color: #bad9c6;
        }

        .worryImage {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .worryImage img {
          height: 100%;
          object-fit: cover;
        }

        .worryImage::after {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              transparent 50%,
              rgba(0, 0, 0, 0.35)
            );
          content: "";
        }

        .worryImage > span {
          position: absolute;
          z-index: 2;
          bottom: 13px;
          left: 14px;
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 4px solid #fff;
          border-radius: 50%;
          background: #ed6925;
          color: #fff;
          font-size: 11px;
          font-weight: 1000;
        }

        .greenCard .worryImage > span {
          background: #27865a;
        }

        .worryBody {
          min-height: 155px;
          padding: 21px;
        }

        .worryBody h3 {
          margin: 0 0 11px;
          color: #29364e;
          font-size: 17px;
          line-height: 1.55;
        }

        .worryBody p {
          margin: 0;
          color: #6b7485;
          font-size: 12px;
          line-height: 1.8;
        }

        .darkMessage {
          display: grid;
          gap: 6px;
          margin-top: 32px;
          padding: 25px;
          border-radius: 16px;
          background:
            linear-gradient(
              135deg,
              #17243b,
              #274363
            );
          color: #fff;
          text-align: center;
        }

        .darkMessage small {
          color: #ffb879;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .darkMessage strong {
          font-size: 17px;
          line-height: 1.6;
        }

        .solutionSection {
          background: #fff7ec;
        }

        .solutionHeading {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(320px, 0.7fr);
          align-items: end;
          gap: 50px;
          margin-bottom: 50px;
        }

        .solutionDescription {
          max-width: 680px;
          margin: 22px 0 0;
          color: #667084;
          font-size: 14px;
          line-height: 1.9;
        }

        .solutionTags {
          display: flex;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 8px;
        }

        .solutionTags span {
          padding: 9px 13px;
          border-radius: 999px;
          background: #fff;
          box-shadow:
            0 7px 20px
            rgba(62, 42, 22, 0.07);
          color: #a64c1b;
          font-size: 10px;
          font-weight: 900;
        }

        .mockupArea {
          position: relative;
          min-height: 620px;
          padding: 25px 120px 50px 15px;
        }

        .browserMockup {
          overflow: hidden;
          border: 9px solid #fff;
          border-radius: 25px;
          background: #f7f7f5;
          box-shadow:
            0 29px 75px
            rgba(37, 36, 42, 0.19);
          transform:
            perspective(1200px)
            rotateY(2deg)
            rotateZ(-0.7deg);
        }

        .browserTop {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 13px 16px;
          background: #18243a;
        }

        .browserDots {
          display: flex;
          gap: 5px;
        }

        .browserDots span {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #f26419;
        }

        .browserDots span:nth-child(2) {
          background: #f6c14d;
        }

        .browserDots span:nth-child(3) {
          background: #43aa72;
        }

        .browserUrl {
          flex: 1;
          padding: 7px;
          border-radius: 7px;
          background:
            rgba(255, 255, 255, 0.1);
          color: #d9deea;
          text-align: center;
          font-size: 8px;
        }

        .browserContent {
          padding: 25px;
        }

        .browserSectionTitle {
          display: flex;
          justify-content:
            space-between;
          align-items: flex-end;
          margin-bottom: 17px;
          padding-bottom: 12px;
          border-bottom:
            1px solid #dddcd7;
        }

        .browserSectionTitle > div {
          display: grid;
          gap: 3px;
        }

        .browserSectionTitle small {
          color: #f26419;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.18em;
        }

        .browserSectionTitle strong {
          font-size: 19px;
        }

        .browserSectionTitle > span {
          color: #c5c3bc;
          font-size: 8px;
          font-weight: 900;
        }

        .browserCards {
          display: grid;
          grid-template-columns:
            minmax(0, 1.35fr)
            minmax(170px, 0.65fr);
          gap: 14px;
        }

        .mainEventCard {
          overflow: hidden;
          border-radius: 14px;
          background: #fff;
          box-shadow:
            0 8px 20px
            rgba(0, 0, 0, 0.08);
        }

        .mainEventCard img {
          height: 205px;
          object-fit: cover;
        }

        .mainEventBody {
          padding: 16px;
        }

        .mainEventBody > span {
          display: inline-flex;
          padding: 5px 8px;
          border-radius: 999px;
          background: #fff0df;
          color: #a94d1c;
          font-size: 7px;
          font-weight: 900;
        }

        .mainEventBody > strong {
          display: block;
          margin: 10px 0;
          color: #243149;
          font-size: 15px;
          line-height: 1.4;
        }

        .mainEventBody p {
          margin: 5px 0;
          color: #707583;
          font-size: 8px;
        }

        .mainEventBody > div {
          margin-top: 13px;
          padding: 9px;
          border-radius: 7px;
          background: #17243b;
          color: #fff;
          text-align: center;
          font-size: 8px;
          font-weight: 900;
        }

        .browserSide {
          display: grid;
          gap: 9px;
        }

        .browserSide article {
          display: grid;
          align-content: center;
          gap: 5px;
          min-height: 112px;
          padding: 14px;
          border-radius: 12px;
          background: #fff;
          box-shadow:
            0 6px 16px
            rgba(0, 0, 0, 0.06);
        }

        .browserSide article > span {
          font-size: 23px;
        }

        .browserSide strong {
          font-size: 10px;
        }

        .browserSide small {
          color: #8a8e99;
          font-size: 7px;
        }

        .phoneMockup {
          position: absolute;
          z-index: 5;
          right: 8px;
          bottom: 0;
          width: 225px;
          padding: 12px;
          border: 8px solid #19263c;
          border-radius: 33px;
          background: #fff;
          box-shadow:
            0 24px 55px
            rgba(25, 38, 60, 0.29);
          transform: rotate(5deg);
        }

        .phoneSpeaker {
          width: 60px;
          height: 5px;
          margin: 0 auto 10px;
          border-radius: 999px;
          background: #19263c;
        }

        .phoneScreen {
          overflow: hidden;
          border-radius: 18px;
          background: #f7f7f5;
        }

        .phoneScreen img {
          height: 165px;
          object-fit: cover;
        }

        .phoneScreen > span {
          display: inline-flex;
          margin: 13px 13px 7px;
          padding: 5px 8px;
          border-radius: 999px;
          background: #fff0df;
          color: #a94d1c;
          font-size: 6px;
          font-weight: 900;
        }

        .phoneScreen > strong {
          display: block;
          padding: 0 13px;
          font-size: 13px;
          line-height: 1.4;
        }

        .phoneScreen > p {
          margin: 8px 13px;
          color: #777;
          font-size: 7px;
        }

        .phoneScreen > div {
          margin: 11px 13px 15px;
          padding: 8px;
          border-radius: 6px;
          background: #17243b;
          color: #fff;
          text-align: center;
          font-size: 7px;
          font-weight: 900;
        }

        .mockupBadge {
          position: absolute;
          z-index: 7;
          padding: 11px 14px;
          border-radius: 11px;
          background: #fff;
          box-shadow:
            0 15px 34px
            rgba(32, 39, 54, 0.16);
          font-size: 10px;
          font-weight: 900;
        }

        .mockupBadgeCalendar {
          top: 70px;
          left: -15px;
          transform: rotate(-5deg);
        }

        .mockupBadgeCategory {
          right: 0;
          bottom: 175px;
          transform: rotate(4deg);
        }

        .freeBadge {
          position: absolute;
          z-index: 8;
          top: -15px;
          right: 80px;
          width: 120px;
          height: 120px;
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
          font-size: 11px;
          font-weight: 900;
          transform: rotate(7deg);
        }

        .freeBadge strong {
          font-size: 32px;
          line-height: 1;
        }

        .listingNotice {
          margin: 20px 0 0;
          color: #906c54;
          text-align: center;
          font-size: 10px;
          line-height: 1.7;
        }

        .benefitSection {
          background: #eff9f2;
        }

        .benefitGrid {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-top: 50px;
        }

        .benefitGrid article {
          overflow: hidden;
          border:
            1px solid #cce1d3;
          border-radius: 18px;
          background: #fff;
          box-shadow:
            0 10px 28px
            rgba(28, 75, 47, 0.06);
        }

        .benefitImage {
          position: relative;
          height: 175px;
          overflow: hidden;
        }

        .benefitImage img {
          height: 100%;
          object-fit: cover;
        }

        .benefitImage > span {
          position: absolute;
          bottom: 12px;
          left: 13px;
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 4px solid #fff;
          border-radius: 50%;
          background: #27865a;
          color: #fff;
          font-size: 11px;
          font-weight: 1000;
        }

        .benefitBody {
          min-height: 175px;
          padding: 20px;
        }

        .benefitBody h3 {
          margin: 0 0 11px;
          color: #24543b;
          font-size: 17px;
          line-height: 1.5;
        }

        .benefitBody p {
          margin: 0;
          color: #68766d;
          font-size: 11px;
          line-height: 1.8;
        }

        .supportArea {
          margin-top: 25px;
          padding: 25px;
          border-radius: 16px;
          background: #dff2e5;
          text-align: center;
        }

        .supportArea > strong {
          color: #24764b;
          font-size: 19px;
        }

        .supportArea > div {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 16px;
        }

        .supportArea span {
          padding: 8px 12px;
          border-radius: 999px;
          background: #fff;
          color: #43805c;
          font-size: 10px;
          font-weight: 800;
        }

        .freeSection {
          background: #fff;
        }

        .freeTop {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
        }

        .freeStamp {
          width: 140px;
          height: 140px;
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
          font-size: 31px;
          line-height: 1;
          letter-spacing: 0;
        }

        .includedGrid {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 15px;
          margin-top: 48px;
        }

        .includedGrid article {
          display: grid;
          grid-template-columns:
            58px minmax(0, 1fr) 29px;
          align-items: center;
          gap: 17px;
          min-height: 118px;
          padding: 19px;
          border:
            1px solid #d6e8dc;
          border-radius: 16px;
          background: #f4fbf6;
        }

        .includedIcon {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: #e0f3e6;
          font-size: 27px;
        }

        .includedGrid h3 {
          margin: 0 0 6px;
          color: #24543b;
          font-size: 16px;
        }

        .includedGrid p {
          margin: 0;
          color: #68766d;
          font-size: 11px;
          line-height: 1.7;
        }

        .includedCheck {
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

        .futurePlan {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 22px;
          padding: 18px 21px;
          border-radius: 13px;
          background: #e3f3e8;
        }

        .futurePlan strong {
          flex: 0 0 auto;
          padding: 7px 11px;
          border-radius: 999px;
          background: #27865a;
          color: #fff;
          font-size: 9px;
        }

        .futurePlan p {
          margin: 0;
          color: #557161;
          font-size: 11px;
          line-height: 1.7;
        }

        .informationSection {
          background: #fff8ee;
        }

        .informationLayout {
          display: grid;
          grid-template-columns:
            minmax(360px, 0.85fr)
            minmax(0, 1.15fr);
          align-items: center;
          gap: 65px;
        }

        .informationPhoto {
          position: relative;
          overflow: hidden;
          min-height: 600px;
          border-radius: 28px;
          box-shadow:
            0 25px 60px
            rgba(50, 40, 29, 0.15);
        }

        .informationPhoto img {
          position: absolute;
          inset: 0;
          height: 100%;
          object-fit: cover;
        }

        .informationPhoto::after {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              transparent 40%,
              rgba(19, 31, 49, 0.85)
            );
          content: "";
        }

        .informationPhotoText {
          position: absolute;
          z-index: 2;
          right: 30px;
          bottom: 35px;
          left: 30px;
          color: #fff;
        }

        .informationPhotoText small {
          color: #ffb779;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.18em;
        }

        .informationPhotoText strong {
          display: block;
          margin-top: 8px;
          font-size: 28px;
          line-height: 1.5;
        }

        .informationGrid {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: 27px;
        }

        .informationGrid article {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 71px;
          padding: 13px;
          border:
            1px solid #eadac7;
          border-radius: 12px;
          background: #fff;
        }

        .informationGrid article > span {
          width: 38px;
          height: 38px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: #17243b;
          color: #fff;
          font-size: 9px;
          font-weight: 900;
        }

        .informationGrid strong {
          color: #303d53;
          font-size: 12px;
        }

        .stepSection {
          background: #fff;
        }

        .stepGrid {
          display: flex;
          align-items: stretch;
          margin-top: 50px;
        }

        .stepWrapper {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .stepWrapper article {
          flex: 1;
          min-height: 300px;
          padding: 25px 21px;
          border:
            1px solid #efd5bf;
          border-radius: 18px;
          background: #fff8ef;
          text-align: center;
        }

        .stepLabel {
          color: #f26419;
          font-size: 9px;
          font-weight: 1000;
          letter-spacing: 0.13em;
        }

        .stepIcon {
          width: 80px;
          height: 80px;
          display: grid;
          place-items: center;
          margin: 24px auto 18px;
          border-radius: 50%;
          background: #fff0df;
          font-size: 36px;
        }

        .stepWrapper h3 {
          margin: 0 0 11px;
          font-size: 17px;
        }

        .stepWrapper p {
          margin: 0;
          color: #6d7585;
          font-size: 11px;
          line-height: 1.8;
        }

        .stepArrow {
          width: 42px;
          flex: 0 0 auto;
          color: #e8a36f;
          text-align: center;
          font-size: 27px;
          font-weight: 900;
        }

        .stepLineArea {
          display: grid;
          place-items: center;
          margin-top: 38px;
        }

        .policySection {
          background: #edf5ff;
        }

        .policyLayout {
          display: grid;
          grid-template-columns:
            minmax(380px, 0.9fr)
            minmax(0, 1.1fr);
          align-items: center;
          gap: 65px;
        }

        .policyImage {
          position: relative;
          overflow: hidden;
          min-height: 520px;
          border-radius: 28px;
          box-shadow:
            0 25px 55px
            rgba(23, 58, 98, 0.18);
        }

        .policyImage img {
          position: absolute;
          inset: 0;
          height: 100%;
          object-fit: cover;
        }

        .policyImage::after {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              rgba(23, 58, 98, 0.15),
              rgba(23, 58, 98, 0.48)
            );
          content: "";
        }

        .shieldIcon {
          position: absolute;
          z-index: 2;
          top: 50%;
          left: 50%;
          width: 135px;
          height: 155px;
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
          transform:
            translate(-50%, -50%);
        }

        .shieldIcon span {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #27865a;
          color: #fff;
          font-size: 28px;
          font-weight: 900;
        }

        .policyContent ul {
          display: grid;
          gap: 10px;
          margin: 27px 0 0;
          padding: 0;
          list-style: none;
        }

        .policyContent li {
          position: relative;
          padding: 13px 15px 13px 46px;
          border-radius: 10px;
          background:
            rgba(255, 255, 255, 0.8);
          color: #445267;
          font-size: 12px;
          font-weight: 700;
        }

        .policyContent li::before {
          position: absolute;
          top: 50%;
          left: 14px;
          width: 23px;
          height: 23px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #d96060;
          color: #fff;
          content: "×";
          font-size: 11px;
          font-weight: 900;
          transform:
            translateY(-50%);
        }

        .policyNote {
          margin: 16px 0 0;
          color: #718099;
          font-size: 10px;
        }

        .faqSection {
          background: #fff;
        }

        .faqLayout {
          display: grid;
          grid-template-columns:
            minmax(260px, 0.55fr)
            minmax(0, 1.45fr);
          gap: 70px;
        }

        .questionIllustration {
          width: 170px;
          height: 170px;
          display: grid;
          place-items: center;
          align-content: center;
          gap: 8px;
          margin-top: 35px;
          border-radius:
            42% 58% 50% 50%;
          background: #fff0df;
          text-align: center;
          transform: rotate(-5deg);
        }

        .questionIllustration > span {
          color: #f26419;
          font-size: 67px;
          line-height: 0.8;
          font-weight: 1000;
          transform: rotate(5deg);
        }

        .questionIllustration small {
          color: #9f5e34;
          font-size: 9px;
          line-height: 1.5;
          transform: rotate(5deg);
        }

        .faqList {
          display: grid;
          gap: 11px;
        }

        .faqList details {
          overflow: hidden;
          border:
            1px solid #e5e4df;
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
          min-height: 640px;
          display: grid;
          place-items: center;
          overflow: hidden;
          background-image:
            url(
              "https://unsplash.com/photos/HdryXuY8H6s/download?force=true&w=1200"
            );
          background-position: center;
          background-size: cover;
        }

        .finalOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              135deg,
              rgba(14, 29, 48, 0.9),
              rgba(239, 91, 12, 0.82)
            );
        }

        .finalContent {
          position: relative;
          z-index: 2;
          width: min(
            780px,
            calc(100% - 40px)
          );
          padding: 85px 0;
          color: #fff;
          text-align: center;
        }

        .finalContent > p:first-child {
          color: #ffd3b6;
        }

        .finalContent h2 {
          margin: 0;
          font-size: clamp(
            40px,
            6vw,
            67px
          );
          line-height: 1.25;
          letter-spacing: -0.055em;
        }

        .finalContent h2 span {
          color: #fff3a2;
        }

        .finalDescription {
          margin: 25px auto 0;
          color: #ffe8d8;
          font-size: 14px;
          line-height: 1.9;
        }

        .finalTags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin: 25px 0 3px;
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
          padding: 34px 0;
          background: #17243b;
          color: #b8c0ce;
        }

        .footerInner {
          width: min(
            1120px,
            calc(100% - 40px)
          );
          display: grid;
          grid-template-columns:
            1fr auto 1fr;
          align-items: center;
          gap: 25px;
          margin: 0 auto;
        }

        .footerLogo {
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 900;
        }

        .footerInner > div {
          display: flex;
          gap: 18px;
        }

        .footerInner > div a {
          color: #d5dae3;
          text-decoration: none;
          font-size: 10px;
        }

        .footerInner small {
          text-align: right;
          font-size: 9px;
        }

        .floatingLine {
          position: fixed;
          z-index: 200;
          right: 19px;
          bottom: 19px;
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
            rgba(8, 184, 78, 0.35);
          color: #fff;
          text-decoration: none;
        }

        .floatingLine span {
          font-size: 9px;
          font-weight: 1000;
        }

        .floatingLine strong {
          font-size: 11px;
        }

        @media (
          max-width: 1020px
        ) {
          .heroInner,
          .informationLayout,
          .policyLayout,
          .faqLayout {
            grid-template-columns: 1fr;
          }

          .heroCopy {
            max-width: 730px;
          }

          .heroVisual {
            width: min(
              700px,
              100%
            );
            margin: 0 auto;
          }

          .categoryGrid,
          .benefitGrid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .solutionHeading {
            grid-template-columns: 1fr;
          }

          .solutionTags {
            justify-content:
              flex-start;
          }

          .informationPhoto {
            min-height: 480px;
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

        @media (
          max-width: 720px
        ) {
          .headerInner {
            width:
              calc(100% - 24px);
            min-height: 64px;
          }

          .logo {
            font-size: 16px;
          }

          .header nav a:first-child {
            display: none;
          }

          .container,
          .heroInner,
          .footerInner {
            width:
              calc(100% - 24px);
          }

          .heroInner {
            min-height: 0;
            grid-template-columns: 1fr;
            gap: 50px;
            padding: 58px 0 75px;
          }

          .heroCopy h1 {
            gap: 4px;
            font-size: 43px;
          }

          .heroLineOne,
          .heroLineTwo {
            width: auto;
            white-space: normal;
          }

          .heroCatch {
            font-size: 16px;
          }

          .heroFeatures {
            grid-template-columns: 1fr;
          }

          .photoCollage {
            min-height: 480px;
          }

          .photoMain {
            top: 35px;
            right: 0;
            width: 91%;
            height: 340px;
          }

          .photoSubOne {
            width: 54%;
            height: 165px;
          }

          .photoSubTwo {
            width: 48%;
            height: 150px;
          }

          .heroOrangeBadge {
            width: 92px;
            height: 92px;
            border-width: 6px;
          }

          .heroOrangeBadge strong {
            font-size: 25px;
          }

          .floatingInfo {
            display: none;
          }

          .categorySection,
          .worrySection,
          .solutionSection,
          .benefitSection,
          .freeSection,
          .informationSection,
          .stepSection,
          .policySection,
          .faqSection {
            padding: 76px 0;
          }

          .sectionHeading h2,
          .solutionHeading h2 {
            font-size: 33px;
          }

          .categoryGrid,
          .worryGrid,
          .benefitGrid,
          .includedGrid,
          .informationGrid,
          .stepGrid {
            grid-template-columns: 1fr;
          }

          .categoryImage {
            height: 205px;
          }

          .worryImage {
            height: 220px;
          }

          .benefitImage {
            height: 220px;
          }

          .solutionHeading {
            margin-bottom: 35px;
          }

          .mockupArea {
            min-height: 760px;
            padding:
              15px 0 210px;
          }

          .browserMockup {
            border-width: 6px;
            transform: none;
          }

          .browserContent {
            padding: 14px;
          }

          .browserCards {
            grid-template-columns: 1fr;
          }

          .browserSide {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );
          }

          .browserSide article {
            min-height: 95px;
            padding: 10px;
          }

          .phoneMockup {
            right: 50%;
            bottom: 0;
            width: 200px;
            transform:
              translateX(50%)
              rotate(3deg);
          }

          .mockupBadge,
          .freeBadge {
            display: none;
          }

          .freeTop {
            display: grid;
            justify-items: center;
            gap: 25px;
            text-align: center;
          }

          .freeTop .sectionLead {
            margin-right: auto;
            margin-left: auto;
          }

          .includedGrid article {
            grid-template-columns:
              52px minmax(0, 1fr)
              27px;
          }

          .futurePlan {
            align-items: flex-start;
          }

          .informationPhoto {
            min-height: 420px;
          }

          .informationPhotoText strong {
            font-size: 23px;
          }

          .policyImage {
            min-height: 390px;
          }

          .faqHeading {
            grid-template-columns: 1fr;
          }

          .questionIllustration {
            display: none;
          }

          .finalSection {
            min-height: 600px;
          }

          .finalContent h2 {
            font-size: 40px;
          }

          .footerInner {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
          }

          .footerInner small {
            text-align: center;
          }

          .floatingLine {
            right: 12px;
            bottom: 12px;
            width: 67px;
            height: 67px;
          }
        }

        @media (
          max-width: 430px
        ) {
          .audienceLabel {
            font-size: 9px;
          }

          .heroCopy h1 {
            font-size: 38px;
          }

          .heroDescription {
            font-size: 12px;
          }

          .lineButton {
            grid-template-columns:
              43px minmax(0, 1fr)
              20px;
            gap: 10px;
            padding: 12px 14px;
          }

          .lineLogo {
            width: 42px;
            height: 42px;
          }

          .lineButtonText strong {
            font-size: 12px;
          }

          .heroBottom {
            gap: 7px;
          }

          .heroBottom span {
            padding: 7px 10px;
            font-size: 9px;
          }

          .sectionHeading h2,
          .solutionHeading h2 {
            font-size: 30px;
          }

          .browserSide {
            grid-template-columns: 1fr;
          }

          .includedGrid article {
            grid-template-columns:
              48px minmax(0, 1fr);
          }

          .includedCheck {
            display: none;
          }

          .futurePlan {
            display: grid;
          }

          .faqList summary {
            grid-template-columns:
              37px minmax(0, 1fr)
              23px;
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
