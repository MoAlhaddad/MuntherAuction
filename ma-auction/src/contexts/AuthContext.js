import React, { useContext, useState, useEffect, useReducer } from "react";

import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

//Firebase auth functions that provide navigation depending on function

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

// const intialState = {
//   user: null,
// };

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const intialState = {
    user: null,
  };
  const [currentUser, setCurrentUser] = useState("");
  const [state, dispatch] = useReducer(reducer, intialState);
  const navigate = useNavigate();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // uses signOut function from firebase/auth next we append .then to navigate the user back to the homepage

  function logout() {
    return auth.signOut().then(() => navigate("/"));
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  const unsubscribe = () => {
  auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
    setLoading(false);
  })

}
;

  useEffect(() => {
    unsubscribe();
    }, 
    []);

  const value = {
    login,
    signup,
    logout,
    resetPassword,
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
  }

export {AuthContext}
