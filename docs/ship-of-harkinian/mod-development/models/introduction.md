import f3d_converter from "/img/zship-modding/models/f3d_converter.png"
import f64_download from "/img/zship-modding/models/f64_download.png"
import f64_global from "/img/zship-modding/models/f64_global.png"
import preferences from "/img/zship-modding/models/preferences.png"
import workspace_settings from "/img/zship-modding/models/workspace_settings.png"
import cosmetic_entry from "/img/zship-modding/models/cosmetic_entry.png"

# Introduction and Setup
Getting ready to make a model mod for Ship of Harkinian or 2 Ship 2 Harkinian.

## Setup
Before you can get started with your model mod, you’re going to need to get the right tools and resources prepped first:
- ### Blender 3.2 - 5.1.2
  https://www.blender.org/  
  Even if you don’t do your modeling in Blender normally, the add-on we’re going to use for importing and exporting assets is only compatible with Blender, so either way you still need it. Note that you can still make your model in whatever program you like, but to mod it into the game you would have to move it into Blender.

- ### Fast64
  https://github.com/HarbourMasters/fast64  
  The Blender add-on that allows us to import and export assets for SoH and 2Ship.  We will discuss this in more detail [below](#fast64).

- ### Source O2R and/or Decompilation
  1. An oot.o2r or mm.o2r generated from a recent version of SoH or 2Ship respectively.  We use this in order to import game assets into Blender.  This is much easier to obtain than a decompilation, but cannot be used for scene importing.
  2. A decompilation of [Ocarina of Time](https://github.com/zeldaret/oot#installation) or [Majora's Mask](https://github.com/zeldaret/mm#installation).  The setup for this is much more involved and requires a Linux setup.  You can find the specific installation instructions by clicking on either link.  Unlike using a source o2r, there are no inherent limitations with importing when using a decomp.

:::note
If for whatever reason you don't actually have either Ship of Harkinian or 2 Ship 2 Harkinian installed, you can follow one of the installation guides here:
- [Ship of Harkinian Installation Guide](/ship-of-harkinian/info/installation-guide.md)
- [2 Ship 2 Harkinian Installation Guide](/2ship2harkinian/info/installation-guide.md)
:::


## Basic Information
A brief introduction to the process for making model mods

Models in N64 games are stored as DisplayLists, or DLs as we often call them.  The main objective of any model mod is simply to export a model from blender with the right DL name and pathing to replace a pre-existing asset.  
Before starting with your model mod, check the rules for that port's Gamebanana page.  Note that if your mod idea breaks any of these rules then you will not be able to post your completed mod to Gamebanana.  
The following is the basic workflow for making a model mod; more details on each step can be found in their respective guides:

1. Import a vanilla model from a source O2R.
2. Line up your custom model with the imported model and, if doing a skeleton replacement, set up your model's vertex groups. 
3. Export your model from Blender into the proper directory.  You should be exporting to a folder named `alt` as to enable the alt toggling feature which allows players to turn your mod on and off at the press of a button.  This is required if you want to post your mod to gamebanana.
4. In any file explorer, navgate to your export directory and select all the files and directories you would like to pack, including your `alt` folder, `CosmeticEntries` file if you have one, etc.  
5. Rename the file extension into `.o2r` and name your mod whatever you want.

:::note
Mods are packed as files called "O2Rs", which in reality are just renamed ZIP archives.  
Older versions of SoH (lower than 9.0.0) only support "OTR" mods, which are renamed MPQ files.  You can pack your files into an OTR using the [Retro program](https://github.com/HarbourMasters/retro/releases/latest) and edit pre-existing OTR mods with a program called "Ladik's MPQ Editor"
:::

___

## Fast64 Installation
Fast64 is the import/export tool we use to make model modes.  In this part of the guide we will be going over how to use and navigate the Fast64 addon for Blender.

The version of Fast64 we will be using can be found here: https://github.com/HarbourMasters/fast64  
Start by clicking on the bright green “Code” button and select “Download Zip”

<img src={f64_download} alt="Downloading Fast64" width="100%" />

Now, open up Blender, and on the top bar click on “Edit” → “Preferences”

<div class="text--center"> 
  <img src={preferences} alt="Opening Preferences" width="500" />
</div>

Next, navigate to the “Add-ons” tab and in the top right either hit “Install” or the small dropdown button then “Install from Disk”, depending on your blender version.  
Find and select the Fast64 zip you installed, then restart Blender.  You have now successfully installed Fast64.

## Guided Tour
Fast 64 has a lot of features to you made need to use as you create your model mods, so this next section will go through some of the more important ones.

### Fast64 Tab
By clicking on the tab labeled Fast64 on the right (if you don’t see it try pressing the “N” key on your keyboard) you’ll find a long list of settings related to how the tool functions. In my experience, you really only need to know about two sections of these:

Here in the Fas64 Global Settings you can change your game depending on the port you want to mod for.  For SoH and 2Ship, you want to just keep it on OOT.  
Another useful setting here is the “Prefer RGBA Over CI”.  As you set textures, Fast64 tries to auto pick the most appropriate texture types, which sometimes might not be what you want, like in the case of the CI format which is really only useful for those who want to stay faithful to N64 limitations.  By contrast, the RGBA formats are the typical full color formats you would expect, so those might be preferable for your purposes.  For more information on texture formats, see the [section at the bottom of this page](#texture-formats).

<div class="text--center"> 
  <img src={f64_global} alt="Fast64 Global Settings" width="500" />
</div>

The other useful settings are here in the F3D Material Converter, where you can automatically convert standard materials into the F3D Materials that the ports use.  You can also recreate your materials or reload material presets if they seem bugged.

<div class="text--center"> 
  <img src={f3d_converter} alt="F3D Material Converter" width="500" />
</div>

### Z64 Tab
This is where all your actual importing and exporting will take place.  The individual importers and exporters will be covered in their respective guides, but there are still a couple settings here that are important to know no matter what type of model mod you want to make.

Here in the Workplace Settings is where you complete the setup for importing assets:  

If you want to use a source O2R for importing, Start by clicking the "Use O2R Import" checkbox, then select the file icon in the O2R Path box and navigate to your OoT or MM source O2R (oot.o2r, oot_mq.o2r, mm.o2r).  You can ignore the “Game Version” box.  If you selected a MM O2R then also go down and select the “Enable MM Features” checkbox.  

<div class="text--center"> 
  <img src={workspace_settings} alt="Workspace Settings" width="500" />
</div>

If you want to use a decomp of OoT or MM for importing, leave "Use O2R Import" checked and in the Decomp Path box navigate to the root of your decompilation (either `oot` or `mm`).  If you selected a Majora's Mask decomp, select the "Enable MM Features" checkbox.  Finally, click on the "Game Version" dropdown and select the rom version that you decompiled.


### F3D Materials
Whether you are converting BDSF materials to F3D or making them from scratch, it’s very important to understand the basics of how F3D materials work and how to set them up.

To start, navigate to the Material Properties tab in Blender (if you are unfamiliar look for the red circle icon towards the bottom right of your screen).  To make a new F3D material, simply click the “Create Fast3D Material” Button.  The default material preset is “OoT Shaded Solid”, which is just a solid color of your own choosing (referred to as primitive color in the settings) that uses the game’s built in shading system.  To choose a different preset simply click on the preset dropdown menu and select one of your choosing.
- **Shaded** - Uses the game’s shading system (generally recommended)
- **Unlit** - Uses no shading at all; Essentially makes your material emissive
- **Vertex Colored** - uses vertex coloring for shading
- **Solid** - Uses a solid color of your choosing
- **Texture** - Uses a texture/image of your choosing
- **Environment Mapped** - Warps your texture depending on the camera angle; used by many of the games’ metallic materials to simulate shine
- **Multitexture Lerp** - mixes two textures together, generally to add variance to a large mesh like grass
- **Transparent** - Makes your material transparent according to the alpha value of your primitive color and the alpha of your texture
- **Cutout** - “Cuts out” the opaque parts of your texture and makes everything else transparent; leaves a hard, jagged edge
- **Decal** - transparent material that takes render priority and helps prevent z-fighting

If you want to play around with more specific settings, you can uncheck the "Show Simplified UI" setting, which will reveal all hidden settings.

:::tip
As of SoH version 9.3.0 and 2Ship version 5.0.0 you can now add your materials to the in-game cosmetic editor to be recolored by the player.  To set this up, all you need to do is use Primitive Color and/or Environment Color in your material, and below where you would normally set the color you want you will see a checkbox labeled "Dynamic Cosmetic Entry".  Select this option and enter a name for your entry as well as a name for the category you want it to appear in.  These can be whatever you want so long as no two names are the same.

<div class="text--center"> 
  <img src={cosmetic_entry} alt="Making a Dynamic Cosmetic Entry" width="500" />
</div>

It is recommended to only use this feature if your material does not use a colored texture.
:::

### Textures
Fast64 supports 9 different texture formats, each with their own use cases.  If you intend to follow N64 limitations and conventions, these may be useful to know to help you optimize your textures.  If you do not plan on following N64 limitations, then you really only need either RGBA16 or RGBA32.

| Texture Format | Abbreviation | Description | Notes |
| -------------- | ------------ | ----------- | ----- |
| Intensity 4-bit | i4 | 4 bits of B&W; 16 shades | If used in transparent material, black is interpreted as transparent |
| Intensity 8-bit | i8 | 8 bits of B&W; 256 shades | Standard for non-color textures.  If used in transparent material, black is interpreted as transparent |
| Intensity Alpha 4-bit | ia4 | 2 bits of B&W, 2 bits of Alpha; 4 shades with 4 levels of transparency |
| Intensity Alpha 8-bit | ia8 | 4 bits of B&W, 4 bits of Alpha; 16 shades with 16 levels of tranparency |
| Intensity Alpha 16-bit | ia16 | 8 bits of B&W, 8 bits of Alpha; 256 shades with 256 levels of transparency |
| Color Index 4-bit | ci4 | See Explanation Below |
| Color Index 8-bit | ci8 | See Explanation Below |
| RGBA 16-bit | rgba16 | 5 bits of red, 5 bits of blue, 5 bits of green, 1 bit of Alpha; 32,768 unique colors | Default for colored textures.  1 bit of alpha means pixels are either fully opaque or fully transparent; no in-between |
| RGBA 32-bit | rgba32 | 8 bits of red, 8 bits of blue, 8 bits of green, 8 bits of alpha; 16,777,216 unique colors and 256 levels of transparency | 

:::tip
**Color Indexed Textures**

Color indexing a texture essentially breaks it into two parts: the color indexed texture, and a palette texture called a TLUT (Texture Look Up Table).  Each unique color of your texture is converted into either a 4-bit or 8-bit reference to a color on the corresponding palette.  For example, one pixel on your color indexed texture, may have the value `10000011`, or 131, meaning it uses the color in slot 131 of the palette.  
If you would like to use color indexed textures, simply select a color indexed format and in the "TLUT Name" box, enter the name you would like to give to your palette texture.  If you enter the same TLUT name for multiple materials, they will be indexed together and share a palette, which is the ideal use case of the color indexed format.

This is only really useful if you want to stay true to N64 limitations and conventions.  Otherwise, you don't need to worry about this at all.
:::

While your texture can be as high or low resolution as you like, **the height and width of your texture must be in powers of two** (1, 2, 4, 8, 16, 32, 64, etc). 