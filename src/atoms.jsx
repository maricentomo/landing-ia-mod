// Shared brand atoms used across components.
// Globally exposed via window so each Babel script can use them.

const Asterisk = ({ size = 24, color = 'orange', spin = false, className = '', style = {} }) => {
  const src = color === 'orange' ? 'assets/asterisk-orange.png'
            : color === 'black'  ? 'assets/asterisk-black.png'
            : color === 'offwhite' ? 'assets/asterisk-offwhite.png'
            : color === 'outline-orange' ? 'assets/asterisk-outline-orange.png'
            : 'assets/asterisk-outline-black.png';
  return (
    <img
      src={src}
      alt="*"
      className={className}
      style={{
        width: size, height: size, objectFit: 'contain',
        animation: spin ? 'spin-slow 14s linear infinite' : undefined,
        ...style,
      }}
    />
  );
};

const Eyebrow = ({ children, color = 'var(--orange)', style = {} }) => (
  <div style={{
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: '12px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    ...style,
  }}>
    <span style={{ width: 24, height: 1, background: color, display: 'inline-block' }} />
    {children}
  </div>
);

const Btn = ({ children, variant = 'primary', size = 'lg', onClick, style = {} }) => {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: '14px',
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontWeight: 800, letterSpacing: '-0.01em',
    border: 'none', cursor: 'pointer',
    borderRadius: '999px',
    transition: 'all 200ms ease-out',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  };
  const sizes = {
    lg: { padding: '20px 32px', fontSize: '17px' },
    md: { padding: '14px 24px', fontSize: '14px' },
  };
  const variants = {
    primary: {
      background: hover ? 'var(--orange-hover)' : 'var(--orange)',
      color: '#000',
      transform: hover ? 'translate(-2px, -2px)' : 'none',
      boxShadow: hover ? '6px 6px 0 #000' : '0px 0px 0 #000',
    },
    light: {
      background: hover ? '#FFF' : 'var(--offwhite)',
      color: '#000',
      transform: hover ? 'translate(-2px, -2px)' : 'none',
      boxShadow: hover ? '6px 6px 0 var(--orange)' : '0px 0px 0 var(--orange)',
    },
    dark: {
      background: hover ? '#222' : '#000',
      color: 'var(--offwhite)',
      transform: hover ? 'translate(-2px, -2px)' : 'none',
      boxShadow: hover ? '6px 6px 0 var(--orange)' : '0px 0px 0 var(--orange)',
    },
    outline: {
      background: 'transparent',
      color: hover ? 'var(--orange)' : 'var(--offwhite)',
      border: `2px solid ${hover ? 'var(--orange)' : 'rgba(242,238,229,0.3)'}`,
    },
  };
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{ ...base, ...sizes[size], ...variants[variant], ...style }}
    >
      {children}
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: '14px', height: '14px',
        transition: 'transform 200ms ease-out',
        transform: hover ? 'translateX(4px)' : 'translateX(0)',
      }}>→</span>
    </button>
  );
};

// WhatsApp-style chat bubble used in many places
const ChatBubble = ({ side = 'left', children, color, style = {} }) => {
  const bg = color || (side === 'left' ? '#FFFFFF' : '#DCF8C6');
  return (
    <div style={{
      maxWidth: '78%',
      alignSelf: side === 'left' ? 'flex-start' : 'flex-end',
      background: bg,
      color: '#0B1411',
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '14px',
      lineHeight: 1.45,
      padding: '10px 14px',
      borderRadius: side === 'left' ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
      boxShadow: '0 1px 1px rgba(0,0,0,0.08)',
      position: 'relative',
      ...style,
    }}>
      {children}
    </div>
  );
};

// Tiny "ping" badge used for animated pulse highlights
const Ping = ({ size = 12, color = 'var(--orange)', style = {} }) => (
  <span style={{
    display: 'inline-block', width: size, height: size, borderRadius: '50%',
    background: color, position: 'relative', flexShrink: 0,
    boxShadow: `0 0 0 0 ${color}`,
    animation: 'pulse-orange 1.6s ease-out infinite',
    ...style,
  }} />
);

// Marquee strip — used after Hero
const Marquee = () => {
  const items = [
    'Barbearias', 'Salões', 'Clínicas', 'Petshops', 'Studios',
    'Consultórios', 'Profissionais autônomos', 'Equipes',
  ];
  return (
    <div style={{
      background: 'var(--orange)',
      borderTop: '2px solid #000',
      borderBottom: '2px solid #000',
      padding: '18px 0',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    }}>
      <div style={{
        display: 'inline-flex', gap: '56px',
        animation: 'marquee 22s linear infinite',
      }}>
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: '20px',
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800, fontSize: '20px',
            color: '#000', letterSpacing: '-0.01em',
            textTransform: 'uppercase',
          }}>
            <Asterisk size={16} color="black" />
            {it}
          </span>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { Asterisk, Eyebrow, Btn, ChatBubble, Ping, Marquee });
