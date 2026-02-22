# Model Replacement

TODO: Quick start guide. Below is just some random notes

### Scene Mesh Replacement

Scene mesh replacement follows the typical DL replacement workflow, but requires manual path discovery.

**Finding DisplayList Paths:**
1. Use the GFX debugger to locate specific DLs
2. Look for `G_MARKER:` entries
   - Example: `G_MARKER: scenes/shared/spot01_scene/spot01_room_0DL_009A70`
3. This path is what you replace with your custom DL

**Limitations:**
- Only affects scene mesh geometry
- Does not affect collision
- Does not affect other scene properties (lighting, exits, etc.)

### Custom Asset Internal Paths

When exporting custom assets, internal path structure matters:

**Alt Equipment Example:**
- Export items to: `object/object_custom_equip`
- This allows Ship to handle hand merging and effects automatically
- See asset spreadsheet for all required DisplayLists

**Player Model FPS Hands:**
- `gCustomAdultFPSHandDL` - Adult Link first-person hands
- `gCustomChildFPSHandDL` - Child Link first-person hands
- Export these with player model mods for FPS item viewing