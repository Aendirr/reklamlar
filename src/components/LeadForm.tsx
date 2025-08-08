import { useState } from 'react';

type Category = 'tekne' | 'ev' | 'araba' | 'arsa';

function LeadForm() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState<Category>('ev');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const endpoint = 'https://script.google.com/macros/s/AKfycbwXzNW7s7ch070FDds8utatnyqNYZ1XIXtKa9Xy1QpNy4kJUoMmmV097OzjaUmx5awK/exec';

  function validate(): string | null {
    if (!fullName.trim() || !phone.trim() || !email.trim() || !category) {
      return 'Lütfen tüm alanları doldurun.';
    }
    const emailOk = /.+@.+\..+/.test(email);
    if (!emailOk) return 'Lütfen geçerli bir e‑posta adresi girin.';
    const phoneOk = /^[0-9+()\-\s]{7,}$/.test(phone);
    if (!phoneOk) return 'Lütfen geçerli bir telefon numarası girin.';
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus('error');
      setMessage(error);
      return;
    }


    setStatus('loading');
    setMessage('');

    // IP adresini al
    let ipAddress = 'Bilinmiyor';
    try {
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
      ipAddress = ipData.ip;
    } catch (ipError) {
      console.warn('IP adresi alınamadı:', ipError);
    }

    const payload = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      category,
      userAgent: navigator.userAgent,
      ipAddress: ipAddress,
      ts: new Date().toISOString(),
    };

    try {
      // CORS preflight tetiklememek için text/plain ile gönderiyoruz
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        mode: 'cors',
      });

      // Apps Script genelde 200 döner. Başarısız olsa bile 200 olabilir; sade kontrol
      if (res.ok) {
        setStatus('success');
        setMessage('Başvurunuz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.');
        setFullName('');
        setPhone('');
        setEmail('');
        setCategory('ev');
      } else {
        throw new Error('Sunucu hatası');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMessage('Gönderim sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    }
  }

  return (
    <section id="form" className="section">
      <div className="container narrow">
        <h2>Ücretsiz Broker Değerlendirmesi</h2>
        <p className="muted">
          <strong>Sahibinden satılık</strong> portföyümüzdeki <strong>2. el araba fiyatları</strong>, 
          <strong>emlak</strong> ve <strong>arsa yatırımı</strong> fırsatlarını sizinle paylaşabilmemiz için 
          bilgilerinizi bırakın. <strong>Yatırım danışmanı</strong> uzmanlarımız 24 saat içinde 
          sizinle iletişime geçecek.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="fullName">İsim Soyisim</label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Adınız Soyadınız"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="phone">Telefon</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="05xx xxx xx xx"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">E-posta</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ornek@eposta.com"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="category">İlgilendiğiniz Alan</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value as Category)}
              required
            >
              <option value="tekne">Tekne</option>
              <option value="ev">Ev</option>
              <option value="araba">Araba</option>
              <option value="arsa">Arsa</option>
            </select>
          </div>

          <button className="btn btn-primary" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Gönderiliyor…' : 'Başvur'}
          </button>

          {status !== 'idle' && (
            <div className={`form-status ${status}`} aria-live="polite">{message}</div>
          )}
        </form>
      </div>
    </section>
  );
}

export default LeadForm;