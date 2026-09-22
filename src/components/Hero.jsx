import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink, Sparkles } from 'lucide-react';

export default function Hero({ data }) {
  const { baby, parents, eventDetails, themeBackgrounds } = data;

  return (
    <header id="hero" className="hero-section">
      <div className="container">
        
        {/* First Page Invitation Card matching the uploaded plane & arch illustration */}
        <div 
          className="hero-plane-invitation-card"
          style={{
            backgroundImage: `url(${themeBackgrounds?.firstPagePlane})`,
          }}
        >
          {/* Animated Flying Teddy Bear in Airplane */}
          <div className="hero-animated-teddy-flight" title="Our Little Pilot Bear">
            <img 
              src={baby.planeTeddyPhoto} 
              alt="Moving Teddy Bear Airplane" 
              className="hero-plane-teddy-img" 
            />
          </div>

          {/* Inner content positioned within the beige arch panel */}
          <div className="hero-arch-content-container">
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#C5A156', marginBottom: '0.35rem' }}>
              <Sparkles size={16} />
              <span className="hand-note" style={{ fontSize: '1.3rem' }}>Sacred New Beginning</span>
              <Sparkles size={16} />
            </div>

            <p className="hero-family-intro">
              {parents.inviteIntro}
            </p>

            <h1 className="hero-main-title">
              Naming Ceremony
            </h1>

            <div className="hero-sub-title">
              of our Newborn Baby Boy
            </div>

            <p className="hero-name-reveal-note">
              ~ Name to be Auspiciously Revealed at 11:45 AM ~
            </p>

            {/* Date & Time Badge */}
            <div className="hero-datetime-box">
              <Calendar size={17} color="#6C7D72" />
              <span>{eventDetails.dateDisplay}</span>
              <span>•</span>
              <Clock size={17} color="#6C7D72" />
              <span>{eventDetails.timeDisplay}</span>
            </div>

            {/* Belagavi Venue Details */}
            <p className="hero-location-text">
              <strong>{eventDetails.venueName}</strong><br />
              {eventDetails.venueAddress}
            </p>

            {/* Open Location Button */}
            <a
              href={eventDetails.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-gold"
            >
              <MapPin size={17} />
              <span>Open Location</span>
              <ExternalLink size={15} />
            </a>

          </div>
        </div>

      </div>
    </header>
  );
}
