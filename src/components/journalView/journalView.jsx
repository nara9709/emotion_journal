import React from 'react';
import styles from './journalView.module.css';

const JournalView = ({ display, journalShown, toggleView }) => {
  const displayType = display === 'open' ? styles.viewOpen : styles.viewClose;

  const closeView = () => {
    toggleView();
  };

  return (
    <section className={displayType}>
      <h1>{journalShown ? journalShown[0].title : 'Title'}</h1>
      <span className={styles.closeIcon} onClick={closeView}>
        <i className="fa-solid fa-x"></i>
      </span>
    </section>
  );
};
export default JournalView;
