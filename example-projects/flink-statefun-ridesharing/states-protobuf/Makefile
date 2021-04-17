ROOT_DIR=${PWD}
SCRIPTS_DIR = ${ROOT_DIR}/scripts

.PHONY: all
all: incremental-tasks alway-run-tasks

.PHONY: incremental-tasks
incremental-tasks: 

.PHONY: alway-run-tasks  
alway-run-tasks: protobuf

.PHONY: protobuf
protobuf:
	$(SCRIPTS_DIR)/generate_protobuf.sh