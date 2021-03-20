ROOT_DIR=${PWD}
SCRIPTS_DIR = ${ROOT_DIR}/scripts

.PHONY: deploy
deploy: namespace-deploy argo-workflow-deploy

.PHONY: undeploy
undeploy: argo-workflow-undeploy namespace-undeploy

.PHONY: namespace-deploy
namespace-deploy:
	${SCRIPTS_DIR}/namespace_deploy.sh

.PHONY: namespace-undeploy
namespace-undeploy:
	${SCRIPTS_DIR}/namespace_undeploy.sh

.PHONY: argo-workflow-deploy
argo-workflow-deploy:
	${SCRIPTS_DIR}/argo_workflow_deploy.sh

.PHONY: argo-workflow-undeploy
argo-workflow-undeploy:
	${SCRIPTS_DIR}/argo_workflow_undeploy.sh