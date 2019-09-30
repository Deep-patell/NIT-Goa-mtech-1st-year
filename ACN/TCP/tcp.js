let net = require("net");
let path = require("path");
let fs = require("fs");

let server = net.createServer(function(socket) {
  //socket.write("Hello");
  const file = fs.readFileSync(path.join(__dirname, "/file.txt"));
  socket.write(file);
});

server.listen(9996, "127.0.0.1");
