import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// Import service pages
import ApplicationDevelopment from './pages/services/ApplicationDevelopment';
import ApplicationIntegration from './pages/services/ApplicationIntegration';
import ApplicationMaintenance from './pages/services/ApplicationMaintenance';
import ApplicationManagement from './pages/services/ApplicationManagement';
import ApplicationTesting from './pages/services/ApplicationTesting';
import CustomAppDevelopment from './pages/services/CustomAppDevelopment';

// Import Cyber Security service pages
import ApplicationSecurity from './pages/services/ApplicationSecurity';
import DataSecurity from './pages/services/DataSecurity';
import EmailSecurity from './pages/services/EmailSecurity';
import MobileAppSecurity from './pages/services/MobileAppSecurity';
import NetworkSecurity from './pages/services/NetworkSecurity';
import WebsiteSecurity from './pages/services/WebsiteSecurity';

// Import main pages
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import ContactUs from './pages/ContactUs';

import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    // Any global initialization can go here
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Main Pages Routes */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />
        
        {/* Application Services Routes */}
        <Route path="/services/application-development" element={<ApplicationDevelopment />} />
        <Route path="/services/application-integration" element={<ApplicationIntegration />} />
        <Route path="/services/application-maintenance" element={<ApplicationMaintenance />} />
        <Route path="/services/application-management" element={<ApplicationManagement />} />
        <Route path="/services/application-testing" element={<ApplicationTesting />} />
        <Route path="/services/custom-app-development" element={<CustomAppDevelopment />} />
        
        {/* Cyber Security Routes */}
        <Route path="/services/application-security" element={<ApplicationSecurity />} />
        <Route path="/services/data-security" element={<DataSecurity />} />
        <Route path="/services/email-security" element={<EmailSecurity />} />
        <Route path="/services/mobile-app-security" element={<MobileAppSecurity />} />
        <Route path="/services/network-security" element={<NetworkSecurity />} />
        <Route path="/services/website-security" element={<WebsiteSecurity />} />
        
        {/* Additional routes will be added as we create more pages */}
        {/* <Route path="/blog" element={<BlogPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
