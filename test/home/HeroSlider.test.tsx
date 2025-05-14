import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSlider from '../../src/components/home/HeroSlider';

describe('HeroSlider Component', () => {
  test('renders the hero slider', () => {
    render(<HeroSlider />);
    
    // Check if the slider container exists
    const sliderElement = document.querySelector('.hero-slider');
    expect(sliderElement).toBeInTheDocument();
    
    // Check for slide elements
    const slides = document.querySelectorAll('.slide');
    expect(slides.length).toBeGreaterThan(0);
    
    // Check for slider content like headings or buttons
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
    
    // Check for slider navigation controls
    const navControls = document.querySelectorAll('.slider-nav');
    expect(navControls.length).toBeGreaterThan(0);
  });
});
