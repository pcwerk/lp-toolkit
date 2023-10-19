FROM node:lts-alpine

RUN apk update && apk add bash
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY . .

RUN yarn
RUN chown -R appuser:appgroup /usr/src/app

USER appuser
CMD [ "node", "server.js"]
EXPOSE 5050