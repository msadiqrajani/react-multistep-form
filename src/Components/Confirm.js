import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui";

const Confirm = props => {
  const continueNext = e => {
    e.preventDefault();
    props.nextStep();
  };

  const goBack = e => {
    e.preventDefault();
    props.previousStep();
  };

  const { values } = props;
  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title="Confirm The Details" />
        <List>
          <ListItem primaryText="First Name" secondaryText={values.firstName} />
          <ListItem primaryText="Last Name" secondaryText={values.lastName} />
          <ListItem primaryText="Email Address" secondaryText={values.email} />
          <ListItem
            primaryText="Occupation"
            secondaryText={values.occupation}
          />
          <ListItem primaryText="City" secondaryText={values.city} />
          <ListItem primaryText="Bio" secondaryText={values.bio} />
        </List>
        <br />
        <RaisedButton
          label="Back"
          onClick={goBack}
          primary={false}
          style={styles.button}
        />
        <RaisedButton
          label="Confirm"
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

export default Confirm;
