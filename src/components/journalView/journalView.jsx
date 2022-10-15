import React from 'react';
import styles from './journalView.module.css';

const JournalView = ({ display, journalShown, toggleView, deleteJournal }) => {
  const displayType = display === 'open' ? styles.viewOpen : styles.viewClose;

  const closeView = () => {
    toggleView();
  };

  const onDeleteJounal = () => {
    toggleView();
    deleteJournal(journalShown.key);
  };

  return (
    <section className={displayType}>
      <div>
        <h1>{journalShown ? journalShown.title : 'Title'}</h1>
        <h2> {journalShown ? journalShown.emotion : null}</h2>
        <h2>{journalShown ? journalShown.date : 'No date :('}</h2>
        <span className={styles.closeIcon} onClick={closeView}>
          <i className="fa-solid fa-x"></i>
        </span>
        <p className={styles.content}>
          {journalShown ? journalShown.content : 'No content :('}
        </p>
        <img src={journalShown ? journalShown.url : null} alt="" />
        <span className={styles.deleteIcon} onClick={onDeleteJounal}>
          <i class="fa-solid fa-trash"></i>
        </span>
      </div>
    </section>
  );
};
export default JournalView;
