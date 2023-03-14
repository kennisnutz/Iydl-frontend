import React from 'react';
import './widget.scss';
import KeyboardControlKeyOutlinedIcon from '@mui/icons-material/KeyboardControlKeyOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
const Widget = ({ type }) => {
  let data;

  switch (type) {
    case 'tvl':
      data = {
        title: 'TOTAL VALUE STAKED',
        isMoney: true,
        value: '13.8 million',
        link: 'See charts',
        icon: (
          <AccountBalanceOutlinedIcon
            className="icon"
            style={{
              backgroundColor: 'rgba(0, 128, 00, 0.2)',
              color: 'green',
            }}
          />
        ),
        percentageChange: 5,
      };
      break;

    case 'pools':
      data = {
        title: 'NUMBER OF POOLS',
        isMoney: false,
        value: 198,
        link: 'See all pools',
        icon: (
          <AgricultureOutlinedIcon
            className="icon"
            style={{
              backgroundColor: 'rgba(128, 160, 32, 0.2)',
              color: 'goldenrod',
            }}
          />
        ),
        percentageChange: 35,
      };
      break;
    case 'holders':
      data = {
        title: 'TOTAL FUNDED REWARDS',
        isMoney: true,
        link: 'See details',
        value: '802K',
        icon: (
          <Diversity3OutlinedIcon
            className="icon"
            style={{
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
              color: 'purple',
            }}
          />
        ),
        percentageChange: 19,
      };
      break;
    case 'price':
      data = {
        title: 'CURRENT $IYDL PRICE',
        isMoney: true,
        value: 1.03,
        link: 'See price charts',
        icon: (
          <PriceChangeOutlinedIcon
            className="icon"
            style={{
              backgroundColor: 'rgba(255, 0, 00, 0.2)',
              color: 'crimson',
            }}
          />
        ),
        percentageChange: -5,
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && '$'}
          {data.value}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div
          className={`percentage  ${
            data.percentageChange > 0 ? 'positive' : 'negative'
          }`}
        >
          {data.percentageChange > 0 ? (
            <KeyboardControlKeyOutlinedIcon />
          ) : (
            <KeyboardArrowDownOutlinedIcon />
          )}
          {data.percentageChange}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
