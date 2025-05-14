# Visual Component Testing

This directory contains a visual testing framework for all components in the Nava Tech website project.

## What is Visual Testing?

Visual testing allows you to see the actual rendered output of your React components in isolation. This makes it easier to:

1. Verify that components look correct
2. Debug styling issues
3. Develop components in isolation
4. Ensure components work correctly independently

## How to Use

### Starting the Visual Test Harness

```bash
# On Windows
npm run test:visual-win

# On Mac/Linux
npm run test:visual
```

Then open your browser to http://localhost:3006

### Testing a Specific Component

You can directly view a specific component by using our helper scripts:

```bash
# On Windows Command Prompt
test-component.bat AboutSection

# On PowerShell
.\test-component.ps1 AboutSection

# On Mac/Linux
./test-component.sh AboutSection
```

Or manually by navigating to:
```
http://localhost:3006/?component=AboutSection
```

## Available Components

### Home Components
- AboutSection
- BlogSection
- HeroSlider
- IntroSection
- ServicesSection
- StatsSection
- TeamSection
- TestimonialSection
- WorkProcessSection

### Layout Components
- Footer
- Header
- Layout
- PageHeader

## Adding New Components to the Test Harness

To add a new component to the visual test harness:

1. Import the component in `ComponentTestHarness.tsx`
2. Add the component to the `componentMap` in the same file
3. Add a button in the appropriate section of the harness

## Troubleshooting

- If styles aren't loading correctly, check that all CSS dependencies are being properly imported
- If components fail to render, check for missing props or dependencies
- If routing doesn't work, make sure you're testing components that need routing within the `BrowserRouter` context
