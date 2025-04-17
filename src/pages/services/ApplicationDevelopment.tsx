import React from 'react';
import ServicePage from '../../components/services/ServicePage';

const ApplicationDevelopment: React.FC = () => {
  const serviceContent = (
    <>
      <p>Nava Tech design and develops well-designed and user-friendly applications for both internal and external users. Our experts are capable of creating and developing applications with the best UX and UI design with different architecture patterns and tech stacks. We analyze the business requirements backed up by strong and in-depth market research data before proceeding with the app plan.</p>
      
      <h3>Apps We Develop:</h3>
      
      <p>Web apps: Internal use: We develop web apps for internal use for your organization. We try to include maximum functionalities like HRMS, attendance, project management, and more depending on your business requirements.</p>
      <h3>Web apps: customer-facing</h3>
      <p>We also develop websites, web apps, and mobile applications for end-user purposes. These apps have commercial solutions and features to track and improve business growth a minimum of 6times.</p>
      <h3>Mobile applications</h3>
      
      <p>Our team develops mobile apps for smartphones compatible with both iOS and Android operating systems, tablets, wearables, and IoT features. We develop custom apps with tech integrations such as AR, AI, VR, Voice recognition, and more.</p>
      <h3>Desktop applications</h3>
      <p>Desktop apps similar to mobile apps ensure fast response, data security, network independency, and secured transaction. We have worked on various app projects developed in C++, Python, and .Net.</p> 
      
      <h2>App Architecture Patterns We Design</h2>
      <h3>Tiered architecture</h3>
      <p>The tiered architecture enables easy data to connect, quick development, enhanced security, and independent scalability.</p>
      <h3>Reactive architecture</h3>
      <p>Reactive architecture is more suitable for message-driven apps. This architecture enables quick responsiveness for user interactions. It remains stable irrespective of the network and load conditions.</p>
      <h3>Microservices architecture</h3>
      <p>For microservices business, the app is split into various units based on functionality. Splitting up the app enables continuous deployment, ensures high performance, and automates load management.</p>
      <h3>Our Services:</h3>
      <p>Nava Tech offers a range of services for all types of businesses from startups to an enterprise. Here is the list of services we provide for any type of business.</p>
      <h3>Application consulting(for ISVs, startups)</h3> 
      <p>We do consult for start-ups and our services include market research and analysis, analyzing the competitors, conceptualizing an idea, and deriving a USP. Once we define the USP, the next step is to analyze the needs and goals. Then, our team produces detailed software requirement specifications. The next step is to create the app architecture design with tech stack suggestions and integration planning. We also do cost breakdowns and effort planning that is needed to develop an app.</p>
      <h3>Application development</h3>
      <p>Our team takes care of A-Z in app development. We take care of the app's entire design and development in all stages. We deliver in-depth UX research and user-centric UI design. We do agile development and perform basic testing on the application at optimal cost. We also generate regular reports based on the PI performance to enhance the functionalities of the app.</p>
      <h3>Application modernization & evolution</h3>
      <p>After developing the app, if you feel like upgrading it, we do cloud migration, application reengineering, app code refactoring, implementing advanced features like AI, and AR, and application containerization.</p>
    </>
  );

  return (
    <ServicePage 
      title="Application Development" 
      content={serviceContent} 
      imageUrl="/images/dev.png"
    />
  );
};

export default ApplicationDevelopment;