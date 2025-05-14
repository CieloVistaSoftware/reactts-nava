import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ComponentTestHarness from './ComponentTestHarness';

// Wrap the test harness in BrowserRouter to support components that use routing
const App = () => (
  <BrowserRouter>
    <ComponentTestHarness />
  </BrowserRouter>
);

// Get the container
const container = document.getElementById('root');

// Create a root
if (container) {
  const root = createRoot(container);
  
  // Render the app
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
