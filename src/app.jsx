import * as React from 'react';
import './app.css';
import Login from './components/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import JournalList from './components/journalList/journalList';
import { useState, useEffect } from 'react';
import JournalEditor from './components/journalEditor/journalEditor';
import JournalView from './components/journalView/journalView';

import { getAuth } from 'firebase/auth';

import {
  getDatabase,
  ref,
  set,
  remove,
  onValue,
  update,
} from 'firebase/database';
import firebaseApp from './service/firebase';

const database = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);

function App({ authService, FileInput, journalRepository }) {
  const [onEditor, setOnEditor] = useState(false);
  const [onView, setOnView] = useState(false);
  const [userId, setUserId] = useState(null);
  const [journalShown, setJournalShown] = useState(null);
  const [journals, setJournals] = useState(null);

  const toggleEditor = () => {
    onEditor ? setOnEditor(false) : setOnEditor(true);
  };

  const toggleView = () => {
    onView ? setOnView(false) : setOnView(true);
  };

  // If user clicks journal card, call this onOpneJournal and assign key to a key variable to show the journal
  const onOpenJournal = (id) => {
    setJournalShown({
      key: journals[id].key,
      title: journals[id].title,
      date: journals[id].date,
      emotion: journals[id].emotion,
      content: journals[id].content,
      url: journals[id].url,
    });
  };

  // Get journals from Firebase database
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = journalRepository.syncJournals(userId, (journals) => {
      setJournals(journals);
    });
    return () => stopSync();
  }, [userId]);

  // Delete journal from database
  const deleteJournal = (journal) => {
    setJournals((journals) => {
      const updated = { ...journals };
      delete updated[journal.key];
      return updated;
    });

    journalRepository.deleteJournal(userId, journal);
  };

  // Add or update journal
  const createOrUpdateJournal = (journal) => {
    setJournals((journals) => {
      const updated = { ...journals };
      updated[journal.key] = journal;
      return updated;
    });

    journalRepository.saveJournal(userId, journal);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              authService={authService}
              setOnEditor={setOnEditor}
              setOnView={setOnView}
              setUserId={setUserId}
            />
          }
        ></Route>
        <Route
          path="/journal-list"
          element={
            // If User clicks Editor button, show editor page
            <>
              {' '}
              <Header authService={authService} toggleEditor={toggleEditor} />
              <div className="journalContainer">
                <JournalList
                  journals={journals}
                  setUserId={setUserId}
                  toggleEditor={toggleEditor}
                  toggleView={toggleView}
                  display={onEditor || onView ? 'half' : 'full'}
                  onOpenJournal={onOpenJournal}
                  authService={authService}
                  FileInput={FileInput}
                  wirteData={createOrUpdateJournal}
                />

                <JournalView
                  display={onView ? 'open' : 'close'}
                  journalShown={journalShown}
                  toggleView={toggleView}
                  deleteJournal={deleteJournal}
                />
              </div>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
