// COMPARE TABLE — feature matrix with exact values from spec

const ROWS = [
  {
    label: 'Profissionais',
    vals: ['1 profissional', 'até 5 profissionais', 'até 10 profissionais'],
    type: 'text',
  },
  {
    label: 'Serviços',
    vals: ['até 15 serviços', 'até 40 serviços', 'até 40 serviços'],
    type: 'text',
  },
  {
    label: 'Layout personalizado',
    vals: [true, true, true],
    type: 'bool',
  },
  {
    label: 'Fotos (empresa / equipe)',
    vals: ['empresa ou profissional', 'equipe completa', 'equipe completa'],
    type: 'text',
  },
  {
    label: 'Integração com Google Agenda',
    vals: [true, true, true],
    type: 'bool',
  },
  {
    label: 'WhatsApp automático',
    vals: ['confirmação + lembrete', 'confirmação + lembrete', 'confirmação pós-pagamento + lembrete'],
    type: 'text',
  },
  {
    label: 'Escolha de profissional',
    vals: [false, true, true],
    type: 'bool',
  },
  {
    label: 'Agenda separada por profissional',
    vals: [false, true, true],
    type: 'bool',
  },
  {
    label: 'Pagamento no agendamento',
    vals: [false, false, true],
    type: 'bool',
  },
];

const Check = () => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 28, height: 28, borderRadius: '50%',
    background: 'var(--orange)', color: '#000', fontWeight: 800, fontSize: '14px',
  }}>✓</span>
);

const Dash = () => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 28, height: 28, borderRadius: '50%',
    background: 'rgba(242,238,229,0.06)', color: 'rgba(242,238,229,0.3)', fontWeight: 600, fontSize: '14px',
  }}>—</span>
);

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
            minWidth: isMobile ? '520px' : 'auto',
          }}>
            {/* Header row */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: '#000', borderBottom: '1px solid rgba(242,238,229,0.1)' }}>
              <div style={{ padding: '20px 24px', fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(242,238,229,0.5)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Recurso
              </div>
              {['Essencial', 'Equipe', 'Completo'].map((n, i) => (
                <div key={n} style={{
                  padding: '20px 12px', textAlign: 'center',
                  fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800,
                  fontSize: isMobile ? '13px' : '16px',
                  letterSpacing: '-0.01em', textTransform: 'uppercase',
                  color: i === 1 ? 'var(--orange)' : 'var(--offwhite)',
                  borderLeft: '1px solid rgba(242,238,229,0.06)',
                  background: i === 1 ? 'rgba(253,92,2,0.06)' : 'transparent',
                }}>{n}</div>
              ))}
            </div>

            {/* Data rows */}
            {ROWS.map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
                  borderBottom: i === ROWS.length - 1 ? 'none' : '1px solid rgba(242,238,229,0.05)',
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(253,92,2,0.05)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ padding: '16px 24px', fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? '13px' : '15px', color: 'rgba(242,238,229,0.85)', fontWeight: 500, display: 'flex', alignItems: 'center' }}>
                  {row.label}
                </div>
                {row.vals.map((v, j) => (
                  <div key={j} style={{
                    padding: '16px 8px', textAlign: 'center',
                    borderLeft: '1px solid rgba(242,238,229,0.04)',
                    background: j === 1 ? 'rgba(253,92,2,0.04)' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {row.type === 'bool' ? (
                      v ? <Check /> : <Dash />
                    ) : (
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: isMobile ? '11px' : '13px',
                        fontWeight: j === 1 ? 700 : 400,
                        color: j === 1 ? 'var(--orange)' : 'rgba(242,238,229,0.8)',
                        textAlign: 'center',
                        lineHeight: 1.35,
                      }}>{v}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

window.CompareTable = CompareTable;
