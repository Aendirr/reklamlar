function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Sahibinden Satılık Ev, Araba, Arsa | Güvenli Alım Satım</h1>
          <p>
            <strong>2. el araba fiyatları</strong>, <strong>sahibinden ev</strong> ve <strong>arsa yatırımı</strong> 
            konularında 15 yıllık deneyimli broker ekibimiz. Premium tekneler, lüks konutlar, 
            prestijli araçlar ile <strong>güvenli alım satım</strong> garantisi. 
            <strong>Yatırım danışmanlığı</strong> hizmetlerimizle portföyünüzü büyütün.
          </p>
          <a href="#form" className="btn btn-primary">
            <span>🎯</span>
            Ücretsiz Değerlendirme Al
          </a>
        </div>
        <div className="hero-visual">
          <div className="hero-stats-container">
            <div className="stats-badge">✨ 15 Yıllık Güven</div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-icon">🏆</div>
                <div className="stat-content">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Başarılı Anlaşma</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">⭐</div>
                <div className="stat-content">
                  <span className="stat-number">15</span>
                  <span className="stat-label">Yıllık Deneyim</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">💯</div>
                <div className="stat-content">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Müşteri Memnuniyeti</span>
                </div>
              </div>
            </div>
            <div className="trust-indicators">
              <span className="trust-item">🛡️ Yasal Güvence</span>
              <span className="trust-item">⚡ 24h Yanıt</span>
              <span className="trust-item">🎯 Ücretsiz Danışmanlık</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;