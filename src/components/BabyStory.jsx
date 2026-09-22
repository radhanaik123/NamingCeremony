import React from 'react';
import { Star, Moon, Heart, Sparkles, Award } from 'lucide-react';

export default function BabyStory({ data }) {
  const { baby } = data;

  const infoItems = [
    { label: 'Name Reveal', value: 'Revealed at 11:45 AM' },
    { label: 'Born Date', value: baby.bornDate },
    { label: 'Birth Time', value: baby.bornTime },
    { label: 'Birth Weight', value: baby.weight },
    { label: 'Nickname', value: baby.nickname },
    { label: 'Little Wonder', value: baby.title },
  ];

  return (
    <section id="story" className="invitation-section">
      <div className="container">
        
        {/* Animated Baby Clothesline Banner */}
        <div className="clothesline-banner-wrap animate-drift">
          <img 
            src={baby.clotheslinePhoto} 
            alt="Baby Clothesline" 
            className="clothesline-banner-img"
          />
        </div>

        <div className="baby-story-wrapper">
          {/* Left: Watercolor Teddy Bear Asset */}
          <div className="story-illustration-frame">
            <img 
              src={baby.teddyPhoto} 
              alt="Baby Teddy Bear" 
              className="story-teddy-img"
            />
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: '#C5A156' }}>
              <Sparkles size={16} />
              <span className="hand-note" style={{ fontSize: '1.4rem', color: 'var(--sage-dark)' }}>
                Guarded by love & teddy bears
              </span>
              <Sparkles size={16} />
            </div>
          </div>

          {/* Right: Baby Story Details */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--peach)', marginBottom: '0.5rem' }}>
              <Star size={18} fill="#C98F69" />
              <span className="hand-note" style={{ fontSize: '1.4rem' }}>A New Chapter of Joy</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.5rem)', color: 'var(--sage-dark)', marginBottom: '1rem' }}>
              Meet Our Little Prince
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              "{baby.quote}"
            </p>

            <div className="story-info-grid">
              {infoItems.map((item) => (
                <div key={item.label} className="story-info-card">
                  <div className="story-info-label">{item.label}</div>
                  <div className="story-info-val">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
