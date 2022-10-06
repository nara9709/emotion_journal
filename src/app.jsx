import * as React from 'react';
import './app.css';
import Login from './components/login/login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import JournalList from './components/journalList/journalList';
import { useState } from 'react';
import JournalEditor from './components/journalEditor/journalEditor';
import JournalView from './components/journalView/journalView';
import { useEffect } from 'react';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

import firebaseApp from './service/firebase';

const database = getDatabase(firebaseApp);

function App({ authService }) {
  const [onEditor, setOnEditor] = useState(false);
  const [onView, setOnView] = useState(false);

  const [journalShown, setJournalShown] = useState(null);

  const [journals, setJournal] = useState({
    1: {
      key: 1,
      date: '20220919',
      title: `Lovely day!`,
      content: `Today is my birthday! It was really fun. I met a lot of friends and they gave me various gifts`,
      image: '/image/sample_image.jpg',
      emotion: '🥰',
    },
    2: {
      key: 2,
      date: '20221020',
      title: `I'm sad..`,
      content: `Today is my birthday! It was really fun. I met a lot of friends and they gave me various gifts`,
      image: '/image/sample_image.jpg',
      emotion: '🥲',
    },
    3: {
      key: 3,
      date: '20221119',
      title: `I don't know what to do`,
      content: `Today is my birthday! It was really fun. I met a lot of friends and they gave me various gifts`,
      image: '/image/sample_image.jpg',
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
    console.log(id);

    // let journal = null;

    // Object.keys(journals).map((key) =>
    //   key === id ? (journal = journals[key]) : (journal = null)
    // );

    // let journal = Object.keys(journals).find((key) => journals[key] === id);

    let journal = journals[id];

    setJournalShown(journal);

    console.log(journal);
  };

  // Save data
  const writeContent = (userId, date, title, content, imageUrl) => {
    set(ref(database, 'users/' + userId), {
      title: title,
      content: content,
      image: imageUrl,
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
                />
                <JournalEditor
                  display={onEditor ? 'open' : 'close'}
                  uploadeData={writeContent}
                />
                <JournalView
                  display={onView ? 'open' : 'close'}
                  journalShown={journalShown}
                  toggleView={toggleView}
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
