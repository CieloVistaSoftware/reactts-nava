import React from 'react';
import ServicePage from '../../components/services/ServicePage';

const ApplicationTesting = () => {
  const serviceContent = (
    <>
      <p>At iDriven Global Tech, we provide comprehensive application testing services to ensure your software meets the highest standards of quality, security, and performance before reaching your users.</p>
      
      <h2>Our Application Testing Services:</h2>
      
      <h3>Functional Testing</h3>
      <p>We verify that your application functions according to requirements and specifications, testing individual features, workflows, and end-to-end processes to ensure they work as expected across all supported environments.</p>
      
      <h3>Performance Testing</h3>
      <p>Our team evaluates your application's speed, responsiveness, and stability under various load conditions. We identify performance bottlenecks and provide recommendations for optimization to ensure optimal user experience even during peak usage.</p>
      
      <h3>Security Testing</h3>
      <p>We conduct thorough security assessments to identify vulnerabilities in your application, including penetration testing, code analysis, and compliance verification to protect against potential threats and data breaches.</p>
      
      <h3>Compatibility Testing</h3>
      <p>We test your application across different browsers, devices, operating systems, and network conditions to ensure consistent functionality and appearance for all users regardless of their technology setup.</p>
      
      <h3>Usability Testing</h3>
      <p>Our experts evaluate your application from the end-user perspective, assessing navigation flow, interface design, and overall user experience to ensure intuitive operation and high user satisfaction.</p>
      
      <h3>Regression Testing</h3>
      <p>We verify that new code changes don't adversely affect existing functionality, using automated and manual testing approaches to quickly validate application stability after updates.</p>
      
      <h3>Integration Testing</h3>
      <p>Our team tests how different components of your application work together, as well as how your application interacts with external systems, APIs, and services to ensure seamless data flow and functionality.</p>
      
      <h2>Our Testing Approach:</h2>
      
      <h3>Risk-Based Testing</h3>
      <p>We focus testing efforts on the most critical aspects of your application, prioritizing areas with the highest business impact and technical risk to maximize testing efficiency.</p>
      
      <h3>Shift-Left Methodology</h3>
      <p>We integrate testing early in the development lifecycle to catch issues sooner when they're less expensive to fix, accelerating delivery while maintaining quality.</p>
      
      <h3>Automated Testing</h3>
      <p>We implement robust test automation frameworks for repetitive tests, enabling faster feedback, consistent results, and more comprehensive test coverage throughout the development process.</p>
      
      <h3>Continuous Testing</h3>
      <p>Our testing integrates with CI/CD pipelines to provide immediate feedback on code changes, supporting agile development practices and enabling rapid, quality-focused delivery.</p>
      
      <h3>Benefits of Our Testing Services:</h3>
      <ul>
        <li><i className="fa fa-arrow-right"></i> Reduced production defects and post-release issues</li>
        <li><i className="fa fa-arrow-right"></i> Enhanced user satisfaction and retention</li>
        <li><i className="fa fa-arrow-right"></i> Lower maintenance costs through early defect detection</li>
        <li><i className="fa fa-arrow-right"></i> Improved time-to-market through efficient testing processes</li>
        <li><i className="fa fa-arrow-right"></i> Comprehensive test documentation and reporting</li>
        <li><i className="fa fa-arrow-right"></i> Protection against security vulnerabilities and data breaches</li>
      </ul>
      
      <p>Partner with iDriven Global Tech to ensure your applications deliver exceptional quality, performance, and user experience, building trust with your customers and strengthening your brand reputation.</p>
    </>
  );

  return (
    <ServicePage 
      title="Application Testing" 
      content={serviceContent} 
      imageUrl="/images/app_test.png"
    />
  );
};

export default ApplicationTesting;