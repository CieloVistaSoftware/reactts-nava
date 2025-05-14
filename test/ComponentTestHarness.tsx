import React, { useState, useEffect, CSSProperties, ComponentType } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../src/App.css'; // Include your main CSS

// Import all components from home
import AboutSection from '../src/components/home/AboutSection';
import BlogSection from '../src/components/home/BlogSection';
import HeroSlider from '../src/components/home/HeroSlider';
import IntroSection from '../src/components/home/IntroSection';
import ServicesSection from '../src/components/home/ServicesSection';
import StatsSection from '../src/components/home/StatsSection';
import TeamSection from '../src/components/home/TeamSection';
import TestimonialSection from '../src/components/home/TestimonialSection';
import WorkProcessSection from '../src/components/home/WorkProcessSection';

// Import all components from layout
import Footer from '../src/components/layout/Footer';
import Header from '../src/components/layout/Header';
import Layout from '../src/components/layout/Layout';
import PageHeader from '../src/components/layout/PageHeader';

// Component map for rendering
const componentMap: Record<string, React.ComponentType<any>> = {
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
  'Layout': (props) => <Layout>{props.children || <div>Layout Component</div>}</Layout>,
  'PageHeader': () => <PageHeader title="Page Title" backgroundImage="/images/backgrounds/page-header-bg.jpg" />,
};

// CSS styles for the component test harness
const styles: Record<string, CSSProperties> = {
  harness: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  selector: {
    marginBottom: '20px',
    background: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
  },
  groups: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '20px',
  },
  group: {
    flex: 1,
    minWidth: '300px',
  },
  buttonGroup: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '10px',
  },
  button: {
    background: '#4285f4',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  activeButton: {
    background: '#1a5336',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  display: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    background: 'white',
  },
  container: {
    marginTop: '20px',
    borderTop: '1px solid #eee',
    paddingTop: '20px',
  },
  placeholder: {
    textAlign: 'center' as const,
    padding: '40px',
    color: '#999',
    background: '#f9f9f9',
    borderRadius: '4px',
  }
};

// Component selector and renderer
const ComponentTestHarness: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  
  // Parse component from URL if available
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const component = searchParams.get('component');
    if (component && componentMap[component]) {
      setSelectedComponent(component);
    }
  }, [location]);
  
  // Update URL when component changes
  const handleSelectComponent = (componentName: string) => {
    setSelectedComponent(componentName);
    navigate(`/?component=${componentName}`);
  };
  
  const renderComponent = () => {
    if (!selectedComponent) return <div style={styles.placeholder}>Select a component to render</div>;
    
    const Component = componentMap[selectedComponent];
    return <Component />;
  };
  
  return (
    <div style={styles.harness}>
      <div style={styles.selector}>
        <h1>Component Test Harness</h1>
        <div style={styles.groups}>
          <div style={styles.group}>
            <h2>Home Components</h2>
            <div style={styles.buttonGroup}>
              <button onClick={() => handleSelectComponent('AboutSection')} style={selectedComponent === 'AboutSection' ? styles.activeButton : styles.button}>About Section</button>
              <button onClick={() => handleSelectComponent('BlogSection')} style={selectedComponent === 'BlogSection' ? styles.activeButton : styles.button}>Blog Section</button>
              <button onClick={() => handleSelectComponent('HeroSlider')} style={selectedComponent === 'HeroSlider' ? styles.activeButton : styles.button}>Hero Slider</button>
              <button onClick={() => handleSelectComponent('IntroSection')} style={selectedComponent === 'IntroSection' ? styles.activeButton : styles.button}>Intro Section</button>
              <button onClick={() => handleSelectComponent('ServicesSection')} style={selectedComponent === 'ServicesSection' ? styles.activeButton : styles.button}>Services Section</button>
              <button onClick={() => handleSelectComponent('StatsSection')} style={selectedComponent === 'StatsSection' ? styles.activeButton : styles.button}>Stats Section</button>
              <button onClick={() => handleSelectComponent('TeamSection')} style={selectedComponent === 'TeamSection' ? styles.activeButton : styles.button}>Team Section</button>
              <button onClick={() => handleSelectComponent('TestimonialSection')} style={selectedComponent === 'TestimonialSection' ? styles.activeButton : styles.button}>Testimonial Section</button>
              <button onClick={() => handleSelectComponent('WorkProcessSection')} style={selectedComponent === 'WorkProcessSection' ? styles.activeButton : styles.button}>Work Process Section</button>
            </div>
          </div>
          
          <div style={styles.group}>
            <h2>Layout Components</h2>
            <div style={styles.buttonGroup}>
              <button onClick={() => handleSelectComponent('Footer')} style={selectedComponent === 'Footer' ? styles.activeButton : styles.button}>Footer</button>
              <button onClick={() => handleSelectComponent('Header')} style={selectedComponent === 'Header' ? styles.activeButton : styles.button}>Header</button>
              <button onClick={() => handleSelectComponent('Layout')} style={selectedComponent === 'Layout' ? styles.activeButton : styles.button}>Layout</button>
              <button onClick={() => handleSelectComponent('PageHeader')} style={selectedComponent === 'PageHeader' ? styles.activeButton : styles.button}>Page Header</button>
            </div>
          </div>
        </div>
      </div>
      
      <div style={styles.display}>
        <h2>{selectedComponent || 'No Component Selected'}</h2>
        <div style={styles.container}>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default ComponentTestHarness;


