function Breadcrumbs() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: "https://satalarsa.com" },
    { name: "Sahibinden Satılık Ev", url: "https://satalarsa.com#alanlarimiz" },
    { name: "2. El Araba", url: "https://satalarsa.com#alanlarimiz" },
    { name: "Arsa Yatırımı", url: "https://satalarsa.com#alanlarimiz" }
  ];

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb-list">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              {index === breadcrumbItems.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <>
                  <a href={item.url}>{item.name}</a>
                  <span className="breadcrumb-separator">›</span>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
      
      {/* Breadcrumb Schema JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        })}
      </script>
    </nav>
  );
}

export default Breadcrumbs;
