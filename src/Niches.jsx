// NICHES — orange section with rotating tag pile

const Niches = () => {
  const isMobile = useIsMobile();
  const niches = [
    { label: 'Barbearias', icon: '✂' },
    { label: 'Salões de beleza', icon: <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><path d="M20 5H8a4 4 0 0 0 0 8h1.5L8 18h3l1.5-5H20a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM8 11a2 2 0 1 1 0-4h11v4Z"/><rect x="2" y="5.5" width="2.5" height="1.8" rx="0.5"/><rect x="2" y="9" width="2.5" height="1.8" rx="0.5"/></svg> },
    { label: 'Clínicas de estética', icon: <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><path d="M3.5 12C4.5 9.5 7 7 9.5 7.5C11 8 11.5 10 12 10C12.5 10 13 8 14.5 7.5C17 7 19.5 9.5 20.5 12C17.5 12.5 15 12 12 12C9 12 6.5 12.5 3.5 12Z"/><path d="M4 13.2C6 13 9 13 12 13C15 13 18 13 20 13.2C19 17 16 20 12 20C8 20 5 17 4 13.2Z"/></svg> },
    { label: 'Petshops', icon: <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><circle cx="9" cy="5.5" r="2"/><circle cx="15" cy="5.5" r="2"/><circle cx="5.5" cy="9.5" r="1.5"/><circle cx="18.5" cy="9.5" r="1.5"/><path d="M12 10c-2.8 0-5.5 2.2-5.5 5 0 1.6.6 2.7 2.2 3.2.9.3 1.7.5 2.3.5h2c.6 0 1.4-.2 2.3-.5 1.6-.5 2.2-1.6 2.2-3.2C17.5 12.2 14.8 10 12 10Z"/></svg> },
    { label: 'Consultórios', icon: '+' },
    { label: 'Studios', icon: <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="6" rx="2"/><rect x="9" y="9" width="6" height="7" rx="3"/><line x1="12" y1="16" x2="12" y2="22"/><circle cx="9.5" cy="6" r="1.3"/><circle cx="14.5" cy="6" r="1.3"/></svg> },
    { label: 'Psicólogos', icon: <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="12" y1="2" x2="12" y2="21"/><path d="M6 6C6 14 9 17 12 17C15 17 18 14 18 6"/><line x1="8.5" y1="21" x2="15.5" y2="21"/></svg> },
    { label: 'Seu negócio também', icon: <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 18H5V9h14v12ZM5 7V5h14v2Z"/><rect x="7" y="11" width="2" height="2"/><rect x="11" y="11" width="2" height="2"/><rect x="15" y="11" width="2" height="2"/><rect x="7" y="15" width="2" height="2"/><rect x="11" y="15" width="2" height="2"/></svg> },
  ];

  return (
    <section style={{
      background: 'var(--orange)',
      color: '#000',
      padding: isMobile ? '80px 0' : '120px 0',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '2px solid #000',
      borderBottom: '2px solid #000',
    }}>
      <Asterisk size={300} color="black" style={{ position: 'absolute', top: '-80px', right: '-80px', opacity: 0.08, animation: 'spin-slow 30s linear infinite' }} />
      <Asterisk size={200} color="black" style={{ position: 'absolute', bottom: '-60px', left: '-40px', opacity: 0.1, animation: 'spin-rev 24s linear infinite' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div className="reveal" style={{ maxWidth: '780px', marginBottom: isMobile ? '40px' : '64px' }}>
          <Eyebrow color="#000">Para quem é</Eyebrow>
          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(36px, 5.4vw, 80px)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: '#000', margin: '24px 0 24px',
          }}>
            Ideal para negócios que <span style={{ fontStyle: 'italic', textDecoration: 'underline', textDecorationThickness: '6px', textUnderlineOffset: '8px' }}>vivem</span> de agenda.
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '18px', lineHeight: 1.6,
            color: 'rgba(0,0,0,0.8)',
            maxWidth: '620px',
          }}>
            Se o seu negócio trabalha com horário marcado, ele pode ter uma agenda mais simples, mais bonita e mais profissional.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: '16px',
        }}>
          {niches.map((n, i) => (
            <NicheCard key={i} {...n} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
};

const NicheCard = ({ label, icon, delay }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className="reveal"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? '#000' : 'var(--offwhite)',
        color: hover ? 'var(--orange)' : '#000',
        border: '2px solid #000',
        borderRadius: '20px',
        padding: '24px',
        cursor: 'pointer',
        transition: 'all 250ms ease-out',
        transform: hover ? 'translate(-4px, -4px) rotate(-1deg)' : 'none',
        boxShadow: hover ? '8px 8px 0 #000' : '0 0 0 #000',
        display: 'flex', flexDirection: 'column', gap: '20px',
        minHeight: '140px',
        transitionDelay: `${delay}ms`,
      }}
    >
      <Asterisk size={44} color="black" style={{ animation: 'spin-slow 10s linear infinite', flexShrink: 0 }} />
      <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '18px', letterSpacing: '-0.02em', marginTop: 'auto' }}>{label}</div>
    </div>
  );
};

window.Niches = Niches;
