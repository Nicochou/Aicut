# https://hub.docker.com/_/node/
FROM node:lts

# We define the docker dir
WORKDIR /backend

# set our node environment, either development or production or test
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 80 for node, and 9229 and 9230 (tests) for debug
ARG PORT=8082
ENV PORT $PORT
EXPOSE $PORT 9229 9230

# copy the packages dependancies
COPY package.json /backend/package.json
COPY package-lock.json /backend/package-lock.json

# run the ci (delete /node_modules && npm install)
RUN npm ci

# copy in our source code last, as it changes the most
COPY . ./backend

# start the server
CMD ["node", "start.js"]