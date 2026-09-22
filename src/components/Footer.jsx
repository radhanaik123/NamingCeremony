import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function Footer({ familyName }) {
  return (
    <footer className="invitation-footer">
      <div className="container">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#C5A156', marginBottom: '0.5rem' }}>
          <Sparkles size={18} />
          <Heart size={16} fill="#D99CA1" color="#D99CA1" />
          <Sparkles size={18} />
        </div>

        <p className="footer-script">
          With love, from our family
        </p>

        <div className="footer-family-name">
          {familyName}
        </div>

        <p className="footer-thankyou">
          Thank you for showering our newborn baby boy with your purest love, prayers, and heartfelt blessings on this sacred and joyful milestone at Belagavi.
        </p>

        <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          © 2026 {familyName} • Belagavi Naming Ceremony Celebration
        </p>
      </div>
    </footer>
  );
}
