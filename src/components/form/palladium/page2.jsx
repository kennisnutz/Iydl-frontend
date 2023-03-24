import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Page2 = ({ formData, setFormData }) => {
  return (
    <div className="page2">
      <div className="header">
        <h3>Vesting</h3>
        <p>Incentivise participants with bonuses</p>
      </div>
      <div className="bar">
        <span>From: {formData.vesting}%</span>
        <Box width={400}>
          <Slider
            size="medium"
            min={0}
            value={formData.vesting}
            aria-label="Small"
            valueLabelDisplay="auto"
            step={1}
            max={100}
            onChange={(e) => {
              formData.vesting = e.target.value;
              setFormData({ ...formData });
            }}
          />
        </Box>
        <span>TO: 100%</span>
      </div>
      <div className="durationBox">
        <div className="durationItem">
          <span className="label">Over a Period of: </span>
          <div className="inputBox">
            <span className="days">{formData.duration}</span>
            <input
              type="number"
              step={1}
              onChange={(e) => {
                formData.duration = e.target.value < 30 ? 30 : e.target.value;
                setFormData({ ...formData });
              }}
            />
            <span>Days</span>
          </div>
        </div>
        <p>
          A user's vested rewards will scale linearly from 0% to a maximum of
          100% over 90 days. For example a user that has been staked in the Pool
          for 45 days will have their rewards 50.00% vested.
        </p>
      </div>
    </div>
  );
};

export default Page2;
