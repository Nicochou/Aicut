// We set up the includes
require('dotenv').config();
const mysql = require('mysql');
const PythonShell = require('python-shell').PythonShell;
const tmi = require('tmi.js');
const colors = require('colors/safe');
const express = require('express');
const spawn = require('child_process').spawn;
const app = express();
const { count } = require('console');
const { exit } = require('process');
// We instance the logs
const logger = require('./config/logger.js');
logger.log('info', 'Script launched', { message: new Date + ' ------------------------------------------ ' });
/*
* Exemple :
* logger.log('error', 'hello', { message: 'world' });
*/

// We instance the Datas 
var tab = new Array();
var t1;
var t2;
var nbMessage;
var nbMessage1;
var nbMessage2;
var nbMessageSec;
var nbMessageSec1 = 0;
// We set up the port
const port = process.env.port || 8080;
// We set up the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aicutdb_development'
  });
// We connect the database
connection.connect((err) => {
    if (err) {
        logger.log('error', 'Error connecting to Db ', { message: err });
        exit();
    };
    console.log(colors.bgRed.white('DB Connected!'));
});  
  
// We get the first argument
var Username = process.argv.slice(2);
Username = Username[0];
console.log(colors.bgGreen.magenta('This is the Username argument -> '+ Username));
logger.log('info', 'Arguments', { message: 'UserId receipt :' + Username });

// Bot message creation
const client = new tmi.Client({
    options: {
        debug: true,
        messagesLogLevel: "info"
    },
    connection: {
        reconnect: true,
        secure: true
    },
    // Bot indentity
    identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_PASSWORD
    },
    // Live stream to inspect
    channels: [Username]
});
// We connect the bot
client.connect().catch(console.error);

// On each message in the Live Stream
client.on('message', (channel, tags, message, self) => {
    if (self) return;
    t1 = Date.now()
    console.log(colors.bgCyan.red(message));
	console.log(colors.bgCyan.red(tags));
	// We add the message to the an array
    tab.push(message);
	console.log("The number of messages ->" + colors.bgCyan.green(tab.length));
	// We set the Messages variables
    nbMessage1 = tab.length;
    nbMessage2 = tab.length;
    /*if (message.toLowerCase() === '!hello') {
        client.say(channel, `@${tags.username}, heya!`);
    }*/
	// We set the second time variable
    t2 = t1 - t2;
    console.log(colors.bgWhite.magenta(t1));
    console.log(colors.bgWhite.magenta(t2));
        nbMessage = nbMessage1 - nbMessage2;
        nbMessageSec = nbMessage / 30;
        // var dataReceive;
        // // spawn new child process to call the python script
        // const python = spawn('python', ['algorithme.py','449300','4000','6000','60',nbMessageSec,'happy',nbMessageSec1,'9000',t2]);
        // // collect data from script
        // python.stdout.on('data', function (data) {
        // 	console.log('Pipe data from python script ...');
        // 	console.log('=============================OK=======================');
        // 	dataReceive = data.toString();
        // });
        // // in close event we are sure that stream from child process is closed
        // python.on('close', (code) => {
        // 	console.log(`child process close all stdio with code ${code}`);
        // });
        nbMessageSec1 = nbMessageSec
		console.log(colors.bgMagenta.blue(nbMessage));
		console.log(colors.bgMagenta.blue(nbMessageSec1));

        var options = {
            mode: 'text',
            pythonOptions: ['-u'],
            scriptPath: './',
            args: ['2554','532','874']
        };

        PythonShell.run('algorithme.py', options, function(err, results) {
            if (err){
                logger.log('error', 'Error executing the ML Script ', { message: err });
            };
            // If the machine learning detect smthing
            if(results[0] == "True"){
                console.log(colors.bgRed.white('Strong moment detected, Cut launched'));
            }
            else{
                console.log(colors.bgRed.white('No strong moment detected'));
            }
        });

    t2 = t1;
    nbMessage2 = nbMessage1;
});