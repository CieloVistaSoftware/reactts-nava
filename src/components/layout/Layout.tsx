import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add scroll-padding-top to html element for proper anchor scrolling
    document.documentElement.style.scrollPaddingTop = '5rem';
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0);
    
    // Hide preloader after page loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => {
      clearTimeout(timer);
      // Clean up scroll padding and behavior
      document.documentElement.style.scrollPaddingTop = '';
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      {isLoading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255,255,255,0.9)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #f0f0f0',
            borderTop: '3px solid #000',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
        </div>
      )}
      
      <Header />
      
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingTop: '5rem' // Add padding to account for fixed header
      }}>
        {children}
      </main>
      
      <Footer />

      {/* Mobile Navigation */}
      <nav 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 2000,
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem'
        }}
      >
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          ×
        </button>

        <div style={{
          marginTop: '4rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {/* Mobile Menu Links */}
          <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
          <a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
          <a href="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</a>
          <a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
        </div>

        <div style={{
          marginTop: 'auto',
          marginBottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center'
          }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.25rem' }}>
              <span className="icon-facebook"></span>
            </a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.25rem' }}>
              <span className="icon-twitter"></span>
            </a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.25rem' }}>
              <span className="icon-instagram"></span>
            </a>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          opacity: 0.8,
          transition: 'opacity 0.2s ease-in-out',
          zIndex: 1000
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
      >
        ↑
      </button>
    </div>
  );
};

export default Layout;