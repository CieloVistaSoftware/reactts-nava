import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSlider from '../components/home/HeroSlider';
import AboutSection from '../components/home/AboutSection';
import IntroSection from '../components/home/IntroSection';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection from '../components/home/StatsSection';
import TeamSection from '../components/home/TeamSection';
import WorkProcessSection from '../components/home/WorkProcessSection';
import BlogSection from '../components/home/BlogSection';
import TestimonialSection from '../components/home/TestimonialSection';
import { initAllScripts } from '../utils/initScripts';

const HomePage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Nava Tech for Software Development';
    
    // Initialize all external JavaScript libraries with a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initAllScripts();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <HeroSlider />
      <AboutSection />
      <IntroSection />
      <ServicesSection />
      <StatsSection />
      <TeamSection />
      <WorkProcessSection />
      <BlogSection />
      <TestimonialSection />
    </Layout>
  );
};

export default HomePage;