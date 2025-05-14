import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatsSection from '../../src/components/home/StatsSection';

describe('StatsSection Component', () => {
  test('renders the stats section', () => {
    render(<StatsSection />);
    
    // Check if the stats section container exists
    const sectionElement = document.querySelector('section');
    expect(sectionElement).toBeInTheDocument();
    
    // Verify stats counters or numbers are rendered
    const statItems = document.querySelectorAll('.stat-item');
    expect(statItems.length).toBeGreaterThan(0);
    
    // Check for stats values/numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    expect(statNumbers.length).toBeGreaterThan(0);
  });
});
