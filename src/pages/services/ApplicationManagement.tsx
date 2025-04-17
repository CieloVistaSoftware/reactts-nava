import React from 'react';
import ServicePage from '../../components/services/ServicePage';

const ApplicationManagement: React.FC = () => {
  const serviceContent = (
    <>
      <p>iDriven Global Tech provides comprehensive application management services designed to optimize your software ecosystem, improve operational efficiency, and drive business value from your applications.</p>
      
      <h2>Our Application Management Services Include:</h2>
      
      <h3>Application Portfolio Assessment</h3>
      <p>We conduct thorough analyses of your application ecosystem to identify opportunities for optimization, consolidation, or modernization. Our assessment covers technical health, business value, and strategic alignment to help prioritize investments and improvements.</p>
      
      <h3>Governance & Strategy</h3>
      <p>Our team helps establish robust governance frameworks for your applications, including standardized processes, roles and responsibilities, and decision-making structures. We develop long-term application roadmaps aligned with your business objectives.</p>
      
      <h3>Lifecycle Management</h3>
      <p>We manage every stage of your applications' lifecycle from implementation through retirement, ensuring seamless transitions between phases and maximizing ROI at each stage.</p>
      
      <h3>Performance Monitoring & Optimization</h3>
      <p>Using advanced monitoring tools and analytics, we continuously track application performance, identify bottlenecks, and implement improvements to enhance user experience and system efficiency.</p>
      
      <h3>Vendor Management</h3>
      <p>For third-party and SaaS applications, we handle vendor relationships, contract negotiations, service level agreements, and ensure you get maximum value from your software investments.</p>
      
      <h3>Cost Optimization</h3>
      <p>Our specialists identify opportunities to reduce application-related costs through license optimization, resource rightsizing, automation, and eliminating redundant systems.</p>
      
      <h3>Change Management</h3>
      <p>We implement structured processes for application changes, including request management, impact analysis, approval workflows, and controlled implementation to minimize business disruption.</p>
      
      <h2>Our Application Management Approach:</h2>
      
      <h3>Business-Aligned</h3>
      <p>We prioritize applications that deliver the greatest business value, ensuring IT investments directly support your strategic objectives.</p>
      
      <h3>User-Centric</h3>
      <p>We focus on improving user satisfaction and adoption through intuitive interfaces, responsive performance, and reliable functionality.</p>
      
      <h3>Data-Driven</h3>
      <p>Our decisions are guided by comprehensive metrics and analytics that provide clear visibility into application performance, usage, and business impact.</p>
      
      <h3>Continuous Improvement</h3>
      <p>We implement regular review cycles and feedback mechanisms to constantly enhance your application portfolio's effectiveness and efficiency.</p>
      
      <h3>Why Partner with iDriven Global Tech:</h3>
      <ul>
        <li><i className="fa fa-arrow-right"></i> Cross-domain expertise spanning multiple technologies and industries</li>
        <li><i className="fa fa-arrow-right"></i> Proven methodologies for application assessment and optimization</li>
        <li><i className="fa fa-arrow-right"></i> Strong focus on business outcomes and ROI</li>
        <li><i className="fa fa-arrow-right"></i> Transparent reporting and communication</li>
        <li><i className="fa fa-arrow-right"></i> Flexible engagement models tailored to your needs</li>
      </ul>
      
      <p>Let iDriven Global Tech transform your application management from a technical burden to a strategic advantage, helping you maximize the business value of your software investments.</p>
    </>
  );

  return (
    <ServicePage 
      title="Application Management" 
      content={serviceContent} 
      imageUrl="/images/App_manage.png"
    />
  );
};

export default ApplicationManagement;