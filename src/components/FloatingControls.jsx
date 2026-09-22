import React, { useState, useEffect, useRef } from 'react';
import { Phone, Volume2, VolumeX, Music } from 'lucide-react';
import { lullabySynth } from '../utils/audioPlayer';

export default function FloatingControls({ phone, musicSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create optional real audio element
    if (musicSrc) {
      const audio = new Audio(musicSrc);
      audio.loop = true;
      audioRef.current = audio;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      lullabySynth.stop();
    };
  }, [musicSrc]);

  const toggleMusic = () => {
    if (isPlaying) {
      // Pause
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      lullabySynth.stop();
      setIsPlaying(false);
    } else {
      // Play
      // Try playing audio file first; if it fails/missing, fallback to Web Audio chime synth
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Fallback to soothing synthesized chime lullaby
            lullabySynth.start();
            setIsPlaying(true);
          });
      } else {
        lullabySynth.start();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="floating-controls-wrapper" aria-label="Quick Actions">
      {/* Floating Phone Button */}
      <a
        href={`tel:${phone}`}
        className="floating-btn"
        aria-label="Call Host for Inquiries"
        title="Call Host"
      >
        <Phone size={24} />
        <span className="floating-tooltip">Call Host: {phone}</span>
      </a>

      {/* Floating Music Button */}
      <button
        onClick={toggleMusic}
        className={`floating-btn ${isPlaying ? 'active-music' : ''}`}
        aria-label={isPlaying ? 'Mute Background Lullaby' : 'Play Background Lullaby'}
        title={isPlaying ? 'Pause Music' : 'Play Lullaby'}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        <span className="floating-tooltip">
          {isPlaying ? 'Mute Lullaby' : 'Play Nursery Music'}
        </span>
      </button>
    </div>
  );
}
