// The 7-day trial section. central to KEEN's offer
function Trial({ onBookCall }) {
  const phases = [
    { d: 'Day 1', t: 'The conversation', b: 'Twenty minutes. We listen. By the end, the leverage point is named.' },
    { d: 'Day 2–6', t: 'The build', b: 'We design, integrate, and test it inside your operation. You don\'t lift a finger.' },
    { d: 'Day 7', t: 'The handover', b: 'It runs in production. You decide whether to keep it. Most do.' },
  ];

  return (
    <section id="trial" style={{
      background: 'var(--kf-bg)', padding: '140px 48px',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 80, alignItems: 'start',
        }}>
          <div style={{ position: 'sticky', top: 120 }}>
            <div style={{
              fontFamily: 'var(--kf-font-mono)', fontSize: 12, color: 'var(--kf-brand)',
              letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 20,
            }}>The trial</div>
            <h2 style={{
              fontFamily: 'var(--kf-font-display)', fontWeight: 800, fontSize: 'clamp(40px, 4.4vw, 56px)',
              lineHeight: 1.02, letterSpacing: '-0.025em', margin: '0 0 24px 0',
              color: 'var(--kf-fg)',
            }}>
              Seven days.<br />
              <span className="kf-gradient-text">The work is the pitch.</span>
            </h2>
            <p style={{
              fontFamily: 'var(--kf-font-body)', fontWeight: 300, fontSize: 17,
              lineHeight: 1.75, color: 'var(--kf-fg-2)', margin: '0 0 32px 0', maxWidth: 420,
            }}>
              We pick one leverage point and build it for free. No deck. No sales sequence. By day seven you've either felt the difference, or you haven't. and either answer is fine.
            </p>
            <PrimaryButton size="lg" onClick={onBookCall}>Start the seven days</PrimaryButton>
            <div style={{
              marginTop: 24,
              fontFamily: 'var(--kf-font-mono)', fontSize: 12, color: 'var(--kf-fg-muted)',
              letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              No card. No commitment. Just clarity.
            </div>
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative' }}>
            {/* gradient rail */}
            <div style={{
              position: 'absolute', left: 30, top: 12, bottom: 12,
              width: 2,
              background: 'linear-gradient(180deg, var(--kf-royal) 0%, var(--kf-sky) 100%)',
              borderRadius: 2,
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {phases.map((p, i) => (
                <div key={p.d} style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0, width: 60, height: 60, borderRadius: '50%',
                    background: 'var(--kf-bg)',
                    border: '2px solid var(--kf-brand)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--kf-font-mono)', fontSize: 11, color: 'var(--kf-brand)',
                    letterSpacing: '0.06em',
                    boxShadow: '0 0 0 6px var(--kf-bg)',
                    position: 'relative', zIndex: 1,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{
                    flex: 1,
                    background: 'var(--kf-bg)',
                    border: '1px solid var(--kf-surface-3)',
                    borderRadius: 12, padding: 32,
                    transition: 'border-color 200ms ease, box-shadow 200ms ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--kf-brand)'; e.currentTarget.style.boxShadow = 'var(--kf-shadow-md)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--kf-surface-3)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{
                      fontFamily: 'var(--kf-font-mono)', fontSize: 12, color: 'var(--kf-brand)',
                      letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12,
                    }}>{p.d}</div>
                    <h3 style={{
                      fontFamily: 'var(--kf-font-display)', fontWeight: 700, fontSize: 24,
                      lineHeight: 1.2, letterSpacing: '-0.01em', color: 'var(--kf-fg)',
                      margin: '0 0 12px 0',
                    }}>{p.t}</h3>
                    <p style={{
                      fontFamily: 'var(--kf-font-body)', fontWeight: 300, fontSize: 16,
                      lineHeight: 1.75, color: 'var(--kf-fg-2)', margin: 0,
                    }}>{p.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Trial = Trial;
