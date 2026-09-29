# Scene

**FourCC:** `OROM` (`0x4F524F4D`)
**Version:** V0

## Binary Layout

| # | Field | Type |
|---|-------|------|
| 1 | commandCount | `u32` |
| 2+ | _(scene commands)_ | See [Scene Commands](scene-commands.md) |

The Scene resource reads `commandCount`, then for each command reads the `cmdId` (`s32`), seeks back, and dispatches to the appropriate scene command factory.
