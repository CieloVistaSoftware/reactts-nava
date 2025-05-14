# Component Tests

This directory contains tests for individual React components in the Nava Tech website project.

## Test Structure

The tests are organized by component category:

- `/home`: Tests for all components in the home page sections
- `/layout`: Tests for layout components like Header, Footer, etc.
- `ComponentTestHarness.tsx`: A visual test harness for interactively viewing components
- `ComponentViewer.tsx`: A component for viewing individual components in isolation

## Running Tests

### Running Unit Tests

You can run component tests using these npm scripts:

```bash
# Run all component tests
npm run test:components

# Run only home component tests
npm run test:home

# Run only layout component tests
npm run test:layout
```

### Visual Component Testing

To visually inspect components in isolation:

1. Run the visual test harness:

```bash
# On Windows
npm run test:visual-win

# On Mac/Linux
npm run test:visual
```

2. Open your browser to http://localhost:3006

3. Use the test harness interface to select and view individual components

## Writing New Tests

Each component should have its own test file that:

1. Renders the component
2. Verifies that key elements are present
3. Takes a snapshot for visual regression testing

Example:

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import YourComponent from '../../src/components/path/YourComponent';

describe('YourComponent', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<YourComponent />);
    
    // Test for specific elements
    const element = screen.getByText('Expected Text');
    expect(element).toBeInTheDocument();
    
    // Snapshot test
    expect(asFragment()).toMatchSnapshot();
  });
});
```

## Running Tests

You can run tests using the following npm scripts:

```bash
# Run all component tests
npm run test:components

# Run only home component tests
npm run test:home

# Run only layout component tests
npm run test:layout

# Run tests in watch mode (interactive)
npm test
```

## Test Approach

Each test focuses on an individual component and tests:

1. Whether the component renders without errors
2. If key elements of the component are present in the DOM
3. Basic functionality specific to the component

The tests use React Testing Library and Jest-DOM for assertions.

## Adding New Tests

To add tests for new components:

1. Create a new test file for your component following the naming pattern: `ComponentName.test.tsx`
2. Add the test file to the appropriate directory
3. Update the index.test.tsx file in that directory to include your new test

## Mock Components

For components that have dependencies on context providers or other components, we use Jest's mock functionality to isolate the component being tested.
