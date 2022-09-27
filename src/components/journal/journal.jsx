import React from 'react';
import styles from './journal.module.css';

const Journal = ({ journal }) => {
  const year = journal.date.slice(0, 4);
  const month = journal.date.slice(4, 6);
  const date = journal.date.slice(6, 8);

  return (
    <div className={styles.container}>
      <h3>
        {month} {date} {year}
      </h3>
      <h3 className={styles.title}>{journal.title}</h3>
      <p> {journal.emotion}</p>
    </div>
  );
};

export default Journal;
