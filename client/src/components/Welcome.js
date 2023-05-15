import React from 'react';
import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={styles.container}>
      <h1>
        <span>Welcome to my</span> log-reader
      </h1>
    </div>
  );
};

export default Welcome;
