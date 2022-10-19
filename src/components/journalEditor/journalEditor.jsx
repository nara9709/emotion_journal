import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Modal from '../modal/modal';
import styles from './journalEditor.module.css';

const JournalEditor = ({
  display,
  setOnEditor,
  uploadeData,
  FileInput,
  wirteData,
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

    console.log(emotion);

    let journal = {
      key: Date.now(),
      title: title,
      content: content,
      date: date,
      url: url,
      imageName: imageName,
      emotion: emotion,
    };

    if (journal.title === '' || journal.content === '') {
      showModal();
    } else {
      wirteData(journal);
      uploadeData(journal);
      // Close editor window
      setOnEditor(false);
    }
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

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <section className={displayType}>
        <form action="submit">
          <input ref={dateRef} type="date" name="date" />
          <input
            type="text"
            ref={titleRef}
            name="title"
            placeholder="Today is.."
          />
          <div>
            <label className={styles.emotionLabel} for="cars">
              How do you feel today?
            </label>

            <select
              ref={emoRef}
              name="emotions"
              id="emotion"
              className={styles.eomtions}
            >
              <option value="happy">😊</option>
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
          ></textarea>

          <FileInput onFileChange={onFileChange} />

          <button onClick={saveJounal}>Save</button>
        </form>
      </section>
      {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>}
    </>
  );
};

export default JournalEditor;
