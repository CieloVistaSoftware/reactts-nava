import React from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  return (
    <section className="main-slider main-slider-one style3">
      <div className="main-slider-one__inner">
        <div className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel"
          data-owl-options='{"loop": true, "items": 1, "navText": ["<span className=\"icon-right-arrow\"></span>","<span className=\"icon-right-arrow2\"></span>"], "margin": 0, "dots": false, "nav": true, "animateOut": "slideOutDown", "animateIn": "fadeIn", "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 7000, "autoplayHoverPause": false}'>

          {/* First Slide */}
          <div className="main-slider-one__single">
            <div className="image-layer" style={{ backgroundImage: 'url(/images/banner1.jpg)' }}>
            </div>
            <div className="outer-content">
              <div className="outer-content-bg"></div>
            </div>
            <div className="container">
              <div className="main-slider-one__content text-center">
                <div className="img-box">
                  <img src="/images/favicon.jpg" alt="#" />
                </div>
                <div className="title">
                  <h2>Nava Tech</h2>
                </div>

                <div className="main-slider-one__content-btn">
                  <div className="btn-one"><Link className="thm-btn" to="/services">View Our Services</Link>
                  </div>
                  <div className="btn-two"><Link className="thm-btn" to="/about">Learn More</Link></div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Slide */}
          <div className="main-slider-one__single">
            <div className="image-layer" style={{ backgroundImage: 'url(/images/banner2.jpg)' }}>
            </div>
            <div className="outer-content">
              <div className="outer-content-bg"></div>
            </div>
            <div className="container">
              <div className="main-slider-one__content text-center">
                <div className="img-box">
                  <img src="/images/favicon.jpg" alt="#" />
                </div>
                <div className="title">
                  <h2>Envisioning Technology</h2>
                </div>

                <div className="main-slider-one__content-btn">
                  <div className="btn-one"><Link className="thm-btn" to="/services">View Our Services</Link>
                  </div>
                  <div className="btn-two"><Link className="thm-btn" to="/about">Learn More</Link></div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Slide */}
          <div className="main-slider-one__single">
            <div className="image-layer" style={{ backgroundImage: 'url(/images/banner3.jpeg)' }}>
            </div>
            <div className="outer-content">
              <div className="outer-content-bg"></div>
            </div>
            <div className="container">
              <div className="main-slider-one__content text-center">
                <div className="img-box">
                  <img src="/images/favicon.jpg" alt="#" />
                </div>
                <div className="title">
                  <h2>Innovating software creation,<br /> modernization, and optimization</h2>
                </div>

                <div className="main-slider-one__content-btn">
                  <div className="btn-one"><Link className="thm-btn" to="/services">View Our Services</Link>
                  </div>
                  <div className="btn-two"><Link className="thm-btn" to="/about">Learn More</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;