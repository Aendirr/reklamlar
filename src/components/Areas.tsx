const AREAS = [
  { 
    key: 'tekne', 
    title: '🛥️ Sahibinden Tekne | Premium Tekne Satış', 
    desc: 'Sahibinden satılık tekneler, yelkenli ve motorlu tekneler. İstanbul, İzmir, Bodrum\'da denizcilik uzmanı broker ekibimizle güvenli tekne alım satım.',
    icon: '⛵',
    keywords: 'sahibinden tekne, tekne satış İstanbul, premium tekne broker'
  },
  { 
    key: 'ev', 
    title: '🏠 Sahibinden Satılık Ev | Emlak Broker', 
    desc: 'Sahibinden ev, villa, daire, residence satışı. İstanbul, Ankara, İzmir, Bodrum, Antalya\'da profesyonel emlak broker hizmetleri. Hızlı satış garantisi.',
    icon: '🏡',
    keywords: 'sahibinden ev İstanbul, emlak broker, satılık daire'
  },
  { 
    key: 'araba', 
    title: '🚗 2. El Araba | Otomobil Broker', 
    desc: '2. el araba fiyatları, sahibinden otomobil, premium araç alım satım. Expert otomobil broker uzmanlarımızla güvenli araç değerlendirme ve satış.',
    icon: '🚗',
    keywords: '2. el araba fiyatları, sahibinden araba, otomobil broker'
  },
  { 
    key: 'arsa', 
    title: '🏞️ Arsa Yatırımı | Sahibinden Arsa', 
    desc: 'Yatırımlık arsa, sahibinden arsa satışı, imar durumu net arsalar. İstanbul, Ankara çevresinde değer kazanacak konumlarda arsa broker hizmetleri.',
    icon: '🏞️',
    keywords: 'arsa yatırımı İstanbul, sahibinden arsa, yatırımlık arsa'
  },
];

function Areas() {
  return (
    <section id="alanlarimiz" className="section">
      <div className="container">
        <h2>🏆 Sahibinden Satılık Ev, Araba, Arsa Broker Hizmetlerimiz | 2024</h2>
        <div className="grid">
          {AREAS.map((area) => (
            <div className="card" key={area.key}>
              <div className="card-body">
                <div className="card-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
                <div className="card-keywords">{area.keywords}</div>
                <a href="#form" className="card-btn">Detayları Gör</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Areas;