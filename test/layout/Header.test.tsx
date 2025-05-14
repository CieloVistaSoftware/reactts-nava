import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../src/components/layout/Header';

describe('Header Component', () => {
  test('renders the header', () => {
    // Wrap with BrowserRouter since Header uses useLocation and Link from react-router-dom
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    // Check if the header element exists
    const headerElement = document.querySelector('header');
    expect(headerElement).toBeInTheDocument();
    
    // Verify navigation links are rendered
    const navLinks = document.querySelectorAll('a');
    expect(navLinks.length).toBeGreaterThan(0);
    
    // Check for logo
    const logo = document.querySelector('.logo');
    expect(logo).toBeInTheDocument();
  });
});
