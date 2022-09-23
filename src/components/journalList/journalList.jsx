import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './journalList.module.css';

const JournalList = (props) => {
  const state = useLocation().state;
  const userId = state.userId;
  console.log(userId);
  return <h1> JoirnalList page</h1>;
};

export default JournalList;
