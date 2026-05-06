// FINAL CTA + FOOTER

const FinalCta = () => {
  return (
    <section style={{
      background: 'var(--orange)', color: '#000',
      padding: '140px 0 120px',
      position: 'relative', overflow: 'hidden',
      borderTop: '2px solid #000', borderBottom: '2px solid #000'
    }}>
      <Asterisk size={500} color="black" style={{ position: 'absolute', top: '-150px', left: '-150px', opacity: 0.06, animation: 'spin-slow 60s linear infinite' }} />
      <Asterisk size={400} color="black" style={{ position: 'absolute', bottom: '-150px', right: '-100px', opacity: 0.08, animation: 'spin-rev 45s linear infinite' }} />

      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <div className="reveal" style={{ display: 'inline-block', marginBottom: '32px' }}>
          <img src="assets/ativo-7-fundo-laranja.png" alt="" style={{ width: '180px', animation: 'float-y 4s ease-in-out infinite' }} />
        </div>

        <h2 className="reveal" style={{
          fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800,
          fontSize: 'clamp(40px, 7.5vw, 128px)', lineHeight: 0.88,
          letterSpacing: '-0.04em', textTransform: 'uppercase',
          color: '#000', maxWidth: '1100px', margin: '0 auto 24px'
        }}>
          Pronto pra <span style={{ fontStyle: 'italic', textDecoration: 'underline', textDecorationThickness: '8px', textUnderlineOffset: '12px', lineHeight: '1' }}>organizar</span> sua agenda?
        </h2>

        <p className="reveal" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '20px', lineHeight: 1.5, color: 'rgba(0,0,0,0.78)', maxWidth: '720px', margin: '0 auto 16px' }}>
          Seu cliente agenda sozinho. Sua equipe recebe os avisos. E tudo fica mais organizado.
        </p>

        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginTop: '24px', marginBottom: '40px', fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '20px', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Asterisk size={14} color="black" /> Menos bagunça.</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Asterisk size={14} color="black" /> Mais praticidade.</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Asterisk size={14} color="black" /> Mais profissional.</span>
        </div>

        <div className="reveal">
          <Btn variant="dark" size="lg" onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}>
            Quero minha agenda inteligente
          </Btn>
        </div>
      </div>
    </section>);
};

const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <footer style={{ background: '#000', color: 'var(--offwhite)', padding: '80px 0 40px', position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr',
          gap: isMobile ? '40px' : '48px',
          marginBottom: '48px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <Asterisk size={48} color="orange" spin />
              <div>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '28px', letterSpacing: '-0.02em' }}>
                  ia<span style={{ color: 'var(--orange)' }}>*</span>MOD
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(242,238,229,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Estúdio de design e presença digital</div>
              </div>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', color: 'rgba(242,238,229,0.6)', lineHeight: 1.6, maxWidth: '420px' }}>
              Transformando ideias soltas em negócios com forma, clareza e presença.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'var(--orange)', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>Agenda</div>
            {[['Como funciona', '#como-funciona'], ['Demonstração', '#demo'], ['Planos', '#planos'], ['FAQ', '#faq']].map(([l, h]) =>
              <a key={l} href={h} style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'rgba(242,238,229,0.7)', padding: '6px 0', transition: 'color 200ms ease' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(242,238,229,0.7)'}>{l}</a>
            )}
          </div>

          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'var(--orange)', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>Contato</div>
            <a href="https://wa.me/5511933663007" style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'rgba(242,238,229,0.7)', padding: '6px 0' }}>WhatsApp</a>
            <a href="https://instagram.com/iamod.digital" style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'rgba(242,238,229,0.7)', padding: '6px 0' }}>Instagram</a>
            <a href="mailto:contato@iamod.com.br" style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'rgba(242,238,229,0.7)', padding: '6px 0' }}>contato@iamod.com.br</a>
          </div>
        </div>

        <div style={{ paddingTop: '32px', borderTop: '1px solid rgba(242,238,229,0.08)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(242,238,229,0.4)' }}>
          <div>© 2026 IA MOD · Todos os direitos reservados</div>
          <div>Feito com <span style={{ color: 'var(--orange)' }}>*</span> em São Paulo</div>
        </div>
      </div>
    </footer>
  );
};

window.FinalCta = FinalCta;
window.Footer = Footer;
