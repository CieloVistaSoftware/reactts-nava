import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="sec-title text-center">
          <h2 className="sec-title__title">What Our Clients Say</h2>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="testimonial-section__single">
              <p>
                "Nava Tech transformed our business with their innovative solutions. Their team is
                professional, knowledgeable, and always ready to help."
              </p>
              <h3>- John Doe, CEO of TechCorp</h3>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="testimonial-section__single">
              <p>
                "The cybersecurity services provided by Nava Tech have been exceptional. We feel
                secure knowing our data is protected."
              </p>
              <h3>- Jane Smith, IT Manager at SecureData</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;