import React, { Component, Fragment } from 'react';
import { FormControl, InputLabel, InputAdornment, Input, InputProps, Container,
  Button, FormHelperText } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  root: {
    backgroundColor: "#FFF",
    padding: "1rem",
    border: "1px solid #CCC",
    borderRadius: '10px',
    width: '70%',
    marginBottom: "1rem"
  }
});


class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userEmail: '',
      userPassword: '',
      userConfirmPassword: '',
      errors: {
        userNameError: [],
        userEmailError: [],
        userPasswordError: [],
        userConfirmPasswordError: []
      }
    }

    this.onDataSubmit = this.onDataSubmit.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }

  onDataSubmit() {
    const { userName, userEmail, userPassword, userConfirmPassword, errors } = this.state;

    console.log('Submit data function called..', userName, userEmail, userPassword, errors);
  }

  handleUserNameChange(event) {
    const { errors, userPassword } = this.state;
    const dataRole = event.target.getAttribute("data-role");
    const currentValue = event.target.value;
    switch (dataRole) {
      case 'username':
        if(!currentValue) {
          errors.userNameError.push("User Name is a required field, cannot be left blank!");
        }
        else {
          errors.userNameError = [];
        }
        this.setState({
          userName: currentValue
        })
        break;
      case 'email':
        if(!currentValue) {
          errors.userEmailError.push("Email is a required field, cannot leave it blank!");
        }
        else {
          errors.userEmailError = [];
        }
        this.setState({
          userEmail: currentValue
        })
        break;
      case 'password':
        if(!currentValue) {
          errors.userPasswordError.push('Password is a required field!');
        }
        else {
          errors.userPasswordError = [];
        }
        this.setState({
          userPassword: currentValue
        })
        break;
      case 'confirm_password':
        if(!currentValue) {
          errors.userConfirmPasswordError.push('Please Confirm your password!');
        }
        else {
          errors.userConfirmPasswordError = [];
        }
        this.setState({
          userConfirmPassword: currentValue
        })
    }
  }

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <Fragment>
        <h1>Register Page</h1>
        <Container className={classes.root}>
          <FormControl fullWidth style={{ margin: "1rem" }}>
            <InputLabel htmlFor="standard-adornment-amount">Please Enter Your Username</InputLabel>

            <Input
              id="standard-adornment-amount"
              aria-describedby="username-helper-text"
              onChange={(event) => {this.handleUserNameChange(event)}}
              inputProps={{
                'data-role':'username'
              }}
            />
            {errors.userNameError.length ? errors.userNameError.map((item, index) => {
              return (
                <p className="custom_para" key={index}>{item}</p>
              )
            })
            :null}
          </FormControl>

          <FormControl fullWidth style={{ margin: "1rem" }}>
            <InputLabel htmlFor="standard-adornment-amount">Please Enter Your Email</InputLabel>
            <Input
              id="standard-adornment-amount"
              onChange={(event) => {this.handleUserNameChange(event)}}
              inputProps={{
                'data-role':'email'
              }}
            />

            {errors.userEmailError.length ? errors.userEmailError.map((item, index) => {
              return (
                <p className="custom_para" key={index}>{item}</p>
              )
            }):null}

          </FormControl>

          <FormControl fullWidth style={{ margin: "1rem" }}>
            <InputLabel htmlFor="standard-adornment-amount">Please Enter Your Password</InputLabel>
            <Input
              id="standard-adornment-amount"
              onChange={(event) => {this.handleUserNameChange(event)}}
              type="password"
              inputProps={{
                'data-role':'password'
              }}
            />
            {errors.userPasswordError.length ? errors.userPasswordError.map((item, index) => {
              return (
                <p className="custom_para" key={index}>{item}</p>
              )
            }):null}
          </FormControl>

          <FormControl fullWidth style={{ margin: "1rem" }}>
            <InputLabel htmlFor="standard-adornment-amount">Please Confirm Your Password</InputLabel>
            <Input
              id="standard-adornment-amount"
              onChange={(event) => {this.handleUserNameChange(event)}}
              type="password"
              inputProps={{
                'data-role':'confirm_password'
              }}
            />
            {errors.userConfirmPasswordError.length ? errors.userConfirmPasswordError.map((item, index) => {
              return (
                <p className="custom_para" key={index}>{item}</p>
              )
            }):null}
          </FormControl>
          <Button variant="contained" color="primary" style={{ margin: "2rem" }} onClick={this.onDataSubmit}>
            REGISTER
          </Button>
        </Container>
      </Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(RegisterPage);