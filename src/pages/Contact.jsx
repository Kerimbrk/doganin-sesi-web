import { MapPin, Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="contact-kicker">Sorular, başvuru ve proje detayları</div>
        <h1>İletişim</h1>
        <p>Proje detayları ve sorularınız için bizimle iletişime geçebilirsiniz</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info glass-panel">
          <h2>İletişim Bilgileri</h2>
          <p className="contact-intro">Proje merkezi Soma Bilim ve Sanat Merkezi&apos;dir. En hızlı geri dönüş için e-posta kanalını kullanabilirsiniz.</p>
          
          <div className="info-item">
            <div className="info-icon-wrapper">
              <MapPin className="info-icon" />
            </div>
            <div>
              <h3>Soma Bilim ve Sanat Merkezi (BİLSEM)</h3>
              <p>TURGUTALP MAH. GEYİK SK. NO52<br/>SOMA / MANİSA</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-wrapper">
              <Mail className="info-icon" />
            </div>
            <div>
              <h3>Yürütücü E-Posta</h3>
              <p>Yürütücü e-posta: <a href="mailto:burrki@gmail.com">burrki@gmail.com</a></p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-wrapper">
              <Phone className="info-icon" />
            </div>
            <div>
              <h3>Telefon</h3>
              <p><a href="tel:+905544660476">+90 554 466 04 76</a></p>
            </div>
          </div>
        </div>

        <div className="contact-map glass-panel">
          <div className="map-caption">
            <span>Proje Merkezi</span>
            <strong>Soma Bilim ve Sanat Merkezi</strong>
          </div>
          <div className="map-placeholder">
             <iframe 
               src="https://www.google.com/maps?q=TURGUTALP%20MAH.%20GEYIK%20SK.%20NO52%20SOMA%20MANISA&output=embed"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy" 
               title="Turgutalp Mah. Geyik Sk. No52 Soma / Manisa Konumu"
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
