import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import styles from './journalEditor.module.css';

const JournalEditor = ({ display, uploadeData, FileInput, wirteData }) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const dateRef = useRef();
  const [url, setUrl] = useState(null);
  const [imageName, setName] = useState(null);

  const saveJounal = (e) => {
    e.preventDefault();

    // Get input values using Ref
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const date = dateRef.current.value;
    const emotion = null;

    let journal = {
      key: Date.now(),
      title: title,
      content: content,
      date: date,
      url: url,
      imageName: imageName,
      emotion: emotion,
    };

    wirteData(journal);

    uploadeData(journal);
  };
  const displayType =
    display === 'close'
      ? styles.editorContainerClose
      : styles.editorContainerOpen;

  const onFileChange = (file) => {
    const url = file.url;
    const imageName = file.name;

    setName(imageName);
    setUrl(url);
  };

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

        <FileInput onFileChange={onFileChange} />

        <button onClick={saveJounal}>Save</button>
      </form>
    </section>
  );
};

export default JournalEditor;
