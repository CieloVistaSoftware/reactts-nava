import React from 'react';
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
import usePageInit from '../hooks/usePageInit';

const HomePage: React.FC = () => {
  // Initialize page scripts and handle preloader
  usePageInit('Nava Tech for Software Development');

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