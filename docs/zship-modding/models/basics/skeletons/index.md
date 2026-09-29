---
sidebar_position: 1
---

# Skeleton Replacement
TODO:

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
