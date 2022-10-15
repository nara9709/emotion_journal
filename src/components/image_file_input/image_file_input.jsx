import { async } from '@firebase/util';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, onFileChange, name }) => {
  const [loading, setLoading] = useState(false);
  const [hasFile, setHasFile] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    // Start loading spinner
    setLoading(true);

    event.preventDefault();

    const uploaded = await imageUploader.upload(event.target.files[0]);

    // End loading spinner
    setLoading(false);

    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
    setHasFile(uploaded.original_filename);
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />

      {hasFile && <p>{hasFile}</p>}
      {!loading && (
        <button className={styles.button} onClick={onButtonClick}>
          {name || 'Image Upload 📂'}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};
export default ImageFileInput;
