import './About.css';
import { Target, Users, BookOpen, Globe } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

const About = () => {
  const { copy } = useLanguage();

  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>{copy.about.heroTitle}</h1>
        <p>{copy.about.heroDescription}</p>
      </div>

      <div className="about-content">
        <section className="about-section glass-panel">
          <div className="section-header">
            <Target className="section-icon" />
            <h2>{copy.about.sections.purpose.title}</h2>
          </div>
          <p>{copy.about.sections.purpose.body}</p>
        </section>

        <section className="about-section glass-panel">
          <div className="section-header">
            <Users className="section-icon" />
            <h2>{copy.about.sections.audience.title}</h2>
          </div>
          <p>{copy.about.sections.audience.body}</p>
        </section>

        <section className="about-section glass-panel">
          <div className="section-header">
            <BookOpen className="section-icon" />
            <h2>{copy.about.sections.approach.title}</h2>
          </div>
          <p>{copy.about.sections.approach.body}</p>
        </section>

        <section className="about-section glass-panel highlight-section">
          <div className="section-header">
            <Globe className="section-icon" />
            <h2>{copy.about.sections.manifesto.title}</h2>
          </div>
          <blockquote>
            &quot;{copy.about.sections.manifesto.quote}&quot;
          </blockquote>
        </section>
      </div>
    </div>
  );
};

export default About;
