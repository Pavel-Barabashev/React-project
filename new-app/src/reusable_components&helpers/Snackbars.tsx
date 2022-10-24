import React, { Dispatch, SetStateAction } from "react";
import { Snackbar, Alert } from "@mui/material";

interface PropsForSuccess {
  isSuccessSnackbarVisible: boolean;
  setIsSuccessSnackbarVisible: Dispatch<SetStateAction<boolean>>;
}
interface PropsForError {
  isErrorSnackbarVisible: boolean;
  setIsErrorSnackbarVisible: Dispatch<SetStateAction<boolean>>;
}
interface PropsForInfo {
  setIsInfoSnackbarVisible: Dispatch<SetStateAction<boolean>>;
  isInfoSnackbarVisible: boolean;
  infoSnackbarText: string;
}
export const ErrorSnackbar: React.FC<PropsForError> = ({
  isErrorSnackbarVisible,
  setIsErrorSnackbarVisible,
}) => {
  return (
    <Snackbar
      open={isErrorSnackbarVisible}
      autoHideDuration={6000}
      onClose={() => setIsErrorSnackbarVisible(false)}
    >
      <Alert
        onClose={() => setIsErrorSnackbarVisible(false)}
        severity="error"
        sx={{ width: "100%" }}
      >
        Error!
      </Alert>
    </Snackbar>
  );
};

export const SuccessSnackbar: React.FC<PropsForSuccess> = ({
  isSuccessSnackbarVisible,
  setIsSuccessSnackbarVisible,
}) => {
  return (
    <Snackbar
      open={isSuccessSnackbarVisible}
      autoHideDuration={6000}
      onClose={() => setIsSuccessSnackbarVisible(false)}
    >
      <Alert
        onClose={() => setIsSuccessSnackbarVisible(false)}
        severity="success"
        sx={{ width: "100%" }}
      >
        Success!
      </Alert>
    </Snackbar>
  );
};

export const InfoSnackbar: React.FC<PropsForInfo> = ({
  isInfoSnackbarVisible,
  setIsInfoSnackbarVisible,
  infoSnackbarText,
}) => {
  return (
    <Snackbar
      open={isInfoSnackbarVisible}
      autoHideDuration={6000}
      onClose={() => setIsInfoSnackbarVisible(false)}
    >
      <Alert
        onClose={() => setIsInfoSnackbarVisible(false)}
        severity="info"
        sx={{ width: "100%" }}
      >
        {infoSnackbarText}
      </Alert>
    </Snackbar>
  );
};
