#!/bin/bash

set -x

IFS=',' read -a images <<< ${PUSH_IMAGE_LIST}
for image in ${images[@]}; do
    docker push $image
done