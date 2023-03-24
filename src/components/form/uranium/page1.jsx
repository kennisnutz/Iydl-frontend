import React from 'react';
import { TextField } from '@mui/material';

import '../aluminium/pages.scss';

const Page1 = ({ formData, setFormData }) => {
  return (
    <div className="page1">
      <div className="stakeTokenBox">
        <div className="title">
          <h3>Stake Token</h3>
          <p className="desc">
            Contract Address of ERC20 Token to be staked in the pool
          </p>
        </div>
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          placeholder="0x..."
          fullWidth
          onChange={(e) => {
            formData.stakeToken = e.target.value;
            setFormData({ ...formData });
          }}
        />
      </div>
      <div className="rewardTokenBox">
        <div className="title">
          <h3>Reward Token</h3>
          <p className="desc">
            Contract Address of ERC20 Token to be issued as rewards for staking
            in the pool
          </p>
        </div>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          color="secondary"
          placeholder="0x..."
          onChange={(e) => {
            formData.rewardToken = e.target.value;
            setFormData({
              ...formData,
            });
          }}
        />
      </div>
    </div>
  );
};

export default Page1;
