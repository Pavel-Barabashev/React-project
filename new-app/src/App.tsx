import "../src/styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { StartPage } from "./components/StartPage";
import { useState } from "react";
import { ProtectionLayer } from "./components/ProtectionLayer";
import { Register } from "./components/Register";
import {
  ErrorSnackbar,
  SuccessSnackbar,
} from "./reusable_components&helpers/Snackbars";
import { SnackbarsContext } from "./reusable_components&helpers/Contexts";
const App: React.FC = () => {
  let [isAuth, setIsAuth] = useState(false);
  let [isSuccessSnackbarVisible, setIsSuccessSnackbarVisible] = useState(false);
  let [isErrorSnackbarVisible, setIsErrorSnackbarVisible] = useState(false);
  return (
    <>
      <SnackbarsContext.Provider
        value={{ setIsSuccessSnackbarVisible, setIsErrorSnackbarVisible }}
      >
        <Router>
          <Routes>
            <Route path="" element={<StartPage />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={<ProtectionLayer isAuth={isAuth}></ProtectionLayer>}
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
      </SnackbarsContext.Provider>
    </>
  );
};
export default App;
