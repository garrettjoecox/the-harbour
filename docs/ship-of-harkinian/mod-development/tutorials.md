# Tutorials

Community-created tutorials and guides for Ship of Harkinian mod development.

## Getting Started

### Setup and Environment

**Thebes Beginner Setup Guide**
- Setting up the decomp and basic modding environment
- Recommended for absolute beginners
- Uses a newer decomp and Jameriquiah's Fast64
- https://youtu.be/7nnX7jrC46E

:::tip
This tutorial sets you up for the actual modeling work covered in the guide below.
:::

## Model Creation

### Player Models

**PxExYxTxOxN's Complete Modeling Guide**
- Comprehensive guide to modeling and modding
- Covers the full workflow from start to finish
- https://youtu.be/6Ji_12w5B1M

**Converting Static DLs to Rigged Models**
- Tutorial on turning static Link DisplayLists into fully rigged models
- Perfect for converting existing game assets
- https://gamebanana.com/tuts/19265

## Scene Editing

### Scene Mesh Replacement

**A Rough Tutorial on Scene Editing for Ship of Harkinian**
- Learn how to edit and replace scene meshes
- Covers finding DLs with the GFX debugger
- https://youtu.be/h-2iBjnSkLs

**Key Concepts:**

Scene mesh replacement works mostly like typical DL replacement. The main challenge is finding the individual DLs per scene using the GFX debugger.

**Process:**
1. Use the GFX debugger to locate the specific DisplayList you want to replace
2. Look for the `G_MARKER` at the top of the DL
   - Example: `G_MARKER: scenes/shared/spot01_scene/spot01_room_0DL_009A70`
3. Replace that DL path using your modding tools (like Retro)

:::note
This only affects the scene mesh, not collision or other scene properties.
:::

**Video showing DL location in GFX debugger:** [Reference in Discord dump - video demonstrates the process]

## Animation

### Animation Editing

**Quick & Dirty Animation Editing Tutorial**
- Fast introduction to editing animations
- https://youtu.be/8JQUBg58xq0

**Key Points:**
- Export animations using Fast64
- Edit timing and keyframes
- Re-import into your mod

## Advanced Topics

### Finding Display Lists

Use the **GFX Debugger** (built into Ship of Harkinian) to identify the exact path of any DisplayList in the game:

1. Pause at the frame showing the object/mesh you want to replace
2. Open the GFX Debugger
3. Step through commands to find your target
4. Note the `G_MARKER` path
5. Use that path in your replacement mod

### Working with Decomp

Some advanced modding requires working with the game's decompiled source code. While more complex, this allows for:
- Deep code modifications
- Custom features and mechanics
- Understanding game internals

:::tip
The beginner setup tutorial above covers getting the decomp running. Once comfortable with basic modding, exploring the decomp can unlock new possibilities.
:::

## Tips for Learning

1. **Start Simple** - Begin with texture replacements before attempting full models
2. **Follow Along** - Watch tutorials with Blender open and follow each step
3. **Ask Questions** - The Discord community is helpful; don't hesitate to ask
4. **Reference Examples** - Download existing mods and examine their structure
5. **Iterate** - Your first model probably won't be perfect; keep practicing
6. **Save Often** - Both in Blender and when exporting; crashes can happen
7. **Test Frequently** - Load your mod in-game often to catch issues early

## Community Support

Having trouble? Here are your best resources:

- **Discord Support:** https://discord.com/channels/808039310850130000/1131920363115257896
- **Mod Development Channel:** https://discord.com/channels/808039310850130000/1019646354903027712
- **GameBanana Tutorials:** https://gamebanana.com/tuts/games/16121

## Contributing Tutorials

Created a helpful tutorial? Share it in the Discord mod development channel! The community benefits from shared knowledge.
