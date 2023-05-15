import React, { useContext } from 'react';
import { SocketContext } from './contexts/SocketContext';
import Welcome from './components/Welcome';
import LogBox from './components/LogBox';

function App() {
  const { mySocketId, logs, isLoading } = useContext(SocketContext);

  return (
    <div className="App">
      {isLoading ? (
        <Welcome />
      ) : (
        <div className="contentContainer">
          <p className="title">My Socket Id: {mySocketId}</p>
          <LogBox logs={logs} />
        </div>
      )}
    </div>
  );
}

export default App;
