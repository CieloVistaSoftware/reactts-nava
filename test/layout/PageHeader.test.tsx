import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import PageHeader from '../../src/components/layout/PageHeader';
import { testImages } from '../__fixtures__/testImages';

describe('PageHeader Component', () => {
  const defaultProps = {
    title: 'Test Page',
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Test Page', url: '/test' }
    ],
    backgroundImage: testImages.header.path
  };

  const renderPageHeader = (props = defaultProps) => {
    return render(
      <BrowserRouter>
        <PageHeader {...props} />
      </BrowserRouter>
    );
  };

  test('renders the page header with title and breadcrumbs', () => {
    renderPageHeader();
    
    // Test title rendering
    expect(screen.getByText('Test Page')).toBeInTheDocument();
    
    // Test breadcrumb rendering
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Test Page')).toBeInTheDocument();
  });

  test('renders with custom props', () => {
    const customProps = {
      title: 'Custom Page',
      breadcrumbs: [
        { label: 'Home', url: '/' },
        { label: 'Section', url: '/section' },
        { label: 'Custom Page', url: '/section/custom' }
      ],
      backgroundImage: testImages.header.path
    };

    renderPageHeader(customProps);
    
    expect(screen.getByText('Custom Page')).toBeInTheDocument();
    expect(screen.getByText('Section')).toBeInTheDocument();
    
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveStyle(`background-image: url(${testImages.header.path})`);
  });
});
