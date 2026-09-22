import React, { useState, useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'wishes', label: 'Wishes' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <nav className="navbar-wrapper" aria-label="Main Navigation">
      <div className={`navbar-card ${isScrolled ? 'scrolled' : ''}`}>
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); onNavigate('hero'); }}
          className="navbar-brand"
        >
          <Sparkles size={18} color="#C5A156" />
          <span>The Naik Family</span>
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`nav-link-btn ${activeSection === item.id ? 'active' : ''}`}
                aria-label={`Scroll to ${item.label}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
