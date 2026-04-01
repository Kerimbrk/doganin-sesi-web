import React from 'react';
import './Footer.css';
import './Logos.css';

// Logo Imports
import logoKaymakamlik from '../../assets/images/logos/soma_kaymakamlik.png';
import logoUni from '../../assets/images/logos/balikesir_uni.png';
import logoBelediye from '../../assets/images/logos/soma_belediye.png';
import logoDKMP from '../../assets/images/logos/dkmp.png';
import logoMEB from '../../assets/images/logos/soma_meb.png';
import logoSpil from '../../assets/images/logos/spil_dag.png';
import logoOrman from '../../assets/images/logos/soma_orman.png';
import logoSaglik from '../../assets/images/logos/soma_saglik.png';

const institutions = [
  { name: 'Soma Kaymakamlığı', src: logoKaymakamlik },
  { name: 'Balıkesir Üniversitesi', src: logoUni },
  { name: 'Soma Belediyesi', src: logoBelediye },
  { name: 'Doğa Koruma ve Milli Parklar', src: logoDKMP },
  { name: 'Soma İlçe Milli Eğitim Md.', src: logoMEB },
  { name: 'Spil Dağı Milli Parkı', src: logoSpil },
  { name: 'Soma Orman İşletme Md.', src: logoOrman },
  { name: 'Soma İlçe Sağlık Md.', src: logoSaglik },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logos">
          <h4>Destekleyen Kurum ve Kuruluşlar</h4>
          <div className="logo-grid">
            {institutions.map((inst, index) => (
              <div key={index} className="footer-logo-box">
                <img 
                  src={inst.src} 
                  alt={inst.name} 
                  className="footer-inst-logo" 
                  onError={(e) => e.target.style.display='none'}
                />
                <span className="footer-logo-text-fallback">{inst.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Doğanın Sesi: İklim Değişikliğini Anlamak ve Öğrenmek I. TÜBİTAK 4004 Projesi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
