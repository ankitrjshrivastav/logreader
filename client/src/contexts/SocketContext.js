import React, { createContext, useState, useEffect } from 'react';
import { socketSetup } from '../utils/wss';

const SocketContext = createContext();

const ContextProvider = ({ children }) => {
  const [mySocketId, setMySocketId] = useState('');
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
      socketSetup(setMySocketId, setLogs);
    }, 2000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{
        mySocketId,
        logs,
        isLoading,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
