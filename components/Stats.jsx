function Stats() {
  const items = [
    { num: '< 10 min', label: 'Response window' },
    { num: '7 days', label: 'From call to running' },
    { num: '0', label: 'New tools to learn' },
  ];
  return (
    <section style={{ background: 'var(--kf-bg)', padding: '24px 48px 96px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{
          background: 'var(--kf-surface-2)',
          border: '1px solid var(--kf-surface-3)',
          borderRadius: 16, padding: '56px 32px',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        }}>
          {items.map((s, i) => (
            <div key={s.label} style={{
              textAlign: 'center', padding: '0 24px',
              borderRight: i < 2 ? '1px solid var(--kf-surface-3)' : 'none',
            }}>
              <div className="kf-gradient-text" style={{
                fontFamily: 'var(--kf-font-display)', fontWeight: 800, fontSize: 'clamp(40px, 5vw, 64px)',
                letterSpacing: '-0.025em', lineHeight: 1,
              }}>{s.num}</div>
              <div style={{
                fontFamily: 'var(--kf-font-mono)', fontSize: 12, color: 'var(--kf-fg-muted)',
                letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 18,
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Stats = Stats;
