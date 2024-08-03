# Debunking Skylanders NFC Card Myths and How to Write Them #
Greetings,

So, there is still quite a lot of drama around those NFC cards and how to write on them. Here, I will try to debunk some of the things I've found. 

First, look for these parameters in the listing of the cards: 
 ![Alt Tag](https://i.ibb.co/nB9p8p9/image.png)
The first column is required, the second column is good to have (but not necessary), and the third column should be avoided like the plague. 

However, there are mainly two types of cards people are getting:

**UID Re-Writable Cards**

**UID Locked Cards**
 
Now, both types of cards work for "normal" Skylanders (I call "normal" everything but Senseis from Imaginators) 

The **UID Re-Writable Cards** are the ones you want, as they are easier to use, can be formatted, and will never be rendered unusable by a wrong data flash.

The **UID Locked Cards** will also work, but for these, you need to prepare your NFC dumps before flashing them. This is because the dumps need to be adjusted for the card's UID, which will always remain the factory UID. This NFC dump preparation is done using a software called 'TheSkyLib,' which I will discuss later. 

Now, you also have two ways of physically writing to those tags

**External NFC Writer (ACR122U)**

**Android Phones' Native NFC**

**PN532** (TODO)
 
The **External NFC Writer (ACR122U)** is mainly what you need because with such a writer and UID unlocked cards, you can easily flash all kinds of Skylanders, including Senseis from Imaginators.

Yes, I repeat, with ACR122U NFC Writer and UID Re-Writable cards, you can flash Imaginators as well as any other Skylanders. 
This is possible because the Windows implementation on "Mifare Windows Tool" (the software we use for flashing) can actually change and reset UIDs on the tags, but only if you have a UID re-writable tag, of course. 

Now, on **Android Phones' Native NFC**, things are a bit more involved.

First, you need to check if your phone's NFC is compatible with the MIFARE Classic Tool (MCT) app.
Compatible Devices : https://github.com/ikarus23/MifareClassicTool/blob/master/COMPATIBLE_DEVICES.md
Incompatible Devices: https://github.com/ikarus23/MifareClassicTool/blob/master/INCOMPATIBLE_DEVICES.md.

From what I've gathered, there is no support for UID change on Android. Therefore, any type of card here will be considered UID locked since the phone won't be able to modify their UIDs.

To solve this, you need to prepare each dump file and adjust it to match the card's factory UID before flashing it. This process is done using a software called TheSkyLib (https://github.com/DevZillion/TheSkyLib). 

Another catch with using an Android phone and this dump preparation method is that you won't be able to get Senseis working straight away on most cards 

Lastly, there are two types or generations of NFC Cards, that you need to know about:

**GEN 1 - UID**

**GEN 2 - CUID**
 
These are only important if you are using an Android phone. Gen1 cards, with the dump preparation method, will work for all "normal" Skylanders, except Imaginators. 

Gen 2 cards will work for Imaginators as well, but the flashing process is even more involved. 

###########
## TL;DR Windows ##
###########

Get UID Re-Writable cards and an ACR122U NFC Writer on Windows, and you can flash all kinds of Skylanders, including Imaginators, and simply call it a day. 
###########
## TL;DR Android ##
###########

Alternatively, you can use Android Native NFC with UID Locked cards (all cards will be considered UID locked here). This method allows you to flash normal Skylanders (not Imaginators) on Gen1 cards if you prepare the dumps with TheSkyLib.

And on Android, you can flash Imaginators' Sensei dumps on Gen2 cards by preparing the dumps and using the extra flashing process explained here: https://devzillion.github.io/Docs/nfc/skylanders/writing-tags/android/Gen2/