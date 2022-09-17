import styles from './login.module.css';

import { React, useRef } from 'react';

const Login = (props) => {
  // Dispatch useRef to email and password to get values
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Call sign up function
  const onSignIn = (e) => {
    e.preventDefault();
    props.onSignIn(emailRef.current.value, passwordRef.current.value);
  };

  const onSginInGit = () => {
    props.onGithub();
  };

  return (
    <div>
      <div>
        Record <br /> Your day <br /> With <br /> Emotion
      </div>
      <h1>Sign in</h1>
      <span>
        <i className="fa-brands fa-google"></i>
      </span>
      <span onClick={onSginInGit}>
        <i className="fa-brands fa-github"></i>
      </span>
      <form action="">
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={onSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
