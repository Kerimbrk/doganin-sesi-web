import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import './Header.css';
import './Logos.css';

// Logo Imports
import tubitakLogo from '../../assets/images/logos/tubitak.png';
// import tubitak4004Logo from '../../assets/images/logos/tubitak_4004.png'; // File missing, commented out to fix build
import bilsemLogo from '../../assets/images/logos/soma_bilsem.png';

const Header = () => {
  return (
    <header className="site-header glass-panel">
      <div className="header-top">
        <div className="logos-container">
          <div className="logo-box larger-logo">
            <img src={tubitakLogo} alt="TÜBİTAK" className="inst-logo" onError={(e) => e.target.style.display='none'} />
            <span className="logo-text-fallback">TÜBİTAK</span>
          </div>
          <div className="logo-box larger-logo">
            {/* tubitak_4004.png dosyası yüklendiğinde aşağıdaki img etiketi aktif edilecek */}
            {/* <img src={tubitak4004Logo} alt="TÜBİTAK 4004" className="inst-logo" onError={(e) => e.target.style.display='none'} /> */}
            <span className="logo-text-fallback">4004 PROJESİ</span>
          </div>
          <div className="logo-box larger-logo">
            <img src={bilsemLogo} alt="Soma BİLSEM" className="inst-logo" onError={(e) => e.target.style.display='none'} />
            <span className="logo-text-fallback">Soma BİLSEM</span>
          </div>
        </div>
      </div>
      
      <div className="header-bottom">
        <Link to="/" className="brand">
          <Leaf className="brand-icon" size={28} />
          <span className="brand-text">Doğanın Sesi</span>
        </Link>
        
        <nav className="main-nav">
          <Link to="/" className="nav-link">Ana Sayfa</Link>
          <Link to="/hakkimizda" className="nav-link">Hakkımızda</Link>
          <Link to="/program" className="nav-link">Program</Link>
          <Link to="/ekibimiz" className="nav-link">Ekibimiz</Link>
          <Link to="/iletisim" className="nav-link">İletişim</Link>
          <Link to="/basvuru" className="nav-link btn-primary">Başvuru Yap</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
