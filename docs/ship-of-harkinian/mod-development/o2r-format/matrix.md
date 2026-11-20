# Matrix

**FourCC:** `OMTX` (`0x4F4D5458`)
**Version:** V0

## Binary Layout

16 values in a 4×4 nested loop (row-major, i=0..3, j=0..3):

| # | Field | Type | Notes |
|---|-------|------|-------|
| 1–16 | Matrx[i][j] | `float` or `s32` | Compile-time: `float` if `GBI_FLOATS`, else `s32` (N64 fixed-point) |

**Total: 64 bytes** (16 × 4)
