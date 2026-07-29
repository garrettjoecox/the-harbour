# Mod Development

Mod support on Ship of Harkinian is driven through [o2r files](../o2r-format/), which allow you to override assets from the original game. When you first launch Ship of Harkinian, it will extract the assets from your ROM and create an oot.o2r file. Anything within this file is available to be replaced, however with the current tooling we are realistically only able to replace text, textures, models, animations, and audio. We are still waiting on a wizard to arrive and complete the scene modification tooling. (Help wanted)

Code however, is not stored in the o2rs, so we do not have the ability to support code mods. However we do encourage people to create their own forks of the codebase and share them on Discord. The downside here is, you have to distrubute your own exectuable, github actions makes this easy, but this means you cannot easily mix and match multiple custom builds. Most of the guides in this section will be focused on asset modding, but we will have a few guides on how to set up your own codebase and share it as well.

### Quick Start - I want to mod:

- [**Text**](./text-replacement.md)!
- [**Textures**](../mod-tutorials/texture-replacement/index.mdx)!
- [**Models**](./model-replacement.md)!
- [**Animations**](./animation-modding.md)!
- [**Audio**](../mod-tutorials/audio-modding/index.mdx)!
- [**Code**](./code-modding.md)!
