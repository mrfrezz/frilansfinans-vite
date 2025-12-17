import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            <a href="/" className="logo">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="white"/>
                <path d="M12 14h16v3H12V14zm0 5h12v3H12v-3zm0 5h8v3h-8v-3z" fill="#04567D"/>
              </svg>
              Frilans Finans
            </a>
            
            <ul className="nav-links">
              <li><a href="#hur-fungerar" onClick={(e) => handleSmoothScroll(e, '#hur-fungerar')}>Så fungerar det</a></li>
              <li><a href="#fordelar" onClick={(e) => handleSmoothScroll(e, '#fordelar')}>Fördelar</a></li>
              <li><a href="#kalkylator" onClick={(e) => handleSmoothScroll(e, '#kalkylator')}>Räkna ut lön</a></li>
              <li><a href="#kontakt" onClick={(e) => handleSmoothScroll(e, '#kontakt')}>Kontakt</a></li>
            </ul>
            
            <div className="nav-cta">
              <a href="https://konto.frilansfinans.se">Logga in</a>
              <a href="https://konto.frilansfinans.se/register" className="btn btn-primary">Skapa konto</a>
            </div>

            <button 
              className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#hur-fungerar" onClick={(e) => handleSmoothScroll(e, '#hur-fungerar')}>Så fungerar det</a></li>
          <li><a href="#fordelar" onClick={(e) => handleSmoothScroll(e, '#fordelar')}>Fördelar</a></li>
          <li><a href="#kalkylator" onClick={(e) => handleSmoothScroll(e, '#kalkylator')}>Räkna ut lön</a></li>
          <li><a href="#kontakt" onClick={(e) => handleSmoothScroll(e, '#kontakt')}>Kontakt</a></li>
          <li><a href="https://konto.frilansfinans.se">Logga in</a></li>
        </ul>
        <a href="https://konto.frilansfinans.se/register" className="btn btn-primary">Skapa konto</a>
      </div>
    </>
  );
};

export default Navbar;
