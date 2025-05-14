import React from 'react';

const IntroSection: React.FC = () => {
  return (    <section style={{
      height: '5rem',
      position: 'relative',
      backgroundColor: '#fff'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '4rem',
        flexWrap: 'wrap'
      }}>
        <div style={{
          flex: '1 1 400px'
        }}>
          <article style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 600,
              margin: 0
            }}>About Nava Tech</h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: '#444',
              margin: 0
            }}>
              Nava Tech is a leading provider of innovative software solutions and IT services. We
              specialize in delivering custom applications, cybersecurity solutions, and digital
              transformation strategies to help businesses thrive in the digital age.
            </p>
            <div>
              <a href="#about" style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                backgroundColor: '#000',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 500,
                transition: 'background-color 0.2s ease'
              }}>Learn More</a>
            </div>
          </article>
        </div>

        <div style={{
          flex: '1 1 400px',
          minHeight: '300px',
          position: 'relative'
        }}>
          <img 
            src="/images/homeimg1.jpg" 
            alt="About Nava Tech"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;