import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection = () => {
  return (
    <section className="intro-one style3">
      <div className="container">
        <div className="row">
          {/* Digital Security */}
          <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
            <div className="intro-one__single">
              <div className="intro-one__single-img">
                <div className="inner">
                  <img src="/images/5.jpg" alt="#" />
                </div>
                <div className="icon-box">
                  <span className="icon-privacy"></span>
                </div>
              </div>

              <div className="intro-one__single-content text-center">
                <div className="shape1"><img src="/images/shapes/intro-v1-shape1.png" alt="#" /></div>
                <h2><Link to="/services/cyber-security">Digital Security</Link></h2>
                <p>Dolor sit amet consect etur</p>
              </div>
            </div>
          </div>

          {/* Trusted Agency */}
          <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.2s">
            <div className="intro-one__single">
              <div className="intro-one__single-img">
                <div className="inner">
                  <img src="/images/4.jpg" alt="#" />
                </div>
                <div className="icon-box">
                  <span className="icon-certified"></span>
                </div>
              </div>

              <div className="intro-one__single-content text-center">
                <div className="shape1"><img src="/images/shapes/intro-v1-shape1.png" alt="#" /></div>
                <h2><Link to="/about">Trusted Agency</Link></h2>
                <p>Dolor sit amet consect etur</p>
              </div>
            </div>
          </div>

          {/* IT Outsourcing */}
          <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
            <div className="intro-one__single">
              <div className="intro-one__single-img">
                <div className="inner">
                  <img src="/images/3.jpg" alt="#" />
                </div>
                <div className="icon-box">
                  <span className="icon-laptop"></span>
                </div>
              </div>

              <div className="intro-one__single-content text-center">
                <div className="shape1"><img src="/images/shapes/intro-v1-shape1.png" alt="#" /></div>
                <h2><Link to="/services">IT Outsourcing</Link></h2>
                <p>Dolor sit amet consect etur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;