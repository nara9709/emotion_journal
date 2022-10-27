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
    deleteJournal(journalShown);
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
    <section className={styles.viewContainer}>
      {/* Left section start */}
      <div className={styles.leftSection}>
        <div className={styles.headerContainer}>
          <span className={styles.date}>
            {journalShown ? journalShown.date : 'No date :('}
          </span>
          <span className={styles.emotion}>
            {journalShown ? emotion : null}
          </span>
        </div>

        <h1>{journalShown ? journalShown.title : 'Title'}</h1>

        <p className={styles.content}>
          {journalShown ? journalShown.content : 'No content :('}
        </p>
        <div className={styles.iconContainer}>
          <span className={styles.deleteIcon} onClick={onDeleteJounal}>
            <i class="fa-solid fa-trash"></i>
          </span>
          <span className={styles.editIcon}>
            <i className="fa-solid fa-pen-to-square"></i>
          </span>
        </div>
      </div>
      {/* Left section end */}

      {/* Right section start */}

      {journalShown && journalShown.url ? (
        <div className={styles.rightSection}>
          <div className={styles.imgContainer}>
            <img
              className={styles.image}
              src={journalShown ? journalShown.url : null}
              alt="journal_image"
            />
          </div>
        </div>
      ) : null}
      <div className={styles.closeIcon} onClick={closeView}>
        <i className="fa-solid fa-x"></i>
      </div>

      {/* Right section end */}
    </section>
  );
};
export default JournalView;
