import React from 'react';

const WorkProcessSection: React.FC = () => {
  return (
    <section className="work-process-section">
      <div className="container">
        <div className="sec-title text-center">
          <h2 className="sec-title__title">Our Work Process</h2>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="work-process-section__single">
              <h3>1. Consultation</h3>
              <p>We start by understanding your business needs and goals.</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="work-process-section__single">
              <h3>2. Planning</h3>
              <p>Our team creates a detailed plan tailored to your requirements.</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="work-process-section__single">
              <h3>3. Execution</h3>
              <p>We implement the plan with precision and efficiency.</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="work-process-section__single">
              <h3>4. Delivery</h3>
              <p>We deliver the final product, ensuring it meets your expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;