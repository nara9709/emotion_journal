import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './journalList.module.css';

const JournalList = ({ isLogin }) => {
  const state = useLocation().state;
  const userId = state.userId;

  return (
    <section className={styles.listContainer}>
      <h1> JoirnalList page</h1>
    </section>
  );
};

export default JournalList;
