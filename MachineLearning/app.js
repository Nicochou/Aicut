// Includes 
require('dotenv').config();
const tmi = require('tmi.js');
const colors = require('colors/safe');
const express = require('express');
const spawn = require("child_process").spawn;
const app = express();
// Datas
var tab = new Array();
var t1;
var t2;
var nbMessage;
var nbMessage1;
var nbMessage2;
var nbMessageSec;
var nbMessageSec1 = 0;
// Port
const port = process.env.port || 8080;
// Bot creation
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
    channels: [process.env.TWITCH_CHANNEL]
});
// We connect the bot
client.connect().catch(console.error);

// On each message in the Live Stream
client.on('message', (channel, tags, message, self) => {
    if (self) return;
    t1 = Date.now()
    console.log(colors.bgCyan.red(message));
	console.log(colors.bgCyan.blue(tags));
	// We add the message to the an array
    tab.push(message);
	console.log(colors.bgCyan.green(tab.length));
	// We set the Messages variables
    nbMessage1 = tab.length;
    nbMessage2 = tab.length;
    /*if (message.toLowerCase() === '!hello') {
        client.say(channel, `@${tags.username}, heya!`);
    }*/
	// We set the second time variable
    t2 = t1 - t2;
    console.log(colors.bgCyan.magenta(t2));
    if (t2 >= 200) {
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

        const PythonShell = require('python-shell').PythonShell;

        var options = {
            mode: 'text',
            pythonPath: 'C:\Users\willi\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Python 3.7',
            pythonOptions: ['-u'],
            scriptPath: './',
            args: ['449300', '4000', '6000', '60', nbMessageSec, 'happy', nbMessageSec1, '9000', t2]
        };

        PythonShell.run('algorithme.py', options, function(err, results) {
            if (err)
                throw err;
            // Results is an array consisting of messages collected during execution
            console.log('results: %j', results);
        });

    }
    //app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    t2 = t1;
    nbMessage2 = nbMessage1;
});