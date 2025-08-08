const REVIEWS_DATA = [
  {
    name: "Mehmet Yılmaz",
    location: "İstanbul",
    rating: 5,
    text: "Sahibinden ev satışında en profesyonel broker ekibi! 3 gün içinde evi sattılar, komisyon oranı da çok makul. Kesinlikle tavsiye ederim.",
    service: "Emlak Broker",
    date: "2024-01-15"
  },
  {
    name: "Ayşe Demir", 
    location: "Ankara",
    rating: 5,
    text: "2. el araba değerlendirmesi çok hızlı ve doğruydu. Otomobil broker uzmanları gerçekten işinin ehli. Araç satışı 1 hafta sürdü!",
    service: "Otomobil Broker",
    date: "2024-01-20"
  },
  {
    name: "Ali Kaya",
    location: "İzmir", 
    rating: 5,
    text: "Arsa yatırımı konusunda en doğru rehberlik aldım. Aldığım arsa 6 ayda %40 değer kazandı. Profesyonel danışmanlık hizmeti!",
    service: "Arsa Yatırımı",
    date: "2024-02-01"
  },
  {
    name: "Fatma Öztürk",
    location: "Bodrum",
    rating: 5,
    text: "Sahibinden tekne satışında harika hizmet aldık. Denizcilik uzmanları teknemi en yüksek fiyata sattı. Çok memnunum!",
    service: "Tekne Broker", 
    date: "2024-02-10"
  }
];

function Reviews() {
  const averageRating = REVIEWS_DATA.reduce((sum, review) => sum + review.rating, 0) / REVIEWS_DATA.length;
  
  return (
    <section id="reviews" className="section">
      <div className="container">
        <h2>⭐ Müşteri Yorumları | Sahibinden Satılık Ev, Araba, Arsa Broker</h2>
        <div className="reviews-stats">
          <div className="rating-summary">
            <div className="rating-number">{averageRating.toFixed(1)}</div>
            <div className="rating-stars">
              {'⭐'.repeat(Math.floor(averageRating))}
            </div>
            <div className="rating-text">{REVIEWS_DATA.length} Müşteri Değerlendirmesi</div>
          </div>
        </div>
        
        <div className="reviews-grid">
          {REVIEWS_DATA.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="reviewer-name">{review.name}</div>
                  <div className="reviewer-location">{review.location}</div>
                  <div className="review-service">{review.service}</div>
                </div>
                <div className="review-rating">
                  {'⭐'.repeat(review.rating)}
                </div>
              </div>
              <div className="review-text">
                "{review.text}"
              </div>
              <div className="review-date">
                {new Date(review.date).toLocaleDateString('tr-TR')}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Reviews Schema JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Sahibinden Satılık Ev, Araba, Arsa Broker Uzmanı",
          "image": "https://satalarsa.com/logo.png",
          "@id": "https://satalarsa.com",
          "url": "https://satalarsa.com",
          "telephone": "+90XXXXXXXXX",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Broker Uzmanı",
            "addressLocality": "İstanbul",
            "addressCountry": "TR"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": averageRating.toFixed(1),
            "reviewCount": REVIEWS_DATA.length,
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": REVIEWS_DATA.map(review => ({
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": review.rating,
              "bestRating": "5",
              "worstRating": "1"
            },
            "author": {
              "@type": "Person",
              "name": review.name
            },
            "reviewBody": review.text,
            "datePublished": review.date
          }))
        })}
      </script>
    </section>
  );
}

export default Reviews;
