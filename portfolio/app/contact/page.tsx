import type { Metadata } from 'next';
import ContactForm from '@/components/form/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact | Yano.',
  description: 'お問い合わせ・ご依頼はこちらからお気軽にどうぞ。',
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>Contact</p>
          <h1 className={styles.title}>お問い合わせ</h1>
          <p className={styles.desc}>
            ご依頼・ご質問などはこちらのフォームよりお気軽にご連絡ください。<br />
            3営業日以内にご返信いたします。
          </p>
        </header>
        <ContactForm />
      </div>
    </main>
  );
}
