# Portfolio — CLAUDE.md

## プロジェクト概要

フリーランスフロントエンドエンジニア（Yano）のポートフォリオサイト。
Next.js App Router + microCMS + Resend で構成。Vercel にデプロイ済み。

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript / CSS Modules
- **CMS**: microCMS（Works・Blog）
- **メール送信**: Resend
- **デプロイ**: Vercel
- **フォント**: Cormorant Garamond（見出し）、DM Sans（本文）

## ディレクトリ構成

```
app/          ページ・レイアウト・Server Actions・sitemap・robots・OGP
components/   layout / sections / ui / form
lib/          microcms.ts（データ取得）、markdown.ts
types/        microcms.ts（Work・Blog 型）
styles/       globals.css（グローバルスタイル・CSS 変数）
```

## コンポーネント設計

**Container / Presenter パターン**を採用。新規コンポーネントも必ずこのパターンに従う。

- `*Container.tsx` — ロジック・状態管理。`'use client'` はここだけに付ける
- `*Presenter.tsx` — UI のみ。props を受け取って描画するだけ
- `index.ts` — Container を default export で再エクスポート

## スタイリング規約

CSS Modules を使用。グローバル変数は `styles/globals.css` の `:root` に定義済み。既存の変数を優先し、新しい色を安易に追加しない。

### カラーパレット

| 変数 | 値 |
|---|---|
| `--black` | `#111110` |
| `--gray-900` 〜 `--gray-50` | `#1c1c1a` 〜 `#f4f3ef` |
| `--white` | `#fafaf8` |

その他: `--font-display`（Cormorant Garamond）、`--font-body`（DM Sans）、`--nav-h: 72px`、`--max-w: 1200px`

## コーディング規約

### CSS

**margin / padding は論理プロパティを使う**
- 水平方向 → `margin-inline` / `padding-inline`
- 垂直方向 → `margin-block` / `padding-block`
- 一方向のみ → `margin-inline-start` / `margin-block-end` など
- `margin: 0 auto` のように不要な方向に `0` を当てない

```css
/* NG */
margin: 0 auto;
padding: 0 24px;

/* OK */
margin-inline: auto;
padding-inline: 24px;
```

**絶対配置の中央寄せは `inset` + `place-self` を使う**
- `position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto;` は使わない

```css
/* NG */
position: absolute;
top: 0; right: 0; bottom: 0; left: 0;
margin: auto;

/* OK */
position: absolute;
inset: 0;
place-self: center; /* 必要な場合のみ */
```

### JavaScript / TypeScript

- 関数は**アロー関数**を使う（jQuery など使用不可の環境は除く）
- 非同期処理は **`async / await`** を使う（`.then()` チェーンは使わない）

```ts
// NG
function fetchData() { ... }
fetch(url).then(res => res.json()).then(data => { ... });

// OK
const fetchData = async () => { ... };
const data = await fetch(url).then(res => res.json());
```

## 環境変数

| 変数名 | 用途 |
|---|---|
| `MICROCMS_SERVICE_DOMAIN` | microCMS サービスドメイン |
| `MICROCMS_API_KEY` | microCMS API キー |
| `RESEND_API_KEY` | Resend API キー |
| `CONTACT_TO_EMAIL` | お問い合わせ受信メールアドレス |
| `NEXT_PUBLIC_SITE_URL` | サイトの正式 URL（SEO・sitemap 用） |

ローカル開発は `.env.local`（`.gitignore` 済み）、本番は Vercel の Environment Variables で管理。

## 開発コマンド

```bash
npm run dev    # 開発サーバー起動
npm run build  # 本番ビルド（デプロイ前に必ず確認）
npm run lint   # ESLint
```

デプロイは `main` への push で Vercel が自動実行。Root Directory: `portfolio`、Node.js: `20.x`

## ブランチ運用

Issue URL とともに実装依頼が来たら、コードを書く前に必ず以下を実行する。

1. `git branch --show-current` で現在地を確認
2. `main` にいる場合のみ `git pull origin main` で最新化
3. 既存の `issue-XXXX` ブランチから次の番号を決める
   ```bash
   git branch -a | grep -oE 'issue-[0-9]+' | grep -oE '[0-9]+' | sort -n | tail -1
   ```
   結果が空なら `0001`、数値なら +1 して4桁ゼロ埋め（例: `1` → `0002`）
4. `git checkout -b issue-XXXX` でブランチ作成後、実装開始

## エージェント

| 依頼の種類 | 使うエージェント |
|---|---|
| PR・Issue のレビュー依頼 | `pr-reviewer`（`.claude/agents/pr-reviewer.md`） |
| Issue の作成依頼 | `issue-creator`（`.claude/agents/issue-creator.md`） |

エージェントが明示されていない場合も上記に従って自動で呼び出す。
