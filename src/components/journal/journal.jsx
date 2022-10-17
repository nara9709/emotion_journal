import React from 'react';
import { useEffect } from 'react';
import styles from './journal.module.css';

const Journal = ({ journal, onView, openView }) => {
  let month = null;
  let emotion = null;
  const year = journal.date.slice(0, 4);
  const monthOriginal = journal.date.slice(5, 7);
  const date = journal.date.slice(8, 10);

  //   Assign month text to month variable
  const calMonth = () => {
    switch (monthOriginal) {
      case '01':
        month = 'Jan';
        break;
      case '02':
        month = 'Feb';
        break;
      case '03':
        month = 'Mar';
        break;
      case '04':
        month = 'Apr';
        break;
      case '05':
        month = 'May';
        break;
      case '06':
        month = 'Jun';
        break;
      case '07':
        month = 'Jul';
        break;
      case '08':
        month = 'Aug';
        break;
      case '09':
        month = 'Sep';
        break;
      case '10':
        month = 'Oct';
        break;
      case '11':
        month = 'Nov';
        break;
      case '12':
        month = 'Deb';
        break;
      default:
        month = null;
    }
  };

  calMonth();

  const journalOpen = () => {
    onView(journal.key);
    openView();
  };

  return (
    <div className={styles.container} onClick={journalOpen}>
      <h3>
        {month} {date} {year}
      </h3>
      <h3 className={styles.title}>{journal.title}</h3>

      <p> {journal.emotion}</p>
    </div>
  );
};

export default Journal;
