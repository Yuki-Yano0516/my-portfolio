import Footer from '@/components/layout/Footer';
import styles from '@/styles/sections/Contact.module.css';

type Social = {
  label: string;
  href: string;
};

type Props = {
  email: string;
  socials: Social[];
};

export default function ContactPresenter({ email, socials }: Props) {
  return (
    <section id="contact" className={styles.contact}>
      <div className="inner">
        <div className="sectionLabel reveal" style={{ color: 'var(--gray-700)' }}>Contact</div>

        <h2 className={`${styles.headline} reveal`}>
          Let&apos;s work<br />
          <em>together.</em>
        </h2>

        <p
          className={`${styles.sub} reveal`}
          style={{ '--delay': '0.1s' } as React.CSSProperties}
        >
          新規プロジェクト・お見積もり・ご相談など、お気軽にどうぞ。
        </p>

        <a
          href={`mailto:${email}`}
          className={`${styles.email} reveal`}
          style={{ '--delay': '0.15s' } as React.CSSProperties}
        >
          {email}
        </a>

        <ul
          className={`${styles.socials} reveal`}
          style={{ '--delay': '0.2s' } as React.CSSProperties}
        >
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </section>
  );
}
