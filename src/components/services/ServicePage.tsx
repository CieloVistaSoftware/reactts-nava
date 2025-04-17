import React from 'react';
import Layout from '../layout/Layout';

interface ServicePageProps {
  title: string;
  content: React.ReactNode;
  imageUrl?: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ title, content, imageUrl }) => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: 'url(/images/allpage.jpg)' }}>
        </div>
        <div className="container">
          <div className="page-header__inner text-center">
            <h2>{title}</h2>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="about-three">
        <div className="shape5"><img src="/images/shapes/projects-v1-shape5.png" alt="#" /></div>
        <div className="shape4"><img src="/images/shapes/about-v3-shape3.png" alt="#" /></div>
        <div className="shape5"><img src="/images/shapes/about-v3-shape4.png" alt="#" /></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="about-three__content drt">
                <div className="sec-title">
                  <div className="sec-title__tagline">
                  </div>
                  <h2 className="sec-title__title">{title}</h2>
                </div>
                <div className="about-three__content-text1 allpageh3">
                  {content}
                </div>
                {imageUrl && (
                  <div className="service-image">
                    <img src={imageUrl} className="img-thumbnail" alt={title} width="100%" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;