import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from './service/auth';
import ImageService from './service/cloudinary';

const authService = new AuthService();
const imageService = new ImageService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} imageService={imageService} />
  </React.StrictMode>,
  document.getElementById('root')
);
