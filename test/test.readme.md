# Running Component Tests in React TS Nava Project

This guide explains different ways to run tests in the React TS Nava project, focusing on individual component testing.

## Available Testing Approaches

This project supports two main types of testing:

1. **Unit Tests** - Traditional Jest/React Testing Library tests
2. **Visual Component Tests** - Interactive test harness for visual verification

## Running Unit Tests

### Run All Tests

```powershell
npm test
```

### Run Specific Component Groups

```powershell
# Run all component tests
npm run test:components

# Run only home component tests
npm run test:home

# Run only layout component tests
npm run test:layout
```

### Run a Single Component Test

```powershell
# Run a specific test file (AboutSection example)
npm test -- -t "AboutSection"

# Or use the full file pattern
npm test -- test/home/AboutSection.test.tsx
```

### Run Tests in Watch Mode

```powershell
# Start Jest in watch mode for a specific component
npm test -- --watch -t "AboutSection"
```

## Running Visual Component Tests

Visual tests allow you to see the actual rendered output of components in isolation.

### Start the Visual Test Harness

```powershell
# On Windows
.\test-component.ps1 AboutSection
```

This will:
1. Start the test server on port 3006
2. Open a browser to the component
3. Render the component in isolation

### Available Visual Test Scripts

- `test-component.ps1` - PowerShell script (Windows)
- `test-component.bat` - Batch script (Windows Command Prompt)
- `test-component.sh` - Bash script (Mac/Linux)

### Examples

```powershell
# Test home components
.\test-component.ps1 AboutSection
.\test-component.ps1 HeroSlider
.\test-component.ps1 BlogSection

# Test layout components
.\test-component.ps1 Header
.\test-component.ps1 Footer
```

## Test Snapshots

The tests use Jest snapshots for regression testing. When you make intentional changes to a component, you'll need to update the snapshots:

```powershell
# Update snapshots for a specific component
npm test -- -u -t "AboutSection"

# Update all snapshots
npm test -- -u
```

## Continuous Integration

When running in CI environments, use:

```powershell
npm test -- --ci
```

## Troubleshooting

### Tests Not Finding Elements

If your tests are failing to find elements, check:
1. Component selectors (class names, data-testid)
2. Rendering context (e.g., Router, Context providers)
3. Asynchronous operations (use waitFor)

Example fix:
```tsx
// Instead of:
const element = screen.getByText('Some Text');

// Use:
await waitFor(() => {
  const element = screen.getByText('Some Text');
  expect(element).toBeInTheDocument();
});
```

### Visual Tests Not Showing Styles

If components in visual tests don't look right:
1. Verify CSS imports in test files
2. Check if the component needs specific context providers
3. Ensure all external dependencies (like images) are available

## Adding New Tests

To add a test for a new component:

1. Create a test file in the appropriate directory (`test/home/` or `test/layout/`)
2. Import the component and testing utilities
3. Write test cases that render and verify the component
4. Add snapshots if needed

Example:
```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import YourComponent from '../../src/components/path/YourComponent';

describe('YourComponent', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<YourComponent />);
    
    // Verify component elements
    const element = screen.getByText('Expected Text');
    expect(element).toBeInTheDocument();
    
    // Snapshot
    expect(asFragment()).toMatchSnapshot();
  });
});
```
