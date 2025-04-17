import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { Link } from 'react-router-dom';

const EmailMarketing = () => {
  return (
    <div>
      <PageHeader title="Email Marketing" backgroundImage="/images/allpage.jpg" />

      {/* Service Detail */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="service-details__sidebar">
                <div className="service-details__sidebar-service">
                  <h4 className="service-details__sidebar-title">Digital Marketing</h4>
                  <ul className="service-details__sidebar-service-list list-unstyled">
                    <li><Link to="/services/affiliate-marketing">Affiliate Marketing</Link></li>
                    <li><Link to="/services/branding">Branding</Link></li>
                    <li><Link to="/services/content-marketing">Content Marketing</Link></li>
                    <li className="active"><Link to="/services/email-marketing">Email Marketing</Link></li>
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
                  <img src="/images/dig_emailmark.png" alt="Email Marketing" />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">Email Marketing</h3>
                  <p className="service-details__text">Email marketing remains one of the most effective and direct ways to connect with your audience. At iDriven Global Tech, we help businesses create personalized, targeted email campaigns that nurture leads, build customer relationships, and drive conversions with measurable ROI.</p>
                  
                  <div className="service-details__benefits">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="service-details__benefits-single">
                          <div className="service-details__benefits-icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="service-details__benefits-content">
                            <h4>Email Campaign Strategy</h4>
                            <p>We develop comprehensive email marketing strategies aligned with your business goals and customer journey.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="service-details__benefits-single">
                          <div className="service-details__benefits-icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="service-details__benefits-content">
                            <h4>Email Design & Copywriting</h4>
                            <p>Our team creates responsive, branded email templates with compelling copy that drives action.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="service-details__benefits-single">
                          <div className="service-details__benefits-icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="service-details__benefits-content">
                            <h4>Automation & Workflows</h4>
                            <p>Implementation of automated email sequences that deliver the right message at the right time.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="service-details__benefits-single">
                          <div className="service-details__benefits-icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="service-details__benefits-content">
                            <h4>Analytics & Optimization</h4>
                            <p>Continuous monitoring and optimization of campaigns based on performance data and subscriber behavior.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-details__about">
                    <h3 className="service-details__about-title">Why Choose Our Email Marketing Services?</h3>
                    <p className="service-details__about-text">Our email marketing approach focuses on quality over quantity. We help you build and maintain a healthy email list of engaged subscribers who genuinely want to hear from your brand.</p>
                    <p className="service-details__about-text">With expertise in segmentation, personalization, and automation, we create email experiences that resonate with your audience and drive meaningful business results, not just open rates.</p>
                  </div>
                  
                  <div className="service-details__faq">
                    <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                      <h3 className="service-details__faq-title">Frequently Asked Questions</h3>
                      <div className="accrodion active">
                        <div className="accrodion-title">
                          <h4>How often should we send emails to our list?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>The optimal email frequency depends on your industry, audience preferences, and content value. We help you determine the right cadence that keeps your audience engaged without overwhelming them, typically starting with 2-4 emails per month and adjusting based on performance data.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>How do you handle email deliverability issues?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>We implement best practices to ensure high deliverability, including proper authentication (SPF, DKIM, DMARC), list hygiene maintenance, engagement-based sending, and spam trigger avoidance. We monitor deliverability metrics and take proactive steps to maintain inbox placement.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-details__call-to-action">
                    <div className="service-details__call-to-action-bg" style={{ backgroundImage: 'url(/images/service-details-cta-bg.jpg)' }}></div>
                    <div className="service-details__call-to-action-shape-1"></div>
                    <div className="service-details__call-to-action-shape-2"></div>
                    <h3 className="service-details__call-to-action-title">Ready to transform your email marketing strategy?</h3>
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

export default EmailMarketing;