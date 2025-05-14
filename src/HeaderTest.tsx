import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';

const HeaderTest: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mt-5 pt-5">
          <h2>Header Test Page</h2>
          <p>This page is used to test and style the Header component in isolation.</p>
        </div>
      </div>
    </Router>
  );
};

export default HeaderTest;
