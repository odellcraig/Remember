FROM node

MAINTAINER Craig Odell <odell.craig@gmail.com>

RUN npm update npm -g
RUN npm install forever -g

ADD . /src
WORKDIR /src

# install dependencies
RUN npm install

# expose app and debugger
EXPOSE 3000

ENV PORT                  3000
ENV NODE_ENV              production

#TODO Enable SSL

# Light it up
CMD [ "./start.sh"]
