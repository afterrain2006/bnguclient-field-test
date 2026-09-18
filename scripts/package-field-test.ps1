[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
$exe = Join-Path $repoRoot 'src-tauri/target/release/bnguclient.exe'
$resources = Join-Path $repoRoot 'resources'
$buildRoot = Join-Path $repoRoot 'build-field-test'

if (-not (Test-Path -LiteralPath $exe)) { throw "缺少 release 程序：$exe" }
if (-not (Test-Path -LiteralPath $resources)) { throw "缺少资源目录：$resources" }
if (-not (Test-Path -LiteralPath (Join-Path $repoRoot 'dist/index.html'))) {
  throw '缺少前端构建；先运行 npm run build，再运行 cargo build --release --features tauri/custom-protocol --manifest-path src-tauri/Cargo.toml'
}

$name = 'bnguclient-field-test-win64-' + (Get-Date -Format 'yyyyMMdd-HHmmss')
$output = Join-Path $buildRoot $name
New-Item -ItemType Directory -Path $output -Force | Out-Null
Copy-Item -LiteralPath $exe -Destination (Join-Path $output 'bnguclient.exe')
Copy-Item -LiteralPath $resources -Destination (Join-Path $output 'resources') -Recurse
Copy-Item -LiteralPath (Join-Path $repoRoot 'README.md') -Destination (Join-Path $output 'README.md')
Copy-Item -LiteralPath (Join-Path $repoRoot 'docs') -Destination (Join-Path $output 'docs') -Recurse
New-Item -ItemType Directory -Path (Join-Path $output 'artifacts') -Force | Out-Null
foreach ($artifactName in @('fps-cockpit.png', 'fps-menu.png', 'browser-check.json', 'release-check.json')) {
  Copy-Item -LiteralPath (Join-Path $repoRoot "artifacts/$artifactName") -Destination (Join-Path $output "artifacts/$artifactName")
}
New-Item -ItemType Directory -Path (Join-Path $output 'UDP-MQTT Server/proto') -Force | Out-Null
Copy-Item -LiteralPath (Join-Path $repoRoot 'UDP-MQTT Server/proto/messages.proto') -Destination (Join-Path $output 'UDP-MQTT Server/proto/messages.proto')
Set-Content -LiteralPath (Join-Path $output 'run.bat') -Encoding ASCII -Value @'
@echo off
pushd "%~dp0"
start "" "%~dp0bnguclient.exe"
popd
'@

$zip = Join-Path $buildRoot "$name.zip"
Compress-Archive -Path (Join-Path $output '*') -DestinationPath $zip
Write-Output "Package: $zip"
