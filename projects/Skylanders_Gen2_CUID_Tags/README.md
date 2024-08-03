# » Writing & Reading Skylander Tags Using Android Phones
## » Before Starting
Check if your phone isn't listed on the [Incompatible Devices List](https://github.com/ikarus23/MifareClassicTool/blob/master/INCOMPATIBLE_DEVICES.md).
###
If it isn't listed you can continue but if you want to be 100% sure your device will work check the [Compatible Devices List](https://github.com/ikarus23/MifareClassicTool/blob/master/COMPATIBLE_DEVICES.md) or check if your phone has a ``NXP NFC Controller``.
## » Required Tags
 ```c
Required:          |  Bonus: (Extra things)   |  Definectly Don't buy this:
  Block 0 Writable  |    S50  ( you can get)   |  S70
  1k                |    MF1                   |  MF4K
  13.56Mhz          |    'Chinese Magic Card'  |  UID Locked
  Gen 2 or CUID     |                          |  7 Byte UID
  (Re)Writable UID  |                          |
 ```

## » Converting Dumps from .key.dump or .bin to .mct (to write to tags)
> ### 1 - Download [MifareClassicTool](https://github.com/ikarus23/MifareClassicTool).
> ### 2 - Open it and click on this button xD.
> ![Screenshot_20220223-202830_MIFARE_Classic_Tool](https://user-images.githubusercontent.com/77107077/155384247-f4a76544-61fd-400e-a912-397ef71c62bb.jpg)
> ### 3 - Tap on 'Import/Export/Convert Files', then tap on Import and import the files you want to convert to .mct.
> ### 4 - Now go back to the same screen but click export as .mct, select the directory you want your files to be saved to and voilà, you're finished.

## » Getting a dump's .Keys to read the written tag (Required to write too)
> ### 1 - Tap on this nice button.
> ![Screenshot_20220223-195642_MIFARE_Classic_Tool](https://user-images.githubusercontent.com/77107077/155380473-f05846c5-7600-4ab9-9197-7babdd99d331.jpg)
> ### 2 - Select the dump you want to get Keys from.
> ![Screenshot_20220223-195646_MIFARE_Classic_Tool](https://user-images.githubusercontent.com/77107077/155380624-38abd49d-dd72-4689-8cb5-441dab088eaf.jpg)
> ### 3 - Now that you're on the dump editor click the top-right three dots and select 'Save Keys'.
> ### 4 - Now you have your .keys files ready to read your tag ;)

## » Writing Tags
>  Note: To write tags use std.keys and the keys extracted from the dump.
> ###  1 - Download [SkylandersAbleMifareClassicTool](https://mega.nz/file/D4sGjZSD#9wQRFeP3bXuL5pt722MFy-EbiZzH5sTjvVZmScSR4mw).
> ###  2 - Open it and allow access to all the files.
> ###  3 - Now go to your file manager and search for a folder called 'MifareClassicTool' on the _user_ root directory and you will see something like this.
> ![Screenshot_20220223-191518_My_Files](https://user-images.githubusercontent.com/77107077/155371570-02b4d6bd-cca2-41c5-b022-816e7cf0f86c.jpg)
```css
dump-files - The folder where you will add all your dumps in .mct
key-files - The folder where you will add you skylanders .keys
tmp - Don't touch it, it is used only by the app.
```
> ### 4 - Add your dumps in the _dump-files_ folder ;)
> ### 5 - Now you can go to the app and click on the 'write tag' button.
> ![Screenshot_20220223-192332_MIFARE_Classic_Tool](https://user-images.githubusercontent.com/77107077/155373612-a4252b58-a0ce-4cef-832a-6deef056bc5e.jpg)
> ### 6 - Mark the check-boxes like in this screenshot and then press the 'Select Dump' button, select your dump and when asked select all the sectors, EXCLUDING > > sector 0, now put your tag on the reader and click 'write'.
> ![Screenshot_MIFARE_Classic_Tool](https://user-images.githubusercontent.com/77107077/155374053-62645082-ca42-4799-b4e5-c6ad3304aa1f.jpg)
> ### 7 - Now repeat step 6 but write to ONLY sector 0.
> ### 8 - Your tag should be ready, but sometimes it won't work due to dump's UID not being written. In this case you should do it manually but if can't that means your tags aren't UID (Re)Writable.

## » Reading your tags using the just generated .keys
>### 1 - Tap on this magic button.
>![Screenshot_20220223-201818_MIFARE_Classic_Tool](https://user-images.githubusercontent.com/77107077/155382389-6f747f14-fc49-4ad7-ac41-5ab589c49054.jpg)
>### 2 - Select the .keys files you just made on the previous step and tap on this button.
>![Screenshot_20220223-201824_MIFARE_Classic_Tool - Copy](https://user-images.githubusercontent.com/77107077/155382780-4a368d6a-2f5f-49b3-8b74-542bd1d436a1.jpg)

## » Common problems with common solutions
### This isn't a problem, just info everyone should know
> Every Skylander has a Sector 0 with the same KeyA that is '4B0B20107CCB'

### My tag is not working
> Check that the UID from your tag is matching the UID from the dump, if not change the UID to one matching the dump.
> Check that your ID is similar to the dump as much as possible.
> Consider getting new tags that *work*.
> Consider buying a real nfc reader and writer like the ACR122U lol.

### Tested Tags
> https://ebay.to/35TxcVz

This should work, may take a couple of tries, good luck!
