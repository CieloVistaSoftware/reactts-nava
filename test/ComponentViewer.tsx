import React from 'react';
import { useParams } from 'react-router-dom';
import AboutSection from '../src/components/home/AboutSection';
import BlogSection from '../src/components/home/BlogSection';
import HeroSlider from '../src/components/home/HeroSlider';
import IntroSection from '../src/components/home/IntroSection';
import ServicesSection from '../src/components/home/ServicesSection';
import StatsSection from '../src/components/home/StatsSection';
import TeamSection from '../src/components/home/TeamSection';
import TestimonialSection from '../src/components/home/TestimonialSection';
import WorkProcessSection from '../src/components/home/WorkProcessSection';
import Footer from '../src/components/layout/Footer';
import Header from '../src/components/layout/Header';
import Layout from '../src/components/layout/Layout';
import PageHeader from '../src/components/layout/PageHeader';

// Component map for rendering
const componentMap = {
  // Home components
  'AboutSection': AboutSection,
  'BlogSection': BlogSection,
  'HeroSlider': HeroSlider,
  'IntroSection': IntroSection,
  'ServicesSection': ServicesSection,
  'StatsSection': StatsSection,
  'TeamSection': TeamSection,
  'TestimonialSection': TestimonialSection,
  'WorkProcessSection': WorkProcessSection,
  
  // Layout components
  'Footer': Footer,
  'Header': Header,
  'Layout': Layout,
  'PageHeader': PageHeader,
};

const ComponentViewer = () => {
  const { componentName } = useParams();
  
  if (!componentName || !componentMap[componentName]) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Component not found</h2>
        <p>Please select a valid component to view</p>
      </div>
    );
  }
  
  const Component = componentMap[componentName];
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>{componentName}</h1>
      <div style={{ border: '1px solid #ddd', padding: '20px', marginTop: '20px' }}>
        <Component />
      </div>
    </div>
  );
};

export default ComponentViewer;
