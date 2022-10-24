import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const StartPage: React.FC = () => {
  let navigate = useNavigate();

  return (
    <div className="centered-column">
      <Button
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </Button>
      <Button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </Button>
    </div>
  );
};
