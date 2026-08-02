type NotionText = {
  plain_text?: string;
};

type Property = Record<string, any>;

type NotionPage = {
  id: string;
  url?: string;
  created_time?: string;
  properties?: Record<string, Property>;
  cover?: Property | null;
};

type NotionDatabase = {
  properties?: Record<string, Property>;
};

export type EventItem = {
  id: string;
  title: string;
  published: boolean;
  featured: boolean;

  date: string;
  dateISO: string;
  dateStart: string;
  createdTime: string;

  startTime: string;
  endTime: string;

  location: string;
  venueAddress: string;
  area: string;

  image: string;
  url: string;

  category: string;
  description: string;
  participationCondition: string;
  organizer: string;
};

const API_KEY =
  process.env.NOTION_API_KEY;

const DATABASE_ID =
  process.env.NOTION_DATABASE_ID;

const NOTION_VERSION =
  "2022-06-28";

const names = {
  title:
    process.env.NOTION_PROP_TITLE ||
    "イベント名",

  published:
    process.env.NOTION_PROP_PUBLISHED ||
    "公開",

  featured:
    process.env.NOTION_PROP_FEATURED ||
    "F1",

  date:
    process.env.NOTION_PROP_DATE ||
    "開催日",

  startTime:
    process.env.NOTION_PROP_START_TIME ||
    "開始時間",

  endTime:
    process.env.NOTION_PROP_END_TIME ||
    "終了時間",

  location:
    process.env.NOTION_PROP_LOCATION ||
    "会場名",

  venueAddress:
    process.env
      .NOTION_PROP_VENUE_ADDRESS ||
    "会場住所",

  image:
    process.env.NOTION_PROP_IMAGE ||
    "フライヤー",

  url:
    process.env.NOTION_PROP_URL ||
    "申込URL",

  category:
    process.env.NOTION_PROP_CATEGORY ||
    "カテゴリー",

  description:
    process.env
      .NOTION_PROP_DESCRIPTION ||
    "イベント概要",

  participationCondition:
    process.env
      .NOTION_PROP_PARTICIPATION_CONDITION ||
    "参加条件",

  organizer:
    process.env.NOTION_PROP_ORGANIZER ||
    "主催者",
};

function getHeaders(): Record<
  string,
  string
> {
  return {
    Authorization: `Bearer ${API_KEY}`,
    "Notion-Version": NOTION_VERSION,
    "Content-Type": "application/json",
  };
}

function text(
  prop?: Property,
): string {
  if (!prop) {
    return "";
  }

  const items: NotionText[] =
    prop.title ||
    prop.rich_text ||
    (prop.formula?.type ===
    "string"
      ? [
          {
            plain_text:
              prop.formula.string || "",
          },
        ]
      : []);

  return items
    .map(
      (item) =>
        item.plain_text || "",
    )
    .join("")
    .trim();
}

function value(
  prop?: Property,
): string {
  if (!prop) {
    return "";
  }

  if (
    prop.type === "title" ||
    prop.type === "rich_text"
  ) {
    return text(prop);
  }

  if (prop.type === "select") {
    return prop.select?.name || "";
  }

  if (prop.type === "status") {
    return prop.status?.name || "";
  }

  if (
    prop.type === "multi_select"
  ) {
    return (
      prop.multi_select || []
    )
      .map(
        (item: {
          name?: string;
        }) => item.name || "",
      )
      .filter(Boolean)
      .join("・");
  }

  if (prop.type === "number") {
    return prop.number == null
      ? ""
      : String(prop.number);
  }

  if (prop.type === "url") {
    return prop.url || "";
  }

  if (prop.type === "email") {
    return prop.email || "";
  }

  if (
    prop.type === "phone_number"
  ) {
    return (
      prop.phone_number || ""
    );
  }

  if (prop.type === "checkbox") {
    return prop.checkbox
      ? "true"
      : "false";
  }

  if (prop.type === "formula") {
    if (
      prop.formula?.type ===
      "string"
    ) {
      return (
        prop.formula.string || ""
      );
    }

    if (
      prop.formula?.type ===
      "number"
    ) {
      return prop.formula
        .number == null
        ? ""
        : String(
            prop.formula.number,
          );
    }

    if (
      prop.formula?.type ===
      "boolean"
    ) {
      return prop.formula
        .boolean
        ? "true"
        : "false";
    }
  }

  return text(prop);
}

function checkboxValue(
  prop?: Property,
): boolean {
  if (!prop) {
    return false;
  }

  if (prop.type === "checkbox") {
    return Boolean(
      prop.checkbox,
    );
  }

  if (
    prop.type === "formula" &&
    prop.formula?.type ===
      "boolean"
  ) {
    return Boolean(
      prop.formula.boolean,
    );
  }

  const currentValue =
    value(prop).toLowerCase();

  return [
    "true",
    "yes",
    "はい",
    "公開",
    "オン",
  ].includes(currentValue);
}

function isPublished(
  prop?: Property,
): boolean {
  if (!prop) {
    return true;
  }

  if (prop.type === "checkbox") {
    return Boolean(
      prop.checkbox,
    );
  }

  const currentValue =
    value(prop).toLowerCase();

  return [
    "公開",
    "published",
    "publish",
    "yes",
    "true",
  ].includes(currentValue);
}

function getDateISO(
  prop?: Property,
): string {
  return (
    prop?.date?.start ||
    prop?.formula?.date?.start ||
    ""
  );
}

function formatDate(
  prop?: Property,
): string {
  const start =
    getDateISO(prop);

  if (!start) {
    return value(prop);
  }

  const date =
    new Date(start);

  if (
    Number.isNaN(
      date.getTime(),
    )
  ) {
    return start;
  }

  return new Intl.DateTimeFormat(
    "ja-JP",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "short",
      timeZone: "Asia/Tokyo",
    },
  ).format(date);
}

function formatTimeText(
  input: string,
): string {
  const trimmed =
    input.trim();

  if (!trimmed) {
    return "";
  }

  const colonMatch =
    trimmed.match(
      /(\d{1,2})[：:](\d{2})/,
    );

  if (colonMatch) {
    const hour =
      colonMatch[1].padStart(
        2,
        "0",
      );

    return `${hour}:${colonMatch[2]}`;
  }

  const japaneseMatch =
    trimmed.match(
      /(\d{1,2})時(?:(\d{1,2})分)?/,
    );

  if (japaneseMatch) {
    const hour =
      japaneseMatch[1].padStart(
        2,
        "0",
      );

    const minute = (
      japaneseMatch[2] ||
      "00"
    ).padStart(2, "0");

    return `${hour}:${minute}`;
  }

  return trimmed;
}

function timeValue(
  prop?: Property,
): string {
  if (!prop) {
    return "";
  }

  const dateStart =
    prop?.date?.start ||
    prop?.formula?.date?.start;

  if (
    dateStart &&
    dateStart.includes("T")
  ) {
    const date =
      new Date(dateStart);

    if (
      !Number.isNaN(
        date.getTime(),
      )
    ) {
      return new Intl.DateTimeFormat(
        "ja-JP",
        {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone:
            "Asia/Tokyo",
        },
      ).format(date);
    }
  }

  return formatTimeText(
    value(prop),
  );
}

function imageValue(
  prop?: Property,
  cover?: Property | null,
): string {
  const file =
    prop?.files?.[0];

  if (
    file?.type === "external"
  ) {
    return (
      file.external?.url || ""
    );
  }

  if (file?.type === "file") {
    return file.file?.url || "";
  }

  if (
    cover?.type === "external"
  ) {
    return (
      cover.external?.url || ""
    );
  }

  if (cover?.type === "file") {
    return cover.file?.url || "";
  }

  return "";
}

export function detectArea(
  venueAddress: string,
  location: string,
): string {
  const source =
    `${venueAddress} ${location}`
      .normalize("NFKC")
      .replace(/\s+/g, "");

  const areaRules = [
    {
      area: "高田馬場",
      keywords: [
        "高田馬場",
        "西早稲田",
        "下落合",
      ],
    },
    {
      area: "新宿",
      keywords: [
        "新宿",
        "歌舞伎町",
        "西新宿",
        "新宿三丁目",
        "大久保",
        "百人町",
      ],
    },
    {
      area: "渋谷",
      keywords: [
        "渋谷",
        "道玄坂",
        "宇田川町",
        "神南",
        "桜丘町",
        "宮益坂",
      ],
    },
    {
      area: "恵比寿・代官山",
      keywords: [
        "恵比寿",
        "代官山",
        "広尾",
        "猿楽町",
      ],
    },
    {
      area: "原宿・表参道",
      keywords: [
        "原宿",
        "表参道",
        "神宮前",
        "青山",
      ],
    },
    {
      area: "池袋",
      keywords: [
        "池袋",
        "西池袋",
        "東池袋",
        "南池袋",
        "北池袋",
      ],
    },
    {
      area: "六本木・麻布",
      keywords: [
        "六本木",
        "西麻布",
        "麻布十番",
        "南麻布",
        "元麻布",
        "東麻布",
        "乃木坂",
      ],
    },
    {
      area: "赤坂",
      keywords: [
        "赤坂",
        "赤坂見附",
        "溜池山王",
      ],
    },
    {
      area: "銀座・有楽町",
      keywords: [
        "銀座",
        "有楽町",
        "日比谷",
        "京橋",
      ],
    },
    {
      area: "東京・丸の内",
      keywords: [
        "丸の内",
        "大手町",
        "八重洲",
        "東京駅",
        "日本橋",
      ],
    },
    {
      area: "上野・御徒町",
      keywords: [
        "上野",
        "御徒町",
        "湯島",
      ],
    },
    {
      area: "浅草",
      keywords: [
        "浅草",
        "雷門",
        "花川戸",
      ],
    },
    {
      area: "秋葉原・神田",
      keywords: [
        "秋葉原",
        "外神田",
        "神田",
        "岩本町",
      ],
    },
    {
      area: "品川・田町",
      keywords: [
        "品川",
        "高輪",
        "港南",
        "田町",
        "三田",
      ],
    },
    {
      area: "浜松町・新橋",
      keywords: [
        "浜松町",
        "新橋",
        "汐留",
        "大門",
        "芝公園",
      ],
    },
    {
      area: "目黒",
      keywords: [
        "目黒",
        "中目黒",
        "上目黒",
        "下目黒",
      ],
    },
    {
      area: "五反田・大崎",
      keywords: [
        "五反田",
        "大崎",
        "西五反田",
        "東五反田",
      ],
    },
    {
      area: "中野",
      keywords: [
        "中野",
        "中野坂上",
        "東中野",
      ],
    },
    {
      area: "吉祥寺",
      keywords: [
        "吉祥寺",
        "武蔵野市",
      ],
    },
    {
      area: "錦糸町",
      keywords: [
        "錦糸町",
        "錦糸",
        "江東橋",
      ],
    },
  ];

  for (
    const rule of areaRules
  ) {
    const matched =
      rule.keywords.some(
        (keyword) =>
          source.includes(keyword),
      );

    if (matched) {
      return rule.area;
    }
  }

  const wardMatch =
    source.match(
      /東京都([^0-9]+?区)/,
    );

  if (wardMatch?.[1]) {
    return wardMatch[1];
  }

  const cityMatch =
    source.match(
      /東京都([^0-9]+?市)/,
    );

  if (cityMatch?.[1]) {
    return cityMatch[1];
  }

  return "その他";
}

function convertPage(
  page: NotionPage,
): EventItem {
  const properties =
    page.properties || {};

  const location =
    value(
      properties[
        names.location
      ],
    );

  const venueAddress =
    value(
      properties[
        names.venueAddress
      ],
    );

  const dateISO =
    getDateISO(
      properties[names.date],
    );

  return {
    id: page.id,

    title:
      text(
        properties[names.title],
      ) || "名称未設定",

    published:
      isPublished(
        properties[
          names.published
        ],
      ),

    featured:
      checkboxValue(
        properties[
          names.featured
        ],
      ),

    date:
      formatDate(
        properties[names.date],
      ),

    dateISO,

    dateStart: dateISO,

    createdTime:
      page.created_time || "",

    startTime:
      timeValue(
        properties[
          names.startTime
        ],
      ),

    endTime:
      timeValue(
        properties[
          names.endTime
        ],
      ),

    location,

    venueAddress,

    area:
      detectArea(
        venueAddress,
        location,
      ),

    image:
      imageValue(
        properties[
          names.image
        ],
        page.cover,
      ),

    url:
      value(
        properties[names.url],
      ) ||
      "https://lin.ee/Q6dBeSg",

    category:
      value(
        properties[
          names.category
        ],
      ),

    description:
      value(
        properties[
          names.description
        ],
      ),

    participationCondition:
      value(
        properties[
          names
            .participationCondition
        ],
      ),

    organizer:
      value(
        properties[
          names.organizer
        ],
      ),
  };
}

export async function getEvents(): Promise<
  EventItem[]
> {
  if (
    !API_KEY ||
    !DATABASE_ID
  ) {
    return [];
  }

  try {
    const allPages:
      NotionPage[] = [];

    let startCursor:
      string | undefined;

    do {
      const response =
        await fetch(
          `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
          {
            method: "POST",

            headers:
              getHeaders(),

            body:
              JSON.stringify({
                page_size: 100,

                ...(startCursor
                  ? {
                      start_cursor:
                        startCursor,
                    }
                  : {}),
              }),

            next: {
              revalidate: 300,
            },
          },
        );

      if (!response.ok) {
        const body =
          await response.text();

        console.error(
          `Notion API error ${response.status}: ${body}`,
        );

        return [];
      }

      const data =
        await response.json();

      allPages.push(
        ...(data.results || []),
      );

      startCursor =
        data.has_more &&
        data.next_cursor
          ? data.next_cursor
          : undefined;
    } while (startCursor);

    return allPages
      .map((page) =>
        convertPage(page),
      )
      .filter(
        (event) =>
          event.published,
      );
  } catch (error) {
    console.error(
      "イベント一覧の取得に失敗しました。",
      error,
    );

    return [];
  }
}

/*
 * Notionの「カテゴリー」列に
 * 登録されている選択肢を取得します。
 *
 * 公開イベントが0件でも、
 * Notionに登録されているカテゴリーは
 * すべて返します。
 */
export async function getCategoryOptions(): Promise<
  string[]
> {
  if (
    !API_KEY ||
    !DATABASE_ID
  ) {
    return [];
  }

  try {
    const response =
      await fetch(
        `https://api.notion.com/v1/databases/${DATABASE_ID}`,
        {
          method: "GET",

          headers:
            getHeaders(),

          next: {
            revalidate: 300,
          },
        },
      );

    if (!response.ok) {
      const body =
        await response.text();

      console.error(
        `Notion database error ${response.status}: ${body}`,
      );

      return [];
    }

    const database =
      (await response.json()) as NotionDatabase;

    const categoryProperty =
      database.properties?.[
        names.category
      ];

    if (!categoryProperty) {
      console.error(
        `Notionに「${names.category}」列が見つかりません。`,
      );

      return [];
    }

    const selectOptions:
      Array<{
        name?: string;
      }> =
      categoryProperty
        .select?.options ||
      categoryProperty
        .multi_select?.options ||
      [];

    return Array.from(
      new Set(
        selectOptions
          .map(
            (option) =>
              option.name?.trim() ||
              "",
          )
          .filter(Boolean),
      ),
    );
  } catch (error) {
    console.error(
      "カテゴリー候補の取得に失敗しました。",
      error,
    );

    return [];
  }
}

export async function getEventById(
  id: string,
): Promise<EventItem | null> {
  if (!API_KEY || !id) {
    return null;
  }

  try {
    const response =
      await fetch(
        `https://api.notion.com/v1/pages/${encodeURIComponent(
          id,
        )}`,
        {
          method: "GET",

          headers:
            getHeaders(),

          next: {
            revalidate: 300,
          },
        },
      );

    if (!response.ok) {
      const body =
        await response.text();

      console.error(
        `Notion page error ${response.status}: ${body}`,
      );

      return null;
    }

    const page =
      (await response.json()) as NotionPage;

    const event =
      convertPage(page);

    if (!event.published) {
      return null;
    }

    return event;
  } catch (error) {
    console.error(
      "イベント詳細の取得に失敗しました。",
      error,
    );

    return null;
  }
}
② app/components/CategorySearch.tsxを新規作成
GitHubで次のファイルを作成してください。
app/components/CategorySearch.tsx
中身を丸ごと貼り付けます。
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
③ app/page.tsxの取得部分を変更
TOPページ上部のimportを、次の形にしてください。
import {
  getCategoryOptions,
  getEvents,
} from "../lib/notion";

import CategorySearch from "./components/CategorySearch";
Home関数の先頭を次にします。
export default async function Home() {
  const [
    allEvents,
    categoryOptions,
  ] = await Promise.all([
    getEvents(),
    getCategoryOptions(),
  ]);

  // この下は既存処理を残す
現在の「カテゴリーから探す」のコード一式を削除し、その場所へ以下を入れてください。
<CategorySearch
  events={allEvents}
  categories={categoryOptions}
/>
これで、該当イベントが0件でも、Notionのカテゴリー列に選択肢として登録されているカテゴリーはすべて表示されます。

３は丸ごと出してください

1m 39s考えました
③の app/page.tsx 丸ごと差し替え版です。
現在のTOPページ構成を維持したまま、以下を反映しています。

Notionのカテゴリー設定をgetCategoryOptions()で取得
該当イベントが0件でもカテゴリーを表示
CategorySearch.tsxをTOPページに表示
人気・新着・今週・カレンダー・エリア検索・主催者導線は維持
以前のカテゴリー抽出処理を削除
未使用変数によるエラーが出ないよう調整
app_page_category_options_complete.tsx
GitHubで次を開いてください。

app/page.tsx
現在の中身をすべて削除し、ダウンロードしたファイルの内容を最初から最後まで丸ごと貼り付けて、Commit changesを押してください。
このコードは、次の2ファイルを先に作成・差し替えている前提です。

lib/notion.ts
app/components/CategorySearch.tsx
TOPページ側では、次の形でNotionのカテゴリー設定を取得しています。
const [allEvents, categoryOptions] =
  await Promise.all([
    getEvents(),
    getCategoryOptions(),
  ]);
表示部分は次の形です。
<CategorySearch
  events={allEvents}
  categories={categoryOptions}
/>

app_page_category_options_complete.tsx
コード


ライブラリ
/
app_page_category_options_complete.tsx


import Image from "next/image";
import Link from "next/link";
import heroBanner from "../hero-banner.png";
import OrganizerCta from "./components/OrganizerCta";
import AreaSearch from "./components/AreaSearch";
import CategorySearch from "./components/CategorySearch";
import {
  getCategoryOptions,
  getEvents,
  type EventItem,
} from "../lib/notion";

export const revalidate = 300;

type CardSize = "large" | "medium" | "small";

type HomePageProps = {
  searchParams: Promise<{
    category?: string;
    month?: string;
  }>;
};

type CalendarCell = {
  day: number | null;
  events: EventItem[];
};

type CategoryColor = {
  backgroundColor: string;
  borderColor: string;
  color: string;
};

function getEventTimestamp(event: EventItem): number {
  if (!event.dateStart) {
    return Number.POSITIVE_INFINITY;
  }

  const value = event.dateStart.includes("T")
    ? event.dateStart
    : `${event.dateStart}T00:00:00+09:00`;

  const timestamp = new Date(value).getTime();

  return Number.isNaN(timestamp)
    ? Number.POSITIVE_INFINITY
    : timestamp;
}

function getJstDateParts(date: Date): {
  year: number;
  month: number;
  day: number;
} {
  const parts = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "Asia/Tokyo",
  }).formatToParts(date);

  return {
    year: Number(
      parts.find((part) => part.type === "year")?.value || 0,
    ),
    month: Number(
      parts.find((part) => part.type === "month")?.value || 0,
    ),
    day: Number(
      parts.find((part) => part.type === "day")?.value || 0,
    ),
  };
}

function getEventDateParts(
  event: EventItem,
): {
  year: number;
  month: number;
  day: number;
} | null {
  const timestamp = getEventTimestamp(event);

  if (!Number.isFinite(timestamp)) {
    return null;
  }

  return getJstDateParts(new Date(timestamp));
}

function parseSelectedMonth(
  monthValue?: string,
): {
  year: number;
  month: number;
} {
  if (
    monthValue &&
    /^\d{4}-\d{2}$/.test(monthValue)
  ) {
    const [yearText, monthText] = monthValue.split("-");

    const year = Number(yearText);
    const month = Number(monthText);

    if (
      year >= 2000 &&
      year <= 2100 &&
      month >= 1 &&
      month <= 12
    ) {
      return {
        year,
        month,
      };
    }
  }

  const now = getJstDateParts(new Date());

  return {
    year: now.year,
    month: now.month,
  };
}

function formatMonthParameter(
  year: number,
  month: number,
): string {
  return `${year}-${String(month).padStart(2, "0")}`;
}

function moveMonth(
  year: number,
  month: number,
  amount: number,
): {
  year: number;
  month: number;
} {
  const date = new Date(
    Date.UTC(year, month - 1 + amount, 1),
  );

  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
  };
}

function createHomeUrl({
  category,
  month,
  hash,
}: {
  category?: string;
  month?: string;
  hash?: string;
}): string {
  const params = new URLSearchParams();

  if (category) {
    params.set("category", category);
  }

  if (month) {
    params.set("month", month);
  }

  const query = params.toString();

  return `/${query ? `?${query}` : ""}${
    hash ? `#${hash}` : ""
  }`;
}

function getCategoryColor(
  category: string,
): CategoryColor {
  const palette: CategoryColor[] = [
    {
      backgroundColor: "#fff1f1",
      borderColor: "#e7aaaa",
      color: "#7d3030",
    },
    {
      backgroundColor: "#eef5ff",
      borderColor: "#abc6e8",
      color: "#28517c",
    },
    {
      backgroundColor: "#eff8f0",
      borderColor: "#abd0af",
      color: "#306238",
    },
    {
      backgroundColor: "#fff6e8",
      borderColor: "#e1c08c",
      color: "#74501e",
    },
    {
      backgroundColor: "#f4efff",
      borderColor: "#c7b4e7",
      color: "#563d7c",
    },
    {
      backgroundColor: "#eaf8f7",
      borderColor: "#9dccca",
      color: "#265e59",
    },
    {
      backgroundColor: "#fff0f7",
      borderColor: "#e2a7c4",
      color: "#793255",
    },
    {
      backgroundColor: "#f2f2ec",
      borderColor: "#ccccbb",
      color: "#555541",
    },
  ];

  const hash = Array.from(category).reduce(
    (total, character) =>
      total + character.charCodeAt(0),
    0,
  );

  return palette[hash % palette.length];
}

function buildCalendarCells({
  events,
  year,
  month,
}: {
  events: EventItem[];
  year: number;
  month: number;
}): CalendarCell[] {
  const firstWeekday =
    (
      new Date(
        Date.UTC(year, month - 1, 1),
      ).getUTCDay() + 6
    ) % 7;

  const daysInMonth = new Date(
    Date.UTC(year, month, 0),
  ).getUTCDate();

  const eventsByDay = new Map<number, EventItem[]>();

  events.forEach((event) => {
    const dateParts = getEventDateParts(event);

    if (
      !dateParts ||
      dateParts.year !== year ||
      dateParts.month !== month
    ) {
      return;
    }

    const dayEvents =
      eventsByDay.get(dateParts.day) || [];

    dayEvents.push(event);

    eventsByDay.set(
      dateParts.day,
      dayEvents,
    );
  });

  eventsByDay.forEach((dayEvents) => {
    dayEvents.sort((a, b) =>
      (a.startTime || "99:99").localeCompare(
        b.startTime || "99:99",
        "ja",
      ),
    );
  });

  const cells: CalendarCell[] = [];

  for (
    let index = 0;
    index < firstWeekday;
    index += 1
  ) {
    cells.push({
      day: null,
      events: [],
    });
  }

  for (
    let day = 1;
    day <= daysInMonth;
    day += 1
  ) {
    cells.push({
      day,
      events: eventsByDay.get(day) || [],
    });
  }

  while (cells.length % 7 !== 0) {
    cells.push({
      day: null,
      events: [],
    });
  }

  return cells;
}

function EventCard({
  event,
  size,
}: {
  event: EventItem;
  size: CardSize;
}) {
  const hasTime =
    event.startTime || event.endTime;

  return (
    <article className={`card card-${size}`}>
      <Link
        href={`/events/${event.id}`}
        className="cardImageLink"
      >
        {event.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={event.image}
            alt={event.title}
            className="image"
          />
        ) : (
          <div className="image placeholder">
            TOKYO EVENT NAVI
          </div>
        )}
      </Link>

      <div className="cardBody">
        {event.category && (
          <div className="category">
            {event.category}
          </div>
        )}

        <h2 className="eventTitle">
          <Link href={`/events/${event.id}`}>
            {event.title}
          </Link>
        </h2>

        <div className="eventMeta">
          {event.date && (
            <div className="metaRow">
              <span className="metaIcon">
                📅
              </span>

              <div>
                <span className="metaLabel">
                  開催日
                </span>

                <strong>
                  {event.date}
                </strong>
              </div>
            </div>
          )}

          {hasTime && (
            <div className="metaRow">
              <span className="metaIcon">
                🕐
              </span>

              <div>
                <span className="metaLabel">
                  開催時間
                </span>

                <strong>
                  {event.startTime || "未定"}

                  {event.endTime
                    ? ` 〜 ${event.endTime}`
                    : ""}
                </strong>
              </div>
            </div>
          )}

          {event.location && (
            <div className="metaRow">
              <span className="metaIcon">
                📍
              </span>

              <div>
                <span className="metaLabel">
                  会場
                </span>

                <strong>
                  {event.location}
                </strong>
              </div>
            </div>
          )}
        </div>

        <Link
          className="detailButton"
          href={`/events/${event.id}`}
        >
          詳細を見る
        </Link>
      </div>
    </article>
  );
}

function EventSection({
  title,
  events,
  emptyMessage,
  size,
}: {
  title: string;
  events: EventItem[];
  emptyMessage: string;
  size: CardSize;
}) {
  return (
    <section className="eventSection">
      <div className="sectionHead">
        <h1>{title}</h1>
      </div>

      {events.length === 0 ? (
        <div className="empty">
          {emptyMessage}
        </div>
      ) : (
        <div className={`grid grid-${size}`}>
          {events.map((event) => (
            <EventCard
              event={event}
              size={size}
              key={`${title}-${event.id}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function CalendarEventLink({
  event,
  modal = false,
}: {
  event: EventItem;
  modal?: boolean;
}) {
  const categoryColor =
    getCategoryColor(
      event.category || "その他",
    );

  return (
    <Link
      href={`/events/${event.id}`}
      className={
        modal
          ? "calendarEvent calendarEventModal"
          : "calendarEvent"
      }
      style={categoryColor}
      title={`${
        event.startTime || "時間未定"
      } ${event.title}`}
    >
      <span>
        {event.startTime || "未定"}
      </span>

      <strong>
        {event.title}
      </strong>
    </Link>
  );
}

function CalendarSection({
  events,
  year,
  month,
  selectedCategory,
}: {
  events: EventItem[];
  year: number;
  month: number;
  selectedCategory: string;
}) {
  const cells =
    buildCalendarCells({
      events,
      year,
      month,
    });

  const previousMonth =
    moveMonth(year, month, -1);

  const nextMonth =
    moveMonth(year, month, 1);

  const today =
    getJstDateParts(new Date());

  const previousUrl =
    createHomeUrl({
      category:
        selectedCategory || undefined,
      month:
        formatMonthParameter(
          previousMonth.year,
          previousMonth.month,
        ),
      hash: "event-calendar",
    });

  const nextUrl =
    createHomeUrl({
      category:
        selectedCategory || undefined,
      month:
        formatMonthParameter(
          nextMonth.year,
          nextMonth.month,
        ),
      hash: "event-calendar",
    });

  return (
    <section
      className="calendarSection"
      id="event-calendar"
    >
      <div className="sectionHead">
        <div>
          <p className="sectionSubTitle">
            EVENT CALENDAR
          </p>

          <h1>
            イベントカレンダー
          </h1>
        </div>
      </div>

      <div className="calendarCard">
        <div className="calendarHeader">
          <Link
            href={previousUrl}
            className="calendarMoveButton"
            aria-label="前月を見る"
          >
            ←
          </Link>

          <h2>
            {year}年{month}月
          </h2>

          <Link
            href={nextUrl}
            className="calendarMoveButton"
            aria-label="次月を見る"
          >
            →
          </Link>
        </div>

        <div className="calendarWeekdays">
          {[
            "月",
            "火",
            "水",
            "木",
            "金",
            "土",
            "日",
          ].map((weekday, index) => (
            <div
              className={
                index === 5
                  ? "saturday"
                  : index === 6
                    ? "sunday"
                    : ""
              }
              key={weekday}
            >
              {weekday}
            </div>
          ))}
        </div>

        <div className="calendarGrid">
          {cells.map((cell, index) => {
            const weekdayIndex =
              index % 7;

            const isToday =
              cell.day !== null &&
              today.year === year &&
              today.month === month &&
              today.day === cell.day;

            const visibleEvents =
              cell.events.slice(0, 3);

            const hiddenEvents =
              cell.events.slice(3);

            const modalId =
              `calendar-modal-${year}-${month}-${cell.day}-${index}`;

            return (
              <div
                className={[
                  "calendarCell",

                  cell.day === null
                    ? "calendarCellEmpty"
                    : "",

                  isToday
                    ? "calendarCellToday"
                    : "",

                  weekdayIndex === 5
                    ? "calendarCellSaturday"
                    : "",

                  weekdayIndex === 6
                    ? "calendarCellSunday"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                key={`calendar-cell-${index}`}
              >
                {cell.day !== null && (
                  <>
                    <div className="calendarDayNumber">
                      <span>
                        {cell.day}
                      </span>

                      {isToday && (
                        <small>
                          今日
                        </small>
                      )}
                    </div>

                    <div className="calendarEvents">
                      {visibleEvents.map(
                        (event) => (
                          <CalendarEventLink
                            event={event}
                            key={`calendar-event-${event.id}`}
                          />
                        ),
                      )}

                      {hiddenEvents.length > 0 && (
                        <>
                          <input
                            type="checkbox"
                            id={modalId}
                            className="modalToggle"
                          />

                          <label
                            htmlFor={modalId}
                            className="moreEventsButton"
                          >
                            ＋他
                            {hiddenEvents.length}
                            件
                          </label>

                          <div className="moreEventsOverlay">
                            <label
                              htmlFor={modalId}
                              className="modalBackdrop"
                              aria-label="閉じる"
                            />

                            <div
                              className="moreEventsModal"
                              role="dialog"
                              aria-modal="true"
                            >
                              <div className="moreEventsHeader">
                                <div>
                                  <span>
                                    {year}年
                                    {month}月
                                    {cell.day}日
                                  </span>

                                  <h3>
                                    この日のイベント
                                  </h3>
                                </div>

                                <label
                                  htmlFor={modalId}
                                  className="modalCloseButton"
                                >
                                  ×
                                </label>
                              </div>

                              <div className="moreEventsList">
                                {cell.events.map(
                                  (event) => (
                                    <CalendarEventLink
                                      event={event}
                                      modal
                                      key={`modal-event-${event.id}`}
                                    />
                                  ),
                                )}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default async function Home({
  searchParams,
}: HomePageProps) {
  const params =
    await searchParams;

  const selectedCategory =
    params.category?.trim() || "";

  const selectedMonth =
    parseSelectedMonth(
      params.month,
    );

  const [allEvents, categoryOptions] =
    await Promise.all([
      getEvents(),
      getCategoryOptions(),
    ]);

  const featuredEvents =
    allEvents
      .filter(
        (event) =>
          event.featured,
      )
      .sort(
        (a, b) =>
          getEventTimestamp(a) -
          getEventTimestamp(b),
      )
      .slice(0, 3);

  const newEvents =
    [...allEvents]
      .sort((a, b) => {
        const aTime =
          a.createdTime
            ? new Date(
                a.createdTime,
              ).getTime()
            : 0;

        const bTime =
          b.createdTime
            ? new Date(
                b.createdTime,
              ).getTime()
            : 0;

        return bTime - aTime;
      })
      .slice(0, 10);

  const now = Date.now();

  const sevenDaysLater =
    now +
    7 *
      24 *
      60 *
      60 *
      1000;

  const weeklyEvents =
    allEvents
      .filter((event) => {
        const eventTime =
          getEventTimestamp(event);

        return (
          Number.isFinite(eventTime) &&
          eventTime >= now &&
          eventTime <= sevenDaysLater
        );
      })
      .sort(
        (a, b) =>
          getEventTimestamp(a) -
          getEventTimestamp(b),
      )
      .slice(0, 5);



  return (
    <main className="homePage">
      <header className="bannerHeader">
        <Image
          src={heroBanner}
          alt="東京イベントナビ"
          className="topBanner"
          priority
        />
      </header>

      <div className="container sections">
        <EventSection
          title="人気イベント"
          events={featuredEvents}
          emptyMessage="現在、人気イベントはありません。"
          size="large"
        />

        <EventSection
          title="新着イベント"
          events={newEvents}
          emptyMessage="現在、新着イベントはありません。"
          size="medium"
        />

        <EventSection
          title="今週のイベント"
          events={weeklyEvents}
          emptyMessage="現在時刻から7日以内に開催されるイベントはありません。"
          size="small"
        />

        <CalendarSection
          events={allEvents}
          year={selectedMonth.year}
          month={selectedMonth.month}
          selectedCategory={
            selectedCategory
          }
        />

        <CategorySearch
          events={allEvents}
          categories={categoryOptions}
        />

        <AreaSearch events={allEvents} />

        <OrganizerCta />
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .homePage {
          min-height: 100vh;
          background: #f7f7f5;
          color: #111;
        }

        .bannerHeader {
          width: 100%;
          overflow: hidden;
          background: #000;
        }

        .topBanner {
          display: block;
          width: 100%;
          height: auto;
        }

        .container {
          width: min(
            1240px,
            calc(100% - 40px)
          );
          margin: 0 auto;
        }

        .sections {
          display: grid;
          gap: 100px;
          padding: 64px 0 120px;
        }

        .sectionHead {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 24px;
          margin-bottom: 30px;
          padding-bottom: 16px;
          border-bottom: 1px solid #deded9;
        }

        .sectionSubTitle {
          margin: 0 0 7px;
          color: #999;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .sectionHead h1 {
          margin: 0;
          font-size: clamp(
            27px,
            4vw,
            38px
          );
          line-height: 1.3;
        }

        .grid {
          display: grid;
          align-items: stretch;
        }

        .grid-large {
          grid-template-columns: repeat(
            3,
            minmax(0, 1fr)
          );
          gap: 26px;
        }

        .grid-medium {
          grid-template-columns: repeat(
            5,
            minmax(0, 1fr)
          );
          gap: 18px;
        }

        .grid-small {
          grid-template-columns: repeat(
            5,
            minmax(0, 1fr)
          );
          gap: 14px;
        }

        .card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid #e7e7e2;
          background: #fff;
          box-shadow:
            0 10px 30px
            rgba(0, 0, 0, 0.045);
        }

        .card-large {
          border-radius: 22px;
        }

        .card-medium {
          border-radius: 15px;
        }

        .card-small {
          border-radius: 13px;
        }

        /*
         * フライヤー表示
         * 元の横長・切り抜き方式
         */
        .cardImageLink {
          display: block;
          overflow: hidden;
          background: #eee;
        }

        .image {
          display: block;
          width: 100%;
          object-fit: cover;
        }

        .card-large .image,
        .card-medium .image {
          aspect-ratio: 16 / 10;
        }

        .card-small .image {
          aspect-ratio: 16 / 9;
        }

        .placeholder {
          display: grid;
          place-items: center;
          color: #888;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .cardBody {
          display: flex;
          flex: 1;
          flex-direction: column;
        }

        .card-large .cardBody {
          padding: 25px;
        }

        .card-medium .cardBody {
          padding: 15px;
        }

        .card-small .cardBody {
          padding: 13px;
        }

        .category {
          display: inline-flex;
          width: fit-content;
          border-radius: 999px;
          background: #f1eee5;
          color: #5f5337;
          font-weight: 800;
        }

        .card-large .category {
          margin-bottom: 16px;
          padding: 8px 14px;
          font-size: 12px;
        }

        .card-medium .category {
          margin-bottom: 11px;
          padding: 6px 10px;
          font-size: 10px;
        }

        .card-small .category {
          margin-bottom: 9px;
          padding: 5px 9px;
          font-size: 9px;
        }

        .eventTitle {
          margin: 0;
        }

        .eventTitle a {
          color: inherit;
          text-decoration: none;
        }

        .card-large .eventTitle {
          font-size: 23px;
          line-height: 1.45;
        }

        .card-medium .eventTitle {
          font-size: 15px;
          line-height: 1.5;
        }

        .card-small .eventTitle {
          font-size: 14px;
          line-height: 1.45;
        }

        .eventMeta {
          display: grid;
          gap: 9px;
          margin: 15px 0 17px;
        }

        .card-large .eventMeta {
          gap: 15px;
          margin: 25px 0 27px;
        }

        .metaRow {
          display: grid;
          grid-template-columns: 22px 1fr;
          gap: 7px;
          align-items: start;
        }

        .metaIcon {
          font-size: 13px;
        }

        .metaRow > div {
          display: grid;
          gap: 2px;
          min-width: 0;
        }

        .metaLabel {
          color: #999;
          font-size: 9px;
          font-weight: 700;
        }

        .metaRow strong {
          color: #222;
          font-size: 12px;
          line-height: 1.45;
          overflow-wrap: anywhere;
        }

        .card-large .metaRow strong {
          font-size: 14px;
        }

        .detailButton {
          display: block;
          margin-top: auto;
          padding: 11px;
          border-radius: 8px;
          background: #111;
          color: #fff;
          text-align: center;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
        }

        .card-large .detailButton {
          padding: 16px;
          border-radius: 11px;
          font-size: 14px;
        }

        .empty {
          padding: 50px 20px;
          border-radius: 15px;
          background: #fff;
          color: #777;
          text-align: center;
          line-height: 1.8;
        }

        /*
         * カレンダー
         */
        .calendarCard {
          overflow: hidden;
          border: 1px solid #deded9;
          border-radius: 20px;
          background: #fff;
          box-shadow:
            0 12px 36px
            rgba(0, 0, 0, 0.045);
        }

        .calendarHeader {
          display: grid;
          grid-template-columns:
            52px 1fr 52px;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #e6e6e1;
        }

        .calendarHeader h2 {
          margin: 0;
          text-align: center;
          font-size: 25px;
        }

        .calendarMoveButton {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #111;
          color: #fff;
          text-decoration: none;
          font-size: 17px;
          font-weight: 800;
        }

        .calendarWeekdays {
          display: grid;
          grid-template-columns: repeat(
            7,
            1fr
          );
          border-bottom: 1px solid #e6e6e1;
          background: #f3f3ef;
        }

        .calendarWeekdays > div {
          padding: 12px 5px;
          text-align: center;
          font-size: 12px;
          font-weight: 800;
        }

        .calendarWeekdays .saturday {
          color: #4e77ac;
        }

        .calendarWeekdays .sunday {
          color: #c95d5d;
        }

        .calendarGrid {
          display: grid;
          grid-template-columns: repeat(
            7,
            minmax(0, 1fr)
          );
        }

        .calendarCell {
          min-height: 165px;
          padding: 10px;
          border-right: 1px solid #ecece7;
          border-bottom: 1px solid #ecece7;
          background: #fff;
        }

        .calendarCell:nth-child(7n) {
          border-right: 0;
        }

        .calendarCellEmpty {
          background: #fafaf8;
        }

        .calendarCellToday {
          background: #fff9df;
          box-shadow:
            inset 0 0 0 2px
            #d8b84a;
        }

        .calendarDayNumber {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          font-size: 13px;
          font-weight: 800;
        }

        .calendarCellSaturday
          .calendarDayNumber {
          color: #4e77ac;
        }

        .calendarCellSunday
          .calendarDayNumber {
          color: #c95d5d;
        }

        .calendarDayNumber small {
          color: #917817;
          font-size: 9px;
          font-weight: 800;
        }

        .calendarEvents {
          display: grid;
          gap: 5px;
        }

        .calendarEvent {
          display: grid;
          grid-template-columns:
            32px minmax(0, 1fr);
          gap: 5px;
          align-items: center;
          min-width: 0;
          padding: 6px 7px;
          overflow: hidden;
          border: 1px solid;
          border-radius: 7px;
          text-decoration: none;
        }

        .calendarEvent span {
          font-size: 8px;
          font-weight: 800;
          white-space: nowrap;
        }

        .calendarEvent strong {
          overflow: hidden;
          font-size: 9px;
          line-height: 1.35;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /*
         * 4件目以降のポップアップ
         */
        .modalToggle {
          position: absolute;
          width: 1px;
          height: 1px;
          opacity: 0;
          pointer-events: none;
        }

        .moreEventsButton {
          display: block;
          padding: 6px 7px;
          border-radius: 7px;
          background: #111;
          color: #fff;
          cursor: pointer;
          text-align: center;
          font-size: 9px;
          font-weight: 800;
        }

        .moreEventsOverlay {
          position: fixed;
          z-index: 1000;
          inset: 0;
          display: none;
          place-items: center;
          padding: 20px;
        }

        .modalToggle:checked
          + .moreEventsButton
          + .moreEventsOverlay {
          display: grid;
        }

        .modalBackdrop {
          position: absolute;
          inset: 0;
          background: rgba(
            0,
            0,
            0,
            0.55
          );
          cursor: pointer;
        }

        .moreEventsModal {
          position: relative;
          z-index: 1;
          width: min(
            560px,
            100%
          );
          max-height: calc(
            100vh - 40px
          );
          overflow-y: auto;
          padding: 25px;
          border-radius: 18px;
          background: #fff;
          box-shadow:
            0 28px 80px
            rgba(0, 0, 0, 0.3);
        }

        .moreEventsHeader {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e7e7e2;
        }

        .moreEventsHeader span {
          color: #888;
          font-size: 11px;
          font-weight: 700;
        }

        .moreEventsHeader h3 {
          margin: 4px 0 0;
          font-size: 23px;
        }

        .modalCloseButton {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #111;
          color: #fff;
          cursor: pointer;
          font-size: 22px;
          line-height: 1;
        }

        .moreEventsList {
          display: grid;
          gap: 9px;
        }

        .calendarEventModal {
          grid-template-columns:
            48px minmax(0, 1fr);
          padding: 11px 13px;
          border-radius: 10px;
        }

        .calendarEventModal span {
          font-size: 11px;
        }

        .calendarEventModal strong {
          font-size: 13px;
          white-space: normal;
        }

        /*
         * カテゴリー検索
         */
        .categoryNavigation {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }

        .categoryFilter {
          padding: 11px 17px;
          border: 1px solid #dcdcd7;
          border-radius: 999px;
          background: #fff;
          color: #333;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
        }

        .categoryFilter:hover,
        .categoryFilter.active {
          border-color: #111;
          background: #111;
          color: #fff;
        }

        .selectedCategoryHead {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 22px;
          padding: 20px 22px;
          border-radius: 14px;
          background: #eee9dc;
        }

        .selectedCategoryHead span {
          color: #777;
          font-size: 10px;
          font-weight: 700;
        }

        .selectedCategoryHead h2 {
          margin: 4px 0 0;
          font-size: 22px;
        }

        .selectedCategoryHead a {
          color: #111;
          font-size: 12px;
          font-weight: 800;
        }

        @media (max-width: 1050px) {
          .grid-medium,
          .grid-small {
            grid-template-columns: repeat(
              3,
              minmax(0, 1fr)
            );
          }

          .calendarCell {
            min-height: 145px;
            padding: 7px;
          }
        }

        @media (max-width: 800px) {
          .grid-large,
          .grid-medium,
          .grid-small {
            grid-template-columns: repeat(
              2,
              minmax(0, 1fr)
            );
          }

          .calendarCard {
            overflow-x: auto;
          }

          .calendarWeekdays,
          .calendarGrid {
            min-width: 900px;
          }
        }

        @media (max-width: 640px) {
          .container {
            width: calc(
              100% - 24px
            );
          }

          .topBanner {
            width: 150%;
            max-width: none;
            margin-left: -25%;
          }

          .sections {
            gap: 66px;
            padding-top: 36px;
            padding-bottom: 75px;
          }

          .sectionHead {
            margin-bottom: 21px;
            padding-bottom: 12px;
          }

          .sectionHead h1 {
            font-size: 26px;
          }

          .grid-large,
          .grid-medium,
          .grid-small {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .calendarHeader {
            grid-template-columns:
              44px 1fr 44px;
            padding: 14px;
          }

          .calendarHeader h2 {
            font-size: 20px;
          }

          .calendarMoveButton {
            width: 36px;
            height: 36px;
          }

          .moreEventsModal {
            padding: 20px;
          }

          .categoryNavigation {
            gap: 8px;
          }

          .categoryFilter {
            padding: 10px 13px;
            font-size: 12px;
          }

          .selectedCategoryHead {
            align-items: flex-start;
            padding: 17px;
          }
        }
      `}</style>
    </main>
  );
}
