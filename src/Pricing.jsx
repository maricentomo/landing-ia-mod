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
      'Coleta de dados do cliente',
      'Encaminhamento para WhatsApp ou agenda',
    ],
  },
];

// ── Terms Modal ────────────────────────────────
const TermsModal = ({ onClose }) => {
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  const s = {
    h: { fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '14px', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#000', margin: '28px 0 8px' },
    p: { fontFamily: "'DM Sans', sans-serif", fontSize: '14px', lineHeight: 1.7, color: 'rgba(0,0,0,0.75)', marginBottom: '10px' },
    li: { fontFamily: "'DM Sans', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(0,0,0,0.7)', marginBottom: '4px' },
  };

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: '20px', width: '100%', maxWidth: '680px', maxHeight: '85vh', display: 'flex', flexDirection: 'column', border: '2px solid #000', boxShadow: '8px 8px 0 #000' }}>
        {/* Header */}
        <div style={{ padding: '24px 28px', borderBottom: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '18px', letterSpacing: '-0.01em' }}>Termos de Contratação</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(0,0,0,0.45)', marginTop: '2px' }}>Serviços Ia Mod — Contrato de Adesão</div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: '2px solid #000', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
        </div>
        {/* Body */}
        <div style={{ padding: '24px 28px', overflowY: 'auto', flex: 1 }}>
          <p style={s.p}>Ao contratar qualquer plano, efetuar pagamento, preencher formulário ou confirmar pedido por qualquer canal oficial da Ia Mod, o CONTRATANTE declara que leu, compreendeu e concorda com os termos abaixo.</p>

          <div style={s.h}>1. Objeto do Contrato</div>
          <p style={s.p}>Prestação de serviços digitais incluindo criação e configuração de fluxo de atendimento automático, estrutura de agendamento, organização de categorias/serviços/profissionais, coleta de dados, encaminhamento para WhatsApp ou agenda, adaptação visual e suporte técnico.</p>

          <div style={s.h}>2. Prazo de Entrega</div>
          <p style={s.p}>Até 7 dias úteis após: confirmação do pagamento, envio completo das informações solicitadas (logotipo, cores, serviços, preços, profissionais, horários, textos) e liberação dos acessos necessários. O prazo é prorrogado automaticamente se o cliente atrasar envio de materiais.</p>

          <div style={s.h}>3. Implementação Inicial</div>
          <p style={s.p}>Cobre o trabalho técnico de configuração, estruturação e personalização. Após o início da execução e ultrapassado o prazo legal de arrependimento (7 dias), a implementação não é reembolsável.</p>

          <div style={s.h}>4. Suporte Técnico</div>
          <p style={s.p}><strong>Inclui:</strong> erros de funcionamento, falhas técnicas, ajustes para manter o funcionamento básico e orientações sobre uso da estrutura.</p>
          <p style={s.p}><strong>Não inclui:</strong> novas funcionalidades, mudança completa de fluxo, recriação do projeto, novas integrações, recuperação de conta bloqueada por decisão de plataformas externas.</p>
          <p style={s.p}>Horário de suporte: segunda a sexta, em horário comercial. Prazo de primeira resposta: até 1 dia útil.</p>

          <div style={s.h}>5. Ajustes Inclusos</div>
          <p style={s.p}>1 ajuste simples a cada 60 dias sem custo: remover serviço, trocar preço, alterar profissional, ajustar texto curto, alterar horário ou trocar imagem. Não cumulativo.</p>

          <div style={s.h}>6. Pagamento</div>
          <p style={s.p}><strong>Mensal com contrato anual:</strong> Essencial 12× R$ 97 | Equipe 12× R$ 147 | Completo 12× R$ 247. Inadimplência pode causar suspensão do serviço.</p>
          <p style={s.p}><strong>Anual à vista:</strong> Essencial R$ 970 | Equipe R$ 1.470 | Completo R$ 2.470. Implementação gratuita.</p>

          <div style={s.h}>7. Direito de Arrependimento</div>
          <p style={s.p}>O CONTRATANTE pode cancelar em até 7 dias da contratação, conforme o Código de Defesa do Consumidor. Após esse prazo, aplicam-se as regras de cancelamento abaixo.</p>

          <div style={s.h}>8. Cancelamento Após 7 Dias</div>
          <p style={s.p}><strong>Planos mensais:</strong> Valores já pagos não são reembolsados. A Ia Mod pode encerrar cobranças futuras conforme análise. A implementação não é reembolsável.</p>
          <p style={s.p}><strong>Planos anuais à vista:</strong> Reembolso proporcional calculado como: valor pago − implementação pelo valor cheio − meses utilizados pelo valor mensal normal = saldo possível.</p>

          <div style={s.h}>9. WhatsApp, Meta e Ferramentas de Terceiros</div>
          <p style={s.p}>A Ia Mod utiliza ferramentas de terceiros (Typebot, WhatsApp, Meta, Evolution API, Google, hospedagem, domínio). Não se responsabiliza por quedas, bloqueios, instabilidades ou mudanças de regras dessas plataformas.</p>
          <p style={s.p}>Conexões por QR Code podem cair e precisar de nova leitura. Bloqueios causados por uso indevido, spam ou descumprimento das políticas das plataformas não são responsabilidade da Ia Mod.</p>

          <div style={s.h}>10. Limitação de Responsabilidade</div>
          <p style={s.p}>A Ia Mod não garante resultado financeiro, aumento de faturamento, número mínimo de clientes ou volume de agendamentos. Oferece estrutura, automação e organização digital.</p>

          <div style={s.h}>11. Aceite</div>
          <p style={s.p}>Ao contratar, o CONTRATANTE declara ter lido e concordado com todos os termos, estar ciente do prazo de entrega, das políticas de suporte, cancelamento e reembolso, e de que a Ia Mod utiliza ferramentas de terceiros sujeitas a instabilidades fora do seu controle.</p>
        </div>
        <div style={{ padding: '16px 28px', borderTop: '1px solid rgba(0,0,0,0.08)', flexShrink: 0 }}>
          <button onClick={onClose} style={{ width: '100%', padding: '12px', background: '#000', color: 'var(--offwhite)', border: 'none', borderRadius: '12px', fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '14px', cursor: 'pointer', letterSpacing: '0.04em' }}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Checkout Modal ─────────────────────────────
const CheckoutModal = ({ plan, billing, onClose, onConfirm, loading }) => {
  const isMobile = useIsMobile();
  const [form, setForm] = React.useState({ name: '', email: '', phone: '' });
  const [agreed, setAgreed] = React.useState(false);
  const [showTerms, setShowTerms] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Informe seu nome';
    if (!form.email.includes('@')) e.email = 'E-mail inválido';
    if (form.phone.replace(/\D/g, '').length < 10) e.phone = 'WhatsApp inválido';
    if (!agreed) e.agreed = 'Aceite os termos para continuar';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) onConfirm(form);
  };

  const field = (label, key, placeholder, type = 'text') => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, color: '#000', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{label}</label>
      <input
        type={type}
        value={form[key]}
        placeholder={placeholder}
        onChange={e => { setForm(f => ({ ...f, [key]: e.target.value })); setErrors(er => ({ ...er, [key]: null })); }}
        style={{
          padding: '12px 14px', borderRadius: '10px', fontFamily: "'DM Sans', sans-serif", fontSize: '15px',
          border: `1.5px solid ${errors[key] ? 'var(--orange)' : 'rgba(0,0,0,0.18)'}`,
          outline: 'none', color: '#000', background: '#fff',
        }}
      />
      {errors[key] && <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'var(--orange)' }}>{errors[key]}</span>}
    </div>
  );

  return (
    <>
      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', zIndex: 9998, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div onClick={e => e.stopPropagation()} style={{ background: 'var(--offwhite)', borderRadius: '20px', width: '100%', maxWidth: '480px', border: '2px solid #000', boxShadow: '8px 8px 0 #000', display: 'flex', flexDirection: 'column', maxHeight: '90vh', overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ padding: isMobile ? '16px 20px 14px' : '24px 28px 20px', borderBottom: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexShrink: 0 }}>
            <div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '20px', letterSpacing: '-0.01em' }}>Antes de continuar</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginTop: '4px' }}>Plano <strong>{plan.name}</strong> · {billing === 'mensal' ? 'Mensal' : 'Anual à vista'}</div>
            </div>
            <button onClick={onClose} style={{ background: 'none', border: '2px solid #000', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>×</button>
          </div>
          {/* Form */}
          <div style={{ padding: isMobile ? '12px 20px' : '24px 28px', display: 'flex', flexDirection: 'column', gap: isMobile ? '10px' : '16px', overflowY: 'auto', flex: 1 }}>
            {billing === 'mensal' && (
              <div style={{
                background: 'rgba(253,92,2,0.08)',
                border: '1.5px solid var(--orange)',
                borderRadius: '12px',
                padding: '14px 16px',
              }}>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '12px', color: 'var(--orange)', marginBottom: '6px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Pagamento em 2 etapas
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', lineHeight: 1.55, color: 'rgba(0,0,0,0.72)' }}>
                  Primeiro será cobrada a taxa de implementação <strong>({plan.mensal.implTo})</strong>. Após o pagamento, aguarde alguns segundos na tela — você será redirecionado automaticamente para concluir a assinatura.
                </div>
              </div>
            )}

            {field('Nome completo', 'name', 'Seu nome')}
            {field('E-mail', 'email', 'seuemail@exemplo.com', 'email')}
            {field('WhatsApp', 'phone', '(11) 99999-9999', 'tel')}

            {/* Terms checkbox */}
            <div style={{ marginTop: '4px' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
                <div
                  onClick={() => { setAgreed(a => !a); setErrors(e => ({ ...e, agreed: null })); }}
                  style={{
                    width: 20, height: 20, borderRadius: '5px', flexShrink: 0, marginTop: '2px',
                    border: `2px solid ${errors.agreed ? 'var(--orange)' : (agreed ? '#000' : 'rgba(0,0,0,0.3)')}`,
                    background: agreed ? '#000' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 150ms',
                    cursor: 'pointer',
                  }}
                >
                  {agreed && <span style={{ color: 'var(--orange)', fontSize: '12px', fontWeight: 800, lineHeight: 1 }}>✓</span>}
                </div>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', lineHeight: 1.55, color: 'rgba(0,0,0,0.75)' }}>
                  Li e declaro que estou de acordo com os{' '}
                  <button
                    onClick={e => { e.preventDefault(); setShowTerms(true); }}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 700, color: '#000', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Termos e Condições
                  </button>
                </span>
              </label>
              {errors.agreed && <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'var(--orange)', marginTop: '6px', marginLeft: '32px' }}>{errors.agreed}</div>}
            </div>
          </div>
          {/* Footer */}
          <div style={{ padding: isMobile ? '10px 20px 16px' : '16px 28px 24px', flexShrink: 0 }}>
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                width: '100%', padding: '14px 24px', borderRadius: '999px',
                border: '2px solid #000', cursor: loading ? 'wait' : 'pointer',
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800, fontSize: '14px', letterSpacing: '0.04em', textTransform: 'uppercase',
                background: '#000', color: 'var(--offwhite)',
                opacity: loading ? 0.7 : 1, transition: 'opacity 200ms',
              }}
            >
              {loading ? 'Aguarde...' : 'Continuar para pagamento →'}
            </button>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(0,0,0,0.4)', textAlign: 'center', marginTop: '10px' }}>
              Você será redirecionado para o ambiente seguro de pagamento.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// ── Pricing section ────────────────────────────
const Pricing = () => {
  const isMobile = useIsMobile();
  const [checkout, setCheckout] = React.useState(null); // { plan, billing }
  const [loading, setLoading] = React.useState(false);

  const handleBuy = (plan, billing) => setCheckout({ plan, billing });

  const handleConfirm = async (customerData) => {
    if (!checkout) return;
    setLoading(true);
    try {
      const apiUrl = window.API_URL || 'https://api.iamod.com.br';
      const res = await fetch(`${apiUrl}/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId: checkout.plan.id, billing: checkout.billing, customer: customerData }),
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
    <>
      {checkout && (
        <CheckoutModal
          plan={checkout.plan}
          billing={checkout.billing}
          onClose={() => setCheckout(null)}
          onConfirm={handleConfirm}
          loading={loading}
        />
      )}
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
            gap: '20px', alignItems: 'start',
          }}>
            {PLANS.map((p, i) => <PlanCard key={p.id} plan={p} delay={i * 100} isMobile={isMobile} onBuy={handleBuy} />)}
          </div>

          <p style={{ marginTop: '32px', textAlign: 'center', fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(0,0,0,0.45)' }}>
            * Economia calculada considerando o desconto no pagamento anual à vista + o valor cheio da implementação gratuita.
          </p>
        </div>
      </section>
    </>
  );
};

const PlanCard = ({ plan, delay, isMobile, onBuy }) => {
  const [hover, setHover] = React.useState(false);
  const [billing, setBilling] = React.useState('mensal');
  const featured = plan.featured;
  const data = billing === 'mensal' ? plan.mensal : plan.anual;

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
        onClick={() => onBuy(plan, billing)}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '6px 6px 0 var(--orange)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
        style={{
          width: '100%', padding: '14px 24px',
          borderRadius: '999px', border: '2px solid ' + (featured ? 'var(--orange)' : '#000'),
          cursor: 'pointer',
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800, fontSize: '14px', letterSpacing: '0.04em', textTransform: 'uppercase',
          background: featured ? 'var(--orange)' : '#000',
          color: featured ? '#000' : 'var(--offwhite)',
          transition: 'all 200ms ease-out',
        }}
      >
        {`Quero o ${plan.name} →`}
      </button>
    </div>
  );
};

window.Pricing = Pricing;
