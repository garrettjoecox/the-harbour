import asset_sheet from "/img/zship-modding/models/skel_asset_sheet.png"
import importing from "/img/zship-modding/models/skel_importing.png"
import unfolding from "/img/zship-modding/models/unfolding.mp4"
import apply_armature from "/img/zship-modding/models/apply_armature.png"
import rest_pose from "/img/zship-modding/models/rest_pose.png"

# Skeleton Replacement
In this guide we will cover how to replace models attached to skeletons such as character or enemy models.

:::warning
**This guide is still under construction.  The following information, while useful, does not yet constitute a full guide.**
:::

:::note
While this guide applies to all skeletons, if you're specifically looking to make a player model mod (replacing Link), you can find a bespoke player model guide [here](./player-models.md).  Good Luck!
:::

## Importing Skeletons
First, find the skeleton you want to replace in either the [SoH Assets Guide](https://docs.google.com/spreadsheets/d/1rOTt_7Wr0OGfMR9tHom8dDOooM3rUocz9xi7axpR0sY/edit?gid=1609438228#gid=1609438228) or the [2Ship Assets Guide](https://docs.google.com/spreadsheets/d/1Ke2OSwFBqpn7HG9bWQHS0eeyEOFukItEraZSbJdCFsE/edit?gid=1565535820#gid=1565535820) depending on the port you’re making your mod for.

In the Z64 tab of Fast64 open up the "Skeleton Exporter” dropdown and scroll down just below the “Import Skeleton” button.  Click on the "Mode" dropdown.  If the skeleton you want to import is in that list, select it and click the Import Skeleton button.  If it is not in the list, leave the mode on "Generic" and enter the name of your skeleton in the box labeled "Skeleton" and enter the object folder the skeleton is listed under in the spreadsheet (ommitting the "objects/" tht precedes it).  

For example, say I wanted to import the Cucco Lady from OoT.  I'd find its entry in the SoH Assets Guide here:

<img src={asset_sheet} alt="Cucco Lady on SoH Assets Guide" width="100%" />

and enter that information into Fast64.  For the DL I would enter `gCuccoLadySkel` and for the Object I would enter `object_ane`.

<div class="text--center"> 
  <img src={importing} alt="Fast64 Skeleton Importer" width="600" />
</div>

:::note
Some skeletons may not import with the head you expect.  This is because many npcs share the same body and may have different head DLs in the same object folder or in a separate overlay folder.  If you can't find the part you're looking for, don't hesitate to ask for help in either the [HM Discord server](https://discord.com/invite/harbourmasters) or the [2Ship2Harkinian Discord](https://discord.com/invite/sxrPyuh697), depending on which port you're modding for.
:::

## Unfolding

:::note
If your model did not import folded up, you may skip to the [next section](#replacing-skeletons)
:::

If you imported on "Generic" mode, your skeleton will import folded up.  Technically you don't have to unfold it, but it is highly recommended as it makes it significantly easier to work with.  Each skeleton is different, so there's no universal guide we can write for unfolding, but here are the general steps to try alongside a sample video:
- Select your skeleton and enter pose mode
- Select the chest/torso bone and rotate it 180 degrees along the y-axis
- Rotate the skeleton's root bone to align it to your view
- Rotate the arms into a t-pose and untwist them
- Rotate the feet 90 degrees to put them into place

<video controls width="100%">
  <source src={unfolding} alt="Example video for unfolding a skeleton" />
</video>

Finally, move back into object mode, select the imported mesh, and apply its armature modifier.  This will prevent the model from getting messed up in the next step.

<img src={apply_armature} alt="Applying armature modifier" width="100%" />

Now go back into pose mode, hit 'A' on your keyboard to select all bones, click on the "Pose" tab at the top, then select "Apply", and then "Apply Pose as Rest Pose".

<img src={rest_pose} alt="Applying rest pose" width="100%" />

You have now successfully unfolded your skeleton into a T-pose.


## Replacing Skeletons
With your vanilla skeleton imported and unfolded, take the model you would like to replace it with, and align it best you can.  Technically you could edit the skeleton to match your model, but it is not recommended as it may cause graphical issues as well as affect gameplay.  Instead, it is recommended to **edit your model to match the skeleton**, rather than the other way around.

**TODO**


## "Meat Tornado"

Link turns into a meat tornado and doesnt look hylian. Usually caused by geometry assigned to multiple vertex groups, or your model is too high poly. (Im talking like tri count in the 100,000's).

Another common cause is not having an armature modifier pointing at the skeleton on your mesh.

Workaround: Double check all vertex groups to make sure geometry are not assigned to multiple vertex groups. If that doesnt work, Delete and apply a new skeleton onto the model.

## Unnatural Stretch on Link

Parts of Links torso gets stretched to infinity

Workaround: Every bone on Link needs to have geometry assigned in its vertex group. Can be a single tri that have been scaled to `0`. Commonly missed bones are `Collar` and `Sheath` bones


## Exploding "Body Break" Enemies

Modders seeking to replace enemies must be aware that to prevent vertex explosion on all enemies using the "body break" system will require the mesh to be designed to support it. This means all 'part' meshes should be skinned exclusively to one joint; you cannot skin one contiguous mesh surface across two or more joints that break apart. Joints that do not break apart can be skinned as normal.
Enemies that utilise the "body break" system:
- Iron Knuckles (en_ik)
- Stalfos (en_test)
- Stal Children (en_skb)
- Shell blade (en_sb)
- Tektites (en_tite)
- Bubbles (flying skulls) (en_bb)

Dev comments: https://github.com/HarbourMasters/Shipwright/pull/3436#issuecomment-2252886376


## Multiple Meshes; One Object

When dealing with models for SoH/2S2H, you can use as many contiguous mesh surfaces as you need to, but they must all be joined into a single *object* for export.

They do not need to be physically connected into a single contiguous surface.

:::warning
If you have NO contiguous geometry skinned across two joints, the export will set the skeleton incorrectly. If your character model is entirely constructed of segmented pieces, you should include a piece of geometry to fulfill this condition - skin a single piece of geometry across two joints. This geometry can be hidden with a double-culled invisible material as with other filler geometry.

You do not need to do this if your character model already has contiguous geometry skinned across multiple joints.
:::

## Something for Every Bone

When creating a player character model, all of Link's vanilla bones must have something skinned to them, even if you do not intend to make use of it. Commonly missed bones are for the collar of Link's tunic, and the scabbard on Link's back.

You can create null geometry for these bones by adding some new geometry, such as a simple plane, and assigning a material to it that culls both front and back faces.
