# ETNA
## AICUT

AIcut is a solution for streamers. The goal is to create an application which is creating clips from live streaming on Twitch.
You can activate the AI, then it will create a clip automatcly from a complex machine learning. You can edit it and then mount your video with your clips

We also want to have an acces without Twitch account to display trends and analytics on it.

Currently in developpement.

## How is it working?

We got an API with Express JS, she manage the authentication with twitch and database. She also create the clips and manage tokens from users.

We got a Client in ReactJS, to display the data's user, the trends, the analytics.

We got a other server in Node js, with Python script. This server is call when the user want to activate the autmatic detection for creating a clip.

## Features
 - API secured by JWT
 - Double authentication (Twitch and local DB)
 - App token twitch with data transfer client side
 - User token ( clip edition ) twitch with data transfer server side
 - Is the streamer in live? ( for Twitch authentication )
 - Create clip with user token Twitch

## Tech

- [ReactJS] - HTML enhanced for web apps!
- [PassportJS] - For OAuth2 authentication
- [MySQL] - SQL script for database
- [Express] - fast node.js network app framework
- [Axios] - requests to my express from client
