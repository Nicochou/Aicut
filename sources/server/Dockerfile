# https://hub.docker.com/_/node/
FROM node:lts-alpine

# We define the docker dir
RUN mkdir /usr/backend
WORKDIR /usr/backend

# set our node environment, either development or production or test
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=PROD
ENV NODE_ENV $NODE_ENV

# copy the packages dependancies
COPY package.json /usr/backend/package.json
COPY package-lock.json /usr/backend/package-lock.json

# run the ci (delete /node_modules && npm install)
RUN npm ci

# copy in our source code last, as it changes the most
COPY . .

# We run migration and start the server
CMD ["npm", "start"]