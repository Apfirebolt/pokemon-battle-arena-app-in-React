import React, { Component, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { TextField } from '@material-ui/core';


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


class SearchPokemonPage extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <Fragment>
        <h1>Search Pokemon page</h1>
        <div>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>

              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>

              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
        </div>
        <TextField id="outlined-basic" label="Please Enter Your Username" variant="outlined" />
        <TextField id="outlined-basic" label="Please Enter Your Password" variant="outlined" />
      </Fragment>
    )
  }
}

export default SearchPokemonPage;