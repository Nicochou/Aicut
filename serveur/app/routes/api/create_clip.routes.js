const session = require('express-session');
var request = require('request');
const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const Role = db.role;
const UserRoles = db.user_roles;

var keys = require( '../../config/keys.config' );


module.exports = function(app) {

  // Create a clip
  app.get("/api/createclip", function(req, res, next) {
    // variables
    var id = req.query.id;
    var message;
    let twitchToken = '9qbaopo6e12cjvvjja5ch1i7he7i6s';
    var users = [];
    // Retrieve User
    User.findByPk(id).then(function (user) {
      if (user.length <= 0) {
        // Message no user
        message = 'Pas de User trouvé'
      } else {
          // Message no user
        message = 'User trouvé'
        // Request twitch
        var headers = {
            'Authorization': 'Bearer ' + twitchToken,
            'Client-Id': keys.twitch.clientID
        };

        var options = {
            headers: headers,
            url: 'https://api.twitch.tv/helix/clips?broadcaster_id=' + user.id_twitch,
            method: 'POST',
        };
        // send request
        request(options, callback);
      }
      console.log(message);
    });
    // Callback
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log('its ok');
        }
        else{
          console.log('its n-ok');
        }
        res.send({ id: id,  message: message, response: body });
    }
  });
}
