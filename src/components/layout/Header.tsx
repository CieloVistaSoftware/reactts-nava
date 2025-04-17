import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header-one">
      <div className="header-one__top">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="header-one__top-left">
                <p>Welcome to Nava Tech</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="header-one__top-right">
                <ul>
                  <li><a href="mailto:info@navatech.com">info@navatech.com</a></li>
                  <li><a href="tel:+917418785163">+91 7418785163</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-one__main">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <div className="header-one__logo">
                <Link to="/">
                  <img src="/images/logo.png" alt="Nava Tech Logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9">
              <div className="header-one__menu">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/team">Team</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;