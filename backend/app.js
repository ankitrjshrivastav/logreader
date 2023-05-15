const express = require('express');
const http = require('http');
const cors = require('cors');
const fs = require('fs');
const writeLogToFile = require('./utils/generateLogs');
const getLastCharPos = require('./utils/getLastCharPos');

const PORT = 8000;
const logFilePath = 'logfile.txt';

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('Client connected');

  getLastCharPos(logFilePath)
    .then((position) => {
      const fileWatcher = fs.watch('logfile.txt', (eventType, filename) => {
        // console.log(`File ${filename} changed`);
        const fileStream = fs.createReadStream('logfile.txt', {
          start: position,
        });
        fileStream.on('data', (data) => {
          socket.emit('fileChange', data.toString());
          position += data.length;
        });
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected');
        fileWatcher.close();
      });
    })
    .catch((err) => {
      console.log('last char read error: ', err);
    });
});

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
  setInterval(() => {
    writeLogToFile(logFilePath);
  }, 3600*1000);
});