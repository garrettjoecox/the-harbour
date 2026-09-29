# AudioSequence

**FourCC:** `OSEQ` (`0x4F534551`)
**Version:** V2

## Binary Layout

| # | Field | Type |
|---|-------|------|
| 1 | seqDataSize | `u32` |
| 2 | seqData[i] | `s8` × seqDataSize |
| 3 | seqNumber | `u8` |
| 4 | medium | `u8` |
| 5 | cachePolicy | `u8` |
| 6 | numFonts | `u32` |
| 7 | fonts[i] | `u8` × numFonts |
