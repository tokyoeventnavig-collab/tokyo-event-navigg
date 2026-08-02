"use client";

import Link from "next/link";
import {
  type FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { EventItem } from "../../lib/notion";

type AreaSearchProps = {
  events: EventItem[];
};

function normalizeText(value: string): string {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/\s+/g, "");
}

function getTimeText(event: EventItem): string {
  if (event.startTime && event.endTime) {
    return `${event.startTime}〜${event.endTime}`;
  }

  return event.startTime || event.endTime || "";
}

export default function AreaSearch({
  events,
}: AreaSearchProps) {
  const [inputValue, setInputValue] =
    useState("");

  const [selectedArea, setSelectedArea] =
    useState("");

  const [
    searchedKeyword,
    setSearchedKeyword,
  ] = useState("");

  const [
    showSuggestions,
    setShowSuggestions,
  ] = useState(false);

  const [visibleCount, setVisibleCount] =
    useState(10);

  useEffect(() => {
    setVisibleCount(10);
  }, [searchedKeyword]);

  /*
   * 掲載イベントから検索候補を自動生成します。
   * 候補には件数を表示しません。
   */
  const areaOptions = useMemo(() => {
    const areas = events
      .map((event) => event.area?.trim())
      .filter(
        (area): area is string =>
          Boolean(area) &&
          area !== "その他",
      );

    return Array.from(new Set(areas)).sort(
      (a, b) =>
        a.localeCompare(b, "ja"),
    );
  }, [events]);

  const suggestions = useMemo(() => {
    const keyword =
      normalizeText(inputValue);

    if (!keyword) {
      return areaOptions.slice(0, 8);
    }

    return areaOptions
      .filter((area) =>
        normalizeText(area).includes(
          keyword,
        ),
      )
      .slice(0, 8);
  }, [areaOptions, inputValue]);

  /*
   * エリア、自動判定住所、会場名を
   * 検索対象にします。
   */
  const filteredEvents = useMemo(() => {
    const keyword = normalizeText(
      searchedKeyword,
    );

    if (!keyword) {
      return [];
    }

    return events.filter((event) => {
      const target = normalizeText(
        [
          event.area,
          event.location,
          event.venueAddress,
        ]
          .filter(Boolean)
          .join(" "),
      );

      return target.includes(keyword);
    });
  }, [events, searchedKeyword]);

  const visibleEvents =
    filteredEvents.slice(0, visibleCount);

  const remainingCount = Math.max(
    filteredEvents.length - visibleCount,
    0,
  );

  const hasMoreEvents =
    remainingCount > 0;

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const keyword = (
      selectedArea || inputValue
    ).trim();

    if (!keyword) {
      setSearchedKeyword("");
      setShowSuggestions(false);
      return;
    }

    setInputValue(keyword);
    setSearchedKeyword(keyword);
    setShowSuggestions(false);
  }

  function handleInputChange(
    value: string,
  ) {
    setInputValue(value);
    setSelectedArea("");
    setShowSuggestions(true);
  }

  function selectSuggestion(
    area: string,
  ) {
    setInputValue(area);
    setSelectedArea(area);
    setShowSuggestions(false);
  }

  function searchArea(area: string) {
    setInputValue(area);
    setSelectedArea(area);
    setSearchedKeyword(area);
    setShowSuggestions(false);
  }

  function clearSearch() {
    setInputValue("");
    setSelectedArea("");
    setSearchedKeyword("");
    setShowSuggestions(false);
    setVisibleCount(10);
  }

  return (
    <section className="areaSection">
      <div className="areaContainer">
        <div className="sectionHead">
          <h2>エリアから探す</h2>
        </div>

        <p className="sectionDescription">
          開催場所を入力して、
          参加しやすいイベントを探せます。
        </p>

        <div className="searchPanel">
          <form
            className="searchForm"
            onSubmit={handleSubmit}
          >
            <div className="inputWrap">
              <span className="searchIcon">
                📍
              </span>

              <input
                type="search"
                value={inputValue}
                onChange={(event) =>
                  handleInputChange(
                    event.target.value,
                  )
                }
                onFocus={() =>
                  setShowSuggestions(true)
                }
                onBlur={() => {
                  window.setTimeout(() => {
                    setShowSuggestions(false);
                  }, 150);
                }}
                placeholder="新宿、渋谷、池袋など"
                aria-label="開催エリアを検索"
                autoComplete="off"
              />

              {inputValue && (
                <button
                  type="button"
                  className="clearButton"
                  onClick={clearSearch}
                  aria-label="入力内容を削除"
                >
                  ×
                </button>
              )}

              {showSuggestions &&
                inputValue &&
                suggestions.length > 0 && (
                  <div className="suggestions">
                    {suggestions.map(
                      (area) => (
                        <button
                          key={area}
                          type="button"
                          className="suggestion"
                          onMouseDown={(
                            event,
                          ) => {
                            event.preventDefault();
                            selectSuggestion(
                              area,
                            );
                          }}
                        >
                          <span>📍</span>
                          <strong>
                            {area}
                          </strong>
                        </button>
                      ),
                    )}
                  </div>
                )}
            </div>

            <button
              type="submit"
              className="searchButton"
            >
              <span>検索する</span>
              <strong>→</strong>
            </button>
          </form>

          {areaOptions.length > 0 && (
            <div className="quickAreas">
              <span>
                よく検索されるエリア
              </span>

              <div>
                {areaOptions
                  .slice(0, 6)
                  .map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() =>
                        searchArea(area)
                      }
                    >
                      {area}
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>

        {searchedKeyword && (
          <div className="results">
            <div className="resultHead">
              <div>
                <span className="searchedArea">
                  📍 {searchedKeyword}
                </span>

                <h3>検索結果</h3>
              </div>

              <button
                type="button"
                className="resetButton"
                onClick={clearSearch}
              >
                検索をリセット
              </button>
            </div>

            {filteredEvents.length === 0 ? (
              <div className="emptyResult">
                <span>🔍</span>

                <h3>
                  該当するイベントは
                  ありません
                </h3>

                <p>
                  別のエリア名や地名で
                  検索してください。
                </p>
              </div>
            ) : (
              <>
                <div className="eventGrid">
                  {visibleEvents.map(
                    (event) => {
                      const timeText =
                        getTimeText(event);

                      return (
                        <article
                          className="eventCard"
                          key={event.id}
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
                            {event.category && (
                              <span className="category">
                                {
                                  event.category
                                }
                              </span>
                            )}

                            <h3 className="eventTitle">
                              <Link
                                href={`/events/${event.id}`}
                              >
                                {
                                  event.title
                                }
                              </Link>
                            </h3>

                            <div className="eventMeta">
                              {event.date && (
                                <div className="metaRow">
                                  <span>
                                    📅
                                  </span>

                                  <strong>
                                    {
                                      event.date
                                    }
                                  </strong>
                                </div>
                              )}

                              {timeText && (
                                <div className="metaRow">
                                  <span>
                                    🕐
                                  </span>

                                  <strong>
                                    {timeText}
                                  </strong>
                                </div>
                              )}

                              {event.location && (
                                <div className="metaRow">
                                  <span>
                                    📍
                                  </span>

                                  <strong>
                                    {
                                      event.location
                                    }
                                  </strong>
                                </div>
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
                      );
                    },
                  )}
                </div>

                {hasMoreEvents && (
                  <div className="loadMore">
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleCount(
                          (current) =>
                            current + 10,
                        )
                      }
                    >
                      <span>
                        もっと見る
                      </span>

                      <small>
                        残り
                        {remainingCount}
                        件
                      </small>

                      <strong>↓</strong>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .areaSection {
          padding: 58px 0 82px;
          background: #f7f7f5;
        }

        .areaContainer {
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

        .sectionDescription {
          margin: 0 0 24px;
          color: #7d7d7d;
          font-size: 13px;
          line-height: 1.7;
        }

        .searchPanel {
          position: relative;
          z-index: 10;
          padding: 18px;
          border: 1px solid #e7e5df;
          border-radius: 16px;
          background: #fff;
          box-shadow:
            0 8px 25px
            rgba(0, 0, 0, 0.04);
        }

        .searchForm {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            138px;
          gap: 10px;
        }

        .inputWrap {
          position: relative;
          display: grid;
          grid-template-columns:
            42px minmax(0, 1fr)
            34px;
          align-items: center;
          min-height: 56px;
          padding: 0 11px;
          border: 1px solid #e5e3de;
          border-radius: 11px;
          background: #fafaf8;
        }

        .inputWrap:focus-within {
          border-color: #171717;
          background: #fff;
          box-shadow:
            0 0 0 3px
            rgba(0, 0, 0, 0.045);
        }

        .searchIcon {
          text-align: center;
          font-size: 19px;
        }

        .inputWrap input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #222;
          font-family: inherit;
          font-size: 14px;
          font-weight: 700;
        }

        .inputWrap input::placeholder {
          color: #aaa;
          font-weight: 500;
        }

        .inputWrap input::-webkit-search-cancel-button {
          display: none;
        }

        .clearButton {
          width: 29px;
          height: 29px;
          display: grid;
          place-items: center;
          border: 0;
          border-radius: 50%;
          background: #eceae6;
          color: #777;
          cursor: pointer;
          font-size: 17px;
        }

        .suggestions {
          position: absolute;
          z-index: 30;
          top: calc(100% + 7px);
          right: 0;
          left: 0;
          overflow: hidden;
          border: 1px solid #e5e3de;
          border-radius: 11px;
          background: #fff;
          box-shadow:
            0 16px 38px
            rgba(0, 0, 0, 0.13);
        }

        .suggestion {
          width: 100%;
          display: grid;
          grid-template-columns:
            32px minmax(0, 1fr);
          align-items: center;
          gap: 8px;
          padding: 12px 14px;
          border: 0;
          border-bottom:
            1px solid #efede9;
          background: #fff;
          color: #272727;
          cursor: pointer;
          text-align: left;
        }

        .suggestion:last-child {
          border-bottom: 0;
        }

        .suggestion:hover {
          background: #f7f7f4;
        }

        .suggestion span {
          font-size: 16px;
        }

        .suggestion strong {
          font-size: 13px;
        }

        .searchButton {
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          padding: 0 18px;
          border: 0;
          border-radius: 11px;
          background: #171717;
          color: #fff;
          cursor: pointer;
          font-family: inherit;
          font-size: 12px;
          font-weight: 900;
        }

        .searchButton:hover {
          background: #303030;
        }

        .searchButton strong {
          font-size: 17px;
        }

        .quickAreas {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 13px;
        }

        .quickAreas > span {
          flex: 0 0 auto;
          color: #999;
          font-size: 9px;
          font-weight: 700;
        }

        .quickAreas > div {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .quickAreas button {
          padding: 6px 10px;
          border: 1px solid #e7e4df;
          border-radius: 999px;
          background: #faf9f7;
          color: #646464;
          cursor: pointer;
          font-family: inherit;
          font-size: 9px;
          font-weight: 700;
        }

        .quickAreas button:hover {
          border-color: #171717;
          background: #171717;
          color: #fff;
        }

        .results {
          margin-top: 37px;
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

        .searchedArea {
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
          color: #171717;
          font-size: 23px;
        }

        .resetButton {
          border: 0;
          background: transparent;
          color: #888;
          cursor: pointer;
          font-family: inherit;
          font-size: 10px;
          font-weight: 700;
          text-decoration: underline;
        }

        /*
         * PCは5列×2段で、
         * 最初に最大10件表示します。
         */
        .eventGrid {
          display: grid;
          grid-template-columns:
            repeat(5, minmax(0, 1fr));
          gap: 14px;
          align-items: stretch;
        }

        .eventCard {
          display: flex;
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
          border: 1px solid #e8e8e4;
          border-radius: 14px;
          background: #fff;
          box-shadow:
            0 7px 20px
            rgba(0, 0, 0, 0.045);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .eventCard:hover {
          transform: translateY(-4px);
          box-shadow:
            0 13px 30px
            rgba(0, 0, 0, 0.08);
        }

        .imageLink {
          display: block;
          width: 100%;
          text-decoration: none;
          background: #eee;
        }

        /*
         * 画像の外枠を固定します。
         * 縦長フライヤーでもカードが
         * 縦に伸びません。
         */
        .imageWrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #eee;
        }

        .imageWrap :global(img) {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          max-width: none;
          max-height: none;
          margin: 0;
          object-fit: cover;
          object-position: center;
          transition:
            transform 0.3s ease;
        }

        .eventCard:hover
          .imageWrap :global(img) {
          transform: scale(1.04);
        }

        .placeholder {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          padding: 8px;
          color: #999;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-align: center;
        }

        .cardBody {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 12px;
        }

        .category {
          display: inline-flex;
          width: fit-content;
          max-width: 100%;
          margin-bottom: 8px;
          padding: 5px 8px;
          overflow: hidden;
          border-radius: 999px;
          background: #f1eee5;
          color: #5f5337;
          font-size: 8px;
          line-height: 1;
          font-weight: 800;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .eventTitle {
          display: -webkit-box;
          min-height: 39px;
          margin: 0;
          overflow: hidden;
          color: #222;
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
          gap: 7px;
          margin: 11px 0 13px;
        }

        .metaRow {
          display: grid;
          grid-template-columns:
            17px minmax(0, 1fr);
          align-items: start;
          gap: 5px;
          min-width: 0;
        }

        .metaRow > span {
          padding-top: 1px;
          font-size: 10px;
        }

        .metaRow strong {
          display: -webkit-box;
          min-width: 0;
          overflow: hidden;
          color: #4d4d4d;
          font-size: 8px;
          line-height: 1.5;
          font-weight: 700;
          overflow-wrap: anywhere;
          -webkit-box-orient:
            vertical;
          -webkit-line-clamp: 1;
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

        .detailButton:hover {
          background: #303030;
        }

        .loadMore {
          display: flex;
          justify-content: center;
          margin-top: 25px;
        }

        .loadMore button {
          min-width: 210px;
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            auto
            20px;
          align-items: center;
          gap: 9px;
          padding: 13px 17px;
          border: 1px solid #dedbd5;
          border-radius: 11px;
          background: #fff;
          box-shadow:
            0 7px 20px
            rgba(0, 0, 0, 0.045);
          color: #222;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
        }

        .loadMore button:hover {
          border-color: #171717;
        }

        .loadMore span {
          font-size: 11px;
          font-weight: 900;
        }

        .loadMore small {
          color: #999;
          font-size: 8px;
        }

        .loadMore strong {
          font-size: 14px;
          text-align: right;
        }

        .emptyResult {
          display: grid;
          justify-items: center;
          padding: 55px 20px;
          border-radius: 16px;
          background: #fff;
          box-shadow:
            0 8px 25px
            rgba(0, 0, 0, 0.04);
          text-align: center;
        }

        .emptyResult > span {
          font-size: 36px;
        }

        .emptyResult h3 {
          margin: 15px 0 7px;
          font-size: 19px;
        }

        .emptyResult p {
          margin: 0;
          color: #888;
          font-size: 11px;
          line-height: 1.7;
        }

        @media (max-width: 1000px) {
          .eventGrid {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );
          }
        }

        @media (max-width: 640px) {
          .areaSection {
            padding: 50px 0 68px;
          }

          .areaContainer {
            width: calc(100% - 24px);
          }

          .searchPanel {
            padding: 13px;
          }

          .searchForm {
            grid-template-columns: 1fr;
          }

          .searchButton {
            min-height: 50px;
          }

          .quickAreas {
            align-items: flex-start;
            flex-direction: column;
          }

          .resultHead {
            align-items: flex-start;
            flex-direction: column;
          }

          .eventGrid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
            gap: 10px;
          }

          .cardBody {
            padding: 10px;
          }

          .eventTitle {
            min-height: 36px;
            font-size: 11px;
          }

          .loadMore button {
            width: 100%;
            min-width: 0;
          }
        }

        @media (max-width: 370px) {
          .eventGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
