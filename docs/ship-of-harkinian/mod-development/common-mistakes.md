# Common Mistakes

## Common mistakes when making mods

When making mods for Ship of Harkinian. There are sometimes different issues that can happen when misstakes are done.

## "Meat Tornado"

Link turns into a meat tornado and doesnt look hylian.

Workaround: Apply a new skeleton onto the model.

## Corrupted Textures

Textures have been exported with bad material settings. ci8 image settings are the usual culprit in materials. 

Workaround: Export images as RGBA16

## Flipbook Errors

Flipbooks being wierd is normal.

UV between child and adult Link is different and wierd. There is a misspeling aswell that needs to be included for example `gLinkAdultEyesClosedfTex` and `gLinkChildEyesClosedfTex` (note the f)

Make sure to check and fix it by trial and error

## Unnatural Stretch on Link

Parts of Links torso gets stretched to infinity

Workaround: Every bone on Link needs to have geometry assigned in its vertex group. Can be a single tri that have been scaled to `0`. Commonly missed bones are `Collar` and `Sheath` bones

## "Skeleton Not Found" when importing

The decomp version is incompatible with the Fast64 you are using.

Workaround: Read in [Known Issue](./known-issues.md) how to fix this issue
