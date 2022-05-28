// const fs = require('fs');
const { readFileSync, writeFileSync, read, write } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: 
${first}, 
${second}`); // Each call will replace the existing content

writeFileSync('./content/result-sync.txt', '\nThis is the third line', {flag:'a'}); // Appends to the file instead of replacing
