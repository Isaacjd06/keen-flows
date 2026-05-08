// Founder note + "who it's for". quiet, premium, restrained
function FounderNote() {
  return (
    <section id="fit" style={{
      background: 'var(--kf-bg)', padding: '40px 48px 140px',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'stretch',
        }}>
          {/* Founder note */}
          <div style={{
            background: 'var(--kf-surface-2)',
            border: '1px solid var(--kf-surface-3)',
            borderRadius: 16, padding: 48,
            position: 'relative',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              fontFamily: 'var(--kf-font-mono)', fontSize: 12, color: 'var(--kf-brand)',
              letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 28,
            }}>A note from the founder</div>
            <p style={{
              fontFamily: 'var(--kf-font-display)', fontWeight: 600, fontSize: 22,
              lineHeight: 1.4, letterSpacing: '-0.005em', color: 'var(--kf-fg)',
              margin: '0 0 24px 0',
            }}>
              "When you work with KEEN, you work with the person who builds it. No account managers. No handoffs. The conversation and the code happen in the same room."
            </p>
            <p style={{
              fontFamily: 'var(--kf-font-body)', fontWeight: 300, fontSize: 16,
              lineHeight: 1.75, color: 'var(--kf-fg-2)', margin: 0,
            }}>
              That's the model. and the point. KEEN runs lean on purpose. A small client roster means each engagement gets the attention it deserves and the speed it requires.
            </p>
            <div style={{
              marginTop: 'auto', paddingTop: 28, borderTop: '1px solid var(--kf-surface-3)',
              display: 'flex', alignItems: 'center', gap: 16,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'var(--kf-gradient)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--kf-font-display)', fontWeight: 700, fontSize: 16,
                color: 'var(--kf-bg)', letterSpacing: '0.04em',
              }}>K</div>
              <div>
                <div style={{
                  fontFamily: 'var(--kf-font-display)', fontWeight: 600, fontSize: 14,
                  color: 'var(--kf-fg)',
                }}>The operator</div>
                <div style={{
                  fontFamily: 'var(--kf-font-mono)', fontSize: 11, color: 'var(--kf-fg-muted)',
                  letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 2,
                }}>Founder, KEEN</div>
              </div>
            </div>
          </div>

          {/* Who it's for */}
          <div>
            <div style={{
              fontFamily: 'var(--kf-font-mono)', fontSize: 12, color: 'var(--kf-brand)',
              letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 20,
            }}>Who it's for</div>
            <h2 style={{
              fontFamily: 'var(--kf-font-display)', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 48px)',
              lineHeight: 1.05, letterSpacing: '-0.02em', margin: '0 0 32px 0',
              color: 'var(--kf-fg)',
            }}>
              Selective by design.
            </h2>
            <p style={{
              fontFamily: 'var(--kf-font-body)', fontWeight: 300, fontSize: 17,
              lineHeight: 1.75, color: 'var(--kf-fg-2)', margin: '0 0 32px 0',
            }}>
              KEEN is not the right fit for every business. It's the right fit for businesses where each client carries weight, where impressions are part of the offer, and where the team is already strong but a few moments are slipping through.
            </p>

            <FitList
              items={[
                { fit: true, t: 'High-ticket service businesses', b: 'Where each relationship matters and follow-through is the offer.' },
                { fit: true, t: 'Active pipelines, real conversations', b: 'You\'re already winning work. The leak is in the spaces between.' },
                { fit: true, t: 'Operators who want a partner, not a vendor', b: 'A direct line to the person who builds. not a support queue.' },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FitList({ items }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--kf-surface-3)' }}>
      {items.map((it, i) => (
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: '40px 1fr', gap: 20,
          padding: '20px 0', borderBottom: '1px solid var(--kf-surface-3)',
          alignItems: 'flex-start',
        }}>
          <div style={{
            width: 24, height: 24, borderRadius: '50%',
            background: it.fit ? 'var(--kf-gradient)' : 'transparent',
            border: it.fit ? 'none' : '1.5px solid var(--kf-fg-muted)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginTop: 2,
          }}>
            {it.fit ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L20 7" stroke="#F4F3EF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18M18 6L6 18" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            )}
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--kf-font-display)', fontWeight: 600, fontSize: 17,
              color: it.fit ? 'var(--kf-fg)' : 'var(--kf-fg-2)',
              letterSpacing: '-0.005em', marginBottom: 4,
            }}>{it.t}</div>
            <div style={{
              fontFamily: 'var(--kf-font-body)', fontWeight: 300, fontSize: 14,
              lineHeight: 1.6, color: 'var(--kf-fg-2)',
            }}>{it.b}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

window.FounderNote = FounderNote;
