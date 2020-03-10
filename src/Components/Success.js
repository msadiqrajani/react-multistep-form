import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

const Success = () => {
  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title="Success" style={{ backgroundColor: "#4caf50" }} />
        <h1>Thank you for your submission</h1>
        <p>You will get an email with further information</p>
      </Fragment>
    </MuiThemeProvider>
  );
};

export default Success;
