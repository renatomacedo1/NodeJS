var http = require("http");

http
  .createServer(function(req, res) {
    res.end("Olá Mundo! Bem vindo!");
  })
  .listen(8081);

console.log("Server running");
