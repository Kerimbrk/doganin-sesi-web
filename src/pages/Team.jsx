import './Team.css';
import { useLanguage } from '../context/useLanguage';

import imgDilek from '../assets/images/team/dilek_hoca.jpg';
import imgHakan from '../assets/images/team/hakan_hoca_optimized.jpg';
import imgHandan from '../assets/images/team/handan_hoca.jpeg';
import imgHulya from '../assets/images/team/hulya_hoca.jpeg';
import imgKerim from '../assets/images/team/kerim_hoca_updated.jpg';
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
    { id: 1, roleKey: 'coordinator', name: 'Kerim Burak Beyge', titleKey: 'coordinator', image: imgKerim },
  ],
  experts: [
    { id: 2, roleKey: 'expert', name: 'Doç. Dr. Taner Özcan', titleKey: 'taner', image: imgTaner },
  ],
  instructors: [
    { id: 4, roleKey: 'instructor', name: 'Prof. Dr. Dilek Türker', titleKey: 'dilek', image: imgDilek },
    { id: 6, roleKey: 'instructor', name: 'Prof. Dr. Selami Selvi', titleKey: 'selami', image: imgSelami },
    { id: 8, roleKey: 'instructor', name: 'Prof. Dr. Hakan Önal', titleKey: 'hakan', image: imgHakan },
    { id: 14, roleKey: 'instructor', name: 'Doç. Dr. Taner Özcan', titleKey: 'tanerInstructor', image: imgTaner },
    { id: 5, roleKey: 'instructor', name: 'Dr. Nicklas Jansson', titleKey: 'nicklas', image: imgNicklas },
    { id: 7, roleKey: 'instructor', name: 'Dr. Öğr. Sakin Vural Varlı', titleKey: 'sakin', image: imgSakin },
    { id: 12, roleKey: 'instructor', name: 'Dr. Öğr. Ayşegül Karaahmetoğlu Çoban', titleKey: 'aysegul', image: null },
    { id: 13, roleKey: 'instructorP4C', name: 'Dr. Öğr. Burak Çakır', titleKey: 'burak', image: null },
    { id: 9, roleKey: 'instructor', name: 'Öğr. Üyesi Handan Kurtulmuş Sancak', titleKey: 'handan', image: imgHandan },
    { id: 3, roleKey: 'instructor', name: 'Mustafa Sabur', titleKey: 'mustafa', image: null },
    { id: 10, roleKey: 'instructor', name: 'Hülya Demirok Balaban', titleKey: 'hulya', image: imgHulya },
  ],
  guides: [
    { id: 11, roleKey: 'guide', name: 'Nazire Taşkın', titleKey: 'guide', image: imgNazire },
    { id: 15, roleKey: 'guide', name: 'Derya Deniz Karameşe', titleKey: 'guide', image: null },
    { id: 16, roleKey: 'guide', name: 'Şeyma Yeşil', titleKey: 'guide', image: null },
    { id: 17, roleKey: 'guide', name: 'Ertan Öz', titleKey: 'guide', image: null },
    { id: 18, roleKey: 'guide', name: 'Fadime Gül Ökten', titleKey: 'guide', image: null },
    { id: 19, roleKey: 'guide', name: 'Ayşe Altun', titleKey: 'guide', image: null },
    { id: 20, roleKey: 'guide', name: 'Bayram Gülcan', titleKey: 'guide', image: null },
    { id: 21, roleKey: 'guide', name: 'Enise Ulu Çoğalan', titleKey: 'guide', image: null },
    { id: 22, roleKey: 'guide', name: 'Faysal Sayan', titleKey: 'guide', image: null },
  ],
  healthPersonnel: [
    { id: 30, roleKey: 'health', name: 'Dr. Emre Tufan', titleKey: 'health', image: null },
  ],
  volunteers: [
    { id: 101, roleKey: 'volunteer', name: 'İbrahim Benli', titleKey: 'student', image: null },
    { id: 102, roleKey: 'volunteer', name: 'Arda Kıvrak', titleKey: 'student', image: null },
    { id: 103, roleKey: 'volunteer', name: 'Mehmet Furkan Sakar', titleKey: 'student', image: null },
    { id: 104, roleKey: 'volunteer', name: 'Elif Baysal', titleKey: 'student', image: null },
    { id: 105, roleKey: 'volunteer', name: 'Aysu Büber', titleKey: 'student', image: null },
    { id: 106, roleKey: 'volunteer', name: 'Azra Uzun', titleKey: 'student', image: null },
  ]
};

teamData.instructors.sort((a, b) => {
  const rankDifference = getAcademicRank(a.name) - getAcademicRank(b.name);

  if (rankDifference !== 0) return rankDifference;
  return a.name.localeCompare(b.name, 'tr');
});

const renderMemberCard = (member, copy) => (
  <div key={member.id} className="team-card glass-panel">
    <div className={`member-photo ${!member.image ? 'placeholder-bg' : ''}`}>
      {member.image ? (
        <img src={member.image} alt={member.name} loading="lazy" decoding="async" />
      ) : (
        <div className="placeholder-text">{copy.team.placeholder.split('\n')[0]}<br/>{copy.team.placeholder.split('\n')[1]}</div>
      )}
    </div>
    <div className="member-info">
      <span className="member-role">{copy.team.roles[member.roleKey]}</span>
      <h3>{member.name}</h3>
      <p>{copy.team.titles[member.titleKey]}</p>
    </div>
  </div>
);

const Team = () => {
  const { copy } = useLanguage();
  const getGridClassName = (members) => `team-grid${members.length === 1 ? ' single-member' : ''}`;

  return (
    <div className="team-page">
      <div className="team-header">
        <h1>{copy.team.title}</h1>
        <p>{copy.team.description}</p>
      </div>

      <section className="team-section">
        <h2 className="team-section-title">{copy.team.sections.coordinator}</h2>
        <div className="team-grid single-member">
          {teamData.coordinator.map((member) => renderMemberCard(member, copy))}
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-section-title">{copy.team.sections.experts}</h2>
        <div className={getGridClassName(teamData.experts)}>
          {teamData.experts.map((member) => renderMemberCard(member, copy))}
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-section-title">{copy.team.sections.instructors}</h2>
        <div className="team-grid">
          {teamData.instructors.map((member) => renderMemberCard(member, copy))}
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-section-title">{copy.team.sections.guides}</h2>
        <div className="team-grid">
          {teamData.guides.map((member) => renderMemberCard(member, copy))}
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-section-title">{copy.team.sections.healthPersonnel}</h2>
        <div className={getGridClassName(teamData.healthPersonnel)}>
          {teamData.healthPersonnel.map((member) => renderMemberCard(member, copy))}
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-section-title">{copy.team.sections.volunteers}</h2>
        <div className="team-grid">
          {teamData.volunteers.map((member) => renderMemberCard(member, copy))}
        </div>
      </section>
    </div>
  );
};

export default Team;
