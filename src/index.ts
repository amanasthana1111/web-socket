import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });


wss.on("connection", (socket) => {
//   setInterval(() => {
//     socket.send("hello");
//   }, 500);/
socket.on("message",(e)=>{
    
if(e.toString() === "ping"){
    socket.send("pong")
}
})
});

// fronend link
// ws://localhost:8080
// ws.onmessage = (e)=>{
// alert (else.data)
// }