import React from 'react';

const HeroSlider: React.FC = () => {
  const slides = [
    {
      image: '/images/banner1.jpg',
      title: 'Leading IT Solutions Provider',
      subtitle: 'Transforming Ideas into Digital Reality',
      ctaText: 'Get Started',
      ctaLink: '#contact'
    },
    {
      image: '/images/banner2.jpg',
      title: 'Custom Software Development',
      subtitle: 'Building Solutions That Drive Growth',
      ctaText: 'Learn More',
      ctaLink: '#contact'
    },
    {
      image: '/images/banner3.jpeg',
      title: 'Secure and Scalable Solutions',
      subtitle: 'Ensuring Business Continuity and Growth',
      ctaText: 'Get in Touch',
      ctaLink: '#contact'
    }
  ];

  return (
    <section style={{
      marginTop: '5rem', // To account for fixed header
      height: '25vh',
      minHeight: '250px',
      position: 'relative'
    }}>
      {slides.map((slide, index) => (
        <div key={index} style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${slide.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          zIndex: index === 0 ? 1 : 0,
          opacity: index === 0 ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              color: '#000',
              maxWidth: '600px'
            }}>
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 600,
                margin: 0
              }}>{slide.title}</h1>
              <p style={{
                fontSize: '1.25rem',
                margin: 0
              }}>{slide.subtitle}</p>
              <div>
                <a href={slide.ctaLink} style={{
                  display: 'inline-block',
                  padding: '0.75rem 2rem',
                  backgroundColor: '#000',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: 500,
                  transition: 'background-color 0.2s ease'
                }}>{slide.ctaText}</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSlider;