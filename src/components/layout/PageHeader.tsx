import React from 'react';

interface PageHeaderProps {
  title: string;
  backgroundImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, backgroundImage }) => {
  return (
    <header
      style={{
        position: 'relative',
        width: '100%',
        height: '15rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        marginBottom: '2rem',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          width: '100%',
          padding: '0 2rem',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 600,
            margin: 0,
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          {title}
        </h1>
      </div>
    </header>
  );
};

export default PageHeader;