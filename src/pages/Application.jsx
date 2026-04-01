import React from 'react';
import { ExternalLink, FileText, Download, CheckCircle } from 'lucide-react';
import './Application.css';

const Application = () => {
  return (
    <div className="application-page">
      <div className="app-header">
        <h1>Başvuru Şartları ve Kayıt</h1>
        <p>Doğanın Sesi kampına katılmak için gereken adımlar ve formlar</p>
      </div>

      <div className="app-content">
        <section className="app-criteria glass-panel">
          <h2>Seçim Kriterleri</h2>
          <ul className="criteria-list">
            <li><CheckCircle size={20} className="icon-check" /> Manisa ilindeki devlet okullarında veya Soma BİLSEM'de öğrenim gören 7. sınıf öğrencisi olmak.</li>
            <li><CheckCircle size={20} className="icon-check" /> Doğa, iklim değişikliği ve bilimsel çalışmalara ilgi duymak.</li>
            <li><CheckCircle size={20} className="icon-check" /> Kamp süresince gerçekleştirilecek açık alan ve doğa etkinliklerine sağlık engeli bulunmamak.</li>
          </ul>
        </section>

        <section className="app-forms">
          <h2>İndirilmesi Gereken Belgeler</h2>
          <p>Lütfen online başvuru formunu doldurmadan önce aşağıdaki belgeleri indirip velinize onaylatınız.</p>
          
          <div className="docs-grid">
            <div className="doc-card glass-panel">
              <FileText size={40} className="doc-icon" />
              <h3>Veli İzin Belgesi</h3>
              <p>Öğrencinin TÜBİTAK doğa eğitim kampına katılması için veli muvafakatnamesi / yasal vesayet formu.</p>
              <button className="btn-download"><Download size={16}/> İndir (PDF)</button>
            </div>
            
            <div className="doc-card glass-panel">
              <FileText size={40} className="doc-icon" />
              <h3>Diğer İzin Belgeleri</h3>
              <p>KVKK aydınlatma metni, ses/görüntü kayıt izni ve alerji beyan formlarını içeren evrak paketi.</p>
              <button className="btn-download"><Download size={16}/> İndir (PDF)</button>
            </div>
          </div>
        </section>

        <section className="app-online glass-panel highlight-box">
          <h2>Online Başvuru Formu</h2>
          <p>İzin belgeleriniz hazır olduğunda aşağıdaki butona tıklayarak resmi kaydınızı doğrudan Google Form üzerinden projemize iletebilirsiniz.</p>
          <a href="https://forms.gle/DMNZpEZhtR8ja3pJA" target="_blank" rel="noopener noreferrer" className="btn-google-form">
            <span>Google Form ile Başvur</span>
            <ExternalLink size={20} />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Application;
