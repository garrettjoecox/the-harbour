# Path

**FourCC:** `OPTH` (`0x4F505448`)
**Version:** V0

## Binary Layout

| # | Field | Type |
|---|-------|------|
| 1 | numPaths | `u32` |

Per path (repeated `numPaths` times):

| # | Field | Type |
|---|-------|------|
| 1 | pointCount | `u32` |

Per point (repeated `pointCount` times):

| Field | Type |
|-------|------|
| x | `s16` |
| y | `s16` |
| z | `s16` |
