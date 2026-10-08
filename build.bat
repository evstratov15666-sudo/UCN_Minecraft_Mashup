@echo off
REM Build script for Ultimate Minecraft Night (Windows)

echo === Building Ultimate Minecraft Night ===
echo.

REM Create directories
if not exist "build" mkdir build
if not exist "dist" mkdir dist

REM Copy files
echo 📦 Packaging source files...
xcopy src build\src /E /I /Y >nul
xcopy resources build\resources /E /I /Y >nul
copy melty.json build\ >nul
copy melty-manifest.json build\ >nul
copy README.md build\ >nul

echo ✓ Files packaged in build/

echo.
echo === Build Complete ===
echo.
echo Next steps:
echo   1. Install Ultimate Custom Night
echo   2. Install Minecraft: Java Edition
echo   3. Extract dist/ultimate-minecraft-night-v0.1.0.tar.gz
echo   4. Load through Melty.gg
echo.
