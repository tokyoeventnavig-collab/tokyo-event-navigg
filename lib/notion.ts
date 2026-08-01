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
  location: string;
  image: string;
  price: string;
  url: string;
  category: string;
  description: string;
};

const API_KEY = process.env.NOTION_API_KEY;
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

const names = {
  title: process.env.NOTION_PROP_TITLE || "イベント名",
  published: process.env.NOTION_PROP_PUBLISHED || "公開",
  date: process.env.NOTION_PROP_DATE || "開催日",
  location: process.env.NOTION_PROP_LOCATION || "会場名",
  image: process.env.NOTION_PROP_IMAGE || "フライヤー",
  price: process.env.NOTION_PROP_PRICE || "参加費",
  url: process.env.NOTION_PROP_URL || "申込URL",
  category: process.env.NOTION_PROP_CATEGORY || "カテゴリー",
  description:
    process.env.NOTION_PROP_DESCRIPTION || "イベント概要",
};

function text(prop?: Property): string {
  if (!prop) return "";

  const items: NotionText[] =
    prop.title ||
    prop.rich_text ||
    (prop.formula?.type === "string"
      ? [{ plain_text: prop.formula.string || "" }]
      : []);

  return items
    .map((item) => item.plain_text || "")
    .join("")
    .trim();
}

function value(prop?: Property): string {
  if (!prop) return "";

  if (prop.type === "title" || prop.type === "rich_text") {
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
      .map((item: { name?: string }) => item.name || "")
      .filter(Boolean)
      .join("・");
  }

  if (prop.type === "number") {
    if (prop.number == null) return "";
    return String(prop.number);
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
    return String(
      prop.formula?.string ??
        prop.formula?.number ??
        prop.formula?.boolean ??
        "",
    );
  }

  return "";
}

function dateValue(prop?: Property): string {
  const start =
    prop?.date?.start ||
    prop?.formula?.date?.start ||
    "";

  if (!start) return "";

  const date = new Date(start);

  if (Number.isNaN(date.getTime())) {
    return start;
  }

  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
    hour: start.includes("T") ? "2-digit" : undefined,
    minute: start.includes("T") ? "2-digit" : undefined,
    timeZone: "Asia/Tokyo",
  }).format(date);
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

function isPublished(prop?: Property): boolean {
  if (!prop) return true;

  if (prop.type === "checkbox") {
    return Boolean(prop.checkbox);
  }

  const currentValue = value(prop).toLowerCase();

  return [
    "公開",
    "published",
    "publish",
    "yes",
    "true",
  ].includes(currentValue);
}

function convertPage(page: NotionPage): EventItem {
  const properties = page.properties || {};

  return {
    id: page.id,
    title:
      text(properties[names.title]) ||
      "名称未設定",
    published: isPublished(
      properties[names.published],
    ),
    date: dateValue(properties[names.date]),
    location: value(properties[names.location]),
    image: imageValue(
      properties[names.image],
      page.cover,
    ),
    price: value(properties[names.price]),
    url:
      value(properties[names.url]) ||
      page.url ||
      "",
    category: value(properties[names.category]),
    description: value(
      properties[names.description],
    ),
  };
}

export async function getEvents(): Promise<EventItem[]> {
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
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
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
      const body = await response.text();

      console.error(
        `Notion API error ${response.status}: ${body}`,
      );

      return [];
    }

    const data = await response.json();

    return (data.results || [])
      .map((page: NotionPage) =>
        convertPage(page),
      )
      .filter(
        (event: EventItem) => event.published,
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
          "Notion-Version": "2022-06-28",
        },
        next: {
          revalidate: 300,
        },
      },
    );

    if (!response.ok) {
      const body = await response.text();

      console.error(
        `Notion page error ${response.status}: ${body}`,
      );

      return null;
    }

    const page =
      (await response.json()) as NotionPage;

    const event = convertPage(page);

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
