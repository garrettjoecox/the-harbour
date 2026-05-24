# Custom Dark Link System

Mods that use, require, or build on the Custom Dark Link system are encouraged. If you publish a Dark Link equipment mod, it is recommended to link to a mod using this system on your mod page so users know what they need.

---

## Making Compatible Equipment

The Dark Link model takes three equipment DLs placed in `objects/object_torch2`:

| DL Name | Slot |
|---------|------|
| `gDarkLinkSwordDL` | Sword |
| `gDarkLinkShieldDL` | Shield |
| `gDarkLinkSheathDL` | Sheath |

For positioning and rotation, treat it the same as a normal Adult Link equipment mod — just without hands.

### Fade-in effect

If you want your equipment to fade in alongside Dark Link, set the following on **every material** your equipment uses:

- In the Color Combiner, set **Cycle 2 A Alpha** to `Combined Color Alpha` and **Cycle 2 C Alpha** to `Environment Alpha`
- Enable the **Segment C** checkbox under the combiner

:::note
On legacy Fast64 the Segment C checkbox may not work correctly — in that case, manually include the segment C call in each material file. On the latest HM64 Fast64 plugin Segment C is included automatically.
:::

---

## Making a Compatible Skeleton

Start by setting up your Dark Link model as normal, then follow these additional steps.

### 1. Enable deform on the sheath bone

Find and select **bone 19** (the sheath bone). In the **Bone Properties** tab, enable the **Deform** checkbox.

### 2. Add the sheath vertex group

On your Dark Link model, add a new vertex group named exactly:

```
bone019_gDarkLinkSkelLimbsLimb_0046F0
```

A vertex group cannot be left empty, so add an extra triangle to your model and assign it to this group. To hide it, set your **Transform Pivot Point** to World Origin and scale it to zero with **S → 0**.

### 3. Color combiner setup

Apply the same fade-in color combiner setup as described for equipment — **every material** on the skeleton needs it. Segment C should work correctly even on legacy Fast64.

### 4. Export the skeleton

Export as normal.

### 5. Add CallDisplayList lines post-export

After exporting, manually add a `CallDisplayList` line to the display list files for bones **15**, **18**, and **19** to call the sword, shield, and sheath DLs respectively.

For example, the entry for bone 15 (`bone015_gDarkLinkSkelLimbsLimb_0046B0_mesh_layer_Opaque`) should begin with:

```xml
<CallDisplayList Path="objects/object_torch2/gDarkLinkSwordDL"/>
```
