import * as React from 'react';
import './app.css';
import Login from './components/login/login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import AuthService from './service/auth';

const authService = new AuthService();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_FIREBASE_APPID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

function App() {
  // Sign In function
  const signIn = (email, password) => {
    authService
      .loginWithEmail(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };

  const signInGit = () => {
    authService
      .loginWithAuth('Github')
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user.uid);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
  };

  const signInGoogle = () => {
    authService
      .loginWithAuth('Google')
      .then((result) => {
        const user = result.user;
        console.log(user.uid);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          exact
          element={
            <Login
              onSignIn={signIn}
              onGithub={signInGit}
              onGoogle={signInGoogle}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
