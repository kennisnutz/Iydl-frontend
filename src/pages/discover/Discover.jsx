import React from 'react';
import './discover.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/table/Table';

import Navbar from '../../components/navbar/Navbar';

const Discover = () => {
  return (
    <div className="discover">
      <Sidebar />
      <div className="discoverContainer">
        <Navbar />
        <div className="hero">
          <h1>Discover diverse investment opportunities</h1>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Discover;
