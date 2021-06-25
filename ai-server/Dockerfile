# https://hub.docker.com/_/node/
FROM node:lts

# We define the docker dir
WORKDIR /ai-server

# default to port 8080
ARG PORT=8080
ENV PORT $PORT
EXPOSE $PORT

# copy the packages dependancies
COPY package.json /ai-server/package.json
COPY package-lock.json /ai-server/package-lock.json

# run the ci (delete /node_modules && npm install)
RUN npm ci

# copy in our source code last, as it changes the most
COPY . ./ai-server

# start the ai-server
CMD ["node", "app.js", "Ponce"]