import React, { createContext, SetStateAction } from "react";

type ContextType = {
  setIsSuccessSnackbarVisible: React.Dispatch<SetStateAction<boolean>>;
  setIsErrorSnackbarVisible: React.Dispatch<SetStateAction<boolean>>;
};

export const ContextProvider = createContext<ContextType>({
  setIsSuccessSnackbarVisible: () => {},
  setIsErrorSnackbarVisible: () => {},
});
