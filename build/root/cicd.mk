CICD_DIR=${ROOT_DIR}/cicd

.PHONY: cicd
cicd:
	cd ${CICD_DIR} && make deploy

.PHONY: cicd-undeploy
cicd-undeploy:
	cd ${CICD_DIR} && make undeploy