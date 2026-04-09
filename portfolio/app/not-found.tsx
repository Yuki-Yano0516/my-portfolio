import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        fontFamily: 'var(--font-body)',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '120px',
          fontWeight: 300,
          lineHeight: 1,
          color: 'var(--gray-100)',
        }}
      >
        404
      </p>
      <p style={{ fontSize: '15px', color: 'var(--gray-500)' }}>
        ページが見つかりませんでした
      </p>
      <Link
        href="/"
        style={{
          fontSize: '12px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--black)',
          borderBottom: '1px solid var(--black)',
          paddingBottom: '3px',
        }}
      >
        トップへ戻る
      </Link>
    </div>
  );
}
