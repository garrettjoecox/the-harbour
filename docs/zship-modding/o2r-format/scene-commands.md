# Scene Commands

**FourCC:** `ORCM` (`0x4F52434D`)

All scene commands share a common preamble: `cmdId` as `s32`. The [Scene](scene.md) resource reads a `commandCount` (`u32`), then for each command reads the `cmdId` (`s32`), seeks back, and dispatches to the appropriate factory.

---

## EndMarker

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |

No additional fields.

---

## SetActorList

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | numActors | `u32` |

Per actor (repeated `numActors` times):

| Field | Type |
|-------|------|
| id | `u16` |
| pos.x | `s16` |
| pos.y | `s16` |
| pos.z | `s16` |
| rot.x | `s16` |
| rot.y | `s16` |
| rot.z | `s16` |
| params | `u16` |

---

## SetAlternateHeaders

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | numHeaders | `u32` |
| 3 | headerNames[i] | `string` × numHeaders |

---

## SetCameraSettings

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | cameraMovement | `s8` |
| 3 | worldMapArea | `s32` |

---

## SetCollisionHeader

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | fileName | `string` |

---

## SetCsCamera

| # | Field | Type | Notes |
|---|-------|------|-------|
| 1 | cmdId | `s32` | |
| 2 | _(unused)_ | `s8` | Discarded |
| 3 | _(unused)_ | `s32` | Discarded |

**Note:** Marked as incomplete (`OTRTODO: FINISH!`).

---

## SetCutscenes

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | fileName | `string` |

---

## SetEchoSettings

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | echo | `s8` |

---

## SetEntranceList

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | numEntrances | `u32` |

Per entrance (repeated `numEntrances` times):

| Field | Type |
|-------|------|
| spawn | `s8` |
| room | `s8` |

---

## SetExitList

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | numExits | `u32` |
| 3 | exits[i] | `u16` × numExits |

---

## SetLightingSettings

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | count | `s32` |

Per lighting setting (repeated `count` times):

| Field | Type |
|-------|------|
| ambientColor[0] | `s8` |
| ambientColor[1] | `s8` |
| ambientColor[2] | `s8` |
| light1Dir[0] | `s8` |
| light1Dir[1] | `s8` |
| light1Dir[2] | `s8` |
| light1Color[0] | `s8` |
| light1Color[1] | `s8` |
| light1Color[2] | `s8` |
| light2Dir[0] | `s8` |
| light2Dir[1] | `s8` |
| light2Dir[2] | `s8` |
| light2Color[0] | `s8` |
| light2Color[1] | `s8` |
| light2Color[2] | `s8` |
| fogColor[0] | `s8` |
| fogColor[1] | `s8` |
| fogColor[2] | `s8` |
| fogNear | `s16` |
| fogFar | `u16` |

**Per entry: 22 bytes** (18×s8 + s16 + u16)

---

## SetLightList

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | numLights | `u32` |

Per light (repeated `numLights` times):

| Field | Type |
|-------|------|
| type | `u8` |
| point.x | `s16` |
| point.y | `s16` |
| point.z | `s16` |
| color[0] | `u8` |
| color[1] | `u8` |
| color[2] | `u8` |
| drawGlow | `u8` |
| radius | `s16` |

**Per entry: 12 bytes**

---

## SetMesh

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | data | `s8` |
| 3 | meshHeader.base.type | `s8` |

If `type != 1`: read `polyNum` as `s8`.
If `type == 1`: `polyNum` = 1 (hardcoded).

### Type 0

Per polygon (repeated `polyNum` times):

| Field | Type |
|-------|------|
| polyType | `s8` |
| meshOpa | `string` |
| meshXlu | `string` |

### Type 1

Single polygon entry:

| Field | Type |
|-------|------|
| format | `u8` |
| _(unused string)_ | `string` |
| _(unused string)_ | `string` |
| bgImageCount | `u32` |

Per background image (repeated `bgImageCount` times):

| Field | Type |
|-------|------|
| unk_00 | `u16` |
| id | `u8` |
| imagePath | `string` |
| unk_0C | `u32` |
| tlut | `u32` |
| width | `u16` |
| height | `u16` |
| fmt | `u8` |
| siz | `u8` |
| mode0 | `u16` |
| tlutCount | `u16` |

Then the DList data:

| Field | Type |
|-------|------|
| polyType | `s8` |
| meshOpa | `string` |
| meshXlu | `string` |

### Type 2

Per polygon (repeated `polyNum` times):

| Field | Type |
|-------|------|
| polyType | `s8` |
| pos.x | `s16` |
| pos.y | `s16` |
| pos.z | `s16` |
| unk_06 | `s16` |
| meshOpa | `string` |
| meshXlu | `string` |

---

## SetObjectList

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | numObjects | `u32` |
| 3 | objectIds[i] | `u16` × numObjects |

---

## SetPathways

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | numPaths | `u32` |
| 3 | pathFileNames[i] | `string` × numPaths |

---

## SetRoomBehavior

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | gameplayFlags | `s8` |
| 3 | gameplayFlags2 | `s32` |

---

## SetRoomList

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | numRooms | `s32` |

Per room (repeated `numRooms` times):

| Field | Type |
|-------|------|
| fileName | `string` |
| vromStart | `s32` |
| vromEnd | `s32` |

---

## SetSkyboxModifier

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | skyboxDisabled | `s8` |
| 3 | sunMoonDisabled | `s8` |

---

## SetSkyboxSettings

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | unk | `s8` |
| 3 | skyboxId | `s8` |
| 4 | weather | `s8` |
| 5 | indoors | `s8` |

---

## SetSoundSettings

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | reverb | `s8` |
| 3 | natureAmbienceId | `s8` |
| 4 | seqId | `s8` |

---

## SetSpecialObjects

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | elfMessage | `s8` |
| 3 | globalObject | `s16` |

---

## SetStartPositionList

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | numStartPositions | `u32` |

Per start position (same as SetActorList ActorEntry):

| Field | Type |
|-------|------|
| id | `u16` |
| pos.x | `s16` |
| pos.y | `s16` |
| pos.z | `s16` |
| rot.x | `s16` |
| rot.y | `s16` |
| rot.z | `s16` |
| params | `u16` |

---

## SetTimeSettings

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | hour | `s8` |
| 3 | minute | `s8` |
| 4 | timeIncrement | `s8` |

---

## SetTransitionActorList

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | numTransitionActors | `u32` |

Per transition actor (repeated `numTransitionActors` times):

| Field | Type |
|-------|------|
| sides[0].room | `u8` |
| sides[0].effects | `u8` |
| sides[1].room | `u8` |
| sides[1].effects | `u8` |
| id | `s16` |
| pos.x | `s16` |
| pos.y | `s16` |
| pos.z | `s16` |
| rotY | `s16` |
| params | `u16` |

**Per entry: 16 bytes**

---

## SetWindSettings

| # | Field | Type |
|---|-------|------|
| 1 | cmdId | `s32` |
| 2 | windWest | `s8` |
| 3 | windVertical | `s8` |
| 4 | windSouth | `s8` |
| 5 | windSpeed | `u8` |
