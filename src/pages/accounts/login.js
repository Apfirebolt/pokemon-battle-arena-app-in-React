import React, { Component, Fragment } from 'react';
import { FormControl, InputLabel, InputAdornment, Input, Button, Container } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { Alert } from '@material-ui/lab';


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
      errors: {}
    }

    this.onDataSubmit = this.onDataSubmit.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
  }
  onDataSubmit(event) {
    let { userName, userPassword } = this.state;
    event.preventDefault();

    if (this.validateForm()) {
      userName = "";
      userPassword = "";

      this.setState({
        userName,
        userPassword,
      });
      alert("Login Form submitted");
    }
  }

  onChangeData(event) {
    switch (event.target.name) {
      case 'username':
        this.setState({
          userName: event.target.value
        })
        break;
      case 'password':
        this.setState({
          userPassword: event.target.value
        })
        break;
    }
  }

  validateForm() {
    let { userName, userPassword } = this.state;
    let errors = {};
    let formIsValid = true;

    if (!userName) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof userName !== "undefined") {
      if (!userName.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!userPassword) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }


  render() {
    const { classes } = this.props;
    let { userName, userPassword, errors } = this.state;
    return (
      <Fragment>
        <h1>Login Page</h1>
        <Container className={classes.root}>
          <FormControl fullWidth style={{ margin: "1rem" }} >
            <InputLabel htmlFor="standard-adornment-amount">Please Enter Your Username</InputLabel>
            <Input
              id="standard-adornment-username"
              name="username"
              onChange={this.onChangeData}
              value={userName}
            />
            {errors.username &&
            <Alert severity="error">{errors.username}</Alert>
            }
          </FormControl>

          <FormControl fullWidth style={{ margin: "1rem" }}>
            <InputLabel htmlFor="standard-adornment-amount">Please Enter Your Password</InputLabel>
            <Input
              id="standard-adornment-password"
              name="password"
              onChange={this.onChangeData}
              value={userPassword}
              type="password"
            />
            {errors.password &&
            <Alert severity="error">{errors.password}</Alert>
            }
          </FormControl>

          <Button variant="contained" color="primary" style={{ margin: "2rem" }} onClick={this.onDataSubmit}>
            LOGIN
          </Button>
        </Container>
      </Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(LoginPage);
