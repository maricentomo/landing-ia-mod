// PRICING — 3 plans with monthly/annual toggle

const PLANS = [
  {
    id: 'essencial',
    name: 'Essencial',
    target: 'Para negócios com poucos serviços e um fluxo de agendamento mais direto.',
    mensal: { price: 97, implFull: 397, implDisc: 197 },
    anual:  { price: 970, implFull: 397, economy: 591 },
    cta: 'Quero o Essencial',
    features: [
      '1 profissional cadastrado',
      'Até 3 categorias',
      'Até 12 serviços cadastrados',
      'Fluxo de agendamento personalizado',
      'Layout com a identidade visual do negócio',
      'Coleta de dados do cliente',
      'Encaminhamento para WhatsApp ou agenda',
    ],
  },
  {
    id: 'equipe',
    name: 'Equipe',
    target: 'Para negócios com mais serviços, mais categorias ou mais de um profissional.',
    featured: true,
    badge: 'Mais escolhido',
    mensal: { price: 147, implFull: 497, implDisc: 297 },
    anual:  { price: 1470, implFull: 497, economy: 791 },
    cta: 'Quero o Equipe',
    features: [
      '5 profissionais cadastrados',
      'Até 6 categorias',
      'Até 25 serviços cadastrados',
      'Fluxo de agendamento personalizado',
      'Organização por categoria, serviço ou profissional',
      'Layout com a identidade visual do negócio',
      'Coleta de dados do cliente',
      'Encaminhamento para WhatsApp ou agenda',
    ],
  },
  {
    id: 'completo',
    name: 'Completo',
    target: 'Para negócios com muitos serviços, várias categorias ou uma estrutura de atendimento mais detalhada.',
    mensal: { price: 247, implFull: 697, implDisc: 497 },
    anual:  { price: 2470, implFull: 697, economy: 1191 },
    cta: 'Quero o Completo',
    features: [
      '10 profissionais cadastrados',
      'Até 10 categorias',
      'Até 50 serviços cadastrados',
      'Fluxo de agendamento personalizado',
      'Organização por categoria, serviço e profissional',
      'Layout com a identidade visual do negócio',
      'Coleta de dados específicos conforme o atendimento',
      'Encaminhamento para WhatsApp ou agenda',
    ],
  },
];

const fmtBRL = (n) => n.toLocaleString('pt-BR');

const BillingToggle = ({ billing, setBilling }) => (
  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '52px' }}>
    <div style={{
      display: 'inline-flex', background: '#000', borderRadius: '999px',
      padding: '4px', gap: '4px', border: '2px solid #000',
    }}>
      {['mensal', 'anual'].map(opt => (
        <button
          key={opt}
          onClick={() => setBilling(opt)}
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '10px 24px',
            borderRadius: '999px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: '14px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            transition: 'all 200ms ease',
            background: billing === opt ? 'var(--orange)' : 'transparent',
            color: billing === opt ? '#000' : 'rgba(242,238,229,0.55)',
          }}
        >
          {opt === 'mensal' ? 'Mensal' : 'Anual'}
          {opt === 'anual' && (
            <span style={{
              background: billing === 'anual' ? '#000' : 'var(--orange)',
              color: billing === 'anual' ? 'var(--orange)' : '#000',
              fontSize: '10px',
              padding: '2px 8px',
              borderRadius: '999px',
              fontWeight: 800,
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
            }}>IMPL. GRÁTIS</span>
          )}
        </button>
      ))}
    </div>
  </div>
);

const Pricing = () => {
  const isMobile = useIsMobile();
  const [billing, setBilling] = React.useState('mensal');

  return (
    <section id="planos" style={{
      background: 'var(--offwhite)', color: '#000',
      padding: isMobile ? '80px 0' : '140px 0',
      position: 'relative', overflow: 'hidden',
    }}>
      <Asterisk size={500} color="orange" style={{
        position: 'absolute', bottom: '-200px', right: '-200px',
        opacity: 0.07, animation: 'spin-slow 50s linear infinite',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <Eyebrow color="#000">Escolha sua agenda</Eyebrow>
          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800,
            fontSize: 'clamp(36px, 5.4vw, 80px)', lineHeight: 0.95,
            letterSpacing: '-0.03em', textTransform: 'uppercase',
            color: '#000', margin: '24px 0 24px',
          }}>
            Um plano <span style={{ color: 'var(--orange)' }}>pra cada</span> tamanho.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '17px', lineHeight: 1.6, color: 'rgba(0,0,0,0.7)' }}>
            Cada plano inclui criação, configuração, personalização e manutenção. No anual, a implementação sai de graça.
          </p>
        </div>

        <div className="reveal">
          <BillingToggle billing={billing} setBilling={setBilling} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '20px',
          alignItems: 'stretch',
        }}>
          {PLANS.map((p, i) => (
            <PlanCard key={p.id} plan={p} delay={i * 100} isMobile={isMobile} billing={billing} />
          ))}
        </div>

        <div className="reveal" style={{
          marginTop: '40px', background: '#000', color: 'var(--offwhite)',
          borderRadius: '20px', padding: '24px 28px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '24px', flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Asterisk size={32} color="orange" spin />
            <div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '20px', letterSpacing: '-0.02em' }}>Precisa de mais?</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'rgba(242,238,229,0.7)' }}>
                Profissional extra: R$ 97 implantação + R$ 29/mês · Pacote extra de categorias e serviços: R$ 97 (sem mensalidade)
              </div>
            </div>
          </div>
          <Btn variant="primary" size="md">Falar com a IA MOD</Btn>
        </div>

        <div style={{ marginTop: '16px', textAlign: 'center', fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(0,0,0,0.45)' }}>
          * Economia calculada considerando o desconto no pagamento anual à vista + o valor cheio da implementação gratuita.
        </div>
      </div>
    </section>
  );
};

const PlanCard = ({ plan, delay, isMobile, billing }) => {
  const [hover, setHover] = React.useState(false);
  const featured = plan.featured;
  const data = billing === 'mensal' ? plan.mensal : plan.anual;
  const showBadge = featured;

  return (
    <div
      className="reveal"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: featured ? '#000' : 'var(--offwhite)',
        color: featured ? 'var(--offwhite)' : '#000',
        border: '2px solid #000', borderRadius: '24px', padding: '32px',
        position: 'relative', transition: 'transform 300ms ease-out, box-shadow 300ms ease-out',
        transform: hover ? 'translate(-4px, -4px)' : (featured && !isMobile ? 'translateY(-12px)' : 'none'),
        boxShadow: hover ? '8px 8px 0 var(--orange)' : (featured ? '6px 6px 0 var(--orange)' : 'none'),
        display: 'flex', flexDirection: 'column',
        transitionDelay: `${delay}ms`,
      }}
    >
      {showBadge && (
        <div style={{
          position: 'absolute', top: '-14px', left: '50%',
          transform: 'translateX(-50%) rotate(-2deg)',
          background: 'var(--orange)', color: '#000',
          padding: '6px 14px', borderRadius: '999px', border: '2px solid #000',
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>✦ {plan.badge}</div>
      )}

      {/* Plan name */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '6px' }}>
        <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '28px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>{plan.name}</div>
        <Asterisk size={20} color={featured ? 'orange' : 'black'} />
      </div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: featured ? 'rgba(242,238,229,0.6)' : 'rgba(0,0,0,0.55)', marginBottom: '24px', minHeight: '36px' }}>{plan.target}</div>

      {/* Price block */}
      <div style={{ background: featured ? 'rgba(253,92,2,0.12)' : '#000', borderRadius: '16px', padding: '20px', marginBottom: '16px' }}>
        {billing === 'mensal' ? (
          <>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'var(--orange)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>12x de</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--offwhite)' }}>R$</span>
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '64px', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--offwhite)' }}>{data.price}</span>
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(242,238,229,0.6)', marginTop: '8px' }}>
              Contrato anual com pagamento mensal.
            </div>
          </>
        ) : (
          <>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'var(--orange)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>À vista</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--offwhite)' }}>R$</span>
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '56px', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--offwhite)' }}>{fmtBRL(data.price)}</span>
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(242,238,229,0.6)', marginTop: '8px' }}>
              Contrato anual com pagamento à vista.
            </div>
          </>
        )}
      </div>

      {/* Implementação block */}
      <div style={{
        borderRadius: '12px', padding: '12px 16px', marginBottom: '24px',
        background: featured ? 'rgba(242,238,229,0.07)' : 'rgba(0,0,0,0.06)',
        border: '1px solid ' + (featured ? 'rgba(242,238,229,0.12)' : 'rgba(0,0,0,0.12)'),
      }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 600, color: featured ? 'rgba(242,238,229,0.55)' : 'rgba(0,0,0,0.5)', marginBottom: '6px' }}>
          Implementação inicial
        </div>
        {billing === 'mensal' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: featured ? 'rgba(242,238,229,0.4)' : 'rgba(0,0,0,0.38)', textDecoration: 'line-through' }}>R$ {data.implFull}</span>
            <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '18px', fontWeight: 800, color: featured ? 'var(--offwhite)' : '#000' }}>R$ {data.implDisc}</span>
            <span style={{ fontSize: '11px', background: 'var(--orange)', color: '#000', fontWeight: 800, padding: '2px 8px', borderRadius: '999px' }}>-R$ 200</span>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: featured ? 'rgba(242,238,229,0.4)' : 'rgba(0,0,0,0.38)', textDecoration: 'line-through' }}>R$ {data.implFull}</span>
            <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '18px', fontWeight: 800, color: 'var(--orange)' }}>GRÁTIS</span>
            <span style={{ fontSize: '11px', background: 'var(--orange)', color: '#000', fontWeight: 800, padding: '2px 8px', borderRadius: '999px', whiteSpace: 'nowrap' }}>Economia R$ {fmtBRL(data.economy)}*</span>
          </div>
        )}
      </div>

      {/* Features */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', flex: 1 }}>
        {plan.features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: "'DM Sans', sans-serif", fontSize: '14px', lineHeight: 1.45, color: featured ? 'rgba(242,238,229,0.85)' : 'rgba(0,0,0,0.8)' }}>
            <span style={{ flexShrink: 0, marginTop: '3px', width: 14, height: 14, borderRadius: '50%', background: 'var(--orange)', color: '#000', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <Btn variant={featured ? 'primary' : 'dark'} size="md" style={{ width: '100%', justifyContent: 'center' }}>{plan.cta}</Btn>
    </div>
  );
};

window.Pricing = Pricing;
