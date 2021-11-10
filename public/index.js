console.log("hello"); 
const socket = io();

socket.on("testing",(value)=>{
    socket.emit("user",Math.random());
});

socket.on("user",(value)=>{
    console.log(value); 
})