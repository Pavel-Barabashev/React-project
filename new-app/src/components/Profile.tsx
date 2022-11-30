import React, { useContext, useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { ContextProvider } from "../reusable_components&helpers/contexts/Contexts";
import { Article, User } from "../types/types";
import { MainNavbar } from "../reusable_components&helpers/Navbars";
import AddIcon from "@mui/icons-material/Add";
import { EntryCreation } from "./Entries/EntryCreation";
import { Navigate } from "react-router-dom";
interface Props {
  user: User | undefined;
}

export const Profile: React.FC<Props> = ({ user }) => {
  let [articles, setArticles] = useState(Array<Article>);
  let [isLoadingVisible, setIsLoadingVisible] = useState(false);
  let [isEntryCreationViewVisible, setIsEntryCreationViewVisible] =
    useState(false);
  let [isAddEntryButtonVisible, setIsAddEntryButtonVisible] = useState(true);
  let { setIsSuccessSnackbarVisible, setIsErrorSnackbarVisible } =
    useContext(ContextProvider);

  function handleChange() {
    setIsAddEntryButtonVisible(isEntryCreationViewVisible);
    setIsEntryCreationViewVisible(isAddEntryButtonVisible);
  }

  return user ? (
    <div>
      <MainNavbar />
      {isAddEntryButtonVisible ? (
        <Button
          id="entry-add-button"
          onClick={() => {
            handleChange();
          }}
        >
          <AddIcon fontSize="large" />
          Add entry
        </Button>
      ) : null}
      {isEntryCreationViewVisible ? (
        <EntryCreation handleChange={handleChange} />
      ) : null}
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
};
