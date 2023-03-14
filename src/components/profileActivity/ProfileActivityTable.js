import React from 'react';
import './profileActivityTable.scss';
import { profileActivityInfo } from '../../static/profileActivity';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ProfileActivityTable = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Stake</TableCell>
            <TableCell className="tableCell">Rewards </TableCell>
            <TableCell className="tableCell">Reward Rate</TableCell>
            <TableCell className="tableCell">Status </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {profileActivityInfo.map((info) => (
            <TableRow
              key={info.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className="tableRow"
            >
              <TableCell component="th" scope="row">
                {info.stake}
              </TableCell>
              <TableCell className="tableCell">{info.rewards} </TableCell>
              <TableCell className="tableCell">
                <div className="start"> {info.reward_rate} %</div>
              </TableCell>
              <TableCell className="tableCell">{info.status} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProfileActivityTable;
