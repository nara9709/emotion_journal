import styles from './login.module.css';

import { React, useRef } from 'react';

const Login = ({ authService }) => {
  // Dispatch useRef to email and password to get values
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Call sign up function
  const onSignIn = (e) => {
    e.preventDefault();
    authService
      .loginWithEmail(emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };

  const onSginInWithGoogle = () => {
    authService
      .loginWithAuth('Google')
      .then((result) => {
        // The signed-in user info.
        console.log(result);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
  };

  const onSginInWithGithub = () => {
    authService
      .loginWithAuth('Github')
      .then((result) => {
        // The signed-in user info.
        console.log(result);
        // ...
      })
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
          <span className={styles.icon} onClick={onSginInWithGoogle}>
            <i className="fa-brands fa-google"></i>
          </span>
          <span className={styles.icon} onClick={onSginInWithGithub}>
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
          <button className={styles.signinBtn} type="submit" onClick={onSignIn}>
            Sign In
          </button>
        </form>
      </section>
    </section>
  );
};

export default Login;
