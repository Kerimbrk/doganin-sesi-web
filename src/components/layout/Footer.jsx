import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logos">
          <h4>Destekleyen Kurum ve Kuruluşlar</h4>
          <div className="logo-grid">
            <div className="logo-placeholder">Soma Kaymakamlığı</div>
            <div className="logo-placeholder">Balıkesir Üniversitesi</div>
            <div className="logo-placeholder">Soma Belediyesi</div>
            <div className="logo-placeholder">Doğa Koruma ve Milli Parklar</div>
            <div className="logo-placeholder">Soma İlçe Milli Eğitim Md.</div>
            <div className="logo-placeholder">Spil Dağı Milli Parkı</div>
            <div className="logo-placeholder">Soma Orman İşletme Md.</div>
            <div className="logo-placeholder">Soma İlçe Sağlık Md.</div>
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
