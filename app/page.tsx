import { getEvents } from "@/lib/notion";

export const revalidate = 300;

export default async function Home() {
  const events = await getEvents();

  return (
    <main>
      <header className="hero">
        <div className="container">
          <p className="eyebrow">TOKYO EVENT NAVI</p>
          <h1>東京イベントナビ</h1>
          <p className="lead">東京で開催される飲み会・交流会・趣味イベントを掲載しています。</p>
        </div>
      </header>

      <section className="container section">
        <div className="sectionHead">
          <h2>開催予定のイベント</h2>
          <span>{events.length}件</span>
        </div>

        {events.length === 0 ? (
          <div className="empty">
            公開対象のイベントがありません。Notionの「公開」をオンにしてください。
          </div>
        ) : (
          <div className="grid">
            {events.map((event) => (
              <article className="card" key={event.id}>
                {event.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={event.image} alt="" className="image" />
                ) : (
                  <div className="image placeholder">TOKYO EVENT NAVI</div>
                )}
                <div className="cardBody">
                  {event.category && <div className="category">{event.category}</div>}
                  <h3>{event.title}</h3>
                  <dl>
                    {event.date && (
                      <>
                        <dt>日時</dt><dd>{event.date}</dd>
                      </>
                    )}
                    {event.location && (
                      <>
                        <dt>場所</dt><dd>{event.location}</dd>
                      </>
                    )}
                    {event.price && (
                      <>
                        <dt>料金</dt><dd>{event.price}</dd>
                      </>
                    )}
                  </dl>
                  {event.description && <p className="description">{event.description}</p>}
                  {event.url && (
                    <a className="button" href={event.url} target="_blank" rel="noreferrer">
                      詳細・申し込み
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
