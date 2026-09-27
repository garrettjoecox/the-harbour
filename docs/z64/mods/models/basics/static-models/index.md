---
sidebar_position: 2
---

# Static Model Replacement
TODO

## Alt Equipment (Custom Items)

The Alt Equipment system allows for custom item replacements. Export different items to a new internal folder at `object/object_custom_equip`.

For all new DisplayLists and what to export different items as, see this spreadsheet: https://docs.google.com/spreadsheets/d/1rOTt_7Wr0OGfMR9tHom8dDOooM3rUocz9xi7axpR0sY/edit?gid=556482990#gid=556482990

Exporting as a custom object makes Ship handle the hand merging and other fancy effects.

**Division of Responsibilities:**
- People making player models should provide custom FPS hands with their mod: `gCustomAdultFPSHandDL` or `gCustomChildFPSHandDL`
- People making item mods should only provide the items