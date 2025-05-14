import React from 'react';

const WorkProcessSection: React.FC = () => {
  return (    <section style={{
      height: '5rem',
      position: 'relative',
      backgroundColor: '#fff'    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2>Our Work Process</h2>
      </div>

      <div style={{
        position: 'absolute',
        top: '5rem',
        left: 0,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center'
      }}>
        <div style={{
          flex: '1 1 250px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1.5rem',
          backgroundColor: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          maxWidth: '300px'
        }}>
          <h3>1. Consultation</h3>
          <p>We start by understanding your business needs and goals.</p>
        </div>

        <div style={{
          flex: '1 1 250px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1.5rem',
          backgroundColor: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          maxWidth: '300px'
        }}>
          <h3>2. Planning</h3>
          <p>Our team creates a detailed plan tailored to your requirements.</p>
        </div>

        <div style={{
          flex: '1 1 250px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1.5rem',
          backgroundColor: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          maxWidth: '300px'
        }}>
          <h3>3. Execution</h3>
          <p>We implement the plan with precision and efficiency.</p>
        </div>

        <div style={{
          flex: '1 1 250px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1.5rem',
          backgroundColor: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          maxWidth: '300px'
        }}>
          <h3>4. Delivery</h3>
          <p>We deliver the final product, ensuring it meets your expectations.</p>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;