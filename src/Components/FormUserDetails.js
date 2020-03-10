import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const FormUserDetails = props => {
  const continueNext = e => {
    e.preventDefault();
    props.nextStep();
  };

  const { values, handleChange } = props;
  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title="Enter User Details" />
        <TextField
          hintText="Enter Your First Name"
          floatingLabelText="First Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          hintText="Enter Your Last Name"
          floatingLabelText="Last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          hintText="Enter Your Email Address"
          floatingLabelText="Email Address"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />
        <RaisedButton
          label="Next"
          onClick={continueNext}
          primary={true}
          style={styles.button}
        />
      </Fragment>
    </MuiThemeProvider>
  );
};

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
