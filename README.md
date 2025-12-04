# Broker Pazarlama Sitesi (React) 

Beyaz temalı, Rubik yazı tipli basit bir tanıtım sitesi. En altta yer alan form ile bilgileri Google Sheets'e kaydeder.

## Özellikler
- Alanlarımız: Tekne, Ev, Araba, Arsa
- Biz kimiz?: Kısa tanıtım
- Form: İsim soyisim, telefon, e‑posta ve alan seçimi
- Google Sheets'e kayıt (Google Apps Script üzerinden)

## Geliştirme

1) Bağımlılıkları yükleyin:

```bash
npm install
```

2) Çalıştırın:

```bash
npm run dev
```

3) Derleme:

```bash
npm run build
```

## Google Sheets Entegrasyonu

Form verilerini Google Sheets'e yazmak için bir Google Apps Script Web Uygulaması yayınlayın.

### Environment Variables Kurulumu

1. **Proje kökünde `.env` dosyası oluşturun:**
```bash
VITE_SHEETS_ENDPOINT=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

2. **`.env` dosyası GitHub'a yüklenmez** (güvenlik nedeniyle `.gitignore`'da)
3. **Production deployment için** hosting platformunuzda environment variable'ı ayarlayın

### Apps Script Kurulum Adımları

1. Google Drive'da yeni bir Google E-Tablosu oluşturun. Adı ör. `Leads`.
2. Üst menüden: Uzantılar → Apps Script.
3. Aşağıdaki kodu yapıştırın ve kaydedin:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet(); // Bu script, tabloya bağlı
    var sheet = ss.getSheetByName('Leads') || ss.insertSheet('Leads');

    // Başlık satırı yoksa ekle
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Tarih', 'İsim Soyisim', 'Telefon', 'E-posta', 'Alan', 'UserAgent']);
    }

    sheet.appendRow([
      new Date(),
      data.fullName,
      data.phone,
      data.email,
      data.category,
      data.userAgent,
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Dağıt → Yeni dağıtım → Tür: Web uygulaması
   - Yürütme: Mevcut kullanıcı
   - Erişim: Herkese açık
   - Dağıt ve size verilen URL'yi kopyalayın.

5. Proje kökünde `.env` dosyası oluşturun ve URL'yi ekleyin:

```
VITE_SHEETS_ENDPOINT=WEB_UYGULAMASI_URLINIZ
```

6. Geliştirme sunucunuzu yeniden başlatın.

> Notlar:
> - CORS preflight'ı önlemek için istek `text/plain` olarak gönderilir. Script tarafında `JSON.parse(e.postData.contents)` ile çözümlenir.
> - Eğer script'i bağımsız (standalone) oluşturduysanız `getActiveSpreadsheet()` yerine `openById('SHEET_ID')` kullanın.

## Özelleştirme
- Yazı tipi: Rubik (14px taban). `index.html` ve `src/styles.css` üzerinden güncelleyebilirsiniz.
- Renkler: `src/styles.css` içindeki CSS değişkenleri.

- Sayfa bölümleri: `src/components/*` klasöründe.

