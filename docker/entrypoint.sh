#!/bin/bash

#decide which command should be run
echo $1
if [ -z "$1" ]; then
  echo "No argument supplied"
  exit 1
else
  if [ "$1" == "unit-watch" ]; then
    echo "Running unit tests in watch mode"
    npm run test:watchAll
  elif [ "$1" == "e2e-watch" ]; then
    echo "Running e2e tests in watch mode"
    npm run test:e2e:watch
    # Add the command to run your e2e tests in watch mode here
  elif [ "$1" == "e2e" ]; then
    echo "Running e2e tests"
    npm run test:e2e
    # Add the command to run your e2e tests here
  elif [ "$1" == "unit" ]; then
    echo "Running unit tests"
    npm run test:unit
  else
    echo "Invalid argument: $1"
    exit 1
  fi
fi
