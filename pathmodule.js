const path = require('path');

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'text.txt');
console.log(filePath)

console.log(path.basename(filePath));

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolutePath);

/* 
path.resolve() just does the following

from left to right-

concatenate the right most parameters with / directly with the root path to make an absolute path (check the examples)
and then concatenates anything without / as a directory
using sergey's example

path.resolve('/a', 'b', 'c');     returns    C:\a\b\c
path.resolve('/a', '/b', 'c');    returns    C:\b\c
path.resolve('/a', '/b', '/c');   returns    C:\c


While join simply concatenates every parameter from left to right whether they have / or not

path.join("/a", "b", "/c", "d")   simply returns   "\a\b\c\d"
*/