import asset_sheet from "/img/zship-modding/models/dl_asset_sheet.png"
import importing from "/img/zship-modding/models/dl_importing.png"
import renaming from "/img/zship-modding/models/dl_renaming.png"
import exporting from "/img/zship-modding/models/dl_exporting.png"

# Static Model Replacement
In this guide we will cover how to replace static models such as equipment, items, and other non-deforming objects.

:::note
If you plan to replace Link's equipment for OoT, it is recommended to use the Alternate Equipment System as opposed to replacing the vanilla DLs.  See the [section at the bottom](#alt-equipment-custom-items) for more details.
:::

## Importing DLs
First, find the DL you want to replace in either the [SoH Assets Guide](https://docs.google.com/spreadsheets/d/1rOTt_7Wr0OGfMR9tHom8dDOooM3rUocz9xi7axpR0sY/edit?usp=sharing) or the [2Ship Assets Guide](https://docs.google.com/spreadsheets/d/1Ke2OSwFBqpn7HG9bWQHS0eeyEOFukItEraZSbJdCFsE/edit?usp=sharing) depending on the port you’re making your mod for.
In the Z64 tab of Fast64 open up the “DL Exporter” dropdown and scroll down to the “Import DL” button.  In the “DL” box enter the name of the DL you want to import and replace, and in the “Object” box enter the object folder the DL is found in (omitting the “objects/” that precedes it in the spreadsheet).

For example, say I wanted to import the Razor Sword’s blade from MM.  I’d find its entry in the 2Ship Asset Guide here:

<img src={asset_sheet} alt="Razor Sword Blade from 2Ship Assets Guide" width="1000" />

and enter that information into Fast64.  For the DL I would enter `gRazorSwordBladeDL` and for the Object I would enter `gameplay_keep`.

<div class="text--center">
    <img src={importing} alt="Fast64 DL Importer" width="700" />
</div>

Note that some meshes like the mirror shield (in either game) normally have multiple layers of triangles on top of each other, but when importing only have one.  If this happens, uncheck the box labeled “Remove Doubles” and reimport.


## Replacing DLs
Take the model you want to replace the DL with and line it up the vanilla DL you imported.  Once you have it in place, apply transformations (Select the object in Object Mode and hit Ctrl+A, then Apply All Transformations).  Rename your object to match the name of the DL.  If your object's name now has ".001" at the end as a result of having the same name as the vanilla object you imported, just go and remove it.

<img src={renaming} alt="Renaming your object" width="1000" />

Now with your object renamed, move back to the DL Exporter.  Below the "Export DL" button you'll find boxes named "Internal Path" and "Path".  
Internal Path refers to the directory the DL belongs in as listed in the asset guide.  For example, if I wanted to export `gRazorSwordBladeDL`, I would set the internal path to `objects/gameplay_keep`.  
Path refers to the directory on your computer that you would like to export your files to.  This can be wherever you want, but for whatever directory you choose, make a new folder in there, name it `alt`, and select that folder.  When you're done your export box should look something like this:

<div class="text--center">
    <img src={exporting} alt="Exporting DLs" width="600"/>
</div>

Optionally you can also select the "Optimize + Inline Materials" option if you want cleaner exports.  Note that this will break dynamic color support if you have that set up.

Finally, click on the "Export DL" button to export your model.  If this is the last thing you wanted to export and are ready to pack your mod, navgate to your export directory in any file explorer and select all the files and directories you would like to pack, including your `alt` folder, `CosmeticEntries` file if you have one, etc.  Rename the file extension into `.o2r` and name your mod whatever you want.  Your mod is now complete and ready to test in-game by dropping it into your mods folder.

:::note
Mods are packed as files called "O2Rs", which in reality are just renamed ZIP archives.  
Older versions of SoH (lower than 9.0.0) only support "OTR" mods, which are renamed MPQ files.  You can pack your files into an OTR using the [Retro program](https://github.com/HarbourMasters/retro/releases/latest) and edit pre-existing OTR mods with a program called "Ladik's MPQ Editor"
:::


## Alt Equipment (Custom Items)
The modern custom equipment system for Ship of Harkinian.

In vanilla OoT, item models were often combined with other models into a single DL, making them difficult to replace.  Most items have Link's hand attached to them, and Link's shields are paired with his sheaths.

The Alt Equipment system addresses these limitations by isolating each item model into its own, much more easily replaceable DLs, while also adding more DLs that have no vanilla equivalents like sheaths for the Biggoron's Sword or separate Hookshot and Longshot models.

You can find all the new DL names and their vanilla equivalents on the [Alt Asset DLs tab of the SoH Assets Guide](https://docs.google.com/spreadsheets/d/1rOTt_7Wr0OGfMR9tHom8dDOooM3rUocz9xi7axpR0sY/edit?gid=556482990#gid=556482990).