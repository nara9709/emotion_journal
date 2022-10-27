import React from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ authService, toggleEditor }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logOut().then(navigate('/'));
  };

  return (
    <section className={styles.headerContainer}>
      <h1 className={styles.title}>
        How was your day?
        <button onClick={onLogout} className={styles.btnLogout}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </h1>
    </section>
  );
};

export default Header;
