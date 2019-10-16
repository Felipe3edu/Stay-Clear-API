//configuração do banco 

module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username : 'root',
    password : '',
    database: 'stay-clear',
    define : {
        timestamps: true, //created_at e updated_at
        underscored: true,//Altera padrão das tabelas para Underscored
        underscoredAll: true //Altera padrão das colunas para Underscored
    }
}