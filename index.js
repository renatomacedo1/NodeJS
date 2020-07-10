const express = require("express"); //Como instalou com NPM e está na pasta moduloes, basta colocar o nome do módulo e não o diretorio completo
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post");
// Config
// Template Engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  Post.findAll({ order: [["id", "DESC"]] }).then(function(posts) {
    res.render("home", { posts: posts });
  });
});

app.get("/cad", function(req, res) {
  res.render("formulario");
});

app.post("/add", function(req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  })
    .then(function() {
      //res.send("Post criado com sucesso ");
      res.redirect("/");
    })
    .catch(function(erro) {
      res.send("Could not POST. Error: " + erro);
    });
});

app.get("/delete/:id", function(req, res) {
  Post.destroy({ where: { id: req.params.id } })
    .then(function() {
      res.send("Post deleted successfully");
    })
    .catch(function(erro) {
      res.send("Post does not exist: " + erro);
    });
});

app.listen(8081, function() {
  console.log("Server running on url http://localhost:8081");
}); //Liga o servidor na porta. Tem de ser a última do código
//localhost:8081
