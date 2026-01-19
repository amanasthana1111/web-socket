import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

//event handler
wss.on("connection", (socket) => {
//   setInterval(() => {
//     socket.send("hello");
//   }, 500);/
socket.on("message",(e)=>{
    // console.log(e.toString())
    // socket.send("hello")
})
});

// fronend link
// ws://localhost:8080
// ws.onmessage = (e)=>{
// alert (else.data)
// }