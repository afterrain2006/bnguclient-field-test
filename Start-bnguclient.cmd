@echo off
cd /d "%~dp0"
if not exist "src-tauri\target\release\bnguclient.exe" (
  echo Build first: npm run build
  echo Then: cargo build --release --features tauri/custom-protocol --manifest-path src-tauri/Cargo.toml
  pause
  exit /b 1
)
start "bnguclient" "src-tauri\target\release\bnguclient.exe"
