# Array

**FourCC:** `OARR` (`0x4F415252`)
**Version:** V0

## Binary Layout

| # | Field | Type | Notes |
|---|-------|------|-------|
| 1 | ArrayType | `u32` | Enum: Vertex, Scalar, Vector |
| 2 | ArrayCount | `u32` | |

Per element (repeated `ArrayCount` times):

### ArrayType == Vertex

Same 16-byte vertex struct as [Vertex](vertex.md) resource (s16×3, u16, s16×2, u8×4).

### ArrayType == Scalar or Vector

| # | Field | Type |
|---|-------|------|
| 1 | ArrayScalarType | `u32` |
| 2 | iter (Vector only) | `u32` |
| 3 | values[i] | `s16` or `u16` × iter |

ScalarType: `ZSCALAR_S16` → `s16`, `ZSCALAR_U16` → `u16`.

For Scalar, `iter` defaults to 1 (not read from stream).
