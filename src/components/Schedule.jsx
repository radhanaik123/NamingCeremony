import React from 'react';
import { Clock, Sparkles } from 'lucide-react';

export default function Schedule({ schedule }) {
  return (
    <section id="schedule" className="invitation-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <p className="hand-note" style={{ fontSize: '1.6rem', color: 'var(--peach)', marginBottom: '0.25rem' }}>
            Day of Joy
          </p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.5rem)', color: 'var(--sage-dark)' }}>
            Ceremony Schedule
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0.5rem auto 0' }}>
            Please join us across each precious ritual and celebratory moment of the day.
          </p>
        </div>

        <div className="schedule-timeline" style={{ maxWidth: '820px', margin: '3rem auto 0' }}>
          {schedule.map((item, index) => (
            <div key={item.time} className="schedule-item">
              <div className="schedule-badge-dot">
                {index + 1}
              </div>

              <div className="schedule-content-box">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className="schedule-time-tag">
                    {item.time}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="schedule-title">{item.title}</h3>
                <p className="schedule-desc">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
