import React from 'react';
import ServicePage from '../../components/services/ServicePage';

const ApplicationMaintenance: React.FC = () => {
  const serviceContent = (
    <>
      <p>iDriven Global Tech offers comprehensive application maintenance and support services to ensure your software runs smoothly and efficiently, minimizing downtime and maximizing business value.</p>
      
      <h2>Our Application Maintenance & Support Services:</h2>
      
      <h3>Proactive Monitoring</h3>
      <p>We implement 24/7 monitoring solutions to detect and address issues before they impact your users. Our monitoring includes performance metrics, error tracking, and usage analytics to ensure optimal application health.</p>
      
      <h3>Bug Fixing & Issue Resolution</h3>
      <p>Our expert team quickly identifies, diagnoses, and resolves software bugs and technical issues. We maintain a detailed tracking system for all reported problems and follow structured resolution processes to ensure thorough fixes.</p>
      
      <h3>Performance Optimization</h3>
      <p>We continuously analyze and improve your application's performance through code optimization, database tuning, and infrastructure refinement to ensure fast, responsive user experiences.</p>
      
      <h3>Security Updates & Patch Management</h3>
      <p>Our team keeps your application secure by regularly implementing security updates, patching vulnerabilities, and conducting security audits to protect your data and users.</p>
      
      <h3>Version Upgrades</h3>
      <p>We manage smooth transitions to newer versions of frameworks, libraries, and dependencies to ensure your application benefits from the latest features and security improvements without disruption to your business.</p>
      
      <h3>Technical Support</h3>
      <p>Our support team provides timely assistance to end-users and administrators through multiple channels, with clearly defined SLAs that align with your business requirements.</p>
      
      <h3>Documentation & Knowledge Management</h3>
      <p>We maintain comprehensive documentation for your application, including architecture diagrams, code comments, and user guides to ensure knowledge transfer and support continuity.</p>
      
      <h2>Our Support Models:</h2>
      
      <h3>Dedicated Team Model</h3>
      <p>A team exclusively assigned to maintain and support your application, offering deep product knowledge and fast response times.</p>
      
      <h3>Shared Resource Model</h3>
      <p>Cost-effective support where resources are shared across multiple clients, ideal for applications with lower maintenance requirements.</p>
      
      <h3>On-Demand Support</h3>
      <p>Flexible support hours that you can use as needed, perfect for seasonal businesses or applications with irregular maintenance needs.</p>
      
      <h3>Why Choose iDriven Global Tech for Application Maintenance:</h3>
      <ul>
        <li><i className="fa fa-arrow-right"></i> Experienced specialists with deep expertise across multiple technologies</li>
        <li><i className="fa fa-arrow-right"></i> Clear, transparent SLAs with defined response times</li>
        <li><i className="fa fa-arrow-right"></i> Proactive approach to prevent issues before they impact users</li>
        <li><i className="fa fa-arrow-right"></i> Comprehensive reporting and communication</li>
        <li><i className="fa fa-arrow-right"></i> Continuous improvement methodology</li>
        <li><i className="fa fa-arrow-right"></i> Scalable support that grows with your business</li>
      </ul>
      
      <p>Partner with iDriven Global Tech to ensure your applications remain reliable, secure, and optimized, allowing your team to focus on innovation and core business objectives.</p>
    </>
  );

  return (
    <ServicePage 
      title="Application Maintenance & Support" 
      content={serviceContent} 
      imageUrl="/images/mai.png"
    />
  );
};

export default ApplicationMaintenance;