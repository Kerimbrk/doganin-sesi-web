import { useState } from 'react';
import './Program.css';
import scheduleData from '../data/schedule.json';
import { Calendar, MapPin, Clock, Info, User } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import { programEventTranslations } from '../i18n/programTranslations';

const formatDateLabel = (dateString, locale) => {
  const [day, month, year] = dateString.split('/');
  const parsedDate = new Date(`${year}-${month}-${day}T12:00:00`);

  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
  }).format(parsedDate);
};

// Etkinlikleri günlere (tarihlere) göre gruplayalım
const groupedSchedule = scheduleData.reduce((acc, event) => {
  if (!acc[event.date]) acc[event.date] = [];
  acc[event.date].push(event);
  return acc;
}, {});

const Program = () => {
  const { language, copy } = useLanguage();
  const totalEventCount = scheduleData.length;
  const [activeDate, setActiveDate] = useState(Object.keys(groupedSchedule)[0]);
  const [expandedEventId, setExpandedEventId] = useState(null);

  const toggleEvent = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  return (
    <div className="program-page">
      <div className="program-header">
        <div className="program-kicker">{copy.program.kicker}</div>
        <h1>{copy.program.title}</h1>
        <p>{copy.program.description}</p>
        <div className="program-summary">
          <div className="summary-pill">
            <strong>{copy.program.summary.total}</strong>
            <span>{totalEventCount} {copy.program.summary.totalSuffix}</span>
          </div>
          <div className="summary-pill">
            <strong>{copy.program.summary.start}</strong>
            <span>{formatDateLabel(Object.keys(groupedSchedule)[0], copy.locale)}</span>
          </div>
          <div className="summary-pill">
            <strong>{copy.program.summary.center}</strong>
            <span>{copy.program.summary.centerValue}</span>
          </div>
        </div>
      </div>

      <div className="program-container">
        {/* Day selection tabs */}
        <div className="date-tabs glass-panel">
          {Object.keys(groupedSchedule).map((date, index) => (
            <button 
              key={date}
              className={`date-tab ${activeDate === date ? 'active' : ''}`}
              onClick={() => setActiveDate(date)}
              type="button"
            >
              <Calendar size={18} />
              <span>{index + 1}. {copy.program.tabs.day}</span>
              <small>{formatDateLabel(date, copy.locale)}</small>
            </button>
          ))}
        </div>

        {/* Timeline for the active day */}
        <div className="timeline-container">
          {groupedSchedule[activeDate]?.map((event) => {
            const isExpanded = expandedEventId === event.id;
            const eventCopy = language === 'en' ? programEventTranslations[event.id] : null;
            const instructorTitle = event.instructor ? ` - ${event.instructor}` : "";
            const displayTitle = `${eventCopy?.name || event.name}${instructorTitle}`;

            return (
              <div key={event.id} className={`timeline-event ${isExpanded ? 'expanded' : ''}`}>
                <div className="event-time">
                  <Clock size={16} />
                  <span>{event.time}</span>
                </div>
                
                <div 
                  className="event-card glass-panel" 
                  onClick={() => toggleEvent(event.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(eventKey) => {
                    if (eventKey.key === 'Enter' || eventKey.key === ' ') {
                      eventKey.preventDefault();
                      toggleEvent(event.id);
                    }
                  }}
                  aria-expanded={isExpanded}
                >
                  <div className="event-summary">
                    <div className="event-copy">
                      <span className="event-badge">{formatDateLabel(event.date, copy.locale)}</span>
                      <h3>{displayTitle}</h3>
                    </div>
                    <button className="expand-btn" type="button" tabIndex={-1}>
                      {isExpanded ? copy.program.hideButton : copy.program.detailsButton}
                    </button>
                  </div>
                  
                  {isExpanded && (
                    <div className="event-details">
                      <div className="detail-row">
                        <MapPin size={16} />
                        <span><strong>{copy.program.detailLabels.location}:</strong> {eventCopy?.location || event.location}</span>
                      </div>
                      <div className="detail-row">
                        <User size={16} />
                        <span><strong>{copy.program.detailLabels.instructor}:</strong> {event.instructor || copy.program.detailLabels.fallbackInstructor}</span>
                      </div>
                      <div className="detail-description">
                        <Info size={16} className="info-icon" />
                        <p>{eventCopy?.description || event.description || copy.program.detailLabels.fallbackDescription}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Program;
