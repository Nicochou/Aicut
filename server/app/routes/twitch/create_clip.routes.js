var session = require('express-session');
var request = require('request');
const db = require("../../../models");
const config = require("../../config/auth.config");
var colors = require('colors/safe');
const User = db.user;
const Role = db.role;
const UserRoles = db.user_roles;
const Clip = db.clip;
const UserClips = db.user_clips;

var keys = require( '../../config/keys.config' );


module.exports = function(app) {
  // We set the Headers
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Create a clip
  app.get("/api/createclip", function(req, res, next) {
    // variables
    var id = req.query.id;
    var message;
    var token = req.session;
    console.log(colors.bgGreen(token));
    let twitchToken = 'adv9i386qwojxgwz8li45u3lirc746';
    var users = [];
    // Retrieve User
    User.findByPk(id).then(function (user) {
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
    });
    // Callback
    function callback(error, response, body) {
        if (!error && response.statusCode == 202) {
          const clipTwitch = JSON.parse(body);
          Clip.create({
            id_twitch: clipTwitch.data[0].id,
            status: 101,
            url: clipTwitch.data[0].edit_url
          })
            .then(clip => {
              clip.setUsers(id);
            })
        }
        res.send({ id: id, status: response.statusCode, data: JSON.parse(body) });
    }
  });
}
