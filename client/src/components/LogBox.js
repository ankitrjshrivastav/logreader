import React, { useEffect, useRef } from 'react';
import styles from './LogBox.module.css';

const LogBox = ({ logs = [] }) => {
  const conatinerRef = useRef(null);

  const scrollingBottom = () => {
    console.log('dcasdcacsadcda');
    const e = conatinerRef;
    e.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'start',
    });
  };

  useEffect(() => {
    scrollingBottom();
  }, [logs]);

  return (
    <div className={styles.container}>
      {logs &&
        logs.map((log) => {
          return <p key={log}>{log}</p>;
        })}
      <div ref={conatinerRef}></div>
    </div>
  );
};

export default LogBox;
