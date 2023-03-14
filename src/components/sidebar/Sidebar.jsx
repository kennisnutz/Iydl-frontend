import React from 'react';
import './sidebar.scss';
import UserInfo from '../userInfo/UserInfo';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ExploreIcon from '@mui/icons-material/Explore';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsIcon from '@mui/icons-material/Settings';
import Person4Icon from '@mui/icons-material/Person4';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          {' '}
          <span className="logo">IYDL</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Welcome</p>
          <li>
            <Link to={'/dashboard'} style={{ textDecoration: 'none' }}>
              <DashboardCustomizeIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>

          <p className="title">Actions</p>
          <li>
            <Link to={'/discover'} style={{ textDecoration: 'none' }}>
              <ExploreIcon className="icon" />
              <span>Discover</span>
            </Link>
          </li>
          <li>
            <Link to={'/distribute'} style={{ textDecoration: 'none' }}>
              <AddBoxIcon className="icon" />
              <span>Distribute</span>
            </Link>
          </li>
          <li>
            <Link to={'/profile'} style={{ textDecoration: 'none' }}>
              <Person4Icon className="icon" />
              <span>Profile</span>
            </Link>
          </li>

          <p className="title">Customize</p>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <ContactSupportIcon className="icon" />
            <span>Support</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>

      <UserInfo />
    </div>
  );
};

export default Sidebar;
