import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from './service/auth';

import ImageUploader from './service/imageUploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import JournalRepository from './service/journal_repository';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const journalRepository = new JournalRepository();

const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader}></ImageFileInput>
);

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      journalRepository={journalRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
