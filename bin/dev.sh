#!/bin/bash

export NODE_PATH=src/

DEV_CMD="nodemon \
  --ignore bin \
  --ignore public \
  --ignore node_modules \
  --ignore build \
  --ignore webpack.config.json"

DEV_SERVER_CMD="$DEV_CMD --exec babel-node --harmony src/app.js"

WEBPACK_CMD="nodemon \
  --watch config/webpack.config.js \
  --exec 'webpack --config config/webpack.config.js --watch'"

LINT_CMD="esw \
  --config config/.eslintrc.json \
  --cache \
  --quiet \
  --color \
  --watch"

echo $DEV_SERVER_CMD
parallelshell "$DEV_SERVER_CMD" "$WEBPACK_CMD" "$LINT_CMD"

exit 0
