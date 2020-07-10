// BOAS PRÁTICAS: Módulos no singular e com letra maiuscula no inicio

const db = require("./db");

const Post = db.sequelize.define("postagens", {
  titulo: {
    type: db.Sequelize.STRING
  },
  conteudo: {
    type: db.Sequelize.TEXT
  }
});

// Post.sync({ force: true }); //Recria a tabela. Manter comentado

module.exports = Post;
