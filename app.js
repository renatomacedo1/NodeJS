const express = require("express"); //Como instalou com NPM e está na pasta moduloes, basta colocar o nome do módulo e não o diretorio completo

const app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/html/index.html"); //Rota que envia ficheiro html
});

app.get("/sobre", function(req, res) {
  res.sendFile(__dirname + "/html/sobre.html"); //Rota
});

app.get("/blog", function(req, res) {
  res.send("Welcome to my blog"); //Rota
});

app.get("/ola/:cargo/:nome", function(req, res) {
  res.send("<h1>Ola " + req.params.cargo + " " + req.params.nome + "</h1>"); //Rota com parametros. Tentar http://localhost:8081/ola/engenheiro/renato
});

app.listen(8081, function() {
  console.log("Server running on url http://localhost:8081");
}); //Liga o servidor na porta. Tem de ser a última do código
//localhost:8081
