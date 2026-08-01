# 東京イベントナビ

Notionを管理画面として使い、公開対象のイベントだけを表示するNext.jsサイトです。

## Vercel環境変数

必須：
- `NOTION_API_KEY`
- `NOTION_DATABASE_ID`

初回は未設定でもサイト自体はデプロイできます。未設定時はイベント0件で表示されます。
