import ContactForm from '@/components/form/ContactForm';
import styles from '@/styles/sections/Contact.module.css';

export default function ContactPresenter() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="inner">
        <div className="sectionHead reveal">
          <div className="sectionHead__kicker">
            <i>05</i>
            お問い合わせ
          </div>
          <span className="sectionHead__ghost">Contact</span>
        </div>

        <div className={styles.grid}>
          <div className="reveal">
            <p className={styles.lead}>
              お仕事のご相談、お気軽にどうぞ。
              <strong>「こんなことできる？」という軽いご相談も大歓迎です。</strong>
              通常2〜3営業日以内にご返信いたします。
            </p>
            <div className={styles.reply}>
              <span className={styles.replyDot} />
              ただいま新規のご相談を受け付けています
            </div>
          </div>

          <div className="reveal" style={{ '--delay': '0.1s' } as React.CSSProperties}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
