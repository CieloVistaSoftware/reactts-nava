import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import Layout from '../components/layout/Layout';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
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

      {/* Book Now Form Section */}
      <section className="team-one team-one--team">
        <div className="container">
          <div className="row">
            <div className="sec-title">
              <div className="sec-title__tagline"></div>
              <h2 className="sec-title__title text-center">Book Now</h2>
            </div>
          </div>
          <div className="row">
            <div id="contact_form" className="col-12">
              <div id="contact_results"></div>
              <div className="row clearfix wow zoomIn">
                <div className="form-group wow fadeInDown col-lg-6 col-md-6 col-sm-12">
                  <input 
                    type="text" 
                    className="form-control control1" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name" 
                    required 
                  />
                </div>

                <div className="form-group wow fadeInDown col-lg-6 col-md-6 col-sm-12">
                  <input 
                    type="email" 
                    className="form-control control1" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" 
                    required 
                  />
                </div>

                <div className="form-group wow fadeInDown col-lg-6 col-md-6 col-sm-12">
                  <input 
                    type="text" 
                    className="form-control control1" 
                    id="mobile" 
                    name="mobile" 
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number" 
                    required 
                  />
                </div>

                <div className="form-group wow fadeInDown col-lg-6 col-md-6 col-sm-12">
                  <input 
                    type="text" 
                    className="form-control control1" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject" 
                    required 
                  />
                </div>

                <div className="form-group wow fadeInDown col-lg-12 col-md-12 col-sm-12" style={{ marginTop: '20px', marginBottom: '20px' }}>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    cols="30" 
                    rows="4" 
                    placeholder="Message" 
                    maxLength="140" 
                    required
                  ></textarea>
                </div>

                <div className="form-group wow fadeInDown text-center col-lg-12 col-md-12 col-sm-12">
                  <button 
                    className="thm-btn submit-btn" 
                    type="button" 
                    id="submit_btn" 
                    onClick={handleSubmit}
                  >
                    <span className="txt">Send Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15554.524252552728!2d80.19865404999999!3d12.93141765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1698239541346!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nava Tech location"
        ></iframe>
      </section>

      {/* Contact Info Section */}
      <section className="contact-page">
        <div className="container">
          <div className="contact-page__top">
            <div className="row">
              <div className="sec-title">
                <div className="sec-title__tagline"></div>
                <h2 className="sec-title__title text-center">Contact Info</h2>
              </div>
            </div>

            <ul className="list-unstyled">
              {/* Address */}
              <li className="contact-page__top-single">
                <div className="icon">
                  <span className="icon-location-filled"></span>
                </div>
                <div className="content">
                  <h2>Address</h2>
                  <p>Chennai Tamilnadu India<br />
                    Phoenix Arizona USA</p>
                </div>
              </li>

              {/* Phone */}
              <li className="contact-page__top-single">
                <div className="icon">
                  <span className="icon-phone-auricular"></span>
                </div>
                <div className="content">
                  <h2>Get In Touch</h2>
                  <p>
                    <a href="tel:+917418785163">+91 7418785163</a><br />
                    <a href="tel:+16025077754">+1 (602) 507-7754</a>
                  </p>
                </div>
              </li>

              {/* Email */}
              <li className="contact-page__top-single">
                <div className="icon">
                  <span className="icon-email2"></span>
                </div>
                <div className="content">
                  <h2>Email Address</h2>
                  <p>
                    <a href="mailto:booknow@navatech.com">booknow@navatech.com</a><br />
                    <a href="mailto:support@navatech.com">support@navatech.com</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;