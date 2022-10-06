import React from 'react';
import { useRef } from 'react';
import styles from './journalEditor.module.css';

const JournalEditor = ({ display, uploadeData }) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const dateRef = useRef();

  const saveJounal = (e) => {
    e.preventDefault();

    // Get input values using Ref
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const date = dateRef.current.value;

    uploadeData('12312', date, title, content, 'www.naver.com');

    console.log(title, content, date);
  };
  const displayType =
    display === 'close'
      ? styles.editorContainerClose
      : styles.editorContainerOpen;
  return (
    <section className={displayType}>
      <form action="submit">
        <input ref={dateRef} type="date" name="date" />
        <input
          type="text"
          ref={titleRef}
          name="title"
          placeholder="Today is.."
        />
        <textarea
          name="content"
          cols="30"
          rows="20"
          ref={contentRef}
        ></textarea>
        <input type="file" name="image" accept="image/png, image/jpeg" />
        <button onClick={saveJounal}>Save</button>
      </form>
    </section>
  );
};

export default JournalEditor;
