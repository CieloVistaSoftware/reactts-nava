import React from 'react';

interface AboutPageProps {
  // You can add specific props for this component here
}

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title">About Nava Tech</h1>
            <div className="page-content">
              <h2>Who We Are</h2>
              <p>
                Nava Tech is a leading software development company with over 20 years of experience in providing innovative technology solutions to businesses worldwide.
                Our team of dedicated professionals is committed to delivering high-quality services tailored to meet our clients' unique needs.
              </p>
              
              <h2>Our Mission</h2>
              <p>
                Our mission is to empower businesses through cutting-edge technology solutions that drive growth, efficiency, and success.
                We strive to be a trusted partner in our clients' digital transformation journey, helping them navigate the complexities of the modern technological landscape.
              </p>
              
              <h2>Our Vision</h2>
              <p>
                To be the global leader in innovative software solutions, recognized for our excellence, integrity, and commitment to delivering transformative technology services.
              </p>
              
              <h2>Our Values</h2>
              <div className="values-container">
                <div className="value-item">
                  <h3>Excellence</h3>
                  <p>We strive for excellence in everything we do, pushing boundaries to deliver the best solutions.</p>
                </div>
                <div className="value-item">
                  <h3>Innovation</h3>
                  <p>We embrace innovation and creative thinking to solve complex problems with elegant solutions.</p>
                </div>
                <div className="value-item">
                  <h3>Integrity</h3>
                  <p>We conduct our business with integrity, transparency, and honesty in all our dealings.</p>
                </div>
                <div className="value-item">
                  <h3>Customer Focus</h3>
                  <p>Our customers are at the heart of everything we do, and their success is our success.</p>
                </div>
              </div>
              
              <h2>Our Expertise</h2>
              <p>
                With expertise spanning across various domains including application services, cyber security, digital marketing, software testing, UI/UX design, and software development,
                we offer comprehensive solutions to address all your technological needs.
              </p>
              
              <h2>Our Approach</h2>
              <p>
                We follow the DCube (D3) methodology in our service delivery process, encompassing three integral phases: Design, Develop, and Deliver.
                This approach ensures that every project is executed with precision, adhering to the highest quality standards and meeting all client requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;