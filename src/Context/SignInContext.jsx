import { useContext, createContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword, // New account creation with pw and email
  signInWithEmailAndPassword, // sign in with pw and email
  GoogleAuthProvider, // Auth from Google
  GithubAuthProvider, // Auth from Github
  signInWithPopup, // 1st way of signing in
  signInWithRedirect, // 2nd way of signing in
  signOut, // sign-out function
  onAuthStateChanged, // event listener for auth response, can be used for storing token in in-memory
} from 'firebase/auth';
import { auth } from '../Configuraation/Firebase'; // Instance of FB config with your credentials from firebase file - in gitignore
import axios from 'axios';

const SigninContext = createContext();

function SignInContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

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

  // 3. Sign up with normal email and password
  const createUserWithPwAndEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // 4. Sign in user with normal email and password
  const signInUserWithPwAndEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 5. Sign in with Github
  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider);
  };

  // 6. Sign out
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

  // Get Products from springboot api
  const getProductsFromApi = async () => {
    try {
      const response = await axios.get('http://localhost:8080/products');
      console.log(response.data);
      setProducts(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getCartSummary = async () => {
    try {
      const response = await axios.get('http://localhost:8080/carts/summary', {
        headers: {
          user_id: 1,
        },
      });
      console.log(response);
      setCart(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/products/${id}`
      );
      console.log(response);
      getProductsFromApi();
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getProductsFromApi();
  }, []);

  useEffect(() => {
    getCartSummary();
  }, []);

  const ctx = {
    user,
    googleSigninWithPopout,
    googleSigninWithRedirect,
    signInWithGithub,
    createUserWithPwAndEmail,
    signInUserWithPwAndEmail,
    signout,
    products,
    getProductsFromApi,
    deleteProduct,
    cart,
  };

  return (
    <SigninContext.Provider value={ctx}>{children}</SigninContext.Provider>
  );
}

export const useSignInGlobalContext = () => useContext(SigninContext);

export default SignInContextProvider;
