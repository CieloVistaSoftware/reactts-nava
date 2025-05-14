import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ComponentTestHarness from './ComponentTestHarness';

// This file is for development testing only
// For actual component testing, use the individual test files

// Get the root element to render into
const container = document.getElementById('root');

// Only render if we're in a browser environment with a valid container
if (container) {
  const root = createRoot(container);
  
  // Wrap the test harness in BrowserRouter to support components that use routing
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <ComponentTestHarness />
      </BrowserRouter>
    </React.StrictMode>
  );
}
