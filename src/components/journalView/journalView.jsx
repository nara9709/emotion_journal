import React from 'react';
import styles from './journalView.module.css';

const JournalView = ({ display, journalShown }) => {
  const displayType = display === 'open' ? styles.viewOpen : styles.viewClose;

  console.log(journalShown);

  return (
    <section className={displayType}>
      <h1>{journalShown ? journalShown.title : 'Title'}</h1>
    </section>
  );
};
export default JournalView;
