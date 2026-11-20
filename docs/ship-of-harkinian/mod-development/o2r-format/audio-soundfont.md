# AudioSoundFont

**FourCC:** `OSFT` (`0x4F534654`)
**Version:** V2

## Binary Layout

| # | Field | Type |
|---|-------|------|
| 1 | fntIndex | `s32` |
| 2 | medium | `s8` |
| 3 | cachePolicy | `s8` |
| 4 | data1 | `u16` |
| 5 | data2 | `u16` |
| 6 | data3 | `u16` |
| 7 | drumCount | `u32` |
| 8 | instrumentCount | `u32` |
| 9 | soundEffectCount | `u32` |

### Drums (repeated `drumCount` times)

| # | Field | Type |
|---|-------|------|
| 1 | releaseRate | `u8` |
| 2 | pan | `u8` |
| 3 | loaded | `u8` |
| 4 | envelopeCount | `u32` |
| 5 | envelopes[i] - delay, arg | `s16, s16` × envelopeCount |
| 6 | hasSample | `s8` |
| 7 | sampleFileName | `string` |
| 8 | tuning | `float` |

### Instruments (repeated `instrumentCount` times)

| # | Field | Type |
|---|-------|------|
| 1 | isValidEntry | `u8` |
| 2 | loaded | `u8` |
| 3 | normalRangeLo | `u8` |
| 4 | normalRangeHi | `u8` |
| 5 | releaseRate | `u8` |
| 6 | envelopeCount | `s32` |
| 7 | envelopes[i] - delay, arg | `s16, s16` × envelopeCount |
| 8 | hasLowNoteSoundFontEntry | `s8` |
| _(if true)_ | hasSampleRef | `s8` |
| | sampleFileName | `string` |
| | tuning | `float` |
| 9 | hasNormalNoteSoundFontEntry | `s8` |
| _(if true)_ | hasSampleRef | `s8` |
| | sampleFileName | `string` |
| | tuning | `float` |
| 10 | hasHighNoteSoundFontEntry | `s8` |
| _(if true)_ | hasSampleRef | `s8` |
| | sampleFileName | `string` |
| | tuning | `float` |

### Sound Effects (repeated `soundEffectCount` times)

| # | Field | Type |
|---|-------|------|
| 1 | hasSFEntry | `s8` |
| _(if true)_ | hasSampleRef | `s8` |
| | sampleFileName | `string` |
| | tuning | `float` |
