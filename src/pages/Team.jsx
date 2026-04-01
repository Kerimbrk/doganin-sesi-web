import React from 'react';
import './Team.css';

import imgDilek from '../assets/images/team/dilek_hoca.jpg';
import imgHakan from '../assets/images/team/hakan_hoca.jpg';
import imgHandan from '../assets/images/team/handan_hoca.jpeg';
import imgHulya from '../assets/images/team/hulya_hoca.jpeg';
import imgKerim from '../assets/images/team/kerim_hoca.jpeg';
import imgNazire from '../assets/images/team/nazire_hoca.jpeg';
import imgNicklas from '../assets/images/team/nicklas_hoca.avif';
import imgSakin from '../assets/images/team/sakin_hoca.jpeg';
import imgSelami from '../assets/images/team/selami_hoca.jpg';
import imgTaner from '../assets/images/team/taner_hoca.jpg';

const teamMembers = [
  { id: 1, role: 'Proje Yürütücüsü', name: 'Kerim Burak Beyge', title: 'Fen Bilimleri Öğretmeni / Biyoloji', image: imgKerim },
  { id: 2, role: 'Uzman Personel', name: 'Doç. Dr. Taner Özcan', title: 'Fen Eğitimi Uzmanı', image: imgTaner },
  { id: 3, role: 'Uzman Personel', name: 'Mustafa Sabur', title: 'Müzik Öğretmeni / Sanat Eğitimcisi', image: null },
  { id: 4, role: 'Eğitmen', name: 'Prof. Dr. Dilek Türker', title: 'Hidrobiyoloji ve Kırmızı Mercanlar', image: imgDilek },
  { id: 5, role: 'Eğitmen', name: 'Dr. Nicklas Jansson', title: 'Entomolog / Böcek Ekolojisi', image: imgNicklas },
  { id: 6, role: 'Eğitmen', name: 'Prof. Dr. Selami Selvi', title: 'Doğal Boyama Uzmanı', image: imgSelami },
  { id: 7, role: 'Eğitmen', name: 'Dr. Öğr. Sakin Vural Varlı', title: 'Liken ve Bitki Uzmanı', image: imgSakin },
  { id: 8, role: 'Eğitmen', name: 'Prof. Dr. Hakan Önal', title: 'İklim ve Hava Uzmanı', image: imgHakan },
  { id: 9, role: 'Eğitmen', name: 'Öğr. Gör. Handan Kurtulmuş', title: 'Doğanın Gizemli Canlıları', image: imgHandan },
  { id: 10, role: 'Eğitmen', name: 'Hülya Demirok Balaban', title: 'Seramik ve Bitki Baskısı', image: imgHulya },
  { id: 11, role: 'Eğitmen', name: 'Nazire Balaban', title: 'Rehber / Proje Eğitmeni', image: imgNazire },
  { id: 12, role: 'Eğitmen', name: 'Dr. Öğr. Ayşegül Karaahmetoğlu Çoban', title: 'Kuş Gözlemcisi / Uzmanı', image: null },
  { id: 13, role: 'Eğitmen / P4C', name: 'Dr. Öğr. Burak Çakır', title: 'Çocuklar İçin Felsefe (P4C)', image: null },
];

const volunteers = [
  { id: 101, role: 'Proje Gönüllüsü', name: 'İbrahim Benli', title: 'Öğrenci', image: null },
  { id: 102, role: 'Proje Gönüllüsü', name: 'Arda Kıvrak', title: 'Öğrenci', image: null },
  { id: 103, role: 'Proje Gönüllüsü', name: 'Mehmet Furkan Sakar', title: 'Öğrenci', image: null },
  { id: 104, role: 'Proje Gönüllüsü', name: 'Elif Baysal', title: 'Öğrenci', image: null },
  { id: 105, role: 'Proje Gönüllüsü', name: 'Aysu Büber', title: 'Öğrenci', image: null },
  { id: 106, role: 'Proje Gönüllüsü', name: 'Azra Uzun', title: 'Öğrenci', image: null },
];

const Team = () => {
  return (
    <div className="team-page">
      <div className="team-header">
        <h1>Proje Ekibimiz</h1>
        <p>Bilim, sanat ve doğayı güçlü bir vizyonla çocuklarla buluşturan uzman kadromuz</p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card glass-panel">
            <div className={`member-photo ${!member.image ? 'placeholder-bg' : ''}`}>
              {member.image ? (
                <img src={member.image} alt={member.name} />
              ) : (
                <div className="placeholder-text">Fotoğraf<br/>(Drive'dan Bekleniyor)</div>
              )}
            </div>
            <div className="member-info">
              <span className="member-role">{member.role}</span>
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Proje Gönüllüleri Section */}
      <div className="team-header" style={{ marginTop: '5rem' }}>
        <h2>Proje Gönüllüleri</h2>
        <p>Projeye değer katan ve bizlere yaşlarıyla ilham veren gönüllü öğrencilerimiz</p>
      </div>

      <div className="team-grid">
        {volunteers.map((member) => (
          <div key={member.id} className="team-card glass-panel" style={{ transform: 'scale(0.95)' }}>
            <div className="member-photo placeholder-bg">
              <div className="placeholder-text">Fotoğraf<br/>(Drive'dan Bekleniyor)</div>
            </div>
            <div className="member-info">
              <span className="member-role" style={{ backgroundColor: 'var(--color-secondary)' }}>{member.role}</span>
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
