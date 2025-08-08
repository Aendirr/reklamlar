import { useState } from 'react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="brand">Broker Pazarlama</a>
        
        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <a href="#alanlarimiz" className="nav-link" title="Sahibinden Satılık Ev, Araba, Arsa Hizmetleri">Hizmetlerimiz</a>
          <a href="#biz-kimiz" className="nav-link" title="Broker Uzmanı Hakkında">Hakkımızda</a>
          <a href="#blog" className="nav-link" title="Emlak & Otomobil Blog">Blog</a>
          <a href="#reviews" className="nav-link" title="⭐ Müşteri Yorumları">Yorumlar</a>
          <a href="#form" className="nav-link" title="Ücretsiz Değerlendirme">İletişim</a>
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
            title="Sahibinden Satılık Ev, Araba, Arsa"
          >
            Hizmetlerimiz
          </a>
          <a 
            href="#biz-kimiz" 
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
            title="Broker Uzmanı Hakkında"
          >
            Hakkımızda
          </a>
          <a 
            href="#blog" 
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
            title="Emlak & Otomobil Blog"
          >
            Blog
          </a>
          <a 
            href="#reviews" 
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
            title="⭐ Müşteri Yorumları"
          >
            Yorumlar
          </a>
          <a 
            href="#form" 
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
            title="Ücretsiz Değerlendirme"
          >
            İletişim
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;