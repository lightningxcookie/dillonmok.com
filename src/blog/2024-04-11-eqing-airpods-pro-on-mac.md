---
permalink: /blog/eqing-airpods-pro-on-mac/
date: 2024-04-11T22:14:00Z 
excerpt: "A simple automation trick for applying EQ with AirPods on the Mac."
tags: ["audio", "apps"]
title: "EQing AirPods Pro on the Mac"
---
Earlier this year, I wrote about [the setting for a more balanced sound out of AirPods Pro](https://dillonmok.com/articles/balanced-sound-airpods/). It works well for me and is what I use on my iOS devices, however this setting simply does not exist on the Mac.

Lucky for me, macOS allows apps to control system audio so there is no need for the [Headphones Accomodation](https://support.apple.com/en-au/guide/airpods/devcd05671ab/web) setting. Instead, I have come up with a simple solution that gives maximum control and the optimal listening experience for AirPods Pro. Let me explain.

It starts with [SoundSource](https://rogueamoeba.com/soundsource/), the excellent utility by RogueAmoeba for controlling audio on your Mac. One of the many features it has is the ability to apply parametric EQ settings system-wide. This is great for people who like to go in and tweak the EQ of their headphones/speakers exactly to their preferences. My ears are not quite discerning enough to make such often small adjustments, so I prefer to use a more methodical approach and use presets from the [AutoEQ](https://autoeq.app) repository. SoundSource thankfully has these presets built-in under the Headphones EQ effect. 

<img src="https://cdn.dillonmok.com/eqing-airpods-on-mac-00001.png" />

All I have to do is select the Headphones EQ profile for the AirPods Pro 2, turn on the setting and enjoy music with a balanced, neutral tuning.

<img src="https://cdn.dillonmok.com/eqing-airpods-on-mac-00002.png" />

That's great but what happens when I want to listen to audio through my speakers or another pair of headphones instead? SoundSource lives in the menu bar, so I just need to go up to the menu bar, click SoundSource and turn off the Headphones EQ setting with a single switch. Easy, right?

You'd be wrong because I am certain type of computer nerd who is incredibly lazy, and clicking a single button every time I put on or take off headphones is too much work. 

[BetterTouchTool](https://folivora.ai) to the rescue! BTT has an automation trigger for when Bluetooth devices connect and disconnect. This means I can make things happen when my AirPods connect/disconnect, like turning on/off an EQ setting. SoundSource provides an interface to most of its features through the Shortcuts app, so I built a shortcut to run through BetterTouchTool.

<img src="https://cdn.dillonmok.com/eqing-airpods-on-mac-00004.png" />

In BetterTouchTool I pass the parameter "connect" or "disconnect" to the shortcut to determine whether the effect should be turned on or off.

<img src="https://cdn.dillonmok.com/eqing-airpods-on-mac-00003.png" />

Just like that, the EQ setting is automatically applied when I use my AirPods Pro and turned off accordingly. An EQ setting built directly into AirPods would be more seamless, sure (akin to the Headphones Accomodation setting on iOS), but it likely wouldn't provide the same granular control over the sound that I have using SoundSource. With a few simple automation tricks, you can replicate "missing" features of your devices and often go beyond. That's the beauty of automation.
