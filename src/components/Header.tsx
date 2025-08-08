import { useState } from 'react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="brand">Broker Pazarlama</a>
        
        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <a href="#alanlarimiz" className="nav-link">Alanlarımız</a>
          <a href="#biz-kimiz" className="nav-link">Biz kimiz?</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menü"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a 
            href="#alanlarimiz" 
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Alanlarımız
          </a>
          <a 
            href="#biz-kimiz" 
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Biz kimiz?
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;