import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="testimonial-one">
      <div className="container">
        <div className="sec-title text-center">
          <h2 className="sec-title__title">Our Testimonial</h2>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="testimonial-one__inner">
              <div className="owl-carousel owl-theme thm-owl__carousel case-one__carousel" data-owl-options='{
                "loop": true,
                "autoplay": true,
                "margin": 30,
                "nav": false,
                "dots": false,
                "smartSpeed": 500,
                "autoplayTimeout": 10000,
                "navText": ["<span className=\"icon-left-arrow\"></span>","<span className=\"icon-next\"></span>"],
                "responsive": {
                  "0": {
                    "items": 1
                  },
                  "768": {
                    "items": 1
                  },
                  "992": {
                    "items": 1
                  },
                  "1200": {
                    "items": 1
                  },
                  "1500": {
                    "items": 2
                  }
                }
              }'>
                {/* Testimonial 1 */}
                <div className="testimonial-one__single">
                  <div className="testimonial-one__single-content">
                    <div className="testimonial-one__single-content-top">
                      <div className="icon-box">
                        <span className="icon-bubble-message"></span>
                      </div>
                      <div className="rating-box">
                        <ul>
                          <li><span className="icon-star"></span></li>
                          <li><span className="icon-star"></span></li>
                          <li><span className="icon-star"></span></li>
                          <li><span className="icon-star"></span></li>
                          <li><span className="icon-star2"></span></li>
                        </ul>
                      </div>
                    </div>

                    <div className="testimonial-one__single-content-middle">
                      <h2>It is very good company</h2>
                      <p>Lorem ipsum dolor sit amet conse
                        ctetur review sed do eiusmodtempor incididunt ut labore et on dolore
                      </p>
                    </div>

                    <div className="testimonial-one__single-content-bottom">
                      <h2>Tony Adeson</h2>
                      <p>Designer Switzerland</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="testimonial-one__single">
                  <div className="testimonial-one__single-content">
                    <div className="testimonial-one__single-content-top">
                      <div className="icon-box">
                        <span className="icon-bubble-message"></span>
                      </div>
                      <div className="rating-box">
                        <ul>
                          <li><span className="icon-star"></span></li>
                          <li><span className="icon-star"></span></li>
                          <li><span className="icon-star"></span></li>
                          <li><span className="icon-star"></span></li>
                          <li><span className="icon-star2"></span></li>
                        </ul>
                      </div>
                    </div>

                    <div className="testimonial-one__single-content-middle">
                      <h2>Nice Services</h2>
                      <p>Lorem ipsum dolor sit amet conse
                        ctetur review sed do eiusmodtempor incididunt ut labore et on dolore
                      </p>
                    </div>

                    <div className="testimonial-one__single-content-bottom">
                      <h2>Adam Wiliam</h2>
                      <p>Designer Switzerland</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;