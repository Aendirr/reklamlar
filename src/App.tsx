import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import Hero from './components/Hero';
import Areas from './components/Areas';
import About from './components/About';
import Reviews from './components/Reviews';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import LeadForm from './components/LeadForm';

function App() {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <main>
        <Hero />
        <Areas />
        <About />
        <Reviews />
        <Blog />
        <FAQ />
        <LeadForm />
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="social-share">
              <h4>📱 Hızlı Paylaşım</h4>
              <div className="share-buttons">
                <a href="https://wa.me/?text=🏆%20Türkiye'nin%20%231%20Broker%20Uzmanı%20-%20https://satalarsa.com" target="_blank" className="share-btn whatsapp">
                  📱 WhatsApp'ta Paylaş
                </a>
                <a href="https://t.me/share/url?url=https://satalarsa.com&text=🏆%20Sahibinden%20Satılık%20Ev,%20Araba,%20Arsa%20Broker%20Uzmanı" target="_blank" className="share-btn telegram">
                  📬 Telegram'da Paylaş  
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>🏆 Sahibinden Satılık Ev, Araba, Arsa Uzmanı</h4>
              <p><strong>Sahibinden satılık ev</strong>, <strong>2. el araba</strong>, <strong>arsa yatırımı</strong> ve <strong>sahibinden tekne</strong> alım satımında Türkiye'nin #1 <strong>broker uzmanı</strong>. İstanbul, Ankara, İzmir'de güvenilir broker hizmetleri.</p>
            </div>
            <div className="footer-section">
              <h4>🔥 Broker Hizmetlerimiz</h4>
              <ul>
                <li><strong>Sahibinden Ev</strong> | Emlak Broker</li>
                <li><strong>2. El Araba</strong> | Otomobil Broker</li>
                <li><strong>Arsa Yatırımı</strong> | Arsa Broker</li>
                <li><strong>Sahibinden Tekne</strong> | Tekne Broker</li>
                <li><strong>Hızlı Satış</strong> | Şeffaf Komisyon</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>📞 İletişim | Broker Uzmanı</h4>
              <p>📞 <strong>+90 555 556 81 61</strong></p>
              <p>📧 <strong>info@satalarsa.com</strong></p>
              <p>🏢 <strong>İstanbul, Ankara, İzmir</strong></p>
              <p>⏰ <strong>7/24 Hizmet</strong></p>
              <p>💯 <strong>Güvenli Alım Satım</strong></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Satalarsa - Sahibinden Satılık Ev, Araba, Arsa | Güvenli Alım Satım Uzmanı. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;