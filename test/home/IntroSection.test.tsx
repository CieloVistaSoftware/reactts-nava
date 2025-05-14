import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IntroSection from '../../src/components/home/IntroSection';

describe('IntroSection Component', () => {
  test('renders the intro section', () => {
    render(<IntroSection />);
    
    // Check if the intro section container exists
    const sectionElement = document.querySelector('section');
    expect(sectionElement).toBeInTheDocument();
    
    // Verify intro content elements are rendered
    const contentContainer = document.querySelector('.intro-content');
    expect(contentContainer).toBeInTheDocument();
    
    // Check for headings
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });
});
