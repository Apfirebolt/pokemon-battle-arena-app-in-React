import React, { Component, Fragment } from 'react';
import { FormControl, InputLabel, InputAdornment, Input, InputProps, Container,
  Button, FormHelperText } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
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
      errors: {}
    }

    this.onDataSubmit = this.onDataSubmit.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
  }

  onDataSubmit(event) {
    let { userName, userEmail, userPassword, userConfirmPassword, errors } = this.state;
    event.preventDefault();

    if (this.validateForm()) {
      userName = "";
      userEmail = "";
      userPassword = "";
      userConfirmPassword = "";

      this.setState({
        userName,
        userEmail,
        userPassword,
        userConfirmPassword
      });
      alert("Form submitted");
    }
  }

  onChangeData(event) {
    switch (event.target.name) {
      case 'username':
        this.setState({
          userName: event.target.value
        })
        break;
      case 'email':
        this.setState({
          userEmail: event.target.value
        })
        break;
      case 'password':
        this.setState({
          userPassword: event.target.value
        })
        break;
      case 'confirm_password':
        this.setState({
          userConfirmPassword: event.target.value
        })
    }
  }

  validateForm() {
    let { userName, userEmail, userPassword, userConfirmPassword } = this.state;
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

    if (!userEmail) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof userEmail !== "undefined") {
      //regular expression for email validation
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(userEmail)) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!userPassword) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (!userConfirmPassword) {
      formIsValid = false;
      errors["confirm_password"] = "*Please confirm your password.";
    }

    if(typeof userConfirmPassword !== "undefined" && userConfirmPassword !== userPassword) {
      formIsValid = false;
      errors["confirm_password"] = "*Passwords you entered did not match.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    const { classes } = this.props;
    const { errors, userEmail, userName, userPassword, userConfirmPassword } = this.state;
    return (
      <Fragment>
        <h1>Register Page</h1>
        <Container className={classes.root}>
          <FormControl fullWidth style={{ margin: "1rem" }}>
            <InputLabel htmlFor="standard-adornment-amount">Please Enter Your Username</InputLabel>

            <Input
              id="username"
              aria-describedby="username-helper-text"
              name="username"
              onChange={this.onChangeData}
              value={userName}
            />
            {errors.username &&
            <Alert severity="error">{errors.username}</Alert>
            }
          </FormControl>

          <FormControl fullWidth style={{ margin: "1rem" }}>
            <InputLabel htmlFor="standard-adornment-amount">Please Enter Your Email</InputLabel>
            <Input
              id="email"
              name="email"
              onChange={this.onChangeData}
              value={userEmail}
            />
            {errors.email &&
            <Alert severity="error">{errors.email}</Alert>
            }
          </FormControl>

          <FormControl fullWidth style={{ margin: "1rem" }}>
            <InputLabel htmlFor="standard-adornment-amount">Please Enter Your Password</InputLabel>
            <Input
              id="password"
              onChange={this.onChangeData}
              name="password"
              type="password"
              value={userPassword}
            />
            {errors.password &&
            <Alert severity="error">{errors.password}</Alert>
            }

          </FormControl>

          <FormControl fullWidth style={{ margin: "1rem" }}>
            <InputLabel htmlFor="standard-adornment-amount">Please Confirm Your Password</InputLabel>
            <Input
              id="confirm_password"
              name="confirm_password"
              onChange={this.onChangeData}
              type="password"
              value={userConfirmPassword}
            />
            {errors.confirm_password &&
            <Alert severity="error">{errors.confirm_password}</Alert>
            }
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