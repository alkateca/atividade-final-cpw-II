const Sequelize = require("sequelize");
const connection = require("./database");
// define o modelo
const Pergunta = connection.define("pergunta",{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    },
});
// passa os models para o banco 
Pergunta.sync({force: false}).then(() => {});
module.exports = Pergunta;