# Skeleton

**FourCC:** `OSKL` (`0x4F534B4C`)
**Version:** V0

## Binary Layout

| # | Field | Type | Notes |
|---|-------|------|-------|
| 1 | type | `s8` | 0=Normal, 1=Flex, 2=Curve |
| 2 | limbType | `s8` | 0=Invalid, 1=Standard, 2=LOD, 3=Skin, 4=Curve, 5=Legacy |
| 3 | limbCount | `u32` | |
| 4 | dListCount | `u32` | |
| 5 | limbTableType | `s8` | LimbType enum |
| 6 | limbTableCount | `u32` | |
| 7 | limbTable[i] | `string` × limbTableCount | Resource paths to [SkeletonLimb](skeleton-limb.md) resources |

## Enums

### SkeletonType

| Value | Name |
|-------|------|
| 0 | Normal |
| 1 | Flex |
| 2 | Curve |

### LimbType

| Value | Name |
|-------|------|
| 0 | Invalid |
| 1 | Standard |
| 2 | LOD |
| 3 | Skin |
| 4 | Curve |
| 5 | Legacy |
