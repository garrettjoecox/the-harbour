# Known Issues

## Index out of range

Affects: Model import/export through Fast64 plugin.
Description: A significant number of DLs cannot be imported into Blender, reporting the error "Index out of range" when attempting to do so. A null object imports into the Blender scene. Attempting a blind export to affected DLs does not produce functional results.
Most affected DLs appear to be parented to joints or objects; this relationship is broken in a blind export.

Workarounds: Open the object's C file, e.g. `object_link_child.c` `object_link_boy.c` and use `Ctrl+F` to search for the DL you want to import, when you locate it, look for a line in the DL, beginning with `gsSPMatrix`. Delete this line, it's typically at the top of the DL entry, certain DLs like the bunny hood will have multiple of these lines (for the ears), delete them too and reimport.

## Base texture extraction and manifest generation failing in Retro

Affects: OTR/O2R texture extraction with Retro 0.2.0
Description: Attempting to unpack asset archives with the latest versions of Retro produces incomplete results; often just a font file, but sometimes an incomplete set of textures.

Workarounds: Retro 0.0.5 alpha does not appear to have this issue - using this version to unpack the archives, and the latest version to pack them, appears to be the best solution for now.

Workarounds: Update to Retro 0.2.1 as texture extraction has been fixed in that version

## Retro Linux .Appimage

Latest Appimage for Retro can be stuck on a blackscreen. If that happens then use windows version through wine or proton or use Retro 0.0.5

## Retro cannot process images with dots in the filename

Affects: Replacing the SD textures with HD versions in custom models
Description: Unpacking a custom model's mod archive and replacing the textures when the texture filenames include dots before the extension, those textures are not recognised as and do not produce usable images.
This would be avoidable, but newer versions of Fast64 forcibly include identifying format data between dots, making it impossible.

Workarounds: Must use an older version of Fast64, and avoid using texture filenames with multiple dots, or alter the exported texture and material files in a text editor to remove the extra dots and correct the data.

## Ship of Harkinian Fast64 and Decomp issues

Ship of Harkinian requires specific versions of the Ocarina of Time decomp and Fast64

There are 2 versions of Fast64 that can be used for Ship of Harkinian modding.

- Legacy Fast64 by HM64 - https://github.com/HarbourMasters/fast64/tree/legacy
- Fast64 HM64 Fork by Jameriquiah - https://github.com/Jameriquiah/fast64/tree/hm64

**LEGACY Fast64**
Requires a specific version of https://github.com/zeldaret/oot

Do the install in the readme but before step **3** do `git checkout 21cb04d` to downgrade decomp to a version compatible with Legacy Fast64

**Fast64 HM64 Fork by Jameriquiah**

As of 2026-03-08 If you have the latest version of Jameriquiah's Fast64 Plugin then latest decomp will work with Fast64.
