import React, { useState } from 'react';
import { Send, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WishesForm({ onAddWish, themeBg }) {
  const [formData, setFormData] = useState({
    name: '',
    relationship: 'Family Friend',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please write your name.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Please share a few warm words of blessing (at least 5 characters).';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    
    // Trigger festive celebratory pastel confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#96A199', '#E8B3B7', '#D7B879', '#FFF8F0'],
      });
    } catch (e) {
      // safe fallback
    }

    // Pass new wish up to parent
    onAddWish({
      id: Date.now(),
      author: formData.name.trim(),
      relationship: formData.relationship,
      message: formData.message.trim(),
    });

    setSuccess(true);
    setFormData({ name: '', relationship: 'Family Friend', message: '' });

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <section id="send-wishes" className="invitation-section">
      <div className="container">
        <div 
          className="send-wishes-paper with-theme-bg"
          style={{
            backgroundImage: themeBg ? `url(${themeBg})` : undefined,
          }}
        >
          <div className="wishes-form-inner-box">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#D7B879', marginBottom: '0.25rem' }}>
              <Sparkles size={18} />
              <span className="hand-note" style={{ fontSize: '1.4rem' }}>Share Your Love</span>
              <Sparkles size={18} />
            </div>

            <h2 style={{ fontSize: 'clamp(2.4rem, 3.6vw, 3.4rem)', color: 'var(--sage-dark)', marginBottom: '0.5rem' }}>
              Send Your Wishes
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
              Leave a timeless blessing or loving advice for Baby Aryan to cherish as he grows.
            </p>

            {success && (
              <div className="success-banner" role="alert">
                <CheckCircle2 size={24} color="#547160" />
                <span>Your blessing has been sent with love. Thank you!</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="wisher-name" className="form-label">
                  Your Name *
                </label>
                <input
                  id="wisher-name"
                  type="text"
                  placeholder="e.g. Priya aunty & Karthik uncle"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
                {errors.name && <span style={{ color: '#C05D67', fontSize: '0.85rem' }}>{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="wisher-relation" className="form-label">
                  Your Relationship / Connection
                </label>
                <select
                  id="wisher-relation"
                  value={formData.relationship}
                  onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                  className="form-input"
                  style={{ cursor: 'pointer' }}
                >
                  <option value="Family Friend">Family Friend</option>
                  <option value="Grandparent">Grandparent</option>
                  <option value="Aunt / Uncle">Aunt / Uncle</option>
                  <option value="Cousin">Cousin</option>
                  <option value="Well Wisher">Well Wisher</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="wisher-message" className="form-label">
                  Blessing & Message *
                </label>
                <textarea
                  id="wisher-message"
                  rows="4"
                  placeholder="Write your heartfelt blessing, prayers or wishes for little Aryan..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                />
                {errors.message && <span style={{ color: '#C05D67', fontSize: '0.85rem' }}>{errors.message}</span>}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button
                  type="submit"
                  className="btn-pill-gold"
                  style={{ background: 'var(--sage)', color: '#ffffff', border: 'none', padding: '0.9rem 2.8rem', fontSize: '1.1rem' }}
                >
                  <Send size={18} />
                  <span>Send Blessing</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
