// HERO — animated, big mixed-color headline + DOM mascot + WhatsApp confirmation popup

const Hero = () => {
  const isMobile = useIsMobile();
  const [time, setTime] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTime((t) => t + 1), 100);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'var(--black)',
      paddingTop: isMobile ? '100px' : '140px',
      paddingBottom: '80px',
      overflow: 'hidden'
    }}>
      {/* floating asterisks bg */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <Asterisk size={120} color="outline-orange" style={{ position: 'absolute', top: '14%', left: '4%', opacity: 0.18, animation: 'spin-slow 32s linear infinite' }} />
        <Asterisk size={80} color="outline-black" style={{ position: 'absolute', top: '70%', left: '10%', opacity: 0.22, animation: 'float-y 6s ease-in-out infinite', filter: 'invert(1) opacity(0.18)' }} />
        <Asterisk size={64} color="outline-orange" style={{ position: 'absolute', top: '22%', right: '8%', opacity: 0.25, animation: 'spin-rev 18s linear infinite' }} />
        <Asterisk size={140} color="outline-orange" style={{ position: 'absolute', bottom: '8%', right: '4%', opacity: 0.12, animation: 'spin-slow 40s linear infinite' }} />

        {/* dotted grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(242,238,229,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 75%)'
        }} />
      </div>

      <div className="container" style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1.15fr 1fr',
        gap: isMobile ? '48px' : '64px',
        alignItems: 'center'
      }}>

        {/* LEFT — copy */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            background: 'rgba(253, 92, 2, 0.12)',
            border: '1px solid rgba(253, 92, 2, 0.4)',
            borderRadius: '999px',
            padding: '8px 16px',
            marginBottom: '32px'
          }}>
            <Ping size={8} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '12px',
              fontWeight: 600, color: 'var(--orange)',
              letterSpacing: '0.14em', textTransform: 'uppercase'
            }}>
              Agenda Inteligente · IA MOD
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: isMobile ? 'clamp(44px, 12vw, 72px)' : 'clamp(48px, 6.4vw, 96px)',
            lineHeight: 0.92,
            letterSpacing: '-0.035em',
            textTransform: 'uppercase',
            color: 'var(--offwhite)',
            marginBottom: '32px'
          }}>
            <span style={{ display: 'block' }}>Pare de perder</span>
            <span style={{ display: 'block' }}>
              clientes <span style={{ color: 'var(--orange)', fontStyle: 'italic' }}>no</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '14px', flexWrap: 'wrap' }}>
              <span style={{
                color: 'var(--black)', background: 'var(--orange)',
                padding: '0 18px 8px', borderRadius: '12px',
                display: 'inline-block', transform: 'rotate(-2deg)'
              }}>
                WhatsApp.
              </span>
            </span>
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? '17px' : '20px', lineHeight: 1.55,
            color: 'rgba(242,238,229,0.75)',
            maxWidth: '540px',
            marginBottom: '40px'
          }}>
            Uma agenda online com a cara do seu negócio.
            O cliente acessa um link, escolhe serviço, profissional e horário —
            e o WhatsApp avisa todo mundo automaticamente.
          </p>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            <Btn variant="primary" size={isMobile ? 'md' : 'lg'} onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}>
              Quero minha agenda
            </Btn>
            <Btn variant="outline" size={isMobile ? 'md' : 'lg'} onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver demonstração
            </Btn>
          </div>

          {/* Stat row */}
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            {[
            { k: 'Sem app', v: 'só um link' },
            { k: '24/7', v: 'cliente agenda sozinho' },
            { k: 'Auto', v: 'avisos no WhatsApp' }].
            map((s, i) =>
            <div key={i} style={{
              paddingLeft: '16px',
              borderLeft: '2px solid var(--orange)'
            }}>
                <div style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800, fontSize: '24px',
                color: 'var(--offwhite)', letterSpacing: '-0.02em'
              }}>{s.k}</div>
                <div style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
                color: 'rgba(242,238,229,0.55)'
              }}>{s.v}</div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT — animated stage with DOM + popup */}
        {!isMobile && <HeroStage time={time} />}
      </div>
    </section>);

};

const HeroStage = ({ time }) => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio: '1 / 1.05',
      maxWidth: '560px',
      margin: '0 auto'
    }}>
      {/* big orange asterisk halo */}
      <div style={{
        position: 'absolute',
        inset: '-8% -4% -4% -8%',
        zIndex: 0
      }}>
        <img src="assets/ast-creme.png" alt="" style={{
          width: '100%', height: '100%',
          objectFit: 'contain',
          opacity: 0.95,
          animation: 'spin-slow 22s linear infinite'
        }} />
      </div>

      {/* inner cream disc */}
      <div style={{
        position: 'absolute',
        inset: '12%',
        borderRadius: '50%',
        background: 'var(--offwhite)',
        zIndex: 1, opacity: "100", width: "0px", height: "0px"
      }} />

      {/* DOM mascot with phone */}
      <img src="assets/ativo-87-descanso.png" alt="DOM"
      style={{
        position: 'absolute',
        inset: '14%',
        width: '72%', height: '72%',
        objectFit: 'contain',
        zIndex: 2,
        filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.18))',
        animation: 'float-y 5s ease-in-out infinite'
      }} />

      {/* Floating "novo agendamento" pill (top-right) */}
      <div style={{
        position: 'absolute',
        top: '8%',
        right: '-4%',
        background: '#fff',
        borderRadius: '14px',
        padding: '12px 14px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
        display: 'flex', alignItems: 'center', gap: '12px',
        zIndex: 5,
        animation: 'slide-up-in 0.6s 0.4s both, float-y 4s ease-in-out 1s infinite',
        minWidth: '200px',
        border: '2px solid #000'
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: '#25D366',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          animation: 'ring 2.4s ease-in-out infinite'
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </div>
        <div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
            color: '#666', textTransform: 'uppercase', letterSpacing: '0.08em',
            fontWeight: 600
          }}>WhatsApp</div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
            color: '#000', fontWeight: 700
          }}>✓ Agendamento confirmado</div>
        </div>
      </div>

      {/* Floating service tag (left) */}
      <div style={{
        position: 'absolute',
        top: '42%',
        left: '-8%',
        background: '#000',
        color: 'var(--offwhite)',
        borderRadius: '14px',
        padding: '12px 16px',
        boxShadow: '0 8px 22px rgba(0,0,0,0.4)',
        zIndex: 5,
        animation: 'slide-up-in 0.6s 0.8s both, float-y 5s ease-in-out 1.5s infinite',
        border: '2px solid var(--orange)',
        minWidth: '170px'
      }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: '10px',
          color: 'var(--orange)', textTransform: 'uppercase',
          letterSpacing: '0.16em', fontWeight: 700, marginBottom: '4px'
        }}>Próximo horário</div>
        <div style={{
          fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800,
          fontSize: '18px', letterSpacing: '-0.01em'
        }}>Hoje · 14:30</div>
        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: '12px',
          color: 'rgba(242,238,229,0.6)'
        }}>Corte + Barba</div>
      </div>

      {/* Floating profissional avatar (bottom-right) */}
      <div style={{
        position: 'absolute',
        bottom: '4%',
        right: '0%',
        background: 'var(--offwhite)',
        borderRadius: '14px',
        padding: '10px 14px 10px 10px',
        boxShadow: '0 8px 22px rgba(0,0,0,0.3)',
        zIndex: 5,
        display: 'flex', alignItems: 'center', gap: '10px',
        animation: 'slide-up-in 0.6s 1.2s both, float-y 4.5s ease-in-out 0.5s infinite',
        border: '2px solid #000'
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: '#000',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--orange)',
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800, fontSize: '14px'
        }}>JP</div>
        <div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: '12px',
            fontWeight: 700, color: '#000'
          }}>João Pedro</div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: '10px',
            color: '#666'
          }}>Disponível</div>
        </div>
      </div>

      {/* sparkles */}
      <div style={{
        position: 'absolute', top: '6%', left: '20%', zIndex: 4,
        animation: 'spin-slow 6s linear infinite'
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--orange)">
          <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
        </svg>
      </div>
      <div style={{
        position: 'absolute', bottom: '20%', left: '8%', zIndex: 4,
        animation: 'spin-rev 8s linear infinite'
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--orange)">
          <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
        </svg>
      </div>
    </div>);

};

window.Hero = Hero;
