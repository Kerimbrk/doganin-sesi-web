import { ExternalLink, FileText, Download, CheckCircle } from 'lucide-react';
import './Application.css';
import { useLanguage } from '../context/useLanguage';

const Application = () => {
  const { copy } = useLanguage();

  return (
    <div className="application-page">
      <div className="app-header">
        <h1>{copy.application.title}</h1>
        <p>{copy.application.description}</p>
      </div>

      <div className="app-content">
        <section className="app-criteria glass-panel">
          <h2>{copy.application.criteriaTitle}</h2>
          <ul className="criteria-list">
            {copy.application.criteria.map((item) => (
              <li key={item}><CheckCircle size={20} className="icon-check" /> {item}</li>
            ))}
          </ul>
        </section>

        <section className="app-forms">
          <h2>{copy.application.documentsTitle}</h2>
          <p>{copy.application.documentsDescription}</p>
          
          <div className="docs-grid">
            <div className="doc-card glass-panel">
              <FileText size={40} className="doc-icon" />
              <h3>{copy.application.documents[0].title}</h3>
              <p>{copy.application.documents[0].description}</p>
              <button className="btn-download" type="button" disabled aria-disabled="true">
                <Download size={16}/> {copy.application.pdfSoon}
              </button>
            </div>
            
            <div className="doc-card glass-panel">
              <FileText size={40} className="doc-icon" />
              <h3>{copy.application.documents[1].title}</h3>
              <p>{copy.application.documents[1].description}</p>
              <button className="btn-download" type="button" disabled aria-disabled="true">
                <Download size={16}/> {copy.application.pdfSoon}
              </button>
            </div>
          </div>
        </section>

        <section className="app-online glass-panel highlight-box">
          <h2>{copy.application.onlineTitle}</h2>
          <p>{copy.application.onlineDescription}</p>
          <a href="https://forms.gle/DMNZpEZhtR8ja3pJA" target="_blank" rel="noopener noreferrer" className="btn-google-form">
            <span>{copy.application.onlineButton}</span>
            <ExternalLink size={20} />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Application;
