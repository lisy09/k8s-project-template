#!/bin/bash

PARENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
ROOT_DIR="$( cd $PARENT_DIR/.. >/dev/null 2>&1 && pwd )"

set -ex

docker run -it --rm --entrypoint /bin/bash \
    --name kubectl \
    --net=host \
    -v ${KUBE_CONFIG_PATH}:/.kube/config \
    ${KUBECTL_IMAGE}