#!/usr/bin/env node

/**
 * Installation Guide for Ultimate Minecraft Night
 * This script verifies system requirements before installation
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

console.log(`
╔════════════════════════════════════════════════════════════════╗
║     Ultimate Minecraft Night - Installation Checker            ║
║                      v0.1.0                                    ║
╚════════════════════════════════════════════════════════════════╝
`);

// Check platform
const platform = os.platform();
console.log(`\n📋 System Information:`);
console.log(`   Platform: ${platform === 'win32' ? 'Windows' : platform}`);
console.log(`   Node.js: ${process.version}`);

if (platform !== 'win32') {
  console.warn(`\n⚠️  WARNING: This mashup is optimized for Windows.`);
  console.warn(`   Other platforms may have limited support.`);
}

// Check required directories
console.log(`\n📁 Checking directories...`);

const checks = [
  { name: 'src/core', required: true },
  { name: 'src/mods', required: true },
  { name: 'melty.json', required: true },
  { name: 'melty-manifest.json', required: true }
];

let allValid = true;
checks.forEach(check => {
  const exists = fs.existsSync(path.join(__dirname, check.name));
  const status = exists ? '✓' : '✗';
  const style = exists ? '' : ' (MISSING)';
  console.log(`   ${status} ${check.name}${style}`);
  if (check.required && !exists) {
    allValid = false;
  }
});

if (!allValid) {
  console.error(`\n❌ Installation files are incomplete!`);
  process.exit(1);
}

// Check game installations (mock check)
console.log(`\n🎮 Checking game installations...`);
console.log(`   ℹ️  These must be verified manually in Melty.gg launcher`);
console.log(`   ⏳ Ultimate Custom Night (Steam ID: 871720)`);
console.log(`   ⏳ Minecraft: Java Edition`);

// Summary
console.log(`
╔════════════════════════════════════════════════════════════════╗
║                   Installation Ready!                         ║
╚════════════════════════════════════════════════════════════════╝

✓ All core files present
✓ Package structure valid

📦 Next Steps:
  1. Install Ultimate Custom Night (Steam)
  2. Install Minecraft: Java Edition (Launcher)
  3. Open Melty.gg launcher
  4. Search for "Ultimate Minecraft Night"
  5. Click "Install"
  6. Play!

🎮 First Launch:
  • You'll see the office desk setup screen
  • Select a night (1-7)
  • Choose game mode (Single/Multiplayer)
  • Adjust enemy difficulty (0-20)
  • Click "Start Night"

💬 Need Help?
  • Check README.md for full documentation
  • See DEVELOPMENT.md for technical details
  • Report issues on GitHub

Happy gaming! 🎮
`);

process.exit(0);
