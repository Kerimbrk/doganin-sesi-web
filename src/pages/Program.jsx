import React, { useState } from 'react';
import './Program.css';
import scheduleData from '../data/schedule.json';
import { Calendar, MapPin, Clock, Info, User } from 'lucide-react';

// Etkinlikleri günlere (tarihlere) göre gruplayalım
const groupedSchedule = scheduleData.reduce((acc, event) => {
  if (!acc[event.date]) acc[event.date] = [];
  acc[event.date].push(event);
  return acc;
}, {});

const Program = () => {
  const [activeDate, setActiveDate] = useState(Object.keys(groupedSchedule)[0]);
  const [expandedEventId, setExpandedEventId] = useState(null);

  const toggleEvent = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  return (
    <div className="program-page">
      <div className="program-header">
        <h1>Etkinlik Takvimi</h1>
        <p>5 günlük yoğun ve eğlenceli iklim değişikliği eğitim programı planı</p>
      </div>

      <div className="program-container">
        {/* Day selection tabs */}
        <div className="date-tabs glass-panel">
          {Object.keys(groupedSchedule).map((date, index) => (
            <button 
              key={date}
              className={`date-tab ${activeDate === date ? 'active' : ''}`}
              onClick={() => setActiveDate(date)}
            >
              <Calendar size={18} />
              <span>{index + 1}. Gün</span>
              <small>{date}</small>
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
                >
                  <div className="event-summary">
                    <h3>{displayTitle}</h3>
                    <button className="expand-btn">
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
