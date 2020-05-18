import React, { useState } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button } from "reactstrap";
import axios from "axios";
import getUserByEmail from "../../getUserByEmail";
import loadDB from "../../../fakeServer/loadDateBase";

import "./index.scss";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userGender, setUserGender] = useState("");

  const addNewsUser = async () => {
    let newUser = {
      firstName: firstName,
      secondName: secondName,
      email: userEmail,
      password: userPassword,
      gender: userGender,
      addTime: new Date(),
      
    };

    let usersDB = await (await loadDB()).data;

    if (getUserByEmail(usersDB, newUser.email)) {
      axios.post("http://localhost:3001/users", {
        id: Date.now(), ...newUser });
    } else {
      console.log(`error`);
    }
  };
  
  return (
    <AvForm className="signup-container" onSubmit={addNewsUser}>
      <AvField
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        name="firstName"
        label="First Name"
        type="text"
        errorMessage="Invalid name"
        validate={{
          required: { value: true },
          pattern: {
            value: "^[A-Za-z0-9]+$",
            errorMessage:
              "Your First name must be composed only with letter and numbers",
          },
          minLength: {
            value: 2,
            errorMessage: "Your first name must be between 2 and 16 characters",
          },
          maxLength: {
            value: 16,
            errorMessage: "Your first name must be between 6 and 16 characters",
          },
        }}
      />
      <AvField
        onChange={(e) => setSecondName(e.target.value)}
        name="secondName"
        label="Second Name"
        type="text"
        validate={{
          required: { value: true, errorMessage: "Please enter a name" },
          pattern: {
            value: "^[A-Za-z0-9]+$",
            errorMessage:
              "Your Second name must be composed only with letter and numbers",
          },
          minLength: {
            value: 2,
            errorMessage:
              "Your second name must be between 2 and 16 characters",
          },
          maxLength: {
            value: 16,
            errorMessage:
              "Your second name must be between 6 and 16 characters",
          },
        }}
      />
      <AvField
        onChange={(e) => setUserEmail(e.target.value)}
        name="emailProp"
        label="Email"
        type="text"
        validate={{ email: true }}
      />

      <AvField
        onChange={(e) => setUserPassword(e.target.value)}
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

      <AvField
        onChange={(e) => setUserGender(e.target.value)}
        type="select"
        name="select"
        label="Gender"
        validate={{ required: { value: true } }}
      >
        <option>- - - - -</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </AvField>
      <input className="btn btn-primary" type="submit" value="Отправить" />
      <Button color="primary">Log In</Button>
    </AvForm>
  );
};

export default SignUp;
