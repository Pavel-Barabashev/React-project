import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { SnackbarsContext } from "../reusable_components&helpers/Contexts";
export const Register: React.FC = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isPasswordVisible, setIsPasswordVisible] = useState(false);
  let { setIsSuccessSnackbarVisible, setIsErrorSnackbarVisible } =
    useContext(SnackbarsContext);

  function handleRegister() {
    console.log(email, password);
    return Promise.resolve({ status: 200 });
  }

  return (
    <form action="" className="centered-column">
      <h2>Register</h2>
      <label htmlFor="email">Email:</label>
      <input
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        name="email"
        className="input"
        type="email"
      />
      <label htmlFor="password">Password:</label>
      <input
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        name="password"
        className="input"
        required
        type={isPasswordVisible ? "text" : "password"}
      />
      <a
        onClick={() => {
          setIsPasswordVisible(!isPasswordVisible);
        }}
      >
        {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </a>
      <Button
        disabled={email.length === 0 || password.length === 0}
        onClick={() => {
          handleRegister()
            .then((response) => {
              console.log(response);
              setIsSuccessSnackbarVisible(true);
            })
            .catch((error) => {
              console.log(error);
              setIsErrorSnackbarVisible(true);
            });
        }}
      >
        Register
      </Button>
    </form>
  );
};
