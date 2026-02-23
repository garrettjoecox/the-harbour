# Tools and Resources

Essential tools and resources for Ship of Harkinian mod development.

## Core Tools

### Fast64

The primary Blender plugin for creating and exporting models, animations, and scenes for N64 games.

**Repository:** https://github.com/Jameriquiah/fast64/tree/hm64 [Recommended]

**Repository:** https://github.com/HarbourMasters/fast64/tree/legacy

Fast64 allows you to:
- Export custom models and textures
- Create and edit animations
- Export scene geometry
- Configure materials and display lists

:::warning 
Needs specific version of Decomp in order to import original assets. Information about decomp versioning is in `Known Issues`.
:::

### O2R Workspace (Web Tool)

A web-based tool for working with O2R/OTR archives without needing to set up the full development environment.

**URL:** https://o2r.garrettcox.dev/

**Current Capabilities:**
- Replace Link animations with C files (output from fast64)
- Replace actor animations with C files (output from fast64)
- Upload generic files and attach an O2R header to them
- Preview images (including palette support)
- Preview Hex of all resources
- Combine resources from multiple O2R's into one

**Discussion Thread:** https://discord.com/channels/808039310850130000/1448097564678291728

### SoH Audio Tool

A tool for converting WAV files into the format Ship of Harkinian expects for custom audio samples.

**Download:** https://github.com/Jameriquiah/SoH-AudioTool/releases

**Features:**
- Convert WAV files to SoH/2Ship format
- Support for loop points
- Batch conversion support
- Works on Windows, macOS (via drag-and-drop), and Linux
- Drag and drop WAV files directly onto the window

:::warning
This is ONLY for audio samples, not streamed audio. The sample rate must match the sample you're replacing, or else you will get slowed down or sped up audio.
:::

**Ideal Use Cases:**
- Voice packs
- Custom sound effects
- Replacing any audio sample in the game

## Reference Materials

### Asset Spreadsheets

**Segment Calls Reference**
- All segment values required for different models
- https://docs.google.com/spreadsheets/d/1U5ogFN-lUUkJ-yJVvMkO1eWF3l0zMaKI61qEOopbV4I/edit?gid=1210471824#gid=1210471824

**Alt Equipment DisplayLists**
- New DisplayLists for custom items
- https://docs.google.com/spreadsheets/d/1rOTt_7Wr0OGfMR9tHom8dDOooM3rUocz9xi7axpR0sY/edit?gid=556482990#gid=556482990

**Bone Matrix Paths**
- All bone paths for attaching custom geometry
- https://docs.google.com/spreadsheets/d/e/2PACX-1vSVvtGR-gzvLiNBSfo5JGmRl0dIBq_Lj1rG0iQNE29v0iFvbVopVH3jO8mWdhoq9q7gHx4IJ7kmCUC5/pubhtml?gid=0&single=true

**Audio Sample Mapping**
- Charts all WAV files from decomp to matching sound files in oot.otr
- https://docs.google.com/spreadsheets/d/1Yf_1Juzj06RZNmuZsWBSSX5ZD7wTRwjf8WxE25-2pJI/edit?usp=sharing

### Music Modding Database

An expanded resource covering musical assets and more, created by the community.

**URL:** https://purplehato.github.io/ZOOT-Database/

## Automated Tools

### Segment Integrator

Automates the process of adding segment calls to exported models.

**Download:** https://drive.google.com/drive/folders/1ho-0EbIEAO4CInZcMsVCfzQEJYvYKuSY

**Usage:**
- **Windows:** Drag and drop your Objects folder onto the executable
- **Linux:** Set as executable and run: `./Segment_Integrator_Linux "path/to/exported/objects/"`

:::note Limitations
- Only supports Objects as of this writing
- Objects with multiple Segment values are not supported; an error will display, prompting manual handling
:::

## Community Resources

### GameBanana

The primary repository for finished mods.

**Ship of Harkinian Mods:** https://gamebanana.com/games/16121

### Discord Channels

**WIP Mods Thread:** https://discord.com/channels/808039310850130000/1019646354903027712

For mods still in development and community feedback.

## Getting Started Tips

1. **Start with Fast64** - Learn the basics of model export before diving into complex features
2. **Use the O2R Workspace** - Great for quick iterations without full build setup
3. **Reference existing mods** - Download popular mods from GameBanana and study their structure
4. **Join the Discord** - The community is active and helpful for troubleshooting
5. **Check the spreadsheets** - Most technical questions are answered in the reference spreadsheets
