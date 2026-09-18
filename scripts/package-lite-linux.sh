#!/usr/bin/env bash
# Package the Linux field-test binary and its configuration resources.
# The AI service is not included in this field-test distribution.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

if [[ "$(uname -s)" != "Linux" ]]; then
  echo "Linux packaging must run on Linux." >&2
  exit 1
fi

TARGET_DIR="${CARGO_TARGET_DIR:-$REPO_ROOT/src-tauri/target}"
BIN_SRC="$TARGET_DIR/release/bnguclient"
[[ -x "$BIN_SRC" ]] || { echo "Missing Linux binary: $BIN_SRC" >&2; exit 1; }
[[ -d resources ]] || { echo "Missing resources directory" >&2; exit 1; }
[[ -f dist/index.html ]] || { echo "Missing frontend build: dist/index.html" >&2; exit 1; }

ARCH="$(uname -m)"
PKG_NAME="bnguclient-field-test-linux-$ARCH"
mkdir -p build-linux
STAGE_DIR="$(mktemp -d "$REPO_ROOT/build-linux/.stage.XXXXXXXX")"
trap 'rm -rf -- "$STAGE_DIR"' EXIT
PKG_DIR="$STAGE_DIR/$PKG_NAME"
mkdir -p "$PKG_DIR"
cp "$BIN_SRC" "$PKG_DIR/bnguclient"
cp -a resources "$PKG_DIR/resources"
cp docs/LINUX.md "$PKG_DIR/LINUX.md"
cp docs/USAGE.md "$PKG_DIR/USAGE.md"
cp docs/FIELD_TEST.md "$PKG_DIR/FIELD_TEST.md"

cat > "$PKG_DIR/run.sh" <<'EOF'
#!/usr/bin/env bash
set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$HERE"
export SHARK_CACHE_DIR="${SHARK_CACHE_DIR:-$HERE/Cache}"
mkdir -p "$SHARK_CACHE_DIR"
exec "$HERE/bnguclient" "$@"
EOF
chmod +x "$PKG_DIR/bnguclient" "$PKG_DIR/run.sh"

tar -czf "build-linux/$PKG_NAME.tar.gz" -C "$STAGE_DIR" "$PKG_NAME"
echo "Linux field-test archive: $REPO_ROOT/build-linux/$PKG_NAME.tar.gz"
