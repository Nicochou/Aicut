const passport = require("passport");
var colors = require('colors/safe');
const config = require("../../config/auth.config");
const db = require("../../../models");
const User = db.user;
var jwt = require("jsonwebtoken");
var querystring = require('querystring');


module.exports = function(app, passeport) {
  // We authenticate a new twitch user
  app.get('/twitchAuth',
    passport.authenticate('twitch', {forceVerify: true})
  );
  // After authentication, We get the callBack
  app.get('/twitchAuth/callback', function(req, res, next) {
    passport.authenticate('twitch', function(err, userTemp, info) {
      // Error trapping
      if (err) { return next(err); }
      // No user find
      if (!userTemp) { return res.redirect('/'); }
      // We set the access token in cookie
      res.cookie('accessToken', info);
      console.log(colors.bgRed(JSON.stringify(req.cookies)));
      // We logIn the user we got
      req.logIn(userTemp, function(err) {
        // Error trapping
        if (err) { return next(err); }
        // We find the user according to his id_twitch
        User.findOne({
          where: {
            id_twitch: userTemp.id
          }
        }).then(user => {
          // We set the right role
          user.setRoles('4');
          // We generate a Json Web Token
          var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // 24 hours
          });
          // We create the query to redirect to the client
          const query = querystring.stringify({
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "roles" : "ROLE_STREAMER,ROLE_USER",
            "accessTokenJWT" : token,
            "isStreamer": user.isStreamer,
            "description": user.description,
            "profile_image_url": user.profile_image_url,
            "profile_background_image_url": user.profile_background_image_url,
            "type": user.type,
            "Broadcaster_type": user.Broadcaster_type,
            "views_count": user.views_count,
            "id_twitch": user.id_twitch,
            "accessTokenTwitch": info
        });
          // We redirect to the client
          return res.redirect('http://localhost:3003/twitch?' + query) ;
          })      
          .catch(err => {
            res.status(500).send({ message: err.message });
          });
      });
    })(req, res, next);
  });
};


