type NotionText = {
  plain_text?: string;
};

type NotionFile = {
  type?: "file" | "external" | "file_upload";
  name?: string;
  file?: {
    url?: string;
    expiry_time?: string;
  };
  external?: {
    url?: string;
  };
  file_upload?: {
    id?: string;
  };
};

type NotionProperty = {
  type?: string;

  title?: NotionText[];
  rich_text?: NotionText[];

  checkbox?: boolean;

  date?: {
    start?: string;
    end?: string | null;
  } | null;

  files?: NotionFile[];

  url?: string | null;

  select?: {
    name?: string;
  } | null;

  multi_select?: {
    name?: string;
  }[];

  number?: number | null;

  formula?: {
    type?: string;
    string?: string | null;
    number?: number | null;
    boolean?: boolean | null;
    date?: {
      start?: string;
      end?: string | null;
    } | null;
  };

  created_time?: string;
};

type NotionPage = {
  id: string;
  url?: string;
  properties?: Record<string, NotionProperty>;
  cover?: NotionFile | null;
};

type NotionQueryResponse = {
  results?: NotionPage[];
  has_more?: boolean;
  next_cursor?: string | null;
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

/**
 * Notion側の列名
 *
 * 環境変数を設定した場合は、その名前を優先します。
 * 未設定の場合は、現在のNotionデータベースの日本語列名を使います。
 */
const propertyNames = {
  title: process.env.NOTION_PROP_TITLE || "イベント名",
  published: process.env.NOTION_PROP_PUBLISHED || "公開",
  date: process.env.NOTION_PROP_DATE || "開催日",
  location: process.env.NOTION_PROP_LOCATION || "会場名",
  image: process.env.NOTION_PROP_IMAGE || "フライヤー",
  price: process.env.NOTION_PROP_PRICE || "料金",
  url: process.env.NOTION_PROP_URL || "申込URL",
  category: process.env.NOTION_PROP_CATEGORY || "カテゴリー",
  description: process.env.NOTION_PROP_DESCRIPTION || "説明",
};

function getText(property?: NotionProperty): string {
  if (!property) {
    return "";
  }

  const items =
    property.title ||
    property.rich_text ||
    (property.formula?.type === "string"
      ? [{ plain_text: property.formula.string || "" }]
      : []);

  return items
    .map((item) => item.plain_text || "")
    .join("")
    .trim();
}

function getCheckbox(
  property: NotionProperty | undefined,
  defaultValue = true,
): boolean {
  if (!property) {
    return defaultValue;
  }

  if (typeof property.checkbox === "boolean") {
    return property.checkbox;
  }

  if (
    property.formula?.type === "boolean" &&
    typeof property.formula.boolean === "boolean"
  ) {
    return property.formula.boolean;
  }

  return defaultValue;
}

function getDate(property?: NotionProperty): string {
  if (!property) {
    return "";
  }

  if (property.date?.start) {
    return property.date.start;
  }

  if (
    property.formula?.type === "date" &&
    property.formula.date?.start
  ) {
    return property.formula.date.start;
  }

  return "";
}

function getSelect(property?: NotionProperty): string {
  if (!property) {
    return "";
  }

  if (property.select?.name) {
    return property.select.name;
  }

  if (property.multi_select?.length) {
    return property.multi_select
      .map((item) => item.name || "")
      .filter(Boolean)
      .join("・");
  }

  return getText(property);
}

function getUrl(property?: NotionProperty): string {
  if (!property) {
    return "";
  }

  if (property.url) {
    return property.url;
  }

  return getText(property);
}

function getPrice(property?: NotionProperty): string {
  if (!property) {
    return "";
  }

  if (typeof property.number === "number") {
    return `${property.number.toLocaleString("ja-JP")}円`;
  }

  if (
    property.formula?.type === "number" &&
    typeof property.formula.number === "number"
  ) {
    return `${property.formula.number.toLocaleString("ja-JP")}円`;
  }

  return getText(property);
}

function getFileUrl(file?: NotionFile | null): string {
  if (!file) {
    return "";
  }

  if (file.type === "file") {
    return file.file?.url || "";
  }

  if (file.type === "external") {
    return file.external?.url || "";
  }

  return file.file?.url || file.external?.url || "";
}

function getImage(
  property: NotionProperty | undefined,
  cover?: NotionFile | null,
): string {
  const propertyFile = property?.files?.[0];
  const propertyImage = getFileUrl(propertyFile);

  if (propertyImage) {
    return propertyImage;
  }

  return getFileUrl(cover);
}

function convertPageToEvent(page: NotionPage): EventItem {
  const properties = page.properties || {};

  return {
    id: page.id,
    title:
      getText(properties[propertyNames.title]) ||
      "タイトル未設定",

    /*
     * 「公開」列が存在しない場合は表示対象にします。
     * 後から公開チェックボックスを作れば、その値で絞り込まれます。
     */
    published: getCheckbox(
      properties[propertyNames.published],
      true,
    ),

    date: getDate(properties[propertyNames.date]),

    location: getText(
      properties[propertyNames.location],
    ),

    image: getImage(
      properties[propertyNames.image],
      page.cover,
    ),

    price: getPrice(properties[propertyNames.price]),

    url:
      getUrl(properties[propertyNames.url]) ||
      page.url ||
      "",

    category: getSelect(
      properties[propertyNames.category],
    ),

    description: getText(
      properties[propertyNames.description],
    ),
  };
}

async function queryDatabase(): Promise<NotionPage[]> {
  if (!API_KEY) {
    console.error(
      "Notion API error: NOTION_API_KEY が設定されていません。",
    );
    return [];
  }

  if (!DATABASE_ID) {
    console.error(
      "Notion API error: NOTION_DATABASE_ID が設定されていません。",
    );
    return [];
  }

  const allPages: NotionPage[] = [];
  let nextCursor: string | null = null;

  do {
    const body: {
      page_size: number;
      start_cursor?: string;
    } = {
      page_size: 100,
    };

    if (nextCursor) {
      body.start_cursor = nextCursor;
    }

    const response = await fetch(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28",
        },
        body: JSON.stringify(body),

        /*
         * Notion内の変更を約5分ごとにサイトへ反映します。
         */
        next: {
          revalidate: 300,
        },
      },
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        `Notion API error ${response.status}: ${errorText}`,
      );

      return [];
    }

    const data =
      (await response.json()) as NotionQueryResponse;

    allPages.push(...(data.results || []));

    nextCursor = data.has_more
      ? data.next_cursor || null
      : null;
  } while (nextCursor);

  return allPages;
}

export async function getEvents(): Promise<EventItem[]> {
  try {
    const pages = await queryDatabase();

    return pages
      .map(convertPageToEvent)
      .filter((event) => event.published);
  } catch (error) {
    console.error("Notionデータの取得に失敗しました。", error);
    return [];
  }
}
