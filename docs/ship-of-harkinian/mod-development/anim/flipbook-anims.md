import image1 from "/img/zship-modding/animation/1.png"
import image2 from "/img/zship-modding/animation/2.png"
import image3 from "/img/zship-modding/animation/3.png"
import image4 from "/img/zship-modding/animation/4.png"
import image5 from "/img/zship-modding/animation/5.png"
import image6 from "/img/zship-modding/animation/6.png"
import image7 from "/img/zship-modding/animation/7.png"

# Flipbook Animations in the Graph Editor

This guide explains how to expose flipbook (expression) parameters in Blender's Graph Editor so you can keyframe and animate them for custom animations — useful for animations that don't have facial expressions set up to begin with.

## Steps

### 1. Add keyframes for the expression parameters

Make sure you are on **frame 0**, go to the **Object Properties** tab, and have your skeleton selected.

Hover over the **Eyes** and **Mouth** parameters and press **I** on each to add a keyframe for both.

<div class="text--center"> 
    <img src={image1} alt="Adding keyframes to Eyes and Mouth parameters" height="500" />
</div>

### 2. Open the Graph Editor

Switch to the **Graph Editor**. You should now see the two parameters listed.

<div class="text--center"> 
    <img src={image2} alt="Eyes and Mouth parameters visible in the Graph Editor" height="500" />
</div>

### 3. Group the channels

Select both channels, then **right-click** and choose to group them.

<div class="text--center"> 
    <img src={image3} alt="Right-clicking to group the channels" height="500" />
</div>

### 4. Name the group

Name the group **`Texture Animations`**.

<div class="text--center"> 
    <img src={image4} alt="Naming the group Texture Animations" height="500" />
</div>

### 5. Set interpolation to Constant

The interpolation will be wrong by default — flipbooks switch frames instantly, not gradually. Press **A** to select all keyframes, then press **T** and select **Constant**.

<img src={image5} alt="Selecting all keyframes" width="1000" style={{marginBottom: 10}}/>
<img src={image6} alt="Pressing T to open interpolation menu" width="1000" style={{marginBottom: 10}}/>
<img src={image7} alt="Constant interpolation selected" width="1000" />
