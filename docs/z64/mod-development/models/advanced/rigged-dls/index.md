import image1 from "./image1.png"
import image2 from "./image2.png"

# Rigged DLs

This technique lets you replace any of Link's object Display Lists (DLs) with a fully rigged custom model that deforms across multiple bones — rather than being locked to a single bone like a [static DL](../attaching-static-dl/index.mdx).

The guide uses the Iron Boots as an example, but this works with any of Link's DLs including masks, swords, shields, and held items.

:::warning
This technique **cannot unload** any part of Link's existing model. Account for clipping if your mesh overlaps Link's geometry (e.g. boots over feet).
:::

:::warning
You must rig at least something to **every bone** on Link's armature, or Blender will not export correctly.
:::

## Steps

### 1. Model your mesh over Link

Import Link into Blender (or build off an existing model) and create your new mesh, fitting it to Link as if he were wearing or using it.

<img src={image1} alt="Custom mesh modelled over Link in Blender" width="1000" />

### 2. Rig the mesh

Rig your mesh to the bones it should deform with. Remember: every bone on the armature must have at least one vertex weight assigned.

### 3. Export the skeleton

Back up your original `.blend` file, then delete Link's mesh — **keep the armature**. Export the skeleton the same way you would export Link's normal skeleton, with two differences:

- Give it a **unique name**, e.g. `gLinkIronBootsSkel`
- Set a **unique object path**, e.g. `object_link_boy_ironboots`

<img src={image2} alt="Export settings showing unique skeleton name and object path" width="1000" />

Export into its **own separate folder**. Do not mix it with any existing Link skeleton exports or they will overwrite each other.

### 4. Create the replacement DL XML

Now create the XML file that replaces Link's original DL. This file goes inside **`object_link_boy`** or **`object_link_child`** — **not** inside the folder you just exported your skeleton into.

Create a new text file and paste in this base template:

```xml
<DisplayList Version="0">

	<EndDisplayList/>
</DisplayList>
```

### 5. Fill in the bone assignments

Each bone your mesh uses needs **two lines** inserted before `<PipeSync/>`:

1. A **`Matrix Path`** line — tells the DL which bone to attach to (see the [bone reference table](../attaching-static-dl/index.mdx#bone-reference-table))
2. A **`CallDisplayList`** line — tells the DL which mesh part to load on that bone

The `CallDisplayList` format is:

```xml
<CallDisplayList Path="objects/object_link_boy_XXXXXX/boneXXX_gLinkXXXXXX_mesh_layer_Opaque"/>
```

Replace the `X` placeholders with the bone file names from your export folder. Use the filenames as-is — ignore any ending in `_tri_X` or `_vtx_X`. Make sure the folder name in the path matches the folder you exported your skeleton into.

To add more bones, repeat the `Matrix Path` + `CallDisplayList` pair for each one.

### 6. Examples

**Left Iron Boot** — rigged across left thigh, shin, and foot:

```xml
<DisplayList Version="0">
	<Matrix Path=">0x0d000100" Param="G_MTX_LOAD"/>
	<CallDisplayList Path="objects/object_link_boy_ironboots/bone006_gLinkAdultLeftThighLimb_mesh_layer_Opaque"/>
	<Matrix Path=">0x0d000140" Param="G_MTX_LOAD"/>
	<CallDisplayList Path="objects/object_link_boy_ironboots/bone007_gLinkAdultLeftLegLimb_mesh_layer_Opaque"/>
	<Matrix Path=">0x0D000180" Param="G_MTX_LOAD"/>
	<CallDisplayList Path="objects/object_link_boy_ironboots/bone008_gLinkAdultLeftFootLimb_mesh_layer_Opaque"/>
	<EndDisplayList/>
</DisplayList>
```

**Right Iron Boot** — rigged across right thigh, shin, and foot:

```xml
<DisplayList Version="0">
	<Matrix Path=">0x0d000040" Param="G_MTX_LOAD"/>
	<CallDisplayList Path="objects/object_link_boy_ironboots/bone003_gLinkAdultRightThighLimb_mesh_layer_Opaque"/>
	<Matrix Path=">0x0d000080" Param="G_MTX_LOAD"/>
	<CallDisplayList Path="objects/object_link_boy_ironboots/bone004_gLinkAdultRightLegLimb_mesh_layer_Opaque"/>
	<Matrix Path=">0x0d0000C0" Param="G_MTX_LOAD"/>
	<CallDisplayList Path="objects/object_link_boy_ironboots/bone005_gLinkAdultRightFootLimb_mesh_layer_Opaque"/>
	<EndDisplayList/>
</DisplayList>
```

### 7. Save and pack

Save the XML file inside `object_link_boy` or `object_link_child` with the **exact DL name from the asset guide** and **no file extension**.

For the Iron Boots example:
- `objects/object_link_boy/gLinkAdultLeftIronBootDL`
- `objects/object_link_boy/gLinkAdultRightIronBootDL`

Pack into an O2R/OTR and load in Ship. If everything is set up correctly, your object will now be a fully rigged model that deforms with Link's skeleton.
