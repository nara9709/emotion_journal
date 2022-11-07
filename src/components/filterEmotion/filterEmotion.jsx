import React from 'react';
import { useRef } from 'react';

import styles from './filterEmotion.module.css';

const FilterEmotion = ({ filteringJournals }) => {
  const emoRef = useRef();
  const filtering = () => {
    filteringJournals(emoRef.current.value);
  };
  return (
    <div className={styles.container}>
      <span className={styles.title}>Filter journals by</span>
      <select
        className={styles.emotion}
        id="emotion"
        ref={emoRef}
        onChange={filtering}
      >
        <option value="all" defaultValue>
          All
        </option>
        <option value="happy">😁</option>
        <option value="sad">😢</option>
        <option value="love">🥰</option>
        <option value="sullen">😞</option>
        <option value="nomal">😐</option>
        <option value="upset">😡</option>
        <option value="weary">😩</option>
      </select>
    </div>
  );
};
export default FilterEmotion;
