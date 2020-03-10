import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import axios from "axios";
import Error from "./Error";
import Loading from "./Loading";

const DEFAULT_FORM = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  occupation: "",
  city: "",
  bio: ""
};
const FORM_POST_LINK =
  "https://script.google.com/macros/s/AKfycbw8CIt_lBCdqVJOhlYoAN_a-HJt8jaJsa8W4l1vs6EsBa6_ywE/exec";

const UserForm = () => {
  const [loading, setLoading] = useState(false);

  const [formResult, setFormResult] = useState({
    status: "",
    body: ""
  });

  const [formDetails, setFormDetails] = useState(DEFAULT_FORM);

  const nextStep = () => {
    const cstep = formDetails.step;
    setFormDetails({ ...formDetails, step: cstep + 1 });
  };

  const previousStep = () => {
    const cstep = formDetails.step;
    setFormDetails({ ...formDetails, step: cstep - 1 });
  };

  const handleChange = input => event => {
    const key = input;
    const val = event.target.value;

    setFormDetails({ ...formDetails, [key]: val });
  };

  const submitForm = () => {
    setLoading(true);
    axios
      .post(FORM_POST_LINK, JSON.stringify(formDetails))
      .then(response => {
        var rData = response.data;
        setFormResult(rData);
        setLoading(false);
        setFormDetails(DEFAULT_FORM);
        nextStep();
      })
      .catch(err => {
        setFormResult({
          status: "err",
          body: "UnExpected Error"
        });
        setLoading(false);
        nextStep();
      });
  };

  const {
    step,
    firstName,
    lastName,
    email,
    occupation,
    city,
    bio
  } = formDetails;
  const values = { step, firstName, lastName, email, occupation, city, bio };

  if (loading) {
    return <Loading />;
  }
  switch (step) {
    case 1:
    default:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          previousStep={previousStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm
          nextStep={submitForm}
          previousStep={previousStep}
          values={values}
        />
      );
    case 4:
      if (formResult.status === "ok") {
        return <Success />;
      } else {
        return <Error message={formResult.body} />;
      }
  }
};

export default UserForm;
