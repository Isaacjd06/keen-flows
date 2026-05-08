function Footer() {
  const cols = [
    { h: 'The work', items: ['How it works', 'What you get', 'The trial'] },
    { h: 'KEEN', items: ['Who it\'s for', 'Contact'] },
    { h: 'Quiet links', items: ['Privacy', 'Terms'] },
  ];
  return (
    <footer style={{ background: 'var(--kf-navy)', padding: '96px 48px 48px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 64, marginBottom: 80 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
              <img src="assets/keen-wordmark.png" alt="KEEN FLOWS" style={{ height: 40, display: 'block', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p style={{
              fontFamily: 'var(--kf-font-display)', fontWeight: 600, fontSize: 22,
              lineHeight: 1.3, letterSpacing: '-0.005em',
              color: 'var(--kf-fg-on-dark)', margin: '0 0 14px 0', maxWidth: 360,
            }}>
              Precision, automated.
            </p>
            <p style={{
              fontFamily: 'var(--kf-font-body)', fontWeight: 300, fontSize: 14,
              lineHeight: 1.75, color: 'var(--kf-fg-on-dark-2)', margin: 0, maxWidth: 320,
            }}>
              A boutique AI automation agency for high-ticket service businesses.
            </p>
          </div>
          {cols.map(col => (
            <div key={col.h}>
              <div style={{
                fontFamily: 'var(--kf-font-mono)', fontSize: 11, color: 'var(--kf-sky)',
                letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 22,
              }}>{col.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.items.map(i => (
                  <li key={i}>
                    <a href="#" style={{
                      fontFamily: 'var(--kf-font-body)', fontSize: 14,
                      color: 'var(--kf-fg-on-dark-2)', textDecoration: 'none',
                      transition: 'color 200ms ease',
                    }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--kf-sky)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--kf-fg-on-dark-2)'}
                    >{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          borderTop: '1px solid var(--kf-navy-edge)', paddingTop: 32,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap',
        }}>
          <div style={{
            fontFamily: 'var(--kf-font-mono)', fontSize: 11, color: 'var(--kf-fg-on-dark-muted)',
            letterSpacing: '0.12em',
          }}>© 2026 KEEN. Precision, automated.</div>
          <div style={{
            fontFamily: 'var(--kf-font-mono)', fontSize: 11, color: 'var(--kf-sky)',
            letterSpacing: '0.12em', display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{
              display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
              background: 'var(--kf-sky)', boxShadow: '0 0 10px var(--kf-sky)',
            }} />
            ROSTER OPEN. TWO SLOTS THIS QUARTER
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
