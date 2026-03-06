# Audio Modding

There are 3 types of audio modding for Ship of Harkinian.
- Sample Replacements
- Streamed Audio
- Custom Sequences

They are different types and have their own limitations. 

Sample Replacements can only replace esisting SFX or Voice samples in OoT, must be same samplerate (hz) as the original audio and in mono. Instruments are pitchshifted in code to play different notes

Streamed Audio is the way of converting music files (mp3, ogg, wav etc) to a format that Ship of Harkinian can handle. Adding to many streamed audio to SoH may cause instability right now.

Sequences are midi files that has been converted to a sequence that SoH can take. This is compatible with sample replacement mods. 

## Sample Replacements

Sample Replacements requires Jamer's SOH-AudioTool - https://github.com/Jameriquiah/SoH-AudioTool/releases

Information about the audio files can be found [**here**](https://docs.google.com/spreadsheets/u/0/d/1Yf_1Juzj06RZNmuZsWBSSX5ZD7wTRwjf8WxE25-2pJI/htmlview)

This tool can take .wav files and convert it to a format Ship of Harkinian expects samples to be in.

::Warning
Audio difference between version starting with SoH 9.1. Audio mods made for SoH newer than 9.1 is not compatible version before 9.1
::

To explain the warning. Post 9.1 version expects a `_META` in file names while pre 9.1 does not expect it. To make it compatible you either have to remove or add `_META` to your filenames ie `Adult Link - Attack 1_META` for post 9.1 builds while `Adult Link - Attack 1` for pre 9.1 builds

You need to prepare audio files for conversion.
- Mix the audio down to mono
- Match the samplerate (hz) to the target sample being replaced
- If Replacing instruments/song you need to match pitch/note aswell

Loop points are **NOT** possible in sample replacements. The workaround is to extend the sample to a length it wont be cutoff. 

To adjust samplerate you can do this in Audacity (a free tool). You load your audio and select `Tracks` then select `Resample` to then change the samplerate of the audio.

Once you have prepared the .wav files. Open SOH-AudioTool. Import the .wav files to the tool. Write in each box what the exported name to be (Recommend naming export file what its replacing ie `Adult Link - Attack 1_META`). Export new samples

After conversion you need to adjust the files so they are stored in folders matching SoH. `/audio/samples/`. You are to place all new custom samples in the samples folder.

Now pack it into a .o2r file or a .otr file and it should be ready for Ship of Harkinian.

::tip
Some samples in OoT are reused in multiple places, if you cant find the sample file try to replace something else. Renaming sample files is fine for this step
::

## Streamed Audio

Requires __**Future**__ https://github.com/Malkierian/future/releases/tag/0.1.0
Using Future you can select a folder with audio files, select if they are a fanfare, set loop points. Then export it to a .o2r file to then add to the mods folder.

You open Future, select Create Archive, Custom Audio then select Streamed Audio

You select the folder you wish to convert with Future. Click on the toggle per song to indicate if audip is a fanfare. Set loop points in terms of samples (a timeunit).

Once done you select an output folder for the .o2r and select Pack Archive.

## Custom Sequences

**TODO: Add information about How to Convert midi to sequence**

There are 2 repositories that have premade custom sequence packs for SoH

Darunia's Joy - https://github.com/DaruniasJoy/OoT-Custom-Sequences/releases/tag/latest/
Ganondorf's Organ - https://github.com/GanondorfsOrgan/Ganondorfs-Organ/releases/tag/latest/

The main difference is Darunia's Joy are DMCA friendly while Ganondorf's Organ have songs that arent included in Darunia's Joy due to DMCA possibilities

We have a contributor in the HM64 Discord where he have made a pack himself
https://github.com/Estacaco/Scarecrows-Selection
