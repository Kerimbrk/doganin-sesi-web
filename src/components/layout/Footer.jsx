import './Footer.css';
import './Logos.css';
import { useLanguage } from '../../context/useLanguage';

// Logo Imports
import logoKaymakamlik from '../../assets/images/logos/soma_kaymakamlik_optimized.png';
import logoUni from '../../assets/images/logos/balikesir_uni.png';
import logoBelediye from '../../assets/images/logos/soma_belediye_optimized.png';
import logoDKMP from '../../assets/images/logos/dkmp.png';
import logoMEB from '../../assets/images/logos/soma_meb_optimized.png';
import logoSpil from '../../assets/images/logos/spil_dag.png';
import logoOrman from '../../assets/images/logos/soma_orman_optimized.png';
import logoSaglik from '../../assets/images/logos/soma_saglik.png';

const institutions = [
  { src: logoKaymakamlik },
  { src: logoUni },
  { src: logoBelediye },
  { src: logoDKMP },
  { src: logoMEB },
  { src: logoSpil },
  { src: logoOrman },
  { src: logoSaglik },
];

const Footer = () => {
  const { copy } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logos">
          <h4>{copy.footer.title}</h4>
          <div className="logo-grid">
            {institutions.map((inst, index) => (
              <div key={index} className="footer-logo-box">
                <img 
                  src={inst.src} 
                  alt={copy.footer.institutions[index]} 
                  className="footer-inst-logo" 
                  loading="lazy"
                  decoding="async"
                  onError={(e) => e.target.style.display='none'}
                />
                <span className="footer-logo-text-fallback">{copy.footer.institutions[index]}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{copy.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
