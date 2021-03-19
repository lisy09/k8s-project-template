#!/bin/bash

readonly PARENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
readonly ROOT_DIR="$( cd $PARENT_DIR/.. >/dev/null 2>&1 && pwd )"

source $ROOT_DIR/.env
set -x
readonly DOCS_DIR=$ROOT_DIR/$GENERATE_DOCS_PATH

instance=$(docker run -d --rm \
    -v ${ROOT_DIR}/${DOCS_RELATIVE_PATH}:${WOKRKING_PACKAGE_PATH}/${DOCS_RELATIVE_PATH} \
    -t ${BASE_IMAGE_FULL} \
    /bin/sh -c "while :; do sleep 10; done")

docker exec $instance bash -c "cd ${WOKRKING_PACKAGE_PATH} \
    && npx vuepress build ${DOCS_RELATIVE_PATH}; \
    node ${WOKRKING_PACKAGE_PATH}/offlinify.js ${DOCS_RELATIVE_PATH}"


docker stop $instance

rm -rf $DOCS_DIR
mv $ROOT_DIR/$DOCS_RELATIVE_PATH/.vuepress/dist $DOCS_DIR