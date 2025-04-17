import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // Custom navigation handler to ensure links work on first click
  const handleNavigation = (e, path) => {
    e.preventDefault();
    if (path === "#") return; // Don't navigate for dropdown toggles
    
    // Force navigation to the path
    window.location.href = path;
  };
  
  return (
    <>
      <header className="main-header main-header-one main-header-one--three clearfix">
        <div className="main-header-one--three__top">
          <div className="container">
            <div className="main-header-one--three__top-inner">
              <div className="main-header-one--three__top-left">
                <div className="logo-three">
                  <Link to="/" onClick={(e) => handleNavigation(e, "/")}>
                    <img src="/images/logo.png" alt="Nava Tech Logo" />
                  </Link>
                </div>

                <div className="main-header__contact-info">
                  <ul>
                    <li>
                      <div className="inner">
                        <div className="icon-box">
                          <span className="icon-email"></span>
                        </div>
                        <div className="text-box">
                          <p>Email Us</p>
                          <h4><a href="mailto:booknow@navatech.com">booknow@navatech.com</a></h4>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="inner">
                        <div className="icon-box">
                          <span className="icon-call"></span>
                        </div>
                        <div className="text-box">
                          <p>Call Us</p>
                          <h4><a href="tel:+917418785163">+91 7418785163</a></h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="main-header-one--three__top-right">
                <ul className="social-link">
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-skype"></span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="main-header-one__bottom">
          <nav className="main-menu clearfix">
            <div className="main-menu__wrapper clearfix">
              <div className="container">
                <div className="main-header-one__bottom-inner">
                  <div className="main-header-one__bottom-left">
                    <div className="main-menu__main-menu-box">
                      <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                      <ul className="main-menu__list">
                        <li><Link to="/" onClick={(e) => handleNavigation(e, "/")}>Home</Link></li>
                        <li><Link to="/about" onClick={(e) => handleNavigation(e, "/about")}>About Us</Link></li>
                        <li className="dropdown">
                          <Link to="#" onClick={(e) => handleNavigation(e, "#")}>Services</Link>
                          <ul>
                            <li className="dropdown">
                              <Link to="#" onClick={(e) => handleNavigation(e, "#")}>Application Services</Link>
                              <ul>
                                <li><Link to="/services/application-development" onClick={(e) => handleNavigation(e, "/services/application-development")}>Application Development</Link></li>
                                <li><Link to="/services/application-integration" onClick={(e) => handleNavigation(e, "/services/application-integration")}>Application Integration</Link></li>
                                <li><Link to="/services/application-maintenance" onClick={(e) => handleNavigation(e, "/services/application-maintenance")}>App Maintenance & Support</Link></li>
                                <li><Link to="/services/application-management" onClick={(e) => handleNavigation(e, "/services/application-management")}>Application Management</Link></li>
                                <li><Link to="/services/application-testing" onClick={(e) => handleNavigation(e, "/services/application-testing")}>Application Testing</Link></li>
                                <li><Link to="/services/custom-app-development" onClick={(e) => handleNavigation(e, "/services/custom-app-development")}>Custom App Development</Link></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <Link to="#" onClick={(e) => handleNavigation(e, "#")}>Cyber Security</Link>
                              <ul>
                                <li><Link to="/services/application-security" onClick={(e) => handleNavigation(e, "/services/application-security")}>Application Security</Link></li>
                                <li><Link to="/services/data-security" onClick={(e) => handleNavigation(e, "/services/data-security")}>Data Security</Link></li>
                                <li><Link to="/services/email-security" onClick={(e) => handleNavigation(e, "/services/email-security")}>Email Security</Link></li>
                                <li><Link to="/services/mobile-app-security" onClick={(e) => handleNavigation(e, "/services/mobile-app-security")}>Mobile App Security</Link></li>
                                <li><Link to="/services/network-security" onClick={(e) => handleNavigation(e, "/services/network-security")}>Network Security</Link></li>
                                <li><Link to="/services/website-security" onClick={(e) => handleNavigation(e, "/services/website-security")}>Web sites Security</Link></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <Link to="#" onClick={(e) => handleNavigation(e, "#")}>Digital Marketing</Link>
                              <ul>
                                <li><Link to="/services/affiliate-marketing" onClick={(e) => handleNavigation(e, "/services/affiliate-marketing")}>Affiliate Marketing</Link></li>
                                <li><Link to="/services/branding" onClick={(e) => handleNavigation(e, "/services/branding")}>Branding</Link></li>
                                <li><Link to="/services/content-marketing" onClick={(e) => handleNavigation(e, "/services/content-marketing")}>Content Marketing</Link></li>
                                <li><Link to="/services/email-marketing" onClick={(e) => handleNavigation(e, "/services/email-marketing")}>Email Marketing</Link></li>
                                <li><Link to="/services/seo" onClick={(e) => handleNavigation(e, "/services/seo")}>Search Engine Optimization</Link></li>
                                <li><Link to="/services/social-media-marketing" onClick={(e) => handleNavigation(e, "/services/social-media-marketing")}>Social Media Marketing</Link></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <Link to="#" onClick={(e) => handleNavigation(e, "#")}>Software Testing</Link>
                              <ul>
                                <li><Link to="/services/functional-testing" onClick={(e) => handleNavigation(e, "/services/functional-testing")}>Functional Testing</Link></li>
                                <li><Link to="/services/performance-testing" onClick={(e) => handleNavigation(e, "/services/performance-testing")}>Performance Testing</Link></li>
                                <li><Link to="/services/qa-consulting" onClick={(e) => handleNavigation(e, "/services/qa-consulting")}>QA Consulting</Link></li>
                                <li><Link to="/services/security-testing" onClick={(e) => handleNavigation(e, "/services/security-testing")}>Security Testing</Link></li>
                                <li><Link to="/services/test-automation" onClick={(e) => handleNavigation(e, "/services/test-automation")}>Test Automation</Link></li>
                                <li><Link to="/services/usability-testing" onClick={(e) => handleNavigation(e, "/services/usability-testing")}>Usability Testing</Link></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <Link to="#" onClick={(e) => handleNavigation(e, "#")}>UI/UX Design</Link>
                              <ul>
                                <li><Link to="/services/ecommerce-design" onClick={(e) => handleNavigation(e, "/services/ecommerce-design")}>Ecommerce Design</Link></li>
                                <li><Link to="/services/mobile-app-design" onClick={(e) => handleNavigation(e, "/services/mobile-app-design")}>Mobile App Design</Link></li>
                                <li><Link to="/services/responsive-web-design" onClick={(e) => handleNavigation(e, "/services/responsive-web-design")}>Responsive Web Design</Link></li>
                                <li><Link to="/services/saas-ui-design" onClick={(e) => handleNavigation(e, "/services/saas-ui-design")}>SaaS UI Design</Link></li>
                                <li><Link to="/services/user-experience-design" onClick={(e) => handleNavigation(e, "/services/user-experience-design")}>User Experience Design</Link></li>
                                <li><Link to="/services/website-redesign" onClick={(e) => handleNavigation(e, "/services/website-redesign")}>Website Redesign</Link></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li><Link to="/team" onClick={(e) => handleNavigation(e, "/team")}>Team</Link></li>
                        <li><Link to="/blog" onClick={(e) => handleNavigation(e, "/blog")}>Blog</Link></li>
                        <li><Link to="/contact" onClick={(e) => handleNavigation(e, "/contact")}>Contact Us</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="main-header-one__bottom-right">
                    <div className="thm-btn">
                      <Link to="/contact" onClick={(e) => handleNavigation(e, "/contact")}>Book Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="stricky-header stricky-header__three stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
    </>
  );
}

export default Header;