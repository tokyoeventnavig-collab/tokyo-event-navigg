import Link from "next/link";

export const metadata = {
  title: "イベント掲載について｜東京イベントナビ",
  description:
    "あなたのイベントをもっと多くの人へ。東京イベントナビでは、東京都内で開催されるイベントの掲載を受け付けています。",
};

const LINE_URL = "https://lin.ee/P179zyp";

const categories = [
  {
    icon: "🍻",
    title: "飲み会・交流会",
    description:
      "友達づくり、社会人交流、恋活、異業種交流などのイベント。",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=88",
  },
  {
    icon: "☕",
    title: "カフェ会・ランチ会",
    description:
      "少人数で会話を楽しむカフェ会や、食事を囲む交流イベント。",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=88",
  },
  {
    icon: "🎲",
    title: "ボードゲーム・ゲーム会",
    description:
      "初心者歓迎のボードゲーム、カードゲーム、趣味交流会。",
    image:
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=900&q=88",
  },
  {
    icon: "📊",
    title: "セミナー・勉強会",
    description:
      "ビジネス、学習、スキルアップを目的としたイベント。",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=88",
  },
  {
    icon: "🏃",
    title: "スポーツ・アウトドア",
    description:
      "ランニング、ヨガ、ゴルフ、フットサル、登山など。",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=88",
  },
  {
    icon: "🎨",
    title: "趣味・体験イベント",
    description:
      "料理、写真、音楽、ものづくり、ワークショップなど。",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=88",
  },
  {
    icon: "🌏",
    title: "語学・国際交流",
    description:
      "語学学習、海外文化、外国人参加者との交流イベント。",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=88",
  },
  {
    icon: "✨",
    title: "その他",
    description:
      "ライブ、マルシェ、上映会などもお気軽にご相談ください。",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=88",
  },
];

const benefits = [
  {
    icon: "👥",
    title: "新しい参加者へ届けられる",
    description:
      "普段のSNSや知人への告知だけでは接点のなかった方にも、イベント情報を届けられます。",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=88",
  },
  {
    icon: "🔍",
    title: "複数の入口から発見される",
    description:
      "新着、今週、カレンダー、カテゴリーなど、複数の探し方から見つけてもらえます。",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=88",
  },
  {
    icon: "🛡️",
    title: "イベントの信頼感が高まる",
    description:
      "日時、会場、参加条件、主催者情報を整理した専用ページで、安心感を高めます。",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=88",
  },
  {
    icon: "📣",
    title: "イベントの魅力を伝えられる",
    description:
      "フライヤーや概要を見やすく整理し、イベントの雰囲気や特徴をしっかり伝えます。",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=88",
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
    title: "日時・カレンダー掲載",
    description: "開催日と時間をカレンダーへ反映します。",
  },
  {
    icon: "📍",
    title: "会場・住所掲載",
    description: "会場名と住所を分かりやすく表示します。",
  },
  {
    icon: "🗂️",
    title: "カテゴリー検索",
    description: "ジャンル別の検索結果へ反映します。",
  },
  {
    icon: "🔗",
    title: "申込先へのリンク",
    description: "LINEやフォームへ直接案内できます。",
  },
];

const steps = [
  {
    number: "01",
    icon: "💬",
    title: "LINEで相談",
    description:
      "公式LINEを追加し「イベント掲載希望」とお送りください。",
  },
  {
    number: "02",
    icon: "📎",
    title: "イベント情報を送付",
    description:
      "フライヤー、日時、会場、概要、申込先などをお送りください。",
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
    question: "情報がすべて揃っていなくても相談できますか？",
    answer:
      "はい。開催内容が完全に決まっていない段階でもご相談いただけます。必要な情報をご案内します。",
  },
  {
    question: "人気イベント欄へ必ず掲載されますか？",
    answer:
      "人気イベント欄への掲載は保証していません。掲載内容や開催時期により、表示される場所は異なります。",
  },
  {
    question: "掲載後に日時や会場を変更できますか？",
    answer:
      "変更可能です。内容に変更が生じた場合は、公式LINEから早めにご連絡ください。",
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
  title,
  accent,
  description,
  centered = true,
}: {
  label: string;
  title: string;
  accent?: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={
        centered
          ? "sectionTitle sectionTitleCentered"
          : "sectionTitle"
      }
    >
      <p className="sectionLabel">{label}</p>

      <h2>
        {title}
        {accent && <span>{accent}</span>}
      </h2>

      <div className="titleLine" />

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
            <article className="sampleEventCard">
              <img
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=88"
                alt="交流イベントの掲載イメージ"
              />

              <div>
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
          <img
            src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=88"
            alt=""
          />

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

      <div className="previewBadge previewBadgeOne">
        📅 カレンダー掲載
      </div>

      <div className="previewBadge previewBadgeTwo">
        🗂️ カテゴリー検索
      </div>

      <div className="previewFreeBadge">
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
            <span>東京</span>イベントナビ
          </Link>

          <nav className="headerNav">
            <Link href="/">イベントを探す</Link>

            <a href="#categories">
              掲載できるイベント
            </a>

            <a href="#flow">掲載の流れ</a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
              className="headerLineButton"
            >
              LINEで相談する
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="heroCircle heroCircleOne" />
        <div className="heroCircle heroCircleTwo" />

        <div className="heroInner">
          <div className="heroCopy">
            <div className="heroTarget">
              東京でイベントを主催している方へ
            </div>

            <h1>
              <span className="heroTitleFirst">
                あなたのイベントを
              </span>

              <span className="heroTitleAccent">
                もっと多くの人へ。
              </span>
            </h1>

            <p className="heroLead">
              東京イベントナビでは、東京都内で開催される
              さまざまなイベントの掲載を受け付けています。
            </p>

            <div className="heroFeatures">
              <article>
                <span>🖼️</span>
                <strong>専用ページ作成</strong>
              </article>

              <article>
                <span>📅</span>
                <strong>カレンダー掲載</strong>
              </article>

              <article>
                <span>🗂️</span>
                <strong>カテゴリー掲載</strong>
              </article>

              <article>
                <span>🔗</span>
                <strong>申込リンク設置</strong>
              </article>
            </div>

            <LineButton />

            <p className="heroNote">
              相談だけでも問題ありません。掲載できる内容か分からない場合も、お気軽にご連絡ください。
            </p>
          </div>

          <div className="heroVisual">
            <div className="heroPhotoGrid">
              <figure className="heroPhoto heroPhotoMain">
                <img
                  src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=90"
                  alt="交流会を楽しむ参加者"
                />
              </figure>

              <figure className="heroPhoto heroPhotoSecond">
                <img
                  src="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=90"
                  alt="ボードゲームを楽しむ参加者"
                />
              </figure>

              <figure className="heroPhoto heroPhotoThird">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=90"
                  alt="セミナーの様子"
                />
              </figure>

              <figure className="heroPhoto heroPhotoFourth">
                <img
                  src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=90"
                  alt="スポーツイベントの様子"
                />
              </figure>
            </div>

            <div className="heroFreeBadge">
              掲載
              <strong>無料</strong>
              <small>東京都内のイベント対応</small>
            </div>
          </div>
        </div>
      </section>

      <section
        className="categoriesSection"
        id="categories"
      >
        <div className="container">
          <SectionTitle
            label="EVENT CATEGORIES"
            title="掲載できる"
            accent="イベント"
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

          <div className="categoryMessage">
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

      <section className="problemsSection">
        <div className="container">
          <SectionTitle
            label="ORGANIZER PROBLEMS"
            title="こんな"
            accent="お悩みありませんか？"
          />

          <div className="problemColumns">
            <article className="problemPanel problemPanelOrange">
              <div className="problemText">
                <span className="problemLabel">
                  告知・認知に関するお悩み
                </span>

                <ul>
                  <li>
                    良いイベントなのに、まだ知られていない
                  </li>
                  <li>
                    毎回、自分から声をかけ続けている
                  </li>
                  <li>
                    初開催で申込みが入るか不安
                  </li>
                </ul>
              </div>

              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=88"
                alt="イベントの告知に悩む主催者"
              />
            </article>

            <article className="problemPanel problemPanelGreen">
              <div className="problemText">
                <span className="problemLabel">
                  運営・準備に関するお悩み
                </span>

                <ul>
                  <li>
                    開催直前まで人数が読めない
                  </li>
                  <li>
                    準備と告知を両立できない
                  </li>
                  <li>
                    情報をきれいにまとめられない
                  </li>
                </ul>
              </div>

              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=88"
                alt="イベント準備に悩む主催者"
              />
            </article>
          </div>

          <div className="problemConclusion">
            <span>東京イベントナビなら</span>

            <strong>
              イベント情報を整理し、もっと多くの人へ届けるお手伝いができます。
            </strong>
          </div>
        </div>
      </section>

      <section className="previewSection">
        <div className="container">
          <div className="previewHeading">
            <div>
              <p className="sectionLabel">
                LISTING IMAGE
              </p>

              <h2>
                掲載後は、
                <br />
                <span>
                  このように表示されます。
                </span>
              </h2>

              <p>
                フライヤー、開催日時、会場、参加条件などを一つのページへ整理します。
                TOPページ、カレンダー、カテゴリーなどからイベントを見つけてもらえます。
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
            ※人気イベント欄への掲載は保証していません。掲載内容や開催時期により表示される場所は異なります。
          </p>
        </div>
      </section>

      <section className="benefitsSection">
        <div className="container">
          <SectionTitle
            label="MERITS"
            title="東京イベントナビに"
            accent="掲載するメリット"
            description="イベントを探している方へ、あなたのイベントの魅力を分かりやすく届けます。"
          />

          <div className="benefitsGrid">
            {benefits.map((benefit) => (
              <article
                className="benefitCard"
                key={benefit.title}
              >
                <div className="benefitImage">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                  />
                </div>

                <div className="benefitContent">
                  <span className="benefitIcon">
                    {benefit.icon}
                  </span>

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="includedSection">
        <div className="container">
          <div className="includedHeader">
            <div className="freeStamp">
              BASIC
              <strong>FREE</strong>
            </div>

            <SectionTitle
              label="FREE LISTING"
              title="基本掲載は"
              accent="無料です！"
              description="無料掲載には、次の内容が含まれています。"
              centered={false}
            />
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

          <p className="additionalNote">
            SNS投稿、公式LINE配信、優先表示などの追加施策は、今後別途ご案内する場合があります。
          </p>
        </div>
      </section>

      <section className="flowFaqSection" id="flow">
        <div className="container flowFaqGrid">
          <div className="flowBox">
            <SectionTitle
              label="HOW TO LIST"
              title="掲載までは"
              accent="簡単4ステップ"
              centered={false}
            />

            <div className="stepsGrid">
              {steps.map((step) => (
                <article key={step.number}>
                  <span className="stepNumber">
                    {step.number}
                  </span>

                  <div className="stepIcon">
                    {step.icon}
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              ))}
            </div>

            <LineButton />
          </div>

          <div className="faqBox">
            <SectionTitle
              label="FAQ"
              title="よくある"
              accent="ご質問"
              centered={false}
            />

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
        </div>
      </section>

      <section className="finalCta">
        <div className="finalCtaOverlay" />

        <div className="finalCtaInner">
          <div>
            <p>EVENT LISTING</p>

            <h2>
              あなたのイベントを
              <br />
              <span>もっと多くの人へ。</span>
            </h2>
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
              東京で開催されるイベント情報を、分かりやすくお届けします。
            </p>
          </div>

          <nav>
            <Link href="/">
              イベントを探す
            </Link>

            <a href="#categories">
              掲載できるイベント
            </a>

            <a href="#flow">
              掲載までの流れ
            </a>
          </nav>

          <div className="footerLine">
            <strong>掲載について相談</strong>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
            >
              LINEで相談する
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
            1180px,
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
          backdrop-filter: blur(15px);
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
          margin-right: 3px;
          color: #f26419;
        }

        .headerNav {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .headerNav a {
          color: #30394a;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
        }

        .headerNav .headerLineButton {
          padding: 12px 18px;
          border-radius: 8px;
          background: #08b84e;
          color: #fff;
        }

        .hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 12% 15%,
              rgba(255, 172, 88, 0.2),
              transparent 29%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(255, 197, 133, 0.3),
              transparent 30%
            ),
            #fff8ef;
        }

        .heroCircle {
          position: absolute;
          border-radius: 50%;
        }

        .heroCircleOne {
          top: -170px;
          right: -120px;
          width: 430px;
          height: 430px;
          border:
            80px solid
            rgba(242, 100, 25, 0.06);
        }

        .heroCircleTwo {
          bottom: -180px;
          left: -140px;
          width: 390px;
          height: 390px;
          background:
            rgba(255, 193, 117, 0.15);
        }

        .heroInner {
          position: relative;
          z-index: 2;
          width: min(
            1200px,
            calc(100% - 48px)
          );
          min-height: 730px;
          display: grid;
          grid-template-columns:
            minmax(470px, 0.88fr)
            minmax(540px, 1.12fr);
          align-items: center;
          gap: 70px;
          margin: 0 auto;
          padding: 70px 0 90px;
        }

        .heroTarget {
          width: fit-content;
          margin-bottom: 22px;
          padding: 9px 15px;
          border: 1px solid #f2b68e;
          border-radius: 999px;
          background: rgba(
            255,
            255,
            255,
            0.8
          );
          color: #e65c14;
          font-size: 11px;
          font-weight: 900;
        }

        .heroCopy h1 {
          display: grid;
          gap: 6px;
          margin: 0;
          font-size: clamp(
            51px,
            5.6vw,
            75px
          );
          line-height: 1.15;
          letter-spacing: -0.065em;
        }

        .heroTitleFirst,
        .heroTitleAccent {
          display: block;
          width: max-content;
          max-width: 100%;
          white-space: nowrap;
        }

        .heroTitleAccent {
          position: relative;
          z-index: 1;
          color: #f26419;
        }

        .heroTitleAccent::before {
          position: absolute;
          z-index: -1;
          right: -7px;
          bottom: 5px;
          left: -5px;
          height: 17px;
          border-radius: 999px;
          background:
            rgba(255, 191, 123, 0.42);
          content: "";
          transform: rotate(-1deg);
        }

        .heroLead {
          max-width: 570px;
          margin: 30px 0 0;
          color: #5e6878;
          font-size: 14px;
          line-height: 1.95;
          font-weight: 600;
        }

        .heroFeatures {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 8px;
          margin-top: 25px;
        }

        .heroFeatures article {
          display: grid;
          justify-items: center;
          gap: 7px;
          padding: 15px 7px;
          border: 1px solid #efdfcf;
          border-radius: 12px;
          background: #fff;
          box-shadow:
            0 8px 22px
            rgba(78, 51, 25, 0.06);
          text-align: center;
        }

        .heroFeatures span {
          font-size: 22px;
        }

        .heroFeatures strong {
          font-size: 9px;
          line-height: 1.4;
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
          margin-top: 23px;
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
          margin: 13px 0 0;
          color: #8d7a68;
          font-size: 9px;
          line-height: 1.6;
        }

        .heroVisual {
          position: relative;
          min-width: 0;
        }

        .heroPhotoGrid {
          display: grid;
          grid-template-columns:
            1.1fr 0.9fr;
          grid-template-rows:
            225px 225px;
          gap: 10px;
        }

        .heroPhoto {
          overflow: hidden;
          margin: 0;
          border-radius: 15px;
          background: #ddd;
          box-shadow:
            0 18px 45px
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

        .heroFreeBadge {
          position: absolute;
          z-index: 5;
          top: 50%;
          left: 55%;
          width: 135px;
          height: 135px;
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
          font-size: 12px;
          font-weight: 900;
          text-align: center;
          transform:
            translate(-50%, -50%)
            rotate(6deg);
        }

        .heroFreeBadge strong {
          font-size: 35px;
          line-height: 1;
        }

        .heroFreeBadge small {
          margin-top: 5px;
          font-size: 7px;
        }

        .categoriesSection,
        .problemsSection,
        .previewSection,
        .benefitsSection,
        .includedSection,
        .flowFaqSection {
          padding: 105px 0;
        }

        .categoriesSection {
          background: #fff;
        }

        .sectionTitle {
          max-width: 760px;
        }

        .sectionTitleCentered {
          margin: 0 auto;
          text-align: center;
        }

        .sectionLabel {
          margin: 0 0 12px;
          color: #f26419;
          font-size: 9px;
          font-weight: 1000;
          letter-spacing: 0.2em;
        }

        .sectionTitle h2,
        .previewHeading h2 {
          margin: 0;
          color: #17243b;
          font-size: clamp(
            34px,
            4.6vw,
            53px
          );
          line-height: 1.3;
          letter-spacing: -0.05em;
        }

        .sectionTitle h2 span,
        .previewHeading h2 span {
          margin-left: 8px;
          color: #f26419;
        }

        .titleLine {
          width: 55px;
          height: 4px;
          margin-top: 17px;
          border-radius: 999px;
          background: #f26419;
        }

        .sectionTitleCentered
          .titleLine {
          margin-right: auto;
          margin-left: auto;
        }

        .sectionDescription {
          margin: 20px 0 0;
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
          height: 155px;
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
          font-size: 15px;
        }

        .categoryContent p {
          margin: 0;
          color: #707887;
          font-size: 10px;
          line-height: 1.75;
        }

        .categoryMessage {
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

        .categoryMessage strong {
          font-size: 17px;
          line-height: 1.5;
        }

        .categoryMessage p {
          margin: 0;
          color: #ffe3d1;
          font-size: 10px;
        }

        .problemsSection {
          background:
            linear-gradient(
              180deg,
              #fffaf4,
              #f2faf4
            );
        }

        .problemColumns {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 48px;
        }

        .problemPanel {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            230px;
          overflow: hidden;
          border-radius: 18px;
          background: #fff;
          box-shadow:
            0 12px 30px
            rgba(31, 40, 51, 0.07);
        }

        .problemPanelOrange {
          border: 1px solid #efcfb9;
        }

        .problemPanelGreen {
          border: 1px solid #c4dfcc;
        }

        .problemText {
          padding: 27px;
        }

        .problemLabel {
          display: inline-flex;
          padding: 8px 13px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 900;
        }

        .problemPanelOrange
          .problemLabel {
          background: #fff0e3;
          color: #dc611d;
        }

        .problemPanelGreen
          .problemLabel {
          background: #e4f4e9;
          color: #247a4c;
        }

        .problemText ul {
          display: grid;
          gap: 16px;
          margin: 25px 0 0;
          padding: 0;
          list-style: none;
        }

        .problemText li {
          position: relative;
          padding-left: 29px;
          color: #354158;
          font-size: 12px;
          line-height: 1.6;
          font-weight: 800;
        }

        .problemText li::before {
          position: absolute;
          top: 1px;
          left: 0;
          width: 21px;
          height: 21px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #fff;
          content: "✓";
          font-size: 9px;
        }

        .problemPanelOrange
          .problemText li::before {
          background: #ef6b24;
        }

        .problemPanelGreen
          .problemText li::before {
          background: #27865a;
        }

        .problemPanel img {
          width: 100%;
          height: 100%;
          min-height: 310px;
          object-fit: cover;
        }

        .problemConclusion {
          display: grid;
          gap: 6px;
          margin-top: 28px;
          padding: 22px;
          border-radius: 14px;
          background: #17243b;
          color: #fff;
          text-align: center;
        }

        .problemConclusion span {
          color: #ffb376;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .problemConclusion strong {
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

        .previewHeading > div > p:last-child {
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

        .sampleEventCard {
          overflow: hidden;
          border-radius: 13px;
          background: #fff;
          box-shadow:
            0 8px 20px
            rgba(0, 0, 0, 0.08);
        }

        .sampleEventCard img {
          height: 210px;
          object-fit: cover;
        }

        .sampleEventCard > div {
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

        .sampleEventCard h3 {
          margin: 10px 0;
          font-size: 14px;
          line-height: 1.4;
        }

        .sampleEventCard p {
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

        .previewBadgeOne {
          top: 67px;
          left: -15px;
          transform: rotate(-5deg);
        }

        .previewBadgeTwo {
          right: 0;
          bottom: 175px;
          transform: rotate(4deg);
        }

        .previewFreeBadge {
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

        .previewFreeBadge strong {
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

        .benefitsSection {
          background: #eff8f2;
        }

        .benefitsGrid {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-top: 48px;
        }

        .benefitCard {
          overflow: hidden;
          border: 1px solid #cce0d2;
          border-radius: 16px;
          background: #fff;
          box-shadow:
            0 10px 27px
            rgba(27, 75, 47, 0.06);
        }

        .benefitImage {
          height: 180px;
          overflow: hidden;
        }

        .benefitImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .benefitContent {
          position: relative;
          min-height: 185px;
          padding: 25px 19px 19px;
        }

        .benefitIcon {
          position: absolute;
          top: -26px;
          left: 16px;
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border: 4px solid #fff;
          border-radius: 50%;
          background: #e1f4e7;
          font-size: 22px;
        }

        .benefitContent h3 {
          margin: 11px 0 10px;
          color: #24543b;
          font-size: 15px;
          line-height: 1.5;
        }

        .benefitContent p {
          margin: 0;
          color: #68766d;
          font-size: 10px;
          line-height: 1.8;
        }

        .includedSection {
          background: #fff;
        }

        .includedHeader {
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

        .additionalNote {
          margin: 19px 0 0;
          color: #7b827d;
          text-align: center;
          font-size: 9px;
          line-height: 1.7;
        }

        .flowFaqSection {
          background: #fff8ef;
        }

        .flowFaqGrid {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(360px, 0.72fr);
          gap: 22px;
        }

        .flowBox,
        .faqBox {
          padding: 32px;
          border: 1px solid #eadbca;
          border-radius: 18px;
          background: #fff;
          box-shadow:
            0 10px 28px
            rgba(58, 44, 30, 0.05);
        }

        .stepsGrid {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 10px;
          margin-top: 30px;
        }

        .stepsGrid article {
          position: relative;
          padding: 18px 10px;
          border-radius: 12px;
          background: #fff8ef;
          text-align: center;
        }

        .stepNumber {
          position: absolute;
          top: 10px;
          left: 10px;
          color: #f26419;
          font-size: 9px;
          font-weight: 1000;
        }

        .stepIcon {
          width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
          margin: 15px auto 13px;
          border-radius: 50%;
          background: #fff0df;
          font-size: 28px;
        }

        .stepsGrid h3 {
          margin: 0 0 8px;
          font-size: 12px;
        }

        .stepsGrid p {
          margin: 0;
          color: #727987;
          font-size: 8px;
          line-height: 1.65;
        }

        .flowBox .lineButton {
          margin-right: auto;
          margin-left: auto;
        }

        .faqList {
          display: grid;
          gap: 9px;
          margin-top: 30px;
        }

        .faqList details {
          overflow: hidden;
          border: 1px solid #e5e3de;
          border-radius: 11px;
          background: #fafaf8;
        }

        .faqList summary {
          display: grid;
          grid-template-columns:
            38px minmax(0, 1fr)
            24px;
          align-items: center;
          gap: 10px;
          padding: 14px;
          cursor: pointer;
          list-style: none;
        }

        .faqList summary::-webkit-details-marker {
          display: none;
        }

        .faqList summary > span {
          color: #f26419;
          font-size: 9px;
          font-weight: 1000;
        }

        .faqList summary strong {
          font-size: 11px;
          line-height: 1.5;
        }

        .faqList summary small {
          color: #f26419;
          font-size: 18px;
          font-weight: 900;
        }

        .faqAnswer {
          display: grid;
          grid-template-columns:
            30px minmax(0, 1fr);
          gap: 10px;
          padding: 0 14px 15px;
        }

        .faqAnswer span {
          width: 28px;
          height: 28px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: #f26419;
          color: #fff;
          font-size: 10px;
          font-weight: 900;
        }

        .faqAnswer p {
          margin: 4px 0 0;
          color: #6d7585;
          font-size: 10px;
          line-height: 1.75;
        }

        .finalCta {
          position: relative;
          min-height: 260px;
          display: grid;
          align-items: center;
          overflow: hidden;
          background-image:
            url(
              "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=90"
            );
          background-position: center;
          background-size: cover;
        }

        .finalCtaOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(232, 79, 4, 0.96),
              rgba(247, 115, 28, 0.88)
            );
        }

        .finalCtaInner {
          position: relative;
          z-index: 2;
          width: min(
            1100px,
            calc(100% - 40px)
          );
          display: grid;
          grid-template-columns:
            1fr 480px;
          align-items: center;
          gap: 50px;
          margin: 0 auto;
          padding: 45px 0;
          color: #fff;
        }

        .finalCtaInner > div > p {
          margin: 0 0 8px;
          color: #ffe1ce;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.19em;
        }

        .finalCta h2 {
          margin: 0;
          font-size: 31px;
          line-height: 1.45;
        }

        .finalCta h2 span {
          color: #fff3a6;
        }

        .finalCta .lineButton {
          margin: 0;
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

        .footerLine {
          display: grid;
          align-content: start;
          gap: 12px;
        }

        .footerLine strong {
          color: #fff;
          font-size: 11px;
        }

        .footerLine a {
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

        @media (max-width: 1020px) {
          .headerNav a:not(
              .headerLineButton
            ) {
            display: none;
          }

          .heroInner {
            grid-template-columns: 1fr;
          }

          .heroCopy {
            max-width: 720px;
          }

          .heroVisual {
            width: min(720px, 100%);
            margin: 0 auto;
          }

          .categoryGrid,
          .benefitsGrid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .problemPanel {
            grid-template-columns: 1fr;
          }

          .problemPanel img {
            height: 250px;
            min-height: 0;
          }

          .previewHeading,
          .flowFaqGrid {
            grid-template-columns: 1fr;
          }

          .previewTags {
            justify-content: flex-start;
          }

          .includedGrid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .finalCtaInner {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          .headerInner,
          .container,
          .heroInner,
          .footerInner {
            width: calc(100% - 24px);
          }

          .headerInner {
            min-height: 62px;
          }

          .logo {
            font-size: 16px;
          }

          .headerLineButton {
            padding: 10px 13px !important;
          }

          .heroInner {
            min-height: 0;
            gap: 50px;
            padding: 55px 0 70px;
          }

          .heroCopy h1 {
            font-size: 42px;
          }

          .heroTitleFirst,
          .heroTitleAccent {
            width: auto;
            white-space: normal;
          }

          .heroFeatures {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .heroPhotoGrid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows:
              210px 150px;
          }

          .heroFreeBadge {
            width: 100px;
            height: 100px;
            border-width: 6px;
          }

          .heroFreeBadge strong {
            font-size: 25px;
          }

          .categoriesSection,
          .problemsSection,
          .previewSection,
          .benefitsSection,
          .includedSection,
          .flowFaqSection {
            padding: 75px 0;
          }

          .sectionTitle h2,
          .previewHeading h2 {
            font-size: 32px;
          }

          .categoryGrid,
          .problemColumns,
          .benefitsGrid,
          .includedGrid {
            grid-template-columns: 1fr;
          }

          .categoryImage,
          .benefitImage {
            height: 220px;
          }

          .problemPanel {
            grid-template-columns: 1fr;
          }

          .problemPanel img {
            height: 230px;
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
              repeat(3, minmax(0, 1fr));
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
          .previewFreeBadge {
            display: none;
          }

          .includedHeader {
            display: grid;
            justify-items: center;
            text-align: center;
          }

          .includedHeader
            .sectionTitle {
            text-align: center;
          }

          .includedHeader
            .titleLine {
            margin-right: auto;
            margin-left: auto;
          }

          .stepsGrid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .flowBox,
          .faqBox {
            padding: 23px 17px;
          }

          .finalCtaInner {
            width: calc(100% - 24px);
          }

          .footerInner {
            grid-template-columns: 1fr;
            gap: 30px;
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

          .heroLead {
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

          .stepsGrid {
            grid-template-columns: 1fr;
          }

          .finalCta h2 {
            font-size: 27px;
          }
        }
      `}</style>
    </main>
  );
}
