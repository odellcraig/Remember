#!/bin/bash
# Author Craig Odell <odell.craig@gmail.com>
# Used to as entrypoint for development Docker

# Startup node in monitor mode
nodemon --debug app.js &

# Startup node inspector
node-inspector --web-port 8081 &

/bin/bash


# Docker on mac: https://docs.docker.com/installation/mac/
# If already installed 

# Setup Mongo
# docker run --name mongodb -d mongo

# Launch our docker using the pre-built image
# docker run -d -i -p 3000:3000 --name remember --link mongodb:mongodb  odellcraig/remember

# To Build:
# docker build -t "odellcraig/remember" .

# To push to docker hub
# docker push odellcraig/remember