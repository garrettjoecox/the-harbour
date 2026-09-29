# Common Resource Header (64 bytes)

Every binary resource starts with this fixed header. The resource-specific factory receives the data **after** this header (offset 0x40+).

| Offset | Size | Type     | Field              | Description |
|--------|------|----------|--------------------|-------------|
| 0x00   | 1    | `u8`     | ByteOrder          | `0` = Little Endian, `1` = Big Endian. All subsequent multi-byte reads use this. |
| 0x01   | 1    | `u8`     | IsCustom           | `0` = standard asset, `1` = custom/mod asset |
| 0x02   | 1    | `u8`     | _(reserved)_       | Always `0` |
| 0x03   | 1    | `u8`     | _(reserved)_       | Always `0` |
| 0x04   | 4    | `u32`    | Type               | Resource type FourCC code |
| 0x08   | 4    | `u32`    | ResourceVersion    | Format version (dispatches to V0, V1, etc.) |
| 0x0C   | 8    | `u64`    | Id                 | Unique asset ID (typically `0xDEADBEEFDEADBEEF`) |
| 0x14   | 4    | `u32`    | _(legacy version)_ | Unused by reader |
| 0x18   | 8    | `u64`    | _(ROM CRC)_        | Reserved, written as `0` |
| 0x20   | 4    | `u32`    | _(ROM Enum)_       | Reserved, written as `0` |
| 0x24   | 28   | `u8[28]` | _(padding)_        | Zero-padded to 64 bytes |

**Note:** The reader only consumes bytes 0x00–0x13 (20 bytes). Bytes 0x14–0x3F are reserved/ignored.
