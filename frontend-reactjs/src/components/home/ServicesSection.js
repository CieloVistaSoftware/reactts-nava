import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section className="projects-one projects-one--projects pq-bg-img-1">
      <div className="container">
        <div className="row">
          <div className="sec-title">
            <div className="sec-title__tagline"></div>
            <h2 className="sec-title__title">Our Services</h2>
          </div>
        </div>
        <div className="row">
          {/* Application Services */}
          <div className="col-xl-4 wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div className="projects-one__single">
              <div className="projects-one__single-img">
                <div className="inner">
                  <img src="/images/s1.jpg" alt="#" />
                  <div className="overlay-content">
                    <div className="shape1"><img src="/images/shapes/projects-v1-shape1.png" alt="#" /></div>
                    <div className="shape2"><img src="/images/shapes/projects-v1-shape2.png" alt="#" /></div>
                    <div className="shape3"><img src="/images/shapes/projects-v1-shape3.png" alt="#" /></div>
                    <div className="shape4"><img src="/images/shapes/projects-v1-shape4.png" alt="#" /></div>
                    <div className="content-box">
                      <h3><Link to="/services/application-services">Application Services</Link></h3>
                    </div>
                    <div className="icon-box">
                      <Link to="/services/application-services"><span className="icon-right-arrow3"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cyber Security */}
          <div className="col-xl-4 wow fadeInRight animated" data-wow-delay="100ms" data-wow-duration="1500ms">
            <div className="projects-one__single">
              <div className="projects-one__single-img">
                <div className="inner">
                  <img src="/images/s2.jpg" alt="#" />
                  <div className="overlay-content">
                    <div className="shape1"><img src="/images/shapes/projects-v1-shape1.png" alt="#" /></div>
                    <div className="shape2"><img src="/images/shapes/projects-v1-shape2.png" alt="#" /></div>
                    <div className="shape3"><img src="/images/shapes/projects-v1-shape3.png" alt="#" /></div>
                    <div className="shape4"><img src="/images/shapes/projects-v1-shape4.png" alt="#" /></div>
                    <div className="content-box">
                      <h3><Link to="/services/cyber-security">Cyber Security</Link></h3>
                    </div>
                    <div className="icon-box">
                      <Link to="/services/cyber-security"><span className="icon-right-arrow3"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="col-xl-4 wow fadeInLeft animated" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="projects-one__single">
              <div className="projects-one__single-img">
                <div className="inner">
                  <img src="/images/s3.jpg" alt="#" />
                  <div className="overlay-content">
                    <div className="shape1"><img src="/images/shapes/projects-v1-shape1.png" alt="#" /></div>
                    <div className="shape2"><img src="/images/shapes/projects-v1-shape2.png" alt="#" /></div>
                    <div className="shape3"><img src="/images/shapes/projects-v1-shape3.png" alt="#" /></div>
                    <div className="shape4"><img src="/images/shapes/projects-v1-shape4.png" alt="#" /></div>
                    <div className="content-box">
                      <h3><Link to="/services/digital-marketing">Digital Marketing</Link></h3>
                    </div>
                    <div className="icon-box">
                      <Link to="/services/digital-marketing"><span className="icon-right-arrow3"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Software Testing */}
          <div className="col-xl-4 wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div className="projects-one__single">
              <div className="projects-one__single-img">
                <div className="inner">
                  <img src="/images/s4.png" alt="#" />
                  <div className="overlay-content">
                    <div className="shape1"><img src="/images/shapes/projects-v1-shape1.png" alt="#" /></div>
                    <div className="shape2"><img src="/images/shapes/projects-v1-shape2.png" alt="#" /></div>
                    <div className="shape3"><img src="/images/shapes/projects-v1-shape3.png" alt="#" /></div>
                    <div className="shape4"><img src="/images/shapes/projects-v1-shape4.png" alt="#" /></div>
                    <div className="content-box">
                      <h3><Link to="/services/software-testing">Software Testing</Link></h3>
                    </div>
                    <div className="icon-box">
                      <Link to="/services/software-testing"><span className="icon-right-arrow3"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="col-xl-4 wow fadeInRight animated" data-wow-delay="100ms" data-wow-duration="1500ms">
            <div className="projects-one__single">
              <div className="projects-one__single-img">
                <div className="inner">
                  <img src="/images/s5.jpg" alt="#" />
                  <div className="overlay-content">
                    <div className="shape1"><img src="/images/shapes/projects-v1-shape1.png" alt="#" /></div>
                    <div className="shape2"><img src="/images/shapes/projects-v1-shape2.png" alt="#" /></div>
                    <div className="shape3"><img src="/images/shapes/projects-v1-shape3.png" alt="#" /></div>
                    <div className="shape4"><img src="/images/shapes/projects-v1-shape4.png" alt="#" /></div>
                    <div className="content-box">
                      <h3><Link to="/services/ui-ux-design">UI/UX Design</Link></h3>
                    </div>
                    <div className="icon-box">
                      <Link to="/services/ui-ux-design"><span className="icon-right-arrow3"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Software Development */}
          <div className="col-xl-4 wow fadeInLeft animated" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="projects-one__single">
              <div className="projects-one__single-img">
                <div className="inner">
                  <img src="/images/s6.jpg" alt="#" />
                  <div className="overlay-content">
                    <div className="shape1"><img src="/images/shapes/projects-v1-shape1.png" alt="#" /></div>
                    <div className="shape2"><img src="/images/shapes/projects-v1-shape2.png" alt="#" /></div>
                    <div className="shape3"><img src="/images/shapes/projects-v1-shape3.png" alt="#" /></div>
                    <div className="shape4"><img src="/images/shapes/projects-v1-shape4.png" alt="#" /></div>
                    <div className="content-box">
                      <h3><Link to="/services/software-development">Software Development</Link></h3>
                    </div>
                    <div className="icon-box">
                      <Link to="/services/software-development"><span className="icon-right-arrow3"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;