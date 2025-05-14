import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestimonialSection from '../../src/components/home/TestimonialSection';

describe('TestimonialSection Component', () => {
  test('renders the testimonial section', () => {
    render(<TestimonialSection />);
    
    // Check if the testimonial section container exists
    const sectionElement = document.querySelector('section');
    expect(sectionElement).toBeInTheDocument();
    
    // Verify testimonial items are rendered
    const testimonials = document.querySelectorAll('.testimonial-item');
    expect(testimonials.length).toBeGreaterThan(0);
    
    // Check for testimonial quotes
    const quotes = document.querySelectorAll('.testimonial-quote');
    expect(quotes.length).toBeGreaterThan(0);
    
    // Check for client names
    const clientNames = screen.getAllByRole('heading');
    expect(clientNames.length).toBeGreaterThan(0);
  });
});
