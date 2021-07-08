const tmi = require('tmi.js');
const logger = require('../../../config/logger');

// We instance the Datas 
var tab = new Array();
var t1;
var t2;
var nbMessage;
var nbMessage1;
var nbMessage2;
var nbMessageSec;
var nbMessageSec1 = 0;

module.exports = function (Username){
// Bot message creation
const chatBot = new tmi.Client({
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
chatBot
    .connect()
    .catch(console.error);

// On each message in the Live Stream
chatBot
    .on('message', (channel, tags, message, self) => {
        console.log(self, channel);
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
    t2 = t1 - t2;
    console.log(colors.bgWhite.magenta(t1));
    console.log(colors.bgWhite.magenta(t2));
        nbMessage = nbMessage1 - nbMessage2;
        nbMessageSec = nbMessage / 30;
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
                logger.log('error', 'Error executing the ML Script ', { message: err });
            }
            else{
                logger.log('error', 'Error executing the ML Script ', { message: err });
            }
        });

    t2 = t1;
    nbMessage2 = nbMessage1;
});
}

