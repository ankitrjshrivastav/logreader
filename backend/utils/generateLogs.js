const fs = require('fs');

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random log message
function generateLogMessage() {
  const logLevels = ['INFO', 'WARN', 'ERROR'];
  const logMessages = [
    'Something happened',
    'An error occurred',
    'A warning was issued',
    'A successful operation was performed',
    'A request was received',
    'A response was sent',
    'A file was uploaded',
    'A file was downloaded',
  ];
  const randomLevel = logLevels[getRandomInt(0, logLevels.length - 1)];
  const randomMessage = logMessages[getRandomInt(0, logMessages.length - 1)];
  const timestamp = new Date().toISOString();
  const separator = ';';
  return `${timestamp} [${randomLevel}] ${randomMessage}${separator}`;
}

// Function to write a random log message to a file
const writeLogToFile = (filename) => {
  const logMessage = generateLogMessage();
  fs.appendFile(filename, logMessage + '\n', (err) => {
    if (err) throw err;
    // console.log(`Added log message to ${filename}: ${logMessage}`);
  });
};

module.exports = writeLogToFile;
