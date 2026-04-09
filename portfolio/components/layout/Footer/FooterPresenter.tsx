import Link from 'next/link';
import styles from '@/styles/components/Footer.module.css';

type Props = {
  year: number;
};

export default function FooterPresenter({ year }: Props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>
          &copy; {year} Yano. All rights reserved.
        </span>
        <nav className={styles.nav}>
          <Link href="/privacy" className={styles.navLink}>Privacy Policy</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>
        <span className={styles.logo}>Yano.</span>
      </div>
    </footer>
  );
}
