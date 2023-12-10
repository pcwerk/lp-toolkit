# frontend/Dockerfile
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . .
RUN yarn install

EXPOSE 3000

CMD [ "npm", "start" ]
