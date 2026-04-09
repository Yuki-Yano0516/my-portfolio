import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Yano.',
  description: 'プライバシーポリシー',
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>Privacy Policy</p>
          <h1 className={styles.title}>プライバシーポリシー</h1>
        </header>

        <div className={styles.body}>
          <section>
            <h2>個人情報の取り扱いについて</h2>
            <p>
              Yano.（以下「当サイト」）は、お問い合わせフォームを通じてご提供いただいた個人情報（氏名・メールアドレス等）を、
              お問い合わせへの返答にのみ使用し、第三者に提供・開示することはありません。
            </p>
          </section>

          <section>
            <h2>アクセス解析について</h2>
            <p>
              当サイトでは、サービス向上を目的としてアクセス解析ツールを使用することがあります。
              取得するデータはすべて匿名で収集されており、個人を特定するものではありません。
            </p>
          </section>

          <section>
            <h2>広告について</h2>
            <p>
              当サイトでは、Google AdSense 等の第三者配信の広告サービスを利用することがあります。
              広告配信事業者はCookieを使用してユーザーの過去の閲覧情報に基づいた広告を配信することがあります。
              Googleによる広告のCookieの使用については、
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
                Googleの広告に関するポリシー
              </a>
              をご覧ください。
            </p>
          </section>

          <section>
            <h2>免責事項</h2>
            <p>
              当サイトのコンテンツは情報提供を目的としており、正確性・完全性を保証するものではありません。
              当サイトの情報を利用したことによって生じたいかなる損害についても、当サイトは責任を負いかねます。
            </p>
          </section>

          <section>
            <h2>著作権について</h2>
            <p>
              当サイトに掲載されているすべてのコンテンツ（文章・画像・デザイン等）の著作権は当サイトに帰属します。
              無断転載・複製を禁じます。
            </p>
          </section>

          <section>
            <h2>プライバシーポリシーの変更</h2>
            <p>
              当サイトは、必要に応じてプライバシーポリシーを変更することがあります。
              変更した場合はこのページにて告知します。
            </p>
          </section>

          <section>
            <h2>お問い合わせ</h2>
            <p>
              プライバシーポリシーに関するご質問は、
              <a href="/contact">お問い合わせフォーム</a>よりご連絡ください。
            </p>
          </section>

          <p className={styles.updated}>最終更新日：2026年3月28日</p>
        </div>
      </div>
    </main>
  );
}
