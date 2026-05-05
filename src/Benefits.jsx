// BENEFITS — what changes in practice. Two-column with mascot.

const Benefits = () => {
  const items = [
  { k: '01', t: 'Você para de responder a mesma pergunta o dia inteiro.' },
  { k: '02', t: 'Seu cliente agenda mesmo fora do horário comercial.' },
  { k: '03', t: 'Sua equipe visualiza melhor os horários.' },
  { k: '04', t: 'Cada profissional tem sua própria agenda.' },
  { k: '05', t: 'O cliente recebe lembrete no dia do atendimento.' },
  { k: '06', t: 'Seu negócio passa uma imagem mais profissional.' }];


  return (
    <section style={{
      background: 'var(--black)',
      padding: '140px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '0.85fr 1.15fr',
        gap: '64px',
        alignItems: 'center'
      }}>
        <div className="reveal">
          <Eyebrow>O que muda na prática</Eyebrow>
          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(40px, 5vw, 72px)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: 'var(--offwhite)',
            margin: '24px 0 28px'
          }}>
            Menos bagunça. <span style={{ color: 'var(--orange)' }}>Mais</span> agenda cheia.
          </h2>
          <div style={{
            position: 'relative',
            width: '100%', maxWidth: '380px',
            aspectRatio: '1',
            borderRadius: '24px',
            background: 'var(--offwhite)',
            overflow: 'hidden',
            border: '2px solid #000', opacity: "1", backgroundColor: "rgba(242, 238, 229, 0)"
          }}>
            <img src="assets/procrastinando.png" alt=""
            style={{
              width: '100%', height: '100%', objectFit: 'contain',
              animation: 'float-y 6s ease-in-out infinite'
            }} />
            
            <div style={{
              position: 'absolute', bottom: '16px', left: '16px', right: '16px',
              background: '#000', color: 'var(--offwhite)',
              padding: '12px 14px', borderRadius: '12px',
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800, fontSize: '14px',
              letterSpacing: '-0.01em',
              textAlign: 'center'
            }}>
              <span style={{ color: 'var(--orange)' }}>VOCÊ</span> NO MODO RELAX.
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {items.map((it, i) =>
          <BenefitCard key={i} {...it} delay={i * 60} />
          )}
        </div>
      </div>
    </section>);

};

const BenefitCard = ({ k, t, delay }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div className="reveal"
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    style={{
      background: hover ? 'var(--orange)' : 'var(--dark-2)',
      color: hover ? '#000' : 'var(--offwhite)',
      border: '1px solid ' + (hover ? '#000' : 'rgba(242,238,229,0.08)'),
      borderRadius: '20px',
      padding: '24px',
      cursor: 'default',
      transition: 'all 250ms ease-out',
      transform: hover ? 'translate(-3px, -3px) rotate(-0.5deg)' : 'none',
      boxShadow: hover ? '6px 6px 0 var(--orange)' : 'none',
      transitionDelay: `${delay}ms`,
      display: 'flex', flexDirection: 'column', gap: '14px',
      minHeight: '160px'
    }}>
      
      <div style={{
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontWeight: 800, fontSize: '32px',
        color: hover ? '#000' : 'var(--orange)',
        letterSpacing: '-0.03em',
        lineHeight: 1
      }}>{k}</div>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '15px', lineHeight: 1.45,
        fontWeight: 500
      }}>{t}</div>
    </div>);

};

window.Benefits = Benefits;