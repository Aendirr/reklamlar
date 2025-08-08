const BLOG_POSTS = [
  {
    id: 1,
    title: "2024 Sahibinden Satılık Ev Fiyatları: İstanbul'da Hangi Semtler Yükselecek?",
    excerpt: "İstanbul'da sahibinden satılık ev piyasası 2024'te hangi yönde gidecek? Emlak broker uzmanları olarak analiz ettik. Beylikdüzü, Başakşehir ve Esenyurt'ta fiyat artışları bekleniyor.",
    category: "Emlak Analizi",
    date: "2024-01-15",
    author: "Emlak Broker Uzmanı",
    readTime: "8 dakika",
    tags: ["sahibinden ev", "emlak fiyatları", "İstanbul emlak", "2024 analizi"],
    keywords: "sahibinden satılık ev İstanbul, emlak fiyatları 2024, sahibinden ev fiyatları"
  },
  {
    id: 2,
    title: "2. El Araba Alım Satımında Dikkat Edilmesi Gerekenler",
    excerpt: "2. el araba alırken hangi noktalara dikkat etmelisiniz? Otomobil broker uzmanımız 15 yıllık deneyimini paylaşıyor. Ekspertiz raporu, hasarsız araç tespiti ve fiyat pazarlığı ipuçları.",
    category: "Otomobil Rehberi", 
    date: "2024-01-20",
    author: "Otomobil Broker Uzmanı",
    readTime: "6 dakika",
    tags: ["2. el araba", "araba alım satım", "otomobil broker", "araç ekspertizi"],
    keywords: "2. el araba fiyatları, sahibinden araba, otomobil broker, araç değerlendirme"
  },
  {
    id: 3,
    title: "Arsa Yatırımı 2024: Hangi Bölgeler Altın Değerinde?",
    excerpt: "Arsa yatırımında hangi bölgeler en karlı? İstanbul, Ankara ve İzmir çevresinde yatırımlık arsa alanları. Imar planları, ulaşım projeleri ve gelecek potansiyeli analizi.",
    category: "Yatırım Danışmanlığı",
    date: "2024-02-01", 
    author: "Arsa Yatırım Uzmanı",
    readTime: "10 dakika",
    tags: ["arsa yatırımı", "yatırımlık arsa", "imar planları", "emlak yatırımı"],
    keywords: "arsa yatırımı İstanbul, sahibinden arsa, yatırımlık arsa, arsa broker"
  },
  {
    id: 4,
    title: "Sahibinden Tekne Satışı: Denizcilik Uzmanından İpuçları",
    excerpt: "Tekne satışında hangi faktörler fiyatı etkiler? Bodrum, Çeşme ve Marmaris'te tekne piyasası. Sahibinden tekne satarken dikkat edilecek hukuki durumlar ve ekspertiz süreci.",
    category: "Tekne & Denizcilik",
    date: "2024-02-10",
    author: "Tekne Broker Uzmanı", 
    readTime: "7 dakika",
    tags: ["sahibinden tekne", "tekne satış", "denizcilik", "tekne broker"],
    keywords: "sahibinden tekne, tekne satış Bodrum, tekne broker, denizcilik hukuk"
  }
];

function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container">
        <h2>📰 SEO Blog | Sahibinden Satılık Ev, Araba, Arsa Rehberi</h2>
        <p className="section-intro">
          <strong>Broker uzmanlarımızdan</strong> güncel piyasa analizleri, <strong>yatırım tavsiyeleri</strong> 
          ve <strong>alım satım rehberleri</strong>. Sahibinden satılık ev, 2. el araba ve arsa yatırımı 
          konularında uzman görüşleri.
        </p>
        
        <div className="blog-grid">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-header">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{new Date(post.date).toLocaleDateString('tr-TR')}</span>
              </div>
              <h3 className="blog-title">
                <a href={`#blog-${post.id}`}>{post.title}</a>
              </h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-meta">
                <span className="blog-author">👤 {post.author}</span>
                <span className="blog-read-time">⏱️ {post.readTime}</span>
              </div>
              <div className="blog-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="blog-tag">#{tag}</span>
                ))}
              </div>
              <a href={`#blog-${post.id}`} className="blog-read-more">
                Devamını Oku →
              </a>
            </article>
          ))}
        </div>
      </div>
      
      {/* Blog Article Schema JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Sahibinden Satılık Ev, Araba, Arsa Blog",
          "description": "Sahibinden satılık ev, 2. el araba, arsa yatırımı konularında uzman broker rehberleri",
          "url": "https://satalarsa.com#blog",
          "publisher": {
            "@type": "Organization",
            "name": "Broker Pazarlama",
            "url": "https://satalarsa.com"
          },
          "blogPost": BLOG_POSTS.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "datePublished": post.date,
            "dateModified": post.date,
            "keywords": post.keywords,
            "articleSection": post.category,
            "wordCount": post.readTime.replace(' dakika', '') * 200,
            "timeRequired": `PT${post.readTime.replace(' dakika', '')}M`,
            "url": `https://satalarsa.com#blog-${post.id}`,
            "image": "https://satalarsa.com/blog-image.jpg",
            "publisher": {
              "@type": "Organization", 
              "name": "Broker Pazarlama",
              "url": "https://satalarsa.com"
            }
          }))
        })}
      </script>
    </section>
  );
}

export default Blog;
