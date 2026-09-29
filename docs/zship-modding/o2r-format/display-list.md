# DisplayList

**FourCC:** `ODLT` (`0x4F444C54`)
**Version:** V0

## Binary Layout

| # | Field | Type | Notes |
|---|-------|------|-------|
| 1 | UCode | `s8` | Enum: 0=f3db, 1=f3d, 2=f3dex, 3=f3dexb, 4=f3dex2, 5=s2dex |
| 2 | _(alignment padding)_ | `s8[]` | 0–7 bytes of padding until stream is 8-byte aligned |
| 3+ | Instructions | `u32, u32` | Repeating pairs of (w0, w1) until EndDL opcode |

## Notes

- **Termination:** Loop ends when `(s8)(w0 >> 24)` equals the EndDL opcode for the microcode
- **128-bit commands:** Opcodes `G_SETTIMG_OTR_HASH`, `G_DL_OTR_HASH`, `G_VTX_OTR_HASH`, `G_BRANCH_Z_OTR`, `G_MARKER`, `G_MTX_OTR`, `G_MOVEMEM_OTR` read 4×u32 (two Gfx entries) instead of 2×u32

## UcodeHandlers Enum

| Value | Name |
|-------|------|
| 0 | ucode_f3db |
| 1 | ucode_f3d |
| 2 | ucode_f3dex |
| 3 | ucode_f3dexb |
| 4 | ucode_f3dex2 |
| 5 | ucode_s2dex |
