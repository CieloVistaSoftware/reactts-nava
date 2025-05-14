import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WorkProcessSection from '../../src/components/home/WorkProcessSection';

describe('WorkProcessSection Component', () => {
  test('renders the work process section', () => {
    render(<WorkProcessSection />);
    
    // Check if the work process section container exists
    const sectionElement = document.querySelector('section');
    expect(sectionElement).toBeInTheDocument();
    
    // Verify process steps are rendered
    const processSteps = document.querySelectorAll('.process-step');
    expect(processSteps.length).toBeGreaterThan(0);
    
    // Check for process step titles
    const stepTitles = screen.getAllByRole('heading');
    expect(stepTitles.length).toBeGreaterThan(0);
  });
});
