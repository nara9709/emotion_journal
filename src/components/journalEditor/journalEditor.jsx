import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Modal from '../modal/modal';
import styles from './journalEditor.module.css';

const JournalEditor = ({
  toggleEditor,
  FileInput,
  wirteData,
  toBeEdited,
  setToBeEdited,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const titleRef = useRef();
  const contentRef = useRef();
  const dateRef = useRef();
  const emoRef = useRef();
  const [url, setUrl] = useState(null);
  const [imageName, setName] = useState(null);

  const saveJounal = (e) => {
    e.preventDefault();

    // Get input values using Ref
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const date = dateRef.current.value;
    const emotion = emoRef.current.value;

    let journal = {
      key: toBeEdited ? toBeEdited.key : Date.now(),
      title: title,
      content: content,
      date: date,
      url: toBeEdited && toBeEdited.url ? toBeEdited.url : url,
      imageName: imageName,
      emotion: emotion,
    };

    // If a user does not type the title or content, show an alert modal window
    if (journal.title === '' || journal.content === '') {
      showModal();
    } else {
      wirteData(journal);
      // Close editor window
      toggleEditor();
    }

    // If use toBeEdited object, clearn toBeEdited state
    setToBeEdited(null);
  };

  const onFileChange = (file) => {
    const url = file.url;
    const imageName = file.name;

    setName(imageName);
    setUrl(url);
  };

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <section className={styles.editorContainer}>
      <form action="submit">
        <input
          ref={dateRef}
          type="date"
          className={styles.dateInput}
          name="date"
          defaultValue={toBeEdited && toBeEdited.date}
        />
        <input
          type="text"
          ref={titleRef}
          className={styles.titleInput}
          name="title"
          placeholder="Today is.."
          defaultValue={toBeEdited && toBeEdited.title}
        />
        <div className={styles.emotionContainer}>
          <label className={styles.emotionLabel} for="emotions">
            How do you feel today?
          </label>

          <select
            ref={emoRef}
            name="emotions"
            id="emotion"
            className={styles.eomtions}
            defaultValue={toBeEdited && toBeEdited.emotion}
          >
            <option value="happy">😁</option>
            <option value="sad">😢</option>
            <option value="love">🥰</option>
            <option value="sullen">😞</option>
            <option value="nomal">😐</option>
            <option value="upset">😡</option>
            <option value="weary">😩</option>
          </select>
        </div>
        <textarea
          name="content"
          cols="30"
          rows="20"
          ref={contentRef}
          defaultValue={toBeEdited && toBeEdited.content}
        ></textarea>
        <div className={styles.btnContainer}>
          <button onClick={saveJounal} className={styles.saveBtn}>
            Save
          </button>
          <FileInput onFileChange={onFileChange} />
        </div>
      </form>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} messageReq="editor"></Modal>
      )}
    </section>
  );
};

export default JournalEditor;
