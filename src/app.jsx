import * as React from 'react';
import './app.css';
import Login from './components/login/login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import JournalList from './components/journalList/journalList';
import { useState, useEffect } from 'react';
import JournalEditor from './components/journalEditor/journalEditor';
import JournalView from './components/journalView/journalView';

import { getDatabase, ref, set, remove, child, get } from 'firebase/database';
import firebaseApp from './service/firebase';

const database = getDatabase(firebaseApp);

function App({ authService, FileInput }) {
  const [onEditor, setOnEditor] = useState(false);
  const [onView, setOnView] = useState(false);

  const [userId, setUserId] = useState(null);

  const [journalShown, setJournalShown] = useState(null);

  const [journals, setJournals] = useState({
    1: {
      key: 1,
      date: '20220919',
      title: `Lovely day!`,
      content: `Today is my birthday! It was really fun. I met a lot of friends and they gave me various gifts`,
      url: '/image/sample_image.jpg',
      emotion: '🥰',
    },
    2: {
      key: 2,
      date: '20221020',
      title: `I'm sad..`,
      content: `Today is my birthday! It was really fun. I met a lot of friends and they gave me various gifts`,
      url: '/image/sample_image.jpg',
      emotion: '🥲',
    },
    3: {
      key: 3,
      date: '20221119',
      title: `I don't know what to do`,
      content: `Today is my birthday! It was really fun. I met a lot of friends and they gave me various gifts`,
      url: '/image/sample_image.jpg',
      emotion: '🥹',
    },
  });

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

  // Save data
  const addOrUpdateJournal = (journal) => {
    setJournals((journals) => {
      const updated = { ...journals };
      updated[journal.key] = journal;
      return updated;
    });
  };

  const readData = () => {
    const journalRef = ref(database, `journal/${userId}`);
    let journals = {};

    const dbRef = ref(getDatabase(firebaseApp));
    get(child(dbRef, `journal/${userId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          journals = Object.assign(snapshot.val());

          console.log(journals);

          for (const journal in journals) {
            console.log(`${journal}: ${journals[journal]}`);
          }
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteJournal = (key) => {
    remove(ref(database, `journal/${userId}/${key}`));
  };

  const wirteData = (journal) => {
    const key = journal.key;
    set(ref(database, `journal/${userId}/${key}`), {
      key: key,
      date: journal.date,
      title: journal.title,
      content: journal.content,
      url: journal.url,
      emotion: journal.emotion,
      imageName: journal.imageName,
    });
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
                  journals={journals && journals}
                  toggleEditor={toggleEditor}
                  toggleView={toggleView}
                  display={onEditor || onView ? 'half' : 'full'}
                  onOpenJournal={onOpenJournal}
                  readData={readData}
                />
                <JournalEditor
                  wirteData={wirteData}
                  FileInput={FileInput}
                  display={onEditor ? 'open' : 'close'}
                  uploadeData={addOrUpdateJournal}
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
