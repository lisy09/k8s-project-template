#!/bin/bash

PARENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
ROOT_DIR="$( cd $PARENT_DIR/.. >/dev/null 2>&1 && pwd )"

set -x

docker build \
    --build-arg NODEJS_VERSION=${NODEJS_VERSION} \
    -t ${BASE_IMAGE_FULL} \
    ${ROOT_DIR}/docker

set +x