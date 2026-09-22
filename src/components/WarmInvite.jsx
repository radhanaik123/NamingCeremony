import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function WarmInvite({ data }) {
  const { warmInvite, parents } = data;

  return (
    <section id="invite" className="invitation-section">
      <div className="container">
        <div className="warm-invite-panel">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: '#D7B879', marginBottom: '1rem' }}>
            <Sparkles size={22} />
            <Heart size={20} fill="#E8B3B7" color="#E8B3B7" />
            <Sparkles size={22} />
          </div>

          <h2 className="warm-invite-title">
            {warmInvite.heading}
          </h2>

          <p className="warm-invite-paragraph">
            {warmInvite.message}
          </p>

          <p className="warm-invite-note">
            ~ {warmInvite.note} ~
          </p>

          <div style={{ marginTop: '2.5rem', fontFamily: 'var(--font-script)', fontSize: '2.5rem', color: 'rgba(255,255,255,0.95)' }}>
            {parents.parentsNames}
          </div>
        </div>
      </div>
    </section>
  );
}
