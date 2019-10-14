var PORT = 25338;
var HOST = 'localhost';
var dgram = require('dgram');
var client = dgram.createSocket('udp4');
var fs = require("fs");

var file = fs.createWriteStream('download.txt');

client.on("message", msg=>{
  console.log(msg)
  file.write(msg)
})

client.bind(PORT)