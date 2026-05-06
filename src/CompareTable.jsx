// COMPARE TABLE — feature matrix

const ROWS = [
  ['1 profissional', true, true, true],
  ['Até 5 profissionais', false, true, true],
  ['Até 15 serviços', true, true, true],
  ['Até 40 serviços', false, true, true],
  ['Layout personalizado', true, true, true],
  ['Fotos da empresa/profissional', true, true, true],
  ['Google Agenda', true, true, true],
  ['WhatsApp automático', true, true, true],
  ['Lembrete no dia', true, true, true],
  ['Escolha de profissional', false, true, true],
  ['Agenda separada por profissional', false, true, true],
  ['Pagamento no agendamento', false, false, true],
];

const CompareTable = () => {
  const isMobile = useIsMobile();
  return (
    <section style={{
      background: 'var(--black)', color: 'var(--offwhite)',
      padding: isMobile ? '80px 0' : '140px 0',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 64px' }}>
          <Eyebrow>Compare lado a lado</Eyebrow>
          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 0.95,
            letterSpacing: '-0.03em', textTransform: 'uppercase',
            color: 'var(--offwhite)', margin: '24px 0',
          }}>
            O que cada <span style={{ color: 'var(--orange)' }}>plano</span> inclui.
          </h2>
        </div>

        <div className="reveal" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <div style={{
            background: 'var(--dark-2)', borderRadius: '24px',
            overflow: 'hidden', border: '1px solid rgba(242,238,229,0.08)',
            minWidth: isMobile ? '540px' : 'auto',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: '#000', borderBottom: '1px solid rgba(242,238,229,0.1)' }}>
              <div style={{ padding: '20px 24px', fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(242,238,229,0.5)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Recurso</div>
              {['Essencial', 'Equipe', 'Completo'].map((n, i) => (
                <div key={n} style={{ padding: '20px 24px', textAlign: 'center', fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '16px', letterSpacing: '-0.01em', color: i === 1 ? 'var(--orange)' : 'var(--offwhite)', textTransform: 'uppercase', borderLeft: '1px solid rgba(242,238,229,0.06)' }}>{n}</div>
              ))}
            </div>
            {ROWS.map(([label, ...vals], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', borderBottom: i === ROWS.length - 1 ? 'none' : '1px solid rgba(242,238,229,0.05)', transition: 'background 200ms ease' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(253,92,2,0.05)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ padding: '18px 24px', fontFamily: "'DM Sans', sans-serif", fontSize: '15px', color: 'rgba(242,238,229,0.85)', fontWeight: 500 }}>{label}</div>
                {vals.map((v, j) => (
                  <div key={j} style={{ padding: '18px 24px', textAlign: 'center', borderLeft: '1px solid rgba(242,238,229,0.04)', background: j === 1 ? 'rgba(253,92,2,0.04)' : 'transparent' }}>
                    {v ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: '50%', background: 'var(--orange)', color: '#000', fontWeight: 800, fontSize: '14px' }}>✓</span>
                    ) : (
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: '50%', background: 'rgba(242,238,229,0.06)', color: 'rgba(242,238,229,0.3)', fontWeight: 600, fontSize: '14px' }}>—</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Renewal table */}
        <div className="reveal" style={{ marginTop: '64px', maxWidth: '720px', margin: '64px auto 0' }}>
          <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '24px', letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '20px', textAlign: 'center' }}>
            Renovação <span style={{ color: 'var(--orange)' }}>a partir do 2º ano</span>
          </div>
          <div style={{ background: 'var(--dark-2)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(242,238,229,0.08)' }}>
            {[['Essencial', '12x de R$ 107', 'R$ 1.068'], ['Equipe', '12x de R$ 150', 'R$ 1.497'], ['Completo', '12x de R$ 200', 'R$ 1.997']].map(([p, parc, vista], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1.2fr 1fr', padding: '20px 24px', borderBottom: i === 2 ? 'none' : '1px solid rgba(242,238,229,0.05)', alignItems: 'center', gap: '8px' }}>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '18px', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>{p}</div>
                {!isMobile && <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', color: 'rgba(242,238,229,0.85)' }}>{parc}</div>}
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'var(--orange)', fontWeight: 700, textAlign: isMobile ? 'left' : 'right' }}>à vista {vista}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

window.CompareTable = CompareTable;
