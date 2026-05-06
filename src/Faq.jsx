// FAQ — animated accordion

const FAQS = [
  { q: 'Preciso instalar algum aplicativo?', a: 'Não. O cliente acessa a agenda por um link. Esse link pode ficar no Instagram, WhatsApp, site, Google ou QR Code.' },
  { q: 'A agenda funciona para mais de um profissional?', a: 'Sim. No plano Equipe e no plano Completo, é possível trabalhar com até 5 profissionais e agenda separada para cada um.' },
  { q: 'O cliente recebe confirmação pelo WhatsApp?', a: 'Sim. O sistema envia confirmação automática por WhatsApp e também pode enviar lembrete no dia do atendimento.' },
  { q: 'Posso usar para salão, clínica ou petshop?', a: 'Sim. A estrutura pode ser adaptada para diferentes tipos de negócios que trabalham com horário marcado.' },
  { q: 'Posso ter pagamento no agendamento?', a: 'Sim. O pagamento no agendamento está incluso no plano Completo.' },
  { q: 'Posso adicionar mais profissionais depois?', a: 'Sim. Na hora de fechar o pedido ou em uma atualização futura, é possível adicionar recursos extras conforme a necessidade do seu negócio.' },
  { q: 'O que acontece depois do primeiro ano?', a: 'Você pode renovar o sistema por um valor menor. A renovação cobre a manutenção técnica, hospedagem, funcionamento das integrações e suporte.' },
];

const Faq = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={{
      background: 'var(--offwhite)', color: '#000',
      padding: isMobile ? '80px 0' : '140px 0',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '0.85fr 1.15fr',
        gap: isMobile ? '48px' : '64px',
        alignItems: 'flex-start',
      }}>
        <div className="reveal" style={{ position: isMobile ? 'static' : 'sticky', top: '120px' }}>
          <Eyebrow color="#000">Perguntas frequentes</Eyebrow>
          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 0.95,
            letterSpacing: '-0.03em', textTransform: 'uppercase',
            color: '#000', margin: '24px 0 24px',
          }}>
            Ainda tem <span style={{ color: 'var(--orange)' }}>dúvida?</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', lineHeight: 1.6, color: 'rgba(0,0,0,0.7)', marginBottom: '24px' }}>
            Reunimos as mais comuns. Se a sua não está aqui, é só chamar a gente — a IA MOD responde rapidinho.
          </p>
          {!isMobile && (
            <img src="assets/duvida.png" alt="" style={{ width: '90%', maxWidth: '340px', animation: 'wiggle 4s ease-in-out infinite' }} />
          )}
        </div>

        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {FAQS.map((f, i) => (
            <FaqItem key={i} {...f} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({ q, a, isOpen, onToggle }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: isOpen ? '#000' : (hover ? 'var(--offwhite-2)' : '#fff'),
        color: isOpen ? 'var(--offwhite)' : '#000',
        border: '2px solid #000', borderRadius: '20px', padding: '20px 24px',
        cursor: 'pointer', transition: 'all 250ms ease-out',
        transform: hover && !isOpen ? 'translate(-2px, -2px)' : 'none',
        boxShadow: hover && !isOpen ? '4px 4px 0 #000' : 'none',
      }}
      onClick={onToggle}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
        <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '18px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>{q}</div>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: isOpen ? 'var(--orange)' : '#000',
          color: isOpen ? '#000' : 'var(--orange)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '20px',
          flexShrink: 0, transition: 'all 250ms ease-out',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
        }}>+</div>
      </div>
      <div style={{ maxHeight: isOpen ? '200px' : '0', overflow: 'hidden', transition: 'max-height 350ms ease, opacity 350ms ease, margin-top 250ms ease', opacity: isOpen ? 1 : 0, marginTop: isOpen ? '14px' : '0' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', lineHeight: 1.6, color: isOpen ? 'rgba(242,238,229,0.8)' : 'rgba(0,0,0,0.75)' }}>{a}</div>
      </div>
    </div>
  );
};

window.Faq = Faq;
