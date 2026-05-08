const { useState: useStateNav, useEffect: useEffectNav } = React;

function Nav({ onBookCall, ctaLabel = 'Book a call', navStyle = 'minimal' }) {
  const [scrolled, setScrolled] = useStateNav(false);
  useEffectNav(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { l: 'How it works', href: '#how-it-works' },
    { l: 'What you get', href: '#what-you-get' },
    { l: 'Who it’s for', href: '#fit' },
  ];
  const [active, setActive] = useStateNav('How it works');

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      padding: scrolled ? '12px 48px' : '20px 48px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(244, 243, 239, 0.82)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid var(--kf-surface-3)' : '1px solid transparent',
      transition: 'padding 240ms cubic-bezier(0.22, 1, 0.36, 1), border-color 240ms ease',
    }}>
      <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
        <img src="assets/keen-mark.png" alt="KEEN" style={{ height: 48, width: 48, display: 'block' }} />
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        {links.map(({ l, href }) => (
          <a key={l} href={href}
             onClick={() => setActive(l)}
             style={{
               fontFamily: 'var(--kf-font-body)', fontSize: 14,
               color: active === l ? 'var(--kf-fg)' : 'var(--kf-fg-2)',
               fontWeight: active === l ? 500 : 400,
               textDecoration: 'none', cursor: 'pointer',
               transition: 'color 200ms ease',
             }}
             onMouseEnter={e => e.currentTarget.style.color = 'var(--kf-brand)'}
             onMouseLeave={e => e.currentTarget.style.color = active === l ? 'var(--kf-fg)' : 'var(--kf-fg-2)'}
          >
            {l}
          </a>
        ))}
        <PrimaryButton size="sm" onClick={onBookCall}>{ctaLabel}</PrimaryButton>
      </div>
    </nav>
  );
}

window.Nav = Nav;
