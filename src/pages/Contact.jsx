import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>İletişim</h1>
        <p>Proje detayları ve sorularınız için bizimle iletişime geçebilirsiniz</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info glass-panel">
          <h2>İletişim Bilgileri</h2>
          
          <div className="info-item">
            <div className="info-icon-wrapper">
              <MapPin className="info-icon" />
            </div>
            <div>
              <h3>Soma Bilim ve Sanat Merkezi (BİLSEM)</h3>
              <p>Kurtuluş Mah. İdman Sok. No: 12<br/>Soma / Manisa</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-wrapper">
              <Mail className="info-icon" />
            </div>
            <div>
              <h3>E-Posta Adresimiz</h3>
              <p>info@doganinsesiweb.org<br/>kerimbeyge@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-wrapper">
              <Phone className="info-icon" />
            </div>
            <div>
              <h3>Telefon</h3>
              <p>+90 (236) 613 00 00</p>
            </div>
          </div>
        </div>

        <div className="contact-map glass-panel">
          <div className="map-placeholder">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.804961917387!2d27.604118876403064!3d39.183707871660144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b98436cd970bc3%3A0x6d90ddafcb1f0ab9!2sSoma%20Bilim%20ve%20Sanat%20Merkezi!5e0!3m2!1str!2str!4v1703248383210!5m2!1str!2str" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy" 
               title="Soma Bilim ve Sanat Merkezi Konumu"
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
