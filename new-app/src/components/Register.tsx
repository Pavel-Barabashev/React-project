import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ContextProvider } from "../reusable_components&helpers/contexts/Contexts";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../reusable_components&helpers/contexts/AuthContext";

export const Register: React.FC = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isPasswordVisible, setIsPasswordVisible] = useState(false);
  let [isLoginButtonVisible, setIsLoginButtonVisible] = useState(false);
  let { setIsSuccessSnackbarVisible, setIsErrorSnackbarVisible } =
    useContext(ContextProvider);
  let { signUp } = useAuth();

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
              setIsLoginButtonVisible(true);
            })
            .catch((error) => {
              console.log(error);
              setIsErrorSnackbarVisible(true);
            });
        }}
      >
        Register
      </Button>
      {isLoginButtonVisible && (
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in
        </Button>
      )}
    </form>
  );
};
