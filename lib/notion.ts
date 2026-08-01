type NotionText = { plain_text?: string };
type Property = Record<string, any>;

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
  date: process.env.NOTION_PROP_DATE || "日時",
  location: process.env.NOTION_PROP_LOCATION || "場所",
  image: process.env.NOTION_PROP_IMAGE || "画像",
  price: process.env.NOTION_PROP_PRICE || "料金",
  url: process.env.NOTION_PROP_URL || "申込URL",
  category: process.env.NOTION_PROP_CATEGORY || "カテゴリ",
  description: process.env.NOTION_PROP_DESCRIPTION || "説明",
};

function text(prop?: Property): string {
  const items: NotionText[] =
    prop?.title || prop?.rich_text || prop?.formula?.string
      ? prop.title || prop.rich_text || [{ plain_text: prop.formula.string }]
      : [];
  return items.map((x) => x.plain_text || "").join("").trim();
}

function value(prop?: Property): string {
  if (!prop) return "";
  if (prop.type === "title" || prop.type === "rich_text") return text(prop);
  if (prop.type === "select") return prop.select?.name || "";
  if (prop.type === "status") return prop.status?.name || "";
  if (prop.type === "multi_select") return (prop.multi_select || []).map((x: any) => x.name).join("・");
  if (prop.type === "number") return prop.number == null ? "" : String(prop.number);
  if (prop.type === "url") return prop.url || "";
  if (prop.type === "email") return prop.email || "";
  if (prop.type === "phone_number") return prop.phone_number || "";
  if (prop.type === "formula") {
    return String(prop.formula?.string ?? prop.formula?.number ?? prop.formula?.boolean ?? "");
  }
  return "";
}

function dateValue(prop?: Property): string {
  const start = prop?.date?.start;
  if (!start) return "";
  const d = new Date(start);
  if (Number.isNaN(d.getTime())) return start;
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
    hour: start.includes("T") ? "2-digit" : undefined,
    minute: start.includes("T") ? "2-digit" : undefined,
    timeZone: "Asia/Tokyo",
  }).format(d);
}

function imageValue(prop?: Property, cover?: Property): string {
  const file = prop?.files?.[0];
  if (file?.type === "external") return file.external?.url || "";
  if (file?.type === "file") return file.file?.url || "";
  if (cover?.type === "external") return cover.external?.url || "";
  if (cover?.type === "file") return cover.file?.url || "";
  return "";
}

function isPublished(prop?: Property): boolean {
  if (!prop) return true;
  if (prop.type === "checkbox") return Boolean(prop.checkbox);
  const v = value(prop).toLowerCase();
  return ["公開", "published", "publish", "yes", "true"].includes(v);
}

export async function getEvents(): Promise<EventItem[]> {
  // 初回デプロイを止めないため、未設定なら空一覧を返す
  if (!API_KEY || !DATABASE_ID) return [];

  const response = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page_size: 100 }),
      next: { revalidate: 300 },
    }
  );

  if (!response.ok) {
    const body = await response.text();
    console.error(`Notion API error ${response.status}: ${body}`);
    return [];
  }

  const data = await response.json();

  return (data.results || [])
    .map((page: any): EventItem => {
      const p = page.properties || {};
      return {
        id: page.id,
        title: text(p[names.title]) || "名称未設定",
        published: isPublished(p[names.published]),
        date: dateValue(p[names.date]),
        location: value(p[names.location]),
        image: imageValue(p[names.image], page.cover),
        price: value(p[names.price]),
        url: value(p[names.url]),
        category: value(p[names.category]),
        description: value(p[names.description]),
      };
    })
    .filter((event: EventItem) => event.published)
    .sort((a: EventItem, b: EventItem) => a.date.localeCompare(b.date));
}
