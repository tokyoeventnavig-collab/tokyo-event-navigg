"use client";

import Link from "next/link";
import {
  useMemo,
  useState,
} from "react";

import type {
  EventItem,
} from "../../lib/notion";

type CategorySearchProps = {
  events: EventItem[];
  categories: string[];
};

const categoryIcons:
  Record<string, string> = {
  飲み会: "🍻",
  交流会: "🤝",
  カフェ会: "☕",
  ランチ会: "🍽️",
  ボードゲーム: "🎲",
  ゲーム会: "🎮",
  セミナー: "📊",
  勉強会: "📚",
  スポーツ: "🏃",
  アウトドア: "⛺",
  趣味: "🎨",
  体験: "✨",
  ビジネス: "💼",
  恋活: "💗",
  婚活: "💍",
  その他: "📌",
};

function normalizeText(
  value: string,
): string {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/\s+/g, "");
}

function getCategoryIcon(
  category: string,
): string {
  const matchedEntry =
    Object.entries(
      categoryIcons,
    ).find(([keyword]) =>
      category.includes(keyword),
    );

  return (
    matchedEntry?.[1] || "🎉"
  );
}

function eventHasCategory(
  event: EventItem,
  category: string,
): boolean {
  const target =
    normalizeText(
      event.category || "",
    );

  const keyword =
    normalizeText(category);

  return (
    target === keyword ||
    target
      .split(/[・,、/／]/)
      .some(
        (item) =>
          item === keyword,
      ) ||
    target.includes(keyword)
  );
}

export default function CategorySearch({
  events,
  categories,
}: CategorySearchProps) {
  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("");

  const filteredEvents =
    useMemo(() => {
      if (!selectedCategory) {
        return [];
      }

      return events.filter(
        (event) =>
          eventHasCategory(
            event,
            selectedCategory,
          ),
      );
    }, [
      events,
      selectedCategory,
    ]);

  return (
    <section className="categorySection">
      <div className="container">
        <div className="sectionHead">
          <h2>
            カテゴリーから探す
          </h2>
        </div>

        <p className="description">
          気になるジャンルから、
          参加したいイベントを探せます。
        </p>

        {categories.length === 0 ? (
          <div className="noCategories">
            Notionの「カテゴリー」列に
            選択肢を登録してください。
          </div>
        ) : (
          <div className="categoryGrid">
            {categories.map(
              (category) => {
                const eventCount =
                  events.filter(
                    (event) =>
                      eventHasCategory(
                        event,
                        category,
                      ),
                  ).length;

                const isSelected =
                  selectedCategory ===
                  category;

                return (
                  <button
                    key={category}
                    type="button"
                    className={
                      isSelected
                        ? "categoryCard active"
                        : "categoryCard"
                    }
                    onClick={() =>
                      setSelectedCategory(
                        isSelected
                          ? ""
                          : category,
                      )
                    }
                  >
                    <span className="icon">
                      {getCategoryIcon(
                        category,
                      )}
                    </span>

                    <span className="categoryText">
                      <strong>
                        {category}
                      </strong>

                      <small>
                        {eventCount > 0
                          ? "イベントを見る"
                          : "現在掲載準備中"}
                      </small>
                    </span>

                    <span className="arrow">
                      →
                    </span>
                  </button>
                );
              },
            )}
          </div>
        )}

        {selectedCategory && (
          <div className="results">
            <div className="resultHead">
              <div>
                <span>
                  {getCategoryIcon(
                    selectedCategory,
                  )}
                  {selectedCategory}
                </span>

                <h3>
                  カテゴリー検索結果
                </h3>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedCategory("")
                }
              >
                検索をリセット
              </button>
            </div>

            {filteredEvents.length ===
            0 ? (
              <div className="empty">
                <span>📅</span>

                <h3>
                  現在、このカテゴリーの
                  イベントはありません
                </h3>

                <p>
                  イベントが掲載されると、
                  こちらに自動表示されます。
                </p>
              </div>
            ) : (
              <div className="eventGrid">
                {filteredEvents
                  .slice(0, 10)
                  .map((event) => (
                    <article
                      key={event.id}
                      className="eventCard"
                    >
                      <Link
                        href={`/events/${event.id}`}
                        className="imageLink"
                      >
                        <div className="imageWrap">
                          {event.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={
                                event.image
                              }
                              alt={
                                event.title
                              }
                            />
                          ) : (
                            <div className="placeholder">
                              TOKYO EVENT NAVI
                            </div>
                          )}
                        </div>
                      </Link>

                      <div className="cardBody">
                        <span className="categoryLabel">
                          {
                            event.category
                          }
                        </span>

                        <h3 className="eventTitle">
                          <Link
                            href={`/events/${event.id}`}
                          >
                            {event.title}
                          </Link>
                        </h3>

                        <div className="eventMeta">
                          {event.date && (
                            <p>
                              📅{" "}
                              {event.date}
                            </p>
                          )}

                          {event.location && (
                            <p>
                              📍{" "}
                              {
                                event.location
                              }
                            </p>
                          )}
                        </div>

                        <Link
                          href={`/events/${event.id}`}
                          className="detailButton"
                        >
                          詳細を見る
                        </Link>
                      </div>
                    </article>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .categorySection {
          padding: 58px 0 82px;
          background: #ffffff;
        }

        .container {
          width: min(
            1120px,
            calc(100% - 40px)
          );
          margin: 0 auto;
        }

        .sectionHead {
          margin-bottom: 8px;
        }

        .sectionHead h2 {
          margin: 0;
          color: #171717;
          font-size: clamp(
            27px,
            4vw,
            38px
          );
          line-height: 1.3;
          letter-spacing: -0.03em;
        }

        .description {
          margin: 0 0 25px;
          color: #7d7d7d;
          font-size: 13px;
          line-height: 1.7;
        }

        .categoryGrid {
          display: grid;
          grid-template-columns:
            repeat(
              5,
              minmax(0, 1fr)
            );
          gap: 12px;
        }

        .categoryCard {
          min-width: 0;
          min-height: 100px;
          display: grid;
          grid-template-columns:
            43px
            minmax(0, 1fr)
            18px;
          align-items: center;
          gap: 10px;
          padding: 15px;
          border: 1px solid
            #e7e5df;
          border-radius: 14px;
          background: #fff;
          box-shadow:
            0 7px 20px
            rgba(0, 0, 0, 0.04);
          color: #222;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .categoryCard:hover,
        .categoryCard.active {
          border-color: #171717;
          box-shadow:
            0 13px 28px
            rgba(0, 0, 0, 0.08);
          transform:
            translateY(-3px);
        }

        .icon {
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #f4f1e9;
          font-size: 20px;
        }

        .categoryText {
          min-width: 0;
          display: grid;
          gap: 5px;
        }

        .categoryText strong {
          overflow: hidden;
          color: #2b2b2b;
          font-size: 12px;
          line-height: 1.4;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .categoryText small {
          color: #999;
          font-size: 8px;
        }

        .arrow {
          color: #aaa;
          font-size: 15px;
          font-weight: 900;
        }

        .results {
          margin-top: 40px;
        }

        .resultHead {
          display: flex;
          justify-content:
            space-between;
          align-items: flex-end;
          gap: 20px;
          margin-bottom: 20px;
        }

        .resultHead > div {
          display: grid;
          gap: 6px;
        }

        .resultHead > div > span {
          width: fit-content;
          padding: 6px 10px;
          border-radius: 999px;
          background: #eeeae1;
          color: #655d4e;
          font-size: 9px;
          font-weight: 800;
        }

        .resultHead h3 {
          margin: 0;
          font-size: 23px;
        }

        .resultHead button {
          border: 0;
          background: transparent;
          color: #888;
          cursor: pointer;
          font-family: inherit;
          font-size: 10px;
          text-decoration: underline;
        }

        .eventGrid {
          display: grid;
          grid-template-columns:
            repeat(
              5,
              minmax(0, 1fr)
            );
          gap: 14px;
        }

        .eventCard {
          min-width: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid
            #e8e8e4;
          border-radius: 14px;
          background: #fff;
          box-shadow:
            0 7px 20px
            rgba(0, 0, 0, 0.045);
        }

        .imageLink {
          display: block;
          background: #eee;
        }

        .imageWrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }

        .imageWrap :global(img) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .placeholder {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: #999;
          font-size: 7px;
          font-weight: 900;
        }

        .cardBody {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 12px;
        }

        .categoryLabel {
          width: fit-content;
          max-width: 100%;
          margin-bottom: 8px;
          padding: 5px 8px;
          overflow: hidden;
          border-radius: 999px;
          background: #f1eee5;
          color: #5f5337;
          font-size: 8px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .eventTitle {
          display: -webkit-box;
          min-height: 39px;
          margin: 0;
          overflow: hidden;
          font-size: 12px;
          line-height: 1.6;
          -webkit-box-orient:
            vertical;
          -webkit-line-clamp: 2;
        }

        .eventTitle a {
          color: inherit;
          text-decoration: none;
        }

        .eventMeta {
          display: grid;
          gap: 6px;
          margin: 11px 0 13px;
        }

        .eventMeta p {
          margin: 0;
          overflow: hidden;
          color: #555;
          font-size: 8px;
          line-height: 1.5;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .detailButton {
          display: block;
          margin-top: auto;
          padding: 9px;
          border-radius: 8px;
          background: #171717;
          color: #fff;
          text-align: center;
          text-decoration: none;
          font-size: 8px;
          font-weight: 800;
        }

        .empty,
        .noCategories {
          display: grid;
          justify-items: center;
          padding: 50px 20px;
          border-radius: 15px;
          background: #f7f7f5;
          color: #777;
          text-align: center;
        }

        .empty > span {
          font-size: 35px;
        }

        .empty h3 {
          margin: 15px 0 7px;
          font-size: 18px;
        }

        .empty p {
          margin: 0;
          font-size: 11px;
        }

        @media (
          max-width: 1000px
        ) {
          .categoryGrid,
          .eventGrid {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );
          }
        }

        @media (
          max-width: 640px
        ) {
          .container {
            width:
              calc(100% - 24px);
          }

          .categoryGrid,
          .eventGrid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
            gap: 10px;
          }

          .categoryCard {
            grid-template-columns:
              38px
              minmax(0, 1fr);
            padding: 11px;
          }

          .icon {
            width: 38px;
            height: 38px;
            font-size: 17px;
          }

          .arrow {
            display: none;
          }

          .resultHead {
            align-items:
              flex-start;
            flex-direction: column;
          }
        }

        @media (
          max-width: 370px
        ) {
          .categoryGrid,
          .eventGrid {
            grid-template-columns:
              1fr;
          }
        }
      `}</style>
    </section>
  );
}
