import React from 'react';
import { useRef } from 'react';
import styles from './journalEditor.module.css';

const JournalEditor = ({ display, uploadeData, imageService }) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const dateRef = useRef();

  // Uplade Image to Cloudinary
  const uploadeImage = (imagePath) => {
    imageService.uploadImage();
  };

  const saveJounal = (e) => {
    e.preventDefault();

    // Save image file
    uploadeImage('src/image/sample_image.jpeg');

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
        <input type="file" name="image" accept="image/png, image/jpeg" />
        <button onClick={saveJounal}>Save</button>
      </form>
    </section>
  );
};

export default JournalEditor;
