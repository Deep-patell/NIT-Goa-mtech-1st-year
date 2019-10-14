var PORT = 25338;
var HOST = 'localhost';
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var fs = require("fs");
var path = require("path")
// server.bind(PORT, HOST);

server.on("error",error =>{
  console.log(error)
})

const file = fs.readFileSync(path.join(__dirname,"/text.txt"))

server.send(file,PORT,HOST)

server.on("close",()=>{
  console.log("Closed")
})