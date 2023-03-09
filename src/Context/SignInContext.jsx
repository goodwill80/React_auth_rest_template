import { useContext, createContext, useState, useEffect } from 'react';
import {
  GoogleAuthProvider, // Auth from Google
  signInWithPopup, // 1st way of signing in
  signInWithRedirect, // 2nd way of signing in
  signOut, // sign-out function
  onAuthStateChanged, // event listener for auth response, can be used for storing token in in-memory
} from 'firebase/auth';
import { auth } from '../Configuraation/Firebase'; // Instance of FB config with your credentials from firebase file - in gitignore

const SigninContext = createContext();

function SignInContextProvider({ children }) {
  const [user, setUser] = useState({});

  // 1. Sign in with Google Popout
  const googleSigninWithPopout = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  // 2. Sign in with Google Redirect
  const googleSigninWithRedirect = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  // 3. Sign out of Google
  const signout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const subcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    // unsubcribe
    return () => {
      subcribe();
    };
  }, []);

  const ctx = {
    user,
    googleSigninWithPopout,
    googleSigninWithRedirect,
    signout,
  };

  return (
    <SigninContext.Provider value={ctx}>{children}</SigninContext.Provider>
  );
}

export const useSignInGlobalContext = () => useContext(SigninContext);

export default SignInContextProvider;