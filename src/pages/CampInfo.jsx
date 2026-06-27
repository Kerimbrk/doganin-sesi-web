import { Download, FileText } from 'lucide-react';
import './CampInfo.css';
import { useLanguage } from '../context/useLanguage';

const CampInfo = () => {
  const { copy } = useLanguage();

  return (
    <div className="camp-info-page">
      <div className="app-header">
        <h1>{copy.campInfo.title}</h1>
      </div>

      <div className="camp-info-content">
        <section className="glass-panel text-content">
          <h2 className="content-subtitle">{copy.campInfo.subtitle}</h2>
          
          <div className="paragraphs-wrapper">
            <p className="info-paragraph">{copy.campInfo.description}</p>
          </div>

          <div className="download-section">
            <a href={`${import.meta.env.BASE_URL}yemek_menusu.pdf`} target="_blank" rel="noopener noreferrer" className="btn-primary btn-download-large">
              <FileText size={20} />
              <span>{copy.campInfo.downloadMealMenu}</span>
              <Download size={20} />
            </a>
            
            <a href={`${import.meta.env.BASE_URL}oda_plani.pdf`} target="_blank" rel="noopener noreferrer" className="btn-download-secondary">
              <FileText size={20} />
              <span>{copy.campInfo.downloadRoomPlan}</span>
              <Download size={20} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CampInfo;
