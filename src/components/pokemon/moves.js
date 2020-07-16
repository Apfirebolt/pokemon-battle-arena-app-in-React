import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: "mintcream",
    fontSize: 18,
    margin: "auto 1rem",
    textAlign: "center"
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table_container: {
    width: "80%",
    margin: "1rem auto"
  },
});

const Moves = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <h1>Move List</h1>
      <TableContainer className={classes.table_container} component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Index Number</StyledTableCell>
              <StyledTableCell>Pokemon Move Name</StyledTableCell>
              <StyledTableCell align="right">Pokemon Move URL</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.moves.map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center">{index+1}</StyledTableCell>
                <StyledTableCell align="center">{item.move.name}</StyledTableCell>
                <StyledTableCell align="center">
                  <Link href={item.move.url}>
                    {item.move.url}
                  </Link></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  )
}

export default Moves;
