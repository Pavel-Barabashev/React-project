import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../../firebase";

interface Props {
  children: React.ReactNode;
}

type AuthContextType = {
  currentUser: User | undefined;
  signUp: (email: string, password: string) => void;
};

const AuthContext = React.createContext<AuthContextType>({
  currentUser: undefined,
  signUp(email, password) {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props: Props) {
  function signUp(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password);
  }
  let [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    return unsubscribe;
  }, []);

  let value = {
    currentUser,
    signUp,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
