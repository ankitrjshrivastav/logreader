import io from 'socket.io-client';

// const SERVER = `${window.location.hostname}:8000`;
const SERVER = `https://logreader-l06l.onrender.com`;
let socket = null;
const logsLength = 50;

const connectWithSocketIOServer = (setMySocketId) => {
  socket = io(SERVER);

  socket.on('connect', () => {
    console.log('successfully connected with socket io server');
    console.log(socket.id);
    setMySocketId(socket.id);
  });
};

export const socketSetup = (setMySocketId, setLogs) => {
  connectWithSocketIOServer(setMySocketId);
  socket.on('fileChange', (data) => {
    const currLogs = data.split(';');
    // console.log('yeh dikhao: ', currLogs);
    setLogs((prev) => {
      if (prev.length === logsLength) {
        return [currLogs[0]];
      } else {
        return [...prev, currLogs[0]];
      }
    });
  });
};
