import type { ContactState } from '@/app/actions/contact';
import styles from './ContactForm.module.css';

type Props = {
  state: ContactState;
  action: (formData: FormData) => void;
  isPending: boolean;
};

export default function ContactFormPresenter({ state, action, isPending }: Props) {
  return (
    <form action={action} className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="pf-name">
          お名前 <span className={styles.required}>必須</span>
        </label>
        <input
          id="pf-name"
          type="text"
          name="name"
          required
          disabled={isPending}
          placeholder="山田 太郎"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="pf-email">
          メールアドレス <span className={styles.required}>必須</span>
        </label>
        <input
          id="pf-email"
          type="email"
          name="email"
          required
          disabled={isPending}
          placeholder="you@example.com"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="pf-msg">
          ご相談内容 <span className={styles.required}>必須</span>
        </label>
        <textarea
          id="pf-msg"
          name="message"
          required
          disabled={isPending}
          placeholder="どんなサイトを作りたいか、ざっくりで大丈夫です。"
          className={styles.textarea}
        />
      </div>

      {(state.status === 'success' || state.status === 'error') && (
        <p className={`${styles.feedback} ${styles[state.status]}`}>
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending || state.status === 'success'}
        className={styles.submit}
      >
        {isPending ? '送信中…' : '送信する →'}
      </button>
    </form>
  );
}
