import React from 'react';
import './Home.css';
import heroImage from '../assets/images/hero_banner.png';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content glass-panel">
            <h1>Doğanın Sesi</h1>
            <h2>İklim Değişikliğini Anlamak ve Öğrenmek I</h2>
            <p>Sanayi devriminden günümüze uzanan ekolojik krizi ve biyoçeşitlilik kaybını disiplinlerarası doğa eğitimiyle keşfedin.</p>
            <div className="hero-actions">
              <button className="btn-primary">Başvuru Şartları</button>
              <button className="btn-secondary">Etkinlik Programı</button>
            </div>
            <div className="countdown">
              <span>Kamp Başlangıcına Kalan: </span>
              <strong>453 Gün</strong>
            </div>
          </div>
        </div>
      </section>
      
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Biz Ne Yapıyoruz?</h2>
          <div className="features-grid">
            <div className="feature-card glass-panel">
              <h3>Disiplinlerarası Eğitim</h3>
              <p>Fen, felsefe ve sanatın birleştiği zengin bir doğa eğitimi programı ile iklim değişikliğinin etkilerini yerinde inceliyoruz.</p>
            </div>
            <div className="feature-card glass-panel">
              <h3>Dört Farklı Ekosistem</h3>
              <p>Spil Dağı, Kozak Yaylası, Kırkağaç Çam Korusu ve Sevişler Baraj Gölü'nde uygulamalı saha/laboratuvar çalışmaları.</p>
            </div>
            <div className="feature-card glass-panel">
              <h3>Topluma Yaygınlaştırma</h3>
              <p>Öğrendiklerimizi okullarımızda ve çevremizde uygulayarak sürdürülebilir bir gelecek için farkındalık elçileri oluyoruz.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
