import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  useEffect(() => {
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper">
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>
      
      <div className="preloader">
        <div className="preloader__image"></div>
      </div>
      
      <Header />
      {children}
      <Footer />
      
      {/* Mobile Nav Wrapper - Will be implemented with state in a real application */}
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>
          <div className="mobile-nav__container"></div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:booknow@navatech.com">booknow@navatech.com</a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:+917418785163">+91 7418785163</a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-facebook-square"></a>
              <a href="#" className="fab fa-pinterest-p"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>
      </div>
      
      <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></a>
    </div>
  );
};

export default Layout;