const { useState, useEffect } = React;

// ===================== Primitives =====================
function PrimaryButton({ children, onClick, size = 'md', style = {} }) {
  const pad = size === 'sm' ? '8px 18px' : size === 'lg' ? '16px 36px' : '14px 32px';
  const fs = size === 'sm' ? 13 : size === 'lg' ? 16 : 15;
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--kf-font-display)', fontWeight: 600, fontSize: fs, letterSpacing: '0.02em',
        color: 'var(--kf-fg-on-dark)', background: 'var(--kf-gradient)', border: 'none',
        borderRadius: 9999, padding: pad, cursor: 'pointer',
        transition: 'all 200ms cubic-bezier(0.22, 1, 0.36, 1)',
        transform: hover ? 'scale(1.02)' : 'scale(1)',
        boxShadow: hover ? 'var(--kf-shadow-blue)' : 'none',
        filter: hover ? 'brightness(1.05)' : 'none',
        ...style
      }}
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, onClick, color = 'brand', style = {} }) {
  const [hover, setHover] = useState(false);
  const c = color === 'sky' ? 'var(--kf-sky)' : 'var(--kf-brand)';
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--kf-font-display)', fontWeight: 600, fontSize: 15, letterSpacing: '0.02em',
        color: c, background: hover && color === 'brand' ? 'var(--kf-ice)' : 'transparent',
        border: `1.5px solid ${c}`, borderRadius: 9999, padding: '12.5px 32px',
        cursor: 'pointer', transition: 'background 200ms ease', ...style
      }}
    >
      {children}
    </button>
  );
}

function WhitePillButton({ children, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--kf-font-display)', fontWeight: 600, fontSize: 16, letterSpacing: '0.02em',
        color: 'var(--kf-royal)', background: 'var(--kf-bg)', border: 'none',
        borderRadius: 9999, padding: '16px 36px', cursor: 'pointer',
        transition: 'transform 200ms ease',
        transform: hover ? 'scale(1.02)' : 'scale(1)',
      }}
    >
      {children}
    </button>
  );
}

window.PrimaryButton = PrimaryButton;
window.SecondaryButton = SecondaryButton;
window.WhitePillButton = WhitePillButton;
