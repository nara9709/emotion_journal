import React from 'react';
import styles from './journalEditor.module.css';

const JournalEditor = ({ display }) => {
  const displayType =
    display === 'close'
      ? styles.editorContainerClose
      : styles.editorContainerOpen;
  return (
    <section className={displayType}>
      <h1>Journal Editor page</h1>
    </section>
  );
};

export default JournalEditor;
