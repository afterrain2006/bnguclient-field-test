#!/usr/bin/env bash
# Build the Linux desktop client and a field-test tarball on a Linux host.
# Install prerequisites from docs/LINUX.md before running this script.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

if [[ "$(uname -s)" != "Linux" ]]; then
  echo "This build must run on Linux. See docs/LINUX.md." >&2
  exit 1
fi

for command_name in node npm cargo rustc pkg-config; do
  if ! command -v "$command_name" >/dev/null 2>&1; then
    echo "Missing $command_name. See docs/LINUX.md." >&2
    exit 1
  fi
done

if ! pkg-config --exists webkit2gtk-4.1; then
  echo "Missing WebKitGTK 4.1 development files. See docs/LINUX.md." >&2
  exit 1
fi

echo "[linux] installing locked npm dependencies"
npm ci --no-audit --no-fund

echo "[linux] building Tauri desktop binary"
npm run tauri -- build --no-bundle --features lite

echo "[linux] packaging field-test tarball"
bash "$REPO_ROOT/scripts/package-lite-linux.sh"
