import React, { useState } from 'react';
import './userInfo.scss';

const UserDetails = () => {
  const walletAddress = '0xB16cA69AEEc51797494cEEfD1c845345a30Fc0fA';
  return (
    <>
      <div className="networkSelect">
        <span>Select your prefered network</span>
        <select name="networks" id="networks">
          <option value="BNB">BNB</option>
          <option value="POLYGON">MATIC</option>
          <option value="GOERLI">GOERLI</option>
        </select>
      </div>
      <div className="walletAddress">
        <span className="title">Account</span>
        <span className="value">{`${walletAddress.slice(
          0,
          4
        )}...${walletAddress.slice(-5, walletAddress.length - 1)}`}</span>
      </div>
      <div className="accountBalance">
        <span className="title">IYDL Balance</span>
        <span className="value">550.000 </span>
      </div>
    </>
  );
};

const UserInfo = () => {
  const [connected, setConnected] = useState(false);
  // const handleConnectWallet = () => setConnected(true);
  return (
    <div className="userInfo">
      <div className="userInfoContainer">
        {connected ? (
          <UserDetails />
        ) : (
          <div className="connectBtn">
            <button onClick={() => setConnected(true)}>Connect</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
