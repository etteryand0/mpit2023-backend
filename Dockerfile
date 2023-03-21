FROM node:16-bullseye
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
# RUN apk add --no-cache --upgrade bash

COPY . .
EXPOSE 4000

ENTRYPOINT []
