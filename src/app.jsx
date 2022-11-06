import * as React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import JournalList from './components/journalList/journalList';
import { useState, useEffect } from 'react';

function App({ authService, FileInput, journalRepository }) {
  const [onView, setOnView] = useState(false);
  const [userId, setUserId] = useState(null);
  const [journals, setJournals] = useState(null);
  const [onFiltered, SetOnfiltered] = useState(false);
  const [filteredArr, SetFilteredArr] = useState({});

  const toggleView = () => {
    onView ? setOnView(false) : setOnView(true);
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
  }, [journalRepository, userId]);

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

  // Filtering journals by emotion
  const filteringJournalByEmotion = (emotion) => {
    if (emotion !== 'all') {
      SetFilteredArr(() => {
        SetOnfiltered(true);
        const filteredArr = Object.values(journals).filter((journal) =>
          journal.emotion.includes(emotion)
        );
        return filteredArr;
      });
    } else {
      SetOnfiltered(false);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login authService={authService} setUserId={setUserId} />}
        ></Route>
        <Route
          path="/journal-list"
          element={
            <>
              <Header authService={authService} />
              <div className={styles.journalContainer}>
                <JournalList
                  journals={!onFiltered ? journals : filteredArr}
                  setUserId={setUserId}
                  toggleView={toggleView}
                  authService={authService}
                  FileInput={FileInput}
                  wirteData={createOrUpdateJournal}
                  deleteJournal={deleteJournal}
                  onFilter={onFiltered}
                  setOnFilter={SetOnfiltered}
                  setJournals={setJournals}
                  filteringJournalByEmotion={filteringJournalByEmotion}
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
