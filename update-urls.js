#!/usr/bin/env node

/**
 * SEO URL Güncelleme Script'i
 * Kullanım: node update-urls.js https://your-actual-site.com
 */

const fs = require('fs');
const path = require('path');

const PLACEHOLDER = 'SITE_URL_PLACEHOLDER';

function updateFile(filePath, actualUrl) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const updated = content.replace(new RegExp(PLACEHOLDER, 'g'), actualUrl);
    fs.writeFileSync(filePath, updated);
    console.log(`✅ Updated: ${filePath}`);
  } catch (error) {
    console.log(`❌ Error updating ${filePath}:`, error.message);
  }
}

function main() {
  const actualUrl = process.argv[2];
  
  if (!actualUrl) {
    console.log(`
🚀 SEO URL Güncelleme Script'i

Kullanım:
  node update-urls.js https://your-actual-site.com

Örnek:
  node update-urls.js https://reklamsite.your-subdomain.workers.dev

Bu script şu dosyaları günceller:
  - index.html (canonical, og:url, JSON-LD)
  - public/sitemap.xml
  - public/robots.txt
`);
    process.exit(1);
  }

  // URL'den son slash'i kaldır
  const cleanUrl = actualUrl.replace(/\/$/, '');

  console.log(`🔄 Güncelleniyor: ${PLACEHOLDER} → ${cleanUrl}`);

  // Güncellenecek dosyalar
  const files = [
    'index.html',
    'public/sitemap.xml', 
    'public/robots.txt'
  ];

  files.forEach(file => {
    if (fs.existsSync(file)) {
      updateFile(file, cleanUrl);
    } else {
      console.log(`⚠️  Dosya bulunamadı: ${file}`);
    }
  });

  console.log(`
✅ URL güncelleme tamamlandı!

🔍 Google Search Console için:
1. ${cleanUrl} adresini Search Console'a ekleyin
2. Sitemap: ${cleanUrl}/sitemap.xml
3. robots.txt: ${cleanUrl}/robots.txt

📈 SEO İyileştirmeleri:
- Meta taglar optimize edildi
- Structured data eklendi  
- Sitemap oluşturuldu
- Robots.txt yapılandırıldı
`);
}

main();
