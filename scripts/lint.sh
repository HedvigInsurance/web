#!/bin/bash
set -uex

./node_modules/.bin/eslint "**/*.js"

./node_modules/.bin/stylelint "**/*.css"