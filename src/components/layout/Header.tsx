import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onMobileMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMobileMenuClick }) => {
  const location = useLocation();
  const [activePath, setActivePath] = useState<string>('');

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const isActive = (path: string): boolean => {
    return activePath === path;
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      zIndex: 1000,
      height: '5rem', // Fixed height to match scroll padding
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Top Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem',
        backgroundColor: '#f5f5f5',
        height: '2rem'
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>Welcome to Nava Tech</p>
        <nav style={{
          display: 'flex',
          gap: '1.5rem'
        }}>
          <a href="mailto:info@navatech.com" style={{
            color: '#666',
            textDecoration: 'none',
            fontSize: '0.9rem'
          }}>info@navatech.com</a>
          <a href="tel:+917418785163" style={{
            color: '#666',
            textDecoration: 'none',
            fontSize: '0.9rem'
          }}>+91 7418785163</a>
        </nav>
      </div>

      {/* Main Navigation */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        height: '3rem',
        flexGrow: 1,
        backgroundColor: '#fff'
      }}>
        {/* Logo */}
        <Link to="/" style={{
          textDecoration: 'none',
          color: '#000',
          fontWeight: 700,
          fontSize: '1.5rem'
        }}>
          NAVA<span style={{ color: '#007bff' }}>TECH</span>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'flex',
          gap: '2rem',
          '@media screen and (max-width: 768px)': {
            display: 'none'
          }
        } as React.CSSProperties}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={onMobileMenuClick}
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

// Helper component for navigation links
const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link
    to={to}
    style={{
      color: '#333',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: 500,
      padding: '0.5rem',
      transition: 'color 0.2s ease'
    }}
    onMouseEnter={(e) => (e.currentTarget.style.color = '#007bff')}
    onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
  >
    {children}
  </Link>
);

export default Header;