ROOT_DIR=${PWD}
SCRIPTS_DIR = ${ROOT_DIR}/scripts

DEV_DOCS_DIR=${ROOT_DIR}/dev-docs
LOCAL_K8S_DIR=${ROOT_DIR}/local-k8s-cluster
CICD_DIR=${ROOT_DIR}/cicd

.PHONY: all
all: incremental-tasks alway-run-tasks

.PHONY: incremental-tasks
incremental-tasks: 
	cd ${DEV_DOCS_DIR} && make incremental-tasks
	cd ${LOCAL_K8S_DIR} && make incremental-tasks

.PHONY: alway-run-tasks  
alway-run-tasks: 

# docs

.PHONY: docs-preview
docs-preview:
	cd ${DEV_DOCS_DIR} && make preview

.PHONY: docs
docs:
	cd ${DEV_DOCS_DIR} && make build

# local-k8s-cluster

.PHONY: local-k8s
local-k8s:
	cd ${LOCAL_K8S_DIR} && make deploy

.PHONY: local-k8s-undeploy
local-k8s-undeploy:
	cd ${LOCAL_K8S_DIR} && make undeploy

# ci/cd

.PHONY: cicd
cicd:
	cd ${CICD_DIR} && make deploy

.PHONY: cicd-undeploy
cicd-undeploy:
	cd ${CICD_DIR} && make undeploy