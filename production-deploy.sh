#!/bin/bash
set -uex

if [ -z "${TRAVIS_PULL_REQUEST}" ] || [ "${TRAVIS_PULL_REQUEST}" == "false" ]; then
    if [ "${TRAVIS_BRANCH}" == "master" ]; then
        echo "Automatic deployments of the app is disabled for now"
    else
        echo "Not on master, will not deploy to production"
    fi
else
    echo "Not on master, will not deploy to production"
fi
