const mysql = require("mysql2/promise");
const config = require("./../config");

//Generamos la conexión 

const connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password,
});

const getConnection = () => {
    console.log("Conectando a la base de datos");
    return connection; 
};

//obtenemos la conexión y la retornamos
module.exports = { getConnection };