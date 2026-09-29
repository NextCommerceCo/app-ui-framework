# Project variables
PROJECT_NAME ?= app-ui-framework
ORG_NAME ?= 29next
REPO_NAME ?= app-ui-framework

# Filenames
DEV_COMPOSE_FILE := docker-compose.yml

# Check and Inspect Logic
INSPECT := $$(docker compose -p $$1 -f $$2 ps -q $$3 | xargs -I ARGS docker inspect -f "{{ .State.ExitCode }}" ARGS)


CHECK := @bash -c '\
  if [[ $(INSPECT) -ne 0 ]]; \
  then exit $(INSPECT); fi' VALUE

.PHONY: start stop

start:
	${INFO} "Start local..."
	@ docker compose -f $(DEV_COMPOSE_FILE) up $(START_ARGS)

stop:
	${INFO} "stop local..."
	@ docker compose -f $(DEV_COMPOSE_FILE) stop $(STOP_ARGS)


# Cosmetics
YELLOW := "\e[1;33m"
NC := "\e[0m"

# Shell Functions
INFO := @bash -c '\
  printf $(YELLOW); \
  echo "=> $$1"; \
  printf $(NC)' SOME_VALUE
