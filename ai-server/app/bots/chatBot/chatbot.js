const tmi = require('tmi.js');
var request = require('request');
//const { userMl } = require('../../../../server/models');
const logger = require('../../../config/logger');
const machine_learning = require('../../services/machine_learning_chatbot');
const UserId = require('../../services/user');
const { exitOnError } = require('../../../config/logger');


// We instance the Datas 
var number_total = 0;
var number_subscriber = 0;
var number_emot = 0 ;
var id_user;


module.exports = function (Username, Token){

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

chatBot.once("connected", function (address, port) {
    UserId.getId(Username, function(err, request_user){
        console.log(request_user);
        id_user = request_user;
    });
    machine_learning.recup(Username, function(err, req){
        console.log("req : "+req);
        console.log(err);
    if(req === null){
        machine_learning.init(Username, function(err, request_init){
            console.log(err);
        });
    }else{
        user_ml_init.username = Username,
        user_ml_init.nb_messages_total = req[2];
        user_ml_init.nb_messages_subscriber = req[3]
        user_ml_init.nb_messages_emot = req[4]
    }
   });
    console.log(address);
    console.log(port);
    setTimeout(function() {chatBot.disconnect();}, 20000);
    });

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
chatBot
    .on("disconnected", function (reason) {
    var options = {
        url: 'http://localhost:8082/api/createclip?id=' + id_user +'&twitchToken='+ Token,
        method: 'GET',
    };
    machine_learning.inte(user_ml, function(err, request_init){
    if((user_ml.nb_messages_total + 
        user_ml.nb_messages_subscriber +
         user_ml.nb_messages_emot) >
       (user_ml_init.nb_messages_total + 
        user_ml_init.nb_messages_subscriber + 
        user_ml_init.nb_messages_emot)){
        console.log("creation clip")
        request(options, callback);
       }
       else{
        console.log("pas de creation clip")
        
       }
       function callback(error, response, body) {
            process.exit(1);
    }
    
    });
    });
}
