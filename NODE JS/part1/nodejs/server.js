const http = require('http');
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('content-type', 'text/plain');
    response.write('Hello from Node JS Server');
    response.end();
})

server.listen(3000, () => {
    console.log(`Server running at http://localhost/3000`);
});