// add.js
const fs = require('fs');

function createLogFiles() {
  // Create a Logs directory if it doesn't exist
  if (!fs.existsSync('Logs')) {
    fs.mkdirSync('Logs');
  }

  // Change the current working directory to the Logs directory
  process.chdir('Logs');

  const fileNames = [];

  // Create 10 log files and write some text into each file
  for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log(fileName);
    fileNames.push(fileName);
  }
}

module.exports = createLogFiles;