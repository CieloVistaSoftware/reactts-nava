import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import Layout from '../components/layout/Layout';

const AboutUs = () => {
  return (
    <Layout>
      <PageHeader title="About Us" backgroundImage="/images/allpage.jpg" />

      {/* About Three Section */}
      <section className="about-three">
        <div className="container">
          <div className="row">
            {/* Start About One Img */}
            <div className="col-xl-5">
              <div className="about-three__img clearfix">
                <div className="about-three__img2 wow fadeInUp" data-wow-delay=".3s">
                  <div className="inner">
                    <img src="/images/homeimg1.jpg" className="thim img-thumbnail" alt="About Nava Tech" />
                  </div>
                </div>
              </div>
            </div>
            {/* End About One Img */}

            {/* Start About One Content */}
            <div className="col-xl-7">
              <div className="about-three__content">
                <div className="sec-title">
                  <div className="sec-title__tagline"></div>
                  <h2 className="sec-title__title">About Us</h2>
                </div>

                <div className="about-three__content-text1">
                  <p>
                    Nava Tech for Software Development array of services can be a comprehensive
                    solution either it is digital transformation consultation or Strategic Resourcing or
                    cloud-based solutions or Outsourced Product development to help companies stay
                    competitive. In a world that's constantly changing, the Navatech team believes that
                    companies need a consistent plan for staying on the cutting edge. Fortunately, with
                    us, you can access everything from expert guidance to implementation and support to
                    bring your IT enablement campaign to life.
                  </p>
                </div>
              </div>
            </div>
            {/* End About One Content */}
          </div>
        </div>
      </section>

      {/* Company Vision & Mission Section */}
      <section className="about-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-details__content mb-5">
                <h3 className="about-details__title">Our Vision</h3>
                <p className="about-details__text">
                  To be the trusted technology partner for businesses worldwide, driving innovation, excellence, and sustainable growth through cutting-edge software solutions and digital strategies.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-details__content">
                <h3 className="about-details__title">Our Mission</h3>
                <p className="about-details__text">
                  To empower organizations of all sizes with tailored technology solutions that solve complex problems, enhance operational efficiency, and create competitive advantages in an increasingly digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values py-5 bg-light">
        <div className="container">
          <div className="sec-title text-center mb-5">
            <h2 className="sec-title__title">Our Core Values</h2>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="core-value-card text-center p-4 h-100 bg-white shadow-sm rounded">
                <div className="core-value-icon mb-3">
                  <i className="fa fa-rocket fa-2x text-primary"></i>
                </div>
                <h3 className="core-value-title h4">Innovation</h3>
                <p className="core-value-text">
                  We constantly explore new technologies and methodologies to deliver forward-thinking solutions that keep our clients ahead of the curve.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="core-value-card text-center p-4 h-100 bg-white shadow-sm rounded">
                <div className="core-value-icon mb-3">
                  <i className="fa fa-handshake fa-2x text-primary"></i>
                </div>
                <h3 className="core-value-title h4">Integrity</h3>
                <p className="core-value-text">
                  We conduct business with the highest ethical standards, transparency, and accountability in all our relationships with clients, partners, and team members.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="core-value-card text-center p-4 h-100 bg-white shadow-sm rounded">
                <div className="core-value-icon mb-3">
                  <i className="fa fa-award fa-2x text-primary"></i>
                </div>
                <h3 className="core-value-title h4">Excellence</h3>
                <p className="core-value-text">
                  We are committed to delivering exceptional quality in everything we do, continuously improving our processes, skills, and services.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="core-value-card text-center p-4 h-100 bg-white shadow-sm rounded">
                <div className="core-value-icon mb-3">
                  <i className="fa fa-users fa-2x text-primary"></i>
                </div>
                <h3 className="core-value-title h4">Client-Centric</h3>
                <p className="core-value-text">
                  We place our clients at the heart of our business, understanding their unique needs and challenges to provide tailored solutions that deliver tangible value.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="core-value-card text-center p-4 h-100 bg-white shadow-sm rounded">
                <div className="core-value-icon mb-3">
                  <i className="fa fa-globe fa-2x text-primary"></i>
                </div>
                <h3 className="core-value-title h4">Global Perspective</h3>
                <p className="core-value-text">
                  We leverage our diverse, international team to bring global insights and best practices to local challenges, creating versatile solutions for a connected world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;