# SkeletonLimb

**FourCC:** `OSLB` (`0x4F534C42`)
**Version:** V0

## Binary Layout

| # | Field | Type | Notes |
|---|-------|------|-------|
| 1 | limbType | `s8` | LimbType enum (see [Skeleton](skeleton.md)) |
| 2 | skinSegmentType | `s8` | ZLimbSkinType enum |
| 3 | skinDList | `string` | Display list path |
| 4 | skinVtxCnt | `u16` | |
| 5 | skinLimbModifCount | `u32` | |

### Skin Limb Modifications (repeated `skinLimbModifCount` times)

| # | Field | Type |
|---|-------|------|
| 1 | unk_4 | `u16` |
| 2 | skinVertexCount | `s32` |

#### Skin Vertices (repeated `skinVertexCount` times)

| Field | Type |
|-------|------|
| index | `s16` |
| s | `s16` |
| t | `s16` |
| normX | `s8` |
| normY | `s8` |
| normZ | `s8` |
| alpha | `u8` |

Then:

| 3 | skinTransformationCount | `s32` |

#### Skin Transformations (repeated `skinTransformationCount` times)

| Field | Type |
|-------|------|
| limbIndex | `u8` |
| x | `s16` |
| y | `s16` |
| z | `s16` |
| scale | `u8` |

### After Modifications Loop

| # | Field | Type |
|---|-------|------|
| 6 | skinDList2 | `string` |
| 7 | legTransX | `float` |
| 8 | legTransY | `float` |
| 9 | legTransZ | `float` |
| 10 | rotX | `u16` |
| 11 | rotY | `u16` |
| 12 | rotZ | `u16` |
| 13 | childPtr | `string` |
| 14 | siblingPtr | `string` |
| 15 | dListPtr | `string` |
| 16 | dList2Ptr | `string` |
| 17 | transX | `s16` |
| 18 | transY | `s16` |
| 19 | transZ | `s16` |
| 20 | childIndex | `u8` |
| 21 | siblingIndex | `u8` |
