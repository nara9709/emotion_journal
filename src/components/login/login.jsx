import styles from './login.module.css';

import React from 'react';

const Login = (props) => {
  return (
    <div>
      <div>
        Record <br /> Your day <br /> With <br /> Emotion
      </div>
      <h1>Sign in</h1>
      <span>
        <i class="fa-brands fa-facebook"></i>
      </span>
      <span>
        <i class="fa-brands fa-github"></i>
      </span>
      <form action="">
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default Login;
