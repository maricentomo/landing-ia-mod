// PRICING — 3 plans, middle highlighted

const PLANS = [
  {
    id: 'essencial', name: 'Essencial', target: 'Para profissional solo ou negócio pequeno',
    price: '187', cents: '00', full: '1.868', cta: 'Quero o Essencial',
    renewal: { monthly: '107', full: '1.068' },
    features: ['1 profissional', 'Até 15 serviços cadastrados', 'Layout personalizado', 'Fotos da empresa ou do profissional', 'Integração com Google Agenda', 'Confirmação automática por WhatsApp', 'Aviso interno de novo agendamento', 'Lembrete automático no dia', 'Link para bio, site ou WhatsApp', 'Manutenção técnica do sistema'],
  },
  {
    id: 'equipe', name: 'Equipe', target: 'Para negócios com até 5 profissionais',
    price: '250', cents: '00', full: '2.497', cta: 'Quero o Equipe',
    featured: true, badge: 'Mais escolhido',
    renewal: { monthly: '150', full: '1.497' },
    features: ['Até 5 profissionais', 'Agenda separada por profissional', 'Até 40 serviços cadastrados', 'Escolha de profissional no agendamento', 'Categorias de serviços', 'Layout personalizado', 'Fotos da equipe', 'Integração com Google Agenda', 'Confirmação + lembrete WhatsApp', 'Aviso interno de novo agendamento', 'Manutenção técnica do sistema'],
  },
  {
    id: 'completo', name: 'Completo', target: 'Para negócios que querem pagamento no agendamento',
    price: '350', cents: '00', full: '3.497', cta: 'Quero o Completo',
    renewal: { monthly: '200', full: '1.997' },
    features: ['Tudo do plano Equipe', 'Pagamento no agendamento', 'Integração do pagamento ao processo', 'Confirmação após o pagamento', 'Organização dos serviços com valor', 'Experiência mais completa para o cliente', 'Suporte técnico da estrutura com pagamento'],
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
      <Asterisk size={500} color="orange" style={{ position: 'absolute', bottom: '-200px', right: '-200px', opacity: 0.07, animation: 'spin-slow 50s linear infinite' }} />

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
            Cada plano inclui criação, configuração, personalização e manutenção do sistema durante o primeiro ano. Depois, a renovação fica mais barata — sua agenda já está pronta.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '20px',
          alignItems: 'stretch',
        }}>
          {PLANS.map((p, i) => <PlanCard key={p.id} plan={p} delay={i * 100} isMobile={isMobile} />)}
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
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'rgba(242,238,229,0.7)' }}>Mais profissionais, serviços, unidades ou números internos — adicione na hora de fechar o pedido.</div>
            </div>
          </div>
          <Btn variant="primary" size="md">Falar com a IA MOD</Btn>
        </div>
      </div>
    </section>
  );
};

const PlanCard = ({ plan, delay, isMobile }) => {
  const [hover, setHover] = React.useState(false);
  const featured = plan.featured;
  return (
    <div
      className="reveal"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: featured ? '#000' : 'var(--offwhite)',
        color: featured ? 'var(--offwhite)' : '#000',
        border: '2px solid #000', borderRadius: '24px', padding: '32px',
        position: 'relative', transition: 'all 300ms ease-out',
        transform: hover ? 'translate(-4px, -4px)' : (featured && !isMobile ? 'translateY(-12px)' : 'none'),
        boxShadow: hover ? '8px 8px 0 var(--orange)' : (featured ? '6px 6px 0 var(--orange)' : 'none'),
        display: 'flex', flexDirection: 'column',
        transitionDelay: `${delay}ms`,
      }}
    >
      {plan.badge && (
        <div style={{
          position: 'absolute', top: '-14px', left: '50%',
          transform: 'translateX(-50%) rotate(-2deg)',
          background: 'var(--orange)', color: '#000',
          padding: '6px 14px', borderRadius: '999px', border: '2px solid #000',
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>✦ {plan.badge}</div>
      )}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '6px' }}>
        <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '28px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>{plan.name}</div>
        <Asterisk size={20} color={featured ? 'orange' : 'black'} />
      </div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: featured ? 'rgba(242,238,229,0.6)' : 'rgba(0,0,0,0.55)', marginBottom: '24px', minHeight: '36px' }}>{plan.target}</div>
      <div style={{ background: featured ? 'rgba(253, 92, 2, 0.12)' : '#000', borderRadius: '16px', padding: '20px', marginBottom: '24px' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'var(--orange)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>12x de</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--offwhite)' }}>R$</span>
          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '64px', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--offwhite)' }}>{plan.price}</span>
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(242,238,229,0.7)', marginTop: '8px' }}>
          ou <strong style={{ color: 'var(--offwhite)' }}>R$ {plan.full}</strong> à vista com desconto
        </div>
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', flex: 1 }}>
        {plan.features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: "'DM Sans', sans-serif", fontSize: '14px', lineHeight: 1.45, color: featured ? 'rgba(242,238,229,0.85)' : 'rgba(0,0,0,0.8)' }}>
            <span style={{ flexShrink: 0, marginTop: '4px', width: 14, height: 14, borderRadius: '50%', background: 'var(--orange)', color: '#000', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</span>
            {f}
          </li>
        ))}
      </ul>
      <Btn variant={featured ? 'primary' : 'dark'} size="md" style={{ width: '100%', justifyContent: 'center' }}>{plan.cta}</Btn>
      <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px dashed ' + (featured ? 'rgba(242,238,229,0.18)' : 'rgba(0,0,0,0.18)'), fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: featured ? 'rgba(242,238,229,0.6)' : 'rgba(0,0,0,0.55)' }}>
        <strong style={{ display: 'block', marginBottom: '2px', color: featured ? 'var(--offwhite)' : '#000' }}>Renovação após o 1º ano</strong>
        12x de R$ {plan.renewal.monthly} · à vista R$ {plan.renewal.full}
      </div>
    </div>
  );
};

window.Pricing = Pricing;
