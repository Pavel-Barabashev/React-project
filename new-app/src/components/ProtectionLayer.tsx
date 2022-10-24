import React from "react";
import { RouteProps, Navigate } from "react-router-dom";
import { Profile } from "./Profile";

type Props = RouteProps & {
  isAuth: boolean;
};
export const ProtectionLayer: React.FC<Props> = ({ isAuth }) => {
  if (isAuth) {
    return <Profile></Profile>;
  }

  return <Navigate to={"/login"} />;
};
