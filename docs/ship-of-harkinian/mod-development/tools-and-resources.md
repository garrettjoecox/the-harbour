# Tools and Resources

Essential tools and resources for Ship of Harkinian mod development.

### Decomp

The original decomp project for OoT. For code mods this can be useful as sometimes there is additional documentation upstream that hasn't made it's way to our codebase that could help with whatever you are working on.

If you are not looking for documentation, but instead are using decomp in combination with another tool like Fast64.

You can directly download the [zip of the codebase here](https://github.com/zeldaret/oot/archive/refs/heads/main.zip) or you can clone with Git:
```sh
git clone https://github.com/zeldaret/oot.git
```

### Fast64
It's highly recommended that if you are loading a blend file you previously used and made edits in with legacy Fast64, to create a brand new file and append your old blend file's contents into it instead of just loading the original blend. **Cached data and carried over legacy settings can and will cause material bugs and export errors.**

:::warning
If you have done mods using legacy Fast64. Jameriquiah's Fast64 imports and exports at a different scale compared to legacy. If you are opening a blend with DL's you imported from legacy, reimport the original DL, delete all geometry and materials **in edit mode**, then join your old DL into the new import.
:::
The primary Blender plugin for creating and exporting models, materials, animations for SoH. This is a fork of the original, purpose built for SoH modding.

**Repository:** https://github.com/Jameriquiah/fast64/tree/hm64

### Retro

TODO
https://github.com/HarbourMasters/retro

### Future

TODO
https://github.com/louist103/future

### OTRMod (Web Tool)

TODO
https://soh.xoas.eu.org/

### O2R Message Editor (Web Tool)

TODO
https://o2r-message-editor.garrettcox.dev/

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

## Reference Materials

### PurpleHato's Asset Database

**https://purplehato.github.io/HM64-DB/oot**

Naming & metadata for the following game assets:
- Display Lists
- Segment Calls
- Animations
- Sounds
- Instruments

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
- Charts all WAV files from decomp to matching sound files in oot.otr and oot.o2r
- https://docs.google.com/spreadsheets/d/1Yf_1Juzj06RZNmuZsWBSSX5ZD7wTRwjf8WxE25-2pJI/edit?usp=sharing
