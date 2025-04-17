import React from 'react';
import { Link } from 'react-router-dom';

const WorkProcessSection = () => {
  return (
    <section className="work-process-one" style={{ backgroundImage: 'url(/images/pattern/blog-v3-pattern.jpg)' }}>
      <div className="container">
        <div className="sec-title text-center">
          <h2 className="sec-title__title">OUR WORK PROCESS</h2>
        </div>

        <div className="row">
          {/* Process Step 1 */}
          <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
            <div className="work-process-one__single text-center">
              <div className="shape3"><img src="/images/shapes/work-process-v1-shape3.png" alt="#" /></div>
              <div className="icon-box">
                <span className="icon-interview"></span>
              </div>
              <div className="inner">
                <div className="shape1"><img src="/images/shapes/work-process-v1-shape1.png" alt="#" /></div>
                <div className="shape2"><img src="/images/shapes/work-process-v1-shape2.png" alt="#" /></div>
                <div className="text-box">
                  <h2><Link to="#">Client Engagement</Link></h2>
                  <p>Client Discovery: Understand the client's business, objectives, and challenges.
                    Collaborate with the client to gather detailed project
                    requirements.
                  </p>
                </div>
              </div>
              <div className="work-process-one__single-bottom">
                <div className="count-box"></div>
              </div>
            </div>
          </div>

          {/* Process Step 2 */}
          <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.2s">
            <div className="work-process-one__single text-center">
              <div className="shape3"><img src="/images/shapes/work-process-v1-shape3.png" alt="#" /></div>
              <div className="icon-box">
                <span className="icon-analytics"></span>
              </div>
              <div className="inner">
                <div className="shape1"><img src="/images/shapes/work-process-v1-shape1.png" alt="#" /></div>
                <div className="shape2"><img src="/images/shapes/work-process-v1-shape2.png" alt="#" /></div>
                <div className="text-box">
                  <h2><Link to="#">DCube(D3) Process</Link></h2>
                  <p>Navatech adheres to the DCube methodology, encompassing three integral phases within
                    our service delivery process: Design, Develop, and Deliver. Click "Book Now" to
                    learn more about our D3 process.</p>
                </div>
              </div>
              <div className="work-process-one__single-bottom">
                <div className="count-box"></div>
              </div>
            </div>
          </div>

          {/* Process Step 3 */}
          <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
            <div className="work-process-one__single text-center">
              <div className="icon-box">
                <span className="icon-leadership"></span>
              </div>
              <div className="inner">
                <div className="shape1"><img src="/images/shapes/work-process-v1-shape1.png" alt="#" /></div>
                <div className="shape2"><img src="/images/shapes/work-process-v1-shape2.png" alt="#" /></div>
                <div className="text-box">
                  <h2><Link to="#">Launch</Link></h2>
                  <p>After the launch of a software or app, Navatech engages in post-launch activities like
                    monitoring servers or app response and support user feedback, Backup and
                    Disaster Recovery etc.</p>
                </div>
              </div>
              <div className="work-process-one__single-bottom">
                <div className="count-box"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;