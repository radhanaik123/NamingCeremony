import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function Countdown({ targetDate, dateDisplay }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const destination = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = destination - now;

      if (isNaN(destination)) {
        return;
      }

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="invitation-section">
      <div className="container">
        <div className="countdown-card">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#D7B879', marginBottom: '0.5rem' }}>
            <Sparkles size={20} />
            <span style={{ fontFamily: 'var(--font-hand)', fontSize: '1.4rem' }}>Counting Down The Moments</span>
            <Sparkles size={20} />
          </div>

          <h2 className="countdown-heading">
            Let the Little Celebration Begin
          </h2>

          <p className="countdown-subtext">
            Joining hands & hearts on {dateDisplay || '21 December 2026'}
          </p>

          {timeLeft.isExpired ? (
            <div style={{ padding: '2rem', background: '#E8F1EC', borderRadius: 'var(--radius-md)', color: 'var(--sage-dark)', fontSize: '1.4rem', fontFamily: 'var(--font-serif)' }}>
              🎉 Today is the day! Let the celebration begin!
            </div>
          ) : (
            <div className="countdown-grid">
              {timeUnits.map((unit) => (
                <div key={unit.label} className="timer-box">
                  <div className="timer-circle">
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <span className="timer-label">{unit.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
