# AudioSample

**FourCC:** `OSMP` (`0x4F534D50`)
**Version:** V2

## Binary Layout

| # | Field | Type |
|---|-------|------|
| 1 | codec | `u8` |
| 2 | medium | `u8` |
| 3 | unk_bit26 | `u8` |
| 4 | isRelocated | `u8` |
| 5 | size | `u32` |
| 6 | sampleData[i] | `u8` × size |
| 7 | loop.start | `u32` |
| 8 | loop.end | `u32` |
| 9 | loop.count | `u32` |
| 10 | loopStateCount | `u32` |
| 11 | loop.state[i] | `s16` × loopStateCount |
| 12 | book.order | `s32` |
| 13 | book.npredictors | `s32` |
| 14 | bookDataCount | `u32` |
| 15 | book.book[i] | `s16` × bookDataCount |
