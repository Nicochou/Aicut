# https://hub.docker.com/_/node/
FROM node:lts

# We define the docker dir
RUN mkdir /usr/frontend
WORKDIR /usr/frontend

# default to port 3000
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

# copy the packages dependancies
COPY package.json /usr/frontend/package.json
COPY package-lock.json /usr/frontend/package-lock.json

# run the ci (delete /node_modules && npm install)
RUN npm ci

# copy in our source code last, as it changes the most
COPY . .

# start the client
CMD ["npm", "start"]