import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="about-three">
      <div className="shape5"><img src="/images/shapes/projects-v1-shape5.png" alt="#" /></div>
      <div className="shape4"><img src="/images/shapes/about-v3-shape3.png" alt="#" /></div>
      <div className="shape5"><img src="/images/shapes/about-v3-shape4.png" alt="#" /></div>
      <div className="container">
        <div className="row">
          {/* About Image */}
          <div className="col-xl-5">
            <div className="about-three__img clearfix">
              <div className="about-three__img2 wow fadeInUp" data-wow-delay=".3s">
                <div className="inner">
                  <img src="/images/homeimg1.jpg" className="thim img-thumbnail" alt="#" />
                </div>
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="col-xl-7">
            <div className="about-three__content">
              <div className="sec-title">
                <div className="sec-title__tagline"></div>
                <h2 className="sec-title__title">Welcome to Nava Tech for Software Development</h2>
              </div>

              <div className="about-three__content-text1">
                <p>
                  Nava Tech for Software Development array of services can be a comprehensive
                  solution either it is digital transformation consultation or Strategic Resourcing or
                  cloud-based solutions or Outsourced Product development to help companies stay
                  competitive. In a world that's constantly changing, the Navatech team believes that
                  companies need a consistent plan for staying on the cutting edge. Fortunately, with
                  us, you can access everything from expert guidance to implementation and support to
                  bring your IT enablement campaign to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;