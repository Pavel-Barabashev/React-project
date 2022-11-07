import React, { useContext, useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { ContextProvider } from "../reusable_components&helpers/Contexts";
import { Article } from "../types/types";
import { MainNavbar } from "../reusable_components&helpers/Navbars";

export const Profile: React.FC = () => {
  let [articles, setArticles] = useState(Array<Article>);
  let [isLoadingVisible, setIsLoadingVisible] = useState(false);

  let { setIsSuccessSnackbarVisible, setIsErrorSnackbarVisible } =
    useContext(ContextProvider);
  return (
    <>
      <MainNavbar />
    </>
  );
};
