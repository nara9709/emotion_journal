import React from 'react';
import { useEffect } from 'react';
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

  let emotion = null;
  const makeEmotion = () => {
    switch (journalShown ? journalShown.emotion : emotion) {
      case 'happy':
        emotion = '😁';
        break;
      case 'sad':
        emotion = '😢';
        break;
      case 'love':
        emotion = '🥰';
        break;
      case 'sullen':
        emotion = '😞';
        break;
      case 'nomal':
        emotion = '😐';
        break;
      case 'upset':
        emotion = '😡';
        break;
      case 'weary':
        emotion = '😩';
        break;
      default:
        emotion = null;
    }
  };

  makeEmotion();

  return (
    <section className={displayType}>
      <div>
        <h1>{journalShown ? emotion : null}</h1>
        <h1>{journalShown ? journalShown.title : 'Title'}</h1>

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
