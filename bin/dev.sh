#!/bin/bash

export NODE_ENV=development
export NODE_PATH=src/

DEV_SERVER_CMD="babel-node --harmony src/app.js"

WEBPACK_CMD="webpack --config config/webpack.config.js --watch"

LINT_CMD="esw \
  --config config/.eslintrc.json \
  --cache \
  --quiet \
  --color \
  --watch"

npm run db:migrate

echo $DEV_SERVER_CMD
parallelshell "$DEV_SERVER_CMD" "$WEBPACK_CMD" "$LINT_CMD"

exit 0