#!/bin/bash
set -uex

if [ -z "${TRAVIS_PULL_REQUEST}" ] || [ "${TRAVIS_PULL_REQUEST}" == "false" ]; then
    if [ "${TRAVIS_BRANCH}" == "master" ]; then
        yarn build
        aws s3 sync public/ ${TEST_S3_WEBSITE_BUCKET}
    else
        echo "Not on master, will not deploy to test"
    fi
else
    echo "Not on master, will not deploy to test"
fi
