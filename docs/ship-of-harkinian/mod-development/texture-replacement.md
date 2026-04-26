# Texture Modding

This guide will teach you how to use the tools for modding SoH (and 2S2H) to replace textures.

You will need the following:
- An installed and ready to play copy of SoH or 2S2H.
- Retro, HM64's mod archive tool.
- Your image editor of choice.

## Step one: Unpacking the base textures

Open Retro, and you will be presented with the following:
<img src={texture_guide_1} alt="Texture Guide 1" width="600" />

Select "Create OTR/O2R" to move to the next set of choices.
<img src={texture_guide_2} alt="Texture Guide 2" width="600" />

Select "Replace Textures" to be presented with the following prompt:
<img src={texture_guide_3} alt="Texture Guide 3" width="600" />

We do not have our base folder, so we need to create it. Choose "no" to proceed, and you will see the following:
<img src={texture_guide_4} alt="Texture Guide 4" width="600" />

Click 'Select' to open a file browser, and navigate to your game's install directory. Here, select the asset archives - the OTR or O2R files. Hit 'Open' to continue, and 'Process' to proceed to the next step.
<img src={texture_guide_5} alt="Texture Guide 5" width="600" />

:::note
On Linux, the bundled custom assets will be found inside the Appimage.
You can mount the Appimage in terminal with `--appimage-mount`, navigate to the mounted image, and find the bundled archive in `/usr/bin/`.
:::

The file browser will open again, to choose the location the textures will be unpacked.
Navigate to your preferred location, and create a folder to contain the unpacked textures.
Confirm, and wait for the software to process; this can take some time.
<img src={texture_guide_6} alt="Texture Guide 6" width="600" />

When finished, you will see a confirmation screen similar to this:
<img src={texture_guide_7} alt="Texture Guide 7" width="600" />

## Step two: Altering the textures

First, locate the texture you wish to alter. The unpacked files will be .PNG format, and can be opened and altered with your image editor of choice.
Be aware of textures tied to palettes - these will extract from SoH's archives as unreadable black & white images with a matching "TLUT" containing the palette. Readable copies of these textures can be obtained from a copy of the [OoT](https://github.com/zeldaret/oot) or [MM](https://github.com/zeldaret/mm) Decompilation, followed at least through to Asset Extraction.
When altering the textures, you may increase the size, but you should always stick to Power of Two dimensions.
<img src={texture_guide_8} alt="Texture Guide 8" width="600" />

When saving your new textures, ensure that you are not creating Indexed PNGs; some editors produce compressed 8-bit Indexed PNGs by default, to reduce filesize. These will not work correctly, so be sure to reference operational instructions for your software package.

Save your new textures over the originals you have unpacked; the file names and directory paths are important.
Note that any of the textures tied to TLUTs will need to be recognised as "HD" to ignore palette limitations and be replaced properly. "HD" textures are those with power of two dimensions above 64x64.

## Step Three: Packing your archive

Using Retro, selecting the "Replace Textures" button will bring you to a familiar prompt. This time, click 'Yes'.
<img src={texture_guide_9} alt="Texture Guide 9" width="600" />

Ensure the "Prepend Alt" option is checked, to make your mod compatible with the Alternate Equipment toggle, and community standards.
<img src={texture_guide_10} alt="Texture Guide 10" width="600" />

Click "Select" to be greeted with a file select prompt once again.
Here, you will want to navigate to the root folder of the unpacked textures.
It may take some time to process which images have and have not changed. Stay patient.

Once processed, you will see a list of what it has recognised as new, and the "Stage Textures" button will be active.
<img src={texture_guide_11} alt="Texture Guide 11" width="600" />

It will appear to return to the main menu, now with a prominent banner along the bottom.
<img src={texture_guide_12} alt="Texture Guide 12" width="600" />

Click the banner to open the finalising window:
<img src={texture_guide_13} alt="Texture Guide 13" width="600" />

In this last menu, texture files can be excluded from the packing by clicking the trash can icon next to a given entry.

When satisfied, click the "Generate OTR/O2R" button. This is where we get our file for the mods folder.

It will open file browser once again, defaulting to "generated.O2R" - if working for SoH, you need to change that extension to OTR to generate a compatible archive. Any name will suffice, but it is best to be descriptive for users.
<img src={texture_guide_14} alt="Texture Guide 14" width="600" />

Now put it in the mods folder; activate it in-game, and see how you like it!