ROOT_DIR=${PWD}
SCRIPTS_DIR = ${ROOT_DIR}/scripts

.PHONY: all
all: incremental-tasks alway-run-tasks

.PHONY: incremental-tasks
incremental-tasks: 

.PHONY: alway-run-tasks  
alway-run-tasks: 


DEV_DOCS_DIR=${ROOT_DIR}/dev-docs

.PHONY: docs-preview
docs-preview:
	cd ${DEV_DOCS_DIR} && make preview

.PHONY: docs
docs:
	cd ${DEV_DOCS_DIR} && make build



CICD_DIR=${ROOT_DIR}/cicd