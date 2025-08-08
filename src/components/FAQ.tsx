const FAQ_DATA = [
  {
    question: "Sahibinden satılık ev alım satımında komisyon oranınız nedir?",
    answer: "Sahibinden ev, villa, daire alım satımında komisyon oranımız %1-3 arasındadır. Emlak broker hizmetimiz şeffaf fiyatlandırma ile İstanbul, Ankara, İzmir'de en uygun komisyon oranlarını sunmaktadır."
  },
  {
    question: "2. el araba değerlendirmesi ne kadar sürede tamamlanır?",
    answer: "2. el araba fiyat değerlendirmesi ve ekspertiz raporu 24 saat içinde tamamlanır. Otomobil broker uzmanlarımız sahibinden araba alım satımında hızlı ve güvenilir hizmet verir."
  },
  {
    question: "Arsa yatırımı danışmanlığı hangi bölgelerde veriyorsunuz?",
    answer: "Arsa yatırım danışmanlığı hizmetimiz İstanbul, Ankara, İzmir, Bursa ve tüm Marmara bölgesinde verilmektedir. Sahibinden arsa satışı ve yatırımlık arsa konularında uzmanız."
  },
  {
    question: "Sahibinden tekne alım satımında hangi hizmetler sunuyorsunuz?",
    answer: "Sahibinden tekne satışı, yelkenli tekne, motorlu tekne alım satımı, tekne ekspertizi ve denizcilik hukuki danışmanlığı hizmetleri sunmaktayız. İstanbul, İzmir, Bodrum'da tekne broker hizmetimiz mevcuttur."
  },
  {
    question: "Broker hizmetinizde hangi garantiler sunuyorsunuz?",
    answer: "Güvenli alım satım garantisi, şeffaf komisyon, hızlı satış garantisi, yasal güvence ve 15 yıllık deneyim garantisi sunmaktayız. Tüm işlemlerimizde %100 müşteri memnuniyeti hedefliyoruz."
  }
];

function FAQ() {
  return (
    <section className="section section-muted">
      <div className="container narrow">
        <h2>🤔 Sık Sorulan Sorular | Sahibinden Satılık Ev, Araba, Arsa</h2>
        <div className="faq-container">
          {FAQ_DATA.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* FAQ Schema JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQ_DATA.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </section>
  );
}

export default FAQ;
