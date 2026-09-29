# CollisionHeader

**FourCC:** `OCOL` (`0x4F434F4C`)
**Version:** V0

## Binary Layout

| # | Field | Type |
|---|-------|------|
| 1 | minBounds.x | `s16` |
| 2 | minBounds.y | `s16` |
| 3 | minBounds.z | `s16` |
| 4 | maxBounds.x | `s16` |
| 5 | maxBounds.y | `s16` |
| 6 | maxBounds.z | `s16` |
| 7 | numVertices | `s32` |

### Vertices (repeated `numVertices` times)

| Field | Type |
|-------|------|
| x | `s16` |
| y | `s16` |
| z | `s16` |

---

| 8 | numPolygons | `u32` |

### Polygons (repeated `numPolygons` times)

| Field | Type | Notes |
|-------|------|-------|
| type | `u16` | |
| flags_vIA | `u16` | Upper 3 bits = flags, lower 13 = vertex A |
| flags_vIB | `u16` | Upper 3 bits = flags, lower 13 = vertex B |
| vIC | `u16` | Vertex C index |
| normal.x | `u16` | |
| normal.y | `u16` | |
| normal.z | `u16` | |
| dist | `u16` | |

---

| 9 | surfaceTypesCount | `u32` |

### Surface Types (repeated `surfaceTypesCount` times)

| Field | Type | Notes |
|-------|------|-------|
| data[1] | `u32` | Read first |
| data[0] | `u32` | Read second |

---

| 10 | camDataCount | `u32` |

### Camera Data (repeated `camDataCount` times)

| Field | Type |
|-------|------|
| cameraSType | `u16` |
| numCameras | `s16` |
| camPosDataIdx | `s32` |

---

| 11 | camPosCount | `s32` |

### Camera Position Data (repeated `camPosCount` times)

| Field | Type |
|-------|------|
| pos.x | `s16` |
| pos.y | `s16` |
| pos.z | `s16` |

---

| 12 | numWaterBoxes | `s32` |

### Water Boxes (repeated `numWaterBoxes` times)

| Field | Type |
|-------|------|
| xMin | `s16` |
| ySurface | `s16` |
| zMin | `s16` |
| xLength | `s16` |
| zLength | `s16` |
| properties | `s32` |
