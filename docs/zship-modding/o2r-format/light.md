# Light

**FourCC:** `LGTS` (`0x46669697`)
**Version:** V0

## Binary Layout

Raw struct read of `sizeof(LightEntry)` ≈ 24 bytes.

### Ambient (8 bytes)

| Offset | Field | Type |
|--------|-------|------|
| 0 | Color[0] | `u8` |
| 1 | Color[1] | `u8` |
| 2 | Color[2] | `u8` |
| 3 | Pad1 | `s8` |
| 4 | ColorCopy[0] | `u8` |
| 5 | ColorCopy[1] | `u8` |
| 6 | ColorCopy[2] | `u8` |
| 7 | Pad2 | `s8` |

### LightData (16 bytes, union - either directional or point)

As directional (`LightN64`):

| Offset | Field | Type |
|--------|-------|------|
| 8  | Color[0] | `u8` |
| 9  | Color[1] | `u8` |
| 10 | Color[2] | `u8` |
| 11 | Pad1 | `s8` |
| 12 | ColorCopy[0] | `u8` |
| 13 | ColorCopy[1] | `u8` |
| 14 | ColorCopy[2] | `u8` |
| 15 | Pad2 | `s8` |
| 16 | Direction[0] | `u8` |
| 17 | Direction[1] | `u8` |
| 18 | Direction[2] | `u8` |
| 19 | Pad3 | `s8` |
| 20–23 | _(padding)_ | - |

As point (`PointLightN64`):

| Offset | Field | Type |
|--------|-------|------|
| 8  | Color[0] | `u8` |
| 9  | Color[1] | `u8` |
| 10 | Color[2] | `u8` |
| 11 | Unk0 | `u8` |
| 12 | ColorCopy[0] | `u8` |
| 13 | ColorCopy[1] | `u8` |
| 14 | ColorCopy[2] | `u8` |
| 15 | Unk1 | `u8` |
| 16–17 | Position[0] | `s16` |
| 18–19 | Position[1] | `s16` |
| 20–21 | Position[2] | `s16` |
| 22 | Unk2 | `u8` |
| 23 | _(padding)_ | - |
