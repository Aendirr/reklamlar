import Header from './components/Header';
import Hero from './components/Hero';
import Areas from './components/Areas';
import About from './components/About';
import LeadForm from './components/LeadForm';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Areas />
        <About />
        <LeadForm />
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Broker Pazarlama</h4>
              <p>Sahibinden satılık ev, 2. el araba, arsa yatırımı ve tekne alım satımında Türkiye'nin güvenilir broker uzmanı.</p>
            </div>
            <div className="footer-section">
              <h4>Hizmetlerimiz</h4>
              <ul>
                <li>Emlak Broker</li>
                <li>2. El Araba Alım Satım</li>
                <li>Arsa Yatırım Danışmanlığı</li>
                <li>Premium Tekne Satış</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>İletişim</h4>
              <p>📞 +90 XXX XXX XX XX</p>
              <p>📧 info@brokerpazarlama.com</p>
              <p>🏢 İstanbul, Türkiye</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Broker Pazarlama - Sahibinden Satılık Ev, Araba, Arsa | Güvenli Alım Satım Uzmanı. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;