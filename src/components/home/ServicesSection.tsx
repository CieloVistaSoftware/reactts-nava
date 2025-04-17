import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="sec-title text-center">
          <h2 className="sec-title__title">Our Services</h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="services-section__single">
              <div className="services-section__icon">
                <span className="icon-coding"></span>
              </div>
              <h3>Custom Software Development</h3>
              <p>We deliver tailored software solutions to meet your unique business needs.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="services-section__single">
              <div className="services-section__icon">
                <span className="icon-security"></span>
              </div>
              <h3>Cybersecurity Solutions</h3>
              <p>Protect your business with our advanced cybersecurity services.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="services-section__single">
              <div className="services-section__icon">
                <span className="icon-cloud"></span>
              </div>
              <h3>Cloud Integration</h3>
              <p>Seamlessly integrate your business processes with cloud technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;