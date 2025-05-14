import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogSection from '../../src/components/home/BlogSection';

describe('BlogSection Component', () => {
  test('renders the blog section', () => {
    render(<BlogSection />);
    
    // Check if the blog section container exists
    const sectionElement = document.querySelector('section');
    expect(sectionElement).toBeInTheDocument();
    
    // Verify that blog posts or cards are rendered
    const blogItems = document.querySelectorAll('.blog-item');
    expect(blogItems.length).toBeGreaterThan(0);
    
    // Check for blog titles
    const blogTitles = screen.getAllByRole('heading');
    expect(blogTitles.length).toBeGreaterThan(0);
  });
});
