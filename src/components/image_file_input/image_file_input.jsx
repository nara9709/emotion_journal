import { async } from '@firebase/util';
import React from 'react';
import { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, onFileChange, name }) => {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    event.preventDefault();
    const uploaded = await imageUploader.upload(event.target.files[0]);

    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
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
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'Image Upload 📂'}
      </button>
    </div>
  );
};
export default ImageFileInput;
