import React from 'react';
import hotairBalloonImg from '../assets/images/hotair_balloon.jpg';

export default function DecorativeBackground({ themeBg }) {
  // Generate random positions & delays for blinking stars
  const stars = [
    { top: '8%', left: '12%', delay: '0s', size: 14 },
    { top: '15%', left: '85%', delay: '1.2s', size: 18 },
    { top: '26%', left: '6%', delay: '2.1s', size: 12 },
    { top: '38%', left: '92%', delay: '0.7s', size: 16 },
    { top: '47%', left: '15%', delay: '1.8s', size: 20 },
    { top: '58%', left: '82%', delay: '2.5s', size: 14 },
    { top: '70%', left: '8%', delay: '0.4s', size: 16 },
    { top: '82%', left: '88%', delay: '1.5s', size: 12 },
    { top: '92%', left: '18%', delay: '2.8s', size: 18 },
    { top: '96%', left: '75%', delay: '1.0s', size: 14 },
  ];

  return (
    <div className="background-stars-layer" aria-hidden="true">
      {/* Soft Watermark Theme Texture Layer */}
      {themeBg && (
        <div
          className="theme-watermark-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundImage: `url(${themeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      )}

      {/* Blinking Stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="star-twinkle"
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            color: '#D7B879',
            fontSize: `${star.size}px`,
            userSelect: 'none',
            opacity: 0.75,
            zIndex: 1,
          }}
        >
          ✦
        </div>
      ))}

      {/* Floating Gentle Balloon at Top Corner */}
      <div
        className="balloon-float"
        style={{
          position: 'fixed',
          top: '90px',
          right: '4%',
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(108, 125, 114, 0.15)',
          border: '3px solid rgba(255, 255, 255, 0.85)',
          pointerEvents: 'none',
          zIndex: 2,
          opacity: 0.95,
        }}
      >
        <img
          src={hotairBalloonImg}
          alt="Floating Balloon"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Traveling Diagonal Skyward Balloon */}
      <div className="flying-travel-balloon">
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            border: '2px solid rgba(255,255,255,0.85)',
          }}
        >
          <img
            src={hotairBalloonImg}
            alt="Travel Balloon"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}
