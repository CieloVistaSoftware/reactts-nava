import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { Link } from 'react-router-dom';

const Branding: React.FC = () => {
  return (
    <div>
      <PageHeader title="Branding" backgroundImage="/images/allpage.jpg" />

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
                    <li className="active"><Link to="/services/branding">Branding</Link></li>
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
                  <img src="/images/dig_brand.png" alt="Branding" />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">Branding</h3>
                  <p className="service-details__text">Branding is more than just a logo or a color scheme; it's the complete identity of your business and how customers perceive you in the market. At Nava Tech, we help businesses build strong, memorable brands that resonate with their target audience and create lasting impressions in the digital marketplace.</p>
                  
                  <div className="service-details__benefits">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="service-details__benefits-single">
                          <div className="service-details__benefits-icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="service-details__benefits-content">
                            <h4>Brand Strategy</h4>
                            <p>We develop comprehensive brand strategies that align with your business goals and market position.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="service-details__benefits-single">
                          <div className="service-details__benefits-icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="service-details__benefits-content">
                            <h4>Visual Identity</h4>
                            <p>Creation of distinctive visual elements including logos, color palettes, and design systems.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="service-details__benefits-single">
                          <div className="service-details__benefits-icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="service-details__benefits-content">
                            <h4>Brand Messaging</h4>
                            <p>Crafting compelling brand voice, tone, and messaging that connects with your audience.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="service-details__benefits-single">
                          <div className="service-details__benefits-icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="service-details__benefits-content">
                            <h4>Brand Experience</h4>
                            <p>Creating consistent and meaningful interactions across all customer touchpoints.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-details__about">
                    <h3 className="service-details__about-title">Why Choose Our Branding Services?</h3>
                    <p className="service-details__about-text">Our branding approach combines creative expertise with strategic thinking. We don't just create beautiful designs; we build brand identities that communicate your unique value proposition and differentiate you from competitors.</p>
                    <p className="service-details__about-text">We take time to understand your business goals, target audience, and industry landscape, ensuring that every aspect of your brand identity is purposefully designed to support your business objectives and resonate with your ideal customers.</p>
                  </div>
                  
                  <div className="service-details__faq">
                    <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                      <h3 className="service-details__faq-title">Frequently Asked Questions</h3>
                      <div className="accrodion active">
                        <div className="accrodion-title">
                          <h4>How long does a complete branding project take?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>A comprehensive branding project typically takes between 6-12 weeks depending on the complexity, though we can work with your timeline for more expedited needs or phased approaches.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>Should I rebrand my existing business?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>Rebranding may be beneficial if your current brand no longer reflects your business values, if you're targeting a new audience, experiencing market changes, or if your visual identity feels outdated. We offer brand audits to help you make this decision.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-details__call-to-action">
                    <div className="service-details__call-to-action-bg" style={{ backgroundImage: 'url(/images/service-details-cta-bg.jpg)' }}></div>
                    <div className="service-details__call-to-action-shape-1"></div>
                    <div className="service-details__call-to-action-shape-2"></div>
                    <h3 className="service-details__call-to-action-title">Ready to build a powerful brand that stands out?</h3>
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

export default Branding;