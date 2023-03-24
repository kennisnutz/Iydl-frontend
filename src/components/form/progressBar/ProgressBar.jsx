import React from 'react';
import './progressBar.scss';
import { Stepper, StepLabel, Step } from '@mui/material';

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="progressBar">
      <Stepper
        style={{ width: '80%' }}
        activeStep={currentStep - 1}
        orientation="horizontal"
      >
        <Step>
          <StepLabel>Pool Type</StepLabel>
        </Step>
        <Step>
          <StepLabel>Tokens</StepLabel>
        </Step>
        <Step>
          <StepLabel>Bonus</StepLabel>
        </Step>
        <Step>
          <StepLabel>Confirm</StepLabel>
        </Step>
      </Stepper>
    </div>
  );
};

export default ProgressBar;
