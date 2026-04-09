import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import DOMPurify from 'isomorphic-dompurify';

marked.use(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  })
);

export async function markdownToHtml(markdown: string): Promise<string> {
  const raw = await marked.parse(markdown);
  return DOMPurify.sanitize(raw);
}

// 日本語基準（600字/分）で読了時間を計算
export function calcReadingTime(markdown: string | undefined): number {
  if (!markdown) return 1;
  const plain = markdown
    .replace(/`{3}[\s\S]*?`{3}/g, '')
    .replace(/[#*`\[\]!>-]/g, '')
    .replace(/\s/g, '');
  return Math.max(1, Math.ceil(plain.length / 600));
}

export function stripMarkdown(markdown: string | undefined): string {
  if (!markdown) return '';
  return markdown
    .replace(/`{3}[\s\S]*?`{3}/g, '')   // コードブロック
    .replace(/#{1,6}\s/g, '')            // 見出し
    .replace(/\*\*(.+?)\*\*/g, '$1')    // 太字
    .replace(/\*(.+?)\*/g, '$1')        // 斜体
    .replace(/`(.+?)`/g, '$1')          // インラインコード
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // リンク
    .replace(/!\[.*?\]\(.+?\)/g, '')    // 画像
    .replace(/^\s*[-*+]\s/gm, '')       // 箇条書き
    .replace(/^\s*\d+\.\s/gm, '')       // 番号リスト
    .replace(/\n{2,}/g, ' ')            // 複数改行
    .trim()
    .slice(0, 80);
}
