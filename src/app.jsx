import * as React from 'react';
import './app.css';
import Login from './components/login/login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
