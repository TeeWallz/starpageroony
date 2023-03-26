#!/bin/bash
set -e

if [ "${BYPASS_LITESTREAM:-true}"  = "true" ] ; then
    echo 'Bypassing Lightstream!'
    exec /app/pocketbase serve --http 0.0.0.0:8090
    exit
fi

echo 'Running Lightstream wrapper around pocketbase'

echo "Check diskspace on VM"
df -h

litestream version

echo "Restore db if exists"
litestream restore -if-replica-exists -if-db-not-exists /pb_data/data.db
litestream restore -if-replica-exists -if-db-not-exists /pb_data/logs.db
echo "Restored successfully"

echo "replicate!"
exec litestream replicate -exec "/app/pocketbase serve --http 0.0.0.0:8090"

