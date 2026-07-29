# Tools and Resources

Tools and reference material for 2 Ship 2 Harkinian mod development.

### SoH Audio Tool

Converts WAV files into the format 2Ship expects for custom audio samples. Despite the name, it targets both SoH and 2Ship.

**Download:** https://github.com/Jameriquiah/SoH-AudioTool/releases

See the [Ship of Harkinian audio modding guide](../../ship-of-harkinian/mod-tutorials/audio-modding/index.mdx) for the full sample replacement workflow, which is largely the same on 2Ship.

:::warning
This is ONLY for audio samples, not streamed audio. The sample rate must match the sample you're replacing, or else you will get slowed down or sped up audio.
:::

## Tutorials

**Repackage .mmrs Songs to Use in 2 Ship 2 Harkinian**
- Converting and preparing `.mmrs` music files for use in 2Ship
- https://gamebanana.com/tuts/19451

## Reference Materials

### Asset Spreadsheets

**2S2H Assets Guide**
- Maps decomp asset names to their 2S2H equivalents, for importing from decomp and exporting to 2Ship
- Covers Object DLs, Other DLs, Alt Asset DLs, Skeletons, Animations, and Scenes on separate tabs
- Flags assets that are out of range
- https://docs.google.com/spreadsheets/d/1Ke2OSwFBqpn7HG9bWQHS0eeyEOFukItEraZSbJdCFsE/edit#gid=0

**Link Flipbooks**
- Eye and mouth flipbook texture names for every Link form: Human, Deku, Goron, Zora, and Fierce Deity
- Lists the array name, directory, whether the texture is vanilla, and the SoH equivalent
- The `2Ship` tab covers 2Ship; the `SoH` tab covers Ocarina of Time
- https://docs.google.com/spreadsheets/d/1Yc3b-BRSnnCEPQSKtQKSEdi5oodFSx7bx8zJ05yMhH8/edit?gid=1353951799#gid=1353951799

:::warning
Non-vanilla flipbook textures will ONLY work on 2Ship 4.0+ and will crash the game on earlier versions.
:::

**Link Voice Samples**
- Charts Link's voice samples, with the name in the o2r, the decomp name, sample rate, and the OoT equivalent
- Split by form: Human, Goron, Fierce Deity, and Deku and Zora
- https://docs.google.com/spreadsheets/d/1Z2OYgKr6JxjuZP_Yw6Ie1TjvmUVGwPZZE_rZ-FLA_BI/edit?usp=sharing

:::note
Deku and Zora Link's voice lines are all shared with Human Link, with a filter applied over the audio.
:::
