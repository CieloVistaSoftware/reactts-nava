import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { Link } from 'react-router-dom';

const ContentMarketing: React.FC = () => {
  return (
    <div>
      <PageHeader title="Content Marketing" backgroundImage="/images/allpage.jpg" />

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
                    <li className="active"><Link to="/services/content-marketing">Content Marketing</Link></li>
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
                  <img src="/images/dig_contmark.png" alt="Content Marketing" />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">Content Marketing</h3>
                  <p className="service-details__text">Content marketing is the art and science of creating and distributing valuable, relevant content to attract and engage your target audience. At iDriven Global Tech, we develop comprehensive content strategies that establish your authority, build trust, and drive conversions through every stage of the customer journey.</p>
                  
                  <div className="service-details__benefits">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="service-details__benefits-single">
                          <div className="service-details__benefits-icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="service-details__benefits-content">
                            <h4>Content Strategy</h4>
                            <p>We develop data-driven content strategies aligned with your business goals and audience needs.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="service-details__benefits-single">
                          <div className="service-details__benefits-icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="service-details__benefits-content">
                            <h4>Content Creation</h4>
                            <p>Our expert team creates engaging blog posts, articles, whitepapers, case studies, and more.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="service-details__benefits-single">
                          <div className="service-details__benefits-icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="service-details__benefits-content">
                            <h4>Content Distribution</h4>
                            <p>Strategic distribution across owned, earned, and paid channels to maximize reach and impact.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="service-details__benefits-single">
                          <div className="service-details__benefits-icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="service-details__benefits-content">
                            <h4>Performance Analysis</h4>
                            <p>Continuous monitoring and optimization based on content performance metrics and audience engagement.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-details__about">
                    <h3 className="service-details__about-title">Why Choose Our Content Marketing Services?</h3>
                    <p className="service-details__about-text">Our content marketing approach is built on a deep understanding of your industry, audience, and competitive landscape. We don't just create content—we craft strategic assets that serve specific purposes in your marketing funnel.</p>
                    <p className="service-details__about-text">From establishing thought leadership to driving conversions, our content strategies are designed to deliver measurable results and long-term value for your business.</p>
                  </div>
                  
                  <div className="service-details__faq">
                    <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                      <h3 className="service-details__faq-title">Frequently Asked Questions</h3>
                      <div className="accrodion active">
                        <div className="accrodion-title">
                          <h4>How long before we see results from content marketing?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>Content marketing is a long-term strategy. While some content may generate immediate engagement, the full benefits—like improved search rankings, brand authority, and sustainable lead generation—typically begin to manifest after 3-6 months of consistent, quality content publication and promotion.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>What types of content do you create?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>We create a diverse range of content formats tailored to your audience and business objectives, including blog posts, long-form articles, case studies, whitepapers, ebooks, infographics, videos, podcasts, webinars, email newsletters, social media content, and interactive content. Each piece is strategically designed to serve specific goals in your marketing funnel.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-details__call-to-action">
                    <div className="service-details__call-to-action-bg" style={{ backgroundImage: 'url(/images/service-details-cta-bg.jpg)' }}></div>
                    <div className="service-details__call-to-action-shape-1"></div>
                    <div className="service-details__call-to-action-shape-2"></div>
                    <h3 className="service-details__call-to-action-title">Ready to elevate your content strategy?</h3>
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

export default ContentMarketing;