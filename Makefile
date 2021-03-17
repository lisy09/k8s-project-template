ROOT_DIR=${PWD}
SCRIPTS_DIR = ${ROOT_DIR}/scripts

.PHONY: all
all: incremental-tasks alway-run-tasks

.PHONY: incremental-tasks
incremental-tasks: docker-images

.PHONY: alway-run-tasks  
alway-run-tasks: 

.PHONY: docker-images
docker-images: base

.PHONY: base
base:
	$(SCRIPTS_DIR)/build_base.sh

.PHONY: push
push:
	$(SCRIPTS_DIR)/push_docker_images.sh

.PHONY: clear
clear: delete-docker-images

.PHONY: delete-docker-images
delete-docker-images:
	$(SCRIPTS_DIR)/delete_local_images.sh
