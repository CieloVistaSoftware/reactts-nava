import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ServicesSection from '../../src/components/home/ServicesSection';

describe('ServicesSection Component', () => {
  test('renders the services section', () => {
    render(<ServicesSection />);
    
    // Check if the services section container exists
    const sectionElement = document.querySelector('section');
    expect(sectionElement).toBeInTheDocument();
    
    // Verify service cards or items are rendered
    const serviceItems = document.querySelectorAll('.service-item');
    expect(serviceItems.length).toBeGreaterThan(0);
    
    // Check for service titles
    const serviceTitles = screen.getAllByRole('heading');
    expect(serviceTitles.length).toBeGreaterThan(0);
  });
});
