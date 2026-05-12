// PRICING — 3 plan cards, each with its own mensal/anual toggle

const PLANS = [
  {
    id: 'essencial',
    name: 'Essencial',
    target: 'Para negócios com poucos serviços e um fluxo de agendamento mais direto.',
    featured: false,
    mensal: {
      priceLabel: '12x de',
      price: 'R$ 97',
      subtitle: 'Contrato anual com pagamento mensal.',
      implLabel: 'Implementação inicial',
      implFrom: 'R$ 397',
      implTo: 'R$ 197',
      implEconomy: 'Economia de R$ 200 na implementação',
    },
    anual: {
      priceLabel: null,
      price: 'R$ 970',
      priceAfter: 'à vista',
      subtitle: 'Contrato anual com pagamento à vista.',
      implLabel: 'Implementação grátis',
      implFrom: 'R$ 397',
      implTo: 'R$ 0',
      implEconomy: 'Economia de R$ 591*',
    },
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
    mensal: {
      priceLabel: '12x de',
      price: 'R$ 147',
      subtitle: 'Contrato anual com pagamento mensal.',
      implLabel: 'Implementação inicial',
      implFrom: 'R$ 497',
      implTo: 'R$ 297',
      implEconomy: 'Economia de R$ 200 na implementação',
    },
    anual: {
      priceLabel: null,
      price: 'R$ 1.470',
      priceAfter: 'à vista',
      subtitle: 'Contrato anual com pagamento à vista.',
      implLabel: 'Implementação grátis',
      implFrom: 'R$ 497',
      implTo: 'R$ 0',
      implEconomy: 'Economia de R$ 791*',
    },
    features: [
      '5 profissionais cadastrado',
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
    featured: false,
    mensal: {
      priceLabel: '12x de',
      price: 'R$ 247',
      subtitle: 'Contrato anual com pagamento mensal.',
      implLabel: 'Implementação inicial',
      implFrom: 'R$ 697',
      implTo: 'R$ 497',
      implEconomy: 'Economia de R$ 200 na implementação',
    },
    anual: {
      priceLabel: null,
      price: 'R$ 2.470',
      priceAfter: 'à vista',
      subtitle: 'Contrato anual com pagamento à vista.',
      implLabel: 'Implementação grátis',
      implFrom: 'R$ 697',
      implTo: 'R$ 0',
      implEconomy: 'Economia de R$ 1.191*',
    },
    features: [
      '10 profissionais cadastrado',
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

const Pricing = () => {
  const isMobile = useIsMobile();
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
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 80px' }}>
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '20px',
          alignItems: 'start',
        }}>
          {PLANS.map((p, i) => <PlanCard key={p.id} plan={p} delay={i * 100} isMobile={isMobile} />)}
        </div>

        <p style={{ marginTop: '32px', textAlign: 'center', fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(0,0,0,0.45)' }}>
          * Economia calculada considerando o desconto no pagamento anual à vista + o valor cheio da implementação gratuita.
        </p>
      </div>
    </section>
  );
};

const PlanCard = ({ plan, delay, isMobile }) => {
  const [hover, setHover] = React.useState(false);
  const [billing, setBilling] = React.useState('mensal');
  const [loading, setLoading] = React.useState(false);
  const featured = plan.featured;
  const data = billing === 'mensal' ? plan.mensal : plan.anual;

  const handleBuy = async () => {
    setLoading(true);
    try {
      const apiUrl = window.API_URL || 'https://api.iamod.com.br';
      const res = await fetch(`${apiUrl}/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId: plan.id, billing }),
      });
      const json = await res.json();
      if (json.init_point) {
        window.location.href = json.init_point;
      } else {
        alert('Erro ao iniciar pagamento. Tente novamente.');
      }
    } catch (e) {
      alert('Não foi possível conectar com o servidor de pagamento.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="reveal"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: featured ? '#000' : 'var(--offwhite)',
        color: featured ? 'var(--offwhite)' : '#000',
        border: '2px solid #000',
        borderRadius: '24px',
        padding: '32px',
        position: 'relative',
        transition: 'transform 300ms ease-out, box-shadow 300ms ease-out',
        transform: hover ? 'translate(-4px, -4px)' : (featured && !isMobile ? 'translateY(-12px)' : 'none'),
        boxShadow: hover ? '8px 8px 0 var(--orange)' : (featured ? '6px 6px 0 var(--orange)' : 'none'),
        display: 'flex',
        flexDirection: 'column',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Badge */}
      {plan.badge && (
        <div style={{
          position: 'absolute', top: '-14px', left: '50%',
          transform: 'translateX(-50%) rotate(-2deg)',
          background: 'var(--orange)', color: '#000',
          padding: '6px 14px', borderRadius: '999px', border: '2px solid #000',
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800, fontSize: '11px', letterSpacing: '0.08em',
          textTransform: 'uppercase', whiteSpace: 'nowrap',
        }}>✦ {plan.badge}</div>
      )}

      {/* Plan name */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '6px' }}>
        <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '28px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
          {plan.name}
        </div>
        <Asterisk size={20} color={featured ? 'orange' : 'black'} />
      </div>

      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: featured ? 'rgba(242,238,229,0.6)' : 'rgba(0,0,0,0.55)', marginBottom: '24px' }}>
        {plan.target}
      </div>

      {/* Per-card billing toggle */}
      <div style={{
        display: 'flex', marginBottom: '20px',
        background: featured ? 'rgba(242,238,229,0.08)' : 'rgba(0,0,0,0.06)',
        borderRadius: '999px', padding: '3px', gap: '3px',
        border: '1px solid ' + (featured ? 'rgba(242,238,229,0.15)' : 'rgba(0,0,0,0.12)'),
      }}>
        {['mensal', 'anual'].map(opt => (
          <button
            key={opt}
            onClick={() => setBilling(opt)}
            style={{
              flex: 1, padding: '8px 12px',
              borderRadius: '999px', border: 'none', cursor: 'pointer',
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800, fontSize: '12px',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              transition: 'all 180ms ease',
              background: billing === opt ? (featured ? 'var(--orange)' : '#000') : 'transparent',
              color: billing === opt ? (featured ? '#000' : 'var(--offwhite)') : (featured ? 'rgba(242,238,229,0.5)' : 'rgba(0,0,0,0.45)'),
            }}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Price block */}
      <div style={{
        background: featured ? 'rgba(253,92,2,0.12)' : '#000',
        borderRadius: '16px', padding: '20px', marginBottom: '16px',
      }}>
        {data.priceLabel && (
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'var(--orange)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>
            {data.priceLabel}
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: billing === 'anual' ? '52px' : '60px', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--offwhite)' }}>
            {data.price}
          </span>
          {data.priceAfter && (
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', color: 'rgba(242,238,229,0.7)', fontWeight: 600 }}>
              {data.priceAfter}
            </span>
          )}
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(242,238,229,0.6)', marginTop: '8px' }}>
          {data.subtitle}
        </div>
      </div>

      {/* Implementação block */}
      <div style={{
        borderRadius: '12px', padding: '14px 16px', marginBottom: '24px',
        background: featured ? 'rgba(242,238,229,0.07)' : 'rgba(0,0,0,0.05)',
        border: '1px solid ' + (featured ? 'rgba(242,238,229,0.12)' : 'rgba(0,0,0,0.1)'),
      }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, color: featured ? 'rgba(242,238,229,0.55)' : 'rgba(0,0,0,0.5)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {data.implLabel}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: featured ? 'rgba(242,238,229,0.4)' : 'rgba(0,0,0,0.38)', textDecoration: 'line-through' }}>
            de {data.implFrom}
          </span>
          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '20px', fontWeight: 800, color: billing === 'anual' ? 'var(--orange)' : (featured ? 'var(--offwhite)' : '#000') }}>
            por {data.implTo}
          </span>
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, color: 'var(--orange)' }}>
          {data.implEconomy}
        </div>
      </div>

      {/* Features */}
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, color: featured ? 'rgba(242,238,229,0.55)' : 'rgba(0,0,0,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
        Inclui:
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', flex: 1 }}>
        {plan.features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: "'DM Sans', sans-serif", fontSize: '14px', lineHeight: 1.45, color: featured ? 'rgba(242,238,229,0.85)' : 'rgba(0,0,0,0.8)' }}>
            <span style={{ flexShrink: 0, marginTop: '3px', width: 14, height: 14, borderRadius: '50%', background: 'var(--orange)', color: '#000', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={handleBuy}
        disabled={loading}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = featured ? '6px 6px 0 var(--orange)' : '6px 6px 0 var(--orange)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
        style={{
          width: '100%', padding: '14px 24px',
          borderRadius: '999px', border: '2px solid ' + (featured ? 'var(--orange)' : '#000'),
          cursor: loading ? 'wait' : 'pointer',
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800, fontSize: '14px', letterSpacing: '0.04em', textTransform: 'uppercase',
          background: featured ? 'var(--orange)' : '#000',
          color: featured ? '#000' : 'var(--offwhite)',
          transition: 'all 200ms ease-out',
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? 'Aguarde...' : `Quero o ${plan.name} →`}
      </button>
    </div>
  );
};

window.Pricing = Pricing;
