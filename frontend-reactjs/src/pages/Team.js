import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import Layout from '../components/layout/Layout';

const Team = () => {
  return (
    <Layout>
      <PageHeader title="Our Team" backgroundImage="/images/allpage.jpg" />
      
      {/* Team Section */}
      <section className="team-one team-one--team">
        <div className="container">
          <div className="row">
            <div className="sec-title text-center">
              <div className="sec-title__tagline"></div>
              <h2 className="sec-title__title">Our Team</h2>
            </div>
          </div>
          
          <div className="row">
            <div className="col-xl-2 col-lg-2"></div>
            
            {/* Team Member - Giri Sabari */}
            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
              <div className="team-one__single">
                <div className="team-one__single-img">
                  <div className="inner">
                    <img src="/images/giri-2.jpg" alt="Giri Sabari" className="img-thumbnail thim" />
                    <div className="social-link">
                      <ul>
                        <li>
                          <a className="fb" href="#"><span className="icon-facebook"></span></a>
                        </li>
                        <li>
                          <a className="tw" href="#"><span className="icon-twitter"></span></a>
                        </li>
                        <li>
                          <a className="pin" href="#"><span className="icon-pinterest"></span></a>
                        </li>
                        <li>
                          <a className="in" href="#"><span className="icon-instagram"></span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="team-one__single-content text-center">
                  <h2><a href="#">Giri Sabari<br /> Director</a></h2>
                  <p>He has providing information technology consulting services to numerous Fortune 500
                    companies over the past fifteen years. He holds a Masters of Information Technology
                    degree from Karnataka State University.</p>
                </div>
              </div>
            </div>
            
            {/* Team Member - Kannan V P */}
            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="team-one__single">
                <div className="team-one__single-img">
                  <div className="inner">
                    <img src="/images/kannan-poto.jpeg" alt="Kannan V P" className="img-thumbnail thim" />
                    <div className="social-link">
                      <ul>
                        <li>
                          <a className="fb" href="#"><span className="icon-facebook"></span></a>
                        </li>
                        <li>
                          <a className="tw" href="#"><span className="icon-twitter"></span></a>
                        </li>
                        <li>
                          <a className="pin" href="#"><span className="icon-pinterest"></span></a>
                        </li>
                        <li>
                          <a className="in" href="#"><span className="icon-instagram"></span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="team-one__single-content text-center">
                  <h2><a href="#">Kannan V P <br /> Director</a></h2>
                  <p>
                    He has build many business from ground up and deep understanding of business
                    operation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-xl-2 col-lg-2"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;