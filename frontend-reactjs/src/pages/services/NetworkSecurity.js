import React from 'react';
import ServicePage from '../../components/services/ServicePage';

const NetworkSecurity = () => {
  const serviceContent = (
    <>
      <p>iDriven Global Tech provides comprehensive Network Security services to protect your organization's IT infrastructure from unauthorized access, misuse, and cyber threats, ensuring your critical systems and data remain secure and available.</p>
      
      <h2>Our Network Security Services:</h2>
      
      <h3>Network Security Assessment</h3>
      <p>We conduct thorough assessments of your network infrastructure to identify vulnerabilities, security gaps, and potential entry points for attackers. Our comprehensive evaluation includes network architecture review, configuration analysis, and vulnerability scanning to provide a complete picture of your security posture.</p>
      
      <h3>Firewall Implementation & Management</h3>
      <p>Our team designs, implements, and manages robust firewall solutions tailored to your specific security requirements. We configure rule sets that balance security with operational needs, monitor for suspicious activities, and regularly update policies to address evolving threats.</p>
      
      <h3>Intrusion Detection & Prevention</h3>
      <p>We deploy and manage advanced IDS/IPS systems that continuously monitor your network for malicious activities and potential security breaches, providing real-time detection and automated responses to threats before they can cause damage.</p>
      
      <h3>Network Access Control</h3>
      <p>We implement comprehensive access control solutions that ensure only authorized devices and users can connect to your network. Our NAC systems verify compliance with security policies before granting access, limiting potential attack vectors and reducing your security risk.</p>
      
      <h3>VPN & Secure Remote Access</h3>
      <p>We design and deploy secure remote access solutions that allow your workforce to connect safely to company resources from any location. Our VPN implementations include strong encryption, multi-factor authentication, and split tunneling capabilities to balance security and performance.</p>
      
      <h3>Network Segmentation</h3>
      <p>We help you implement effective network segmentation strategies that limit lateral movement within your network, containing potential breaches and protecting critical assets through isolation of different network segments based on security requirements.</p>
      
      <h3>Wireless Network Security</h3>
      <p>Our team secures your wireless networks against unauthorized access and attacks through robust encryption protocols, secure authentication methods, rogue access point detection, and wireless intrusion prevention systems.</p>
      
      <h2>Our Network Security Approach:</h2>
      
      <h3>Defense in Depth</h3>
      <p>We implement multiple layers of security controls throughout your network infrastructure, ensuring that if one security measure fails, others remain in place to protect your systems and data.</p>
      
      <h3>Proactive Monitoring</h3>
      <p>Our solutions include continuous monitoring and analysis of network traffic and security events to detect and respond to threats quickly before they can cause significant damage.</p>
      
      <h3>Regular Security Updates</h3>
      <p>We ensure that all network security devices and systems receive timely updates and patches to address new vulnerabilities and provide protection against the latest threats.</p>
      
      <h3>Compliance Alignment</h3>
      <p>We design network security solutions that help you meet relevant regulatory requirements and industry standards, incorporating compliance considerations into all aspects of your security infrastructure.</p>
      
      <h3>Benefits of Our Network Security Services:</h3>
      <ul>
        <li><i className="fa fa-arrow-right"></i> Protection against unauthorized access and data breaches</li>
        <li><i className="fa fa-arrow-right"></i> Early detection of security incidents and potential threats</li>
        <li><i className="fa fa-arrow-right"></i> Reduced risk of network outages from security incidents</li>
        <li><i className="fa fa-arrow-right"></i> Compliance with industry regulations and standards</li>
        <li><i className="fa fa-arrow-right"></i> Secure foundation for digital transformation initiatives</li>
        <li><i className="fa fa-arrow-right"></i> Support for secure remote and hybrid work models</li>
      </ul>
      
      <p>Partner with iDriven Global Tech to implement robust network security measures that protect your organization from evolving cyber threats while supporting your business objectives and operational requirements.</p>
    </>
  );

  return (
    <ServicePage 
      title="Network Security" 
      content={serviceContent} 
      imageUrl="/images/cyb_netsec.png"
    />
  );
};

export default NetworkSecurity;