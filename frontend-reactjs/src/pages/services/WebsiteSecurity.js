import React from 'react';
import ServicePage from '../../components/services/ServicePage';

const WebsiteSecurity = () => {
  const serviceContent = (
    <>
      <p>iDriven Global Tech provides comprehensive Website Security services to protect your online presence from threats, ensure data privacy, and maintain customer trust in an increasingly hostile digital landscape.</p>
      
      <h2>Our Website Security Services:</h2>
      
      <h3>Website Security Assessment</h3>
      <p>We perform thorough security assessments of your website to identify vulnerabilities, misconfigurations, and potential attack vectors. Our comprehensive evaluation includes code review, configuration analysis, and vulnerability scanning to establish a complete picture of your website's security posture.</p>
      
      <h3>Web Application Firewall (WAF)</h3>
      <p>We implement and configure advanced WAF solutions that filter and monitor HTTP traffic between web applications and the internet, protecting your site from common attacks like SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).</p>
      
      <h3>SSL/TLS Implementation</h3>
      <p>Our team ensures secure communication between your website and its users through proper implementation of SSL/TLS certificates, configuring secure protocols, and maintaining proper certificate management to protect data in transit.</p>
      
      <h3>Content Security Policy</h3>
      <p>We develop and implement robust Content Security Policies that control which resources can be loaded by your website, preventing attacks like cross-site scripting and clickjacking by restricting the sources of executable scripts.</p>
      
      <h3>DDoS Protection</h3>
      <p>We implement comprehensive DDoS protection solutions that detect and mitigate distributed denial-of-service attacks, ensuring your website remains available even when under attack through traffic analysis, rate limiting, and CDN integration.</p>
      
      <h3>Website Hardening</h3>
      <p>Our team applies security best practices to your website infrastructure, including server configuration hardening, CMS security optimization, removal of unnecessary services, and implementation of proper file permissions to reduce your attack surface.</p>
      
      <h3>Malware Detection & Removal</h3>
      <p>We provide solutions that continuously scan your website for malware, backdoors, and suspicious code, with rapid response for removal and remediation if threats are detected to keep your website clean and trustworthy.</p>
      
      <h3>Secure Authentication</h3>
      <p>We implement robust authentication systems for your website, including multi-factor authentication, secure password policies, and protection against brute force attempts to prevent unauthorized access to administrative areas.</p>
      
      <h2>Our Website Security Approach:</h2>
      
      <h3>Continuous Protection</h3>
      <p>We view website security as an ongoing process rather than a one-time implementation, providing continuous monitoring, regular security assessments, and timely updates to address new vulnerabilities and emerging threats.</p>
      
      <h3>Defense in Depth</h3>
      <p>We implement multiple layers of security controls throughout your website infrastructure, ensuring that if one security measure is compromised, others remain in place to protect your data and functionality.</p>
      
      <h3>Performance-Conscious Security</h3>
      <p>We design security solutions that provide robust protection while minimizing impact on website performance and user experience, finding the optimal balance between security and speed.</p>
      
      <h3>Security Awareness</h3>
      <p>We provide education and training for your team on website security best practices, helping everyone involved in website management understand their role in maintaining security.</p>
      
      <h3>Benefits of Our Website Security Services:</h3>
      <ul>
        <li><i className="fa fa-arrow-right"></i> Protection of sensitive customer data and business information</li>
        <li><i className="fa fa-arrow-right"></i> Preservation of brand reputation and customer trust</li>
        <li><i className="fa fa-arrow-right"></i> Compliance with privacy regulations and industry standards</li>
        <li><i className="fa fa-arrow-right"></i> Prevention of website defacement and malicious modifications</li>
        <li><i className="fa fa-arrow-right"></i> Improved search engine rankings through security best practices</li>
        <li><i className="fa fa-arrow-right"></i> Reduced risk of financial losses from security breaches</li>
      </ul>
      
      <p>Partner with iDriven Global Tech to implement robust website security measures that protect your online presence, customer data, and business reputation in today's challenging threat landscape.</p>
    </>
  );

  return (
    <ServicePage 
      title="Website Security" 
      content={serviceContent} 
      imageUrl="/images/cyb_websec.png"
    />
  );
};

export default WebsiteSecurity;