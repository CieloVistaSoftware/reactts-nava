import React from 'react';
import ServicePage from '../../components/services/ServicePage';

const EmailSecurity = () => {
  const serviceContent = (
    <>
      <p>Nava Tech provides comprehensive Email Security services to protect your organization from the numerous threats that target this critical communication channel, ensuring your sensitive information remains secure and your business operations uninterrupted.</p>
      
      <h2>Our Email Security Services:</h2>
      
      <h3>Anti-Phishing Protection</h3>
      <p>We implement advanced anti-phishing solutions that detect and block sophisticated phishing attempts before they reach your users. Our systems analyze email content, sender reputation, and attachment behavior to identify malicious emails that might bypass traditional filters.</p>
      
      <h3>Spam Filtering</h3>
      <p>Our multi-layered spam filtering solutions effectively identify and quarantine unwanted messages, reducing inbox clutter and preventing users from interacting with potentially harmful content while maintaining delivery of legitimate messages.</p>
      
      <h3>Email Encryption</h3>
      <p>We provide robust email encryption solutions that protect sensitive information in transit and at rest. Our systems ensure that confidential communications remain private and comply with relevant data protection regulations.</p>
      
      <h3>Malware & Virus Protection</h3>
      <p>Our comprehensive email security systems scan all incoming and outgoing emails and attachments for malware, viruses, and other malicious code, preventing infections that could compromise your network security.</p>
      
      <h3>Data Loss Prevention (DLP)</h3>
      <p>We implement DLP solutions for email that identify and prevent unauthorized transmission of sensitive information, protecting your intellectual property and ensuring compliance with data handling policies.</p>
      
      <h3>Account Takeover Protection</h3>
      <p>Our solutions detect suspicious login attempts and unusual email sending patterns that might indicate account compromise, allowing for rapid response to prevent data breaches and unauthorized access.</p>
      
      <h3>Email Continuity</h3>
      <p>We ensure uninterrupted email access during outages through backup email systems that automatically activate when primary systems fail, allowing your business communications to continue without disruption.</p>
      
      <h3>Security Awareness Training</h3>
      <p>We provide customized training programs that educate your users about email security threats, teaching them to identify suspicious messages and follow secure email practices.</p>
      
      <h2>Our Email Security Approach:</h2>
      
      <h3>Multi-layered Protection</h3>
      <p>We implement multiple security technologies that work together to provide comprehensive protection against diverse email threats, ensuring that if one defense mechanism fails, others remain effective.</p>
      
      <h3>Behavior-Based Analysis</h3>
      <p>Our solutions use advanced algorithms to analyze email behavior patterns, identifying anomalies that might indicate new or emerging threats not yet recognized by traditional signature-based systems.</p>
      
      <h3>Real-time Threat Intelligence</h3>
      <p>We incorporate constantly updated threat intelligence feeds to ensure protection against the latest email attack techniques, malware variants, and phishing campaigns.</p>
      
      <h3>User-Focused Security</h3>
      <p>We recognize that users are both the target of many email attacks and an important line of defense, so we combine technical solutions with education to create a comprehensive security strategy.</p>
      
      <h3>Benefits of Our Email Security Services:</h3>
      <ul>
        <li><i className="fa fa-arrow-right"></i> Protection against business email compromise and financial fraud</li>
        <li><i className="fa fa-arrow-right"></i> Reduced risk of data breaches through email-based attacks</li>
        <li><i className="fa fa-arrow-right"></i> Enhanced productivity through reduction in spam and phishing</li>
        <li><i className="fa fa-arrow-right"></i> Regulatory compliance for email communications</li>
        <li><i className="fa fa-arrow-right"></i> Business continuity through reliable email delivery</li>
        <li><i className="fa fa-arrow-right"></i> Protection of brand reputation by preventing email spoofing</li>
      </ul>
      
      <p>Partner with Nava Tech to implement robust email security measures that protect your organization from the full spectrum of email-based threats, safeguarding your data, finances, and business operations.</p>
    </>
  );

  return (
    <ServicePage 
      title="Email Security" 
      content={serviceContent} 
      imageUrl="/images/cyb_emailsec.png"
    />
  );
};

export default EmailSecurity;