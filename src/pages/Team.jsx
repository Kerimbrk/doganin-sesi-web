import './Team.css';

import imgDilek from '../assets/images/team/dilek_hoca.jpg';
import imgHakan from '../assets/images/team/hakan_hoca_optimized.jpg';
import imgHandan from '../assets/images/team/handan_hoca.jpeg';
import imgHulya from '../assets/images/team/hulya_hoca.jpeg';
import imgKerim from '../assets/images/team/kerim_hoca.jpeg';
import imgNazire from '../assets/images/team/nazire_hoca.jpeg';
import imgNicklas from '../assets/images/team/nicklas_hoca.avif';
import imgSakin from '../assets/images/team/sakin_hoca.jpeg';
import imgSelami from '../assets/images/team/selami_hoca.jpg';
import imgTaner from '../assets/images/team/taner_hoca_optimized.jpg';

const getAcademicRank = (name) => {
  if (name.startsWith('Prof. Dr.')) return 0;
  if (name.startsWith('Doç. Dr.')) return 1;
  if (name.startsWith('Dr.') && !name.startsWith('Dr. Öğr.')) return 2;
  if (name.startsWith('Dr. Öğr.')) return 3;
  return 4;
};

const teamData = {
  coordinator: [
    { id: 1, role: 'Proje Yürütücüsü', name: 'Kerim Burak Beyge', title: 'Fen Bilimleri Öğretmeni / Biyoloji', image: imgKerim },
  ],
  experts: [
    { id: 2, role: 'Proje Uzmanı', name: 'Doç. Dr. Taner Özcan', title: 'Fen Eğitimi Uzmanı', image: imgTaner },
  ],
  instructors: [
    { id: 4, role: 'Eğitmen', name: 'Prof. Dr. Dilek Türker', title: 'Hidrobiyoloji ve Kırmızı Mercanlar', image: imgDilek },
    { id: 6, role: 'Eğitmen', name: 'Prof. Dr. Selami Selvi', title: 'Doğal Boyama Uzmanı', image: imgSelami },
    { id: 8, role: 'Eğitmen', name: 'Prof. Dr. Hakan Önal', title: 'İklim ve Hava Uzmanı', image: imgHakan },
    { id: 14, role: 'Eğitmen', name: 'Doç. Dr. Taner Özcan', title: 'Fen Eğitimi Uzmanı / Değişen Sadece İklim mi?', image: imgTaner },
    { id: 5, role: 'Eğitmen', name: 'Dr. Nicklas Jansson', title: 'Entomolog / Böcek Ekolojisi', image: imgNicklas },
    { id: 7, role: 'Eğitmen', name: 'Dr. Öğr. Sakin Vural Varlı', title: 'Liken ve Bitki Uzmanı', image: imgSakin },
    { id: 12, role: 'Eğitmen', name: 'Dr. Öğr. Ayşegül Karaahmetoğlu Çoban', title: 'Kuş Gözlemcisi / Uzmanı', image: null },
    { id: 13, role: 'Eğitmen / P4C', name: 'Dr. Öğr. Burak Çakır', title: 'Çocuklar İçin Felsefe (P4C)', image: null },
    { id: 9, role: 'Eğitmen', name: 'Öğr. Üyesi Handan Kurtulmuş Sancak', title: 'Doğanın Gizemli Canlıları', image: imgHandan },
    { id: 3, role: 'Eğitmen', name: 'Mustafa Sabur', title: 'Müzik Öğretmeni / Sanat Eğitimcisi', image: null },
    { id: 10, role: 'Eğitmen', name: 'Hülya Demirok Balaban', title: 'Seramik ve Bitki Baskısı', image: imgHulya },
  ],
  guides: [
    { id: 11, role: 'Rehber', name: 'Nazire Taşkın', title: 'Rehber / Proje Ekibi', image: imgNazire },
    { id: 15, role: 'Rehber', name: 'Derya Deniz Karameşe', title: 'Rehber / Proje Ekibi', image: null },
    { id: 16, role: 'Rehber', name: 'Şeyma Yeşil', title: 'Rehber / Proje Ekibi', image: null },
    { id: 17, role: 'Rehber', name: 'Ertan Öz', title: 'Rehber / Proje Ekibi', image: null },
    { id: 18, role: 'Rehber', name: 'Fadime Gül Ökten', title: 'Rehber / Proje Ekibi', image: null },
    { id: 19, role: 'Rehber', name: 'Ayşe Altun', title: 'Rehber / Proje Ekibi', image: null },
    { id: 20, role: 'Rehber', name: 'Bayram Gülcan', title: 'Rehber / Proje Ekibi', image: null },
    { id: 21, role: 'Rehber', name: 'Enise Ulu Çoğalan', title: 'Rehber / Proje Ekibi', image: null },
    { id: 22, role: 'Rehber', name: 'Faysal Sayan', title: 'Rehber / Proje Ekibi', image: null },
  ],
  healthPersonnel: [
    { id: 30, role: 'Sağlık Personeli', name: 'Dr. Emre Tufan', title: 'Sağlık Personeli / İlk Yardım Desteği', image: null },
  ],
  volunteers: [
    { id: 101, role: 'Proje Gönüllüsü', name: 'İbrahim Benli', title: 'Öğrenci', image: null },
    { id: 102, role: 'Proje Gönüllüsü', name: 'Arda Kıvrak', title: 'Öğrenci', image: null },
    { id: 103, role: 'Proje Gönüllüsü', name: 'Mehmet Furkan Sakar', title: 'Öğrenci', image: null },
    { id: 104, role: 'Proje Gönüllüsü', name: 'Elif Baysal', title: 'Öğrenci', image: null },
    { id: 105, role: 'Proje Gönüllüsü', name: 'Aysu Büber', title: 'Öğrenci', image: null },
    { id: 106, role: 'Proje Gönüllüsü', name: 'Azra Uzun', title: 'Öğrenci', image: null },
  ]
};

teamData.instructors.sort((a, b) => {
  const rankDifference = getAcademicRank(a.name) - getAcademicRank(b.name);

  if (rankDifference !== 0) return rankDifference;
  return a.name.localeCompare(b.name, 'tr');
});

const renderMemberCard = (member) => (
  <div key={member.id} className="team-card glass-panel">
    <div className={`member-photo ${!member.image ? 'placeholder-bg' : ''}`}>
      {member.image ? (
        <img src={member.image} alt={member.name} loading="lazy" decoding="async" />
      ) : (
        <div className="placeholder-text">Fotoğraf<br/>(Drive&apos;dan Bekleniyor)</div>
      )}
    </div>
    <div className="member-info">
      <span className="member-role">{member.role}</span>
      <h3>{member.name}</h3>
      <p>{member.title}</p>
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="team-page">
      <div className="team-header">
        <h1>Proje Ekibimiz</h1>
        <p>Bilim, sanat ve doğayı güçlü bir vizyonla çocuklarla buluşturan uzman kadromuz</p>
      </div>

      <section className="team-section">
        <h2 className="team-section-title">Proje Yürütücüsü</h2>
        <div className="team-grid single-member">
          {teamData.coordinator.map(renderMemberCard)}
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-section-title">Proje Uzmanı</h2>
        <div className="team-grid">
          {teamData.experts.map(renderMemberCard)}
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-section-title">Eğitmenler</h2>
        <div className="team-grid">
          {teamData.instructors.map(renderMemberCard)}
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-section-title">Rehberler</h2>
        <div className="team-grid">
          {teamData.guides.map(renderMemberCard)}
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-section-title">Sağlık Personeli</h2>
        <div className="team-grid">
          {teamData.healthPersonnel.map(renderMemberCard)}
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-section-title">Proje Gönüllüleri</h2>
        <div className="team-grid">
          {teamData.volunteers.map(renderMemberCard)}
        </div>
      </section>
    </div>
  );
};

export default Team;
