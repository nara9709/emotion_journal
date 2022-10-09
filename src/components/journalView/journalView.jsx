import React from 'react';
import styles from './journalView.module.css';

const JournalView = ({ display, journalShown, toggleView }) => {
  const displayType = display === 'open' ? styles.viewOpen : styles.viewClose;

  const closeView = () => {
    toggleView();
  };

  return (
    <section className={displayType}>
      <div>
        <h1>{journalShown ? journalShown.title : 'Title'}</h1>
        <h2>{journalShown ? journalShown.date : 'No date :('}</h2>
        <span className={styles.closeIcon} onClick={closeView}>
          <i className="fa-solid fa-x"></i>
        </span>
        <p className={styles.content}>
          {journalShown ? journalShown.content : 'No content :('}
        </p>
      </div>
    </section>
  );
};
export default JournalView;
