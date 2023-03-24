import React from 'react';
import './selectPool.scss';
import CheckIcon from '@mui/icons-material/Check';

const SelectPool = ({ handlePoolTypeSelect }) => {
  return (
    <>
      <div className="radioButtons">
        <label className="customRadio">
          <input type="radio" name="pools" value={'aluminum'} />
          <span className="radioBtn">
            <CheckIcon className="icon" />
            <div className="poolInfo">
              <h3>Aluminum</h3>
              <p className="poolDescription">
                Aluminium only allow users to apply their $IYDL multipliers at
                staking time. This makes rewards more predictable since a
                staker's rewards are not affected by other stakers unstaking.
              </p>
            </div>
          </span>
        </label>
        <label className="customRadio">
          <input type="radio" name="pools" value={'uranium'} />
          <span className="radioBtn">
            <CheckIcon className="icon" />
            <div className="poolInfo">
              <h3>Uranium</h3>
              <p className="poolDescription">
                Uranium farms allow users to apply $IYDL as a reward booster
                when unstaking in order to increase their earned rewards from
                the pool. This makes the pool competitive because stakers
                rewards are affected by unstaking activity.
              </p>
            </div>
          </span>
        </label>
        <label className="customRadio">
          <input type="radio" name="pools" value={'palladium'} />
          <span className="radioBtn">
            <CheckIcon className="icon" />
            <div className="poolInfo">
              <h3>Palladium</h3>
              <p className="poolDescription">
                Palladium farms are like Aluminium but instead of staking
                ERC20s, users will stake NFTs (ERC721) to earns rewards
              </p>
            </div>
          </span>
        </label>
      </div>
      {/* <div className="navigation">
        <button className="next" onClick={handlePoolTypeSelect}>
          NEXT
        </button>
      </div> */}
    </>
  );
};

export default SelectPool;
