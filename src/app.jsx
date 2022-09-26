import * as React from 'react';
import './app.css';
import Login from './components/login/login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import JournalList from './components/journalList/journalList';
import { useState } from 'react';
import JournalEditor from './components/journalEditor/journalEditor';

function App({ authService }) {
  const [onEditor, setOnEditor] = useState(false);

  const toggleEditor = () => {
    onEditor ? setOnEditor(false) : setOnEditor(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login authService={authService} />}></Route>
        <Route
          path="/journal-list"
          element={
            // If User clicks Editor button, show editor page
            <>
              {' '}
              <Header authService={authService} toggleEditor={toggleEditor} />
              <div className="journalContainer">
                <JournalList
                  toggleEditor={toggleEditor}
                  display={onEditor ? 'half' : 'full'}
                />
                <JournalEditor display={onEditor ? 'open' : 'close'} />
              </div>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
