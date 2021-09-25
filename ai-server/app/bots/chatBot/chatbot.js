const tmi = require('tmi.js');
const logger = require('../../../config/logger');
const ml = require("../../database/machine_learning")
// We instance the Datas 
var tab = new Array()
var number_subscriber = 0;
var number_emot = 0 ;
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
        messagesLogLevel: "info",
        reconnectInterval:1,
        //maxReconnectInterval:300000,
       // reconnectDecay:4,
      maxReconnectAttempts:Infinity
    },
    connection: {
        reconnect: false,
        secure: true,
        cluster:'aws'
    },
    // Bot indentity
    identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_PASSWORD
    },
    // Live stream to inspect
    channels: [Username]
});
chatBot.connect();
// We connect the bot
chatBot.once("connected", function (address, port) {
    console.log(address);
    console.log(port);
    console.log("machine learning var"+JSON.stringify(ml));
    });

    var handleMsg = function(channel, tags, message, self) {
        console.log(channel);
          setTimeout( function() {
                      //console.log(message);
          console.log(tags);
          // We add the message to the an array
          tab.push(message);
        if(tags.subscriber){
          number_subscriber++;
        }
        if(tags.emotes){
          number_emot++;
        }
      
        console.log(number_subscriber);
        console.log(tags.subscriber);
          
          console.log("The number of messages ->" + tab.length);
          }, 5000);

        
        
      };
      
      chatBot.once('message', handleMsg );
// On each message in the Live Stream
 /*chatBot
    .on('message', (channel, tags, message, self) => {
        console.log(self, channel);
    if (self) return;
    t1 = Date.now()
    console.log(message);
	console.log(tags);
	// We add the message to the an array
    tab.push(message);
  if(tags.subscriber){
    number_subscriber++;
  }
  if(tags.emotes){
    number_emot++;
  }

  console.log(number_subscriber);
  console.log(tags.subscriber);
    
	console.log("The number of messages ->" + tab.length);

});*/
chatBot.on("disconnected", function (reason) {
  //  console.log("reason"+reason);
    chatBot.disconnect();
    });
}


/*chatBot        
    .on('disconnected', (reason) => {
    console.log(reason)
    if (reason === 'Login unsuccessful' || reason === 'Invalid NICK.' || reason === 'Connection closed.') {
      eventBus.$emit('loginfail')
    }
  })
*/

        /*PythonShell.run('algorithme.py', options, function(err, results) {
            if (err){
                logger.log('error', 'Error executing the ML Script ', { message: err });
            };
            // If the machine learning detect smthing
            if(results[0] == "True"){
                logger.log('info', 'Cut detection', { message: 'Cut launched' });
            }
            else{
                logger.log('info', 'Cut detection', { message: 'Cut not launched, nothing happened' });
            }
        });*/

        	// We set the Messages variables
   /* nbMessage1 = tab.length;
    nbMessage2 = tab.length;
    t2 = t1 - t2;
    console.log(t1);
    console.log(t2);
        nbMessage = nbMessage1 - nbMessage2;
        nbMessageSec = nbMessage / 30;
        nbMessageSec1 = nbMessageSec
		console.log(nbMessage);
		console.log(nbMessageSec1);

        var options = {
            mode: 'text',
            pythonOptions: ['-u'],
            scriptPath: './',
            args: ['2554','532','874']
        };
    t2 = t1;
    nbMessage2 = nbMessage1;*/