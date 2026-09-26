# Custom Font & Message Translation

:::warning
This feature is **not available in any release build**. It is a draft / experimental system currently open for testing only. File formats and behaviour may change before release.
:::

This system lets mod makers ship TrueType fonts and translated message text inside `.o2r` archives. Once a mod containing these files is loaded, the font and translation appear as selectable options in the **Mod Menu**.

For composing and previewing message text, the [SoH Text Editor](https://soh.xoas.eu.org/text-editor) is used as the baseline for text handling and is the recommended tool for authoring translation files.

---

## Translation Files

### File location

Place translation files under `translations/` in your `.o2r` archive:

```
translations/MyTranslation.txt
translations/MyTranslation.json
```

Both `.txt` and `.json` extensions are supported and use identical syntax. Once the archive is loaded, the translation name appears in the **Translation** dropdown in the menu.

Any message ID not present in the translation file will fall back to the original in-game text automatically. You only need to define the messages you want to translate.

### Syntax

Each message entry uses `DEFINE_MESSAGE(id, textboxType, textboxPos, body)`. The first argument is the message ID (hexadecimal). `TEXTBOX_TYPE_*` and `TEXTBOX_POS_*` are accepted but currently have no effect on rendering — match them to the original for clarity.

---

## Supported Macros

### Text and color

| Macro | Description |
|-------|-------------|
| `"text"` | UTF-8 string literal. Supports `\n`, `\t`, `\\`, `\"`, `\xHH`. |
| `COLOR(name)` | Set text color. |
| `NAME` | Insert the current save file's player name. |
| `ITEM_ICON(id)` | Show an item icon (item ID byte). |
| `SHIFT(n)` | Horizontal pixel shift. First macro on a line centers the line; mid-line is a raw pixel advance. |

Color names for `COLOR()`: `DEFAULT`, `RED`, `GREEN`, `BLUE`, `LIGHTBLUE`, `PURPLE`, `YELLOW`, `BLACK`, `ADJUSTABLE`.

### Flow control

| Macro | Description |
|-------|-------------|
| `BOX_BREAK` | Advance to the next message page. |
| `BOX_BREAK_DELAYED(n)` | Delayed page advance. |
| `AWAIT_BUTTON_PRESS` | Pause until a button is pressed. |
| `QUICKTEXT_ENABLE` | Enable instant text display. |
| `QUICKTEXT_DISABLE` | Disable instant text display. |
| `PERSISTENT` | Keep the textbox open after the message ends. |
| `UNSKIPPABLE` | Prevent the player from skipping the message. |
| `EVENT` | Trigger a message event. |
| `OCARINA` | Display the ocarina staff. |

### Audio

| Macro | Description |
|-------|-------------|
| `SFX(bytes)` | Play a sound effect (2-byte sound ID). |
| `TEXT_SPEED(n)` | Set the text scroll speed. |
| `FADE(n)` | Fade the textbox. |

### Button icons

Inside string literals, bracket sequences render as controller button icons:

| Sequence | Icon |
|----------|------|
| `[A]` | A button |
| `[B]` | B button |
| `[C]` | C button |
| `[L]` | L button |
| `[R]` | R button |
| `[Z]` | Z button |
| `[C-Up]` | C-Up |
| `[C-Down]` | C-Down |
| `[C-Left]` | C-Left |
| `[C-Right]` | C-Right |
| `[Control-Pad]` | Analog stick |
| `[D-Pad]` | Directional pad |

---

## Constraints

### Only one translation active at a time

Unlike the asset override system, only a single translation file can be active at once. There is no stacking or merging of multiple translation mods. If two mods each ship a translation file, the user must choose one.

### Page count must match the original

The number of `BOX_BREAK` macros in a translation must exactly match the original message. The game advances pages against the original message data — adding extra `BOX_BREAK`s causes the game to read past the end of that data and crash.

If a translation genuinely needs more pages than the original provides, ship a companion mod that patches the relevant entry in `nes_message_static` to have the required page count, then write the translation to match that patched version.

### Right-to-left languages

RTL rendering is not yet supported. It is planned for a future update.

### JPN Untranslated text

Japanese font support for untranslated messages is not currently supported.  This is because Japanese text uses a complex character set (Kanji) that requires extra work to display correctly, and that work is not done yet. If you want Japanese text to use the custom font, you can add a translation for it in your translation file — translated messages will use the custom font just fine.

---

## Custom Fonts

Languages that use scripts outside basic Latin — such as Russian, Greek, or Arabic — require a font that includes those characters. The default fonts do not cover these ranges, so a translation mod targeting such a language should bundle a compatible `.ttf` or `.otf` alongside the translation file.

Place TrueType (`.ttf`) or OpenType (`.otf`) font files under `fonts/` in your `.o2r` archive:

```
fonts/MyFont.ttf
```

Once the archive is loaded the font appears in the **Font** dropdown in the menu.

:::note
Fonts are loaded at startup. If you add a font archive while the game is already running, a restart is required before it appears.
:::
