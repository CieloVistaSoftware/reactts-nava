import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { Link } from 'react-router-dom';

const AffiliateMarketing = () => {
  return (
    <div>
      <PageHeader title="Affiliate Marketing" backgroundImage="/images/allpage.jpg" />

      {/* Service Detail */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="service-details__sidebar">
                <div className="service-details__sidebar-service">
                  <h4 className="service-details__sidebar-title">Digital Marketing</h4>
                  <ul className="service-details__sidebar-service-list list-unstyled">
                    <li className="active"><Link to="/services/affiliate-marketing">Affiliate Marketing</Link></li>
                    <li><Link to="/services/branding">Branding</Link></li>
                    <li><Link to="/services/content-marketing">Content Marketing</Link></li>
                    <li><Link to="/services/email-marketing">Email Marketing</Link></li>
                    <li><Link to="/services/seo">Search Engine Optimization</Link></li>
                    <li><Link to="/services/social-media-marketing">Social Media Marketing</Link></li>
                  </ul>
                </div>
                <div className="service-details__need-help">
                  <div className="service-details__need-help-bg" style={{ backgroundImage: 'url(/images/service-details-need-help-bg.jpg)' }}></div>
                  <div className="service-details__need-help-icon">
                    <span className="icon-phone-auricular"></span>
                  </div>
                  <h2 className="service-details__need-help-title">Need Help?</h2>
                  <div className="service-details__need-help-contact">
                    <p>Contact with us</p>
                    <a href="tel:+917418785163">+91 7418785163</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img src="/images/dig_affmark.png" alt="Affiliate Marketing" />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">Affiliate Marketing</h3>
                  <p className="service-details__text">Affiliate marketing is a performance-based marketing strategy where businesses reward affiliates for each customer or visitor brought by the affiliate's own marketing efforts. At Nava Tech, we develop and manage comprehensive affiliate programs that extend your reach, drive sales, and increase your ROI.</p>
                  
                  <div className="service-details__benefits">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="service-details__benefits-single">
                          <div className="service-details__benefits-icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="service-details__benefits-content">
                            <h4>Affiliate Program Development</h4>
                            <p>We design customized affiliate programs tailored to your business goals and target audience.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="service-details__benefits-single">
                          <div className="service-details__benefits-icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="service-details__benefits-content">
                            <h4>Affiliate Recruitment</h4>
                            <p>We identify and recruit high-quality affiliates that align with your brand and can deliver results.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="service-details__benefits-single">
                          <div className="service-details__benefits-icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="service-details__benefits-content">
                            <h4>Performance Monitoring</h4>
                            <p>Continuous tracking and analysis of affiliate performance to optimize your program.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="service-details__benefits-single">
                          <div className="service-details__benefits-icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="service-details__benefits-content">
                            <h4>Commission Structure Optimization</h4>
                            <p>Strategic commission structures that motivate affiliates while ensuring positive ROI.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-details__about">
                    <h3 className="service-details__about-title">Why Choose Our Affiliate Marketing Services?</h3>
                    <p className="service-details__about-text">Our affiliate marketing approach is built on transparency, quality partnerships, and data-driven optimization. We don't just set up an affiliate program—we actively manage it to ensure it delivers measurable results and long-term value.</p>
                    <p className="service-details__about-text">From finding the right affiliates to creating compelling offers and tracking performance, our comprehensive approach ensures your affiliate program becomes a reliable channel for growth.</p>
                  </div>
                  
                  <div className="service-details__faq">
                    <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                      <h3 className="service-details__faq-title">Frequently Asked Questions</h3>
                      <div className="accrodion active">
                        <div className="accrodion-title">
                          <h4>How quickly can an affiliate program start generating results?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>While some results can be seen in the first month, most affiliate programs take 3-6 months to gain momentum as relationships with affiliates develop and their promotional efforts begin to take effect. Our approach focuses on sustainable growth rather than quick but temporary gains.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>How do you ensure affiliate quality?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>We have a rigorous vetting process for affiliates that includes reviewing their websites, traffic sources, promotional methods, audience demographics, and past performance. We only partner with affiliates who align with your brand values and can drive quality traffic and conversions.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-details__call-to-action">
                    <div className="service-details__call-to-action-bg" style={{ backgroundImage: 'url(/images/service-details-cta-bg.jpg)' }}></div>
                    <div className="service-details__call-to-action-shape-1"></div>
                    <div className="service-details__call-to-action-shape-2"></div>
                    <h3 className="service-details__call-to-action-title">Ready to expand your reach with affiliate marketing?</h3>
                    <div className="service-details__call-to-action-btn-box">
                      <Link to="/contact" className="thm-btn service-details__call-to-action-btn">Contact Us Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffiliateMarketing;