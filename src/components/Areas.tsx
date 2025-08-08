const AREAS = [
  { 
    key: 'tekne', 
    title: 'Premium Tekneler', 
    desc: 'Sahibinden satılık tekneler, yelkenli ve motorlu tekneler. Denizcilik uzmanlarımızla güvenli alım satım.',
    icon: '⛵',
    keywords: 'tekne satış, sahibinden tekne, 2. el tekne'
  },
  { 
    key: 'ev', 
    title: 'Sahibinden Satılık Evler', 
    desc: 'Sahibinden ev, villa, daire satışı. İstanbul, Bodrum, Antalya\'da emlak broker hizmetleri.',
    icon: '🏡',
    keywords: 'sahibinden ev, satılık ev, emlak broker'
  },
  { 
    key: 'araba', 
    title: '2. El Araba Alım Satım', 
    desc: '2. el araba fiyatları, premium otomobil alım satım. Otomobil broker uzmanlarımızla güvenli işlem.',
    icon: '🚗',
    keywords: '2. el araba, araba fiyatları, otomobil broker'
  },
  { 
    key: 'arsa', 
    title: 'Arsa Yatırımı', 
    desc: 'Yatırımlık arsa, sahibinden arsa satışı. Değer kazanacak konumlarda arsa broker hizmetleri.',
    icon: '🏞️',
    keywords: 'arsa yatırımı, sahibinden arsa, yatırımlık arsa'
  },
];

function Areas() {
  return (
    <section id="alanlarimiz" className="section">
      <div className="container">
        <h2>Alanlarımız</h2>
        <div className="grid">
          {AREAS.map((area) => (
            <div className="card" key={area.key}>
              <div className="card-body">
                <div className="card-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
                <div className="card-keywords">{area.keywords}</div>
                <button className="card-btn">Detayları Gör</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Areas;