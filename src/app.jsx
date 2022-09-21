import * as React from 'react';
import './app.css';
import Login from './components/login/login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AuthService from './service/auth';
import Header from './components/header/header';
import JournalList from './components/journalList/journalList';
import { useState } from 'react';

function App({ authService }) {
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login authService={authService} setIsLogIn={setIsLogIn} />}
        ></Route>
        <Route
          path="/app"
          element={
            <>
              {' '}
              <Header />
              <JournalList />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
