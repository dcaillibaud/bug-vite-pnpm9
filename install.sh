#!/usr/bin/env sh

version=${1-9}

echo "install modules with pnpm@$version"

rm -rf node_modules pnpm-lock.yaml
npx pnpm@"$version" install
