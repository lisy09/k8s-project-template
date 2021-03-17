ifneq (,$(wildcard ./.env))
    include .env
    export
endif

mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
CURRENT_DIR := $(patsubst %/,%,$(dir $(mkfile_path)))

BUILD_SCRIPTS_PATH = ${CURRENT_DIR}/build_scripts
RUN_SCRIPTS_PATH = ${CURRENT_DIR}/run_scripts

.PHONY: all
all: base 

.PHONY: base
base:
	bash $(BUILD_SCRIPTS_PATH)/build_base.sh

.PHONY: clean
clean: delete-docker-images

.PHONY: delete-docker-images
delete-docker-images:
	bash $(BUILD_SCRIPTS_PATH)/delete_local_images.sh 

.PHONY: push
push:
	bash $(BUILD_SCRIPTS_PATH)/push_docker_images.sh 

.PHONY: dev-local
dev-local:
	bash $(RUN_SCRIPTS_PATH)/vuepress_dev_local.sh

.PHONY: build-local
build-local:
	bash $(RUN_SCRIPTS_PATH)/vuepress_build_local.sh 

.PHONY: pdf-local
pdf-local:
	bash $(RUN_SCRIPTS_PATH)/vuepress_pdf_local.sh

.PHONY: pdf
pdf:
	bash $(RUN_SCRIPTS_PATH)/vuepress_pdf.sh

.PHONY: preview
preview:
	bash $(RUN_SCRIPTS_PATH)/vuepress_preview.sh 

.PHONY: stop-preview
stop-preview:
	bash $(RUN_SCRIPTS_PATH)/vuepress_preview_stop.sh 

.PHONY: build
build:
	bash $(RUN_SCRIPTS_PATH)/vuepress_build.sh 

.PHONY: github-pages
github-pages:
	bash $(RUN_SCRIPTS_PATH)/build_github_pages.sh 