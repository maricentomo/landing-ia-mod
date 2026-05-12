// COMPARE TABLE — feature matrix

const ROWS = [
  { label: 'Profissionais',             vals: ['1',      'até 5',   'até 10'],  type: 'text' },
  { label: 'Categorias',                vals: ['até 3',  'até 6',   'até 10'],  type: 'text' },
  { label: 'Serviços cadastrados',      vals: ['até 12', 'até 25',  'até 50'],  type: 'text' },
  { label: 'Layout personalizado',      vals: [true,     true,      true],      type: 'bool' },
  { label: 'Fotos',                     vals: ['empresa\nou profissional', 'equipe\ncompleta', 'equipe\ncompleta'], type: 'text' },
  { label: 'Integração Google Agenda',  vals: [true,     true,      true],      type: 'bool' },
  { label: 'WhatsApp automático',       vals: ['confirm.\n+ lembrete', 'confirm.\n+ lembrete', 'confirm.\npós-pagamento'], type: 'text' },
  { label: 'Escolha de profissional',   vals: [false,    true,      true],      type: 'bool' },
  { label: 'Agenda por profissional',   vals: [false,    true,      true],      type: 'bool' },
  { label: 'Pagamento no agendamento',  vals: [false,    false,     true],      type: 'bool' },
];

const CellValue = ({ val, type, highlight }) => {
  if (type === 'bool') {
    return val ? (
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: '50%', background: 'var(--orange)', color: '#000', fontWeight: 800, fontSize: '14px' }}>✓</span>
    ) : (
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: '50%', background: 'rgba(242,238,229,0.06)', color: 'rgba(242,238,229,0.3)', fontWeight: 600, fontSize: '14px' }}>—</span>
    );
  }
  return (
    <span style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '13px',
      fontWeight: highlight ? 700 : 500,
      color: highlight ? 'var(--orange)' : 'rgba(242,238,229,0.85)',
      whiteSpace: 'pre-line',
      lineHeight: 1.35,
    }}>{val}</span>
  );
};

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
            minWidth: isMobile ? '480px' : 'auto',
          }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: '#000', borderBottom: '1px solid rgba(242,238,229,0.1)' }}>
              <div style={{ padding: '20px 24px', fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(242,238,229,0.5)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Recurso</div>
              {['Essencial', 'Equipe', 'Completo'].map((n, i) => (
                <div key={n} style={{
                  padding: '20px 16px', textAlign: 'center',
                  fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800,
                  fontSize: isMobile ? '14px' : '16px', letterSpacing: '-0.01em',
                  color: i === 1 ? 'var(--orange)' : 'var(--offwhite)',
                  textTransform: 'uppercase',
                  borderLeft: '1px solid rgba(242,238,229,0.06)',
                  background: i === 1 ? 'rgba(253,92,2,0.06)' : 'transparent',
                }}>{n}</div>
              ))}
            </div>

            {/* Rows */}
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
                <div style={{ padding: '16px 24px', fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? '13px' : '15px', color: 'rgba(242,238,229,0.85)', fontWeight: 500, display: 'flex', alignItems: 'center' }}>{row.label}</div>
                {row.vals.map((v, j) => (
                  <div key={j} style={{
                    padding: '16px 12px', textAlign: 'center',
                    borderLeft: '1px solid rgba(242,238,229,0.04)',
                    background: j === 1 ? 'rgba(253,92,2,0.04)' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <CellValue val={v} type={row.type} highlight={j === 1 && row.type === 'text'} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Adicionais */}
        <div className="reveal" style={{ marginTop: '48px' }}>
          <div style={{
            background: 'var(--dark-2)', borderRadius: '20px',
            border: '1px solid rgba(242,238,229,0.08)',
            padding: '28px 32px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <Asterisk size={24} color="orange" spin />
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '20px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                Adicionais disponíveis
              </div>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '16px',
            }}>
              {[
                { label: 'Profissional extra', price: 'R$ 97 implantação + R$ 29/mês' },
                { label: 'Pacote extra de categorias e serviços', price: 'R$ 97 por pacote (sem mensalidade)' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  gap: '16px', padding: '16px 20px',
                  background: 'rgba(242,238,229,0.04)', borderRadius: '12px',
                  border: '1px solid rgba(242,238,229,0.08)',
                  flexWrap: 'wrap',
                }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', color: 'rgba(242,238,229,0.85)', fontWeight: 500 }}>{item.label}</span>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '15px', fontWeight: 800, color: 'var(--orange)' }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.CompareTable = CompareTable;
