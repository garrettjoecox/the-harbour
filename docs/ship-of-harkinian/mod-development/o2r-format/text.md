# Text

**FourCC:** `OTXT` (`0x4F545854`)
**Version:** V0

## Binary Layout

| # | Field | Type |
|---|-------|------|
| 1 | msgCount | `u32` |

Per message (repeated `msgCount` times):

| Field | Type |
|-------|------|
| id | `u16` |
| textboxType | `u8` |
| textboxYPos | `u8` |
| msg | `string` |
