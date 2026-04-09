import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <p className={styles.code}>404</p>
      <p className={styles.message}>ページが見つかりませんでした</p>
      <Link href="/" className={styles.link}>
        トップへ戻る
      </Link>
    </div>
  );
}
