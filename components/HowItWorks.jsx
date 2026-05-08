function HowItWorks() {
  const steps = [
    {
      n: '01',
      label: 'Diagnosis',
      t: 'We find the leak.',
      b: 'In a single conversation, we identify where your pipeline is losing momentum. the gap between a real moment and the response it deserves.',
    },
    {
      n: '02',
      label: 'Build',
      t: 'We close it. Permanently.',
      b: 'No tools your team has to learn. No process to maintain. The infrastructure goes in behind the scenes. quiet, integrated, and tested before it touches a client.',
    },
    {
      n: '03',
      label: 'Handover',
      t: 'It runs. You notice less.',
      b: 'You stop thinking about a thing you used to think about. The follow-through happens. The impression is right. The work moves.',
    },
  ];

  return (
    <section id="how-it-works" style={{
      background: 'var(--kf-bg)', padding: '140px 48px 120px',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end', marginBottom: 72 }}>
          <div>
            <div style={{
              fontFamily: 'var(--kf-font-mono)', fontSize: 12, color: 'var(--kf-brand)',
              letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 20,
            }}>How it works</div>
            <h2 style={{
              fontFamily: 'var(--kf-font-display)', fontWeight: 800, fontSize: 'clamp(40px, 5vw, 64px)',
              lineHeight: 1.02, letterSpacing: '-0.025em', margin: 0,
              color: 'var(--kf-fg)',
            }}>
              Three stages.<br />
              <span className="kf-gradient-text">One outcome.</span>
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--kf-font-body)', fontWeight: 300, fontSize: 18,
            lineHeight: 1.75, color: 'var(--kf-fg-2)', margin: 0,
            maxWidth: 480, justifySelf: 'end',
          }}>
            We don't sell a platform. We don't sell a workshop. We come in, find the highest-leverage point in your operation, and build the thing that should already exist there.
          </p>
        </div>

        <div style={{ height: 4, background: 'var(--kf-gradient)', borderRadius: 2, margin: '0 0 64px' }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              position: 'relative',
              padding: '8px 0',
            }}>
              <div style={{
                display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24,
              }}>
                <div style={{
                  fontFamily: 'var(--kf-font-display)', fontWeight: 800, fontSize: 96,
                  color: 'var(--kf-surface-3)', letterSpacing: '-0.02em', lineHeight: 1,
                }}>{s.n}</div>
                <div style={{
                  fontFamily: 'var(--kf-font-mono)', fontSize: 11, color: 'var(--kf-brand)',
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                }}>{s.label}</div>
              </div>
              <h3 style={{
                fontFamily: 'var(--kf-font-display)', fontWeight: 700, fontSize: 26,
                lineHeight: 1.2, letterSpacing: '-0.01em', color: 'var(--kf-fg)',
                margin: '0 0 14px 0',
              }}>{s.t}</h3>
              <p style={{
                fontFamily: 'var(--kf-font-body)', fontWeight: 300, fontSize: 16,
                lineHeight: 1.75, color: 'var(--kf-fg-2)', margin: 0, maxWidth: 340,
              }}>{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.HowItWorks = HowItWorks;
