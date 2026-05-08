function WhatYouGet() {
  const cards = [
    {
      label: 'Speed',
      title: 'Replies that land in the window.',
      body: 'The follow-up that should have happened in ten minutes — happens in ten minutes. Every time. Without anyone watching the clock.',
    },
    {
      label: 'Polish',
      title: 'Every touchpoint, on brand.',
      body: 'No rushed messages. No copy-paste. The standard set in your best moments becomes the standard for every moment.',
    },
    {
      label: 'Headspace',
      title: 'Work that stops asking for attention.',
      body: 'The reminders, the chasers, the “did I send that?” — gone. Your team thinks about clients again, not about following up with them.',
    },
  ];

  return (
    <section id="what-you-get" style={{
      background: 'var(--kf-navy)', padding: '140px 48px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px', pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 72, gap: 48, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 720 }}>
            <div style={{
              fontFamily: 'var(--kf-font-mono)', fontSize: 12, color: 'var(--kf-sky)',
              letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 20,
            }}>— What you get</div>
            <h2 style={{
              fontFamily: 'var(--kf-font-display)', fontWeight: 800, fontSize: 'clamp(40px, 5vw, 64px)',
              lineHeight: 1.02, letterSpacing: '-0.025em', margin: 0,
              color: 'var(--kf-fg-on-dark)',
            }}>
              Outcomes.<br />
              <span className="kf-gradient-text">Not mechanics.</span>
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--kf-font-body)', fontWeight: 300, fontSize: 16,
            lineHeight: 1.75, color: 'var(--kf-fg-on-dark-2)', margin: 0, maxWidth: 360,
          }}>
            You don't need to know what's running. You need to know it's running. We measure ourselves on what your clients feel, not on dashboards.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {cards.map(c => <DarkFeatureCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
}

function DarkFeatureCard({ label, title, body }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? '#131A2B' : 'var(--kf-navy-lift)',
        border: `1px solid ${hover ? 'var(--kf-brand)' : 'var(--kf-navy-edge)'}`,
        borderRadius: 12, padding: 36,
        transition: 'border-color 200ms ease, transform 200ms ease, background 200ms ease',
        transform: hover ? 'translateY(-2px)' : 'none',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{
        fontFamily: 'var(--kf-font-mono)', fontSize: 11, color: 'var(--kf-sky)',
        letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 24,
      }}>— {label}</div>
      <h3 style={{
        fontFamily: 'var(--kf-font-display)', fontWeight: 700, fontSize: 24,
        lineHeight: 1.2, letterSpacing: '-0.01em', color: 'var(--kf-fg-on-dark)',
        margin: '0 0 16px 0',
      }}>{title}</h3>
      <p style={{
        fontFamily: 'var(--kf-font-body)', fontWeight: 300, fontSize: 15,
        lineHeight: 1.75, color: 'var(--kf-fg-on-dark-2)', margin: 0,
      }}>{body}</p>
    </div>
  );
}

window.WhatYouGet = WhatYouGet;
