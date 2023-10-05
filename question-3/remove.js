// remove.js
const fs = require('fs');
const path = require('path');

function removeLogFiles() {
  const dirPath = path.join(__dirname, 'Logs');;

  // Check if the Logs directory exists
  if (fs.existsSync(dirPath)) {
    // Read the contents of the Logs directory
    const files = fs.readdirSync(dirPath);

    // Remove all the files from the Logs directory
    for (const file of files) {
      const filePath = `${dirPath}/${file}`;
      fs.unlinkSync(filePath);
      console.log(`delete files...${file}`);
    }

    // Remove the Logs directory
    fs.rmdirSync(dirPath);
  }
}

module.exports = removeLogFiles;