const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const Role = db.role;
const UserRoles = db.user_roles;

var keys = require( '../../config/keys.config' );

var request = require('request');

module.exports = function(app) {

  // Get the clip from game_id
  app.get("/api/getclipsfromgame", function(req, res, next) {
    // variables
    var id = req.query.id_broadcaster;
    var id_game = req.query.id_game;
    var message;
    var users = [];

    // Retrieve User
    User.findAll({ where: { id: id_twitch } }, { raw: true }).then(function (users) {
      if (users.length <= 0) {
        // Message no user
        message = 'Pas de User trouvé'
        res.send({ url: '/api/getclipsfromgame', id: id, message: message });
      } else {
          // Message no user
        message = 'User trouvé'
        // Request twitch
        var headers = {
            'Authorization': 'Bearer ' + users[0].access_token,
            'Client-Id': keys.twitch.clientID
        };

        var options = {
            url: 'https://api.twitch.tv/helix/clips?game_id=' + id_game,
            headers: headers
        };
        // send request
        request(options, callback);

      }
    });
    // Callback
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {

        }
        else{

        }
        res.send({ url: '/api/getclipsfromgam', id: id,  message: message, response: response });
    }
  });

  // Get the clip from id_broadcaster
  app.get("/api/getclipsfrombroadcaster", function(req, res, next) {
    // variables
    var id = req.query.id_broadcaster;
    var message;
    var users = [];

    // Retrieve User
    User.findAll({ where: { id: id_twitch } }, { raw: true }).then(function (users) {
      if (users.length <= 0) {
        // Message no user
        message = 'Pas de User trouvé'
        res.send({ url: '/api/getclipsfrombroadcaster', id: id, message: message });
      } else {
          // Message no user
        message = 'User trouvé'
        // Request twitch
        var headers = {
            'Authorization': 'Bearer ' + users[0].access_token,
            'Client-Id': keys.twitch.clientID
        };

        var options = {
            url: 'https://api.twitch.tv/helix/clips?broadcaster_id=' + id,
            headers: headers
        };
        // send request
        request(options, callback);

      }
    });
    // Callback
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {

        }
        else{

        }
        res.send({ url: '/api/getclipsfrombroadcaster', id: id,  message: message, response: response });
    }
  });
}
