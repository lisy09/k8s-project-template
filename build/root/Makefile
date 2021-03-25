DBG_MAKEFILE ?=
ifeq ($(DBG_MAKEFILE),1)
    $(warning ***** starting Makefile for goal(s) "$(MAKECMDGOALS)")
    $(warning ***** $(shell date))
else
    MAKEFLAGS += -s
endif

SHELL := /usr/bin/env bash

# Define variables so help command work
PRINT_HELP ?=

# Don't need make's built-in rules
MAKEFLAGS += --no-builtin-rules

ROOT_DIR=${PWD}
BUILD_DIR = ${ROOT_DIR}/build
BUILD_ROOT_DIR=${BUILD_DIR}/root

include ${BUILD_ROOT_DIR}/docs.mk
include ${BUILD_ROOT_DIR}/local-k8s.mk
include ${BUILD_ROOT_DIR}/cicd.mk

all: incremental-tasks alway-run-tasks

.PHONY: incremental-tasks
incremental-tasks: 
	cd ${DEV_DOCS_DIR} && make incremental-tasks
	cd ${LOCAL_K8S_DIR} && make incremental-tasks

.PHONY: alway-run-tasks  
alway-run-tasks: 