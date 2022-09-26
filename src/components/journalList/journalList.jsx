import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './journalList.module.css';

const JournalList = ({ toggleEditor, display }) => {
  const state = useLocation().state;
  const userId = state.userId;

  const displayType =
    display === 'full' ? styles.listContainerFull : styles.listContainerHalf;

  const openEditor = () => {
    toggleEditor();
  };

  return (
    <section className={displayType}>
      <h1> JoirnalList page</h1>
      <button onClick={openEditor}>Edit</button>
    </section>
  );
};

export default JournalList;
