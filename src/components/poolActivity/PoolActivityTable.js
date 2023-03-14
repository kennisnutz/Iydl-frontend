import React from 'react';
import './poolActivityTable.scss';
import { poolActivityInfo } from '../../static/poolActivity';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PoolActivityTable = () => {
  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + '...' + str.slice(-3, -1);
    } else {
      return str;
    }
  };
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Action</TableCell>
            <TableCell className="tableCell">Amount </TableCell>
            <TableCell className="tableCell">Earnings</TableCell>
            <TableCell className="tableCell">$IYDL Spent </TableCell>
            <TableCell className="tableCell">Account </TableCell>
            <TableCell className="tableCell">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {poolActivityInfo.map((info) => (
            <TableRow
              key={info.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className="tableRow"
            >
              <TableCell component="th" scope="row">
                {info.action}
              </TableCell>
              <TableCell className="tableCell">{info.amount} ETH-PKC</TableCell>
              <TableCell className="tableCell">
                <div className="start"> {info.earnings} PKC</div>
              </TableCell>
              <TableCell className="tableCell">
                {info.iydl_spent} IYDL
              </TableCell>
              <TableCell className="tableCell">
                {truncateString(info.account, 4)}
              </TableCell>

              <TableCell className="tableCell">{info.time} Days ago</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PoolActivityTable;
