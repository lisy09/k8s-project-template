#!/bin/bash

set -x

IFS=',' read -a images <<< ${DELETE_IMAGE_LIST}
for image in ${images[@]}; do
    docker rmi -f $(docker images | grep -e "^${DOCKER_REPO}${image}" | awk '{print $3}')
done
