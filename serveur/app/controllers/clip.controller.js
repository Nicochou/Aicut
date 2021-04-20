const passport = require("passport");
const session = require('express-session');
var colors = require('colors/safe');
const config = require("../config/auth.config");
const db = require("../../models");
const User = db.user;
const Role = db.role;
const Clip = db.clip;
const UserClips = db.user_clips;


// We get all clips
exports.getAllClips = (req, res) => {
    Clip.findAll().then(function (clips) {
        res.send({clips});
    });
  };

// We get clip by his id
exports.getClipById = (req, res) => {
    let id = req.query.id;
    Clip.findByPk(id).then(function (clip) {
        res.send({clip});
    });getEditClipByUserId
  };

// We get edit clip by user id
exports.getAllClipByUserId = (req, res) => {
  let id = req.query.id;
  User.findAll({ 
    include: [{
      model: Clip,
      required: false
     }],
     where: {
      id: id
    }
  })
  .then(function (clips) {
      res.send({clips});
    });
  };

// We get clip by user id and status
 exports.getClipStatusByUserId = (req, res) => {
    let id = req.query.id;
    let status = req.query.status;
    User.findAll({ 
      include: [{
        model: Clip,
        required: false,
        where: {
          status: status
        }
      }],
      where: {
        id: id
      }
    })
    .then(function (clips) {
        res.send({clips});
      });
  };

// We get edit clip by user id
 exports.postClip = (req, res) => {
  let id = req.query.id;
  User.findAll({ 
    include: [{
      model: Clip,
      required: false,
      where: {
        status_clip: '102'
      }
    }],
    where: {
      id: id
    }
  })
  .then(function (clips) {
      res.send({clips});
    });
};