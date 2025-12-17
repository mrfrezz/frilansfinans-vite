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
              <img src="/assets/logo-white.svg" alt="Frilans Finans" />
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
