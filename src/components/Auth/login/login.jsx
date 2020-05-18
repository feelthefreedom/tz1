/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
} from "availity-reactstrap-validation-safe";
import { Label } from "reactstrap";
import auth from "../../../fakeServer/auth";
import Welding from "../../gifka";
import {
  useHistory,
  useLocation,
} from "react-router-dom";

import "./index.scss";

const Login = (props) => {
  let history = useHistory();
  let location = useLocation();
  
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  let { from } = location.state || { from: { pathname: "/" } };

  const authorization = async (event, errors, values) => {
    props.setIsCheckingLogPass(true);
    let userData = values;
    let error = errors;
    let answer = await auth(
      userData.emailProp,
      userData.password,
      props.setCurrentUser
    );
    if (answer.type === "success") {
      props.setToken(answer.jwt);
      if (userData.checkbox) {
        localStorage.setItem("jwt", answer.jwt);
      }
      props.setIsCheckingLogPass(false);
      setRedirectToReferrer(true);
      history.replace(from);
    } else {
      console.log(answer);
    }
  };

  return (
    <AvForm className="login-container" onSubmit={authorization}>
      {props.isCheckingLogPass.isCheckingLogPass ? <Welding /> : <p></p>}
      <AvField
        value="Vorlamov@gmail.com"
        name="emailProp"
        label="Email"
        type="text"
        validate={{ email: true }}
      />
      <AvField
        value="987654321"
        name="password"
        label="Password"
        type="password"
        errorMessage="Invalid password"
        validate={{
          required: { value: true },
          pattern: {
            value: "^[A-Za-z0-9]+$",
            errorMessage:
              "Your password must be composed only with letter and numbers",
          },
          minLength: {
            value: 6,
            errorMessage: "Your password must be between 6 and 16 characters",
          },
          maxLength: {
            value: 16,
            errorMessage: "Your password must be between 6 and 16 characters",
          },
        }}
      />
      <AvGroup check>
        <Label check>
          <AvInput type="checkbox" name="checkbox" /> Check it Out
        </Label>
      </AvGroup>
      <input
        className="btn btn-primary"
        type="submit"
        value="Отправить"
        disabled={!props.isCheckingLogPass}
      />
    </AvForm>
  );
};

export default Login;