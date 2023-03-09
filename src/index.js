import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import SignInContextProvider from './Context/SignInContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignInContextProvider>
      <App />
    </SignInContextProvider>
  </React.StrictMode>
);
