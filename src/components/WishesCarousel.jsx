import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Heart, Sparkles } from 'lucide-react';

export default function WishesCarousel({ wishes, themeBg }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? wishes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === wishes.length - 1 ? 0 : prev + 1));
  };

  if (!wishes || wishes.length === 0) return null;

  const currentWish = wishes[currentIndex];

  return (
    <section id="wishes" className="invitation-section">
      <div className="container">
        <div 
          className="wishes-container-card with-theme-bg"
          style={{
            backgroundImage: themeBg ? `url(${themeBg})` : undefined,
          }}
        >
          <div className="wishes-glass-overlay">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: '#D7B879', marginBottom: '0.5rem' }}>
              <Sparkles size={20} />
              <span className="hand-note" style={{ fontSize: '1.5rem', color: '#57665E' }}>Heartfelt Blessings</span>
              <Sparkles size={20} />
            </div>

            <h2 style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(2.8rem, 4.5vw, 4.2rem)', color: 'var(--sage-dark)', marginBottom: '1.5rem' }}>
              Wishes for Our Little One
            </h2>

            <div className="wishes-card-inner">
              <Quote size={36} color="#D7B879" style={{ opacity: 0.85, marginBottom: '0.75rem' }} />
              
              <p className="wish-quote" style={{ color: '#3A4840' }}>
                "{currentWish.message}"
              </p>

              <div className="wish-author" style={{ color: 'var(--sage-dark)' }}>
                ~ {currentWish.author}
              </div>
              
              <div className="wish-relation" style={{ color: '#68776F' }}>
                {currentWish.relationship}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="wishes-nav-bar">
              <button 
                onClick={handlePrev} 
                className="btn-circle-arrow"
                style={{ background: 'var(--sage)', color: '#ffffff', border: 'none' }}
                aria-label="Previous wish"
              >
                <ChevronLeft size={24} />
              </button>

              <span className="wishes-page-count" style={{ color: 'var(--sage-dark)', fontWeight: 700 }}>
                {currentIndex + 1} &nbsp;/&nbsp; {wishes.length}
              </span>

              <button 
                onClick={handleNext} 
                className="btn-circle-arrow"
                style={{ background: 'var(--sage)', color: '#ffffff', border: 'none' }}
                aria-label="Next wish"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
