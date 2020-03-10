import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

const Error = props => {
  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title="Error" style={{ backgroundColor: "#f44336" }} />
        <h1>Form submission failed with error</h1>
        <p>{props.message}</p>
      </Fragment>
    </MuiThemeProvider>
  );
};

export default Error;
