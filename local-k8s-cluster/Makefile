ifneq (,$(wildcard ./.env))
    include .env
    export
endif

SCRIPT_DIR = ${PWD}/scripts

# build

.PHONY: nfs-docker
nfs-docker:
	bash ${SCRIPT_DIR}/build_nfs_docker.sh
	
.PHONY: clean
clean: delete-docker-images

.PHONY: delete-docker-images
delete-docker-images:
	bash $(SCRIPT_DIR)/delete_local_images.sh 

.PHONY: push
push:
	bash $(SCRIPT_DIR)/push_docker_images.sh 

# deploy
.PHONY: deploy-nfs
deploy-nfs:
	bash ${SCRIPT_DIR}/deploy_nfs.sh
.PHONY: undeploy-nfs
undeploy-nfs:
	bash ${SCRIPT_DIR}/undeploy_nfs.sh

.PHONY: create
create: deploy-nfs
	bash ${SCRIPT_DIR}/create_cluster.sh

.PHONY: delete
delete:
	bash ${SCRIPT_DIR}/delete_cluster.sh
	make undeploy-nfs

.PHONY: kubectl
kubectl:
	bash ${SCRIPT_DIR}/run_kubectl.sh

# deploy
.PHONY: deploy-dns
deploy-dns:
	bash ${SCRIPT_DIR}/deploy_docker_dnsmasq.sh
.PHONY: undeploy-nfs
undeploy-dns:
	bash ${SCRIPT_DIR}/undeploy_docker_dnsmasq.sh