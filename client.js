let net = require("net");
let fs = require("fs");
let path = require("path");

var client = new net.Socket();
let file = fs.createWriteStream(path.join(__dirname, "/client.txt"));
client.connect(1337, "192.168.10.31", () => {
  console.log("connected");
});

client.on("error", function(e) {
  console.error(e);
});

client.on("data", data => {
  file.write(data);
  client.destroy();
});

client.on("close", () => {
  console.log("connection close");
});
