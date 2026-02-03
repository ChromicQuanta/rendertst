#!/bin/bash

cd "$(git rev-parse --show-toplevel)"

docker compose up $SERVICES -d --build