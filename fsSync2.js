const { readFileSync, writeFileSync, read, write } = require('fs');

console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

writeFileSync('./content/result-sync2.txt', `Here is the result: 
${first}, 
${second}`, {flag:'a'});

console.log('Done with the task');
console.log('Starting the next one');

// All code is run sequentially. If a user is doing both tasks in lines 4 and 5, 
// the code will not be available for
// any other user.