import React from 'react';
import { useRef } from 'react';

import styles from './filterEmotion.module.css';

const FilterEmotion = ({ filteringJournalByEmotion }) => {
  const emoRef = useRef();
  const filteringJournal = () => {
    filteringJournalByEmotion(emoRef.current.value);
  };
  return (
    <div>
      <p>Filter journals by</p>
      <select
        name="emotions"
        id="emotion"
        ref={emoRef}
        onChange={filteringJournal}
      >
        <option value="all" defaultValue>
          All
        </option>
        <option value="happy">😊</option>
        <option value="sad">😢</option>
        <option value="love">🥰</option>
        <option value="sullen">😞</option>
        <option value="nomal">😐</option>
        <option value="upset">😡</option>
        <option value="weary">😩</option>
      </select>
      <button type="button">Search</button>
    </div>
  );
};
export default FilterEmotion;
