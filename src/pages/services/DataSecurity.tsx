import React from 'react';
import ServicePage from '../../components/services/ServicePage';

const DataSecurity: React.FC = () => {
  const serviceContent = (
    <>
      <p>iDriven Global Tech offers comprehensive Data Security services to protect your organization's most valuable asset—your data—from unauthorized access, corruption, or theft throughout its lifecycle.</p>
      
      <h2>Our Data Security Services:</h2>
      
      <h3>Data Classification & Discovery</h3>
      <p>We help you identify and classify your sensitive data assets, understanding what data you have, where it resides, and its level of sensitivity. Our discovery process uses advanced tools to locate personally identifiable information (PII), financial data, intellectual property, and other sensitive information across your organization.</p>
      
      <h3>Data Protection Strategy</h3>
      <p>Our experts develop comprehensive data security strategies tailored to your organization's specific needs, risk profile, and compliance requirements. We create policies and procedures that specify how data should be handled, stored, and transmitted securely throughout its lifecycle.</p>
      
      <h3>Encryption Solutions</h3>
      <p>We implement robust encryption solutions for data at rest, in transit, and in use. Our team selects and configures appropriate encryption methods for different data types and use cases, managing encryption keys securely to ensure data remains protected yet accessible to authorized users.</p>
      
      <h3>Access Control & Governance</h3>
      <p>We design and implement role-based access control systems that ensure only authorized individuals can access specific data. Our governance frameworks include regular access reviews, privilege management, and monitoring of data access patterns to detect potential security incidents.</p>
      
      <h3>Data Loss Prevention (DLP)</h3>
      <p>Our DLP solutions monitor and control data transfer activities across your network, endpoints, and cloud environments to prevent unauthorized sharing of sensitive information. We configure content inspection, contextual analysis, and policy enforcement to block or flag potential data leakage incidents.</p>
      
      <h3>Database Security</h3>
      <p>We secure your databases through vulnerability assessments, configuration hardening, activity monitoring, and authentication controls. Our approach addresses security at all layers of the database environment, from the infrastructure to the application interface.</p>
      
      <h3>Data Backup & Recovery</h3>
      <p>We design and implement secure backup strategies that protect data integrity while ensuring rapid recovery in case of data loss. Our solutions include encrypted backups, offsite replication, and regular testing of restoration procedures.</p>
      
      <h2>Our Data Security Approach:</h2>
      
      <h3>Defense in Depth</h3>
      <p>We implement multiple layers of security controls to protect data, ensuring that if one security measure fails, others are in place to maintain protection.</p>
      
      <h3>Privacy by Design</h3>
      <p>We integrate privacy considerations into data handling processes from the beginning, minimizing collection of unnecessary data and implementing appropriate protection for sensitive information.</p>
      
      <h3>Continuous Monitoring</h3>
      <p>Our solutions include ongoing monitoring of data access patterns, security controls, and emerging threats to provide early detection of potential security incidents.</p>
      
      <h3>Regulatory Alignment</h3>
      <p>We ensure that data security measures align with relevant regulations such as GDPR, HIPAA, PCI DSS, and industry-specific requirements that apply to your organization.</p>
      
      <h3>Benefits of Our Data Security Services:</h3>
      <ul>
        <li><i className="fa fa-arrow-right"></i> Protection against data breaches and associated financial losses</li>
        <li><i className="fa fa-arrow-right"></i> Compliance with data protection regulations and standards</li>
        <li><i className="fa fa-arrow-right"></i> Enhanced customer trust through demonstrable data protection</li>
        <li><i className="fa fa-arrow-right"></i> Reduction in insider threats through proper access controls</li>
        <li><i className="fa fa-arrow-right"></i> Improved visibility into data usage and potential security issues</li>
        <li><i className="fa fa-arrow-right"></i> Business continuity through secure data backup and recovery</li>
      </ul>
      
      <p>Partner with iDriven Global Tech to implement robust data security measures that protect your organization's most valuable information assets while enabling the secure use of data for business growth and innovation.</p>
    </>
  );

  return (
    <ServicePage 
      title="Data Security" 
      content={serviceContent} 
      imageUrl="/images/cyb_datasec.png"
    />
  );
};

export default DataSecurity;