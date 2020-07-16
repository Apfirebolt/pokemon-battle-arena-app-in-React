import React, { Component, Fragment } from 'react';
import { FormControl, InputLabel, InputAdornment, Input, Button, Container } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  root: {
    backgroundColor: "#FFF",
    padding: "1rem",
    border: "1px solid #CCC",
    borderRadius: '10px',
    width: '70%'
  }
});

class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      userPassword: '',
    }

    this.onDataSubmit = this.onDataSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  onDataSubmit() {
    console.log('Submit data function called..');
  }

  handleInputChange(event) {
    const dataRole = event.target.getAttribute("data-role");
    const { userName, userPassword } = this.state;
    const currentValue = event.target.value;
    switch (dataRole) {
      case 'username':
        this.setState({
          userName: currentValue
        })
        break;
      case 'password':
        this.setState({
          userPassword: currentValue
        })
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <h1>Login Page</h1>
        <Container className={classes.root}>
          <FormControl fullWidth style={{ margin: "1rem" }} >
            <InputLabel htmlFor="standard-adornment-amount">Please Enter Your Username</InputLabel>
            <Input
              id="standard-adornment-username"
              onChange={(event) => {this.handleInputChange(event)}}
              inputProps={{
                'data-role':'username'
              }}
            />
          </FormControl>

          <FormControl fullWidth style={{ margin: "1rem" }}>
            <InputLabel htmlFor="standard-adornment-amount">Please Enter Your Password</InputLabel>
            <Input
              id="standard-adornment-password"
              onChange={(event) => {this.handleInputChange(event)}}
              inputProps={{
                'data-role':'password'
              }}
            />
          </FormControl>

          <Button variant="contained" color="primary" style={{ margin: "2rem" }} onClick={this.onDataSubmit}>
            LOGIN
          </Button>

          <p className="custom_para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aute</p>
        </Container>
      </Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(LoginPage);
