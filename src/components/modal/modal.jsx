import styles from './modal.module.css';

import React from 'react';

const Modal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.modalWindow}>
      <h2 className={styles.modalTitle}>Alert </h2>
      <p>Please fill in all contents </p>
      <div className={styles.modalBtnContainer}>
        <button className={styles.modalBtn} onClick={closeModal}>
          Okay
        </button>
      </div>
    </div>
  );
};

export default Modal;
