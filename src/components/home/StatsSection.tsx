import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="stats-section__single">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="stats-section__single">
              <h3>300+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="stats-section__single">
              <h3>50+</h3>
              <p>Team Members</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="stats-section__single">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;