# Portfolio — CLAUDE.md

## プロジェクト概要

フリーランスフロントエンドエンジニア（Yano）のポートフォリオサイト。
Next.js App Router + microCMS + Resend で構成。Vercel にデプロイ済み。

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: CSS Modules
- **CMS**: microCMS（Works・Blog コンテンツ管理）
- **メール送信**: Resend（お問い合わせフォーム）
- **デプロイ**: Vercel
- **フォント**: Cormorant Garamond（見出し）、DM Sans（本文）

## ディレクトリ構成

```
app/                   # App Router ページ
  layout.tsx           # ルートレイアウト・メタデータ
  page.tsx             # トップページ（ISR: 60秒）
  blog/[slug]/         # ブログ詳細
  works/[slug]/        # Works 詳細
  contact/             # お問い合わせページ
  privacy/             # プライバシーポリシー
  actions/contact.ts   # Server Actions（メール送信）
  sitemap.ts           # サイトマップ自動生成
  robots.ts            # robots.txt 自動生成
  opengraph-image.tsx  # OGP 画像（動的生成・Edge Runtime）

components/
  layout/              # Header・Footer
  sections/            # MainVisual・Works・About・Blog・Contact
  ui/                  # Cursor・RevealObserver・SectionLabel
  form/                # ContactForm

lib/
  microcms.ts          # microCMS クライアント・データ取得関数
  markdown.ts          # Markdown → HTML 変換

types/
  microcms.ts          # Work・Blog 型定義

styles/
  globals.css          # グローバルスタイル・CSS 変数
```

## コンポーネント設計

**Container / Presenter パターン**を採用。

- `*Container.tsx` — ロジック・状態管理・データ取得を担当。`'use client'` を付ける
- `*Presenter.tsx` — UI のみ。props を受け取って描画するだけ
- `index.ts` — Container を default export で再エクスポート

新しいコンポーネントを追加するときもこのパターンに従う。

## スタイリング規約

- **CSS Modules** を使用（`*.module.css`）
- グローバルな CSS 変数は `styles/globals.css` の `:root` に定義済み
- 既存の変数を優先して使い、新しい色を安易に追加しない

### カラーパレット

```css
--black:    #111110
--gray-900: #1c1c1a
--gray-700: #3a3a37
--gray-500: #6e6e68
--gray-400: #8a8982
--gray-300: #b0afa8
--gray-100: #e8e7e2
--gray-50:  #f4f3ef
--white:    #fafaf8
```

### その他の変数

```css
--font-display: 'Cormorant Garamond', serif
--font-body:    'DM Sans', sans-serif
--nav-h:        72px
--max-w:        1200px
```

## データ取得

`lib/microcms.ts` に全データ取得関数をまとめている。

- `getWorks(limit)` — Works 一覧
- `getWork(contentId)` — Works 詳細
- `getAllWorkSlugs()` — 静的生成用スラッグ一覧
- `getBlogs(limit)` — Blog 一覧
- `getBlog(contentId)` — Blog 詳細
- `getAllBlogSlugs()` — 静的生成用スラッグ一覧

microCMS が未設定の場合は空配列を返す（`isConfigured` フラグで制御）。

## 環境変数

| 変数名 | 用途 |
|---|---|
| `MICROCMS_SERVICE_DOMAIN` | microCMS サービスドメイン |
| `MICROCMS_API_KEY` | microCMS API キー |
| `RESEND_API_KEY` | Resend API キー |
| `CONTACT_TO_EMAIL` | お問い合わせ受信メールアドレス |
| `NEXT_PUBLIC_SITE_URL` | サイトの正式 URL（SEO・sitemap 用） |

ローカル開発は `.env.local`、本番は Vercel の Environment Variables で管理。
`.env.local` は `.gitignore` 済み。`.env.local.example` をテンプレートとして使う。

## 開発コマンド

```bash
npm run dev    # 開発サーバー起動
npm run build  # 本番ビルド（デプロイ前に必ず確認）
npm run lint   # ESLint
```

## デプロイ

- GitHub `main` ブランチへの push で Vercel が自動デプロイ
- Root Directory: `portfolio`（リポジトリルートは `development/`）
- Node.js バージョン: 20.x

## SEO

- `app/layout.tsx` で `metadataBase`・OGP・Twitter Card を設定済み
- `title` は `{ default, template }` 形式で各ページが `%s | Yano.` になる
- `app/sitemap.ts` で microCMS コンテンツを含む sitemap を自動生成
- `app/opengraph-image.tsx` で OGP 画像を Edge Runtime で動的生成

## 実装開始時のブランチ運用

Issue の URL とともに実装依頼が来たら、コードを書く前に必ず以下の手順を踏む。

### Step 1: 現在のブランチを確認する

```bash
git branch --show-current
```

`main` 以外の作業ブランチにすでにいる場合はそのまま作業を開始する。
`main` にいる場合は Step 2 へ進む。

### Step 2: main を最新にする

```bash
git checkout main
git pull origin main
```

### Step 3: 次のブランチ番号を決める

既存の `issue-XXXX` ブランチを調べて連番の次の番号を使う。

```bash
git branch -a | grep -oE 'issue-[0-9]+' | grep -oE '[0-9]+' | sort -n | tail -1
```

- 結果が空（ブランチが存在しない）→ `0001` を使う
- 結果が数値で返ってきた場合 → その数値 +1 を4桁ゼロ埋めした番号を使う
  - 例: `1` → 次は `0002`、`9` → 次は `0010`

### Step 4: 作業ブランチを作成して移動する

```bash
git checkout -b issue-XXXX   # XXXX は Step 3 で決めた番号
```

### Step 5: 実装を開始する

ブランチ作成後、Issue の内容に従って実装を進める。

---

## エージェント

### レビュー依頼

PR のレビューや Issue の確認を依頼された場合、エージェントが明示されていなければ **必ず `pr-reviewer` エージェントを呼び出す**。

```
# 以下のような依頼がきたら pr-reviewer を使う
- 「このPRをレビューして」
- 「レビューお願い」
- 「このIssue確認して」
- PR / Issue の URL や番号が渡された場合
```

`pr-reviewer` エージェントは `.claude/agents/pr-reviewer.md` に定義されている。

### Issue 作成依頼

Issue の作成を依頼された場合、エージェントが明示されていなければ **必ず `issue-creator` エージェントを呼び出す**。

```
# 以下のような依頼がきたら issue-creator を使う
- 「Issueを作って」
- 「〜をIssue化して」
- 「〜の作業をIssueにまとめて」
```

`issue-creator` エージェントは `.claude/agents/issue-creator.md` に定義されている。
