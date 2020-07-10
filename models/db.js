const Sequelize = require("sequelize");

// Conexão com base de dados mysql
const sequelize = new Sequelize("postapp", "root", "password", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
};
