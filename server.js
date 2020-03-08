const express = require('express');
const path = require('path');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io').listen(http);

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));


io.of('/boat').on('connection', socket => {
    console.log('joined boat');
    socket.on('boat_data', boat_data => {
        console.log('boat sent:' + boat_data);
        io.of('/clients').emit('boat_data', boat_data);
    })
});

io.of('/clients').on('connection', socket => {
    console.log('joined clients');
    socket.on('client_data', client_data => {
        console.log('client sent ' + client_data)
        io.of('/boat').emit('client_data', client_data);
    })

})

http.listen('5001', () => console.log('listening on *:5001'));