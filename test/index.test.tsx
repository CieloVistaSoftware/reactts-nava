// Main test runner
import '@testing-library/jest-dom';

describe('Component Tests', () => {
  // Run tests for all component categories
  describe('Home Components', () => {
    require('./home/index.test');
  });
  
  describe('Layout Components', () => {
    require('./layout/index.test');
  });
});
