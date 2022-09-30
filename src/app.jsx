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

function App({ authService }) {
  const [onEditor, setOnEditor] = useState(false);
  const [onView, setOnView] = useState(false);

  let journalShown = null;

  const [journals, setJournal] = useState([
    {
      key: 1,
      date: '20220919',
      title: `Lovely day!`,
      content: `Today is my birthday! It was really fun. I met a lot of friends and they gave me various gifts`,
      image: '/image/sample_image.jpg',
      emotion: '🥰',
    },
    {
      key: 2,
      date: '20221020',
      title: `I'm sad..`,
      content: `Today is my birthday! It was really fun. I met a lot of friends and they gave me various gifts`,
      image: '/image/sample_image.jpg',
      emotion: '🥲',
    },
    {
      key: 3,
      date: '20221119',
      title: `I don't know what to do`,
      content: `Today is my birthday! It was really fun. I met a lot of friends and they gave me various gifts`,
      image: '/image/sample_image.jpg',
      emotion: '🥹',
    },
  ]);

  const toggleEditor = () => {
    onEditor ? setOnEditor(false) : setOnEditor(true);
  };

  const toggleView = () => {
    onView ? setOnView(false) : setOnView(true);
  };

  // If user clicks journal card, call this onOpneJournal and assign key to a key variable to show the journal
  const onOpenJournal = (key) => {
    const journal = journals.filter((journal) => journal.key === key);

    journalShown = journal;
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
                  key={journals.key}
                  toggleEditor={toggleEditor}
                  toggleView={toggleView}
                  display={onEditor || onView ? 'half' : 'full'}
                  onOpenJournal={onOpenJournal}
                />
                <JournalEditor display={onEditor ? 'open' : 'close'} />
                <JournalView
                  display={onView ? 'open' : 'close'}
                  journalShown={journalShown}
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
