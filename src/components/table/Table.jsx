import React from 'react';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss';
import { poolInfo } from '../../static/poolInfo';
import { Link } from 'react-router-dom';

const PoolTable = () => {
  return (
    <TableContainer component={Paper} className="table">
      <div className="search">
        <div className="left">Pools</div>
        <div className="right">
          <input type="text" placeholder="Search by token..." />
          <SearchOutlined />
        </div>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Stake Token </TableCell>
            <TableCell className="tableCell">Reward Token </TableCell>
            <TableCell className="tableCell">Schedule </TableCell>
            <TableCell className="tableCell">Reward Rate </TableCell>
            <TableCell className="tableCell">Type </TableCell>
            <TableCell className="tableCell">Status </TableCell>
            <TableCell className="tableCell">Action </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {poolInfo.map((info) => (
            <TableRow
              key={info.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className="tableRow"
            >
              <TableCell component="th" scope="row">
                {info.stake_token}
              </TableCell>
              <TableCell className="tableCell">{info.reward_token}</TableCell>
              <TableCell className="tableCell">
                <div className="start">Starts: {info.start_date}</div>
                <div className="end">Ends: {info.end_date}</div>
              </TableCell>
              <TableCell className="tableCell">{info.reward_rate} %</TableCell>
              <TableCell className="tableCell">{info.type}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${info.status}`}>{info.status}</span>
              </TableCell>
              <TableCell className="tableCell">
                <button>
                  <Link
                    to={'/discover/2322'}
                    style={{ textDecoration: 'none' }}
                  >
                    {' '}
                    Details
                  </Link>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PoolTable;
