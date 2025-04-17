import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection: React.FC = () => {
  return (
    <section className="blog-one">
      <div className="blog-one__bg" style={{ backgroundImage: 'url(/images/backgrounds/blog-v1-bg.jpg)' }}></div>
      <div className="container">
        <div className="sec-title text-center">
          <h2 className="sec-title__title">Blog</h2>
        </div>
        <div className="row">
          {/* Blog Post 1 */}
          <div className="col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay=".3s">
            <div className="blog-one__single">
              <div className="blog-one__single-img">
                <img src="/images/iDGlogo.jpeg" alt="#" />
                <div className="text-box">Technology</div>
              </div>
              <div className="blog-one__single-content">
                <ul className="meta-box">
                  <li>
                    <div className="icon">
                      <span className="icon-user3"></span>
                    </div>
                    <div className="text">
                      <p><Link to="#">By Admin</Link></p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-comment"></span>
                    </div>
                    <div className="text">
                      <p><Link to="#">12 Comment</Link></p>
                    </div>
                  </li>
                </ul>

                <h2><Link to="/blog/software-quality">Software Quality </Link><br />
                  V & V Process
                </h2>
                <p>Take a look at our software quality process</p>
                <div className="btn-box">
                  <Link to="/blog/software-quality">Read More</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="col-xl-4 col-lg-4 wow fadeInDown animated" data-wow-delay=".3s">
            <div className="blog-one__single">
              <div className="blog-one__single-img">
                <img src="/images/logo_transparent.png" alt="#" />
                <div className="text-box">Security</div>
              </div>
              <div className="blog-one__single-content">
                <ul className="meta-box">
                  <li>
                    <div className="icon">
                      <span className="icon-user3"></span>
                    </div>
                    <div className="text">
                      <p><Link to="#">By Admin</Link></p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-comment"></span>
                    </div>
                    <div className="text">
                      <p><Link to="#">12 Comment</Link></p>
                    </div>
                  </li>
                </ul>

                <h2><Link to="/blog/bigdata-testing">BigData Testing
                  </Link><br />
                  Data Matters
                </h2>
                <p>How to test multi-million records and how to do you know all the business requirment
                  are cpatured properly and tested properly.</p>
                <div className="btn-box">
                  <Link to="/blog/bigdata-testing">Read More</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay=".3s">
            <div className="blog-one__single">
              <div className="blog-one__single-img">
                <img src="/images/logo-1.png" alt="#" />
                <div className="text-box">Software</div>
              </div>
              <div className="blog-one__single-content">
                <ul className="meta-box">
                  <li>
                    <div className="icon">
                      <span className="icon-user3"></span>
                    </div>
                    <div className="text">
                      <p><Link to="#">By Admin</Link></p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-comment"></span>
                    </div>
                    <div className="text">
                      <p><Link to="#">12 Comment</Link></p>
                    </div>
                  </li>
                </ul>

                <h2><Link to="/blog/web-app-development">Web/App Development</Link><br />Let's build software
                </h2>
                <p>We have hands-on experience in developing production ready web application or iSO or
                  Android app.</p>
                <div className="btn-box">
                  <Link to="/blog/web-app-development">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;