#!/bin/bash
set -e
cd wasm
wasm-pack build --target web --out-dir pkg
cd ..   
pnpm run dev