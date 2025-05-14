import React from 'react';
import Layout from '../layout/Layout';
import PageHeader from '../layout/PageHeader';

interface ServicePageProps {
  title: string;
  content: React.ReactNode;
  imageUrl?: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ title, content, imageUrl }) => {
  return (
    <Layout>
      <PageHeader title={title} backgroundImage="/images/allpage.jpg" />

      <article style={{
        padding: '4rem 2rem',
        backgroundColor: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative shapes */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: 0,
          width: '150px',
          height: '150px',
          opacity: 0.1,
          backgroundImage: 'url(/images/shapes/projects-v1-shape5.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: 0,
          width: '150px',
          height: '150px',
          opacity: 0.1,
          backgroundImage: 'url(/images/shapes/about-v3-shape3.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem'
        }}>
          <header>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 600,
              margin: 0,
              textAlign: 'center'
            }}>{title}</h1>
          </header>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            <div style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: '#444'
            }}>{content}</div>

            {imageUrl && (
              <figure style={{
                margin: 0,
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src={imageUrl} 
                  alt={title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </figure>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ServicePage;