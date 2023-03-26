#!/bin/bash

docker compose exec pocketbase  bash -c '/app/pocketbase migrate up --migrationsDir /app/seed_migrations'