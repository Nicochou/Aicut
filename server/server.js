const express = require("express");
const session = require('express-session');
const cors = require("cors");

const app = express();
const passport = require("passport");

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// passeport initalize
app.use(passport.initialize());
app.use(session({secret: 'ssshhhhh',saveUninitialized: true, resave: true}));


// passeport
require('./app/passport/twitch')(passport);
// routes
require('./app/routes/authentications/auth.routes')(app);
require('./app/routes/authentications/twitch.routes')(app, passport);
require('./app/routes/user.routes')(app);
require('./app/routes/default.routes')(app);
require('./app/routes/clip.routes')(app);
require('./app/routes/twitch/create_clip.routes')(app);


module.exports = app;


