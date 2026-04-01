import { MapPin, Mail, Phone } from 'lucide-react';
import './Contact.css';
import { useLanguage } from '../context/useLanguage';

const Contact = () => {
  const { copy } = useLanguage();

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="contact-kicker">{copy.contact.kicker}</div>
        <h1>{copy.contact.title}</h1>
        <p>{copy.contact.description}</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info glass-panel">
          <h2>{copy.contact.infoTitle}</h2>
          <p className="contact-intro">{copy.contact.infoIntro}</p>
          
          <div className="info-item">
            <div className="info-icon-wrapper">
              <MapPin className="info-icon" />
            </div>
            <div>
              <h3>{copy.contact.addressTitle}</h3>
              <p>{copy.contact.addressLines[0]}<br/>{copy.contact.addressLines[1]}</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-wrapper">
              <Mail className="info-icon" />
            </div>
            <div>
              <h3>{copy.contact.emailTitle}</h3>
              <p>{copy.contact.emailLabel} <a href="mailto:burrki@gmail.com">burrki@gmail.com</a></p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-wrapper">
              <Phone className="info-icon" />
            </div>
            <div>
              <h3>{copy.contact.phoneTitle}</h3>
              <p><a href="tel:+905544660476">+90 554 466 04 76</a></p>
            </div>
          </div>
        </div>

        <div className="contact-map glass-panel">
          <div className="map-caption">
            <span>{copy.contact.mapCaption}</span>
            <strong>{copy.contact.mapTitle}</strong>
          </div>
          <div className="map-placeholder">
             <iframe 
               src="https://www.google.com/maps?q=TURGUTALP%20MAH.%20GEYIK%20SK.%20NO52%20SOMA%20MANISA&output=embed"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy" 
               title={copy.contact.mapFrameTitle}
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
