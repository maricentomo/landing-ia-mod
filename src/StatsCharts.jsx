// STATS CHARTS — 3 animated charts on offwhite bg

const useInView = (threshold = 0.2) => {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect(); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
};

const useAnim = (go, duration = 1400) => {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    if (!go) return;
    const t0 = performance.now();
    const tick = t => {
      const prog = Math.min((t - t0) / duration, 1);
      setP(1 - Math.pow(1 - prog, 3));
      if (prog < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [go]);
  return p;
};

const cardStyle = (go, delay = 0) => ({
  background: 'var(--offwhite)',
  border: '2px solid var(--orange)',
  borderRadius: '20px',
  padding: '28px',
  display: 'flex',
  flexDirection: 'column',
  opacity: go ? 1 : 0,
  transform: go ? 'translateY(0)' : 'translateY(24px)',
  transition: `opacity 0.6s ${delay}ms, transform 0.6s ${delay}ms`,
});

// ── Chart 1: Response time horizontal bars ─────
const ResponseChart = ({ go }) => {
  const p = useAnim(go, 1600);
  const bars = [
    { label: 'Até 5 min',    pct: 95,   display: '90–100%', highlight: true },
    { label: '30 minutos',   pct: 12.5, display: '10–15%',  highlight: false },
    { label: '1 a 2 horas',  pct: 5,    display: '< 5%',    highlight: false },
    { label: '+ de 24h',     pct: 1,    display: '≈ 0%',    highlight: false },
  ];

  return (
    <div style={cardStyle(go, 0)}>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '8px' }}>01</div>
      <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '19px', letterSpacing: '-0.02em', color: '#000', lineHeight: 1.1, marginBottom: '4px' }}>Tempo de resposta</div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(0,0,0,0.4)', marginBottom: '24px' }}>Chance de qualificação</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
        {bars.map((bar, i) => (
          <div key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '7px' }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(0,0,0,0.7)', fontWeight: 500 }}>{bar.label}</span>
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '15px', fontWeight: 800, color: bar.highlight ? '#000' : 'var(--orange)' }}>{bar.display}</span>
            </div>
            <div style={{ height: '9px', background: 'rgba(0,0,0,0.07)', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                width: `${bar.pct * p}%`,
                background: bar.highlight ? '#000' : 'var(--orange)',
                borderRadius: '999px',
                opacity: bar.highlight ? 1 : Math.max(0.35, 1 - i * 0.22),
              }} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.07)', fontFamily: "'DM Sans', sans-serif", fontSize: '12px', lineHeight: 1.55, color: 'rgba(0,0,0,0.45)', fontStyle: 'italic' }}>
        Depois de 30 minutos, o cliente já esfriou.
      </div>
    </div>
  );
};

// ── Chart 2: No-show stacked bars ──────────────
const NoShowChart = ({ go }) => {
  const p = useAnim(go, 1400);
  const segments = [
    { label: 'Clínicas médicas',     shows: 70, noshow: 30 },
    { label: 'Estética e beleza',    shows: 75, noshow: 25 },
    { label: 'Consultoria',          shows: 80, noshow: 20 },
    { label: 'Odontologia',          shows: 85, noshow: 15 },
  ];

  return (
    <div style={cardStyle(go, 100)}>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '8px' }}>02</div>
      <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '19px', letterSpacing: '-0.02em', color: '#000', lineHeight: 1.1, marginBottom: '4px' }}>Faltas e no-shows</div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(0,0,0,0.4)', marginBottom: '16px' }}>Por segmento</div>

      <div style={{ display: 'flex', gap: '14px', marginBottom: '20px' }}>
        {[['#111', 'Comparece'], ['var(--orange)', 'Falta']].map(([bg, label]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: 9, height: 9, borderRadius: '2px', background: bg, flexShrink: 0 }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(0,0,0,0.55)' }}>{label}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
        {segments.map((seg, i) => (
          <div key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '7px' }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(0,0,0,0.7)', fontWeight: 500 }}>{seg.label}</span>
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '14px', fontWeight: 800, color: 'var(--orange)' }}>{seg.noshow}% faltam</span>
            </div>
            <div style={{ height: '10px', borderRadius: '999px', overflow: 'hidden', display: 'flex', background: 'rgba(0,0,0,0.07)' }}>
              <div style={{ width: `${seg.shows * p}%`, background: '#111', flexShrink: 0 }} />
              <div style={{ width: `${seg.noshow * p}%`, background: 'var(--orange)', flexShrink: 0 }} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.07)', fontFamily: "'DM Sans', sans-serif", fontSize: '12px', lineHeight: 1.55, color: 'rgba(0,0,0,0.45)', fontStyle: 'italic' }}>
        Sem confirmação e lembrete, o horário marcado vira horário perdido.
      </div>
    </div>
  );
};

// ── Chart 3: Time usage donut ──────────────────
const TimeChart = ({ go }) => {
  const size = 168, r = 60;
  const circ = 2 * Math.PI * r;
  const p = useAnim(go, 2000);

  const prodPct = 0.725;
  const manPct  = 0.275;
  const gap = 4;

  const prodLen = Math.max(0, circ * prodPct * p - gap);
  const manLen  = Math.max(0, circ * manPct  * p - gap);
  const manStartDeg = -90 + 360 * prodPct * p;

  return (
    <div style={{ ...cardStyle(go, 200), alignItems: 'center' }}>
      <div style={{ width: '100%' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '8px' }}>03</div>
        <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '19px', letterSpacing: '-0.02em', color: '#000', lineHeight: 1.1, marginBottom: '4px' }}>Atendimento manual</div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(0,0,0,0.4)', marginBottom: '24px' }}>Uso do tempo — 160h/mês</div>
      </div>

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ marginBottom: '20px' }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth="14" />
        <circle cx={size/2} cy={size/2} r={r} fill="none"
          stroke="#111" strokeWidth="14" strokeLinecap="round"
          strokeDasharray={`${prodLen} ${circ}`} strokeDashoffset={0}
          style={{ transform: 'rotate(-90deg)', transformOrigin: `${size/2}px ${size/2}px` }}
        />
        <circle cx={size/2} cy={size/2} r={r} fill="none"
          stroke="var(--orange)" strokeWidth="14" strokeLinecap="round"
          strokeDasharray={`${manLen} ${circ}`} strokeDashoffset={0}
          style={{ transform: `rotate(${manStartDeg}deg)`, transformOrigin: `${size/2}px ${size/2}px` }}
        />
        <text x={size/2} y={size/2 - 6} textAnchor="middle"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '30px', fill: 'var(--orange)' }}>44h</text>
        <text x={size/2} y={size/2 + 14} textAnchor="middle"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fill: 'rgba(0,0,0,0.45)' }}>por mês</text>
      </svg>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[['#111', 'Trabalho produtivo', '116h', '#000'], ['var(--orange)', 'Atendimento manual', '44h', 'var(--orange)']].map(([bg, label, val, valColor]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: bg, flexShrink: 0 }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(0,0,0,0.65)' }}>{label}</span>
            </div>
            <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '15px', fontWeight: 800, color: valColor }}>{val}</span>
          </div>
        ))}
      </div>

      <div style={{ width: '100%', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.07)', fontFamily: "'DM Sans', sans-serif", fontSize: '12px', lineHeight: 1.55, color: 'rgba(0,0,0,0.45)', fontStyle: 'italic' }}>
        Quase 1/3 do mês pode ir embora no WhatsApp.
      </div>
    </div>
  );
};

// ── Section ────────────────────────────────────
const StatsCharts = () => {
  const isMobile = useIsMobile();
  const [ref, inView] = useInView();

  return (
    <section ref={ref} style={{
      background: 'var(--black)',
      color: 'var(--offwhite)',
      padding: isMobile ? '0 0 80px' : '0 0 120px',
      position: 'relative',
    }}>
      <div className="container">
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: isMobile ? '40px' : '56px' }} />

        <h2 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(28px, 4vw, 48px)',
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          textTransform: 'uppercase',
          color: 'var(--offwhite)',
          maxWidth: '580px',
          marginBottom: isMobile ? '40px' : '56px',
        }}>
          Cliente esperando é{' '}
          <span style={{ color: 'var(--orange)' }}>cliente perdido.</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '20px',
        }}>
          <ResponseChart go={inView} />
          <NoShowChart   go={inView} />
          <TimeChart     go={inView} />
        </div>
      </div>
    </section>
  );
};

window.StatsCharts = StatsCharts;
