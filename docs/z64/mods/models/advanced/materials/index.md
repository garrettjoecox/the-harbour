# Useful Material Setups

## Environment Mapped Shiny Effects

To add a shiny/reflective effect to a mesh:

1. In edit mode, select the mesh you want a shine on and duplicate it (don't move it)
2. Create a new material and select **Environment Mapped Transparent** preset
3. Assign the duplicated mesh to the new material
4. Import your texture image (use textures with alpha)
5. In Color Combiner, change Cycle 1 D Alpha from `1` to `Texture 0 Alpha`
6. In Lower settings (Show Simplified UI disabled), change Render Mode Cycle 2 to `Transparent Decal`


