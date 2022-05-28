const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        // console.log(req);
        res.end('Response from server');
    }

    if (req.url === '/about'){
        // console.log(req);
        res.end('Response from about page');
    }

    // For invalid urls
    res.end(`
        <h1> Oops! </h1>
        <p> Wrong page </p>
        <a href="/"> Back to home page</a>
    `)
    
})

server.listen(4000);