import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutSection from '../../src/components/home/AboutSection';

describe('AboutSection Component', () => {
  test('renders the about section', () => {
    const { container, asFragment } = render(<AboutSection />);
    
    // Check if the section element with class "about-three" exists
    const sectionElement = document.querySelector('.about-three');
    expect(sectionElement).toBeInTheDocument();
    
    // Verify that the image is rendered
    const images = document.querySelectorAll('img');
    expect(images.length).toBeGreaterThan(0);
    
    // Check for specific content or elements if needed
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
    
    // Take a snapshot of the rendered component for visual comparison
    expect(asFragment()).toMatchSnapshot();
  });
});
