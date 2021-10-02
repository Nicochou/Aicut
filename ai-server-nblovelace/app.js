// We set up the includes
require('dotenv').config();
const PythonShell = require('python-shell').PythonShell;
const colors = require('colors/safe');
const express = require('express');
const spawn = require('child_process').spawn;
const app = express();
const { count } = require('console');
const process = require('process');
// We instance the logs
const logger = require('./config/logger.js');
logger.log('info', 'Script launched', { message: new Date + ' ------------------------------------------ ' });

// We set up the port & database
const db = require("./app/database/connexion.js");
  
// We get the first argument
var Username = process.argv.slice(2);
var Token = process.argv.slice(3);
Token = Token[0];
Username = Username[0];
logger.log('info', 'Arguments', { message: 'UserId receipt :' + Username });

//log
// Bot message creation
require('./app/bots/chatBot/chatbot.js')(Username, Token);
//require('./app/database/init_machine_learning')(Username);
//require('./app/database/inte_machine_learning')(Username);
//require('./app/database/recup_machine_learning')(Username);
const port = process.env.port || 8080;
app.listen(port, () => {
    logger.log('info', { message: 'Server is running on port ' + port});
  });