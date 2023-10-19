# It uses node:18-alpine as the base image for the Node.js application
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 5050

CMD [ "node", "server.js" ]
