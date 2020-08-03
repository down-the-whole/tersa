#!/usr/bin/env bash

set -xe

rsync -ra node_modules/@babel/core modules/@babel
rsync -ra node_modules/@babel/preset-env modules/@babel
rsync -ra node_modules/@babel/plugin-transform-runtime modules/@babel
rsync -ra node_modules/@babel/plugin-syntax-dynamic-import modules/@babel
rsync -ra node_modules/@babel/plugin-transform-arrow-functions modules/@babel
rsync -ra node_modules/@babel/plugin-transform-typescript modules/@babel
