const fs = require('fs').promises;

//Version 1 using Promises

function readMyFile(resolve, reject) {
  fs.readFile('example.txt', 'utf8')
    .then(data => resolve(data))
    .catch(err => reject(err));
}
new Promise(readMyFile)
  .then(data => console.log('File contents:\n', data))
  .catch(err => console.error('Error reading file:', err));

console.log('Program started. Reading file...');

//Version 2 using async/await

async function readFile() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log('File contents:\n', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}
readFile();
