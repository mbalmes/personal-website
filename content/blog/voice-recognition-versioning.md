---
title: "Speech recognition needs versioning"
date: 2019-10-01
draft: false
---

I feel betrayed. I let Amazon Alexa into my house and let her listen to all my amazing conversations that I have and all I ask is that she turns on the lights for me. But, now half the time I ask her to "turn on all my lights" she response "sorry, I didn't find a device called northern lights" or "which one did you mean?" She used to work so amazing, but has gotten progressively worse over time. The worse part is that I know Amazon employees have listend on my conversations with her
because I have called her some very mean words very loudly and they've got to have some system to flag those, right? But, here we are. I don't actually know where my Alexa is because I threw her across the room somewhere and I haven't found her yet.

I would be so much happier if speech recogition platforms like Amazon Alexa and Apple's Siri had versioning and I could opt of updates when they break my use cases. It seems like a win-win situation too. I get more stability and they get a very useful metric, percentage of rollbacks. Want to know how well your update to you speech recognition went? What percentage of users went back to the previous update? The problem with speech recognition is that it's hard to make an objectively better improvement to them. An improvement for many might be a regression for a smaller group. As a web developer, I was taught to uphold backwards compatability and consistency, but for some reason speech recognition gets a pass.

I understand that when I bought my Alexa I wasn't buying the speech recognition. I was buying a device that connected me to an ecosystem beyond my control, but I would at least like to maintain the functionality I started with. I'm looking at setting up [mycroft](https://mycroft.ai/) on some Raspberry PIs right now because I would rather have a worse performing platform that is consitently mediocre than one that is sometimes amazing and sometimes useless.