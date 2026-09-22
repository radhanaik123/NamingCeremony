import React, { useState, useEffect } from 'react';
import { invitationData } from './data/invitationData';

// Components
import Navbar from './components/Navbar';
import DecorativeBackground from './components/DecorativeBackground';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import WarmInvite from './components/WarmInvite';
import BabyStory from './components/BabyStory';
import Milestones from './components/Milestones';
import EventDetails from './components/EventDetails';
import Schedule from './components/Schedule';
import WishesCarousel from './components/WishesCarousel';
import WishesForm from './components/WishesForm';
import Gallery from './components/Gallery';
import CartoonVideo from './components/CartoonVideo';
import FloatingControls from './components/FloatingControls';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [wishesList, setWishesList] = useState(() => {
    try {
      const saved = localStorage.getItem('baby_aryan_wishes');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Could not read saved wishes:', e);
    }
    return invitationData.wishes;
  });

  const handleAddWish = (newWish) => {
    setWishesList((prev) => {
      const updated = [newWish, ...prev];
      try {
        localStorage.setItem('baby_aryan_wishes', JSON.stringify(updated));
      } catch (e) {
        console.warn('Could not persist wish:', e);
      }
      return updated;
    });
  };

  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Scroll spy to update active navigation state for Home, Wishes, and Gallery
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      const galleryEl = document.getElementById('gallery');
      const wishesEl = document.getElementById('wishes');

      if (galleryEl && scrollPos >= galleryEl.offsetTop) {
        setActiveSection('gallery');
      } else if (wishesEl && scrollPos >= wishesEl.offsetTop) {
        setActiveSection('wishes');
      } else {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-root">
      {/* Decorative animations & Theme watermark layer */}
      <DecorativeBackground themeBg={invitationData.themeBackgrounds.overallPage} />

      {/* Sticky Centered Navigation with Home, Wishes, Gallery */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        {/* 1. Hero / Invitation Opening with Arched Theme Background */}
        <Hero data={invitationData} />

        {/* 2. Live Countdown Timer */}
        <Countdown 
          targetDate={invitationData.eventDetails.ceremonyDatetime} 
          dateDisplay={invitationData.eventDetails.dateDisplay}
        />

        {/* 3. Warm Invitation Letter */}
        <WarmInvite data={invitationData} />

        {/* 4. Baby Story / Meet Our Little Star */}
        <BabyStory data={invitationData} />

        {/* 5. Little Moments / Milestones */}
        <Milestones milestones={invitationData.milestones} />

        {/* 6. Event Details (Venue, Dress Code) */}
        <EventDetails data={invitationData} />

        {/* 7. Ceremony Schedule */}
        <Schedule schedule={invitationData.schedule} />

        {/* 8. Wishes / Blessings Carousel with Bunny Cradle Theme */}
        <WishesCarousel 
          wishes={wishesList} 
          themeBg={invitationData.themeBackgrounds.wishes} 
        />

        {/* 9. Send Your Wishes Form with Stork Cradle Theme */}
        <WishesForm 
          onAddWish={handleAddWish} 
          themeBg={invitationData.themeBackgrounds.sendWishes} 
        />

        {/* 10. Scrapbook Memories Gallery with Lush Botanical Theme */}
        <Gallery 
          gallery={invitationData.gallery} 
          themeBg={invitationData.themeBackgrounds.gallery} 
        />

        {/* 11. Cartoon Video Section for Little Guests */}
        <CartoonVideo videoData={invitationData.cartoonVideo} />
      </main>

      {/* 11. Closing Footer */}
      <Footer 
        familyName={invitationData.parents.familyName} 
      />

      {/* Floating Call & Music Action Controls */}
      <FloatingControls 
        phone={invitationData.eventDetails.rsvpContact} 
        musicSrc={invitationData.audio.src} 
      />
    </div>
  );
}
