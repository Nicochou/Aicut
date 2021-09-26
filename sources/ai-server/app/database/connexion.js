const mysql = require('mysql');
const config = require("../config/dbconfig.json");
const logger = require("../../config/logger");
const { exit } = require('process');
const db = {};

const connection = mysql.createConnection({
    host: config.development.host,
    user: config.development.username,
    password: config.development.password,
    database: config.development.database
  });
// We connect the database
connection.connect((err) => {
    if (err) {
        logger.log('error', 'Error connecting to Db ', { message: err });
        exit();
    };
    logger.log('info', 'DB Connected!');
});  

module.exports = db;