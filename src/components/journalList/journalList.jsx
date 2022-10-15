import React from 'react';
import { useLocation } from 'react-router-dom';
import Journal from '../journal/journal';
import styles from './journalList.module.css';

const JournalList = ({
  onOpenJournal,
  toggleEditor,
  display,
  toggleView,
  journals,
}) => {
  const state = useLocation().state;
  const userId = state.userId;

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
        {Object.keys(journals).map((key) => (
          <li className={styles.journalCard}>
            {' '}
            <Journal
              journal={journals[key]}
              key={key}
              onView={onView}
              openView={openView}
            />
          </li>
        ))}
        <button onClick={openEditor}>Edit</button>
        <button onClick={openView}>View</button>
      </ul>
    </section>
  );
};

export default JournalList;
