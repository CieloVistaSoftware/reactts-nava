import React from 'react';
import ServicePage from '../../components/services/ServicePage';

const ApplicationSecurity: React.FC = () => {
  const serviceContent = (
    <>
      <p>iDriven Global Tech provides robust Application Security services to protect your software applications from threats and vulnerabilities, ensuring that your critical business systems and sensitive data remain secure throughout the application lifecycle.</p>
      
      <h2>Our Application Security Services:</h2>
      
      <h3>Security Requirements Analysis</h3>
      <p>We work with your team to define comprehensive security requirements at the beginning of your project, establishing security standards and compliance guidelines that guide development efforts from day one.</p>
      
      <h3>Secure Code Reviews</h3>
      <p>Our expert security engineers conduct manual and automated code reviews to identify security issues in your application's source code, including potential vulnerabilities, coding errors, and deviations from security best practices.</p>
      
      <h3>Security Architecture Assessment</h3>
      <p>We evaluate your application's architecture to identify security weaknesses and recommend improvements to strengthen your defense against attacks. Our assessments cover authentication methods, authorization controls, data protection strategies, and more.</p>
      
      <h3>Vulnerability Testing</h3>
      <p>Using a combination of automated scanning tools and manual testing techniques, we thoroughly test your applications for security vulnerabilities such as injection flaws, broken authentication, sensitive data exposure, XML external entities, and other OWASP Top 10 risks.</p>
      
      <h3>API Security Testing</h3>
      <p>We assess the security of your application's APIs, identifying vulnerabilities that could be exploited to gain unauthorized access to your application or data. Our testing covers authentication, rate limiting, input validation, and proper error handling.</p>
      
      <h3>DevSecOps Implementation</h3>
      <p>We help you integrate security into your development workflow, implementing automated security testing tools and processes that allow you to catch security issues early without slowing down development.</p>
      
      <h3>Security Incident Response</h3>
      <p>Our team provides rapid response services in the event of a security breach, helping you contain the incident, investigate the cause, and implement measures to prevent similar incidents in the future.</p>
      
      <h2>Our Application Security Approach:</h2>
      
      <h3>Shift-Left Security</h3>
      <p>We emphasize security testing early in the software development lifecycle, when issues are less expensive to fix and have less impact on project timelines.</p>
      
      <h3>Defense-in-Depth</h3>
      <p>We implement multiple layers of security controls throughout your application to ensure that if one layer fails, others remain to protect your data and systems.</p>
      
      <h3>Risk-Based Security</h3>
      <p>We prioritize security efforts based on the potential business impact of different risks, focusing resources where they'll have the greatest effect on your overall security posture.</p>
      
      <h3>Continuous Security</h3>
      <p>We view security as an ongoing process rather than a one-time project, implementing continuous monitoring and assessment to address new threats as they emerge.</p>
      
      <h3>Benefits of Our Application Security Services:</h3>
      <ul>
        <li><i className="fa fa-arrow-right"></i> Protection of sensitive customer data and business information</li>
        <li><i className="fa fa-arrow-right"></i> Reduced risk of security breaches and associated costs</li>
        <li><i className="fa fa-arrow-right"></i> Compliance with industry regulations and standards</li>
        <li><i className="fa fa-arrow-right"></i> Improved customer trust and brand reputation</li>
        <li><i className="fa fa-arrow-right"></i> Early detection and remediation of security vulnerabilities</li>
        <li><i className="fa fa-arrow-right"></i> Secure integration with third-party services and APIs</li>
      </ul>
      
      <p>Partner with iDriven Global Tech to ensure your applications are built and maintained with security as a fundamental component, protecting your business and customers from evolving cyber threats.</p>
    </>
  );

  return (
    <ServicePage 
      title="Application Security" 
      content={serviceContent} 
      imageUrl="/images/cyb_appsec.png"
    />
  );
};

export default ApplicationSecurity;