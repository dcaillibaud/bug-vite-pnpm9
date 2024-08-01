#!/usr/bin/env sh

version=${1-9}
./install.sh "$version"

echo "run vite build"
vite build --debug
