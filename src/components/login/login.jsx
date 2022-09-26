import styles from './login.module.css';

import { React, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = ({ authService, setIsLogIn }) => {
  // Dispatch useRef to email and password to get values
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  // If user is signed in already, go to main page and pass user uid
  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToJournalList(user.uid);
    });
  });

  //Go to main app page If user signed in
  const goToJournalList = (userUid) => {
    navigate('/journal-list', { state: { userId: userUid } });
  };

  // Call sign up function
  const onLgnIn = (e) => {
    e.preventDefault();
    authService
      .loginWithEmail(emailRef.current.value, passwordRef.current.value)
      .then((data) =>
        // The signed-in user info.
        goToJournalList(data.user.uid)
      )
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };

  const onLogInWithGoogle = () => {
    authService
      .loginWithAuth('Google')
      .then((data) =>
        // The signed-in user info.
        goToJournalList(data.user.uid)
      )
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
  };

  const onLogInWithGithub = () => {
    authService
      .loginWithAuth('Github')
      .then((data) =>
        // The signed-in user info.
        goToJournalList(data.user.uid)
      )
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
  };

  return (
    <section className={styles.container}>
      <section className={styles.sectionLeft}>
        <p className={styles.title}>
          Record <br /> Your day <br /> With <br /> Emotion
        </p>
      </section>
      <section className={styles.sectionRight}>
        <h1 className={styles.signin}>Sign in</h1>
        <div className={styles.iconContainer}>
          <span className={styles.icon} onClick={onLogInWithGoogle}>
            <i className="fa-brands fa-google"></i>
          </span>
          <span className={styles.icon} onClick={onLogInWithGithub}>
            <i className="fa-brands fa-github"></i>
          </span>
        </div>
        <form action="submit">
          <input
            className={styles.inputEmail}
            ref={emailRef}
            type="email"
            placeholder="Email"
          />
          <input
            className={styles.inputPwd}
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
          <button className={styles.signinBtn} type="submit" onClick={onLgnIn}>
            Log In
          </button>
        </form>
      </section>
    </section>
  );
};

export default Login;
