import Link from "next/link";

export default function AdminPage() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>
        東京イベントナビ 管理画面
      </h1>

      <p style={{ color: "#666", marginBottom: "32px" }}>
        イベント情報の登録・確認・削除を行います。
      </p>

      <Link
        href="/admin/events"
        style={{
          display: "inline-block",
          padding: "14px 24px",
          background: "#111",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        イベント管理
      </Link>
    </main>
  );
}
