// PROBLEM SECTION — chaotic chat blobs on cream bg

const ProblemSection = () => {
  const isMobile = useIsMobile();
  const messages = [
  { side: 'left', text: 'oi tem horário pra hoje?', time: '08:12', rot: -2, top: '4%', left: '4%' },
  { side: 'right', text: 'oiii, vou ver…', time: '09:48', rot: 1, top: '14%', right: '8%' },
  { side: 'left', text: 'pode ser amanhã?', time: '10:02', rot: -1, top: '24%', left: '10%' },
  { side: 'left', text: 'oi?', time: '12:30', rot: 3, top: '36%', left: '2%' },
  { side: 'right', text: 'desculpa! que horas?', time: '13:55', rot: -2, top: '46%', right: '4%' },
  { side: 'left', text: 'depois das 18h dá?', time: '15:20', rot: 2, top: '58%', left: '12%' },
  { side: 'left', text: 'eu tinha marcado pras 19h', time: '17:01', rot: -3, top: '70%', left: '4%' },
  { side: 'right', text: 'qual era seu nome mesmo?', time: '18:24', rot: 1, top: '80%', right: '6%' }];

  return (
    <section style={{
      background: 'var(--offwhite)',
      color: '#000',
      padding: isMobile ? '80px 0 100px' : '140px 0 160px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* big bg type */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontWeight: 800,
        fontSize: 'clamp(80px, 24vw, 360px)',
        color: 'rgba(0,0,0,0.04)',
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        BAGUNÇA.
      </div>

      <div className="container" style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '48px' : '64px',
        alignItems: 'center'
      }}>
        {/* LEFT — copy */}
        <div className="reveal">
          <Eyebrow color="#000">O prejuízo invisível</Eyebrow>
          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 72px)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: '#000',
            margin: '24px 0 32px'
          }}>
            Quanto <span style={{ color: 'var(--orange)' }}>custa</span> o atendimento <span style={{ color: 'var(--orange)' }}>manual?</span>
          </h2>

          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '17px', lineHeight: 1.65,
            color: 'rgba(0,0,0,0.78)',
            display: 'flex', flexDirection: 'column', gap: '18px'
          }}>
            <p>Cada mensagem esquecida, cada horário sem confirmação e cada cliente que some antes de marcar entra na conta. </p>
            <p>A agenda parece só uma parte do atendimento, mas na prática, ela decide quanto tempo você perde, quantos horários ficam vazios e quantos clientes deixam de fechar. </p>
            <p style={{ fontWeight: 700, color: '#000' }}>Organização também é faturamento.</p>
          </div>

          <div style={{
            marginTop: '40px',
            display: 'flex', flexWrap: 'wrap', gap: '12px'
          }}>
            {['Cliente esperando', 'Horário vazio', 'Resposta atrasada', 'Confirmação manual', 'Dinheiro escapando'].map((t, i) =>
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#000', color: 'var(--offwhite)',
              padding: '8px 14px', borderRadius: '999px',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px', fontWeight: 600
            }}>
                <span style={{ color: 'var(--orange)' }}>×</span> {t}
              </span>
            )}
          </div>
        </div>

        {/* RIGHT — chat chaos stage */}
        <div style={{
          position: 'relative',
          height: isMobile ? '380px' : '640px',
          width: '100%'
        }}>
          <img src="assets/duvida.png" alt=""
          style={{
            position: 'absolute',
            top: '38%', left: '45%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            animation: 'wiggle 1.4s ease-in-out infinite',
            objectFit: 'cover',
            width: isMobile ? '220px' : '400px',
            margin: isMobile ? '-120px 0 0 -80px' : '-230px 0px 0px -150px'
          }} />

          {messages.map((m, i) =>
          <div key={i} className="reveal"
          style={{
            position: 'absolute',
            top: m.top, left: m.left, right: m.right,
            transform: `rotate(${m.rot}deg)`,
            transition: `opacity 0.6s ${i * 0.08}s, transform 0.6s ${i * 0.08}s`,
            zIndex: 2
          }}>
              <div style={{
              background: m.side === 'left' ? '#fff' : '#DCF8C6',
              padding: '8px 12px',
              borderRadius: m.side === 'left' ? '4px 14px 14px 14px' : '14px 4px 14px 14px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: isMobile ? '11px' : '13px', color: '#0B1411',
              maxWidth: isMobile ? '160px' : '240px'
            }}>
                {m.text}
                <div style={{
                fontSize: '9px', color: '#888',
                textAlign: 'right', marginTop: '2px'
              }}>{m.time}</div>
              </div>
            </div>
          )}

          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: isMobile ? '120px' : '200px', fontWeight: 800,
            color: 'var(--orange)',
            opacity: 0.35,
            pointerEvents: 'none',
            zIndex: 3
          }}>×</div>
        </div>
      </div>
    </section>);

};

window.ProblemSection = ProblemSection;
