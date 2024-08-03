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
## » Writing Tags
>  Note: To write tags use std.keys and the keys extracted from the dump.
> ###  1 - Download [MIFARE Classic Tool](https://github.com/ikarus23/MifareClassicTool/releases/).
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
