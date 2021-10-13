const express = require("express");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const passport = require("passport");

var corsOptions = {
  origin: 'http://localhost:3003',
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// passeport initalize
app.use(passport.initialize());
app.use(session({secret: 'aicut-cookies-session',
                 saveUninitialized: true, 
                 resave: false, 
                 cookie: { secure: false }
                })
        );

// passeport
require('./app/passport/twitch')(passport);
// routes
require('./app/routes/authentications/auth.routes')(app);
require('./app/routes/authentications/twitch.routes')(app, passport);
require('./app/routes/content.routes')(app);
require('./app/routes/default.routes')(app);
require('./app/routes/clip.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/comment.routes')(app);
require('./app/routes/twitch/create_clip.routes')(app);
require('./app/routes/twitch/activate_ml.routes')(app);

const db = require("./models");
const { cp } = require("shelljs");
const Role = db.role;

if(process.env.NODE_ENV == "DEV" ){
  db.sequelize.sync({force: true}).then(() => {
   console.log('Drop and Resync Database with { force: true }');
   initial();
 });
}
else{
  db.sequelize.sync();
}

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


