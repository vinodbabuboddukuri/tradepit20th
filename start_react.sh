#!/bin/sh

file=./node_modules
if [ -d "$file" ]
then
    npm start
else
    echo "$file not found."
    echo "Installing node modules..."
    npm install -force
    node node_modules/node-sass/scripts/install.js
    npm rebuild node-sass
    npm start
fi