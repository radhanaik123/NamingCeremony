import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, ExternalLink, Shirt } from 'lucide-react';

export default function EventDetails({ data }) {
  const { eventDetails, baby } = data;

  return (
    <section id="details" className="invitation-section">
      <div className="container">
        <div className="event-details-card">
          
          {/* Left: Details */}
          <div>
            <span className="hand-note" style={{ fontSize: '1.5rem', color: 'var(--peach)' }}>
              Join Our Celebration
            </span>
            <h2 style={{ fontSize: 'clamp(2.4rem, 3.5vw, 3.2rem)', color: 'var(--sage-dark)', margin: '0.25rem 0 1rem' }}>
              Welcome & Gathering
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              We would be deeply honored by your loving presence and kind blessings as we gather our closest family and friends to bestow his sacred name.
            </p>

            <div className="event-info-list">
              <div className="event-info-item">
                <div className="event-icon-circle">
                  <Calendar size={22} />
                </div>
                <div>
                  <div className="event-item-label">Date & Day</div>
                  <div className="event-item-val">{eventDetails.dateDisplay}</div>
                </div>
              </div>

              <div className="event-info-item">
                <div className="event-icon-circle">
                  <Clock size={22} />
                </div>
                <div>
                  <div className="event-item-label">Ceremony Time</div>
                  <div className="event-item-val">{eventDetails.timeDisplay}</div>
                </div>
              </div>

              <div className="event-info-item">
                <div className="event-icon-circle">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="event-item-label">Venue Location</div>
                  <div className="event-item-val">{eventDetails.venueName}</div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{eventDetails.venueAddress}</div>
                </div>
              </div>

              <div className="event-info-item">
                <div className="event-icon-circle" style={{ background: 'var(--dusty-pink)' }}>
                  <Shirt size={22} />
                </div>
                <div>
                  <div className="event-item-label">Dress Code</div>
                  <div className="event-item-val">{eventDetails.dressCode}</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <a
                href={eventDetails.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-gold"
              >
                <MapPin size={18} />
                <span>Open Location</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Right: Botanical Illustration Frame */}
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <div className="event-wreath-circle-frame">
              <img 
                src={baby.wreathPhoto} 
                alt="Parents Holding Baby Feet in Botanical Wreath" 
                className="event-wreath-img"
              />
            </div>
            <p className="hand-note" style={{ fontSize: '1.4rem', color: 'var(--sage-dark)', marginTop: '1rem' }}>
              "Surrounded with love, blossoms & blessings"
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
