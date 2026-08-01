# 東京イベントナビ

Notionを管理画面として使い、公開対象のイベントだけを表示するNext.jsサイトです。

## 必要なNotion列（初期設定）

- イベント名：タイトル
- 公開：チェックボックス
- 日時：日付
- 場所：テキスト
- 画像：ファイル
- 料金：テキスト
- 申込URL：URL
- カテゴリ：セレクト
- 説明：テキスト

列名が違う場合は、Vercelの環境変数 `NOTION_PROP_...` で合わせられます。

## Vercel環境変数

必須：

- `NOTION_API_KEY`
- `NOTION_DATA_SOURCE_ID`

任意：

- `NOTION_PROP_TITLE`
- `NOTION_PROP_PUBLISHED`
- `NOTION_PROP_DATE`
- `NOTION_PROP_LOCATION`
- `NOTION_PROP_IMAGE`
- `NOTION_PROP_PRICE`
- `NOTION_PROP_URL`
- `NOTION_PROP_CATEGORY`
- `NOTION_PROP_DESCRIPTION`

## 注意

Notionデータベースを、作成したNotionインテグレーションに共有してください。
