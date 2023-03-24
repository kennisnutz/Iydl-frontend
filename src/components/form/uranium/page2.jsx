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
        <span>From: 1X</span>
        <Box width={400}>
          <Slider
            size="medium"
            min={1}
            aria-label="Small"
            valueLabelDisplay="auto"
            step={0.1}
            max={6}
            value={formData.vesting}
            onChange={(e) => {
              formData.vesting = e.target.value;
              setFormData({
                ...formData,
              });
            }}
          />
        </Box>
        <span>TO: {formData.vesting}X</span>
      </div>
      <div className="durationBox">
        <div className="durationItem">
          <span className="label">Over a Period of: </span>
          <div className="inputBox">
            <span className="days">{formData.duration}</span>
            <input
              type="number"
              value={formData.duration}
              onChange={(e) => {
                formData.duration = e.target.value;
                setFormData({
                  ...formData,
                });
              }}
            />
            <span>Days</span>
          </div>
        </div>
        <p>
          A user's reward multiplier will scale linearly from 1.0x to a maximum
          of 3.0x over 90 days. For example a user that has been staked in the
          Pool for 45 days will have a 3.00x multiplier.
        </p>
      </div>
    </div>
  );
};

export default Page2;
