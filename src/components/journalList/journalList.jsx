import React from 'react';
import { useEffect } from 'react';
import Journal from '../journal/journal';
import { useNavigate } from 'react-router-dom';
import styles from './journalList.module.css';

const JournalList = ({
  onOpenJournal,
  toggleEditor,
  display,
  toggleView,
  journals,
  setUserId,
  authService,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  });

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
      </ul>
      <button className={styles.editBtn} onClick={openEditor}>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
    </section>
  );
};

export default JournalList;
