const express = require("express");
const session = require('express-session');
const cors = require("cors");

const app = express();
const passport = require("passport");


var corsOptions = {
  origin: "http://localhost:3003"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// passeport initalize
app.use(passport.initialize());
app.use(session({secret: 'ssshhhhh',saveUninitialized: true, resave: true, cookie: { secure: false }}));

// passeport
require('./app/passport/twitch')(passport);
// routes
require('./app/routes/authentications/auth.routes')(app);
require('./app/routes/authentications/twitch.routes')(app, passport);
require('./app/routes/user.routes')(app);
require('./app/routes/default.routes')(app);
require('./app/routes/clip.routes')(app);
require('./app/routes/twitch/create_clip.routes')(app);
require('./app/routes/twitch/activate_ml.routes')(app);

const db = require("./models");
const Role = db.ROLES;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });
function initial() {
  Role.create({
    id: 1,
    name: "user"  
  })
  Role.create({
    id: 2,
    name: "moderator"  
  })
  Role.create({
    id: 3,
    name: "admin"  
  })
  Role.create({
    id: 4,
    name: "streamer"
  })
}

module.exports = app;


