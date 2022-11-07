import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { User } from "../types/types";

interface Props {
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export const Login: React.FC<Props> = ({ setUser }) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isPasswordVisible, setIsPasswordVisible] = useState(false);
  let navigate = useNavigate();
  function handleLogin() {
    console.log(email, password);
    if (email && password) {
      setUser({ email, id: 3 });
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
            handleLogin();
          }}
        >
          Login
        </Button>
      </form>
    </>
  );
};
