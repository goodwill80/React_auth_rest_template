import React from 'react';

import SigninForm from '../Components/SigninForm';

function HomePage() {
  return (
    <>
      <div className="flex flex-col min-h-full h-[75vh] justify-center items-center">
        <h1 className="p-4 text-4xl font-bold tracking-widest text-green-700 mb-1">
          Welcome Back!
        </h1>
        <SigninForm />
      </div>
    </>
  );
}

export default HomePage;
