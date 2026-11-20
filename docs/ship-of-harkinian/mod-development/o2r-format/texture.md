# Texture

**FourCC:** `OTEX` (`0x4F544558`)
**Versions:** V0, V1

## V0 Binary Layout

| # | Field | Type | Notes |
|---|-------|------|-------|
| 1 | Type | `u32` | TextureType enum (see below) |
| 2 | Width | `u32` | |
| 3 | Height | `u32` | |
| 4 | ImageDataSize | `u32` | |
| 5 | ImageData | `u8[ImageDataSize]` | Raw pixel data |

## V1 Binary Layout

| # | Field | Type | Notes |
|---|-------|------|-------|
| 1 | Type | `u32` | TextureType enum |
| 2 | Width | `u32` | |
| 3 | Height | `u32` | |
| 4 | Flags | `u32` | Bit flags: `TEX_FLAG_LOAD_AS_RAW` (`1<<0`), `TEX_FLAG_LOAD_AS_IMG` (`1<<1`) |
| 5 | HByteScale | `float` | Horizontal byte scale |
| 6 | VPixelScale | `float` | Vertical pixel scale |
| 7 | ImageDataSize | `u32` | |
| 8 | ImageData | `u8[ImageDataSize]` | Raw pixel data |

## TextureType Enum

| Value | Name |
|-------|------|
| 0 | Error |
| 1 | RGBA32bpp |
| 2 | RGBA16bpp |
| 3 | Palette4bpp |
| 4 | Palette8bpp |
| 5 | Grayscale4bpp |
| 6 | Grayscale8bpp |
| 7 | GrayscaleAlpha4bpp |
| 8 | GrayscaleAlpha8bpp |
| 9 | GrayscaleAlpha16bpp |
