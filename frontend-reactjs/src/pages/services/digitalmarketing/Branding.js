import React from 'react';
import ServicePage from '../../components/services/ServicePage';
import brandingData from './branding-data.json';

const Branding = () => {
  const serviceContent = (
    <>
      <h1>{brandingData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: brandingData.branding }} />
    </>
  );

  return (
    <ServicePage 
      title="Digital Marketing Branding" 
      content={serviceContent} 
      imageUrl="/images/dig_brand.png"
    />
  );
};

export default Branding;