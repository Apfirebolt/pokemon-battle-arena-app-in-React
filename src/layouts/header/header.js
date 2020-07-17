import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);

  const handleClick = (event) => {
    let current_menu = event.target;
    console.log('Current menu is : ', current_menu);
    if(current_menu === 'first_menu') {
      setAnchorEl(event.currentTarget);
    }
    else if(current_menu === 'second_menu') {
      setAnchorE2(event.currentTarget);
    }

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="first_menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="first_menu"
        name="first_menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      <Button aria-controls="second_menu" aria-haspopup="true" onClick={handleClick}>
        Open Another Menu
      </Button>
      <Menu
        id="second_menu"
        name="second_menu"
        anchorEl={anchorE2}
        keepMounted
        open={Boolean(anchorE2)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Pokemon</MenuItem>
        <MenuItem onClick={handleClose}>Team</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}