import './About.css';
import { Target, Users, BookOpen, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>Projemiz Hakkında</h1>
        <p>İklim değişikliği ile mücadelede farkındalığı yüksek bir nesil yetiştirmek için yola çıkıyoruz.</p>
      </div>

      <div className="about-content">
        <section className="about-section glass-panel">
          <div className="section-header">
            <Target className="section-icon" />
            <h2>Projemizin Amacı</h2>
          </div>
          <p>
            TÜBİTAK 4004 Doğa Eğitimi ve Bilim Okulları Destekleme Programı kapsamında hazırlanan 
            &quot;Doğanın Sesi: İklim Değişikliğini Anlamak ve Öğrenmek&quot; projesinin temel amacı,
            katılımcı öğrencilerin küresel iklim değişikliği ve doğa üzerindeki etkileri hakkında bilimsel bilgi 
            birikimlerini artırmaktır. Proje, fen, sanat ve felsefeyi bir araya getirerek doğayı farklı bir 
            gözle görmelerini sağlamayı hedeflemektedir.
          </p>
        </section>

        <section className="about-section glass-panel">
          <div className="section-header">
            <Users className="section-icon" />
            <h2>Hedef Kitle</h2>
          </div>
          <p>
            Projemizin hedef kitlesi, Manisa ilindeki devlet okullarında öğrenim gören, özellikle kırsal alanlarda 
            (köy okullarında) yaşayan dezavantajlı öğrenciler ile Bilim ve Sanat Merkezi&apos;ne (BİLSEM) devam eden 
            <strong> 7. sınıf</strong> öğrencilerinden oluşan toplam 36 kişilik bir gruptur. Bu sayede farklı sosyo-ekonomik 
            altyapılardan gelen öğrencilerin kaynaşması ve ortak bir çevre bilinci geliştirmeleri amaçlanmaktadır.
          </p>
        </section>

        <section className="about-section glass-panel">
          <div className="section-header">
            <BookOpen className="section-icon" />
            <h2>Eğitim Yaklaşımımız</h2>
          </div>
          <p>
            5 günlük yoğun kamp süresince, öğrenciler ezberci bir eğitim yerine; aktif katılım, gözlem, ölçüm, 
            ve tartışma (P4C - Çocuklar İçin Felsefe) tekniklerinin kullanıldığı, disiplinlerarası (fen bilimleri, görsel sanatlar, felsefe vb.) 
            bir doğa eğitimi programı ile buluşacaklardır. Eğitimler; Spil Dağı, Kozak Yaylası, Kırkağaç Çam Korusu ve 
            Sevişler Baraj Gölü olmak üzere Manisa&apos;nın dört farklı ekosisteminde gerçekleştirilecektir.
          </p>
        </section>

        <section className="about-section glass-panel highlight-section">
          <div className="section-header">
            <Globe className="section-icon" />
            <h2>Manifestomuz</h2>
          </div>
          <blockquote>
            &quot;Ekolojik krizin bir parçası olmak yerine, çözümün bir parçası olabiliriz. Bugünün doğa kaşifleri, yarının sürdürülebilir dünyasının elçileri olacak.&quot;
          </blockquote>
        </section>
      </div>
    </div>
  );
};

export default About;
