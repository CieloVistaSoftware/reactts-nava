import React from 'react';
import ServicePage from '../../components/services/ServicePage';

const MobileAppSecurity: React.FC = () => {
  const serviceContent = (
    <>
      <p>iDriven Global Tech provides comprehensive Mobile Application Security services to protect your mobile apps from evolving threats, safeguard sensitive user data, and ensure compliance with industry regulations.</p>
      
      <h2>Our Mobile App Security Services:</h2>
      
      <h3>Security Architecture Review</h3>
      <p>We evaluate your mobile application's architecture from a security perspective, identifying potential vulnerabilities in its design. Our experts analyze data flow, authentication mechanisms, and integration points to recommend security improvements that can be implemented before development begins.</p>
      
      <h3>Secure Coding Practices</h3>
      <p>Our team implements industry-standard secure coding practices specific to mobile platforms (iOS, Android, cross-platform), focusing on preventing common vulnerabilities like insecure data storage, weak cryptography, and improper session handling.</p>
      
      <h3>Penetration Testing</h3>
      <p>We conduct thorough penetration testing specifically designed for mobile applications, simulating real-world attacks to identify vulnerabilities that automated tools might miss. Our testing covers client-side vulnerabilities, server-side API security, and the communication between them.</p>
      
      <h3>Code Security Audits</h3>
      <p>Our security experts perform detailed code reviews to identify security flaws, improper implementations, and vulnerable third-party libraries. We use both automated static code analysis tools and manual review techniques to provide comprehensive assessment.</p>
      
      <h3>Runtime Application Self-Protection</h3>
      <p>We implement RASP solutions that protect your mobile application during execution, detecting and preventing attacks in real-time even on compromised devices or hostile environments.</p>
      
      <h3>Secure API Integration</h3>
      <p>We ensure that connections between your mobile app and backend services are properly secured with encryption, certificate pinning, and proper authentication to prevent man-in-the-middle attacks and API abuse.</p>
      
      <h3>Anti-Tampering & Anti-Reverse Engineering</h3>
      <p>We implement protections against app tampering, repackaging, and reverse engineering through code obfuscation, integrity checks, and other hardening techniques to safeguard your intellectual property and prevent unauthorized modifications.</p>
      
      <h2>Our Mobile App Security Approach:</h2>
      
      <h3>Platform-Specific Security</h3>
      <p>We tailor security measures to the unique characteristics and threat models of each mobile platform, addressing the specific vulnerabilities and security features of iOS, Android, and cross-platform frameworks.</p>
      
      <h3>Proactive Protection</h3>
      <p>We focus on implementing security controls early in the development process to prevent vulnerabilities rather than remediate them after deployment, saving time and resources while providing better protection.</p>
      
      <h3>Defense in Depth</h3>
      <p>We implement multiple layers of security controls throughout your mobile application, ensuring that if one security measure is compromised, others remain in place to protect sensitive functionality and data.</p>
      
      <h3>User Experience Balance</h3>
      <p>We design security measures that provide robust protection while maintaining excellent user experience, finding the optimal balance between security and usability for your specific application.</p>
      
      <h3>Benefits of Our Mobile App Security Services:</h3>
      <ul>
        <li><i className="fa fa-arrow-right"></i> Protection of sensitive user data from theft or unauthorized access</li>
        <li><i className="fa fa-arrow-right"></i> Compliance with industry regulations like GDPR, HIPAA, or PCI DSS</li>
        <li><i className="fa fa-arrow-right"></i> Prevention of reputational damage from security breaches</li>
        <li><i className="fa fa-arrow-right"></i> Safeguarding of intellectual property and prevention of app cloning</li>
        <li><i className="fa fa-arrow-right"></i> Increased user trust and confidence in your mobile application</li>
        <li><i className="fa fa-arrow-right"></i> Reduced vulnerability remediation costs through early detection</li>
      </ul>
      
      <p>Partner with iDriven Global Tech to ensure your mobile applications are built and maintained with security as a fundamental component, protecting your users and your business from evolving mobile threats.</p>
    </>
  );

  return (
    <ServicePage 
      title="Mobile App Security" 
      content={serviceContent} 
      imageUrl="/images/cyb_mobapp.png"
    />
  );
};

export default MobileAppSecurity;