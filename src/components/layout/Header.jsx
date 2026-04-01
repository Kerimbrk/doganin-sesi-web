import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header glass-panel">
      <div className="header-top">
        <div className="logos-container">
          {/* Main Institution Logos Placeholders */}
          <div className="logo-placeholder">TÜBİTAK 4004</div>
          <div className="logo-placeholder">Soma BİLSEM</div>
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
