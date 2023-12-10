# backend/Dockerfie
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY . .
RUN yarn install

EXPOSE 5050

CMD [ "node", "server.js" ]
