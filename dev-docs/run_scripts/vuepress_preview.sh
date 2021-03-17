#!/usr/bin/env bash

PARENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
ROOT_DIR="$( cd $PARENT_DIR/.. >/dev/null 2>&1 && pwd )"

set -x

instance=$(docker run -d --rm --name ${PREVIEW_CONTAINER_NAME} \
    -p ${VUEPRESS_PREVIEW_PORT}:8080 \
    -v ${ROOT_DIR}/${DOCS_RELATIVE_PATH}:${WOKRKING_PACKAGE_PATH}/${DOCS_RELATIVE_PATH} \
    -t ${BASE_IMAGE_FULL} \
    /bin/sh -c "while :; do sleep 10; done")

docker exec $instance bash -c "cd ${WOKRKING_PACKAGE_PATH} \
    && npx vuepress dev ${DOCS_RELATIVE_PATH}"