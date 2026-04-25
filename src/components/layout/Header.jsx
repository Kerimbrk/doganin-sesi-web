import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import './Header.css';
import './Logos.css';
import { useLanguage } from '../../context/useLanguage';

// Logo Imports
import tubitakLogo from '../../assets/images/logos/tubitak.png';
import tubitak4004Logo from '../../assets/images/logos/4004_LOGO_2.png';
import bilsemLogo from '../../assets/images/logos/soma_bilsem_optimized.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, copy } = useLanguage();
  const getNavClassName = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header glass-panel${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="header-top">
        <div className="header-showcase">
          <div className="side-logos-container">
            <div className="logo-box logo-box-side">
              <img src={tubitakLogo} alt="TÜBİTAK" className="inst-logo" decoding="async" onError={(e) => e.target.style.display='none'} />
              <span className="logo-text-fallback">TÜBİTAK</span>
            </div>
            <div className="logo-box logo-transparent">
              <img src={tubitak4004Logo} alt="TÜBİTAK 4004 Logo" className="inst-logo tubitak-4004-logo" decoding="async" />
            </div>
          </div>

          <div className="project-badge">
            <div className="project-badge-content">
              <span className="project-kicker">{copy.header.projectKicker}</span>
              <h1 className="project-title">{copy.header.projectTitle}</h1>
              <p className="project-subtitle">{copy.header.projectSubtitle}</p>
              <span className="project-chip">{copy.header.projectChip}</span>
            </div>
          </div>

          <div className="side-logos-container">
            <div className="logo-box logo-transparent">
              <img src={tubitak4004Logo} alt="TÜBİTAK 4004 Logo" className="inst-logo tubitak-4004-logo" decoding="async" />
            </div>
            <div className="logo-box logo-box-side">
              <img src={bilsemLogo} alt="Soma BİLSEM" className="inst-logo" decoding="async" onError={(e) => e.target.style.display='none'} />
              <span className="logo-text-fallback">Soma BİLSEM</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="header-bottom">
        <Link to="/" className="brand">
          <Leaf className="brand-icon" size={28} />
          <span className="brand-text">{copy.header.brandText}</span>
        </Link>

        <div className="header-controls">
          <nav className="main-nav" aria-label={copy.header.navLabel}>
            <NavLink to="/" end className={getNavClassName}>{copy.header.nav.home}</NavLink>
            <NavLink to="/hakkimizda" className={getNavClassName}>{copy.header.nav.about}</NavLink>
            <NavLink to="/program" className={getNavClassName}>{copy.header.nav.program}</NavLink>
            <NavLink to="/ekibimiz" className={getNavClassName}>{copy.header.nav.team}</NavLink>
            <NavLink to="/iletisim" className={getNavClassName}>{copy.header.nav.contact}</NavLink>
            <NavLink to="/basvuru" className={({ isActive }) => `nav-link btn-primary${isActive ? ' active' : ''}`}>{copy.header.nav.application}</NavLink>
          </nav>

          <div className="language-switcher" role="group" aria-label={copy.header.languageLabel}>
            <button
              type="button"
              className={`language-button${language === 'tr' ? ' active' : ''}`}
              onClick={() => setLanguage('tr')}
            >
              {copy.header.language.tr}
            </button>
            <button
              type="button"
              className={`language-button${language === 'en' ? ' active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              {copy.header.language.en}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
