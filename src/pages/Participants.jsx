import { Download, FileText } from 'lucide-react';
import './Participants.css';
import { useLanguage } from '../context/useLanguage';

const Participants = () => {
  const { copy } = useLanguage();

  return (
    <div className="participants-page">
      <div className="app-header">
        <h1>{copy.participants.title}</h1>
      </div>

      <div className="participants-content">
        <section className="glass-panel text-content">
          <h2 className="content-subtitle">{copy.participants.subtitle}</h2>
          
          <div className="paragraphs-wrapper">
            {copy.participants.paragraphs.map((paragraph, index) => {
              // Highlight bold parts for known keywords
              if (paragraph.startsWith('Önemli Bilgilendirmeler:') ||
                  paragraph.startsWith('İletişim ve Onay:') ||
                  paragraph.startsWith('Yedek Liste İşleyişi:') ||
                  paragraph.startsWith('Kayıt ve Açılış:') ||
                  paragraph.startsWith('Konaklama:') ||
                  paragraph.startsWith('Important Information:') ||
                  paragraph.startsWith('Communication and Approval:') ||
                  paragraph.startsWith('Reserve List Process:') ||
                  paragraph.startsWith('Registration and Opening:') ||
                  paragraph.startsWith('Accommodation:')
              ) {
                const parts = paragraph.split(':');
                if (parts.length > 1) {
                  return (
                    <p key={index} className="info-paragraph">
                      <strong>{parts[0]}:</strong>
                      {parts.slice(1).join(':')}
                    </p>
                  );
                }
              }
              return <p key={index} className="info-paragraph">{paragraph}</p>;
            })}
          </div>

          <div className="download-section">
            <a href="/asil_ve_yedek_katilimci_listesi.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary btn-download-large">
              <FileText size={20} />
              <span>{copy.participants.downloadButton}</span>
              <Download size={20} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Participants;
