# O2R Format

O2R files are ZIP archives. Each file inside the archive is a binary resource with a common 64-byte header followed by resource-specific data.

## File Structure

Every resource in an O2R archive follows this pattern:
```
[64-byte common header] [resource-specific payload]
```

See [header.md](header.md) for the common header format.

## String Encoding

Strings in the binary format are length-prefixed:

| Field | Type | Notes |
|-------|------|-------|
| length | `u32` | Number of bytes in the string (not including this length field) |
| data | `char[length]` | UTF-8 string data (no null terminator stored) |

## Resource Types

### Fast3D Resources (libultraship)
| Type | FourCC | Hex | Version | File |
|------|--------|-----|---------|------|
| DisplayList | `ODLT` | `0x4F444C54` | V0 | [display-list.md](display-list.md) |
| Light | `LGTS` | `0x46669697` | V0 | [light.md](light.md) |
| Matrix | `OMTX` | `0x4F4D5458` | V0 | [matrix.md](matrix.md) |
| Texture | `OTEX` | `0x4F544558` | V0, V1 | [texture.md](texture.md) |
| Vertex | `OVTX` | `0x4F565458` | V0 | [vertex.md](vertex.md) |

### SOH Game Resources
| Type | FourCC | Hex | Version | File |
|------|--------|-----|---------|------|
| Animation | `OANM` | `0x4F414E4D` | V0 | [animation.md](animation.md) |
| PlayerAnimation | `OPAM` | `0x4F50414D` | V0 | [player-animation.md](player-animation.md) |
| Array | `OARR` | `0x4F415252` | V0 | [array.md](array.md) |
| AudioSample | `OSMP` | `0x4F534D50` | V2 | [audio-sample.md](audio-sample.md) |
| AudioSequence | `OSEQ` | `0x4F534551` | V2 | [audio-sequence.md](audio-sequence.md) |
| AudioSoundFont | `OSFT` | `0x4F534654` | V2 | [audio-soundfont.md](audio-soundfont.md) |
| Background | `OBGI` | `0x4F424749` | V0 | [background.md](background.md) |
| CollisionHeader | `OCOL` | `0x4F434F4C` | V0 | [collision-header.md](collision-header.md) |
| Cutscene | `OCUT` | `0x4F435654` | V0 | [cutscene.md](cutscene.md) |
| Path | `OPTH` | `0x4F505448` | V0 | [path.md](path.md) |
| Skeleton | `OSKL` | `0x4F534B4C` | V0 | [skeleton.md](skeleton.md) |
| SkeletonLimb | `OSLB` | `0x4F534C42` | V0 | [skeleton-limb.md](skeleton-limb.md) |
| Text | `OTXT` | `0x4F545854` | V0 | [text.md](text.md) |
| Scene | `OROM` | `0x4F524F4D` | V0 | [scene.md](scene.md) |

### Scene Commands (FourCC: `ORCM` / `0x4F52434D`)
| Command | File |
|---------|------|
| All scene commands | [scene-commands.md](scene-commands.md) |

### Ship Core (libultraship)
| Type | FourCC | Hex |
|------|--------|-----|
| Blob | `OBLB` | `0x4F424C42` |
| Json | `JSON` | `0x4A534F4E` |
| Shader | `SHAD` | `0x53484144` |

### Understanding the Resource Loading Pipeline

When you first launch Ship of Harkinian, it will extract the assets from your ROM and create an oot.o2r archive with all assets separated into individual files in a special binary format. Anything within this file is available to be replaced, but when creating resource tooling, it is important that the format your tool exports matches this binary format **exactly**.


Resources in the ROM go through a multi-step process to be loaded into the game:

#### Step 1: ZAPD Extraction

ZAPD is used in combination with the ROM XMLs to pull resources out of the ROM and into memory as various resource types in `ZAPDTR/ZAPD/*`:
- `ZRoom` - Room/scene data
- `ZDisplayList` - Display lists
- `ZTextMM` - Text resources
- And many more...

#### Step 2: OTR Export

OTRExporter is used to write these ZAPD resources into the custom O2R format within the O2R file.

**Key Changes:**
- Sometimes the result is very similar to what was pulled from the ROM
- Sometimes it's changed significantly
- Anything that references another resource gets that reference replaced with either:
  - A string path to the resource, OR
  - A CRC64 hash of the path to that resource
- This replaces the pointer references that the ROM used

#### Step 3: Resource Factory Import

Resources are read from the O2R by resource factories located in `mm/2s2h/resource/importer/*`

These factories place resources into LUS objects that mostly reflect their in-game counterparts, with possible subtle differences.

#### Step 4: Game Code Usage

The game then loads these objects from LUS using calls like:
```cpp
std::static_pointer_cast<SOH::TextMM>(
    Ship::Context::GetInstance()->GetResourceManager()->LoadResource(filePath)
);
```

:::tip
The best way to learn the system is to pick a simple resource type (like text or audio samples) and trace it through all four steps of the pipeline.
:::

### Example: Text Resources End-to-End

Following a text resource through all stages:

1. **ZAPD:** `ZAPDTR/ZAPD/ZTextMM.cpp` - Parses raw ROM data into `ZTextMM`
2. **OTRExporter:** `OTRExporter/OTRExporter/TextMMExporter.cpp` - Converts `ZTextMM` into custom format stored in O2R
3. **Factory:** `mm/2s2h/resource/importer/TextMMFactory.cpp` - Reads from O2R into LUS's `SOH::ResourceType::TSH_TextMM`
4. **Game Code:** `mm/2s2h/z_message_OTR.cpp` - Loads data from LUS and uses it

## Creating New Tooling

When creating tooling for custom resources:

**Requirements:**
- Export data in the EXACT format that the Resource Factory (Step 3) expects
- Match what OTRExporter (Step 2) would have written to the O2R
- Match types precisely (u8 vs s16, etc.)
- Match order exactly
- Include CRC64 hashes where the factory expects them

:::warning Critical
The format must match **perfectly**. Any mismatch in type, order, or structure will cause loading to fail.
:::

### Example: Fast64 O2R Export

#### Working Diff for 2Ship Models

**DisplayLists, Materials, and Skeletons:**
- https://github.com/Yanis002/fast64/compare/mm_dev...garrettjoecox:fast64:main

**Full Scene Export (Work in Progress):**
- Exports geometry, DLs, and materials (not fully working yet)
- https://github.com/garrettjoecox/fast64/commit/7d2f984466444beecd3357db143931d665c55f45
