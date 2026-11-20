# Cutscene

**FourCC:** `OCUT` (`0x4F435654`)
**Version:** V0

## Binary Layout

| # | Field | Type |
|---|-------|------|
| 1 | numEntries | `u32` |
| 2 | numCommands | `u32` |
| 3 | endFrame | `u32` |

Then commands are read in a loop until `CS_END` (0xFFFFFFFF):

| # | Field | Type |
|---|-------|------|
| 4 | commandId | `u32` |

## Word Encoding

Sub-data varies by commandId. All data is read as `u32` words with optional half-word endian swapping:

- `HH` = two `u16` packed in one `u32`
- `BBH` = two `u8` + one `u16` packed in one `u32`
- `HBB` = one `u16` + two `u8` packed in one `u32`

## Command Formats

| CommandId | Format per entry | Entries |
|-----------|-----------------|---------|
| 1,2,5,6 (Camera) | `HH, HH` header, then per keyframe: `BBH, u32, HH, HH` | Until continueFlag == -1 |
| 3,4 (SpecialAction/Lighting) | `HH, HH, u32×10` | `size` entries |
| 9 (Cmd09) | `HH, HBB, BBH` | `size` entries |
| 0x13 (Textbox) | `HH, HH, HH` | `size` entries |
| 0x15, 0x1A | `u32×12` | `size` entries |
| 0x2D (SceneTransFX) | `u32, HH, HH` | 1 (no loop) |
| 0x56,0x57,0x7C (BGM) | `HH, HH, u32×10` | `size` entries |
| 0x8C (SetTime) | `HH, HBB, u32` | `size` entries |
| 0x3E8 (Terminator) | `u32, HH, HH` | 1 (no loop) |
| ActorAction (0x0A,0x0F,etc.) | `HH, HH, HH, u32×9` | `size` entries |
| 0xFFFFFFFF (CS_END) | `u32` | Terminates loop |
