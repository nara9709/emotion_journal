import * as React from 'react';
import './app.css';
import Login from './components/login/login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'emotionjournal.firebaseapp.com',
  projectId: 'emotionjournal',
  storageBucket: 'emotionjournal.appspot.com',
  messagingSenderId: '711333024835',
  appId: '1:711333024835:web:be037b6f51bf6b383eb0f6',
  measurementId: 'G-96YZLVWJZF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

function App() {
  // Sign In function
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
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
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log('Login in with github');
        console.log(user.uid);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        alert(errorMessage);
        // ...
      });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          exact
          element={<Login onSignIn={signIn} onGithub={signInGit} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
