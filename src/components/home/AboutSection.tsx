import React from 'react';

const AboutSection: React.FC = () => {
  return (    <section style={{
      height: '5rem',
      position: 'relative',
      backgroundColor: '#fff',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '4rem',
        flexWrap: 'wrap'
      }}>
        {/* Image Column */}
        <aside style={{
          flex: '1 1 400px',
          position: 'relative'
        }}>
          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <img 
              src="/images/homeimg1.jpg"
              alt="Nava Tech Office"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
        </aside>

        {/* Content Column */}
        <article style={{
          flex: '1 1 500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          <header style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 600,
              lineHeight: 1.2,
              margin: 0
            }}>Welcome to Nava Tech for Software Development</h2>
          </header>

          <div style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: '#444'
          }}>
            <p>
              Nava Tech for Software Development array of services can be a comprehensive
              solution either it is digital transformation consultation or Strategic Resourcing or
              cloud-based solutions or Outsourced Product development to help companies stay
              competitive.
            </p>
            <p style={{ marginTop: '1rem' }}>
              In a world that's constantly changing, the Navatech team believes that
              companies need a consistent plan for staying on the cutting edge. Fortunately, with
              us, you can access everything from expert guidance to implementation and support to
              bring your IT enablement campaign to life.
            </p>
          </div>
        </article>
      </div>

      {/* Decorative Elements */}
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
    </section>
  );
};

export default AboutSection;