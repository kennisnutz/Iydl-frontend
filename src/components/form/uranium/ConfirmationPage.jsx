import React from 'react';

const ConfirmationPage = () => {
  return (
    <div className="confirmation">
      <div className="title">
        <h3>Confirm Deployment Details</h3>
        <p>
          This action is not reversible. Once this form is submited, there is no
          way of changing the information
        </p>
      </div>
      <div className="type">
        <span>Type: </span>
        <span>Uranium</span>
      </div>
      <div className="tokensInfo">
        <div className="tokensInfoItem">
          <h4>Stake Token :</h4>
          <p>SYS</p>
          <span>(0x43...4a56)</span>
        </div>
        <div className="tokensInfoItem">
          <h4>Reward Token :</h4>
          <p>PKC</p>
          <span>(0x43...4a56)</span>
        </div>
      </div>
      <div className="vesting">
        <h4>Time Multiplier</h4>
        <div className="vestingInfo">
          <div className="start">
            <div className="item">
              <span>Day</span>
              <span>1</span>
            </div>
            <div className="item">
              <span>Day</span>
              <span>90</span>
            </div>
          </div>
          <div className="arrow">
            <span>1X</span>{' '}
            <span>
              {' '}
              ---------
              <i class="arrowHead right"></i>
            </span>{' '}
            <span>3X</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
