const { useState: useStateModal } = React;

const WAITLIST_WEBHOOK_URL = 'https://jd-n8n-cloud.app.n8n.cloud/webhook/waitlist-email';

function WaitlistModal({ open, onClose }) {
  const [step, setStep] = useStateModal('form');
  const [email, setEmail] = useStateModal('');
  const [loading, setLoading] = useStateModal(false);
  const [error, setError] = useStateModal('');

  if (!open) return null;

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await fetch(WAITLIST_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStep('done');
    } catch (e) {
      setError('Something went wrong. Try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setStep('form');
    setEmail('');
    setError('');
    setLoading(false);
    onClose();
  };

  return (
    <div onClick={handleClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(11,15,30,0.55)',
      backdropFilter: 'blur(4px)', zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
      animation: 'kfFadeIn 200ms ease both',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--kf-bg)', borderRadius: 16, padding: 48,
        maxWidth: 440, width: '100%', boxShadow: 'var(--kf-shadow-dark)',
        animation: 'kfFadeUp 280ms cubic-bezier(0.22, 1, 0.36, 1) both',
      }}>
        {step === 'form' ? (
          <>
            <div style={{
              fontFamily: 'var(--kf-font-mono)', fontSize: 11, color: 'var(--kf-fg-muted)',
              letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12,
            }}>Join Waitlist</div>
            <h3 style={{
              fontFamily: 'var(--kf-font-display)', fontWeight: 700, fontSize: 32,
              letterSpacing: '-0.015em', lineHeight: 1.1, margin: '0 0 12px 0',
              color: 'var(--kf-fg)',
            }}>You're early. That's a good sign.</h3>
            <p style={{
              fontFamily: 'var(--kf-font-body)', fontWeight: 300, fontSize: 15,
              lineHeight: 1.7, color: 'var(--kf-fg-2)', margin: '0 0 28px 0',
            }}>Drop your email. We'll reach out within 24 hours.</p>
            <input
              type="email" placeholder="you@yourcompany.com"
              value={email} onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              style={{
                width: '100%', boxSizing: 'border-box',
                fontFamily: 'var(--kf-font-body)', fontSize: 15,
                padding: '14px 16px', background: 'var(--kf-surface-2)',
                border: `1px solid ${error ? 'var(--kf-error)' : 'var(--kf-surface-3)'}`,
                borderRadius: 8, color: 'var(--kf-fg)', outline: 'none', marginBottom: error ? 8 : 20,
              }}
              onFocus={e => { e.target.style.borderColor = 'var(--kf-brand)'; e.target.style.background = 'var(--kf-bg)'; }}
              onBlur={e => { e.target.style.borderColor = error ? 'var(--kf-error)' : 'var(--kf-surface-3)'; e.target.style.background = 'var(--kf-surface-2)'; }}
            />
            {error && (
              <div style={{
                fontFamily: 'var(--kf-font-body)', fontSize: 13, color: 'var(--kf-error)',
                marginBottom: 20,
              }}>{error}</div>
            )}
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <SecondaryButton onClick={handleClose}>Cancel</SecondaryButton>
              <PrimaryButton onClick={handleSubmit} style={{ opacity: loading ? 0.7 : 1, pointerEvents: loading ? 'none' : 'auto' }}>
                {loading ? 'Sending...' : 'Join Waitlist'}
              </PrimaryButton>
            </div>
          </>
        ) : (
          <>
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: 'var(--kf-ice)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 24,
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L20 7" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{
              fontFamily: 'var(--kf-font-display)', fontWeight: 700, fontSize: 28,
              letterSpacing: '-0.015em', lineHeight: 1.1, margin: '0 0 12px 0',
              color: 'var(--kf-fg)',
            }}>You're on it.</h3>
            <p style={{
              fontFamily: 'var(--kf-font-body)', fontWeight: 300, fontSize: 15,
              lineHeight: 1.7, color: 'var(--kf-fg-2)', margin: '0 0 28px 0',
            }}>Check your inbox. We move fast.</p>
            <PrimaryButton onClick={handleClose}>Done</PrimaryButton>
          </>
        )}
      </div>
    </div>
  );
}

window.WaitlistModal = WaitlistModal;
