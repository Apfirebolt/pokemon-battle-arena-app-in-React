import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@material-ui/core';

const useStyles = makeStyles({
  table_container: {
    width: "80%",
    margin: "2rem auto"
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: "indianred",
    fontSize: 18,
    margin: "auto 1rem",
    textAlign: "center"
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const Abilities = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <h1>Pokemon Stats</h1>
      <TableContainer className={classes.table_container} component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Index Number</StyledTableCell>
              <StyledTableCell>Pokemon Ability Name</StyledTableCell>
              <StyledTableCell>Pokemon Ability URL</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.abilities.map((item, index) => (
              <TableRow key={index}>
                <StyledTableCell align="center">{index+1}</StyledTableCell>
                <StyledTableCell align="center">{item.ability.name.toUpperCase()}</StyledTableCell>
                <StyledTableCell align="center">
                  <Link href={item.ability.url}>
                    {item.ability.url}
                  </Link>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  )
}


export default Abilities;

