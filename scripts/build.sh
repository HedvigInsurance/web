#!/bin/bash
set -uex

if lsof -Pi :8000 -sTCP:LISTEN -t >/dev/null ; then
    echo "BAIL BUILD!"
    echo "Please stop the local Gatsby development server"
    echo "The dev server can corrupt the production build"
    exit 1
fi

# Seems like Gatsby builds can get corrupted if a dev .cache exists
./node_modules/.bin/rimraf .cache

./node_modules/.bin/gatsby build