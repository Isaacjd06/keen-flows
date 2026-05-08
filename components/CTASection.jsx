function CTASection({ onBookCall, ctaData, ctaLabel = 'Book a call' }) {
  const data = ctaData || {
    eyebrow: 'A small roster. Real outcomes.',
    h: ['Find the moment', 'you’re losing.', 'Get it back.'],
    sub: 'Twenty minutes on a call. Seven days of building. The result speaks for itself or it doesn’t. and that’s the point.',
  };
  return (
    <section style={{
      background: 'var(--kf-gradient)', padding: '140px 48px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.06,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px', pointerEvents: 'none',
      }} />
      <div style={{
        maxWidth: 820, margin: '0 auto', textAlign: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          fontFamily: 'var(--kf-font-mono)', fontSize: 12, color: 'rgba(244,243,239,0.78)',
          letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 28,
        }}>{data.eyebrow}</div>
        <h2 style={{
          fontFamily: 'var(--kf-font-display)', fontWeight: 800, fontSize: 'clamp(44px, 5.5vw, 72px)',
          lineHeight: 1.0, letterSpacing: '-0.025em', margin: 0,
          color: 'var(--kf-bg)',
        }}>
          {data.h[0]}<br />{data.h[1]}<br />
          <span style={{ fontStyle: 'italic', fontWeight: 700 }}>{data.h[2]}</span>
        </h2>
        <p style={{
          fontFamily: 'var(--kf-font-body)', fontWeight: 300, fontSize: 18,
          lineHeight: 1.75, color: 'rgba(244,243,239,0.82)',
          margin: '32px auto 44px', maxWidth: 520,
        }}>
          {data.sub}
        </p>
        <WhitePillButton onClick={onBookCall}>{ctaLabel}</WhitePillButton>
      </div>
    </section>
  );
}

window.CTASection = CTASection;
