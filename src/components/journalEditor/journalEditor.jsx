import React from 'react';
import { useRef } from 'react';
import styles from './journalEditor.module.css';

const JournalEditor = ({ display, uploadeData, cloudinaryUploadWidget }) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const dateRef = useRef();

  // Uplade Image to Cloudinary
  const uploadeImage = () => {
    cloudinaryUploadWidget.onUpload();
  };

  const saveJounal = (e) => {
    e.preventDefault();

    // Get input values using Ref
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const date = dateRef.current.value;

    let journal = {
      key: Date.now(),
      title: title,
      content: content,
      date: date,
    };

    uploadeData(journal);

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
        <input
          type="button"
          name="image"
          value="Upload Image"
          onClick={uploadeImage}
        />
        <button onClick={saveJounal}>Save</button>
      </form>
    </section>
  );
};

export default JournalEditor;
