import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="intro-section__content">
              <h2>About Nava Tech</h2>
              <p>
                Nava Tech is a leading provider of innovative software solutions and IT services. We
                specialize in delivering custom applications, cybersecurity solutions, and digital
                transformation strategies to help businesses thrive in the digital age.
              </p>
              <a href="#about" className="thm-btn">Learn More</a>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="intro-section__image">
              <img src="/images/homeimg1.jpg" alt="About Nava Tech" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;