FROM node

MAINTAINER Craig Odell <odell.craig@gmail.com>

RUN npm update npm -g
RUN npm install forever -g

ADD . /src
WORKDIR /src

# install dependencies
RUN npm install

# expose app and debugger
EXPOSE 80

ENV MONGO_URI             mongodb://localhost/remember
ENV PORT                  80
ENV NODE_ENV              production

#TODO Enable SSL

# Light it up
CMD [ "forever", "start", "app.js"]