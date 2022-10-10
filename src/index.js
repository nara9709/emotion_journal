import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from './service/auth';
import CloudinaryUploadWidget from './service/cloudinary';

const authService = new AuthService();
const cloudinaryUploadWidget = new CloudinaryUploadWidget();

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      cloudinaryUploadWidget={cloudinaryUploadWidget}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
