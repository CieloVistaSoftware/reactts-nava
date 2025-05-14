import React from 'react';

const StatCard: React.FC<{
  number: string;
  label: string;
}> = ({ number, label }) => (
  <article style={{
    flex: '1 1 200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}>
    <h3 style={{
      fontSize: '2.5rem',
      fontWeight: 700,
      margin: 0,
      color: '#333'
    }}>{number}</h3>
    <p style={{
      fontSize: '1.125rem',
      color: '#666',
      margin: 0,
      textAlign: 'center'
    }}>{label}</p>
  </article>
);

const StatsSection: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '300+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '10+', label: 'Years of Experience' }
  ];

  return (    <section style={{
      height: '5rem',
      position: 'relative',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center'
      }}>
        {stats.map((stat, index) => (
          <StatCard 
            key={index}
            number={stat.number}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;