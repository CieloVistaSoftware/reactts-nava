import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-one">
      <div className="footer-one__bg" style={{ backgroundImage: 'url(/images/fbg.jpg)' }}>
      </div>
      <div className="shape1 float-bob-x"><img src="/images/shapes/footer-v1-shape1.png" alt="#" /></div>
      <div className="shape2 float-bob-y"><img src="/images/shapes/footer-v1-shape2.png" alt="#" /></div>
      <div className="shape3 float-bob-y"><img src="/images/shapes/footer-v1-shape3.png" alt="#" /></div>
      <div className="shape4 float-bob-x"><img src="/images/shapes/footer-v1-shape4.png" alt="#" /></div>

      <div className="footer-one__top">
        <div className="container">
          <div className="row">

            {/* About Us */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
              <div className="footer-one__single footer-one__about">
                <div className="title-box">
                  <h3>About Us</h3>
                </div>
                <div className="footer-one__about-text">
                  <p>Over 20 years of experience we'll ensure you get the best guidance.</p>
                </div>
              </div>
            </div>

            {/* Site Links */}
            <div className="col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
              <div className="footer-one__single footer-one__links">
                <div className="title-box">
                  <h3>Site Links</h3>
                </div>
                <div className="footer-one__links-box">
                  <ul className="footer-one__links-list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Links */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
              <div className="footer-one__single footer-one__links">
                <div className="title-box">
                  <h3>Site Links</h3>
                </div>
                <div className="footer-one__links-box">
                  <ul className="footer-one__links-list">
                    <li>
                      <Link to="/services/application-services">Application Services</Link>
                    </li>
                    <li>
                      <Link to="/services/cyber-security">Cyber Security</Link>
                    </li>
                    <li>
                      <Link to="/services/digital-marketing">Digital Marketing</Link>
                    </li>
                    <li>
                      <Link to="/services/software-testing">Software Testing</Link>
                    </li>
                    <li>
                      <Link to="/services/ui-ux-design">UI/UX Design</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
              <div className="contact-info-one__single">
                <div className="icon-box">
                  <span className="icon-location-filled"></span>
                </div>

                <div className="content-box">
                  <h3>Chennai TN India <br /> Phoenix AZ USA</h3>
                </div>
              </div>
              <div className="contact-info-one__single">
                <div className="icon-box">
                  <span className="icon-phone-auricular"></span>
                </div>
                <br />
                <div className="content-box">
                  <p>Get In Touch</p>
                  <h3><a href="tel:+917418785163">+91 7418785163</a></h3>
                </div>
              </div>
              <div className="contact-info-one__single">
                <div className="icon-box">
                  <span className="icon-email2"></span>
                </div>
                <br />
                <div className="content-box">
                  <p>Quick Email us</p>
                  <h3><a href="mailto:booknow@navatech.com">booknow@navatech.com</a></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-one__bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-one__bottom-inner">
                <div className="footer-one__bottom-left">
                  <div className="title-box">
                    <p>Social </p>
                  </div>

                  <div className="social-links">
                    <ul>
                      <li><a href="#"><span className="icon-facebook"></span></a></li>
                      <li><a href="#"><span className="icon-twitter"></span></a></li>
                      <li><a href="#"><span className="icon-pinterest"></span></a></li>
                      <li><a href="#"><span className="icon-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>

                <div className="footer-one__bottom-right">
                  <p>&copy; {new Date().getFullYear()} | All Rights Reserved. Developed by <a
                    href="https://navatech.com/" title="Navatech" target="_blank"
                    style={{ color: '#fff !important' }}> Nava Tech (P) Ltd </a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;