import * as React from 'react';
import './app.css';
import Login from './components/login/login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import JournalList from './components/journalList/journalList';
import { useState } from 'react';

function App({ authService }) {
  const [isLogIn, setIsLogIn] = useState(false);
  const [isOnEdit, setIsOnEdit] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login authService={authService} setIsLogIn={setIsLogIn} />}
        ></Route>
        <Route
          path="/journal-list"
          element={
            <>
              {' '}
              <Header authService={authService} />
              <JournalList isLogIn={isLogIn} />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
