const path = require("path");
const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const publicDirectoryPath = path.join(__dirname, "./public");
app.use(express.static(publicDirectoryPath));

io.on("connection",(socket)=>{

io.emit("testing","hello");

socket.on("message",(msg)=>{
    console.log(msg); 
});

socket.on("user",(msg)=>{
    socket.broadcast.emit("user",`${msg} got connected`);
})

socket.on('disconnect',()=>{
    io.emit("message","A user has left!");
})

});
 
server.listen(3004,()=>{
    console.log("server is up running at port - 3004"); 
})