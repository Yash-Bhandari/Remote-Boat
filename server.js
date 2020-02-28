const express = require('express');
const path = require('path');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io').listen(http);

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

io.on('connection', socket => {
    console.log('a user connected');
    socket.on('disconnect', () => console.log('user disconnected'));
});

http.listen('5000', () => console.log('listening on *:5000'));