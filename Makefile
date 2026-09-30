# Project variables
PROJECT_NAME ?= app-ui-framework
ORG_NAME ?= 29next
REPO_NAME ?= app-ui-framework

.PHONY: start build

start:
	${INFO} "Start local..."
	@ npm install --ignore-scripts --no-audit --no-fund
	@ npm start

build:
	${INFO} "Build docs site..."
	@ npm install --ignore-scripts --no-audit --no-fund
	@ npm run build:docs


# Cosmetics
YELLOW := "\e[1;33m"
NC := "\e[0m"

# Shell Functions
INFO := @bash -c '\
  printf $(YELLOW); \
  echo "=> $$1"; \
  printf $(NC)' SOME_VALUE
