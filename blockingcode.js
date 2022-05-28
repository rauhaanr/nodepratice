const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        // console.log(req);
        return res.end('Home page')
    }

    if (req.url === '/about'){
        // console.log(req);
        // Blocking Code
        for (let i = 0; i < 1000; i++){
            for (let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`);
            }
        }
        return res.end('About')
    }

    // For invalid urls
    return res.end(`
        <h1> Oops! </h1>
        <p> Wrong page </p>
        <a href="/"> Back to home page</a>
    `)
    
})

server.listen(4000, () => {
    console.log('Server is listening on port 4000');
});