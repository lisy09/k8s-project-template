#!/bin/bash

PARENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
ROOT_DIR="$( cd $PARENT_DIR/.. >/dev/null 2>&1 && pwd )"

set -x
    
cd ${WOKRKING_PACKAGE_PATH} \
    && npx vuepress export ${DOCS_RELATIVE_PATH} \
    && mv site.pdf ${DOCS_RELATIVE_PATH}