#!/bin/bash
# Build script for Ultimate Minecraft Night

echo "=== Building Ultimate Minecraft Night ==="
echo ""

# Create build directory
mkdir -p build
mkdir -p dist

# Copy source files
echo "📦 Packaging source files..."
cp -r src build/
cp -r resources build/
cp melty.json build/
cp melty-manifest.json build/
cp README.md build/

# Create distribution archive
echo "📦 Creating distribution package..."
cd build
tar -czf ../dist/ultimate-minecraft-night-v0.1.0.tar.gz .
cd ..

echo ""
echo "✓ Build complete!"
echo "✓ Distribution: dist/ultimate-minecraft-night-v0.1.0.tar.gz"
echo ""
echo "To test locally:"
echo "  1. Install Ultimate Custom Night"
echo "  2. Install Minecraft: Java Edition"
echo "  3. Extract the archive to a temporary directory"
echo "  4. Load through Melty.gg"
