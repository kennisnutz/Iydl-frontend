import React from 'react';
import './profile.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import logo from '../../assets/logo.png';
import ProfileActivityTable from '../../components/profileActivity/ProfileActivityTable';

const Profile = () => {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <div className="topSection">
          <img src={logo} alt="logo" />
          <span>MY IYDL </span>
          <span className="small">PROFILE</span>
        </div>
        <div className="infoCards">
          <div className="totalStaked">
            <span>My Total Value Staked</span>
            <span className="data">$12k</span>
          </div>
          <div className="unclaimedRewards">
            <span>My unclaimed rewards</span>
            <span className="data">$208.44</span>
          </div>
        </div>
        <div className="statsSection">
          <h2>Your Investments</h2>
          <div className="table">
            <ProfileActivityTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
