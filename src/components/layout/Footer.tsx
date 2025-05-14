import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/images/fbg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.1
      }} />

      {/* Main Footer Content */}
      <div style={{
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'space-between'
      }}>
        {/* About Section */}
        <div style={{
          flex: '1 1 250px',
          maxWidth: '300px'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            marginBottom: '1.5rem',
            fontWeight: 500
          }}>About Us</h3>
          <p style={{
            fontSize: '1rem',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '1rem'
          }}>
            Over 20 years of experience we'll ensure you get the best guidance.
          </p>
        </div>

        {/* Site Links */}
        <nav style={{
          flex: '1 1 200px',
          maxWidth: '250px'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            marginBottom: '1.5rem',
            fontWeight: 500
          }}>Site Links</h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link></li>
            <li><Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link></li>
            <li><Link to="/team" style={{ color: '#fff', textDecoration: 'none' }}>Team</Link></li>
            <li><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</Link></li>
          </ul>
        </nav>

        {/* Service Links */}
        <nav style={{
          flex: '1 1 200px',
          maxWidth: '250px'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            marginBottom: '1.5rem',
            fontWeight: 500
          }}>Services</h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <li><Link to="/services/application-services" style={{ color: '#fff', textDecoration: 'none' }}>Application Services</Link></li>
            <li><Link to="/services/cyber-security" style={{ color: '#fff', textDecoration: 'none' }}>Cyber Security</Link></li>
            <li><Link to="/services/digital-marketing" style={{ color: '#fff', textDecoration: 'none' }}>Digital Marketing</Link></li>
            <li><Link to="/services/software-testing" style={{ color: '#fff', textDecoration: 'none' }}>Software Testing</Link></li>
            <li><Link to="/services/ui-ux-design" style={{ color: '#fff', textDecoration: 'none' }}>UI/UX Design</Link></li>
          </ul>
        </nav>

        {/* Contact Information */}
        <div style={{
          flex: '1 1 300px'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            marginBottom: '1.5rem',
            fontWeight: 500
          }}>Contact Us</h3>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <address style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              fontStyle: 'normal'
            }}>
              <span className="icon-location-filled" style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}></span>
              <div>
                <p style={{ margin: '0 0 0.5rem 0' }}>Chennai TN India</p>
                <p style={{ margin: 0 }}>Phoenix AZ USA</p>
              </div>
            </address>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span className="icon-phone-auricular" style={{ fontSize: '1.25rem' }}></span>
              <div>
                <p style={{ margin: '0 0 0.25rem 0', color: 'rgba(255,255,255,0.7)' }}>Get In Touch</p>
                <a href="tel:+917418785163" style={{ color: '#fff', textDecoration: 'none' }}>+91 7418785163</a>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span className="icon-email2" style={{ fontSize: '1.25rem' }}></span>
              <div>
                <p style={{ margin: '0 0 0.25rem 0', color: 'rgba(255,255,255,0.7)' }}>Quick Email us</p>
                <a href="mailto:booknow@navatech.com" style={{ color: '#fff', textDecoration: 'none' }}>booknow@navatech.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '1.5rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Social Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>Social</p>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.25rem' }}><span className="icon-facebook"></span></a>
              <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.25rem' }}><span className="icon-twitter"></span></a>
              <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.25rem' }}><span className="icon-pinterest"></span></a>
              <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.25rem' }}><span className="icon-instagram"></span></a>
            </div>
          </div>

          {/* Copyright */}
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} | All Rights Reserved. Developed by{' '}
            <a href="https://navatech.com/" style={{ color: '#fff', textDecoration: 'none' }}>Nava Tech (P) Ltd</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;