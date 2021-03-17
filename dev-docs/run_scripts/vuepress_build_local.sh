#!/bin/bash

PARENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
ROOT_DIR="$( cd $PARENT_DIR/.. >/dev/null 2>&1 && pwd )"

set -x

cd ${WOKRKING_PACKAGE_PATH} \
    && npx vuepress build ${DOCS_RELATIVE_PATH}
    
node ${WOKRKING_PACKAGE_PATH}/offlinify.js ${DOCS_RELATIVE_PATH}