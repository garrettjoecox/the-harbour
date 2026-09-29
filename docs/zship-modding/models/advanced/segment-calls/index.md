---
sidebar_position: 4
---

import segmentc from "./segmentc.png"
import culloptions from "./culloptions.png"

# Segment Calls
Segment Calls are used to tell the game to apply a particular effect to your mesh depending on the model you're replacing. For example, Dark Link calls Segment C for its fade-in effect.

:::note
Segment calls are entirely dependent on the model you are replacing in that you cannot use an effect that the vanilla model did not use in the original game. For example, if you are replacing Dark Link you can *only* use Segment C for its fade-in effect. No other segment call or effect is possible on that model.
:::

To see what segment call each model requires, you can check out [this spreadsheet here](https://docs.google.com/spreadsheets/d/1U5ogFN-lUUkJ-yJVvMkO1eWF3l0zMaKI61qEOopbV4I/edit?usp=sharing)

## Segment C on Link
To give a specific example, as well as the one that would be most broadly useful, we will now cover the segment call that Link's models use.

Link's models (including equipment) uses Segment C to control his reflection in the Dark Link reflection pool. What it does is force Cull Back on all his materials in all instances except for when it renders his reflection, when it instead forces Cull Front. If you do not use Segment C on your Link model and instead just set Cull Back on, Link's reflection will render inside out.

Setting up your materials to account for this is fairly easy, if a little tedious. For each material on your Link model and/or equipment that you would normally want one-sided scroll down in your material settings to the table "OOT Dynamic Material Properties" and enable the checkbox labeled "Segment C"

<img src={segmentc} alt="Segment C" width="300" />

Next, move to the Geo tab in your material settings (if you don't see it make sure the "Show Simplified UI" checkbox is turned off). And uncheck Cull Back so that both Cull options are turned off.

<img src={culloptions} alt="Cull Options" width="300" />

:::warning
Any materials that use transparency such as translucency or cutouts (except decals which are fine) will not be able to pass through Segment C and will need Segment C disabled or else they will cause all sorts of graphical glitches on the reflection. If you want these materials to not be flipped inside out in the reflection, the only option is the disable Segment C and disable both Cull Front and Cull Back.
:::


