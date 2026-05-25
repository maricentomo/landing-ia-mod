// TYPEBOT SECTION — form vs Typebot side-by-side comparison

const TypebotSection = () => {
  const isMobile = useIsMobile();
  const [form, setForm] = React.useState({ name: '', whatsapp: '', message: '' });
  const [sent, setSent] = React.useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Olá! Me chamo *${form.name}*. Meu WhatsApp: ${form.whatsapp}.\n\n${form.message}`;
    window.open(`https://wa.me/5511940723912?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '10px',
    border: '1.5px solid rgba(242,238,229,0.15)',
    background: 'rgba(242,238,229,0.06)',
    color: 'var(--offwhite)',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 200ms ease',
  };

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '11px', fontWeight: 700,
    color: 'rgba(242,238,229,0.5)',
    letterSpacing: '0.12em', textTransform: 'uppercase',
    marginBottom: '6px', display: 'block',
  };

  return (
    <section id="comparacao" style={{
      background: 'var(--black)',
      color: 'var(--offwhite)',
      padding: isMobile ? '80px 0' : '140px 0',
      borderTop: '1px solid rgba(242,238,229,0.08)',
    }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '80px' }}>
          <Eyebrow>Teste as duas opções</Eyebrow>
          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 72px)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: 'var(--offwhite)',
            margin: '24px auto 16px',
            maxWidth: '800px',
          }}>
            Formulário <span style={{ color: 'var(--orange)' }}>vs</span> Typebot
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '17px', lineHeight: 1.6,
            color: 'rgba(242,238,229,0.6)',
            maxWidth: '520px', margin: '0 auto',
          }}>
            Os dois coletam as mesmas informações — você escolhe qual experiência prefere oferecer.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '24px',
          alignItems: 'start',
        }}>
          {/* ── LEFT: Formulário ── */}
          <div className="reveal" style={{
            background: 'var(--dark-2)',
            border: '1px solid rgba(242,238,229,0.1)',
            borderRadius: '24px',
            padding: '32px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(242,238,229,0.08)',
                border: '1px solid rgba(242,238,229,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--offwhite)" opacity="0.7">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '20px', letterSpacing: '-0.02em' }}>
                  Formulário
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(242,238,229,0.45)' }}>
                  Envia para WhatsApp
                </div>
              </div>
            </div>

            {sent ? (
              <div style={{
                textAlign: 'center', padding: '48px 24px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
              }}>
                <Asterisk size={64} color="orange" style={{ animation: 'spin-slow 6s linear infinite' }} />
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '22px' }}>
                  Mensagem enviada!
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'rgba(242,238,229,0.6)' }}>
                  Você foi redirecionado para o WhatsApp.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{
                    background: 'transparent', border: '1px solid rgba(242,238,229,0.2)',
                    color: 'rgba(242,238,229,0.6)', borderRadius: '999px',
                    padding: '8px 20px', cursor: 'pointer',
                    fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
                  }}
                >
                  Preencher novamente
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={labelStyle}>Nome</label>
                  <input
                    type="text" required placeholder="Seu nome"
                    value={form.name} onChange={set('name')}
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--orange)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(242,238,229,0.15)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>WhatsApp</label>
                  <input
                    type="tel" required placeholder="(11) 99999-9999"
                    value={form.whatsapp} onChange={set('whatsapp')}
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--orange)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(242,238,229,0.15)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Mensagem</label>
                  <textarea
                    required placeholder="Fale sobre o seu negócio e o que precisa..."
                    rows={4}
                    value={form.message} onChange={set('message')}
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--orange)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(242,238,229,0.15)'}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: '14px 28px',
                    borderRadius: '999px',
                    border: '2px solid var(--orange)',
                    background: 'var(--orange)', color: '#000',
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 800, fontSize: '14px',
                    letterSpacing: '0.04em', textTransform: 'uppercase',
                    cursor: 'pointer', transition: 'all 200ms ease-out',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '6px 6px 0 rgba(242,238,229,0.2)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  Enviar pelo WhatsApp →
                </button>
              </form>
            )}
          </div>

          {/* ── RIGHT: Typebot ── */}
          <div className="reveal" style={{
            background: 'var(--dark-2)',
            border: '1px solid rgba(242,238,229,0.1)',
            borderRadius: '24px',
            padding: '32px',
            overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(253,92,2,0.15)',
                border: '1px solid rgba(253,92,2,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Asterisk size={18} color="orange" style={{ animation: 'spin-slow 8s linear infinite' }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '20px', letterSpacing: '-0.02em' }}>
                  Chat Interativo
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(242,238,229,0.45)' }}>
                  Powered by Typebot
                </div>
              </div>
            </div>

            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(242,238,229,0.1)',
              minHeight: '520px',
            }}>
              <iframe
                src="https://bot-typebot-viewer.k474gt.easypanel.host/iamod-site"
                style={{ border: 'none', width: '100%', height: '520px', display: 'block' }}
                title="Typebot iamod-site"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.TypebotSection = TypebotSection;
