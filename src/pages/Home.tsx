// src/pages/Home.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { Publications } from '../components/Publications';
import { About } from '../components/About';

export function Home() {
  const location = useLocation();

  {/*route the header so that even from separate pages it goes directly to the card in the home page */}
  useEffect(() => {
    // Check if there is a '#' in the URL (like #education)
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // A tiny 100ms delay ensures React has completely finished drawing the page
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If there's no hash (just '/'), scroll to the very top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="w-full flex flex-col pb-20">
      <div id="hero" className="scroll-mt-12"><Hero /></div>
      <div id="about" className="scroll-mt-12"><About /></div>
      <div id="education" className="scroll-mt-12"><Education /></div>
      <div id="experience" className="scroll-mt-12"><Experience /></div>
      <div id="publications" className="scroll-mt-12"><Publications /></div>
    </div>
  );
}