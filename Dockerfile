FROM node:16-bullseye
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .
RUN mkdir uploads
RUN chmod +x init.sh
EXPOSE 4000

ENTRYPOINT []
