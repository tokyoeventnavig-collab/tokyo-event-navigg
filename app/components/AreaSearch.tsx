"use client";

import Link from "next/link";
import {
  useMemo,
  useState,
} from "react";
import type {
  EventItem,
} from "../../lib/notion";

type AreaSearchProps = {
  events: EventItem[];
};

type AreaItem = {
  area: string;
  count: number;
};

function normalizeText(
  value: string,
): string {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/\s+/g, "");
}

export default function AreaSearch({
  events,
}: AreaSearchProps) {
  const [keyword, setKeyword] =
    useState("");

  const [isFocused, setIsFocused] =
    useState(false);

  const areas = useMemo<
    AreaItem[]
  >(() => {
    const counts =
      events.reduce<
        Record<string, number>
      >((result, event) => {
        const area =
          event.area?.trim();

        if (
          !area ||
          area === "その他"
        ) {
          return result;
        }

        result[area] =
          (result[area] || 0) + 1;

        return result;
      }, {});

    return Object.entries(counts)
      .map(([area, count]) => ({
        area,
        count,
      }))
      .sort((a, b) => {
        if (a.count !== b.count) {
          return b.count - a.count;
        }

        return a.area.localeCompare(
          b.area,
          "ja",
        );
      });
  }, [events]);

  const filteredAreas =
    useMemo(() => {
      const normalizedKeyword =
        normalizeText(keyword);

      if (!normalizedKeyword) {
        return areas.slice(0, 8);
      }

      return areas
        .filter(({ area }) =>
          normalizeText(
            area,
          ).includes(
            normalizedKeyword,
          ),
        )
        .slice(0, 8);
    }, [areas, keyword]);

  const shouldShowSuggestions =
    isFocused &&
    areas.length > 0;

  return (
    <section className="areaSearchSection">
      <div className="areaSearchContainer">
        <div className="areaSearchHeading">
          <p>SEARCH BY AREA</p>

          <h2>
            <span>エリアから</span>
            <strong>
              イベントを探す
            </strong>
          </h2>

          <p className="areaSearchDescription">
            開催場所を入力して、
            参加しやすいイベントを探せます。
          </p>
        </div>

        <div className="areaSearchBox">
          <div className="searchInputWrap">
            <span className="searchIcon">
              📍
            </span>

            <input
              type="search"
              value={keyword}
              onChange={(event) =>
                setKeyword(
                  event.target.value,
                )
              }
              onFocus={() =>
                setIsFocused(true)
              }
              onBlur={() => {
                window.setTimeout(
                  () =>
                    setIsFocused(
                      false,
                    ),
                  150,
                );
              }}
              placeholder="新宿、渋谷、池袋など"
              aria-label="エリアを検索"
            />

            {keyword && (
              <button
                type="button"
                className="clearButton"
                onClick={() =>
                  setKeyword("")
                }
                aria-label="入力内容を削除"
              >
                ×
              </button>
            )}
          </div>

          {shouldShowSuggestions && (
            <div className="suggestionPanel">
              <div className="suggestionHead">
                <strong>
                  {keyword
                    ? "検索候補"
                    : "掲載中のエリア"}
                </strong>

                <span>
                  {filteredAreas.length}
                  件
                </span>
              </div>

              {filteredAreas.length >
              0 ? (
                <div className="suggestionList">
                  {filteredAreas.map(
                    ({
                      area,
                      count,
                    }) => (
                      <Link
                        key={area}
                        href={`/areas/${encodeURIComponent(
                          area,
                        )}`}
                        className="suggestionItem"
                      >
                        <span className="suggestionPin">
                          📍
                        </span>

                        <span className="suggestionText">
                          <strong>
                            {area}
                          </strong>

                          <small>
                            開催予定のイベント
                          </small>
                        </span>

                        <span className="suggestionCount">
                          {count}
                          <small>件</small>
                        </span>

                        <span className="suggestionArrow">
                          →
                        </span>
                      </Link>
                    ),
                  )}
                </div>
              ) : (
                <div className="noResult">
                  <span>🔍</span>

                  <div>
                    <strong>
                      該当するエリアは
                      ありません
                    </strong>

                    <p>
                      別の地名で
                      検索してください。
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="popularAreas">
            <span>
              よく検索されるエリア
            </span>

            <div>
              {areas
                .slice(0, 5)
                .map(
                  ({
                    area,
                    count,
                  }) => (
                    <Link
                      key={area}
                      href={`/areas/${encodeURIComponent(
                        area,
                      )}`}
                    >
                      {area}
                      <small>
                        {count}件
                      </small>
                    </Link>
                  ),
                )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .areaSearchSection {
          position: relative;
          padding: 90px 0;
          background:
            radial-gradient(
              circle at 8% 15%,
              rgba(
                242,
                100,
                25,
                0.09
              ),
              transparent 28%
            ),
            radial-gradient(
              circle at 92% 85%,
              rgba(
                39,
                134,
                90,
                0.08
              ),
              transparent 30%
            ),
            #fffaf3;
        }

        .areaSearchContainer {
          width: min(
            900px,
            calc(100% - 40px)
          );
          margin: 0 auto;
        }

        .areaSearchHeading {
          margin-bottom: 34px;
          text-align: center;
        }

        .areaSearchHeading > p:first-child {
          margin: 0 0 11px;
          color: #f26419;
          font-size: 9px;
          font-weight: 1000;
          letter-spacing: 0.21em;
        }

        .areaSearchHeading h2 {
          display: grid;
          gap: 2px;
          margin: 0;
          color: #17243b;
          font-size: clamp(
            34px,
            5vw,
            53px
          );
          line-height: 1.28;
          letter-spacing: -0.05em;
        }

        .areaSearchHeading h2 span,
        .areaSearchHeading h2 strong {
          display: block;
        }

        .areaSearchHeading h2 strong {
          color: #f26419;
        }

        .areaSearchDescription {
          margin: 18px 0 0;
          color: #6c7584;
          font-size: 13px;
          line-height: 1.8;
        }

        .areaSearchBox {
          position: relative;
          z-index: 5;
          padding: 22px;
          border:
            1px solid
            rgba(
              231,
              193,
              159,
              0.56
            );
          border-radius: 22px;
          background:
            rgba(
              255,
              255,
              255,
              0.94
            );
          box-shadow:
            0 18px 48px
            rgba(
              64,
              44,
              25,
              0.1
            );
        }

        .searchInputWrap {
          position: relative;
          display: grid;
          grid-template-columns:
            48px minmax(0, 1fr)
            36px;
          align-items: center;
          min-height: 68px;
          padding: 0 14px;
          border:
            2px solid #ece8e2;
          border-radius: 16px;
          background: #fff;
          transition:
            border-color
              0.2s ease,
            box-shadow
              0.2s ease;
        }

        .searchInputWrap:focus-within {
          border-color: #f26419;
          box-shadow:
            0 0 0 4px
            rgba(
              242,
              100,
              25,
              0.09
            );
        }

        .searchIcon {
          font-size: 23px;
          text-align: center;
        }

        .searchInputWrap input {
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: #26344b;
          font: inherit;
          font-size: 17px;
          font-weight: 800;
        }

        .searchInputWrap input::placeholder {
          color: #a7a9ae;
          font-weight: 600;
        }

        .searchInputWrap input::-webkit-search-cancel-button {
          display: none;
        }

        .clearButton {
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          border: 0;
          border-radius: 50%;
          background: #f1eee9;
          color: #737983;
          cursor: pointer;
          font-size: 19px;
        }

        .suggestionPanel {
          position: absolute;
          z-index: 20;
          top: 101px;
          right: 22px;
          left: 22px;
          overflow: hidden;
          border:
            1px solid
            #e8e4de;
          border-radius: 17px;
          background: #fff;
          box-shadow:
            0 25px 55px
            rgba(
              31,
              36,
              45,
              0.17
            );
        }

        .suggestionHead {
          display: flex;
          justify-content:
            space-between;
          align-items: center;
          padding: 13px 16px;
          border-bottom:
            1px solid #efede9;
          background: #faf9f7;
        }

        .suggestionHead strong {
          color: #394458;
          font-size: 10px;
        }

        .suggestionHead span {
          color: #999da5;
          font-size: 9px;
        }

        .suggestionList {
          display: grid;
          max-height: 430px;
          overflow-y: auto;
        }

        .suggestionItem {
          display: grid;
          grid-template-columns:
            43px minmax(0, 1fr)
            auto 20px;
          align-items: center;
          gap: 11px;
          min-height: 72px;
          padding: 11px 15px;
          border-bottom:
            1px solid #f0eeea;
          color: #17243b;
          text-decoration: none;
          transition:
            background
              0.18s ease;
        }

        .suggestionItem:last-child {
          border-bottom: 0;
        }

        .suggestionItem:hover {
          background: #fff7ed;
        }

        .suggestionPin {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #fff0df;
          font-size: 19px;
        }

        .suggestionText {
          min-width: 0;
          display: grid;
          gap: 4px;
        }

        .suggestionText strong {
          color: #26344b;
          font-size: 14px;
        }

        .suggestionText small {
          color: #969ba4;
          font-size: 8px;
        }

        .suggestionCount {
          color: #f26419;
          font-size: 18px;
          font-weight: 1000;
        }

        .suggestionCount small {
          margin-left: 2px;
          font-size: 8px;
        }

        .suggestionArrow {
          color: #c7a68e;
          font-size: 16px;
          font-weight: 900;
        }

        .noResult {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
          padding: 34px 20px;
        }

        .noResult > span {
          font-size: 28px;
        }

        .noResult > div {
          display: grid;
          gap: 5px;
        }

        .noResult strong {
          color: #3d4655;
          font-size: 13px;
        }

        .noResult p {
          margin: 0;
          color: #9398a1;
          font-size: 9px;
        }

        .popularAreas {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 16px;
        }

        .popularAreas > span {
          flex: 0 0 auto;
          color: #8d8176;
          font-size: 9px;
          font-weight: 800;
        }

        .popularAreas > div {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .popularAreas a {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 7px 10px;
          border:
            1px solid #ebe6df;
          border-radius: 999px;
          background: #faf8f5;
          color: #5e6674;
          text-decoration: none;
          font-size: 9px;
          font-weight: 800;
        }

        .popularAreas a:hover {
          border-color: #f4b184;
          background: #fff0df;
          color: #d95712;
        }

        .popularAreas small {
          color: #f26419;
          font-size: 7px;
        }

        @media (
          max-width: 640px
        ) {
          .areaSearchSection {
            padding: 72px 0;
          }

          .areaSearchContainer {
            width:
              calc(100% - 24px);
          }

          .areaSearchHeading h2 {
            font-size: 31px;
          }

          .areaSearchBox {
            padding: 14px;
          }

          .searchInputWrap {
            grid-template-columns:
              39px minmax(0, 1fr)
              32px;
            min-height: 61px;
            padding: 0 10px;
          }

          .searchIcon {
            font-size: 20px;
          }

          .searchInputWrap input {
            font-size: 14px;
          }

          .suggestionPanel {
            top: 84px;
            right: 14px;
            left: 14px;
          }

          .popularAreas {
            align-items:
              flex-start;
            flex-direction:
              column;
          }
        }

        @media (
          max-width: 430px
        ) {
          .suggestionItem {
            grid-template-columns:
              40px minmax(0, 1fr)
              auto;
          }

          .suggestionArrow {
            display: none;
          }

          .suggestionCount {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
