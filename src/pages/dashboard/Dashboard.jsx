import React from 'react';
import './dashboard.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Table from '../../components/table/Table';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContatiner">
        <Navbar />
        <div className="widgetContainer">
          <Widget type="tvl" />
          <Widget type="pools" />
          <Widget type="holders" />
          <Widget type="price" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Pool Info</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
