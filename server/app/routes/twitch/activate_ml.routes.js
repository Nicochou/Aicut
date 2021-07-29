const session = require('express-session');
var request = require('request');
const shell = require('shelljs');
const { exec } = require('child_process');
const db = require("../../../models");
const config = require("../../config/auth.config");
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
  app.get("/api/activateMl", function(req, res, next) {
    var id = req.query.id;
    
    console.log(id);
    const dir = exec('cmd', ['/c', './bash/start-ml.cmd']);
    console.log(`Stdout: ${JSON.stringify(dir.stdout)}`);
    console.log(`Stderr: ${JSON.stringify(dir.stderr)}`);  
  });
};

