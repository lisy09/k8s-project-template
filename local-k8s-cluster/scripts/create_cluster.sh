#!/bin/bash

PARENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
ROOT_DIR="$( cd $PARENT_DIR/.. >/dev/null 2>&1 && pwd )"
MANIFEST_DIR=$ROOT_DIR/manifest

source $ROOT_DIR/.env
set -e

COMMANDS=kind,kubectl,docker
IFS=',' read -a commands <<< ${COMMANDS}
for COMMAND in ${commands[@]}; do
    if ! command -v ${COMMAND} &> /dev/null; then
        echo "Command could not be found: ${COMMAND}"
        exit 1
    fi
done

set -x

# create kind cluster
kind create cluster --config ${MANIFEST_DIR}/kind-config.yaml \
    --image=${KIND_NODE_IMAGE}

# switch k8s context
kubectl cluster-info --context kind-kind

# setup ingress-nginx
kubectl apply -f ${MANIFEST_DIR}/ingress-nginx.yaml
kubectl wait --namespace ingress-nginx \
    --for=condition=ready pod \
    --selector=app.kubernetes.io/component=controller \
    --timeout=90s

# setup cert-manager
kubectl apply -f ${MANIFEST_DIR}/cert-manager.yaml