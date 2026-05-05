// NICHES — orange section with rotating tag pile

const Niches = () => {
  const niches = [
    { label: 'Barbearias', icon: '✂' },
    { label: 'Salões de beleza', icon: '✦' },
    { label: 'Clínicas de estética', icon: '◊' },
    { label: 'Petshops', icon: '◐' },
    { label: 'Consultórios', icon: '+' },
    { label: 'Studios', icon: '▲' },
    { label: 'Profissionais autônomos', icon: '●' },
    { label: 'Equipes', icon: '◆' },
  ];

  return (
    <section style={{
      background: 'var(--orange)',
      color: '#000',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '2px solid #000',
      borderBottom: '2px solid #000',
    }}>
      <Asterisk size={300} color="black" style={{
        position: 'absolute', top: '-80px', right: '-80px',
        opacity: 0.08, animation: 'spin-slow 30s linear infinite',
      }} />
      <Asterisk size={200} color="black" style={{
        position: 'absolute', bottom: '-60px', left: '-40px',
        opacity: 0.1, animation: 'spin-rev 24s linear infinite',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div className="reveal" style={{ maxWidth: '780px', marginBottom: '64px' }}>
          <Eyebrow color="#000">Para quem é</Eyebrow>
          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(40px, 5.4vw, 80px)',
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
          gridTemplateColumns: 'repeat(4, 1fr)',
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
        minHeight: '160px',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div style={{
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontSize: '40px', fontWeight: 800, lineHeight: 1,
        color: hover ? 'var(--orange)' : 'var(--orange)',
      }}>{icon}</div>
      <div style={{
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontWeight: 800, fontSize: '20px',
        letterSpacing: '-0.02em',
        marginTop: 'auto',
      }}>{label}</div>
    </div>
  );
};

window.Niches = Niches;
