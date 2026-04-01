import { Link, NavLink } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import './Header.css';
import './Logos.css';

// Logo Imports
import tubitakLogo from '../../assets/images/logos/tubitak.png';
// import tubitak4004Logo from '../../assets/images/logos/tubitak_4004.png'; // File missing, commented out to fix build
import bilsemLogo from '../../assets/images/logos/soma_bilsem_optimized.png';

const Header = () => {
  const getNavClassName = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

  return (
    <header className="site-header glass-panel">
      <div className="header-top">
        <div className="header-showcase">
          <div className="logo-box logo-box-side">
            <img src={tubitakLogo} alt="TÜBİTAK" className="inst-logo" decoding="async" onError={(e) => e.target.style.display='none'} />
            <span className="logo-text-fallback">TÜBİTAK</span>
          </div>

          <div className="project-badge">
            <span className="project-kicker">TÜBİTAK 4004</span>
            <h1 className="project-title">Doğanın Sesi</h1>
            <p className="project-subtitle">İklim Değişikliğini Anlamak ve Öğrenmek</p>
            <span className="project-chip">Doğa Eğitimi ve Bilim Okulları Projesi</span>
          </div>

          <div className="logo-box logo-box-side">
            <img src={bilsemLogo} alt="Soma BİLSEM" className="inst-logo" decoding="async" onError={(e) => e.target.style.display='none'} />
            <span className="logo-text-fallback">Soma BİLSEM</span>
          </div>
        </div>
      </div>
      
      <div className="header-bottom">
        <Link to="/" className="brand">
          <Leaf className="brand-icon" size={28} />
          <span className="brand-text">Doğanın Sesi: İklim Değişikliğini Anlamak ve Öğrenmek</span>
        </Link>
        
        <nav className="main-nav" aria-label="Ana gezinme">
          <NavLink to="/" end className={getNavClassName}>Ana Sayfa</NavLink>
          <NavLink to="/hakkimizda" className={getNavClassName}>Hakkımızda</NavLink>
          <NavLink to="/program" className={getNavClassName}>Program</NavLink>
          <NavLink to="/ekibimiz" className={getNavClassName}>Ekibimiz</NavLink>
          <NavLink to="/iletisim" className={getNavClassName}>İletişim</NavLink>
          <NavLink to="/basvuru" className={({ isActive }) => `nav-link btn-primary${isActive ? ' active' : ''}`}>Başvuru Yap</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
