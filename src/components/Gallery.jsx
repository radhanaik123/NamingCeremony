import React, { useState, useEffect, useRef } from 'react';
import { Upload, ImagePlus, Trash2, Sparkles, Eye, Camera } from 'lucide-react';
import Lightbox from './Lightbox';

export default function Gallery({ themeBg }) {
  const [photos, setPhotos] = useState(() => {
    try {
      const saved = localStorage.getItem('naik_family_uploaded_photos');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.warn('Could not load saved photos:', e);
    }
    return [];
  });

  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!files || files.length === 0) return;

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newPhoto = {
          id: Date.now() + Math.random(),
          image: event.target.result,
          title: file.name.replace(/\.[^/.]+$/, "") || "Sweet Memory",
          category: "Original Photo",
          caption: "Uploaded with love by family & friends",
          style: Math.random() > 0.5 ? "polaroid" : "standard",
        };

        setPhotos((prev) => {
          const updated = [newPhoto, ...prev];
          try {
            localStorage.setItem('naik_family_uploaded_photos', JSON.stringify(updated.slice(0, 20)));
          } catch (err) {
            console.warn('Storage quota reached for local photos');
          }
          return updated;
        });
      };
      reader.readAsDataURL(file);
    });

    if (e.target) e.target.value = '';
  };

  const handleDeletePhoto = (e, indexToDelete) => {
    e.stopPropagation();
    setPhotos((prev) => {
      const updated = prev.filter((_, idx) => idx !== indexToDelete);
      try {
        localStorage.setItem('naik_family_uploaded_photos', JSON.stringify(updated));
      } catch (err) {}
      return updated;
    });
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all uploaded photos?')) {
      setPhotos([]);
      localStorage.removeItem('naik_family_uploaded_photos');
    }
  };

  return (
    <section 
      id="gallery" 
      className="invitation-section gallery-themed-section"
      style={{
        backgroundImage: themeBg ? `url(${themeBg})` : undefined,
      }}
    >
      <div className="container">
        <div className="gallery-card-shell">
          
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#C5A156', marginBottom: '0.35rem' }}>
              <Sparkles size={18} />
              <span className="hand-note" style={{ fontSize: '1.5rem', color: 'var(--sage-dark)' }}>Live Photo Scrapbook</span>
              <Sparkles size={18} />
            </div>

            <h2 style={{ fontSize: 'clamp(2.6rem, 4vw, 3.8rem)', color: 'var(--sage-dark)' }}>
              Celebration Memories
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '640px', margin: '0.5rem auto 1.5rem' }}>
              Upload your original photos from the ceremony in Belagavi to create a living memory album.
            </p>

            {/* Hidden File Input & Upload Trigger Button */}
            <input
              type="file"
              ref={fileInputRef}
              multiple
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="gallery-upload-btn-label"
                aria-label="Upload"
              >
                <Camera size={20} />
                <span>Upload</span>
              </button>

              {photos.length > 0 && (
                <button
                  onClick={handleClearAll}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(192, 93, 103, 0.6)',
                    color: '#A84B53',
                    padding: '0.8rem 1.6rem',
                    borderRadius: 'var(--radius-full)',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                  }}
                >
                  Clear All ({photos.length})
                </button>
              )}
            </div>
          </div>

          {/* If No Photos Uploaded Yet: Empty State */}
          {photos.length === 0 ? (
            <div 
              className="gallery-upload-zone"
              onClick={() => fileInputRef.current?.click()}
            >
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#F4E8CE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sage-dark)' }}>
                <ImagePlus size={36} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--sage-dark)' }}>
                Your Scrapbook is Ready
              </h3>
              <p style={{ color: 'var(--text-muted)', maxWidth: '440px', fontSize: '0.98rem' }}>
                No pre-loaded images are shown. Click here or use the button above to upload your authentic ceremony photos!
              </p>
            </div>
          ) : (
            /* Uploaded Photos Grid */
            <div className="gallery-scrapbook-grid">
              {photos.map((item, index) => {
                const isPolaroid = item.style === 'polaroid';
                return (
                  <div 
                    key={item.id} 
                    className={`gallery-item ${isPolaroid ? 'gallery-polaroid' : ''}`}
                    onClick={() => setActiveLightboxIndex(index)}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => { if (e.key === 'Enter') setActiveLightboxIndex(index); }}
                    aria-label={`View ${item.title}`}
                  >
                    <button
                      className="gallery-delete-btn"
                      onClick={(e) => handleDeletePhoto(e, index)}
                      title="Remove Photo"
                      aria-label="Remove Photo"
                    >
                      <Trash2 size={14} />
                    </button>

                    <div className="gallery-photo-box">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="gallery-img" 
                      />
                    </div>
                    <div className="gallery-caption">
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>

        {/* Lightbox Modal for Uploaded Photos */}
        {activeLightboxIndex !== null && photos[activeLightboxIndex] && (
          <Lightbox
            item={photos[activeLightboxIndex]}
            onClose={() => setActiveLightboxIndex(null)}
            onPrev={() => setActiveLightboxIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1))}
            onNext={() => setActiveLightboxIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1))}
          />
        )}
      </div>
    </section>
  );
}
