import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TeamSection from '../../src/components/home/TeamSection';

describe('TeamSection Component', () => {
  test('renders the team section', () => {
    render(<TeamSection />);
    
    // Check if the team section container exists
    const sectionElement = document.querySelector('section');
    expect(sectionElement).toBeInTheDocument();
    
    // Verify team member cards are rendered
    const teamMembers = document.querySelectorAll('.team-member');
    expect(teamMembers.length).toBeGreaterThan(0);
    
    // Check for team member names
    const memberNames = screen.getAllByRole('heading');
    expect(memberNames.length).toBeGreaterThan(0);
    
    // Check for team member images
    const memberImages = document.querySelectorAll('img');
    expect(memberImages.length).toBeGreaterThan(0);
  });
});
