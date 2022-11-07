import "../src/styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { StartPage } from "./components/StartPage";
import React, { useState } from "react";
import { ProtectionLayer } from "./components/ProtectionLayer";
import { Register } from "./components/Register";
import {
  ErrorSnackbar,
  SuccessSnackbar,
} from "./reusable_components&helpers/Snackbars";
import { ContextProvider } from "./reusable_components&helpers/Contexts";
import { User } from "./types/types";
const App: React.FC = () => {
  let [user, setUser] = useState<User>();
  let [isSuccessSnackbarVisible, setIsSuccessSnackbarVisible] = useState(false);
  let [isErrorSnackbarVisible, setIsErrorSnackbarVisible] = useState(false);
  return (
    <>
      <ContextProvider.Provider
        value={{ setIsSuccessSnackbarVisible, setIsErrorSnackbarVisible }}
      >
        <Router>
          <Routes>
            <Route path="" element={<StartPage />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={<ProtectionLayer user={user}></ProtectionLayer>}
            />
          </Routes>
        </Router>
        <SuccessSnackbar
          isSuccessSnackbarVisible={isSuccessSnackbarVisible}
          setIsSuccessSnackbarVisible={setIsSuccessSnackbarVisible}
        ></SuccessSnackbar>
        <ErrorSnackbar
          isErrorSnackbarVisible={isErrorSnackbarVisible}
          setIsErrorSnackbarVisible={setIsErrorSnackbarVisible}
        ></ErrorSnackbar>
      </ContextProvider.Provider>
    </>
  );
};
export default App;
