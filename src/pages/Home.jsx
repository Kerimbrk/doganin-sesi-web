import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CalendarDays, Leaf, MapPin, Users } from 'lucide-react';
import './Home.css';
import heroImage from '../assets/images/hero_banner.jpg';

const Home = () => {
  const targetDateLabel = '29 Haziran 2026';
  const programCards = [
    {
      title: 'Proje Hakkında',
      description: 'Amaç, hedef kitle ve eğitim yaklaşımımızı kısa ve anlaşılır biçimde inceleyin.',
      icon: BookOpen,
      link: '/hakkimizda',
      cta: 'Detayları İncele',
    },
    {
      title: 'Etkinlik Takvimi',
      description: '5 günlük kamp akışını, saha çalışmalarını ve atölye planını adım adım görün.',
      icon: CalendarDays,
      link: '/program',
      cta: 'Takvimi Aç',
    },
    {
      title: 'Başvuru ve Kayıt',
      description: 'Katılım şartlarını öğrenin, belgeleri inceleyin ve başvuru formuna ulaşın.',
      icon: Users,
      link: '/basvuru',
      cta: 'Başvuruya Git',
    },
  ];

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
            <div className="hero-kicker">Sevgili öğrencilerimiz ve öğretmenlerimiz</div>
            <h1>Doğanın Sesi</h1>
            <h2>İklim Değişikliğini Anlamak ve Öğrenmek I</h2>
            <p>Doğa eğitimi, bilim, sanat ve ekolojik okuryazarlığı bir araya getiren bu kamp portalında proje içeriğini, takvimi ve başvuru adımlarını tek yerden keşfedin.</p>
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
              <span className="countdown-date">{targetDateLabel} tarihinde başlıyor</span>
            </div>
            <div className="hero-highlights">
              <span>36 öğrenci</span>
              <span>5 gün</span>
              <span>4 ekosistem</span>
            </div>
            <div className="hero-actions">
              <Link to="/basvuru" className="btn-primary">Başvuru Şartları</Link>
              <Link to="/program" className="btn-secondary">Etkinlik Programı</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="portal-section">
        <div className="container">
          <div className="program-grid">
            {programCards.map(({ title, description, icon: Icon, link, cta }) => (
              <article key={title} className="program-card glass-panel">
                <div className="program-icon">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={link} className="text-link">
                  {cta}
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-showcase">
        <div className="container showcase-grid">
          <article className="showcase-card feature-story glass-panel">
            <span className="section-kicker">Mutlaka Göz Atın</span>
            <h3>Disiplinlerarası doğa eğitimi ile sahada öğrenme</h3>
            <p>Fen, sanat ve felsefeyi bir araya getiren kamp yapımız sayesinde öğrenciler yalnızca bilgi edinmiyor; gözlem yapıyor, tartışıyor ve üretiyor.</p>
            <div className="showcase-meta">
              <span><Leaf size={16} /> Spil Dağı ve Kozak Yaylası</span>
              <span><Users size={16} /> 7. sınıf öğrencileri</span>
            </div>
            <Link to="/hakkimizda" className="showcase-button">Program Yaklaşımını İncele</Link>
          </article>

          <article className="showcase-card literacy-card glass-panel">
            <span className="section-kicker">Ekolojik Okuryazarlık</span>
            <h3>Çocuklarla iklim değişikliğini konuşmanın yaratıcı yolları</h3>
            <p>Katılımcılar iklim krizini korku diliyle değil; keşif, merak, bilimsel düşünme ve ortak sorumluluk duygusuyla ele alacak bir öğrenme deneyimi yaşayacak.</p>
            <blockquote>
              “Bugünün doğa kaşifleri, yarının sürdürülebilir dünyasının elçileri olacak.”
            </blockquote>
            <Link to="/ekibimiz" className="text-link">
              Eğitmen Kadrosunu Gör
              <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>

      <section className="calendar-section">
        <div className="container calendar-grid">
          <article className="calendar-card glass-panel">
            <span className="section-kicker">Doğa Takvimi</span>
            <h3>29 Haziran - 3 Temmuz 2026</h3>
            <p>Kamp; Soma BİLSEM, Sevişler Baraj Gölü, Kırkağaç Çam Korusu, Kozak Yaylası ve Spil Dağı&apos;nda gerçekleşecek etkinliklerle ilerler.</p>
            <div className="calendar-highlights">
              <span><CalendarDays size={16} /> 25 etkinlik</span>
              <span><MapPin size={16} /> 5 farklı uygulama alanı</span>
            </div>
            <Link to="/program" className="showcase-button">Takvimin Tamamını Aç</Link>
          </article>

          <article className="calendar-card contact-cta glass-panel">
            <span className="section-kicker">Bize Ulaşın</span>
            <h3>Sorularınız için proje ekibimiz burada</h3>
            <p>Başvuru koşulları, takvim ve içerik hakkında daha fazla bilgi almak için iletişim sayfasından bize ulaşabilirsiniz.</p>
            <Link to="/iletisim" className="text-link">
              İletişim Bilgilerine Git
              <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Home;
