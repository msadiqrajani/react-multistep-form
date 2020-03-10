import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const FormPersonalDetails = props => {
  const continueNext = e => {
    e.preventDefault();
    props.nextStep();
  };

  const goBack = e => {
    e.preventDefault();
    props.previousStep();
  };

  const { values, handleChange } = props;

  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title="Enter Personal Details" />
        <TextField
          hintText="Enter Occupation"
          floatingLabelText="Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />
        <TextField
          hintText="Enter City"
          floatingLabelText="City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <TextField
          hintText="Enter Bio"
          floatingLabelText="Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br />
        <RaisedButton
          label="Back"
          onClick={goBack}
          primary={false}
          style={styles.button}
        />
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

export default FormPersonalDetails;
