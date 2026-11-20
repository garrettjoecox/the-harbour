# Animation

**FourCC:** `OANM` (`0x4F414E4D`)
**Version:** V0

## Binary Layout

| # | Field | Type | Notes |
|---|-------|------|-------|
| 1 | animType | `u32` | 0=Normal, 1=Link, 2=Curve, 3=Legacy |

### animType == Normal (0)

| # | Field | Type |
|---|-------|------|
| 2 | frameCount | `s16` |
| 3 | rotValuesCnt | `u32` |
| 4 | rotationValues[i] | `u16` × rotValuesCnt |
| 5 | rotIndCnt | `u32` |
| 6 | rotationIndices[i] - x, y, z | `u16, u16, u16` × rotIndCnt |
| 7 | staticIndexMax | `s16` |

### animType == Link (1)

| # | Field | Type |
|---|-------|------|
| 2 | frameCount | `s16` |
| 3 | path | `string` |

### animType == Curve (2)

| # | Field | Type |
|---|-------|------|
| 2 | _(unused frameCount)_ | `s16` |
| 3 | refArrCnt | `u32` |
| 4 | refIndexArr[i] | `u8` × refArrCnt |
| 5 | transformDataCnt | `u32` |
| 6 | transformData[i] - unk_00, unk_02, unk_04, unk_06, unk_08 | `u16, s16, s16, s16, float` × transformDataCnt |
| 7 | copyValuesCnt | `u32` |
| 8 | copyValuesArr[i] | `s16` × copyValuesCnt |

### animType == Legacy (3)

No additional fields.
