var PORT = 9993;
var HOST = 'localhost';
var dgram = require('dgram');
var client = dgram.createSocket('udp4');
var fs = require("fs");

fs.readFile('text.txt', function (err,data) {
  if (err) {
    return console.log(err);
  }
  client.send(data, 0, data.length, PORT, HOST, function(err, bytes) {
    if (err) 
        throw err;
    console.log('UDP file sent to ' + HOST +':'+ PORT);
    console.log('File size: ' + data.length);
  });
});