import React from 'react';
import { Link } from 'react-router-dom';

const StatsSection = () => {
  return (
    <section className="counter-one counter-one--about">
      <div className="counter-one__bg" style={{ backgroundImage: 'url(/images/8.jpg)' }}></div>
      <div className="container">
        <div className="row">
          <div className="sec-title">
            <div className="sec-title__tagline"></div>
            <center>
              <h2 className="sec-title__title">Our Stats</h2>
            </center>
          </div>
        </div>
        <div className="row">
          {/* Projects Counter */}
          <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
            <div className="counter-one__single">
              <div className="counter-one__single-top">
                <div className="img-box"><img src="/images/shapes/counter-v1-shape1.png" alt="#" /></div>
                <div className="content-box">
                  <h2><span className="odometer" data-count="80">80</span> <span className="plus">+</span></h2>
                </div>
              </div>
              <div className="counter-one__single-text">
                <h3>Our Successful <br /> Completed Projects</h3>
              </div>
            </div>
          </div>

          {/* IT Specialists Counter */}
          <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.2s">
            <div className="counter-one__single">
              <div className="counter-one__single-top">
                <div className="img-box"><img src="/images/shapes/counter-v1-shape1.png" alt="#" /></div>
                <div className="content-box">
                  <h2><span className="odometer" data-count="50">50</span> <span className="plus">+</span></h2>
                </div>
              </div>
              <div className="counter-one__single-text">
                <h3>Our Agency <br /> IT Specialists</h3>
              </div>
            </div>
          </div>

          {/* Projects Counter (Duplicate in original HTML) */}
          <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
            <div className="counter-one__single">
              <div className="counter-one__single-top">
                <div className="img-box"><img src="/images/shapes/counter-v1-shape1.png" alt="#" /></div>
                <div className="content-box">
                  <h2><span className="odometer" data-count="80">80</span> <span className="plus">+</span></h2>
                </div>
              </div>
              <div className="counter-one__single-text">
                <h3>Our Successful <br /> Completed Projects</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="counter-one__bottom text-center">
          <h2>Assisting you in Overcoming your <br /> Technological Obstacles</h2>
          <div className="btn-box">
            <Link className="thm-btn" to="/services">Discover more</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;