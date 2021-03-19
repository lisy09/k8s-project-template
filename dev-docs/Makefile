ROOT_DIR=${PWD}
SCRIPTS_DIR = ${ROOT_DIR}/scripts

.PHONY: all
all: incremental-tasks alway-run-tasks

.PHONY: incremental-tasks
incremental-tasks: docker-images push

.PHONY: alway-run-tasks  
alway-run-tasks: 

.PHONY: docker-images
docker-images: base

.PHONY: base
base:
	$(SCRIPTS_DIR)/build_base.sh

.PHONY: clean
clean: delete-docker-images

.PHONY: delete-docker-images
delete-docker-images:
	$(SCRIPTS_DIR)/delete_local_images.sh 

.PHONY: push
push:
	$(SCRIPTS_DIR)/push_docker_images.sh 

.PHONY: preview-local
preview-local:
	$(SCRIPTS_DIR)/vuepress_dev_local.sh

.PHONY: build-local
build-local:
	$(SCRIPTS_DIR)/vuepress_build_local.sh 

.PHONY: preview
preview:
	$(SCRIPTS_DIR)/vuepress_preview.sh 

.PHONY: build
build:
	$(SCRIPTS_DIR)/vuepress_build.sh