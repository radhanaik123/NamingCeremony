import React from 'react';
import { Tv, Sparkles, Film, Heart } from 'lucide-react';

export default function CartoonVideo({ videoData }) {
  const { title, subtitle, youtubeUrl } = videoData;

  return (
    <section id="cartoon-video" className="invitation-section">
      <div className="container">
        <div className="cartoon-video-card">
          
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#C5A156', marginBottom: '0.35rem' }}>
              <Sparkles size={18} />
              <Film size={20} color="#6C7D72" />
              <span className="hand-note" style={{ fontSize: '1.5rem', color: 'var(--sage-dark)' }}>For Our Little Guests</span>
              <Sparkles size={18} />
            </div>

            <h2 style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.5rem)', color: 'var(--sage-dark)' }}>
              {title}
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '620px', margin: '0.5rem auto 0' }}>
              {subtitle}
            </p>
          </div>

          {/* 16:9 Responsive Video Wrapper */}
          <div className="cartoon-video-wrapper">
            <iframe
              className="cartoon-video-iframe"
              src={youtubeUrl}
              title="Baby Cartoon Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <p className="hand-note" style={{ fontSize: '1.35rem', color: 'var(--sage-dark)' }}>
              ✨ Enjoy a cozy cartoon moment with music, laughter, and smiles! ✨
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
