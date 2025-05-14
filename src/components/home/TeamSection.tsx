import React from 'react';
import { Link } from 'react-router-dom';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

interface TeamMember {
  image: string;
  name: string;
  role: string;
  description: string;
  socials: SocialLink[];
}

const TeamMemberCard: React.FC<TeamMember> = ({ image, name, role, description, socials }) => (
  <article style={{
    flex: '1 1 350px',
    maxWidth: '400px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  }}>
    <div style={{
      position: 'relative',
      paddingTop: '100%',
      backgroundColor: '#f5f5f5'
    }}>
      <img 
        src={image}
        alt={name}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '1rem',
        background: 'rgba(255,255,255,0.9)',
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center'
      }}>
        {socials.map((social, index) => (
          <a 
            key={index}
            href={social.url}
            style={{
              color: '#666',
              textDecoration: 'none',
              fontSize: '1.25rem',
              transition: 'color 0.2s ease'
            }}
          >
            <span className={`icon-${social.icon}`} />
          </a>
        ))}
      </div>
    </div>
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <header>
        <h3 style={{
          margin: 0,
          fontSize: '1.5rem',
          fontWeight: 600
        }}>
          <Link 
            to="/team" 
            style={{
              color: '#333',
              textDecoration: 'none'
            }}
          >
            {name}
            <br />
            <span style={{
              fontSize: '1rem',
              color: '#666',
              fontWeight: 500
            }}>{role}</span>
          </Link>
        </h3>
      </header>
      <p style={{
        margin: 0,
        color: '#666',
        lineHeight: 1.6
      }}>{description}</p>
    </div>
  </article>
);

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      image: '/images/giri-2.jpg',
      name: 'Giri Sabari',
      role: 'Director',
      description: 'For the past 18 years, he has been offering information technology consulting services to various Fortune 500 companies.',
      socials: [
        { name: 'Facebook', icon: 'facebook', url: '#' },
        { name: 'Twitter', icon: 'twitter', url: '#' },
        { name: 'Pinterest', icon: 'pinterest', url: '#' },
        { name: 'Instagram', icon: 'instagram', url: '#' }
      ]
    },
    {
      image: '/images/kannan-poto.jpeg',
      name: 'Kannan V P',
      role: 'Director',
      description: 'He has successfully built numerous businesses, demonstrating a profound understanding of business operations and team building.',
      socials: [
        { name: 'Facebook', icon: 'facebook', url: '#' },
        { name: 'Twitter', icon: 'twitter', url: '#' },
        { name: 'Pinterest', icon: 'pinterest', url: '#' },
        { name: 'Instagram', icon: 'instagram', url: '#' }
      ]
    }
  ];

  return (    <section style={{
      height: '5rem',
      position: 'relative',
      backgroundColor: '#fff'
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
          }}>Our Team</h2>
        </header>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          justifyContent: 'center'
        }}>
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={index}
              {...member}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;