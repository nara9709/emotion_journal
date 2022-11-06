import React from 'react';
import { useEffect, useState } from 'react';
import Journal from '../journal/journal';
import { useNavigate } from 'react-router-dom';
import styles from './journalList.module.css';
import JournalEditor from '../journalEditor/journalEditor';
import JournalView from '../journalView/journalView';
import FilterEmotion from '../filterEmotion/filterEmotion';

const JournalList = ({
  journals,
  setUserId,
  authService,
  wirteData,
  FileInput,
  uploadeData,
  deleteJournal,
  filteringJournalByEmotion,
}) => {
  const navigate = useNavigate();

  const [onEditor, setOnEditor] = useState(false);
  const [onView, setOnView] = useState(false);
  const [journalShown, setJournalShown] = useState(null);
  const [toBeEdited, setToBeEdited] = useState(null);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  });

  const toggleEditor = () => {
    onEditor ? setOnEditor(false) : setOnEditor(true);
  };

  const toggleView = () => {
    onView ? setOnView(false) : setOnView(true);
  };

  // Filtering journal shown
  const searchJournal = (key) => {
    setJournalShown(() => {
      const journal = journals[key];
      return journal;
    });
  };

  // Filtering journals by emotion
  const filteringJournals = (emotion) => {
    filteringJournalByEmotion(emotion);
  };

  return (
    <>
      <section className={styles.sectionLeft}>
        <FilterEmotion filteringJournals={filteringJournals}></FilterEmotion>
        <ul className={styles.cardContainer}>
          {journals &&
            Object.keys(journals).map((key) => (
              <li className={styles.journalCard} key={key}>
                <Journal
                  journal={journals[key]}
                  key={key}
                  searchJournal={searchJournal}
                  openView={toggleView}
                />
              </li>
            ))}
        </ul>
        <button className={styles.editBtn} onClick={toggleEditor}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </section>

      {onEditor && (
        <section className={styles.sectionRight}>
          <JournalEditor
            wirteData={wirteData}
            FileInput={FileInput}
            toggleEditor={toggleEditor}
            uploadeData={uploadeData}
            toBeEdited={toBeEdited}
            setToBeEdited={setToBeEdited}
          />
        </section>
      )}

      {onView && (
        <section className={styles.sectionRight}>
          <JournalView
            journalShown={journalShown}
            deleteJournal={deleteJournal}
            toggleView={toggleView}
            toggleEditor={toggleEditor}
            setToBeEdited={setToBeEdited}
          />
        </section>
      )}
    </>
  );
};

export default JournalList;
