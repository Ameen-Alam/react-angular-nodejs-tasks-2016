var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function (rq, res) {
    res.sendFile(__dirname + '/index.html')
})
io.on('connection', function (socket) {
    socket.on('chat', function (msg) {
        io.emit('chat', msg);
    });
    socket.on('disconnect', function () {
        console.log("user is disconnected");
    })
});

http.listen(3000, function () {
    console.log("Listening on localhost://3000")
})