const passport = require("passport");
const session = require('express-session');
var colors = require('colors/safe');
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
var jwt = require("jsonwebtoken");
var querystring = require('querystring');
const { cpuUsage } = require("process");


module.exports = function(app, passeport) {


  app.get('/twitchAuth',
    passport.authenticate('twitch',{forceVerify: true})

  );


  app.get('/twitchAuth/callback', function(req, res, next) {
    passport.authenticate('twitch', function(err, userTemp, info) {
      if (err) { return next(err); }
      if (!userTemp) { return res.redirect('/'); }
      if (info) { 
        req.session.accessToken = info;
      }
      console.log(req.session);
      req.logIn(userTemp, function(err) {
        if (err) { return next(err); }
        User.findOne({
          where: {
            id_twitch: userTemp.id
          }
        }).then(user => {
          user.setRoles(4);

          var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // 24 hours
          });

          const query = querystring.stringify({
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "roles" : "ROLE_STREAMER,ROLE_USER",
            "accessToken" : token,
            "isStreamer": user.isStreamer,
            "description": user.description,
            "profile_image_url": user.profile_image_url,
            "profile_background_image_url": user.profile_background_image_url,
            "type": user.type,
            "Broadcaster_type": user.Broadcaster_type,
            "views_count": user.views_count,
            "id_twitch": user.id_twitch
        });

          return res.redirect('http://localhost:3000/twitch?' + query) ;

          })      
          .catch(err => {
            res.status(500).send({ message: err.message });
          });
      });
    })(req, res, next);
  });
};
