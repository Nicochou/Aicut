const tmi = require('tmi.js');
var request = require('request');
//const { userMl } = require('../../../../server/models');
const logger = require('../../../config/logger');
const machine_learning = require('../../services/machine_learning_chatbot');
const UserId = require('../../services/user');


// We instance the Datas 
var tab = new Array()
var number_total = 0;
var number_subscriber = 0;
var number_emot = 0 ;
var id_user;


module.exports = function (Username, Token){

let recup_ml;
let init_ml;
var user_ml = {
 'username' : Username,
 'nb_messages_total' : number_total,
 'nb_messages_subscriber' : number_subscriber,
 'nb_messages_emot' : number_emot  
}
var user_ml_init = {
    'username' : Username,
    'nb_messages_total' : number_total,
    'nb_messages_subscriber' : number_subscriber,
    'nb_messages_emot' : number_emot  
   }
const chatBot = new tmi.Client({
    options: {
        debug: true,
        messagesLogLevel: "info",
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
    UserId.getId(Username, function(err, request_user){
    console.log(request_user);
    id_user = request_user;
    });
    machine_learning.recup(Username, function(err, req){
    //console.log("req : "+req);
    if(req === null){
    machine_learning.init(Username, function(err, request_init){
    });
    }else{
        user_ml_init.username = Username,
        user_ml_init.nb_messages_total = req[2];
        user_ml_init.nb_messages_subscriber = req[3]
        user_ml_init.nb_messages_emot = req[4]
    }
    //console.log(user_ml_init);
   });
    
    console.log(address);
    console.log(port);
    	// Giving it 5 seconds until we disconnect just to make sure the message was sent.
		setTimeout(function() {chatBot.disconnect();}, 20000);
    });
/*
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
      
      chatBot.once('message', handleMsg );*/
// On each message in the Live Stream
 chatBot
    .on('message', (channel, tags, message, self) => {
    if (self) return;
	
  if(tags.subscriber){
    user_ml.nb_messages_subscriber++;
  }
  if(tags.emotes){
    user_ml.nb_messages_emot++;
  }
  user_ml.nb_messages_total++;

});
chatBot.on("disconnected", function (reason) {
    // Request twitch
        var options = {
            url: 'http://localhost:8082/api/createclip?id=' + id_user +'&twitchToken='+ Token,
            method: 'GET',
        };
    console.log(user_ml);
    console.log(user_ml_init);
    machine_learning.inte(user_ml, function(err, request_init){
    if((user_ml.nb_messages_total + user_ml.nb_messages_subscriber+user_ml.nb_messages_emot) >
       (user_ml_init.nb_messages_total + user_ml_init.nb_messages_subscriber+user_ml_init.nb_messages_emot)){
        console.log("creation clip")
        request(options, callback);
       }
       else{
        console.log("pas de creation clip")
       }
       function callback(error, response, body) {
           console.log(response);
       }
          
    });
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