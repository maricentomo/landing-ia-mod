// TYPEBOT SIM — phone with demo video

const TypebotSim = () => {
  const isMobile = useIsMobile();
  const [step, setStep] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setStep(s => (s + 1) % 5), 3200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="demo" style={{
      background: 'var(--offwhite)',
      color: '#000',
      padding: isMobile ? '80px 0' : '140px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Asterisk size={400} color="orange" style={{
        position: 'absolute', top: '-100px', left: '-100px',
        opacity: 0.1, animation: 'spin-slow 40s linear infinite', zIndex: 0,
      }} />

      <div className="container" style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '48px' : '80px',
        alignItems: 'center',
      }}>
        <div className="reveal">
          <Eyebrow color="#000">Personalizado pra você</Eyebrow>
          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 72px)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: '#000',
            margin: '24px 0 28px',
          }}>
            Um chat <span style={{ color: 'var(--orange)' }}>a cara da sua marca.</span> Não um chatbot qualquer.
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '18px', lineHeight: 1.6,
            color: 'rgba(0,0,0,0.72)',
            marginBottom: '32px',
            maxWidth: '480px',
          }}>
            Cada detalhe é construído com a identidade do seu negócio, do visual ao texto. Seu cliente sente que é da sua marca, não de um sistema genérico.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
            {[
              { n: 1, t: 'Visual com as cores e logo do negócio' },
              { n: 2, t: 'Linguagem e tom adaptados à sua marca' },
              { n: 3, t: 'Serviços, preços e profissionais organizados' },
              { n: 4, t: 'Confirmação e lembretes automáticos' },
              { n: 5, t: 'Atualiza quando você precisar' },
            ].map((it, i) => (
              <button key={i}
                onClick={() => { setStep(i); setPaused(true); setTimeout(() => setPaused(false), 8000); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '14px 18px', borderRadius: '12px',
                  border: '2px solid ' + (step === i ? '#000' : 'transparent'),
                  background: step === i ? '#000' : 'transparent',
                  color: step === i ? 'var(--offwhite)' : '#000',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 250ms ease-out',
                  fontFamily: 'inherit',
                }}
              >
                <span style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: 'var(--orange)', color: '#000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800, fontSize: '13px', flexShrink: 0,
                }}>{it.n}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', fontWeight: 600 }}>{it.t}</span>
                {step === i && <span style={{ marginLeft: 'auto', color: 'var(--orange)' }}>●</span>}
              </button>
            ))}
          </div>
        </div>

        <PhoneMockup isMobile={isMobile} />
      </div>
    </section>
  );
};

const PhoneMockup = ({ isMobile }) => {
  const phoneW = isMobile ? Math.min(280, window.innerWidth - 64) : 340;
  const phoneH = isMobile ? Math.round(phoneW * (700 / 340)) : 700;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
      <div style={{
        position: 'absolute', bottom: '-40px',
        width: '70%', height: '40px',
        background: 'rgba(0,0,0,0.18)',
        borderRadius: '50%',
        filter: 'blur(20px)',
      }} />
      <div style={{
        width: phoneW, height: phoneH,
        background: '#000',
        borderRadius: '48px',
        padding: '14px',
        boxShadow: '0 30px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.5)',
        position: 'relative',
        animation: 'float-y 6s ease-in-out infinite',
      }}>
        {/* notch */}
        <div style={{
          position: 'absolute', top: '14px', left: '50%',
          transform: 'translateX(-50%)',
          width: '90px', height: '24px',
          background: '#000', borderRadius: '999px', zIndex: 5,
        }} />
        <div style={{
          width: '100%', height: '100%',
          background: '#000',
          borderRadius: '36px',
          overflow: 'hidden',
        }}>
          <video
            autoPlay loop muted playsInline
            webkit-playsinline="true"
            preload="auto"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          >
            <source src="uploads/chat.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

window.TypebotSim = TypebotSim;
