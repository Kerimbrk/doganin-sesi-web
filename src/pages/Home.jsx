import React, { useState, useEffect } from 'react';
import './Home.css';
import heroImage from '../assets/images/hero_banner.png';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-06-29T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
              <span className="countdown-label">Kamp Başlangıcına Kalan:</span>
              <div className="countdown-timer">
                <div className="countdown-item">
                  <span className="num">{timeLeft.days}</span>
                  <span className="label">Gün</span>
                </div>
                <div className="countdown-item">
                  <span className="num">{timeLeft.hours}</span>
                  <span className="label">Saat</span>
                </div>
                <div className="countdown-item">
                  <span className="num">{timeLeft.minutes}</span>
                  <span className="label">Dak</span>
                </div>
                <div className="countdown-item">
                  <span className="num">{timeLeft.seconds}</span>
                  <span className="label">Sn</span>
                </div>
              </div>
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
