import * as React from 'react';
import './app.css';
import Login from './components/login/login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AuthService from './service/auth';
const authService = new AuthService();

function App({ authService }) {
  // Sign In function
  const signInWithEmail = (email, password) => {};

  const SignInWithProvider = (provider) => {};

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          exact
          element={
            <Login
              authService={authService}
              onSignInWithEmail={signInWithEmail}
              onSignInWithProvider={SignInWithProvider}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
