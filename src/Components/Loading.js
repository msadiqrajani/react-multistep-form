import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import LinearProgress from "material-ui/LinearProgress";

const Error = props => {
  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar
          title="Submitting Form"
          style={{ backgroundColor: "#ffc107" }}
        />
        <h1>Submitting Your Response</h1>
        <div
          style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <LinearProgress color="#ffc107" />
        </div>
      </Fragment>
    </MuiThemeProvider>
  );
};

export default Error;
