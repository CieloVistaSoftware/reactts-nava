import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

// Directory paths for components
const homeComponentsDir = path.join(__dirname, '../src/components/home');
const layoutComponentsDir = path.join(__dirname, '../src/components/layout');

// Get all component names
const getComponentNames = (directory) => {
  return fs.readdirSync(directory)
    .filter(file => file.endsWith('.tsx'))
    .map(file => path.basename(file, '.tsx'));
};

// Run a specific component test or visual viewer
const runComponentTest = (componentName, isVisual = false) => {
  // Check if component exists
  const homeComponents = getComponentNames(homeComponentsDir);
  const layoutComponents = getComponentNames(layoutComponentsDir);
  
  if (!homeComponents.includes(componentName) && !layoutComponents.includes(componentName)) {
    console.error(`Component "${componentName}" not found.`);
    process.exit(1);
  }
  
  if (isVisual) {
    // Run the component viewer for visual testing
    const process = spawn('npm', ['run', 'test:visual-win'], { stdio: 'inherit', shell: true });
    process.on('close', (code) => {
      console.log(`Visual testing process exited with code ${code}`);
    });
  } else {
    // Run the unit test for this component
    let testDir = 'home';
    if (layoutComponents.includes(componentName)) {
      testDir = 'layout';
    }
    
    const testFile = path.join(__dirname, testDir, `${componentName}.test.tsx`);
    
    // Check if test file exists, if not, suggest creating it
    if (!fs.existsSync(testFile)) {
      console.error(`Test file for "${componentName}" not found at ${testFile}`);
      console.log('Would you like to create a basic test file? (y/n)');
      
      // This part would need user input in a real script
      console.log('Exiting. Please create the test file manually.');
      process.exit(1);
    }
    
    // Run the test
    const process = spawn('npx', ['jest', testFile], { stdio: 'inherit', shell: true });
    process.on('close', (code) => {
      console.log(`Test process exited with code ${code}`);
    });
  }
};

// Parse command line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage:');
  console.log('  npm run test:component ComponentName      # Run unit tests for component');
  console.log('  npm run test:component-visual ComponentName  # Run visual tests for component');
  process.exit(0);
}

const isVisual = args[0] === '--visual';
const componentName = isVisual ? args[1] : args[0];

if (!componentName) {
  console.error('Component name is required.');
  process.exit(1);
}

runComponentTest(componentName, isVisual);
