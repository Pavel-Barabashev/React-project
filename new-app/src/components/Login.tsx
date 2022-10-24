import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Login: React.FC<Props> = ({ setIsAuth }) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  function handleLogin() {
    console.log(email, password);
    if (email && password) {
      setIsAuth(true);
      navigate("/profile");
    } else {
      throw Error;
    }
  }

  return (
    <>
      <form action="" className="centered-column">
        <h2>Log in</h2>
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
          type="password"
        />
        <Button
          disabled={email.length === 0 || password.length === 0}
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </Button>
      </form>
    </>
  );
};
