DEV_DOCS_DIR=${ROOT_DIR}/dev-docs

.PHONY: docs-preview
docs-preview:
	cd ${DEV_DOCS_DIR} && make preview

.PHONY: docs
docs:
	cd ${DEV_DOCS_DIR} && make build