import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Yano. — Frontend Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#111110',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 96px',
          position: 'relative',
        }}
      >
        {/* 左上のアクセントライン */}
        <div
          style={{
            position: 'absolute',
            top: 80,
            left: 96,
            width: 40,
            height: 1,
            background: '#b0afa8',
          }}
        />

        <p
          style={{
            color: '#b0afa8',
            fontSize: 14,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            margin: '0 0 40px',
            fontFamily: 'sans-serif',
            paddingTop: 48,
          }}
        >
          Frontend Engineer
        </p>

        <h1
          style={{
            color: '#fafaf8',
            fontSize: 120,
            fontWeight: 300,
            margin: 0,
            lineHeight: 1,
            fontFamily: 'serif',
            letterSpacing: '-0.02em',
          }}
        >
          Yano.
        </h1>

        <div
          style={{
            display: 'flex',
            gap: 24,
            marginTop: 56,
          }}
        >
          {['React', 'Next.js', 'TypeScript'].map((tech, i) => (
            <div key={tech} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              {i > 0 && (
                <div style={{ width: 4, height: 4, borderRadius: 2, background: '#3a3a37' }} />
              )}
              <span
                style={{
                  color: '#6e6e68',
                  fontSize: 16,
                  fontFamily: 'sans-serif',
                  letterSpacing: '0.1em',
                }}
              >
                {tech}
              </span>
            </div>
          ))}
        </div>

        {/* 右下のURL */}
        <p
          style={{
            position: 'absolute',
            bottom: 80,
            right: 96,
            color: '#3a3a37',
            fontSize: 14,
            fontFamily: 'sans-serif',
            letterSpacing: '0.1em',
            margin: 0,
          }}
        >
          yano.dev
        </p>
      </div>
    ),
    { ...size },
  );
}
