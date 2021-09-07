#!/bin/bash

. ./.env.local

wget -O schema.json "$NEXT_PUBLIC_API_URL"/schema.json

rm -rf ./api/generated

docker run --rm \
  -v "${PWD}":/local \
  openapitools/openapi-generator-cli generate \
  -i /local/schema.json \
  -g typescript-axios \
  -o /local/api/generated
