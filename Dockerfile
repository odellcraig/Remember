FROM node

MAINTAINER Craig Odell <odell.craig@gmail.com>

RUN npm install forever -g

ADD . /src
WORKDIR /src

# install dependencies
RUN npm install

# expose app and debugger
EXPOSE 80

# Setup the environment variables for local (might change this in the future)
ENV MONGO_URI             mongodb://linksprinter:smm5kerlc6ms69t603b8lrd3ks@rose.mongohq.com:10060/linksprinter-dev
ENV PORT                  80

#TODO Set ENV to production
#TODO Enable SSL

# Light it up
CMD [ "forever", "start", "app.js"]