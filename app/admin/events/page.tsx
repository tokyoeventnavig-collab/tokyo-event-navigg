export default function EventsAdminPage() {
  return (
    <main
      style={{
        maxWidth: 1200,
        margin: "40px auto",
        padding: 20,
      }}
    >
      <h1>イベント管理</h1>

      <br />

      <button
        style={{
          padding: "12px 20px",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        ＋ 新しいイベントを登録
      </button>

      <hr style={{ margin: "30px 0" }} />

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>タイトル</th>
            <th>日時</th>
            <th>エリア</th>
            <th>カテゴリー</th>
            <th>状態</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>サンプルイベント</td>
            <td>2026/10/10</td>
            <td>新宿</td>
            <td>交流会</td>
            <td>公開中</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
