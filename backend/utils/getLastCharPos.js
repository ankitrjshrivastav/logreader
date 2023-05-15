const fs = require('fs');

const getLastCharPos = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) {
        reject(err);
      } else {
        resolve(stats.size - 1);
      }
    });
  });
};

module.exports = getLastCharPos;
