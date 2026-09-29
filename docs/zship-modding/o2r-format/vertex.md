# Vertex

**FourCC:** `OVTX` (`0x4F565458`)
**Version:** V0

## Binary Layout

| # | Field | Type | Notes |
|---|-------|------|-------|
| 1 | count | `u32` | Number of vertices |

Per vertex (repeated `count` times):

| # | Field | Type |
|---|-------|------|
| 2 | ob[0] (X) | `s16` |
| 3 | ob[1] (Y) | `s16` |
| 4 | ob[2] (Z) | `s16` |
| 5 | flag | `u16` |
| 6 | tc[0] (S) | `s16` |
| 7 | tc[1] (T) | `s16` |
| 8 | cn[0] (R) | `u8` |
| 9 | cn[1] (G) | `u8` |
| 10 | cn[2] (B) | `u8` |
| 11 | cn[3] (A) | `u8` |

**Per-vertex: 16 bytes. Total: 4 + (count × 16) bytes.**
