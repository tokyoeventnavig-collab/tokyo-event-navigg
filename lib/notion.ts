type NotionText = {
  plain_text?: string;
};

type Property = Record<string, any>;

type NotionPage = {
  id: string;
  url?: string;
  created_time?: string;
  last_edited_time?: string;
  properties?: Record<string, Property>;
  cover?: Property | null;
};

export type EventItem = {
  id: string;
  title: string;
  published: boolean;
  featured: boolean;
  verified: boolean;
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

  verified:
    process.env.NOTION_PROP_VERIFIED ||
    "認証",

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
    process.env.NOTION_PROP_VENUE_ADDRESS ||
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
    process.env.NOTION_PROP_DESCRIPTION ||
    "イベント概要",

  participationCondition:
    process.env
      .NOTION_PROP_PARTICIPATION_CONDITION ||
    "参加条件",

  organizer:
    process.env.NOTION_PROP_ORGANIZER ||
    "主催者",
};

function text(
  prop?: Property,
): string {
  if (!prop) {
    return "";
  }

  const items: NotionText[] =
    prop.title ||
    prop.rich_text ||
    (prop.formula?.type === "string"
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
        }) =>
          item.name || "",
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
    return prop.phone_number || "";
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

  return [
    "true",
    "yes",
    "はい",
    "公開",
    "オン",
  ].includes(
    value(prop).toLowerCase(),
  );
}

function getDateStart(
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
    getDateStart(prop);

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
    return `${colonMatch[1].padStart(
      2,
      "0",
    )}:${colonMatch[2]}`;
  }

  const japaneseMatch =
    trimmed.match(
      /(\d{1,2})時(?:(\d{1,2})分)?/,
    );

  if (japaneseMatch) {
    return `${japaneseMatch[1].padStart(
      2,
      "0",
    )}:${(
      japaneseMatch[2] ||
      "00"
    ).padStart(2, "0")}`;
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

  if (
    file?.type === "file"
  ) {
    return file.file?.url || "";
  }

  if (
    cover?.type === "external"
  ) {
    return (
      cover.external?.url || ""
    );
  }

  if (
    cover?.type === "file"
  ) {
    return cover.file?.url || "";
  }

  return "";
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

  return [
    "公開",
    "published",
    "publish",
    "yes",
    "true",
  ].includes(
    value(prop).toLowerCase(),
  );
}

export function detectArea(
  venueAddress: string,
  location: string,
): string {
  const source =
    `${venueAddress} ${location}`
      .replace(/\s+/g, "")
      .replace(
        /[‐－―ー]/g,
        "-",
      );

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
        "新宿御苑",
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
        "松濤",
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
        "上野広小路",
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
    if (
      rule.keywords.some(
        (keyword) =>
          source.includes(keyword),
      )
    ) {
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
      properties[names.location],
    );

  const venueAddress =
    value(
      properties[
        names.venueAddress
      ],
    );

  const dateStart =
    getDateStart(
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

    verified:
      checkboxValue(
        properties[
          names.verified
        ],
      ),

    date:
      formatDate(
        properties[names.date],
      ),

    dateISO: dateStart,

    dateStart,

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

            headers: {
              Authorization:
                `Bearer ${API_KEY}`,

              "Notion-Version":
                "2022-06-28",

              "Content-Type":
                "application/json",
            },

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
      .map(
        (page: NotionPage) =>
          convertPage(page),
      )
      .filter(
        (event: EventItem) =>
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

          headers: {
            Authorization:
              `Bearer ${API_KEY}`,

            "Notion-Version":
              "2022-06-28",

            "Content-Type":
              "application/json",
          },

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
      await response.json();

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

    const options:
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
        options
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
  if (
    !API_KEY ||
    !id
  ) {
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

          headers: {
            Authorization:
              `Bearer ${API_KEY}`,

            "Notion-Version":
              "2022-06-28",
          },

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

    const event =
      convertPage(
        (await response.json()) as NotionPage,
      );

    return event.published
      ? event
      : null;
  } catch (error) {
    console.error(
      "イベント詳細の取得に失敗しました。",
      error,
    );

    return null;
  }
}
