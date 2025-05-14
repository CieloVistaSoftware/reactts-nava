# Nava Tech - Modern React TypeScript Website

A modern, responsive website built with React, TypeScript, and Vite. This project showcases a professional business website with smooth scrolling, optimized performance, and a beautiful UI.

## 🚀 Features

- Built with React 18 and TypeScript
- Vite for fast development and building
- Responsive design that works on all devices
- Smooth scrolling with section height consistency
- Modern UI with beautiful transitions
- Component-based architecture
- Backend API integration with Express
- Visual regression testing support
- Comprehensive test suite

## 🏗 Project Structure

| Directory/File | Description |
|---------------|-------------|
| `/src` | Source code for the React application |
| `/src/components` | Reusable React components |
| `/src/pages` | Page components and routing |
| `/src/hooks` | Custom React hooks |
| `/src/utils` | Utility functions and helpers |
| `/backend` | Express.js backend server code |
| `/public` | Static assets and HTML template |
| `/build` | Production build output |
| `/test` | Test configurations and utilities |

### Key Components

| Component | Purpose |
|-----------|----------|
| `Layout.tsx` | Main layout wrapper with header and footer |
| `Header.tsx` | Navigation and branding component |
| `WorkProcessSection.tsx` | Work process showcase section |
| `ServicesSection.tsx` | Services showcase with cards |
| `TeamSection.tsx` | Team member showcase |
| `AboutSection.tsx` | Company information section |
| `ContactSection.tsx` | Contact form and information |

## 🛠 Setup and Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd reactts-nava
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. For backend development, in a separate terminal:
```bash
cd backend
npm install
npm start
```

## 🎨 Design Decisions

### Component Architecture
- All components are written in TypeScript for type safety
- Consistent 5rem section heights for smooth scrolling
- CSS-in-JS for component-specific styling
- Responsive design using flexbox and CSS Grid
- Modular component structure for reusability

### Performance Optimizations
- Code splitting for optimized loading
- Image optimization and lazy loading
- Vite for fast development and production builds
- Minimized bundle size

### User Experience
- Smooth scrolling behavior
- Consistent navigation experience
- Responsive design for all devices
- Loading states and error handling
- Accessible design patterns

## 🧪 Testing

The project includes several types of tests:

1. Unit Tests:
```bash
npm test
```

2. Visual Regression Tests:
```bash
npm run test:visual
```

3. Component Tests:
```bash
npm run test:component
```

## 📚 Available Scripts

| Command | Purpose |
|---------|----------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm test` | Run test suite |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000
VITE_EMAIL_SERVICE_KEY=your_email_service_key
```

### Backend Configuration
Configure backend settings in `backend/config.js`:

```javascript
module.exports = {
  port: process.env.PORT || 3000,
  emailService: process.env.EMAIL_SERVICE,
  // other configurations
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. The `build` directory can be deployed to any static hosting service:
- Vercel
- Netlify
- AWS S3
- GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React Team
- Vite Team
- TypeScript Team
- All contributors and maintainers
