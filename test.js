//Como se conectar ao mysql com o sequelize
//Apenas exemplo. Não faz parte do projeto

const Sequelize = require("sequelize");
const sequelize = new Sequelize("sistemaDeCadastro", "root", "password", {
  host: "localhost",
  dialect: "mysql"
});

sequelize
  .authenticate()
  .then(function() {
    console.log("Connected successfully");
  })
  .catch(function(erro) {
    console.log("Falha ao conectar: " + erro);
  });

// Model de Postagem
const Postagem = sequelize.define("postagens", {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
});

//Postagem.sync({ force: true }); // Cria a tabela. Basta usar uma vez

// Model de Usuários
