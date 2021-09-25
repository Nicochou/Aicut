const mysql = require('mysql');
const config = require("../config/dbconfig.json");
const logger = require("../../config/logger");
const { exit } = require('process');
const db = {};
let connection ;
try {
    connection = mysql.createConnection({
        host: config.development.host,
        user: config.development.username,
        password: config.development.password,
        database: config.development.database,
        port : 8889
      });
      //console.log(connection);
} catch (error) {
    //console.log("err"+error);
}

// We connect the database
connection.connect((err) => {
    if (err) {
        console.log(err);
        logger.log('error', 'Error connecting to Db ', { message: err });
        exit();
    };
    logger.log('info', 'DB Connected!');
});  

module.exports = connection;