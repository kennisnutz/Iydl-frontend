import React from 'react';
import './navigation.scss';

const Navigation = ({
  step,
  handleIncrementStep,
  handleDecrementStep,
  handlePoolTypeSelect,
}) => {
  return (
    <div className="navigationContainer">
      <div className="infolink">
        <a href="#"> Read pool creation documentaion</a>
      </div>
      <div className="buttonContainer">
        {step > 1 && <button onClick={handleDecrementStep}>Prev</button>}
        {step === 4 ? (
          <button>Confirm</button>
        ) : (
          <button
            onClick={step === 1 ? handlePoolTypeSelect : handleIncrementStep}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
