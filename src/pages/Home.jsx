import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CalendarDays, Leaf, MapPin, Users } from 'lucide-react';
import './Home.css';
import heroImage from '../assets/images/hero_banner.jpg';
import { useLanguage } from '../context/useLanguage';

const Home = () => {
  const { language, copy } = useLanguage();
  const targetDateLabel = copy.home.targetDateLabel;
  const programCards = [
    {
      title: copy.home.cards[0].title,
      description: copy.home.cards[0].description,
      icon: BookOpen,
      link: '/hakkimizda',
      cta: copy.home.cards[0].cta,
    },
    {
      title: copy.home.cards[1].title,
      description: copy.home.cards[1].description,
      icon: CalendarDays,
      link: '/program',
      cta: copy.home.cards[1].cta,
    },
    {
      title: copy.home.cards[2].title,
      description: copy.home.cards[2].description,
      icon: Users,
      link: '/basvuru',
      cta: copy.home.cards[2].cta,
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
            <div className="hero-kicker">{copy.home.heroKicker}</div>
            <h1>{copy.home.heroTitle}</h1>
            <h2>{copy.home.heroSubtitle}</h2>
            <p>{copy.home.heroDescription}</p>
            <div className="countdown">
              <span className="countdown-label">{copy.home.countdownLabel}</span>
              <div className="countdown-timer">
                <div className="countdown-item">
                  <span className="num">{timeLeft.days}</span>
                  <span className="label">{copy.home.countdownUnits.days}</span>
                </div>
                <div className="countdown-item">
                  <span className="num">{timeLeft.hours}</span>
                  <span className="label">{copy.home.countdownUnits.hours}</span>
                </div>
                <div className="countdown-item">
                  <span className="num">{timeLeft.minutes}</span>
                  <span className="label">{copy.home.countdownUnits.minutes}</span>
                </div>
                <div className="countdown-item">
                  <span className="num">{timeLeft.seconds}</span>
                  <span className="label">{copy.home.countdownUnits.seconds}</span>
                </div>
              </div>
              <span className="countdown-date">{language === 'en' ? `${copy.home.countdownDateSuffix} ${targetDateLabel}` : `${targetDateLabel} ${copy.home.countdownDateSuffix}`}</span>
            </div>
            <div className="hero-highlights">
              {copy.home.highlights.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="hero-actions">
              <Link to="/basvuru" className="btn-primary">{copy.home.actions.application}</Link>
              <Link to="/program" className="btn-secondary">{copy.home.actions.program}</Link>
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
            <span className="section-kicker">{copy.home.feature.kicker}</span>
            <h3>{copy.home.feature.title}</h3>
            <p>{copy.home.feature.description}</p>
            <div className="showcase-meta">
              <span><Leaf size={16} /> {copy.home.feature.meta[0]}</span>
              <span><Users size={16} /> {copy.home.feature.meta[1]}</span>
            </div>
            <Link to="/hakkimizda" className="showcase-button">{copy.home.feature.cta}</Link>
          </article>

          <article className="showcase-card literacy-card glass-panel">
            <span className="section-kicker">{copy.home.literacy.kicker}</span>
            <h3>{copy.home.literacy.title}</h3>
            <p>{copy.home.literacy.description}</p>
            <blockquote>
              “{copy.home.literacy.quote}”
            </blockquote>
            <Link to="/ekibimiz" className="text-link">
              {copy.home.literacy.cta}
              <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>

      <section className="calendar-section">
        <div className="container calendar-grid">
          <article className="calendar-card glass-panel">
            <span className="section-kicker">{copy.home.calendar.kicker}</span>
            <h3>{copy.home.calendar.title}</h3>
            <p>{copy.home.calendar.description}</p>
            <div className="calendar-highlights">
              <span><CalendarDays size={16} /> {copy.home.calendar.highlights[0]}</span>
              <span><MapPin size={16} /> {copy.home.calendar.highlights[1]}</span>
            </div>
            <Link to="/program" className="showcase-button">{copy.home.calendar.cta}</Link>
          </article>

          <article className="calendar-card contact-cta glass-panel">
            <span className="section-kicker">{copy.home.contact.kicker}</span>
            <h3>{copy.home.contact.title}</h3>
            <p>{copy.home.contact.description}</p>
            <Link to="/iletisim" className="text-link">
              {copy.home.contact.cta}
              <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Home;
