// const fs = require('fs');
const { readFile, writeFile, write } = require('fs');
const { resourceLimits } = require('worker_threads');

console.log('start');
readFile('./content/first.txt', 'utf-8', (err, res) => {
    if(err){
        console.log(err);
        return
    }
    const first = res;
    readFile('./content/second.txt', 'utf-8', (err, res) => {
        if(err){
            console.log(err);
            return
        }
        const second = res;
        writeFile('./content/result-async2.txt', `Here is the result: 
        ${first}, 
        ${second}
        This is the third line`, (err, res) => {
            if(err){
                console.log(err);
                return
            }
            console.log('Done with this task'); //Undefined since writeFile doesn't return anything
        })
    })
})

console.log('Starting the next task')

// The program jumps to starting another task right way 
// (without having to wait for the second task to finish).
// In case of multiple users, no user would be blocked