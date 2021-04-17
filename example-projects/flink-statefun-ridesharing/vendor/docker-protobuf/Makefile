ROOT_DIR=${PWD}
SCRIPTS_DIR = ${ROOT_DIR}/scripts

.PHONY: all
all: incremental-tasks alway-run-tasks

.PHONY: incremental-tasks
incremental-tasks:

.PHONY: alway-run-tasks  
alway-run-tasks: docker-images

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