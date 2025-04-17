import React from 'react';

const HeroSlider: React.FC = () => {
  return (
    <section className="hero-slider">
      <div className="hero-slider__slide" style={{ backgroundImage: 'url(/images/banner1.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-slider__content">
                <h2>Welcome to Nava Tech</h2>
                <p>Innovative Solutions for Your Business</p>
                <a href="#services" className="thm-btn">Explore Services</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-slider__slide" style={{ backgroundImage: 'url(/images/banner2.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-slider__content">
                <h2>Empowering Your Digital Transformation</h2>
                <p>Custom Software Development and IT Solutions</p>
                <a href="#about" className="thm-btn">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-slider__slide" style={{ backgroundImage: 'url(/images/banner3.jpeg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-slider__content">
                <h2>Secure and Scalable Solutions</h2>
                <p>Ensuring Business Continuity and Growth</p>
                <a href="#contact" className="thm-btn">Get in Touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;