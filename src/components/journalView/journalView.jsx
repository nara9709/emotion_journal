import React from 'react';
import styles from './journalView.module.css';

const JournalView = ({ display }) => {
  const displayType = display === 'open' ? styles.viewOpen : styles.viewClose;
  return (
    <section className={displayType}>
      <h1>Journal View</h1>
    </section>
  );
};
export default JournalView;
