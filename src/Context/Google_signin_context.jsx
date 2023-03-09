import { useContext, createContext, useState, useEffect } from 'react';
import {
  GoogleAuthProvider, // Auth from Google
  signInWithPopup, // 1st way of signing in
  signInWithRedirect, // 2nd way of signing in
  signOut, // sign-out function
  onAuthStateChanged, // event listener for auth response, can be used for storing token in in-memory
} from 'firebase/auth';
import { auth } from '../Configuraation/Firebase'; // Instance of FB config with your credentials from firebase file - in gitignore

const googleContext = createContext();

function GoogleSignInContextProvider({ children }) {
  const [googleUser, setGoogleUser] = useState({});

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
  const googleSignout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const subcribe = onAuthStateChanged(auth, (currentUser) => {
      setGoogleUser(currentUser);
      console.log(currentUser);
    });
    // unsubcribe
    return () => {
      subcribe();
    };
  }, []);

  const ctx = {
    googleUser,
    googleSigninWithPopout,
    googleSigninWithRedirect,
    googleSignout,
  };

  return (
    <googleContext.Provider value={ctx}>{children}</googleContext.Provider>
  );
}

export const useGoogleSignInGlobalContext = () => useContext(googleContext);

export default GoogleSignInContextProvider;
