import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

const BlogCard: React.FC<BlogPost> = ({ image, category, title, description, link }) => (
  <article style={{
    flex: '1 1 300px',
    maxWidth: '400px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
    transform: 'translateY(0)'
  }}
  onMouseEnter={e => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(-5px)';
    target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
  }}
  onMouseLeave={e => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(0)';
    target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
  }}>
    <div style={{
      position: 'relative',
      paddingTop: '60%'
    }}>
      <img 
        src={image}
        alt={title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
      <span style={{
        position: 'absolute',
        left: '1rem',
        bottom: '1rem',
        padding: '0.25rem 1rem',
        backgroundColor: '#fff',
        color: '#333',
        borderRadius: '4px',
        fontSize: '0.875rem'
      }}>{category}</span>
    </div>

    <div style={{
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <header>
        <h3 style={{
          margin: 0,
          fontSize: '1.5rem',
          lineHeight: 1.3
        }}>
          <Link 
            to={link} 
            style={{
              color: '#333',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#666';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#333';
            }}
          >
            {title}
          </Link>
        </h3>
      </header>

      <p style={{
        margin: 0,
        fontSize: '1rem',
        lineHeight: 1.6,
        color: '#666'
      }}>{description}</p>

      <footer>
        <Link 
          to={link} 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: '#333',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#666';
            const svg = e.currentTarget.querySelector('svg');
            if (svg) {
              svg.style.transform = 'translateX(4px)';
            }
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = '#333';
            const svg = e.currentTarget.querySelector('svg');
            if (svg) {
              svg.style.transform = 'translateX(0)';
            }
          }}
        >
          Read More
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            style={{ 
              marginLeft: '0.5rem',
              transition: 'transform 0.2s ease'
            }}
          >
            <path 
              d="M1 8H15M15 8L8 1M15 8L8 15" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </footer>
    </div>
  </article>
);

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      image: '/images/iDGlogo.jpeg',
      category: 'Technology',
      title: 'Software Quality - V & V Process',
      description: 'Take a look at our software quality process',
      link: '/blog/software-quality'
    },
    {
      image: '/images/logo_transparent.png',
      category: 'Security',
      title: 'BigData Testing - Data Matters',
      description: 'How to test multi-million records and ensure all business requirements are captured and tested properly.',
      link: '/blog/bigdata-testing'
    },
    {
      image: '/images/logo-1.png',
      category: 'Software',
      title: 'Web/App Development',
      description: 'We have hands-on experience in developing production ready web application or iOS or Android apps.',
      link: '/blog/web-app-development'
    }
  ];

  return (    <section style={{
      height: '5rem',
      position: 'relative',
      backgroundColor: '#fff'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/images/backgrounds/blog-v1-bg.jpg)',
        opacity: 0.05,
        zIndex: 0
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
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
          }}>Blog</h2>
        </header>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center'
        }}>
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={index}
              {...post}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;