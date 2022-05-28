// const fs = require('fs');
const { readFile, writeFile, write } = require('fs');
const { resourceLimits } = require('worker_threads');

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
        writeFile('./content/result-async.txt', `Here is the result: 
        ${first}, 
        ${second}
        This is the third line`, (err, res) => {
            if(err){
                console.log(err);
                return
            }
            console.log(res); //Undefined since writeFile doesn't return anything
        })
    })
})