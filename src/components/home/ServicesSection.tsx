import React from 'react';

const ServiceCard: React.FC<{
  icon: string,
  title: string,
  description: string
}> = ({ icon, title, description }) => (
  <article style={{
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
    }
  }}>
    <div style={{
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <span className={`icon-${icon}`} style={{
        fontSize: '2rem',
        color: '#333'
      }} />
    </div>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: 600,
        margin: 0
      }}>{title}</h3>
      <p style={{
        fontSize: '1.125rem',
        lineHeight: 1.6,
        color: '#666',
        margin: 0
      }}>{description}</p>
    </div>
  </article>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: 'coding',
      title: 'Custom Software Development',
      description: 'We deliver tailored software solutions to meet your unique business needs.'
    },
    {
      icon: 'security',
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with our advanced cybersecurity services.'
    },
    {
      icon: 'cloud',
      title: 'Cloud Integration',
      description: 'Seamlessly integrate your business processes with cloud technologies.'
    }
  ];

  return (    <section style={{
      height: '5rem',
      position: 'relative',
      backgroundColor: '#f9f9f9'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem'
      }}>
        <header style={{
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 600,
            margin: 0
          }}>Our Services</h2>
        </header>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center'
        }}>
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;