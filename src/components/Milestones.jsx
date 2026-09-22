import React from 'react';
import { Sun, Heart, Sparkles, Moon } from 'lucide-react';

export default function Milestones({ milestones }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'sun': return <Sun size={28} />;
      case 'heart': return <Heart size={28} />;
      case 'sparkles': return <Sparkles size={28} />;
      case 'moon': return <Moon size={28} />;
      default: return <Sparkles size={28} />;
    }
  };

  return (
    <section id="milestones" className="invitation-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <p className="hand-note" style={{ fontSize: '1.6rem', color: 'var(--peach)', marginBottom: '0.25rem' }}>
            Treasured Memories
          </p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.5rem)', color: 'var(--sage-dark)' }}>
            Little Moments & Wonder
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0.5rem auto 0' }}>
            Every gentle flutter, tiny breath, and soft sigh has written poetry in our hearts.
          </p>
        </div>

        <div className="milestones-grid">
          {milestones.map((item) => (
            <div key={item.id} className="milestone-card">
              <div className="milestone-icon-wrap">
                {getIcon(item.icon)}
              </div>
              <span className="milestone-tag">{item.tag}</span>
              <h3 className="milestone-title">{item.title}</h3>
              <p className="milestone-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
