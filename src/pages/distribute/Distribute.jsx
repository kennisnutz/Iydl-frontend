import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';

import logo from '../../assets/logo.png';
import './distribute.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import { Navigation } from '../../components/form';
import CreatorPoolsInfoTable from '../../components/creatorPoolsInfo/CreatorPoolsInfoTable';

import {
  AluminiumForms,
  PalladiumForms,
  UraniumForms,
  SelectPool,
  ProgressBar,
} from '../../components/form';

const Distribute = () => {
  const [openModal, setOpenModal] = useState(false);
  const [poolType, setPoolType] = useState('select');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    stakeToken: '',
    rewardToken: '',
    vesting: 0,
    duration: 90,
  });

  const handleCloseModal = () => {
    setCurrentStep(1);
    setPoolType('select');
    setOpenModal(false);
  };
  const handlePoolTypeSelect = () => {
    const poolInputs = document.getElementsByName('pools');
    let checkedPool;
    for (let i = 0; i < poolInputs.length; i++) {
      if (poolInputs[i].checked) {
        checkedPool = poolInputs[i].value;
      }
    }
    setPoolType(checkedPool);
    setCurrentStep(currentStep + 1);
  };

  const handleIncrementStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleDecrementStep = () => {
    if (currentStep === 2) {
      setPoolType('select');
      setCurrentStep(currentStep - 1);
    }
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="distribute">
      <Sidebar />
      <div className="distributeContainer">
        <div className="topSection">
          <img src={logo} alt="logo" />
          <span>MY IYDL </span>
          <span className="small">PROFILE</span>
        </div>

        <div className="infoCards">
          <div className="totalStaked">
            <span>Total Value Staked in your farms</span>
            <span className="data">$3k</span>
          </div>
          <div className="unclaimedRewards">
            <span>Total unclaimed rewards</span>
            <span className="data">$78.29</span>
          </div>
        </div>

        <div className="statsSection">
          <h2>YOUR FARMS</h2>
          <div className="table">
            <CreatorPoolsInfoTable />
          </div>
        </div>

        <div className="button">
          <button onClick={() => setOpenModal(true)}>Create Farm</button>
        </div>
        {openModal && (
          <div className="modal">
            <div className="modalTop">
              <div className="titleSection">
                <h2>create </h2>
                <button className="closeBtn" onClick={handleCloseModal}>
                  X
                </button>
              </div>
              <ProgressBar currentStep={currentStep} />
            </div>
            {poolType === 'palladium' ? (
              <PalladiumForms
                currentStep={currentStep}
                formData={formData}
                setFormData={setFormData}
              />
            ) : poolType === 'aluminum' ? (
              <AluminiumForms
                currentStep={currentStep}
                formData={formData}
                setFormData={setFormData}
              />
            ) : poolType === 'uranium' ? (
              <UraniumForms
                currentStep={currentStep}
                formData={formData}
                setFormData={setFormData}
              />
            ) : (
              <SelectPool handlePoolTypeSelect={handlePoolTypeSelect} />
            )}
            <Navigation
              step={currentStep}
              handleDecrementStep={handleDecrementStep}
              handleIncrementStep={handleIncrementStep}
              handlePoolTypeSelect={handlePoolTypeSelect}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Distribute;
