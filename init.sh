#!/bin/sh
cd /usr/src/app
yarn db-deploy
yarn generate
yarn build
yarn serve