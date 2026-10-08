# Installation Guide

## System Requirements

### Minimum
- **OS:** Windows 10 or later
- **CPU:** Intel i5-8400 or equivalent
- **RAM:** 8 GB
- **GPU:** NVIDIA GTX 1060 or equivalent
- **Storage:** 2 GB free space

### Required Games (Must own)
1. **Ultimate Custom Night** (Steam ID: 871720)
   - Available on Steam
   - ~500 MB download

2. **Minecraft: Java Edition**
   - Available on minecraft.net launcher
   - ~1 GB download

## Installation Steps

### Step 1: Install Base Games
Ensure both games are installed on your system:

```
Ultimate Custom Night
  └─ Steam > Library > Search "Ultimate Custom Night"
  └─ Click Install

Minecraft: Java Edition
  └─ minecraft.net/download
  └─ Download Launcher
  └─ Install Java Edition
```

### Step 2: Install Melty.gg

1. Download Melty.gg from https://melty.gg
2. Install the Melty launcher
3. Sign in or create account (free)

### Step 3: Install Mashup

**Via Melty (One-Click Installation):**
1. Open Melty.gg launcher
2. Search for "Ultimate Minecraft Night"
3. Click "Install"
4. Wait for installation to complete (~1 min)
5. Launch the game!

**Manual Installation (Advanced):**
1. Download `ultimate-minecraft-night-v0.1.0.zip`
2. Extract to Melty installation directory
3. Refresh Melty launcher
4. Find "Ultimate Minecraft Night" in library
5. Click Play

### Step 4: First Launch

When you first play:

1. **Office Setup Screen** appears
   - Select Night (1-7)
   - Choose Game Mode (Single/Multiplayer)
   - Set Animatronic Difficulty (0-20)
   - Set Minecraft Mob Difficulty (0-20)
   - Click "Start Night"

2. **Game UI** loads
   - You see the office camera
   - Inventory panel on the right
   - Controls at the bottom
   - Survive until 6 AM (08:00 countdown)

## Troubleshooting

### "Games Not Found" Error

**Problem:** Melty can't find Ultimate Custom Night or Minecraft

**Solution:**
1. Verify both games are installed in their default locations
2. Restart Melty launcher
3. Go to Settings > Verify Game Paths
4. Point to correct installation directories

**UCN Path:**
```
C:\Program Files\Steam\steamapps\common\Ultimate Custom Night
```

**Minecraft Path:**
```
C:\Users\[YourUsername]\AppData\Roaming\.minecraft
```

### "UI Fails to Load" Error

**Problem:** Office setup screen or game UI doesn't appear

**Solution:**
1. Clear Melty cache: `%APPDATA%\Melty\cache`
2. Restart Melty launcher
3. Reinstall the mashup
4. Check browser console for errors (F12)

### "Performance Issues" (Low FPS)

**Problem:** Game runs slowly or freezes

**Solution:**
1. Close other applications
2. Update GPU drivers
3. Lower resolution in game settings
4. Reduce visual effects if available
5. Allocate more RAM to Java (Minecraft settings)

### "Multiplayer Not Working" (LAN)

**Problem:** Can't connect with friends on local network

**Solution:**
1. Ensure both players are on same WiFi/network
2. Disable firewall temporarily for testing
3. Both players must have Melty running
4. Host clicks "Start Multiplayer"
5. Guest clicks "Join Game" and enters host's IP

**Getting Host IP:**
```bash
# Windows
ipconfig
# Look for IPv4 Address (e.g., 192.168.1.100)
```

### "Crashes on Start" Error

**Problem:** Game crashes immediately when launching

**Solution:**
1. Reinstall both base games (UCN and Minecraft)
2. Update Windows to latest version
3. Update GPU drivers
4. Check event viewer for error details
5. Report issue with error code

## System Paths

**Melty Installation:**
```
%APPDATA%\Melty
```

**Mashup Location:**
```
%APPDATA%\Melty\games\ultimate-minecraft-night
```

**Save Files:**
```
%APPDATA%\Melty\ultimate-minecraft-night
```

**Logs:**
```
%APPDATA%\Melty\logs
```

## Uninstallation

### Method 1: Via Melty
1. Open Melty launcher
2. Find "Ultimate Minecraft Night"
3. Click three dots menu
4. Select "Uninstall"
5. Confirm removal

### Method 2: Manual
1. Navigate to `%APPDATA%\Melty\games`
2. Delete `ultimate-minecraft-night` folder
3. Navigate to `%APPDATA%\Melty`
4. Delete `ultimate-minecraft-night` save folder

## Support

- **Documentation:** See README.md and DEVELOPMENT.md
- **Issues:** Report on GitHub
- **Discord:** Join Melty community for help
- **Email:** support@melty.gg

---

**Version:** 0.1.0  
**Last Updated:** 2026-10-08  
**Platform:** Windows 10+
