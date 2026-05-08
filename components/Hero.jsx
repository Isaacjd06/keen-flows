function Hero({ onPrimary, onSecondary, headline, kicker, align = 'left', showSignals = true, ctaLabel = 'Book a call' }) {
  const isCenter = align === 'center';
  return (
    <section id="top" data-surface-target="dark" style={{
      background: 'var(--kf-navy)',
      padding: '140px 48px 160px',
      position: 'relative', overflow: 'hidden',
      textAlign: isCenter ? 'center' : 'left',
    }}>
      {/* Noise overlay */}
      <div data-grain-layer style={{
        position: 'absolute', inset: 0, opacity: 0.05,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px',
        pointerEvents: 'none',
      }} />
      {/* Subtle gradient glow at right */}
      <div style={{
        position: 'absolute',
        right: '-200px', top: '-200px',
        width: 720, height: 720, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(74,175,245,0.18) 0%, rgba(74,175,245,0) 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: 'var(--kf-font-mono)', fontSize: 13, color: 'var(--kf-sky)',
          letterSpacing: '0.16em', marginBottom: 28, textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 12,
          animation: 'kfFadeUp 600ms cubic-bezier(0.22, 1, 0.36, 1) both',
        }}>
          <span style={{
            display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
            background: 'var(--kf-sky)', boxShadow: '0 0 12px var(--kf-sky)',
          }} />
          {kicker || 'A boutique AI automation agency'}
        </div>
        <h1 style={{
          fontFamily: 'var(--kf-font-display)', fontWeight: 800, fontSize: 'clamp(48px, 7vw, 88px)',
          lineHeight: 1.0, letterSpacing: '-0.025em', margin: 0,
          maxWidth: 980,
          margin: isCenter ? '0 auto' : 0,
          animation: 'kfFadeUp 700ms 80ms cubic-bezier(0.22, 1, 0.36, 1) both',
        }} data-on-dark>
          <span style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #B5D5F2 100%)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text',
            WebkitTextFillColor: 'transparent', color: 'transparent',
          }}>
            {headline?.[0] || 'The work between'}
          </span>
          <br />
          <span className="kf-gradient-text" style={{ fontStyle: 'italic', fontWeight: 700 }}>
            {headline?.[1] || 'the conversation'}
          </span>
          <span style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #B5D5F2 100%)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text',
            WebkitTextFillColor: 'transparent', color: 'transparent',
          }}>
            {' '}{headline?.[2] || 'and the close '}<br />{headline?.[3] || 'handled.'}
          </span>
        </h1>
        <p style={{
          fontFamily: 'var(--kf-font-body)', fontWeight: 300, fontSize: 19,
          lineHeight: 1.7, color: 'var(--kf-fg-on-dark-2)', marginTop: 36,
          maxWidth: 580,
          margin: isCenter ? '36px auto 0' : '36px 0 0',
          animation: 'kfFadeUp 700ms 160ms cubic-bezier(0.22, 1, 0.36, 1) both',
        }} data-on-dark-2>
          KEEN finds the gap between the moments that matter in your pipeline. and quietly closes it. No new tools for your team to learn. No process to maintain. Just a thing that used to require thought, that no longer does.
        </p>
        <div style={{
          marginTop: 44, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap',
          justifyContent: isCenter ? 'center' : 'flex-start',
          animation: 'kfFadeUp 700ms 240ms cubic-bezier(0.22, 1, 0.36, 1) both',
        }}>
          <PrimaryButton size="lg" onClick={onSecondary}>{ctaLabel}</PrimaryButton>
          <SecondaryButton color="sky" onClick={onPrimary}>See how it works</SecondaryButton>
          <span style={{
            marginLeft: 8,
            fontFamily: 'var(--kf-font-mono)', fontSize: 12, color: 'var(--kf-fg-on-dark-muted)',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
           . 7 days. No commitment.
          </span>
        </div>

        {/* Quiet signal row */}
        {showSignals && <div data-border-dark style={{
          marginTop: 96, textAlign: 'left',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
          borderTop: '1px solid var(--kf-navy-edge)', paddingTop: 32,
          animation: 'kfFadeUp 700ms 360ms cubic-bezier(0.22, 1, 0.36, 1) both',
        }}>
          {[
            ['One operator', 'No account managers in between'],
            ['One leverage point', 'We pick the highest one and own it'],
            ['One handover', 'It runs. You get on with the work'],
            ['Selective by design', 'Small roster. Real outcomes'],
          ].map(([t, b], i) => (
            <div key={i} style={{
              padding: '0 28px',
              borderRight: i < 3 ? '1px solid var(--kf-navy-edge)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--kf-font-display)', fontWeight: 600, fontSize: 16,
                color: 'var(--kf-fg-on-dark)', letterSpacing: '-0.005em', marginBottom: 8,
              }}>{t}</div>
              <div style={{
                fontFamily: 'var(--kf-font-body)', fontWeight: 300, fontSize: 13,
                color: 'var(--kf-fg-on-dark-2)', lineHeight: 1.6,
              }}>{b}</div>
            </div>
          ))}
        </div>}
      </div>
    </section>
  );
}

window.Hero = Hero;
