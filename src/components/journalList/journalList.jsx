import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Journal from '../journal/journal';
import styles from './journalList.module.css';

const JournalList = ({
  onOpenJournal,
  toggleEditor,
  display,
  toggleView,
  journals,
  readData,
}) => {
  useEffect(() => {
    readData();
  }, []);

  const displayType =
    display === 'full' ? styles.listContainerFull : styles.listContainerHalf;

  const openEditor = () => {
    toggleEditor();
  };

  const openView = () => {
    toggleView();
  };

  const onView = (key) => {
    onOpenJournal(key);
  };

  return (
    <section className={displayType}>
      <ul className={styles.cardContainer}>
        {journals &&
          Object.keys(journals).map((key) => (
            <li className={styles.journalCard}>
              <Journal
                journal={journals[key]}
                key={key}
                onView={onView}
                openView={openView}
              />
            </li>
          ))}

        <button className={styles.editBtn} onClick={openEditor}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </ul>
    </section>
  );
};

export default JournalList;
