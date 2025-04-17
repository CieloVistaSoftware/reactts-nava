import React from 'react';
import { Link } from 'react-router-dom';

const TeamSection = () => {
  return (
    <section className="team-one team-one--team">
      <div className="container">
        <div className="row">
          <div className="sec-title">
            <div className="sec-title__tagline"></div>
            <center>
              <h2 className="sec-title__title">Our Team</h2>
            </center>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-2 col-lg-2"></div>
          {/* Team Member 1 */}
          <div className="col-xl-4 col-lg-4 wow fadeInLeft animated" data-wow-delay="100ms" data-wow-duration="1500ms">
            <div className="team-one__single">
              <div className="team-one__single-img">
                <div className="inner">
                  <img src="/images/giri-2.jpg" alt="#" className="img-thumbnail thim" />
                  <div className="social-link">
                    <ul>
                      <li><a className="fb" href="#"><span className="icon-facebook"></span></a></li>
                      <li><a className="tw" href="#"><span className="icon-twitter"></span></a></li>
                      <li><a className="pin" href="#"><span className="icon-pinterest"></span></a></li>
                      <li><a className="in" href="#"><span className="icon-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-one__single-content text-center">
                <h2><Link to="/team">Giri Sabari<br /> Director</Link></h2>
                <p>For the past 18 years, he has been offering information technology consulting services to various Fortune 500 companies.</p>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-xl-4 col-lg-4 wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="team-one__single">
              <div className="team-one__single-img">
                <div className="inner">
                  <img src="/images/kannan-poto.jpeg" alt="#" className="img-thumbnail thim" />
                  <div className="social-link">
                    <ul>
                      <li><a className="fb" href="#"><span className="icon-facebook"></span></a></li>
                      <li><a className="tw" href="#"><span className="icon-twitter"></span></a></li>
                      <li><a className="pin" href="#"><span className="icon-pinterest"></span></a></li>
                      <li><a className="in" href="#"><span className="icon-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-one__single-content text-center">
                <h2><Link to="/team">Kannan V P <br /> Director</Link></h2>
                <p>He has successfully built numerous businesses, demonstrating a profound understanding of business operations and team building.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2"></div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;