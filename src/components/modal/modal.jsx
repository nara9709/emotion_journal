import styles from './modal.module.css';
import React from 'react';

const Modal = ({ setModalOpen, messageReq }) => {
  let message = null;
  const assignModalMessage = () => {
    if (messageReq === 'editor') {
      message = 'Please fill out all contents';
    } else {
      message = `You can use a test account👏🏻\n ID: test@test.com\n PW: !!test `;
    }
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  assignModalMessage();

  return (
    <div className={styles.modalWindow}>
      <h2 className={styles.modalTitle}>Alert </h2>
      <p className={styles.message}>{message} </p>
      <div className={styles.modalBtnContainer}>
        <button className={styles.modalBtn} onClick={closeModal}>
          I Got it!
        </button>
      </div>
    </div>
  );
};

export default Modal;
