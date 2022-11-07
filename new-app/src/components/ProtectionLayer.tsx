import React from "react";
import { RouteProps, Navigate } from "react-router-dom";
import { User } from "../types/types";
import { Profile } from "./Profile";

type Props = RouteProps & {
  user: User | undefined;
};
export const ProtectionLayer: React.FC<Props> = ({ user }) => {
  if (user) {
    return <Profile></Profile>;
  }

  return <Navigate to={"/login"} />;
};
