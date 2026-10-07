import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL が設定されていません");
  }

  if (!key) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY が設定されていません");
  }

  return createClient(url, key);
}

export default async function EventsAdminPage() {
  const supabase = getSupabase();

  const { data: events, error } = await supabase
    .from("events")
    .select("id, created_at, title, description, category, area")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main
        style={{
          maxWidth: 1200,
          margin: "40px auto",
          padding: 20,
        }}
      >
        <h1>イベント管理</h1>

        <p style={{ color: "red" }}>
          データ取得エラー：{error.message}
        </p>
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: 1200,
        margin: "40px auto",
        padding: 20,
      }}
    >
      <h1 style={{ marginBottom: 10 }}>イベント管理</h1>

      <p style={{ marginBottom: 30 }}>
        登録イベント数：{events?.length ?? 0}件
      </p>

      <button
        style={{
          padding: "12px 20px",
          fontSize: 16,
          cursor: "pointer",
          marginBottom: 30,
        }}
      >
        ＋ 新しいイベントを登録
      </button>

      {!events || events.length === 0 ? (
        <div
          style={{
            padding: 30,
            border: "1px solid #ddd",
            borderRadius: 10,
          }}
        >
          まだイベントが登録されていません。
        </div>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: 12 }}>
                タイトル
              </th>

              <th style={{ textAlign: "left", padding: 12 }}>
                エリア
              </th>

              <th style={{ textAlign: "left", padding: 12 }}>
                カテゴリー
              </th>

              <th style={{ textAlign: "left", padding: 12 }}>
                登録日
              </th>
            </tr>
          </thead>

          <tbody>
            {events.map((event) => (
              <tr
                key={event.id}
                style={{
                  borderTop: "1px solid #ddd",
                }}
              >
                <td style={{ padding: 12 }}>
                  {event.title}
                </td>

                <td style={{ padding: 12 }}>
                  {event.area || "未設定"}
                </td>

                <td style={{ padding: 12 }}>
                  {event.category || "未設定"}
                </td>

                <td style={{ padding: 12 }}>
                  {event.created_at
                    ? new Date(event.created_at).toLocaleDateString("ja-JP")
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
