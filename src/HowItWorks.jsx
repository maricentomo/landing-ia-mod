// HOW IT WORKS — 5 numbered steps, alternating layout

const HowItWorks = () => {
  const isMobile = useIsMobile();
  const steps = [
    { n: '01', title: 'O cliente acessa o link', body: 'Você cola o link na bio do Instagram, no WhatsApp, no Google, no site ou em um QR Code.', tag: 'Sem app. Sem cadastro.' },
    { n: '02', title: 'Ele escolhe o serviço', body: 'Corte, barba, escova, limpeza de pele, banho e tosa, consulta, avaliação — qualquer serviço que você oferece.', tag: 'Categorias inteligentes' },
    { n: '03', title: 'Ele escolhe o profissional', body: 'Cada profissional tem sua própria agenda. O cliente escolhe com quem quer ser atendido e vê só os horários disponíveis.', tag: 'Agenda por profissional' },
    { n: '04', title: 'O agendamento entra na agenda', body: 'O horário é registrado na agenda configurada para o seu negócio. Sem digitar, sem confirmar, sem perder.', tag: 'Integra com Google Agenda' },
    { n: '05', title: 'O WhatsApp avisa todo mundo', body: 'Cliente recebe a confirmação. Empresa recebe o aviso. Profissional recebe o aviso. E no dia, o cliente recebe um lembrete automático.', tag: 'Automático · 24/7' },
  ];

  return (
    <section id="como-funciona" style={{
      background: 'var(--black)',
      color: 'var(--offwhite)',
      padding: isMobile ? '80px 0' : '140px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: isMobile ? '56px' : '96px' }}>
          <Eyebrow style={{ marginBottom: '20px' }}>Como funciona</Eyebrow>
          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(36px, 5.4vw, 80px)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: 'var(--offwhite)',
            margin: '24px auto 0',
            maxWidth: '900px',
          }}>
            Em <span style={{ color: 'var(--orange)' }}>5 passos</span>, o agendamento se resolve sozinho.
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          {!isMobile && (
            <div style={{
              position: 'absolute',
              top: 40, bottom: 40,
              left: '50%', transform: 'translateX(-50%)',
              width: '2px',
              background: 'repeating-linear-gradient(to bottom, var(--orange) 0 8px, transparent 8px 16px)',
              zIndex: 0,
            }} />
          )}

          {steps.map((s, i) => (
            <Step key={i} {...s} index={i} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Step = ({ n, title, body, tag, index, isMobile }) => {
  const isLeft = index % 2 === 0;
  const [hover, setHover] = React.useState(false);

  if (isMobile) {
    return (
      <div className="reveal" style={{
        display: 'flex', alignItems: 'flex-start', gap: '16px',
        marginBottom: index === 4 ? 0 : '24px',
      }}>
        <div style={{ flexShrink: 0, position: 'relative', width: 56, height: 56 }}>
          <img src="assets/asterisk-orange.png" alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', animation: 'spin-slow 18s linear infinite' }}
          />
          <span style={{
            position: 'relative',
            color: '#000',
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800, fontSize: '16px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            height: '100%',
          }}>{n}</span>
        </div>
        <div style={{
          background: 'var(--dark-2)',
          border: '1px solid rgba(242,238,229,0.1)',
          borderRadius: '20px',
          padding: '20px 24px',
          flex: 1,
        }}>
          <h3 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800, fontSize: '20px',
            letterSpacing: '-0.02em',
            marginBottom: '8px', lineHeight: 1.15,
          }}>{title}</h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: '14px',
            lineHeight: 1.6, color: 'rgba(242,238,229,0.7)', marginBottom: '12px',
          }}>{body}</p>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
            fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--orange)',
          }}>
            <span>→</span> {tag}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="reveal" style={{
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      gap: '40px',
      alignItems: 'center',
      marginBottom: index === 4 ? 0 : '64px',
      position: 'relative',
    }}>
      <div style={{
        gridColumn: isLeft ? 1 : 3,
        textAlign: isLeft ? 'right' : 'left',
        order: isLeft ? 0 : 2,
      }}>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            display: 'inline-block',
            background: hover ? 'var(--orange)' : 'var(--dark-2)',
            color: hover ? '#000' : 'var(--offwhite)',
            border: '1px solid rgba(242,238,229,0.1)',
            borderRadius: '24px',
            padding: '28px 32px',
            maxWidth: '440px',
            cursor: 'default',
            transition: 'all 250ms ease-out',
            transform: hover ? 'translateY(-4px)' : 'none',
            textAlign: 'left',
          }}
        >
          <h3 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800, fontSize: '26px',
            letterSpacing: '-0.02em',
            marginBottom: '12px', lineHeight: 1.1,
          }}>{title}</h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: '15px',
            lineHeight: 1.6,
            color: hover ? 'rgba(0,0,0,0.78)' : 'rgba(242,238,229,0.7)',
            marginBottom: '14px',
          }}>{body}</p>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
            fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: hover ? '#000' : 'var(--orange)',
          }}>
            <span>→</span> {tag}
          </span>
        </div>
      </div>

      <div style={{ gridColumn: 2, order: 1, position: 'relative', zIndex: 2 }}>
        <div style={{ width: 110, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <img src="assets/asterisk-orange.png" alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', animation: 'spin-slow 18s linear infinite' }}
          />
          <span style={{
            position: 'relative', color: '#000',
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800, fontSize: '30px', letterSpacing: '-0.02em',
          }}>{n}</span>
        </div>
      </div>

      <div style={{ gridColumn: isLeft ? 3 : 1, order: isLeft ? 2 : 0 }} />
    </div>
  );
};

window.HowItWorks = HowItWorks;
