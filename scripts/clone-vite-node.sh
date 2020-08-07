#!/usr/bin/env bash

set -xe

rsync -r modules/vite/src/. src-vite/.

rm -rf src-vite/client
