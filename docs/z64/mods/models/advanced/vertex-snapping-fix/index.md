---
sidebar_position: 5
---

import mtx_bytes from "./mtx_bytes.png"

# Vertex Snapping Fix
Particularly small models (namely GI/GetItem models) often run into a problem where they require better vertex precision than their small size can offer, since at that scale the difference between different vertex positions becomes smaller than the N64 can accurately represent, so they have to get truncated to the nearest available position, causing a sort of warping effect on the model.

There is, however, a solution to this. If you would like an in-depth explanation of how and why it works, you can find it below, but if you just want to know how to utilize you just need to do the following:
- Scale up your model on all axes by 50x in blender, apply transformations, and export like normal.
- In your export files, find the main file for the DL you just exported (it'll be the one simply titled with the name of the DL you exported). Open it up in any text editor and add the following line right below the DL header (that being `<DisplayList Version="0">`):

```xml
    <Matrix Path="objects/gameplay_keep/gGiScaleMtx" Param="G_MTX_PUSH"/>
```

At the time of writing this, `gGiScaleMtx` is built into the most recent build of 2ship and in the nightly versions of SoH, meaning that if you plan to release your mod for either of those versions you do not have to include the actual file in your mod and can stop here. But if you would rather your mod be compatible with previous versions as well, you can download the `gGiScaleMtx` file below and include it in the appropriate directory in your mod.

Download: <a href="./gGiScaleMtx" download>gGiScaleMtx</a>

## In-depth Explanation
It's important to understand exactly what the issue was. Basically GI models for whatever reason are stored extremely tiny in-game, to the point where they hit the limit of the N64's vertex precision levels. You can even see this in Blender when importing one and snapping the camera to orthographic view on an axis. You can see how every vertex fits nicely on a grid. Other models do not have this issue because while they are confined to the very same grid, they are significantly larger so that grid becomes essentially unnoticeable.

Inside an MTX file in O2R, I'll show this with the custom built one I made for GI models.
The matrix data itself begins at offset `0x40`, and is split into two sections, `0x40` through 0x5F is your integer section, and `0x60` through `0x7F` is your fractional section. I will just talk about scale here since its all that's relevant right now.

Your XYZ scale values are stored here: `X - 0x42`, `Z - 0x48`, `Y - 0x56`, with their fractional values being exactly 20 bytes later, and each of these values use 2 bytes each.

<img src={mtx_bytes} alt="Matrix Bytes" width="474" />

The integer section is your whole numbers. These values are signed 16-bit integers meaning the value can range anywhere between `-32768` and `32767` in decimal. What's important here is these values in this custom matrix are all zeroed out (`00 00`) resulting in a scale of `0`.

But wait? 0 scale? That means shrunken into nothing right? Yes, it would if not for our fractional half, where you will see the bytes `1F 05` in each axis. What does this mean?

Our fractional bytes are unsigned 16-bit integers, which means a range between `0` and `65535`. Same amount of total possible numbers but the end result is a tad different here.
The way the fractional section works is it's a literally fraction of 1 whole number. So in this use case we have `00 00` in integer scale, or `0` in decimal, and `1F 05` in our fractional scale.
What this means is that since `65535` (the highest possible representable number here) divided by 50 equals `1310.7`, which rounds up to `1311`. `1311` converted to hexadecimal gives you the value of `051F`, and since the matrix data is little endian you have to swap the two bytes around, so `051F` becomes `1F 05`.

Because `1311` is a 50th of `65535` this results in a fraction of `1/50` or when converted to a decimal amount, this would be `0.02`.
So with an integer scale of `0` and a fractional scale of `0.02`, the final applied scale after all is said and done is `0.02`
