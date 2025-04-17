import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, backgroundImage }) => {
  return (
    <section className="page-header">
      <div className="page-header__bg" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="container">
        <div className="page-header__inner">
          <h2>{title}</h2>
          <ul className="thm-breadcrumb list-unstyled">
            <li><Link to="/">Home</Link></li>
            <li><span>/</span></li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;