LOCAL_K8S_DIR=${ROOT_DIR}/local-k8s-cluster

.PHONY: local-k8s
local-k8s:
	cd ${LOCAL_K8S_DIR} && make deploy

.PHONY: local-k8s-undeploy
local-k8s-undeploy:
	cd ${LOCAL_K8S_DIR} && make undeploy