import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { FaGithubSquare } from 'react-icons/fa';
import { useSignInGlobalContext } from '../Context/SignInContext';

function SigninForm() {
  const redirect = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const {
    // googleSigninWithRedirect,
    user,
    signInWithGithub,
    googleSigninWithPopout,
    signInUserWithPwAndEmail,
  } = useSignInGlobalContext();

  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await signInUserWithPwAndEmail(
        form.email,
        form.password
      );
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  const googleSignIn = async () => {
    try {
      const response = await googleSigninWithPopout();
      console.log(response);
      redirect('/account');
    } catch (err) {
      console.log(err.message);
    }
  };

  const gitHubSignIn = async () => {
    try {
      const response = await signInWithGithub();
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  // We cannot place redirect in the handle signin, as page will redirect even before google redirect back
  // Therefore, we need to use a listener aka useEffect to redirect to account upon user info is set in memory.
  useEffect(() => {
    if (user !== null) {
      redirect('/account');
    }
  }, [user]);

  return (
    <div className="max-w-[700px] mx-auto">
      <div>
        <h1 className="text-3xl font-bold py-2">Sign in to your account</h1>
        <p className="text-green-700">
          Don't have an account yet?{' '}
          <Link to="/signup" className="underline">
            Sign up.
          </Link>
        </p>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-bold">Email Address</label>
          <input
            onChange={onChangeHandler}
            value={form.email}
            name="email"
            className="border p-3 bg-green-50"
            placeholder="email"
            type="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-bold">Password</label>
          <input
            onChange={onChangeHandler}
            value={form.password}
            name="password"
            className="border p-3 bg-green-50"
            placeholder="password"
            type="password"
          />
        </div>
        <button className="border border-green-500 bg-green-600 hover:bg-green-500 w-full p-4 my-4 text-white font-bold rounded-md">
          Sign In
        </button>
      </form>
      <div className="flex flex-col justify-center items-center">
        <GoogleButton onClick={googleSignIn} />
        <div
          onClick={gitHubSignIn}
          className="flex justify-start w-[240px] h-[50px] rounded-sm bg-black mt-2 cursor-pointer text-white space-x-6"
        >
          <FaGithubSquare color={'white'} size={50} />
          <div className="flex justify-center items-center">
            <p>Sign in with Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninForm;
