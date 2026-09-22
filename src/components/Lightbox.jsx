import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
        
        <div className="lightbox-header">
          <div>
            <span style={{ fontSize: '0.85rem', color: 'var(--peach)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {item.category}
            </span>
            <h3 className="lightbox-title">{item.title}</h3>
          </div>
          <button 
            onClick={onClose} 
            className="lightbox-close-btn"
            aria-label="Close Lightbox"
          >
            <X size={26} />
          </button>
        </div>

        <div className="lightbox-body">
          <img 
            src={item.image} 
            alt={item.title} 
            className="lightbox-img" 
          />

          <button 
            onClick={onPrev} 
            className="lightbox-nav-btn lightbox-prev"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <button 
            onClick={onNext} 
            className="lightbox-nav-btn lightbox-next"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="lightbox-footer">
          "{item.caption}"
        </div>

      </div>
    </div>
  );
}
