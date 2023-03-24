import React from 'react';

const ConfirmationPage = ({ formData }) => {
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
        <span>Palladium</span>
      </div>
      <div className="tokensInfo">
        <div className="tokensInfoItem">
          <h4>Stake Token :</h4>
          <p>SYS</p>
          <span>({formData.stakeToken})</span>
        </div>
        <div className="tokensInfoItem">
          <h4>Reward Token :</h4>
          <p>PKC</p>
          <span>({formData.rewardToken})</span>
        </div>
      </div>
      <div className="vesting">
        <h4>Vesting</h4>
        <div className="vestingInfo">
          <div className="start">
            <div className="item">
              <span>Day</span>
              <span>1</span>
            </div>
            <div className="item">
              <span>Day</span>
              <span>{formData.duration}</span>
            </div>
          </div>
          <div className="arrow">
            <span>{formData.vesting}%</span>{' '}
            <span>
              {' '}
              ---------
              <i class="arrowHead right"></i>
            </span>{' '}
            <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
