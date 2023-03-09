import { Link } from 'react-router-dom';
import { useState } from 'react';

function SignupForm() {
  const [form, setForm] = useState({ email: '', password: '' });

  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1 className="text-center text-4xl tracking-widest text-green-800 font-bold mb-10">
        Be part of our green efforts!
      </h1>
      <div className="max-w-[700px] mx-auto">
        <div>
          <h1 className="text-3xl font-bold py-2">
            Sign up for a free account
          </h1>
          <p>
            Already have an account?{' '}
            <Link to="/" className="underline">
              Sign in.
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
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignupForm;
