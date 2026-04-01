import { useState } from 'react';
import './Program.css';
import scheduleData from '../data/schedule.json';
import { Calendar, MapPin, Clock, Info, User } from 'lucide-react';

const formatDateLabel = (dateString) => {
  const [day, month, year] = dateString.split('/');
  const parsedDate = new Date(`${year}-${month}-${day}T12:00:00`);

  return new Intl.DateTimeFormat('tr-TR', {
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
  const totalEventCount = scheduleData.length;
  const [activeDate, setActiveDate] = useState(Object.keys(groupedSchedule)[0]);
  const [expandedEventId, setExpandedEventId] = useState(null);

  const toggleEvent = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  return (
    <div className="program-page">
      <div className="program-header">
        <div className="program-kicker">5 günlük saha ve atölye akışı</div>
        <h1>Etkinlik Takvimi</h1>
        <p>5 günlük yoğun ve eğlenceli iklim değişikliği eğitim programı planı</p>
        <div className="program-summary">
          <div className="summary-pill">
            <strong>Toplam</strong>
            <span>{totalEventCount} etkinlik</span>
          </div>
          <div className="summary-pill">
            <strong>Başlangıç</strong>
            <span>{formatDateLabel(Object.keys(groupedSchedule)[0])}</span>
          </div>
          <div className="summary-pill">
            <strong>Merkez</strong>
            <span>Soma BİLSEM</span>
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
              <span>{index + 1}. Gün</span>
              <small>{formatDateLabel(date)}</small>
            </button>
          ))}
        </div>

        {/* Timeline for the active day */}
        <div className="timeline-container">
          {groupedSchedule[activeDate]?.map((event) => {
            const isExpanded = expandedEventId === event.id;
            // Clean up the name a bit to match the user's requested format:
            // Example: "17. Etkinlik - Kim Dışkı Yiyor? - Dr. Nicklas Jansson"
            // If the original name already has "17. Etkinlik", we might just need to format it nicely.
            const instructorTitle = event.instructor ? ` - ${event.instructor}` : "";
            const displayTitle = `${event.name}${instructorTitle}`;

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
                      <span className="event-badge">{formatDateLabel(event.date)}</span>
                      <h3>{displayTitle}</h3>
                    </div>
                    <button className="expand-btn" type="button" tabIndex={-1}>
                      {isExpanded ? 'Gizle' : 'Detaylar'}
                    </button>
                  </div>
                  
                  {isExpanded && (
                    <div className="event-details">
                      <div className="detail-row">
                        <MapPin size={16} />
                        <span><strong>Mekan:</strong> {event.location}</span>
                      </div>
                      <div className="detail-row">
                        <User size={16} />
                        <span><strong>Eğitmen/Rehber:</strong> {event.instructor || "Proje Ekibi"}</span>
                      </div>
                      <div className="detail-description">
                        <Info size={16} className="info-icon" />
                        <p>{event.description || "Bu etkinlik için detaylı bilgi girilmemiştir."}</p>
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
