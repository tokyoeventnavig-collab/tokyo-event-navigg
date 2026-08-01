type NotionText = {
  plain_text?: string;
};

type Property = Record<string, any>;

type NotionPage = {
  id: string;
  url?: string;
  properties?: Record<string, Property>;
  cover?: Property | null;
};

export type EventItem = {
  id: string;
  title: string;
  published: boolean;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  venueAddress: string;
  image: string;
  url: string;
  category: string;
  description: string;
  participationCondition: string;
  organizer: string;
};

const API_KEY = process.env.NOTION_API_KEY;
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

const names = {
  title:
    process.env.NOTION_PROP_TITLE ||
    "イベント名",

  published:
    process.env.NOTION_PROP_PUBLISHED ||
    "公開",

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
    process.env.NOTION_PROP_PARTICIPATION_CONDITION ||
    "参加条件",

  organizer:
    process.env.NOTION_PROP_ORGANIZER ||
    "主催者",
};

function text(prop?: Property): string {
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
    .map((item) => item.plain_text || "")
    .join("")
    .trim();
}

function value(prop?: Property): string {
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

  if (prop.type === "multi_select") {
    return (prop.multi_select || [])
      .map(
        (item: { name?: string }) =>
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

  if (prop.type === "phone_number") {
    return prop.phone_number || "";
  }

  if (prop.type === "formula") {
    if (prop.formula?.type === "string") {
      return prop.formula.string || "";
    }

    if (prop.formula?.type === "number") {
      return prop.formula.number == null
        ? ""
        : String(prop.formula.number);
    }

    if (prop.formula?.type === "boolean") {
      return prop.formula.boolean
        ? "はい"
        : "いいえ";
    }
  }

  return text(prop);
}

function formatDate(prop?: Property): string {
  const start =
    prop?.date?.start ||
    prop?.formula?.date?.start ||
    "";

  if (!start) {
    return value(prop);
  }

  const date = new Date(start);

  if (Number.isNaN(date.getTime())) {
    return start;
  }

  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
    timeZone: "Asia/Tokyo",
  }).format(date);
}

function formatTimeText(input: string): string {
  const trimmed = input.trim();

  if (!trimmed) {
    return "";
  }

  const colonMatch = trimmed.match(
    /(\d{1,2})[：:](\d{2})/,
  );

  if (colonMatch) {
    const hour =
      colonMatch[1].padStart(2, "0");

    return `${hour}:${colonMatch[2]}`;
  }

  const japaneseMatch = trimmed.match(
    /(\d{1,2})時(?:(\d{1,2})分)?/,
  );

  if (japaneseMatch) {
    const hour =
      japaneseMatch[1].padStart(2, "0");

    const minute = (
      japaneseMatch[2] || "00"
    ).padStart(2, "0");

    return `${hour}:${minute}`;
  }

  return trimmed;
}

function timeValue(prop?: Property): string {
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
    const date = new Date(dateStart);

    if (!Number.isNaN(date.getTime())) {
      return new Intl.DateTimeFormat(
        "ja-JP",
        {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Tokyo",
        },
      ).format(date);
    }
  }

  return formatTimeText(value(prop));
}

function imageValue(
  prop?: Property,
  cover?: Property | null,
): string {
  const file = prop?.files?.[0];

  if (file?.type === "external") {
    return file.external?.url || "";
  }

  if (file?.type === "file") {
    return file.file?.url || "";
  }

  if (cover?.type === "external") {
    return cover.external?.url || "";
  }

  if (cover?.type === "file") {
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
    return Boolean(prop.checkbox);
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

function convertPage(
  page: NotionPage,
): EventItem {
  const properties =
    page.properties || {};

  return {
    id: page.id,

    title:
      text(properties[names.title]) ||
      "名称未設定",

    published: isPublished(
      properties[names.published],
    ),

    date: formatDate(
      properties[names.date],
    ),

    startTime: timeValue(
      properties[names.startTime],
    ),

    endTime: timeValue(
      properties[names.endTime],
    ),

    location: value(
      properties[names.location],
    ),

    venueAddress: value(
      properties[names.venueAddress],
    ),

    image: imageValue(
      properties[names.image],
      page.cover,
    ),

    /*
     * Notionの申込URLが未入力でも
     * 東京イベントナビ公式LINEへ移動します。
     */
    url:
      value(properties[names.url]) ||
      "https://lin.ee/Q6dBeSg",

    category: value(
      properties[names.category],
    ),

    description: value(
      properties[names.description],
    ),

    participationCondition: value(
      properties[
        names.participationCondition
      ],
    ),

    organizer: value(
      properties[names.organizer],
    ),
  };
}

export async function getEvents(): Promise<
  EventItem[]
> {
  if (!API_KEY || !DATABASE_ID) {
    return [];
  }

  try {
    const response = await fetch(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Notion-Version":
            "2022-06-28",
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          page_size: 100,
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

    return (data.results || [])
      .map((page: NotionPage) =>
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

export async function getEventById(
  id: string,
): Promise<EventItem | null> {
  if (!API_KEY || !id) {
    return null;
  }

  try {
    const response = await fetch(
      `https://api.notion.com/v1/pages/${encodeURIComponent(id)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
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
