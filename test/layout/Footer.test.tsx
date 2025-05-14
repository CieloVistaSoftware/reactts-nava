import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../../src/components/layout/Footer';

describe('Footer Component', () => {
  test('renders the footer', () => {
    render(<Footer />);
    
    // Check if the footer element exists
    const footerElement = document.querySelector('footer');
    expect(footerElement).toBeInTheDocument();
    
    // Verify footer links are rendered
    const footerLinks = document.querySelectorAll('a');
    expect(footerLinks.length).toBeGreaterThan(0);
    
    // Check for copyright text
    const copyrightText = document.querySelector('.copyright');
    expect(copyrightText).toBeInTheDocument();
    
    // Check for social media icons
    const socialIcons = document.querySelectorAll('.social-icons a');
    expect(socialIcons.length).toBeGreaterThan(0);
  });
});
