var passport = require( "passport" );
var twitchStrategy = require( "@d-fischer/passport-twitch" ).Strategy;
var keys = require( '../config/keys.config' );
var colors = require('colors/safe');

const db = require("../../models");
const User = db.user;
const Role = db.role;
const UserRoles = db.user_roles;

const Op = db.Sequelize.Op;

  module.exports = function (passport) {
      passport.use( 'twitch', new twitchStrategy(
        {
          clientID: keys.twitch.clientID,
          clientSecret: keys.twitch.clientSecret,
          callbackURL: keys.twitch.callbackURL,
          scope: "clips:edit"
        },
      function(accessToken, refreshToken, profile, done) {
        console.log(colors.green(accessToken));
        User.findOrCreate({
           where: { login: profile.login},
           defaults: {login: profile.login,
                      username: profile.display_name,
                      email: profile.email,
                      id_twitch: profile.id,
                      isStreamer: 1, 
                      type: profile.type,
                      broadcaster_type: profile.brodcaster_type,
                      description: profile.description,
                      profile_image_url: profile.profile_image_url,
                      profile_background_image_url: profile.offline_image_url,
                      view_count: profile.view_count
           }
        });

        done( null, profile, accessToken );
      }
      
    ));

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
  }
