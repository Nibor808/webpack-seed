#!/bin/bash

knex --cwd --knexfile config/knexfile.js migrate:$1 $2