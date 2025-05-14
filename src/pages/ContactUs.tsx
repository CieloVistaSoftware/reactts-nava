import React, { useState, ChangeEvent, FormEvent } from 'react';
import PageHeader from '../components/layout/PageHeader';
import Layout from '../components/layout/Layout';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic can be added here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      mobile: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <Layout>
      <PageHeader title="Contact Us" backgroundImage="/images/allpage.jpg" />

      {/* Contact Form Section */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#fff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem'
        }}>
          <header style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 600,
              margin: 0
            }}>Book Now</h2>
          </header>

          <form 
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              maxWidth: '800px',
              margin: '0 auto',
              width: '100%'
            }}
          >
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem'
            }}>
              <div style={{ flex: '1 1 250px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#666'
                }} htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ flex: '1 1 250px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#666'
                }} htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }}
                />
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem'
            }}>
              <div style={{ flex: '1 1 250px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#666'
                }} htmlFor="mobile">Mobile Number</label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ flex: '1 1 250px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#666'
                }} htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#666'
              }} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                maxLength={140}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                display: 'inline-block',
                padding: '1rem 3rem',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                alignSelf: 'center'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#333'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#000'}
            >
              Send Now
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section style={{
        width: '100%',
        height: '450px'
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15554.524252552728!2d80.19865404999999!3d12.93141765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1698239541346!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nava Tech location"
        />
      </section>

      {/* Contact Info */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#f9f9f9'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem'
        }}>
          <header style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 600,
              margin: 0
            }}>Contact Info</h2>
          </header>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '3rem',
            justifyContent: 'center'
          }}>
            {/* Address */}
            <div style={{
              flex: '1 1 300px',
              maxWidth: '350px',
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span className="icon-location-filled" style={{ color: '#fff', fontSize: '1.5rem' }}></span>
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  marginBottom: '0.5rem'
                }}>Address</h3>
                <p style={{
                  margin: 0,
                  lineHeight: 1.6
                }}>
                  Chennai Tamilnadu India<br />
                  Phoenix Arizona USA
                </p>
              </div>
            </div>

            {/* Phone */}
            <div style={{
              flex: '1 1 300px',
              maxWidth: '350px',
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span className="icon-phone-auricular" style={{ color: '#fff', fontSize: '1.5rem' }}></span>
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  marginBottom: '0.5rem'
                }}>Get In Touch</h3>
                <p style={{ margin: 0 }}>
                  <a href="tel:+917418785163" style={{
                    color: '#666',
                    textDecoration: 'none',
                    display: 'block',
                    marginBottom: '0.25rem'
                  }}>+91 7418785163</a>
                  <a href="tel:+16025077754" style={{
                    color: '#666',
                    textDecoration: 'none'
                  }}>+1 (602) 507-7754</a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div style={{
              flex: '1 1 300px',
              maxWidth: '350px',
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span className="icon-email2" style={{ color: '#fff', fontSize: '1.5rem' }}></span>
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  marginBottom: '0.5rem'
                }}>Email Address</h3>
                <p style={{ margin: 0 }}>
                  <a href="mailto:booknow@navatech.com" style={{
                    color: '#666',
                    textDecoration: 'none',
                    display: 'block',
                    marginBottom: '0.25rem'
                  }}>booknow@navatech.com</a>
                  <a href="mailto:support@navatech.com" style={{
                    color: '#666',
                    textDecoration: 'none'
                  }}>support@navatech.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;