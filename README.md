# ETNA
## AICUT

AIcut is a solution for streamers, you can lunch the app and it will cut, edit and mount your clips automaticly.

Currently in developpement.


## Features
 - Server secured by JWT
 - Double authentication (Twitch and local)
 - App token twitch with data transfer client side
 - User token twitch with data transfer server side
 - Is in live ( for Twitch authentication )
 - Create clip with user token Twitch

## Tech

- [ReactJS] - HTML enhanced for web apps!
- [PassportJS] - For OAuth2 authentication
- [MySQL] - SQL script for database
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Axios] - requests to my express

## Installation

requires [Node.js](https://nodejs.org/) .
Create your database and set up config in 
```sh
server/app/config/db.config.js
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "aicuttwitch",
```


Install the dependencies and start the server.

```sh
cd server
npm install
npm audit fix
npm start
```

Install the dependencies and start the client.

```sh
cd client
npm install
npm audit fix
npm start
```

