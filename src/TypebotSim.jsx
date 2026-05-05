// TYPEBOT SIM — animated phone showing booking flow
// Auto-cycles through 5 steps: service → professional → date → time → confirmation

const TypebotSim = () => {
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
      padding: '140px 0',
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
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}>
        <div className="reveal">
          <Eyebrow color="#000">Veja na prática</Eyebrow>
          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(40px, 5vw, 72px)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: '#000',
            margin: '24px 0 28px',
          }}>
            O cliente <span style={{ color: 'var(--orange)' }}>agenda sozinho</span>. Você acompanha.
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '18px', lineHeight: 1.6,
            color: 'rgba(0,0,0,0.72)',
            marginBottom: '32px',
            maxWidth: '480px',
          }}>
            Uma experiência guiada, conversacional, na cara da sua marca. O cliente abre, escolhe e pronto — em menos de 1 minuto.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
            {[
              { n: 1, t: 'Escolhe o serviço' },
              { n: 2, t: 'Escolhe o profissional' },
              { n: 3, t: 'Escolhe o dia' },
              { n: 4, t: 'Escolhe o horário' },
              { n: 5, t: 'Recebe a confirmação' },
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
                  fontWeight: 800, fontSize: '13px',
                  flexShrink: 0,
                }}>{it.n}</span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px', fontWeight: 600,
                }}>{it.t}</span>
                {step === i && (
                  <span style={{ marginLeft: 'auto', color: 'var(--orange)' }}>●</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Phone mockup */}
        <PhoneMockup step={step} />
      </div>
    </section>
  );
};

const PhoneMockup = ({ step }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
      {/* shadow blob */}
      <div style={{
        position: 'absolute', bottom: '-40px',
        width: '70%', height: '40px',
        background: 'rgba(0,0,0,0.18)',
        borderRadius: '50%',
        filter: 'blur(20px)',
      }} />

      {/* Phone frame */}
      <div style={{
        width: '340px', height: '700px',
        background: '#000',
        borderRadius: '48px',
        padding: '14px',
        boxShadow: '0 30px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.5)',
        position: 'relative',
        animation: 'float-y 6s ease-in-out infinite',
      }}>
        {/* speaker */}
        <div style={{
          position: 'absolute', top: '14px', left: '50%',
          transform: 'translateX(-50%)',
          width: '90px', height: '24px',
          background: '#000', borderRadius: '999px',
          zIndex: 5,
        }} />
        {/* screen */}
        <div style={{
          width: '100%', height: '100%',
          background: 'var(--offwhite)',
          borderRadius: '36px',
          overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
        }}>
          {/* status bar */}
          <div style={{
            padding: '14px 28px 6px',
            display: 'flex', justifyContent: 'space-between',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '12px', fontWeight: 700, color: '#000',
          }}>
            <span>9:41</span>
            <span>● ● ●</span>
          </div>
          {/* business header */}
          <div style={{
            padding: '12px 20px 14px',
            display: 'flex', alignItems: 'center', gap: '12px',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              background: '#000',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Asterisk size={22} color="orange" />
            </div>
            <div>
              <div style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800, fontSize: '15px',
                letterSpacing: '-0.01em', color: '#000',
              }}>Barbearia Modo</div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
                color: '#1A8B47', display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1A8B47' }} />
                online · agendamento aberto
              </div>
            </div>
          </div>

          {/* messages area */}
          <div style={{
            flex: 1, padding: '16px',
            display: 'flex', flexDirection: 'column', gap: '10px',
            overflow: 'hidden',
            background: 'linear-gradient(#F2EEE5, #E8E2D5)',
          }}>
            <BotStep step={step} />
          </div>

          {/* input bar */}
          <div style={{
            padding: '10px 14px',
            background: '#fff',
            borderTop: '1px solid rgba(0,0,0,0.08)',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <div style={{
              flex: 1,
              background: 'var(--offwhite)',
              borderRadius: '999px',
              padding: '10px 14px',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px', color: '#999',
            }}>Toque para responder…</div>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'var(--orange)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#000', fontWeight: 800,
            }}>↑</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BotStep = ({ step }) => {
  // each step renders bot prompt + user options/answer
  return (
    <div key={step} style={{
      display: 'flex', flexDirection: 'column', gap: '8px',
      animation: 'fade-up 0.4s ease-out',
    }}>
      <BotMsg>
        {step === 0 && 'Oi! Sou a agenda da Modo. Qual serviço você quer?'}
        {step === 1 && 'Boa! Com qual profissional?'}
        {step === 2 && 'Em qual dia?'}
        {step === 3 && 'Que horas fica bom?'}
        {step === 4 && 'Tudo certo! ✓'}
      </BotMsg>

      {step === 0 && (
        <Options items={[
          { label: 'Corte de cabelo', sel: false },
          { label: 'Barba', sel: false },
          { label: 'Corte + Barba', sel: true },
          { label: 'Sobrancelha', sel: false },
        ]} />
      )}
      {step === 1 && (
        <UserBubble>Corte + Barba</UserBubble>
      )}
      {step === 1 && (
        <Options items={[
          { label: 'João Pedro', avatar: 'JP', sel: true },
          { label: 'Marcos Silva', avatar: 'MS', sel: false },
          { label: 'Tudo bem qualquer um', avatar: '★', sel: false },
        ]} avatar />
      )}
      {step === 2 && <UserBubble>Com João Pedro</UserBubble>}
      {step === 2 && <DatePicker />}
      {step === 3 && <UserBubble>Quinta, 9 de maio</UserBubble>}
      {step === 3 && <TimePicker />}
      {step === 4 && <UserBubble>14:30</UserBubble>}
      {step === 4 && <ConfirmCard />}
    </div>
  );
};

const BotMsg = ({ children }) => (
  <div style={{
    alignSelf: 'flex-start', maxWidth: '78%',
    background: '#fff',
    color: '#000',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '13px', lineHeight: 1.5,
    padding: '10px 14px',
    borderRadius: '4px 14px 14px 14px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
  }}>{children}</div>
);

const UserBubble = ({ children }) => (
  <div style={{
    alignSelf: 'flex-end', maxWidth: '78%',
    background: 'var(--orange)',
    color: '#000',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '13px', fontWeight: 600,
    padding: '8px 14px',
    borderRadius: '14px 4px 14px 14px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
    animation: 'slide-up-in 0.35s ease-out',
  }}>{children}</div>
);

const Options = ({ items, avatar = false }) => (
  <div style={{
    display: 'flex', flexDirection: 'column', gap: '6px',
    alignSelf: 'flex-start', width: '90%',
  }}>
    {items.map((it, i) => (
      <div key={i} style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        background: it.sel ? '#000' : '#fff',
        color: it.sel ? 'var(--offwhite)' : '#000',
        border: '1px solid ' + (it.sel ? '#000' : 'rgba(0,0,0,0.1)'),
        borderRadius: '12px',
        padding: '10px 12px',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '13px', fontWeight: 600,
        animation: `pop-in 0.35s ${i * 0.08}s both`,
      }}>
        {avatar && (
          <div style={{
            width: 28, height: 28, borderRadius: '50%',
            background: it.sel ? 'var(--orange)' : '#000',
            color: it.sel ? '#000' : 'var(--orange)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800, fontSize: '11px',
          }}>{it.avatar}</div>
        )}
        <span style={{ flex: 1 }}>{it.label}</span>
        {it.sel && <span style={{ color: 'var(--orange)' }}>✓</span>}
      </div>
    ))}
  </div>
);

const DatePicker = () => {
  const days = [
    { d: 'SEG', n: 5, sel: false, dis: false },
    { d: 'TER', n: 6, sel: false, dis: true },
    { d: 'QUA', n: 7, sel: false, dis: false },
    { d: 'QUI', n: 9, sel: true, dis: false },
    { d: 'SEX', n: 10, sel: false, dis: false },
  ];
  return (
    <div style={{
      alignSelf: 'flex-start', width: '90%',
      background: '#fff', borderRadius: '14px', padding: '12px',
      boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
      animation: 'pop-in 0.4s ease-out',
    }}>
      <div style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
        color: '#666', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.1em',
        marginBottom: '10px',
      }}>Maio 2026</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
        {days.map((d, i) => (
          <div key={i} style={{
            background: d.sel ? 'var(--orange)' : (d.dis ? 'rgba(0,0,0,0.06)' : 'var(--offwhite)'),
            color: d.dis ? 'rgba(0,0,0,0.3)' : '#000',
            borderRadius: '10px',
            padding: '10px 4px',
            textAlign: 'center',
            fontFamily: "'DM Sans', sans-serif",
            border: d.sel ? '2px solid #000' : '2px solid transparent',
            textDecoration: d.dis ? 'line-through' : 'none',
          }}>
            <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em' }}>{d.d}</div>
            <div style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800, fontSize: '18px',
              letterSpacing: '-0.02em', marginTop: '2px',
            }}>{d.n}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TimePicker = () => {
  const slots = [
    { t: '09:00', dis: true },
    { t: '10:30', dis: false },
    { t: '13:00', dis: false },
    { t: '14:30', sel: true },
    { t: '16:00', dis: false },
    { t: '17:30', dis: true },
  ];
  return (
    <div style={{
      alignSelf: 'flex-start', width: '90%',
      background: '#fff', borderRadius: '14px', padding: '12px',
      boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
      animation: 'pop-in 0.4s ease-out',
    }}>
      <div style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
        color: '#666', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.1em',
        marginBottom: '10px',
      }}>Quinta · 9 mai</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
        {slots.map((s, i) => (
          <div key={i} style={{
            background: s.sel ? 'var(--orange)' : (s.dis ? 'rgba(0,0,0,0.04)' : 'var(--offwhite)'),
            color: s.dis ? 'rgba(0,0,0,0.3)' : '#000',
            borderRadius: '10px',
            padding: '10px 8px',
            textAlign: 'center',
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700, fontSize: '14px',
            border: s.sel ? '2px solid #000' : '2px solid transparent',
            textDecoration: s.dis ? 'line-through' : 'none',
          }}>{s.t}</div>
        ))}
      </div>
    </div>
  );
};

const ConfirmCard = () => (
  <div style={{
    alignSelf: 'flex-start', width: '92%',
    background: '#000',
    color: 'var(--offwhite)',
    borderRadius: '14px',
    padding: '16px',
    border: '2px solid var(--orange)',
    animation: 'pop-in 0.5s ease-out',
  }}>
    <div style={{
      display: 'flex', alignItems: 'center', gap: '8px',
      marginBottom: '12px',
    }}>
      <div style={{
        width: 24, height: 24, borderRadius: '50%',
        background: 'var(--orange)', color: '#000',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 800,
      }}>✓</div>
      <span style={{
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontWeight: 800, fontSize: '14px',
        textTransform: 'uppercase', letterSpacing: '0.04em',
      }}>Agendamento confirmado</span>
    </div>
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      gap: '8px',
      fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
    }}>
      {[
        ['Serviço', 'Corte + Barba'],
        ['Profissional', 'João Pedro'],
        ['Data', 'Qui · 9 mai'],
        ['Horário', '14:30'],
      ].map(([k, v]) => (
        <div key={k}>
          <div style={{ color: 'rgba(242,238,229,0.5)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>{k}</div>
          <div style={{ fontWeight: 700, color: 'var(--offwhite)' }}>{v}</div>
        </div>
      ))}
    </div>
    <div style={{
      marginTop: '12px', padding: '8px 10px',
      background: 'rgba(37, 211, 102, 0.18)',
      borderRadius: '8px',
      fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
      color: '#7CE0A8',
      display: 'flex', alignItems: 'center', gap: '6px',
    }}>
      <span>📱</span> Enviamos a confirmação no seu WhatsApp
    </div>
  </div>
);

window.TypebotSim = TypebotSim;
