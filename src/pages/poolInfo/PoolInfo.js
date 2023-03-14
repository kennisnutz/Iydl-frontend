import React, { useState } from 'react';
import './poolInfo.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import logo from '../../assets/logo.png';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PoolActivityTable from '../../components/poolActivity/PoolActivityTable';
import { Link } from 'react-router-dom';

const PoolInfo = () => {
  const [form, setForm] = useState('invest');
  const [multiplier, setMultiplier] = useState('1.00');

  return (
    <div className="poolInfo">
      <Sidebar />
      <div className="poolInfoContainer">
        <div className="topSection">
          <div className="redirect">
            <Link to={'/discover'} style={{ textDecoration: 'none' }}>
              <h1>{' < '} Discover</h1>
            </Link>
          </div>
          <div className="subtitle">
            <img className="logo" src={logo} alt="logo" />
            <span className="main">IYDL </span>
            <span className="sub">Invest</span>
          </div>
        </div>
        <div className="infoSection">
          <div className="intro">
            <div className="symbols">
              <span className="stake">ETH</span>
              <span className="seperator">/</span>
              <span className="rew">PKC</span>
            </div>
            <div className="poolType">
              <span>Aquarium</span>
            </div>
          </div>
          <div className="details">
            <p className="title">ETH-PKC Pool</p>
            <div className="detailsContainer">
              <div className="description">
                Stake your ETH-PKC LP tokens to earn PKC
              </div>
              <div className="poolStats">
                <div className="amountStaked">6000 PKC staked</div>
                <div className="remaining">1.2M PKC remaining</div>
                <div className="roi">240% APR</div>
              </div>
            </div>
          </div>
        </div>
        <div className="activitiesContainer">
          <div className="title">
            <span
              onClick={() => setForm('invest')}
              className={`${form === 'invest' && 'active'}`}
            >
              Invest
            </span>
            <span
              onClick={() => setForm('stats')}
              className={`${form === 'stats' && 'active'}`}
            >
              Pool Stats
            </span>
            <span
              onClick={() => setForm('activity')}
              className={`${form === 'activity' && 'active'}`}
            >
              Pool Activity
            </span>
          </div>
          {form === 'invest' ? (
            <div className="invest">
              <div className="left">
                <h2 className="title">Stake</h2>
                <hr />
                <div className="info">
                  <div className="balance">
                    <span>122 PKC</span> <span>wallet Balance</span>
                  </div>
                  <div className="vesting">
                    <span>60 Days</span> <span>Vesting Period</span>
                  </div>
                </div>
                <div className="inputContainer">
                  <div className="inputBox">
                    <input
                      type="number"
                      step={0.01}
                      min={1.0}
                      max={3.0}
                      placeholder={multiplier}
                      onChange={(e) => setMultiplier(e.target.value)}
                    />
                    <div className="button">
                      <span>IYDL</span>
                      <button>max</button>
                    </div>
                  </div>
                  <span>X{multiplier}</span>
                </div>
                <div className="buttonContainer">
                  {multiplier > 1 && <button>Approve IYDL</button>}
                  <button> Approve PKC</button>
                  <button>Stake</button>
                </div>
              </div>
              <div className="right">
                <h2 className="title">Unstake</h2>
                <hr />
                <div className="info">
                  <div className="staked">
                    <span>500 ETH-PKC</span> <span>Staked</span>
                  </div>
                  <div className="rewards">
                    <span>12 PKC</span> <span>Claimable Rewards</span>
                  </div>
                </div>
                <hr />
                <div className="details">
                  <div className="detailsItem">
                    <span>500 ETH-PKC</span> <span>Staked</span>
                  </div>
                  <span className="line"></span>
                  <div className="detailsItem">
                    <span>500 ETH-PKC</span> <span>Staked</span>
                  </div>
                  <span className="line"></span>
                  <div className="detailsItem">
                    <span>500 ETH-PKC</span> <span>Staked</span>
                  </div>
                  <span className="line"></span>
                  <div className="detailsItem">
                    <span>12 PKC</span> <span>Claimable Rewards</span>
                  </div>
                </div>
                <div className="buttonsContainer">
                  <button>Claim</button>
                  <button>Unstake and Claim</button>
                </div>
              </div>
            </div>
          ) : form === 'stats' ? (
            <div className="stats">
              <div className="topSection">
                <div className="overview">
                  <h2>Overview</h2>
                  <hr />
                  <div className="staked">
                    <span>6000 PKC</span>
                    <span>currently staked</span>
                  </div>
                  <div className="detail">
                    <div className="amountLocked">
                      <span>$1.2M</span>
                      <span>Value staked</span>
                    </div>
                    <span className="line"></span>
                    <div className="volume">
                      <span>$11K</span>
                      <span>24hr volume</span>
                    </div>
                  </div>
                </div>
                <div className="rewards">
                  {' '}
                  <h2>Rewards</h2>
                  <hr />
                  <div className="info">
                    <div className="apr">
                      <span>230% </span>
                      <span>APR</span>
                    </div>
                    <div className="funded">
                      <span>500k PKC </span>
                      <span>Funded Rewards</span>
                    </div>
                    <div className="remainder">
                      <div>
                        <span>388K PKC</span>
                        <span>Remaining</span>
                      </div>
                      <span className="line"> </span>
                      <div>
                        <span>112K PKC</span>
                        <span>Distributed</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="schedule">
                  {' '}
                  <h2>Schedule</h2>
                  <hr />
                  <div className="remainingTime">
                    <span>45 Days</span>
                    <span>Remaining duration</span>
                  </div>
                  <div className="fundingSchedule">
                    <Timeline position="alternate">
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <div className="timelineItem">
                            <span> 10/22/22</span>
                            <span>Pool created</span>
                          </div>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <div className="timelineItem">
                            <span> 10/23/22</span>
                            <span>Funding Start</span>
                          </div>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>
                          <div className="timelineItem">
                            <span> 01/22/22</span>
                            <span>Funding ends</span>
                          </div>
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
                  </div>
                </div>
              </div>
              <div className="anlytics">
                <h2>Analitics</h2>
              </div>
            </div>
          ) : (
            <div className="activity">
              <PoolActivityTable />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PoolInfo;
