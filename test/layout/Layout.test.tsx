import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../../src/components/layout/Layout';

// Create a mock for the Header and Footer components
jest.mock('../../src/components/layout/Header', () => {
  return function MockHeader() {
    return <div data-testid="mock-header">Mock Header</div>;
  };
});

jest.mock('../../src/components/layout/Footer', () => {
  return function MockFooter() {
    return <div data-testid="mock-footer">Mock Footer</div>;
  };
});

describe('Layout Component', () => {
  test('renders the layout with header, content, and footer', () => {
    render(
      <BrowserRouter>
        <Layout>
          <div data-testid="mock-content">Content</div>
        </Layout>
      </BrowserRouter>
    );
    
    // Check if the header is rendered
    const header = screen.getByTestId('mock-header');
    expect(header).toBeInTheDocument();
    
    // Check if the content is rendered
    const content = screen.getByTestId('mock-content');
    expect(content).toBeInTheDocument();
    
    // Check if the footer is rendered
    const footer = screen.getByTestId('mock-footer');
    expect(footer).toBeInTheDocument();
  });
});
