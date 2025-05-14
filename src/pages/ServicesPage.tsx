import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader title="Our Services" backgroundImage="/images/allpage.jpg" />
      
      <section className="services-page">
        <div className="container">
          <div className="sec-title text-center">
            <h2 className="sec-title__title">Our Services</h2>
            <p className="sec-title__text">We offer a wide range of software development and IT services</p>
          </div>
          
          <div className="row">
            {/* Application Services Category */}
            <div className="col-12 mb-5">
              <h3 className="service-category-title">Application Services</h3>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="service-card">
                    <div className="service-card__icon">
                      <img src="/images/dev.png" alt="Application Development" />
                    </div>
                    <h4 className="service-card__title">Application Development</h4>
                    <p className="service-card__text">Custom application development for your business needs</p>
                    <Link to="/services/application-development" className="service-card__link">Learn More</Link>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="service-card">
                    <div className="service-card__icon">
                      <img src="/images/int.png" alt="Application Integration" />
                    </div>
                    <h4 className="service-card__title">Application Integration</h4>
                    <p className="service-card__text">Seamless integration of your applications</p>
                    <Link to="/services/application-integration" className="service-card__link">Learn More</Link>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="service-card">
                    <div className="service-card__icon">
                      <img src="/images/mai.png" alt="Application Maintenance" />
                    </div>
                    <h4 className="service-card__title">Application Maintenance</h4>
                    <p className="service-card__text">Ongoing support and maintenance of your applications</p>
                    <Link to="/services/application-maintenance" className="service-card__link">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cyber Security Category */}
            <div className="col-12 mb-5">
              <h3 className="service-category-title">Cyber Security</h3>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="service-card">
                    <div className="service-card__icon">
                      <img src="/images/cyb_appsec.png" alt="Application Security" />
                    </div>
                    <h4 className="service-card__title">Application Security</h4>
                    <p className="service-card__text">Secure your applications from threats</p>
                    <Link to="/services/application-security" className="service-card__link">Learn More</Link>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="service-card">
                    <div className="service-card__icon">
                      <img src="/images/cyb_datasec.png" alt="Data Security" />
                    </div>
                    <h4 className="service-card__title">Data Security</h4>
                    <p className="service-card__text">Protect your valuable data assets</p>
                    <Link to="/services/data-security" className="service-card__link">Learn More</Link>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="service-card">
                    <div className="service-card__icon">
                      <img src="/images/cyb_netsec.png" alt="Network Security" />
                    </div>
                    <h4 className="service-card__title">Network Security</h4>
                    <p className="service-card__text">Secure your network infrastructure</p>
                    <Link to="/services/network-security" className="service-card__link">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
