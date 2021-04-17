#!/usr/bin/env bash

readonly SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
readonly ROOT_DIR="$( cd $SCRIPT_DIR/.. >/dev/null 2>&1 && pwd )"
source $ROOT_DIR/.env

COMMANDS=docker
IFS=',' read -a commands <<< ${COMMANDS}
for COMMAND in ${commands[@]}; do
    if ! command -v ${COMMAND} &> /dev/null; then
        echo "Command could not be found: ${COMMAND}"
        exit 1
    fi
done

readonly SRC_DIR=$ROOT_DIR/src
readonly WORKSPACE_DIR=/workspace
readonly OUTPUT_DIR=/output
readonly LOCAL_OUTPUT_DIR=$ROOT_DIR/generated

set -e
set -x

rm -rf $LOCAL_OUTPUT_DIR
mkdir -p $LOCAL_OUTPUT_DIR/python
mkdir -p $LOCAL_OUTPUT_DIR/java
mkdir -p $LOCAL_OUTPUT_DIR/go

docker run -d --rm \
    -v $SRC_DIR:$WORKSPACE_DIR \
    -v $LOCAL_OUTPUT_DIR:$OUTPUT_DIR \
    ${PROTOBUF_IMAGE_FULL} \
    -I$WORKSPACE_DIR \
    --python_out=$OUTPUT_DIR/python --mypy_out=$OUTPUT_DIR/python \
    --java_out=$OUTPUT_DIR/java \
    --go_out=$OUTPUT_DIR/go \
    $WORKSPACE_DIR/*.proto

touch $LOCAL_OUTPUT_DIR/python/__init__.py