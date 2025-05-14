import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<Testimonial> = ({ quote, author, role }) => (
  <article
    style={{
      flex: '1 1 400px',
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    }}
  >
    <blockquote
      style={{
        margin: 0,
        fontSize: '1.125rem',
        lineHeight: 1.6,
        color: '#444',
        fontStyle: 'italic',
      }}
    >
      "{quote}"
    </blockquote>
    <footer
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
      }}
    >
      <cite
        style={{
          fontStyle: 'normal',
          fontSize: '1.125rem',
          fontWeight: 600,
          color: '#333',
        }}
      >
        {author}
      </cite>
      <span
        style={{
          fontSize: '0.875rem',
          color: '#666',
        }}
      >
        {role}
      </span>
    </footer>
  </article>
);

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        'Nava Tech transformed our business with their innovative solutions. Their team is professional, knowledgeable, and always ready to help.',
      author: 'John Doe',
      role: 'CEO of TechCorp',
    },
    {
      quote:
        'The cybersecurity services provided by Nava Tech have been exceptional. We feel secure knowing our data is protected.',
      author: 'Jane Smith',
      role: 'IT Manager at SecureData',
    },
  ];

  return (    <section
      style={{
        height: '5rem',
        position: 'relative',
        backgroundColor: '#f9f9f9',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }}
      >
        <header
          style={{
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: 600,
              margin: 0,
            }}
          >
            What Our Clients Say
          </h2>
        </header>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;