"use client";

import Link from "next/link";
import {
  FormEvent,
  useMemo,
  useState,
} from "react";

import type {
  EventItem,
} from "../../lib/notion";

type AreaSearchProps = {
  events: EventItem[];
};

function normalizeText(
  value: string,
): string {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/\s+/g, "");
}

function getEventTimestamp(
  event: EventItem,
): number {
  const source =
    event.dateStart ||
    event.dateISO ||
    event.date ||
    "";

  if (!source) {
    return Number.POSITIVE_INFINITY;
  }

  const timestamp =
    new Date(source).getTime();

  return Number.isNaN(timestamp)
    ? Number.POSITIVE_INFINITY
    : timestamp;
}

function getTimeText(
  event: EventItem,
): string {
  if (
    event.startTime &&
    event.endTime
  ) {
    return `${event.startTime} 〜 ${event.endTime}`;
  }

  return (
    event.startTime ||
    event.endTime ||
    "時間未定"
  );
}

export default function AreaSearch({
  events,
}: AreaSearchProps) {
  const [inputValue, setInputValue] =
    useState("");

  const [
    selectedArea,
    setSelectedArea,
  ] = useState("");

  const [
    searchedKeyword,
    setSearchedKeyword,
  ] = useState("");

  const [
    showSuggestions,
    setShowSuggestions,
  ] = useState(false);

  /*
   * 現在掲載されているイベントから、
   * エリア候補を自動生成します。
   */
  const areaOptions =
    useMemo(() => {
      const values = events
        .map((event) =>
          event.area?.trim(),
        )
        .filter(
          (
            area,
          ): area is string =>
            Boolean(area) &&
            area !== "その他",
        );

      return Array.from(
        new Set(values),
      ).sort((a, b) =>
        a.localeCompare(b, "ja"),
      );
    }, [events]);

  /*
   * 入力文字に一致する候補だけを表示します。
   * 候補には件数を表示しません。
   */
  const suggestions =
    useMemo(() => {
      const keyword =
        normalizeText(inputValue);

      if (!keyword) {
        return areaOptions.slice(0, 8);
      }

      return areaOptions
        .filter((area) =>
          normalizeText(
            area,
          ).includes(keyword),
        )
        .slice(0, 8);
    }, [
      areaOptions,
      inputValue,
    ]);

  /*
   * 検索ボタンを押した後だけ、
   * 該当イベントを表示します。
   *
   * areaだけでなく、
   * 会場名・住所も検索対象にしています。
   */
  const filteredEvents =
    useMemo(() => {
      const keyword =
        normalizeText(
          searchedKeyword,
        );

      if (!keyword) {
        return [];
      }

      return events
        .filter((event) => {
          const searchTarget =
            normalizeText(
              [
                event.area,
                event.location,
                event.venueAddress,
              ]
                .filter(Boolean)
                .join(" "),
            );

          return searchTarget.includes(
            keyword,
          );
        })
        .sort(
          (a, b) =>
            getEventTimestamp(a) -
            getEventTimestamp(b),
        );
    }, [
      events,
      searchedKeyword,
    ]);

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const keyword =
      (
        selectedArea ||
        inputValue
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

  function selectSuggestion(
    area: string,
  ) {
    setInputValue(area);
    setSelectedArea(area);
    setShowSuggestions(false);
  }

  function handleInputChange(
    value: string,
  ) {
    setInputValue(value);
    setSelectedArea("");
    setShowSuggestions(true);
  }

  function clearSearch() {
    setInputValue("");
    setSelectedArea("");
    setSearchedKeyword("");
    setShowSuggestions(false);
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

        <div className="searchArea">
          <form
            className="searchForm"
            onSubmit={handleSubmit}
          >
            <div className="inputArea">
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
                  setShowSuggestions(
                    true,
                  )
                }
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
                suggestions.length >
                  0 && (
                  <div className="suggestions">
                    {suggestions.map(
                      (area) => (
                        <button
                          key={area}
                          type="button"
                          className="suggestionItem"
                          onMouseDown={(
                            event,
                          ) => {
                            /*
                             * inputのblurより先に
                             * 選択処理を行います。
                             */
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
                    onClick={() => {
                      setInputValue(
                        area,
                      );

                      setSelectedArea(
                        area,
                      );

                      setSearchedKeyword(
                        area,
                      );

                      setShowSuggestions(
                        false,
                      );
                    }}
                  >
                    {area}
                  </button>
                ))}
            </div>
          </div>
        </div>

        {searchedKeyword && (
          <div className="results">
            <div className="resultHead">
              <div>
                <span>
                  📍
                  {searchedKeyword}
                </span>

                <h3>
                  検索結果
                </h3>
              </div>

              <button
                type="button"
                onClick={clearSearch}
              >
                検索をリセット
              </button>
            </div>

            {filteredEvents.length ===
            0 ? (
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
              <div className="eventGrid">
                {filteredEvents.map(
                  (event) => (
                    <article
                      className="eventCard"
                      key={event.id}
                    >
                      <Link
                        href={`/events/${event.id}`}
                        className="imageLink"
                      >
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

                        {event.area && (
                          <span className="areaLabel">
                            📍
                            {event.area}
                          </span>
                        )}
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
                            {event.title}
                          </Link>
                        </h3>

                        <div className="eventInformation">
                          {event.date && (
                            <div className="infoRow">
                              <span>
                                📅
                              </span>

                              <div>
                                <small>
                                  開催日
                                </small>

                                <strong>
                                  {
                                    event.date
                                  }
                                </strong>
                              </div>
                            </div>
                          )}

                          <div className="infoRow">
                            <span>
                              🕐
                            </span>

                            <div>
                              <small>
                                開催時間
                              </small>

                              <strong>
                                {getTimeText(
                                  event,
                                )}
                              </strong>
                            </div>
                          </div>

                          {event.location && (
                            <div className="infoRow">
                              <span>
                                📍
                              </span>

                              <div>
                                <small>
                                  会場
                                </small>

                                <strong>
                                  {
                                    event.location
                                  }
                                </strong>
                              </div>
                            </div>
                          )}
                        </div>

                        <Link
                          href={`/events/${event.id}`}
                          className="detailButton"
                        >
                          <span>
                            詳細を見る
                          </span>

                          <strong>
                            →
                          </strong>
                        </Link>
                      </div>
                    </article>
                  ),
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .areaSection {
          padding: 80px 0 100px;
          background: #f7f7f5;
        }

        .areaContainer {
          width: min(
            1120px,
            calc(100% - 40px)
          );
          margin: 0 auto;
        }

        /*
         * TOPページの従来見出しと
         * 同じシンプルな構成です。
         */
        .sectionHead {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
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
          margin: 0 0 28px;
          color: #7d7d7d;
          font-size: 13px;
          line-height: 1.7;
        }

        .searchArea {
          position: relative;
          z-index: 10;
          padding: 22px;
          border: 1px solid #e7e5df;
          border-radius: 17px;
          background: #fff;
          box-shadow:
            0 10px 30px
            rgba(0, 0, 0, 0.045);
        }

        .searchForm {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            145px;
          gap: 12px;
        }

        .inputArea {
          position: relative;
          display: grid;
          grid-template-columns:
            46px minmax(0, 1fr)
            38px;
          align-items: center;
          min-height: 62px;
          padding: 0 12px;
          border: 2px solid #ebe9e4;
          border-radius: 12px;
          background: #fafaf8;
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .inputArea:focus-within {
          border-color: #171717;
          background: #fff;
          box-shadow:
            0 0 0 4px
            rgba(0, 0, 0, 0.055);
        }

        .searchIcon {
          text-align: center;
          font-size: 21px;
        }

        .inputArea input {
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: #222;
          font-family: inherit;
          font-size: 15px;
          font-weight: 700;
        }

        .inputArea input::placeholder {
          color: #aaa;
          font-weight: 500;
        }

        .inputArea input::-webkit-search-cancel-button {
          display: none;
        }

        .clearButton {
          width: 31px;
          height: 31px;
          display: grid;
          place-items: center;
          border: 0;
          border-radius: 50%;
          background: #eceae6;
          color: #777;
          cursor: pointer;
          font-size: 18px;
        }

        .suggestions {
          position: absolute;
          z-index: 30;
          top: calc(
            100% + 8px
          );
          right: 0;
          left: 0;
          overflow: hidden;
          border: 1px solid #e5e3de;
          border-radius: 12px;
          background: #fff;
          box-shadow:
            0 18px 42px
            rgba(0, 0, 0, 0.14);
        }

        .suggestionItem {
          width: 100%;
          display: grid;
          grid-template-columns:
            35px minmax(0, 1fr);
          align-items: center;
          gap: 9px;
          padding: 13px 15px;
          border: 0;
          border-bottom:
            1px solid #efede9;
          background: #fff;
          color: #272727;
          cursor: pointer;
          text-align: left;
        }

        .suggestionItem:last-child {
          border-bottom: 0;
        }

        .suggestionItem:hover {
          background: #f7f7f4;
        }

        .suggestionItem > span {
          font-size: 17px;
        }

        .suggestionItem strong {
          font-size: 13px;
        }

        .searchButton {
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          padding: 0 20px;
          border: 0;
          border-radius: 12px;
          background: #171717;
          color: #fff;
          cursor: pointer;
          font-family: inherit;
          font-size: 13px;
          font-weight: 900;
          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .searchButton:hover {
          background: #303030;
          transform:
            translateY(-2px);
        }

        .searchButton strong {
          font-size: 19px;
        }

        .quickAreas {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 15px;
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
          gap: 7px;
        }

        .quickAreas button {
          padding: 7px 11px;
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
          margin-top: 45px;
        }

        .resultHead {
          display: flex;
          justify-content:
            space-between;
          align-items: flex-end;
          gap: 20px;
          margin-bottom: 24px;
        }

        .resultHead > div {
          display: grid;
          gap: 7px;
        }

        .resultHead > div > span {
          width: fit-content;
          padding: 7px 11px;
          border-radius: 999px;
          background: #eeeae1;
          color: #655d4e;
          font-size: 10px;
          font-weight: 800;
        }

        .resultHead h3 {
          margin: 0;
          color: #171717;
          font-size: 25px;
        }

        .resultHead > button {
          border: 0;
          background: transparent;
          color: #888;
          cursor: pointer;
          font-family: inherit;
          font-size: 10px;
          font-weight: 700;
          text-decoration: underline;
        }

        .eventGrid {
          display: grid;
          grid-template-columns:
            repeat(
              3,
              minmax(0, 1fr)
            );
          gap: 22px;
          align-items: stretch;
        }

        .eventCard {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid #e8e8e4;
          border-radius: 17px;
          background: #fff;
          box-shadow:
            0 10px 30px
            rgba(0, 0, 0, 0.045);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .eventCard:hover {
          transform:
            translateY(-5px);
          box-shadow:
            0 18px 40px
            rgba(0, 0, 0, 0.09);
        }

        .imageLink {
          position: relative;
          display: block;
          overflow: hidden;
          background: #eee;
        }

        .imageLink img,
        .placeholder {
          display: block;
          width: 100%;
          aspect-ratio: 16 / 10;
        }

        .imageLink img {
          object-fit: cover;
          transition:
            transform 0.35s ease;
        }

        .eventCard:hover
          .imageLink img {
          transform: scale(1.04);
        }

        .placeholder {
          display: grid;
          place-items: center;
          color: #999;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.13em;
        }

        .areaLabel {
          position: absolute;
          right: 11px;
          bottom: 11px;
          padding: 7px 10px;
          border-radius: 999px;
          background:
            rgba(
              23,
              23,
              23,
              0.85
            );
          color: #fff;
          font-size: 9px;
          font-weight: 800;
          backdrop-filter:
            blur(7px);
        }

        .cardBody {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        .category {
          display: inline-flex;
          width: fit-content;
          margin-bottom: 14px;
          padding: 7px 12px;
          border-radius: 999px;
          background: #f1eee5;
          color: #5f5337;
          font-size: 11px;
          line-height: 1;
          font-weight: 800;
        }

        .eventTitle {
          margin: 0;
          font-size: 19px;
          line-height: 1.5;
        }

        .eventTitle a {
          color: inherit;
          text-decoration: none;
        }

        .eventInformation {
          display: grid;
          gap: 14px;
          margin: 22px 0 24px;
        }

        .infoRow {
          display: grid;
          grid-template-columns:
            27px minmax(0, 1fr);
          align-items: start;
          gap: 9px;
        }

        .infoRow > span {
          padding-top: 1px;
          font-size: 16px;
        }

        .infoRow > div {
          min-width: 0;
          display: grid;
          gap: 3px;
        }

        .infoRow small {
          color: #999;
          font-size: 9px;
          font-weight: 700;
        }

        .infoRow strong {
          color: #222;
          font-size: 13px;
          line-height: 1.55;
          overflow-wrap: anywhere;
        }

        .detailButton {
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          margin-top: auto;
          padding: 14px 16px;
          border-radius: 10px;
          background: #171717;
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
        }

        .detailButton strong {
          font-size: 18px;
        }

        .emptyResult {
          display: grid;
          justify-items: center;
          padding: 65px 20px;
          border-radius: 17px;
          background: #fff;
          box-shadow:
            0 10px 30px
            rgba(0, 0, 0, 0.045);
          text-align: center;
        }

        .emptyResult > span {
          font-size: 40px;
        }

        .emptyResult h3 {
          margin: 17px 0 8px;
          font-size: 21px;
        }

        .emptyResult p {
          margin: 0;
          color: #888;
          font-size: 12px;
          line-height: 1.7;
        }

        @media (
          max-width: 900px
        ) {
          .eventGrid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }
        }

        @media (
          max-width: 640px
        ) {
          .areaSection {
            padding: 60px 0 75px;
          }

          .areaContainer {
            width:
              calc(100% - 24px);
          }

          .searchArea {
            padding: 14px;
          }

          .searchForm {
            grid-template-columns: 1fr;
          }

          .searchButton {
            min-height: 54px;
          }

          .quickAreas {
            align-items:
              flex-start;
            flex-direction:
              column;
          }

          .resultHead {
            align-items:
              flex-start;
            flex-direction:
              column;
          }

          .eventGrid {
            grid-template-columns:
              1fr;
            gap: 18px;
          }
        }
      `}</style>
    </section>
  );
}
