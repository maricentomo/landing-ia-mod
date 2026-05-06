const Nav = () => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Demo', href: '#demo' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLink = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled || menuOpen ? 'rgba(0,0,0,0.95)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(242,238,229,0.08)' : '1px solid transparent',
        transition: 'all 250ms ease-out',
      }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Asterisk size={32} color="orange" spin />
            <div style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800, fontSize: '18px', letterSpacing: '-0.02em',
              color: 'var(--offwhite)',
            }}>
              ia<span style={{ color: 'var(--orange)' }}>*</span>MOD
              <span style={{
                display: 'block', fontSize: '10px', fontWeight: 400,
                color: 'rgba(242,238,229,0.5)', letterSpacing: '0.18em',
                textTransform: 'uppercase', marginTop: '-2px',
              }}>Agenda Inteligente</span>
            </div>
          </div>

          {isMobile ? (
            <button
              onClick={() => setMenuOpen(o => !o)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', gap: '5px',
                padding: '8px',
              }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block', width: 24, height: 2,
                  background: 'var(--offwhite)',
                  borderRadius: '2px',
                  transition: 'all 250ms ease-out',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                    : i === 1 ? 'scaleX(0)'
                    : 'rotate(-45deg) translate(5px, -5px)'
                    : 'none',
                }} />
              ))}
            </button>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              {links.map(l => (
                <a key={l.href} href={l.href} style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: '14px',
                  fontWeight: 500, color: 'rgba(242,238,229,0.75)',
                  transition: 'color 200ms ease',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(242,238,229,0.75)'}
                >
                  {l.label}
                </a>
              ))}
              <Btn variant="primary" size="md" onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}>
                Quero minha agenda
              </Btn>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMobile && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 99,
          background: 'rgba(0,0,0,0.97)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '32px',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 250ms ease-out',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={(e) => { e.preventDefault(); handleLink(l.href); }}
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800, fontSize: '32px',
                color: 'var(--offwhite)',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </a>
          ))}
          <Btn variant="primary" size="lg" onClick={() => handleLink('#planos')}>
            Quero minha agenda
          </Btn>
        </div>
      )}
    </>
  );
};

window.Nav = Nav;
