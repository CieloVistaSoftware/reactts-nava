import React from 'react';
import ServicePage from '../../components/services/ServicePage';

const CustomAppDevelopment = () => {
  const serviceContent = (
    <>
      <p>iDriven Global Tech specializes in creating tailor-made software solutions that perfectly align with your unique business requirements, processes, and goals.</p>
      
      <h2>Our Custom App Development Services:</h2>
      
      <h3>Discovery & Planning</h3>
      <p>We begin with a thorough analysis of your business needs, workflows, and objectives. Our team works closely with your stakeholders to understand pain points, identify opportunities for optimization, and define clear success criteria for your custom application.</p>
      
      <h3>UI/UX Design</h3>
      <p>Our designers create intuitive, engaging interfaces that prioritize user experience while reflecting your brand identity. We develop interactive prototypes to validate concepts early, ensuring the final product meets user expectations and business objectives.</p>
      
      <h3>Full-Stack Development</h3>
      <p>Our expert developers build robust applications using modern technologies and frameworks, following industry best practices for code quality, security, and scalability. Whether you need web, mobile, or desktop applications, we have the expertise to deliver.</p>
      
      <h3>API Development & Integration</h3>
      <p>We create powerful APIs that enable seamless integration with your existing systems, third-party services, and future applications. Our integration approach ensures data flows smoothly across your entire technology ecosystem.</p>
      
      <h3>Quality Assurance</h3>
      <p>Our comprehensive testing methodology includes functional, performance, security, and usability testing to ensure your application works flawlessly under real-world conditions. We implement automated testing where appropriate to maintain quality throughout development.</p>
      
      <h3>Deployment & DevOps</h3>
      <p>We manage the smooth deployment of your application to your preferred infrastructure, implementing CI/CD pipelines, monitoring, and logging to support reliable operations and continuous improvement.</p>
      
      <h3>Post-Launch Support</h3>
      <p>Our relationship continues after launch with responsive support, maintenance, and ongoing enhancements to ensure your custom application evolves with your business needs and technology landscape.</p>
      
      <h2>Technologies We Work With:</h2>
      
      <h3>Frontend Technologies</h3>
      <p>React, Angular, Vue.js, Flutter, React Native, Swift, Kotlin</p>
      
      <h3>Backend Technologies</h3>
      <p>Node.js, Python, Java, .NET, PHP, Ruby on Rails</p>
      
      <h3>Database Technologies</h3>
      <p>SQL Server, PostgreSQL, MySQL, MongoDB, Redis, Firebase</p>
      
      <h3>Cloud Platforms</h3>
      <p>AWS, Azure, Google Cloud, Digital Ocean</p>
      
      <h2>Why Choose iDriven Global for Custom App Development:</h2>
      <ul>
        <li><i className="fa fa-arrow-right"></i> Business-focused approach that prioritizes outcomes over technology</li>
        <li><i className="fa fa-arrow-right"></i> Agile development methodology with regular deliverables and feedback cycles</li>
        <li><i className="fa fa-arrow-right"></i> Deep technical expertise across multiple platforms and technologies</li>
        <li><i className="fa fa-arrow-right"></i> Commitment to quality, security, and performance</li>
        <li><i className="fa fa-arrow-right"></i> Transparent communication and project management</li>
        <li><i className="fa fa-arrow-right"></i> Scalable solutions that grow with your business</li>
      </ul>
      
      <p>Partner with iDriven Global Tech to transform your vision into a powerful, custom application that drives efficiency, enhances user experience, and creates competitive advantage for your business.</p>
    </>
  );

  return (
    <ServicePage 
      title="Custom App Development" 
      content={serviceContent} 
      imageUrl="/images/cust_app.png"
    />
  );
};

export default CustomAppDevelopment;