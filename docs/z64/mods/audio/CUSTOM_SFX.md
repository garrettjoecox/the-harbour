# Custom SFX Overrides

:::warning 
This system is in development and has **not** been merged into Ship of Harkinian. Nothing on this page works in current releases, and details (file naming, authoring rules) may still change before it ships. 
:::

Custom SFX overrides give a **single sound effect** its own audio sample, leaving everything else untouched.

Many sound effects in OoT share audio: when a sound effect plays, a script picks a font instrument (which points at a sample) and plays it at a scripted pitch. The bow and the slingshot, for example, play the same samples at different pitches for their shot, draw and flick sounds. Overriding a sound effect by its **SFX id** sidesteps that sharing entirely — the slingshot gets a new shot sound while the bow keeps vanilla.

## Usage

Place a sample in your mod o2r at `audio/custom/`, named after the SFX id you want to replace:

```
audio/custom/NA_SE_IT_SLING_SHOT      ← only the slingshot shot changes
audio/custom/NA_SE_IT_SLING_DRAW      ← only the slingshot draw changes
```

At boot, SoH scans `audio/custom/` and matches filenames against the SFX name list. Whenever that SFX id plays, your sample is used.

Rules:

- **The sample plays as recorded.** Vanilla sounds are raw material that the game's scripts repitch heavily (the slingshot is a whoosh sample driven through a four-octave pitch dive) — a custom sample is a finished sound, so the scripted note pitches, pitch slides and vibrato are nullified. Only the subtle per-play effects vanilla applies on top remain: the small random pitch variation and distance-based scaling.
- **Author at 32 kHz, or embed your own rate.** By default the engine treats the sample data as 32 kHz — resample your audio to 32 kHz before converting, or it will play at the wrong speed. If your conversion tool supports the newer **V3** sample format (e.g. the "Export as V3" option in the SoH Audio Tool), your file's actual sample rate is embedded and this restriction goes away — any rate works.
- **Keep the duration close to vanilla.** The scripted note length still governs how long the sound is held — a sample much longer than the original sound will be faded out early.
- **One sample per SFX id.** Some sounds (several of Link's voice lines, for example) randomly pick between a few different vanilla recordings on each play. An override replaces all of them with the same single sample, so that variation is lost — every play sounds identical instead of varying.
- **Not supported at this time: music.** This system only overrides SFX-bank playback — it has no effect on background themes, song-teaching demos, warp song jingles, cutscene arrangements or any other music, even when a music sequence happens to reuse the same soundfont as an SFX sound.

## Pitched overrides (`.pitched` suffix)

Some sounds are *made of* pitch shifting — the ocarina builds its melodies by pitching one sample. For those, add `.pitched` to the filename:

```
audio/custom/NA_SE_OC_OCARINA.pitched
```

A `.pitched` sample keeps the full scripted pitch behavior — notes still play at the pitches the script asks for, just from your sample instead of the vanilla one.

- **V3 format**: tuning is computed from your file's own embedded rate. Any rate works; it does not need to match the vanilla sample.
- **Legacy (non-V3) format**: no rate is embedded, so the vanilla instrument's original tuning is reused unchanged. Your file must be recorded at the vanilla sample's exact rate and reference pitch, or every note will be off-pitch.

### The ocarina

`NA_SE_OC_OCARINA` covers both **you playing** and the **game's playback** of a song (the echo after a correct song, Scarecrow's song, etc.), and switches between six instruments depending on context (ocarina, Malon, whistle, harp, organ, flute).

- Ocarina overrides must use `.pitched` — the melodies are pitch shifts of the sample, so an as-recorded override would play every note at the same pitch.
- The override applies to both **your own live playing** and **the game's own playback** of a song (the echo after a correct song, Scarecrow's Song, warp songs, etc.) — the two cannot be given different sounds.
- `NA_SE_OC_OCARINA` is the one SFX id behind all six instruments — the game swaps which instrument the channel plays through depending on context (the actual ocarina, Malon singing, the whistle, harp, grind organ, flute). An override only replaces the **default ocarina** instrument; the other five arrive under the same SFX id but a different instrument, so they're left untouched and keep their own sounds.
- Record at the vanilla sample's rate (32 kHz) and reference pitch (the game plays the raw sample ~8 semitones below its recorded pitch) — or, using the V3 format, embed your own rate and skip matching it. Either way, give the file loop points — ocarina notes sustain while a button is held.
- The ocarina heard in music sequences (Lost Woods' theme, for example) is not `NA_SE_OC_OCARINA` — see "Not supported at this time: music" above. If you're testing an ocarina override, listen for the confirmation echo after correctly playing a song, not the ambient music of an area.

---

## Reference: item SFX (`NA_SE_IT_*`)

Filename = SFX name. The pitch behavior column describes the sound's vanilla pitch character and what an override inherits from it:

- **fixed note** — the script plays a single note. An override is a perfect 1:1 swap.
- **multi-note** — the script triggers several notes, layered and/or in sequence (composite sounds). Your sample plays once **per note trigger** at the scripted timing, each time as recorded — bake the finished composite into one file and expect it to retrigger.
- **portamento** — the vanilla sound's pitch slides during playback (often its defining character, like the slingshot's descending chirp). The slide does **not** apply to your sample — author the character you want into the recording.
- **random pitch** — the engine applies a small random pitch offset each play so repeats don't sound identical. This still applies to your sample.

| Vanilla sample | SFX name | ID | Pitch behavior |
|---|---|---|---|
| `Metal Clink` | `NA_SE_IT_SWORD_IMPACT` | `0x1800` | fixed note, random pitch |
| `Whish` | `NA_SE_IT_SWORD_SWING` | `0x1801` | portamento, fixed note, random pitch |
| `Sheathe Sword` | `NA_SE_IT_SWORD_PUTAWAY` | `0x1802` | fixed note |
| `Draw Sword` | `NA_SE_IT_SWORD_PICKOUT` | `0x1803` | fixed note |
| `Air Swish` | `NA_SE_IT_ARROW_SHOT` | `0x1804` | fixed note, random pitch |
| `Air Whistle` | `NA_SE_IT_BOOMERANG_THROW` | `0x1805` | portamento, multi-note, random pitch |
| `Sword Striking Metal Shield` | `NA_SE_IT_SHIELD_BOUND` | `0x1806` | multi-note, random pitch |
| `Bow Pulled Taut` | `NA_SE_IT_BOW_DRAW` | `0x1807` | portamento, fixed note, random pitch |
| `Metal Clink`, `Sword Striking Metal Shield` | `NA_SE_IT_SHIELD_REFLECT_SW` | `0x1808` | multi-note, random pitch |
| `Arrow Thunk in Wood` | `NA_SE_IT_ARROW_STICK_HRAD` | `0x1809` | fixed note |
| `Metal Clink`, `Heavy Thump` | `NA_SE_IT_HAMMER_HIT` | `0x180A` | multi-note, random pitch |
| `Moving Metal Chain`, `Explosion 1` | `NA_SE_IT_HOOKSHOT_CHAIN` | `0x180B` | multi-note |
| `Sword Striking Metal Shield`, `Buzzing Synth` | `NA_SE_IT_SHIELD_REFLECT_MG` | `0x180C` | portamento, multi-note |
| `Hissing Fuse` | `NA_SE_IT_BOMB_IGNIT` | `0x180D` | fixed note |
| `Explosion 1` | `NA_SE_IT_BOMB_EXPLOSION` | `0x180E` | fixed note |
| `Hissing Fuse` | `NA_SE_IT_BOMB_UNEXPLOSION` | `0x180F` | portamento, multi-note |
| `Air Swish` | `NA_SE_IT_BOOMERANG_FLY` | `0x1810` | portamento, multi-note |
| `Soft Thump` | `NA_SE_IT_SWORD_STRIKE` | `0x1811` | portamento, multi-note |
| `Whish` | `NA_SE_IT_HAMMER_SWING` | `0x1812` | portamento, fixed note, random pitch |
| `Metal Clink` | `NA_SE_IT_HOOKSHOT_REFLECT` | `0x1813` | portamento, multi-note |
| `Air Swish` | `NA_SE_IT_ARROW_STICK_CRE` | `0x1814` | portamento, multi-note |
| `Arrow Thunk in Wood` | `NA_SE_IT_ARROW_STICK_OBJ` | `0x1815` | fixed note |
| `Whish`, `Air Whoosh` | `NA_SE_IT_SWORD_SWING_HARD` | `0x1818` | portamento, multi-note |
| `Metal Clink` | `NA_SE_IT_WALL_HIT_HARD` | `0x181A` | fixed note |
| `Metal Clink` | `NA_SE_IT_WALL_HIT_SOFT` | `0x181B` | portamento, multi-note |
| `Metal Clink` | `NA_SE_IT_STONE_HIT` | `0x181C` | multi-note |
| `Broken Wood` | `NA_SE_IT_WOODSTICK_BROKEN` | `0x181D` | multi-note |
| `Air Swish`, `Whip Snap` | `NA_SE_IT_LASH` | `0x181E` | multi-note, random pitch |
| `Metal Clink`, `Sheathe Sword` | `NA_SE_IT_SHIELD_POSTURE` | `0x181F` | multi-note, random pitch |
| `Air Swish` | `NA_SE_IT_SLING_SHOT` | `0x1820` | portamento, fixed note |
| `Bow Pulled Taut` | `NA_SE_IT_SLING_DRAW` | `0x1821` | portamento, fixed note |
| (synth wave), `Buzzing Synth` | `NA_SE_IT_SWORD_CHARGE` | `0x1822` | portamento, multi-note |
| `Whish`, `Air Whoosh` | `NA_SE_IT_ROLLING_CUT` | `0x1823` | portamento, multi-note |
| `Egg Hatching`, `Soft Thump` | `NA_SE_IT_SWORD_STRIKE_HARD` | `0x1824` | portamento, multi-note |
| `Metal Clink` | `NA_SE_IT_SLING_REFLECT` | `0x1825` | portamento, multi-note |
| `Metal Clink`, `Sheathe Sword` | `NA_SE_IT_SHIELD_REMOVE` | `0x1826` | multi-note |
| `Metal Clink`, `Sheathe Sword` | `NA_SE_IT_HOOKSHOT_READY` | `0x1827` | multi-note |
| `Metal Clink`, `Sheathe Sword`, `Moving Metal Chain` | `NA_SE_IT_HOOKSHOT_RECEIVE` | `0x1828` | multi-note |
| `Metal Clink`, `Explosion 1` | `NA_SE_IT_HOOKSHOT_STICK_OBJ` | `0x1829` | portamento, multi-note, random pitch |
| `Air Whoosh`, `Buzzing Synth` | `NA_SE_IT_SWORD_REFLECT_MG` | `0x182A` | portamento, multi-note |
| `Metal Clink`, `Whip Snap` | `NA_SE_IT_DEKU` | `0x182B` | portamento, multi-note |
| `Ocarina_Looped`, `Dodongo Roar`, `Egg Hatching` | `NA_SE_IT_WALL_HIT_BUYO` | `0x182C` | portamento, multi-note |
| `Draw Sword` | `NA_SE_IT_SWORD_PUTAWAY_STN` | `0x182D` | portamento, multi-note |
| `Whish`, `Air Whoosh`, `Buzzing Synth` | `NA_SE_IT_ROLLING_CUT_LV1` | `0x182E` | portamento, multi-note |
| `Flamethrower`, `Air Whoosh`, `Buzzing Synth` | `NA_SE_IT_ROLLING_CUT_LV2` | `0x182F` | portamento, multi-note |
| `Bow Pulled Taut` | `NA_SE_IT_BOW_FLICK` | `0x1830` | portamento, fixed note |
| `Hissing Fuse` | `NA_SE_IT_BOMBCHU_MOVE` | `0x1831` | portamento, fixed note |
| `Synth Pad Sting` | `NA_SE_IT_SHIELD_CHARGE_LV1` | `0x1832` | portamento, multi-note |
| `Synth Pad Sting` | `NA_SE_IT_SHIELD_CHARGE_LV2` | `0x1833` | portamento, multi-note |
| `Synth Pad Sting` | `NA_SE_IT_SHIELD_CHARGE_LV3` | `0x1834` | portamento, multi-note |
| `Bow Pulled Taut` | `NA_SE_IT_SLING_FLICK` | `0x1835` | portamento, fixed note |
| `Metal Clink`, `Explosion 1` | `NA_SE_IT_SWORD_STICK_STN` | `0x1836` | portamento, multi-note |
| `Step - Wooden Bridge`, `Wooden Strike` | `NA_SE_IT_REFLECTION_WOOD` | `0x1837` | multi-note, random pitch |
| `Sword Striking Metal Shield`, `Buzzing Synth` | `NA_SE_IT_SHIELD_REFLECT_MG2` | `0x1838` | portamento, multi-note |
| `Air Swish`, `Air Whoosh` | `NA_SE_IT_MAGIC_ARROW_SHOT` | `0x1839` | portamento, multi-note |
| `Eye of Truth`, `Explosion 1`, `Ignition` | `NA_SE_IT_EXPLOSION_FRAME` | `0x183A` | portamento, multi-note |
| `Eye of Truth`, `Explosion 1`, `Warp Circle Ambience` | `NA_SE_IT_EXPLOSION_ICE` | `0x183B` | portamento, multi-note |
| `Eye of Truth`, `Explosion 1`, `Flying Fairy` | `NA_SE_IT_EXPLOSION_LIGHT` | `0x183C` | portamento, multi-note |
| `Bow Pulled Taut` | `NA_SE_IT_FISHING_REEL_SLOW` | `0x183D` | fixed note |
| `Bow Pulled Taut` | `NA_SE_IT_FISHING_REEL_HIGH` | `0x183E` | fixed note |
| `Bow Pulled Taut` | `NA_SE_IT_PULL_FISHING_ROD` | `0x183F` | portamento, fixed note, random pitch |
| `Crystal Synth (Low)`, `Heavy Rumbling`, `Explosion 1` | `NA_SE_IT_DM_FLYING_GOD_PASS` | `0x1840` | portamento, multi-note |
| `Crystal Synth (Low)`, `Heavy Rumbling`, `Explosion 1` | `NA_SE_IT_DM_FLYING_GOD_DASH` | `0x1841` | portamento, multi-note |
| `Crystal Synth (Low)`, `Heavy Rumbling`, `Distorted Static`, `Explosion 1` | `NA_SE_IT_DM_RING_EXPLOSION` | `0x1842` | portamento, multi-note |
| `Heavy Rumbling`, `Explosion 1` | `NA_SE_IT_DM_RING_GATHER` | `0x1843` | multi-note |
| `Horse Neigh` | `NA_SE_IT_INGO_HORSE_NEIGH` | `0x1844` | fixed note, random pitch |
| `Heavy Rumbling`, `Explosion 1` | `NA_SE_IT_EARTHQUAKE` | `0x1845` | multi-note |
| `Bow Pulled Taut` | `NA_SE_IT_KAKASHI_JUMP` | `0x1847` | portamento, fixed note |
| `Heavy Static`, `Ignition` | `NA_SE_IT_FLAME` | `0x1848` | portamento, multi-note |
| `Warp Circle Ambience` | `NA_SE_IT_SHIELD_BEAM` | `0x1849` | fixed note |
| `Bow Pulled Taut`, `Air Whoosh`, `Whip Snap` | `NA_SE_IT_FISHING_HIT` | `0x184A` | multi-note |
| `Explosion 1` | `NA_SE_IT_GOODS_APPEAR` | `0x184B` | fixed note |
| `Metal Clink`, `Sword Striking Metal Shield`, `Buzzing Synth` | `NA_SE_IT_MAJIN_SWORD_BROKEN` | `0x184C` | portamento, multi-note |
| `Whip Snap` | `NA_SE_IT_HAND_CLAP` | `0x184D` | fixed note |
| `Crystal Synth (Low)`, `Whish` | `NA_SE_IT_MASTER_SWORD_SWING` | `0x184E` | portamento, multi-note |

### Other banks

Overrides work for every SFX bank the same way — player (`NA_SE_PL_*`), environment (`NA_SE_EV_*`), enemy (`NA_SE_EN_*`), system (`NA_SE_SY_*`), ocarina (`NA_SE_OC_*`) and voice (`NA_SE_VO_*`). A complete list of all SFX names can be found in [`soh/include/sfx.h`](https://github.com/HarbourMasters/Shipwright/blob/develop/soh/include/sfx.h) in the Shipwright repository.
