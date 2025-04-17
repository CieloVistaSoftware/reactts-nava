import React from 'react';
import ServicePage from '../../components/services/ServicePage';

const ApplicationIntegration = () => {
  const serviceContent = (
    <>
      <p>After developing an application, the next important step is to integrate the supporting interfaces and applications. Nava Tech offers a wide range of application integration into multiple APIs. Our team carefully chooses the APIs that are suitable for your application depending on the build. We follow a process for integration, which includes a custom build and testing.</p>

      <h2>Application Integration Services We Offer:</h2>
      <h3>Integration consulting</h3>
      <p>Our consultants assess the existing IT infrastructure, limitations, and needs. They then prioritize the integration requirements and choose the integration model. Then choose the fitting technology stack and design a tailored integration architecture and secure infrastructure. Nava Tech takes care of the complete full-cycle integration implementation and we never fail to keep you posted.</p>
      <p>Our team covers the below integration consulting and planning for mobile apps:</p>
      <p>Migration, re-engineering, and re-architecting of the to-be-integrated applications and systems (if required).</p>
      <p>Integrating various solutions and testing at different levels after implementation</p>
      <p>Exclusive support after launching the app for identifying any bugs or fixing the issues at the initial stage.</p>
      <p>Continuous evolution and management of the integrated ecosystem on demand.</p>

      <h3>What We Integrate:</h3>
      <ul>
        <li><i className="fa fa-arrow-right"></i>When it comes to mobile applications, we integrate different solutions for various purposes. Here is the list of some of such solutions we integrate.</li>
        <li><i className="fa fa-arrow-right"></i>ERP (enterprise resource planning) – A complete solution to streamline and automate your project management.</li>
        <li><i className="fa fa-arrow-right"></i>SCM (supply chain management) tools – Automation tools for taking care of your supply chain management processes.</li>
        <li><i className="fa fa-arrow-right"></i>Vendor portals – Manage all your vendors with a click.</li>
        <li><i className="fa fa-arrow-right"></i>CRM – Customer Relation Management solution to track, manage and access all the business leads and prospects.</li>
        <li><i className="fa fa-arrow-right"></i>E-commerce solutions – Exclusive e-commerce solutions for inventory management, order management, and more.</li>
        <li><i className="fa fa-arrow-right"></i>Document management software – Take care of all the documents in one place.</li>
        <li><i className="fa fa-arrow-right"></i>Workflow automation apps –Automate the process workflows based on the complexity.</li>
        <li><i className="fa fa-arrow-right"></i>Intranets – Connect every internal data sharing and communication through intranets.</li>
        <li><i className="fa fa-arrow-right"></i>Industry-specific software (such as electronic health records (EHR), manufacturing execution systems), and more.</li>
        <li><i className="fa fa-arrow-right"></i>Legacy applications.</li>
        <li><i className="fa fa-arrow-right"></i>In-house software.</li>
        <li><i className="fa fa-arrow-right"></i>Open-source software.</li>
        <li><i className="fa fa-arrow-right"></i>COTS (commercial off-the-shelf) software.</li>
        <li><i className="fa fa-arrow-right"></i>SaaS solutions.</li>
        <li><i className="fa fa-arrow-right"></i>Third-party services (payment, shipping, social networks).</li>
        <li><i className="fa fa-arrow-right"></i>Traditional transaction systems.</li>
        <li><i className="fa fa-arrow-right"></i>Modern solutions are based on IoT, machine learning (ML), artificial intelligence (AI), and big data technologies.</li>
      </ul>
      
      <h3>Our Approach:</h3>
      <p>SOA-based (service-oriented architecture) integration.</p>
      <p>We can transform your system into a set of loosely coupled, easily scalable, and reusable components, such as web services or microservices that communicate:</p>
      <p>Through middleware components (an enterprise service bus, message broker) that introduce an additional abstraction layer to take full responsibility for message/request transmitting, transformation, and routing.</p>
      <p>Shared database – where multiple applications access data from a single data store.</p>
      <p>RPA (robotic process automation) – where software imitates human interactions with computer systems (typing, clicking, and copy-pasting data from one application to another).</p>
    </>
  );

  return (
    <ServicePage 
      title="Application Integration" 
      content={serviceContent} 
      imageUrl="/images/int.png"
    />
  );
};

export default ApplicationIntegration;