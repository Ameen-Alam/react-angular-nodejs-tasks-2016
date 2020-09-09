/* HTTP Server for browser */

// const http = require('http');
// // respones display browser
// const server = http.createServer((request, response) => {
//     if (request.url == "/") {
//         response.statusCode = 200
//         response.setHeader('content-type', 'text/html')
//         response.write("<h2>Hello from nodejs server</h2>")
//     } else if (request.url == "/hello") {
//         response.statusCode = 200
//         response.setHeader('content-type', 'text/html')
//         response.write("<h2> Hello  Routes </h2>")
//     }
//     else {
//         response.statusCode = 404
//         response.write("Error fetching data")

//     }
//     response.end();
// })


// server.listen(3000, () => {
//     console.log("Server running on http://localhost:3000")
// })



/* Sync or Async File  */



// const fs = require('fs')

/* Assync File  */

// fs.readFile(__dirname+'/read.txt', 'utf8', (err, res) => {
//     if (err) throw err;
//     console.log(res.toString());
// })

/* Sync File */
// try {
//     const data = fs.readFileSync(__dirname + '/read.txt', 'utf8')
//     console.log(data.toString());
// } catch (e) {
//     console.log(e)
// }

/* File Deleted */

// fs.unlink(__dirname + '/read.txt', (err, res) => {
//     if(err){
//         console.log(err.code);
//         return;
//     } 
//     console.log('File Deleted Succesfully!'+ res)
// })

// const calc = require('./calculate')
// calc.calculate.add(5, 2);






const events = require("events")
const event = new events.EventEmitter();

event.on('eTrigger', (e, s) => console.log("Hello from eTrigger!!!! " + e + " " + s))
event.emit('eTrigger', 'Parameter', 'Ameen')