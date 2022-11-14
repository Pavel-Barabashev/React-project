import React, { useEffect } from "react";
import { User } from "../../types/types";
import { Navigate } from "react-router-dom";
import { getFromLS } from "../../reusable_components&helpers/Helpers";

interface Props {
  user: User | undefined;
}

export const Entries: React.FC<Props> = ({ user }) => {
  useEffect(() => {}, []);

  return user ? <></> : <Navigate to={"/login"} />;
};
